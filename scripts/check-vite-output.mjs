import { readFileSync } from "node:fs";

const bundle = readFileSync("dist/repro_esm_entrypoint/index.js", "utf8");

if (!bundle.includes("worker_entry_default = {}")) {
	throw new Error("Vite did not synthesize the expected empty default export");
}

console.log("Reproduced: Vite synthesized an empty default export.");
