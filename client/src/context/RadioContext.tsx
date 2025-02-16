import { createContext, Dispatch, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { Track } from "../types/RadioTypes.ts";

interface RadioContextType {
	currentTrack: Track | null;
	setCurrentTrack: Dispatch<React.SetStateAction<Track | null>>;
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
	const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const audioElementRef = useRef<HTMLAudioElement>(null);

	useEffect(() => {
		const fetchRandomTrack = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}music/tracks/`);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const data = await response.json();
				const trackData: Track = {
					title: data.title,
					artist: data.artist,
					featuring_artists: data.featuring_artists,
					src: data.s3_url,
				};
				setCurrentTrack(trackData);
			} catch (error) {
				console.error("Error fetching track:", error);
			}
		}

		fetchRandomTrack()
	}, []);

	const contextValue = {
		currentTrack,
		setCurrentTrack,
		trackIndex,
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