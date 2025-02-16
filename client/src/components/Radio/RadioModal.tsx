import React, { useRef } from 'react';
import { motion } from "framer-motion";
import { TogglePlayButton } from './TogglePlayButton';
import { Track } from '../../types/RadioTypes';
import { ProgressBar } from './ProgressBar';
import { TimeDisplay } from './TimeDisplay';
import { formatPlaybackTime } from '../../hooks/Radio/useFormatTime';

interface RadioModalProps extends Track {
	duration: number;
	currentTime: number;
}

const RadioModal: React.FC<RadioModalProps> = ({
	title,
	artist,
	featuring_artists,
	duration,
	currentTime,
}: RadioModalProps) => {
	const dragConstraintsRef = useRef(null);

	return (
			<motion.div className="fixed w-full h-full -z-50" ref={dragConstraintsRef}>
				<motion.div 
					drag 
					whileDrag={{ scale: 1.01 }} 
					whileTap={{ cursor: "grabbing" }}
					dragElastic={0.1} 
					dragMomentum={false} 
					dragConstraints={dragConstraintsRef} 
					className="bg-softCream border-[0.5px] border-black p-4 w-80 shadow-lg"
				>
					<div className='flex justify-between mb-2'>
						<div className='text-lg'>Beow FM</div>
						<button>✖</button>
					</div>
					<ProgressBar 
						currentTime={currentTime}
						duration={duration}
					/>
					<div className="mb-1 ">Channel: Weekly Assortments</div>
					<div className="border-b border-black mb-2"></div>
					<TimeDisplay 
						currentTime={formatPlaybackTime(currentTime)}
						duration={formatPlaybackTime(duration)}
					/>
					<div className='text-lg'>{title}</div>
					<div>{artist} - {featuring_artists}</div>
					<div className="flex justify-between items-center mt-4">
						<button>⏮</button>
						<TogglePlayButton />
						<button>⏭</button>
						<button>❤️</button>
						<button>🔗</button>
					</div>
				</motion.div>
			</motion.div>
	);
};

export default RadioModal;
