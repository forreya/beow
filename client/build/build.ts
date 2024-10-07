import path from "path";
import { exec } from "child_process";
import util from "util";
import chalk from "chalk";

const fileLineRegex = /.*\.(tsx|ts|jsx|png|jpg|webp|svg|css|html|mjs)\(\d+,\d+\):/;
const tsErrorCodeRegex = /TS\d+:/;

const handleTSCompileError = (stdout: string): void => {
	const message = stdout.split("\n").map((word) => {
		let modifiedWord = word.replace(fileLineRegex, (match) => chalk.magenta(match.slice(0, -1)) + " =>");
		modifiedWord = modifiedWord.replace(tsErrorCodeRegex, (match) => chalk.gray(match));
		modifiedWord = modifiedWord.replace(/error/g, chalk.red("error"));
		modifiedWord = modifiedWord.replace(/warning/g, chalk.yellow("warning"));
		return modifiedWord;
	}).join("\n\n").trim();
	console.log("\n" + message + "\n");
}

const build = async (): Promise<boolean> => {
	const promisifiedExec = util.promisify(exec);
	try {
		await promisifiedExec("bunx tsc", {cwd: path.join(import.meta.dir, "/..")});
		await promisifiedExec("bunx --bun vite build", {cwd: path.join(import.meta.dir, "/..")});
		await promisifiedExec( "bunx tailwindcss -i ./src/styles/main.css -o ./dist/output.css --minify", {cwd: path.join(import.meta.dir, "/..")});
		return true;
	} catch (error: unknown) {
		if (error && typeof error == "object" && "stdout" in error && typeof error.stdout == "string" && "cmd" in error) {
			if (error.cmd === "bunx tsc") {
				handleTSCompileError(error.stdout);
			}
		}
		return false;
	}
}

export default build;