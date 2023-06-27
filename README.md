# Edge Runtime Adapter for Node.js

## ⚠️ Deprecated.
Use [npmjs.com/package/node-edge-server](https://www.npmjs.com/package/node-edge-server) instead.

----

> Sharing the same code between node and other edge runtimes (Deno, Cloudflare workers, Bun, ...)

```ts
import { serve } from 'node-edge-runtime'

serve({
  fetch: mainFetch,
  port: 3000, // Port number, default is 3000
})

async function mainFetch(req: Request) {
  const u = new URL(req.url)
  return new Response(u.toString())
}

```

Support both CommonJS and ESM.

View code: [npmjs.com/package/node-edge-runtime?activeTab=code](https://www.npmjs.com/package/node-edge-runtime?activeTab=code)

## Original Author

Yusuke Wada <https://github.com/yusukebe>

## License

MIT
