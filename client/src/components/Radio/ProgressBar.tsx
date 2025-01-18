interface ProgressBarProps {
	currentTime: number;
	duration: number;
}

export const ProgressBar = ({currentTime, duration}: ProgressBarProps) =>{
	return (
		<div className="bg-lightBeige h-2 mb-4 relative overflow-hidden">
			<div 
				className="bg-oliveBrown h-full" 
				style={{ width: `${(currentTime * 100) / duration}%` }}
			/>
		</div>
	);
  };