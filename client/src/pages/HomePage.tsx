import { Radio } from "../components/Radio/Radio";
import { RadioProvider } from "../context/RadioContext";

const HomePage = () => {
	return (
		<div>
			<h1 className="text-6xl font-oldComputer">HEADER</h1>
			<RadioProvider>
				<Radio />
			</RadioProvider>
		</div>
	)
}

export default HomePage;