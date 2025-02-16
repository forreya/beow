import { useRadioContext } from "../../context/RadioContext"
import { AudioPlayer } from "./AudioPlayer";
import RadioModal from "./RadioModal";

export const Radio = () => {
	const {currentTrack, audioElementRef, currentTime, duration} = useRadioContext();

	return (
		currentTrack ?
		<div>
			<AudioPlayer
				audioElementRef={audioElementRef}
				audioSource={currentTrack.src}
			/>
			<RadioModal
				title={currentTrack.title}
				artist={currentTrack.artist}
				featuring_artists={currentTrack.featuring_artists}
				src={currentTrack.src}
				duration={duration}
				currentTime={currentTime}
			/>
		</div> :
		<h1>Loading...</h1>
	)
}