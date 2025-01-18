const padSingleDigitTime = (num: number): string => {
	const numStr = num.toString();
	if (num < 10) {
		return "0" + numStr
	}
	return numStr;
}

export const formatPlaybackTime = (timeInSeconds: number): {minutes: string, seconds: string} => {
	const minutes = Math.floor(timeInSeconds / 60);
	const seconds = Math.floor(timeInSeconds - minutes * 60);

	return {
		minutes: padSingleDigitTime(minutes),
		seconds: padSingleDigitTime(seconds)
	}
}