import { useRadioContext } from "../../context/RadioContext";

interface AudioPlayerProps {
	audioSource: string;
	audioElementRef: React.RefObject<HTMLAudioElement>;
}

export const AudioPlayer = ({audioSource, audioElementRef}: AudioPlayerProps) => {
	const {setCurrentTime, setDuration} = useRadioContext()

	const handleTimeUpdate = (event: React.SyntheticEvent) => {
		const target = event.target as HTMLAudioElement;
        const currTimeInSeconds = Math.floor(target.currentTime);
        setCurrentTime(currTimeInSeconds);
    }

	const handleMetadataLoaded = (event: React.SyntheticEvent) => {
		const target = event.target as HTMLAudioElement;
		setDuration(target.duration);
	}

	return (
		<div>
			<audio
				src={audioSource}
				ref={audioElementRef}
				onTimeUpdate={handleTimeUpdate}
				onLoadedMetadata={handleMetadataLoaded}
			/>
		</div>
	)
}