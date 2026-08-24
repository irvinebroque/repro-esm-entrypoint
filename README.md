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

## Local development still works

The source Worker also exposes an RPC method from its named entrypoint. A
separate caller Worker binds directly to `NamedEntrypoint`, despite the target
Worker having no default export.

```sh
npm run dev
curl http://localhost:8787
```

The response comes from an RPC call through the local Service binding:

```json
{ "greeting": "Hello, local dev, from the named entrypoint" }
```

This uses the Vite plugin's `auxiliaryWorkers` option, with the caller as the
HTTP-facing Worker and the no-default-export Worker as the bound auxiliary
Worker.

- [RPC named entrypoints](https://developers.cloudflare.com/workers/runtime-apis/bindings/service-bindings/rpc/#named-entrypoints)
- [Local development with multiple Workers](https://developers.cloudflare.com/workers/local-development/multi-workers/)
