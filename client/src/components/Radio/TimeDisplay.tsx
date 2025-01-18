interface timeObject {
	minutes: string;
	seconds: string;
};

interface TimeDisplay {
	currentTime: timeObject;
	duration: timeObject;
}

export const TimeDisplay = ({currentTime, duration}: TimeDisplay) =>{
	return (
		<div>
			{currentTime.minutes}:{currentTime.seconds} / {duration.minutes}:{duration.seconds}
		</div>

	);
};