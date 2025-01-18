import { useRadioContext } from "../../context/RadioContext"
import { AudioPlayer } from "./AudioPlayer";
import RadioModal from "./RadioModal";

export const Radio = () => {
	const {currentTrack, audioElementRef, currentTime, duration} = useRadioContext();

	return (
		<div>
			<AudioPlayer
				audioElementRef={audioElementRef}
				audioSource={currentTrack.src}
			/>
			<RadioModal
				title={currentTrack.title}
				artist={currentTrack.artist}
				src={currentTrack.src}
				duration={duration}
				currentTime={currentTime}
			/>
		</div>
	)
}