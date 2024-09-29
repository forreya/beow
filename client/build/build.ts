import path from "path";
import { exec } from "child_process";
import util from "util";

const build = async () => {
    const promisifiedExec = util.promisify(exec);
    try {
        await promisifiedExec("bun run build", {cwd: path.join(import.meta.dir, "/..")});
        await promisifiedExec( "bunx tailwindcss -i ./src/styles/main.css -o ./dist/output.css --minify", {cwd: path.join(import.meta.dir, "/..")});
    } catch (error) {
        console.error("\nError while running build script: ", error);
    }
}

export default build;