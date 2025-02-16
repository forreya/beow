import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { Radio } from "../components/Radio/Radio";
import { RadioProvider } from "../context/RadioContext";

const HomePage = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			{isLoading ? (
				<div className="w-screen h-screen bg-lightBeige" onClick={() => setIsLoading(false)}>
					<LoadingScreen onComplete={() => setIsLoading(false)}/>
				</div>
			) : (
				<div className="main-content bg-lightBeige">
					<h1 className="text-6xl">HEADER</h1>
					<RadioProvider>
						<Radio />
					</RadioProvider>
				</div>
			)}
		</>
	)
}

export default HomePage;