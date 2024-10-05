import React, { useRef } from 'react';
import { motion } from "framer-motion";

interface RadioModalProps {
	title: string;
	artist: string;
	duration: number;
	currentTime: number;
}

const RadioModal: React.FC<RadioModalProps> = ({
	title,
	artist,
	duration,
	currentTime,
}) => {
	const constraintsRef = useRef(null);

	return (
		<motion.div className="fixed w-full h-full -z-50" ref={constraintsRef}>
			<motion.div 
				drag 
				whileDrag={{ scale: 1.01 }} 
				whileTap={{ cursor: "grabbing" }}
				dragElastic={0.1} 
				dragMomentum={false} 
				dragConstraints={constraintsRef} 
				className="bg-softCream border-[0.5px] border-black p-4 w-80 shadow-lg"
			>
				<div className='flex justify-between mb-2'>
					<div className='text-lg'>Beow FM</div>
					<button>✖</button>
				</div>
				<div className="bg-lightBeige h-2 mb-4 relative overflow-hidden">
					<div className="bg-oliveBrown h-full" style={{ width: `${(currentTime * 100) / duration}%` }}></div>
				</div>
				<div className="mb-1 ">Channel: Weekly Assortments</div>
				<div className="border-b border-black mb-2"></div>
				<div>
					00:{currentTime} / 00:{duration}
				</div>
				<div className='text-lg'>{title}</div>
				<div>{artist}</div>
				<div className="flex justify-between items-center mt-4">
					<button>⏮</button>
					<button>⏯</button>
					<button>⏭</button>
					<button>❤️</button>
					<button>🔗</button>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default RadioModal;
