import fs from "fs";

const debounce = <T extends unknown[]>(funcToDebounce: (...args: T) => void) => {
	let timer: ReturnType<typeof setTimeout> | undefined = undefined
	return (...args: T) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			funcToDebounce(...args);
		}, 50);
	}
}

const triggerExtensions = /^.*\.(tsx?|jsx?|png|jpg|webp|svg|css)$/;

const fileWatcher = fs.watch(
	import.meta.dir + "/../src",
	{
		recursive: true
	},
	debounce((_, filename) => {
		if (typeof filename !== "string") {
			return;
		}
		if (!triggerExtensions.exec(filename)) {
			return;
		}
		console.log("Firing up build engine...");
		// Run build script here
		console.log("Rebuild completed.")
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

console.log("Firing up build engine...");
// Run build script here
console.log("Rebuild completed.")