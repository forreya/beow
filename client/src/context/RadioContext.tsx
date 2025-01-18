import { createContext, Dispatch, ReactNode, useContext, useRef, useState } from "react";
import { sampleTracks } from "../assets/test/sampleAudioData.ts"
import { Track } from "../types/RadioTypes.ts";

interface RadioContextType {
	currentTrack: Track;
	setCurrentTrack: Dispatch<React.SetStateAction<Track>>;
	setTrackIndex: Dispatch<React.SetStateAction<number>>;
	audioElementRef: React.RefObject<HTMLAudioElement>;
	currentTime: number;
	setCurrentTime: Dispatch<React.SetStateAction<number>>;
	duration: number;
	setDuration: Dispatch<React.SetStateAction<number>>;
}

const RadioContext = createContext<RadioContextType | undefined>(undefined);

export const RadioProvider = ({children} : {children: ReactNode;}) => {
	const [trackIndex, setTrackIndex] = useState<number>(0);
	const [currentTrack, setCurrentTrack] = useState<Track>(sampleTracks[trackIndex]);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const audioElementRef = useRef<HTMLAudioElement>(null);
	const contextValue = {
		currentTrack,
		setCurrentTrack,
		setTrackIndex,
		audioElementRef,
		currentTime,
		setCurrentTime,
		duration,
		setDuration,
	};
	return (
		<RadioContext.Provider value={contextValue}>
			{children}
		</RadioContext.Provider>
	)
}

export const useRadioContext = (): RadioContextType => {
	const ctx = useContext(RadioContext);
	if (ctx == undefined) {
		throw new Error(
			'useRadioContext must be used within a RadioProvider.'
		  );
	}
	return ctx;
}