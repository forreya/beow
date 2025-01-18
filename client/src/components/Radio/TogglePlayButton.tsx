import { useEffect, useState } from "react";
import { useRadioContext } from "../../context/RadioContext";


export const TogglePlayButton = () => {
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const {audioElementRef} = useRadioContext()

	useEffect(() =>{
		if (isPlaying) {
		  audioElementRef.current?.play();
		} else {
		  audioElementRef.current?.pause();
		}
	  }, [isPlaying, audioElementRef]);

	return (
		<button onClick={() => setIsPlaying((previousValue) => !previousValue)}>⏯</button>
	)
}