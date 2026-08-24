import { WorkerEntrypoint } from "cloudflare:workers";

// This is intentionally the only entrypoint. A named WorkerEntrypoint export is
// valid module-worker syntax and cannot run as a Service Worker.
export class NamedEntrypoint extends WorkerEntrypoint {
	fetch(): Response {
		return new Response("Hello from the named entrypoint");
	}

	greet(name: string): string {
		return `Hello, ${name}, from the named entrypoint`;
	}
}
