import React, { useEffect, useMemo, useState } from "react";

interface LoadingScreenProps {
	onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
	const [lines, setLines] = useState<string[]>([]);
	const [step, setStep] = useState<number>(0);

	const beowArt = String.raw`
	
             *     ,MMM8&&&.            *
                  MMMM88&&&&&    .
                 MMMM88&&&&&&&
     *           MMM88&&&&&&&&								:::::::::::::::::::::::::::::::::::::::::
                 MMM88&&&&&&&&								
                 'MMM88&&&&&&'								██████╗  ███████╗   ██████╗   ██╗    ██╗
                   'MMM8&&&'      *							██╔══██╗ ██╔════╝  ██╔═══██╗  ██║    ██║
          |\___/|											██████╔╝ ███████╗  ██║   ██║  ██║ ██╗██║
          )     (             .              '				██╔══██╗ ██╔════╝  ██║   ██║  ██║███╗██║
         =\     /=											██║████║ ███████╗  ╚██████╔╝  ╚███╔███╔╝
           )===(       *									╚══════╝ ╚══════╝   ╚═════╝    ╚══╝╚══╝ 
          /     \
          |     |											:::::::::::::::::::::::::::::::::::::::::
         /       \
         \       /
  _/\_/\_/\__  _/_/\_/\_/\_/\_/\_/\_/\_/\_/\_
  |  |  |  |( (  |  |  |  |  |  |  |  |  |  |
  |  |  |  | ) ) |  |  |  |  |  |  |  |  |  |
  |  |  |  |(_(  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

`;

	const beowArt2 = String.raw`

             *     ,MMM8&&&.            *
                  MMMM88&&&&&    .
                 MMMM88&&&&&&&								
     *           MMM88&&&&&&&&								:::::::::::::::::::::::::::::::::::::::::
                 MMM88&&&&&&&&								
                 'MMM88&&&&&&'								██████╗  ███████╗   ██████╗   ██╗    ██╗
                   'MMM8&&&'      *							██╔══██╗ ██╔════╝  ██╔═══██╗  ██║    ██║
          |\___/|											██████╔╝ ███████╗  ██║   ██║  ██║ ██╗██║
         =) ^Y^ (=            .              '				██╔══██╗ ██╔════╝  ██║   ██║  ██║███╗██║
          \  ^  /											██║████║ ███████╗  ╚██████╔╝  ╚███╔███╔╝
           )=*=(       *									╚══════╝ ╚══════╝   ╚═════╝    ╚══╝╚══╝ 
          /     \
          |     |											:::::::::::::::::::::::::::::::::::::::::
         /| | | |\
         \| | |_|/\
  _/\_/\_//_// ___/\_/\_/\_/\_/\_/\_/\_/\_/\_
  |  |  |  | \_) |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

`;

	const messages = useMemo(
		() => [
			{
				initialText: "Booting up _",
				initialDelay: 500,
				text: "Initializing default server protocols",
				delay: 0,
			},
			{ text: "Scanning for available cats", delay: 250 },
			{
				text: "Feline signature detected (ID: 8 - Bloncs)",
				delay: 750,
				disableAnimation: true,
			},
			{ text: "Waking up Bloncs", delay: 750 },
			{
				text: "Bloncs online.",
				delay: 750,
				disableAnimation: true,
			},
		],
		[]
	);

	const animateLine = (
		message: string,
		disableAnimation?: boolean,
		replaceExisting: boolean = false
	) => {
		if (replaceExisting) {
			setLines((prev) => {
				const newLines = [...prev];
				newLines[newLines.length - 1] = message;
				return newLines;
			});
		} else {
			setLines((prev) => [...prev, message]);
		}

		if (!disableAnimation) {
			const intervalId = setInterval(() => {
				setLines((prev) => {
					const newLines = [...prev];
					const lastLine = newLines[newLines.length - 1];
					if (!lastLine.endsWith("...")) {
						newLines[newLines.length - 1] = lastLine + ".";
					} else {
						clearInterval(intervalId);
						newLines[newLines.length - 1] = lastLine + " done."
						setStep((prev) => prev + 1);
					}
					return newLines;
				});
			}, 300);
		} else {
			setStep((prev) => prev + 1);
		}
	};

	useEffect((): void | (() => void) => {
		if (step < messages.length) {
			const { initialText, initialDelay, text, delay, disableAnimation } =
				messages[step];

			const runMessage = (replaceExisting: boolean = false) => {
				animateLine(text, disableAnimation, replaceExisting);
			};

			if (initialText) {
				setLines((prev) => [...prev, initialText]);
				setTimeout(() => {
					setLines((prev) => [...prev.slice(0, -1), text]);
					setTimeout(() => runMessage(true), delay);
				}, initialDelay);
			} else {
				setTimeout(() => runMessage(), delay);
			}
		}
		// Art rendering
		else if (step === messages.length) {
			setLines((prev) => [...prev, ""]);
			let index = 0;
			const artInterval = setInterval(() => {
				index++;
				setLines((prev) => {
					const newLines = [...prev];
					newLines[newLines.length - 1] = beowArt.substring(0, index);
					return newLines;
				});
				if (index >= beowArt.length) {
					setLines((prev) => [...prev.slice(0, -1), beowArt2]);
					clearInterval(artInterval);
					setStep((prev) => prev + 1);
				}
			}, 5);
			return () => clearInterval(artInterval);
		}
		// Terminal countdown
		else if (step === messages.length + 1) {
			let count = 10;
			setLines((prev) => [...prev, `Press anywhere to enter (${count})`]);
			const countdownInterval = setInterval(() => {
				count--;
				if (count == 0) {
					clearInterval(countdownInterval);
					onComplete();
				} else {
					setLines((prev) => [
						...prev.slice(0, -1),
						`Press anywhere to enter (${count})`,
					]);
				}
			}, 1000);
			return () => clearInterval(countdownInterval);
		}
	}, [step, onComplete, messages, beowArt, beowArt2]);

	return (
		<>
			{lines.map((line, index) => (
				<pre
					className=""
					key={index}
					style={{ margin: 0, whiteSpace: "pre-wrap" }}
				>
					{line}
				</pre>
			))}
		</>
	);
};

export default LoadingScreen;
