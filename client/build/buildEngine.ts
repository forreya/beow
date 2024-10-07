import fs from "fs";
import build from "./build";
import path from "path";
import chalk from "chalk";

const debounce = <T extends unknown[]>(funcToDebounce: (...args: T) => void) => {
	let timer: ReturnType<typeof setTimeout> | undefined = undefined
	return (...args: T): void => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			funcToDebounce(...args);
		}, 50);
	}
}

const triggerExtensions = /^.*\.(tsx?|jsx?|png|jpg|webp|svg|css|html)$/;

const fileWatcher = fs.watch(
	path.join(import.meta.dir, "/../src"),
	{
		recursive: true
	},
	debounce(async (_, filename) => {
		if (typeof filename !== "string") {
			return;
		}
		if (!triggerExtensions.exec(filename)) {
			return;
		}
		console.log("------------------------")
		console.log("Firing up build engine...");
		const didBuildSucceed = await build();
		if (didBuildSucceed) {
			console.log(chalk.green("Rebuild completed."));
		} else {
			console.log(chalk.red("Rebuild failed 😔"));
		}
	})
);

process.on("SIGINT", () => {
	try {
		console.log("\nShutting off build engine...");
		fileWatcher.close();
	} catch (error) {
		console.error("\n" + error);
	}
	process.exit(0);
})

console.log("------------------------")
console.log("Firing up build engine...");
const didBuildSucceed = await build();
if (didBuildSucceed) {
	console.log(chalk.green("Build completed."));
} else {
	console.log(chalk.red("Build failed 😔"));
}