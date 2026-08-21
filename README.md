# Named `WorkerEntrypoint` misdetected as a Service Worker

The source has a named `WorkerEntrypoint` and intentionally no default export.
This is ES module-only code.

```sh
npm install
npm run repro:wrangler
npm run repro:vite
```

- Wrangler incorrectly selects Service Worker format and fails.
- The Vite plugin warns that `default` is missing, then adds an empty default
  export to the bundle.
