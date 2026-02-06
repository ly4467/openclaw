globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, s as serve } from "./_libs/srvx.mjs";
import { d as defineHandler, H as HTTPError, t as toEventHandler, a as defineLazyEventHandler, b as H3Core, c as toRequest } from "./_libs/h3.mjs";
import { d as decodePath, w as withLeadingSlash, a as withoutTrailingSlash, j as joinURL } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import "./_libs/rou3.mjs";
function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event, opts) {
  const isSensitive = error.unhandled;
  const status = error.status || 500;
  const url = event.url || new URL(event.req.url);
  if (status === 404) {
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      const redirectTo = `${baseURL}${url.pathname.slice(1)}${url.search}`;
      return {
        status: 302,
        statusText: "Found",
        headers: { location: redirectTo },
        body: `Redirecting...`
      };
    }
  }
  if (isSensitive && !opts?.silent) {
    const tags = [error.unhandled && "[unhandled]"].filter(Boolean).join(" ");
    console.error(`[request error] ${tags} [${event.req.method}] ${url}
`, error);
  }
  const headers2 = {
    "content-type": "application/json",
    "x-content-type-options": "nosniff",
    "x-frame-options": "DENY",
    "referrer-policy": "no-referrer",
    "content-security-policy": "script-src 'none'; frame-ancestors 'none';"
  };
  if (status === 404 || !event.res.headers.has("cache-control")) {
    headers2["cache-control"] = "no-cache";
  }
  const body = {
    error: true,
    url: url.href,
    status,
    statusText: error.statusText,
    message: isSensitive ? "Server Error" : error.message,
    data: isSensitive ? void 0 : error.data
  };
  return {
    status,
    statusText: error.statusText,
    headers: headers2,
    body
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key2, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key2, value);
  }
});
const assets = {
  "/.well-known/clawdhub.json": {
    "type": "application/json",
    "etag": '"8a-lHw+JpZ8gDSu4F33syQW9n7XG7w"',
    "mtime": "2026-02-06T02:43:15.634Z",
    "size": 138,
    "path": "../public/.well-known/clawdhub.json"
  },
  "/assets/manrope-latin-300-normal-BXCth4v8.woff": {
    "type": "font/woff",
    "etag": '"4794-QvoUYR/wX9bnNMECY7FOcMw45Vk"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 18324,
    "path": "../public/assets/manrope-latin-300-normal-BXCth4v8.woff"
  },
  "/og.svg": {
    "type": "image/svg+xml",
    "etag": '"1088-c2VZtpZ25H8pTfAWIhRrpe3ugmE"',
    "mtime": "2026-02-06T02:43:15.635Z",
    "size": 4232,
    "path": "../public/og.svg"
  },
  "/.well-known/clawhub.json": {
    "type": "application/json",
    "etag": '"8a-lHw+JpZ8gDSu4F33syQW9n7XG7w"',
    "mtime": "2026-02-06T02:43:15.633Z",
    "size": 138,
    "path": "../public/.well-known/clawhub.json"
  },
  "/clawd-logo.png": {
    "type": "image/png",
    "etag": '"2745-BG2fBOF9tujUkUUfObXQ6H8mxF8"',
    "mtime": "2026-02-06T02:43:15.634Z",
    "size": 10053,
    "path": "../public/clawd-logo.png"
  },
  "/assets/manrope-latin-800-normal-BfWYOv1c.woff2": {
    "type": "font/woff2",
    "etag": '"3550-QKnjoePzn3B3IuRTUN0E58EuW0c"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 13648,
    "path": "../public/assets/manrope-latin-800-normal-BfWYOv1c.woff2"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"43-BEzmj4PuhUNHX+oW9uOnPSihxtU"',
    "mtime": "2026-02-06T02:43:15.636Z",
    "size": 67,
    "path": "../public/robots.txt"
  },
  "/logo192.png": {
    "type": "image/png",
    "etag": '"14e3-f08taHgqf6/O2oRVTsq5tImHdQA"',
    "mtime": "2026-02-06T02:43:15.638Z",
    "size": 5347,
    "path": "../public/logo192.png"
  },
  "/assets/manrope-latin-300-normal-BgxWhS7-.woff2": {
    "type": "font/woff2",
    "etag": '"3750-h1pcyZy58pzFTIToi+QzK6rZrPs"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 14160,
    "path": "../public/assets/manrope-latin-300-normal-BgxWhS7-.woff2"
  },
  "/logo512.png": {
    "type": "image/png",
    "etag": '"25c0-RpFfnQJpTtSb/HqVNJR2hBA9w/4"',
    "mtime": "2026-02-06T02:43:15.632Z",
    "size": 9664,
    "path": "../public/logo512.png"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": '"7212-a4gjfyFVLo2a4kmDDx/e0cNh2Mw"',
    "mtime": "2026-02-06T02:43:15.632Z",
    "size": 29202,
    "path": "../public/favicon.ico"
  },
  "/assets/ibm-plex-mono-latin-300-normal-BRS-C4KA.woff2": {
    "type": "font/woff2",
    "etag": '"399c-XcQnEauUUF4q+FsWq7WnhI3YmSI"',
    "mtime": "2026-02-06T02:43:16.292Z",
    "size": 14748,
    "path": "../public/assets/ibm-plex-mono-latin-300-normal-BRS-C4KA.woff2"
  },
  "/clawd-mark.png": {
    "type": "image/png",
    "etag": '"17155-UBt02Q6gPC5Lpdz665w63OkWgfQ"',
    "mtime": "2026-02-06T02:43:15.638Z",
    "size": 94549,
    "path": "../public/clawd-mark.png"
  },
  "/assets/_handle-BLjnJBSB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"174a-ERLKFG+ThvvPd1IM4ZPJgeKr70M"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 5962,
    "path": "../public/assets/_handle-BLjnJBSB.js"
  },
  "/assets/bricolage-grotesque-latin-300-normal-Bmny7uBc.woff2": {
    "type": "font/woff2",
    "etag": '"56d8-iu3TmdyvsqjZWpcKvaOsxvvLmPE"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 22232,
    "path": "../public/assets/bricolage-grotesque-latin-300-normal-Bmny7uBc.woff2"
  },
  "/assets/bricolage-grotesque-latin-200-normal-CHTATB9e.woff2": {
    "type": "font/woff2",
    "etag": '"5610-sVb8ccFerQ+jSNR2wrnTVrojBwg"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 22032,
    "path": "../public/assets/bricolage-grotesque-latin-200-normal-CHTATB9e.woff2"
  },
  "/assets/dashboard-HGz8iPP9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"c65-yG6Sf+lN8861zSujCqW7PUjyrk8"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 3173,
    "path": "../public/assets/dashboard-HGz8iPP9.js"
  },
  "/assets/ibm-plex-mono-latin-100-normal-DrwzzZpo.woff2": {
    "type": "font/woff2",
    "etag": '"3a00-I6Pdj1j7AMynHPkS4A5/P+utGhU"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 14848,
    "path": "../public/assets/ibm-plex-mono-latin-100-normal-DrwzzZpo.woff2"
  },
  "/assets/_slug-C7eQ4Ovd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"ae97-OkrHObuoawEsa9G0wsW2CcA2fuw"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 44695,
    "path": "../public/assets/_slug-C7eQ4Ovd.js"
  },
  "/assets/manrope-latin-200-normal-DvuInKd5.woff2": {
    "type": "font/woff2",
    "etag": '"34d8-h8k+C19+BGmvk0y9KWqmDNwj5Fc"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 13528,
    "path": "../public/assets/manrope-latin-200-normal-DvuInKd5.woff2"
  },
  "/manifest.json": {
    "type": "application/json",
    "etag": '"1f2-Oqn/x1R1hBTtEjA8nFhpBeFJJNg"',
    "mtime": "2026-02-06T02:43:15.635Z",
    "size": 498,
    "path": "../public/manifest.json"
  },
  "/tanstack-word-logo-white.svg": {
    "type": "image/svg+xml",
    "etag": '"3a9a-9TQFm/pN8AZe1ZK0G1KyCEojnYg"',
    "mtime": "2026-02-06T02:43:15.637Z",
    "size": 15002,
    "path": "../public/tanstack-word-logo-white.svg"
  },
  "/assets/manrope-latin-800-normal-uHUdIJgA.woff": {
    "type": "font/woff",
    "etag": '"45f8-w5hW3nlTGAd43x+tAvX08ekkLhI"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 17912,
    "path": "../public/assets/manrope-latin-800-normal-uHUdIJgA.woff"
  },
  "/og.png": {
    "type": "image/png",
    "etag": '"2ac91-NQn5PiI5MArCABmbhtBmPmuC9pI"',
    "mtime": "2026-02-06T02:40:10.552Z",
    "size": 175249,
    "path": "../public/og.png"
  },
  "/tanstack-circle-logo.png": {
    "type": "image/png",
    "etag": '"40cab-HZ1KcYPs7tRjLe4Sd4g6CwKW+W8"',
    "mtime": "2026-02-06T02:40:10.554Z",
    "size": 265387,
    "path": "../public/tanstack-circle-logo.png"
  },
  "/assets/manrope-latin-400-normal-8tf8FM3T.woff": {
    "type": "font/woff",
    "etag": '"4774-mCT/VuoLJFoKBP3t5Nv3FzpwCKc"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 18292,
    "path": "../public/assets/manrope-latin-400-normal-8tf8FM3T.woff"
  },
  "/assets/ibm-plex-mono-latin-600-normal-DWFSQ4vo.woff": {
    "type": "font/woff",
    "etag": '"3398-D/GHpHo4zls8HLHH2boKeigB6S4"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 13208,
    "path": "../public/assets/ibm-plex-mono-latin-600-normal-DWFSQ4vo.woff"
  },
  "/assets/index-Bi148Lda.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1028-ud1928NzC0oifrFomrLlPow3Bls"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 4136,
    "path": "../public/assets/index-Bi148Lda.js"
  },
  "/assets/bricolage-grotesque-latin-700-normal-DvJDmrLu.woff": {
    "type": "font/woff",
    "etag": '"69a4-HT8BuIWUgjZsPs6CPPm7qTV3sxs"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 27044,
    "path": "../public/assets/bricolage-grotesque-latin-700-normal-DvJDmrLu.woff"
  },
  "/assets/styles-DtRaT0BV.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"dbd2-pKbBi3EngcXeg7jSp0s/4JfH628"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 56274,
    "path": "../public/assets/styles-DtRaT0BV.css"
  },
  "/assets/import-DqkyqQmX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1e2c-G4JkqGXzpOaOwPF0jZH9ptrEeZk"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 7724,
    "path": "../public/assets/import-DqkyqQmX.js"
  },
  "/assets/bricolage-grotesque-latin-200-normal-DLlJBNmE.woff": {
    "type": "font/woff",
    "etag": '"6908-xDxK+IvFSJG/wyv1jQPXu21UA1A"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 26888,
    "path": "../public/assets/bricolage-grotesque-latin-200-normal-DLlJBNmE.woff"
  },
  "/assets/manrope-latin-700-normal-BZp_XxE4.woff2": {
    "type": "font/woff2",
    "etag": '"3784-18lLTlrWBi6xECxef3iRXVY6UIs"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 14212,
    "path": "../public/assets/manrope-latin-700-normal-BZp_XxE4.woff2"
  },
  "/assets/ibm-plex-mono-latin-300-normal-BPU54Tw3.woff": {
    "type": "font/woff",
    "etag": '"335c-7czs+SUlm/FSeM0Iz8WyMS+Q1hA"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 13148,
    "path": "../public/assets/ibm-plex-mono-latin-300-normal-BPU54Tw3.woff"
  },
  "/assets/ibm-plex-mono-latin-400-normal-CvHOgSBP.woff": {
    "type": "font/woff",
    "etag": '"3358-rWMSbc9cch7FBErQpfnWcshAYFM"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 13144,
    "path": "../public/assets/ibm-plex-mono-latin-400-normal-CvHOgSBP.woff"
  },
  "/assets/manrope-latin-600-normal-BqgrALkZ.woff": {
    "type": "font/woff",
    "etag": '"47d0-3DKmwK66oJYdcMbZlnLr4/5u2+Y"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 18384,
    "path": "../public/assets/manrope-latin-600-normal-BqgrALkZ.woff"
  },
  "/assets/bricolage-grotesque-latin-300-normal-z-zPgFd-.woff": {
    "type": "font/woff",
    "etag": '"6a88-5H1tcBK6cExUYNw8JqHa2w5iL+0"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 27272,
    "path": "../public/assets/bricolage-grotesque-latin-300-normal-z-zPgFd-.woff"
  },
  "/assets/ibm-plex-mono-latin-600-normal-BgSNZQsw.woff2": {
    "type": "font/woff2",
    "etag": '"3d04-zppco6h02pIBwmMMXLe/qpaIwFI"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 15620,
    "path": "../public/assets/ibm-plex-mono-latin-600-normal-BgSNZQsw.woff2"
  },
  "/assets/manrope-latin-700-normal-DGRFkw-m.woff": {
    "type": "font/woff",
    "etag": '"47ec-11l9o1Xf+TfBbL1gUFRPeoszjiM"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 18412,
    "path": "../public/assets/manrope-latin-700-normal-DGRFkw-m.woff"
  },
  "/assets/ibm-plex-mono-latin-200-normal-DebC9F0q.woff": {
    "type": "font/woff",
    "etag": '"33e8-JdZRVdV2p6CyzCD9UvK9DxAGi50"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 13288,
    "path": "../public/assets/ibm-plex-mono-latin-200-normal-DebC9F0q.woff"
  },
  "/assets/ibm-plex-mono-latin-500-normal-CB9ihrfo.woff": {
    "type": "font/woff",
    "etag": '"3364-S8wip5no4QO46BFh3FPzQKpIOec"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 13156,
    "path": "../public/assets/ibm-plex-mono-latin-500-normal-CB9ihrfo.woff"
  },
  "/assets/index-CZozvpKD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"178e-2FlnN+hIDM8vavJU25ulJkrOp/k"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 6030,
    "path": "../public/assets/index-CZozvpKD.js"
  },
  "/assets/ibm-plex-mono-latin-500-normal-DSY6xOcd.woff2": {
    "type": "font/woff2",
    "etag": '"3a28-0y8OBwGsYgQ4QBMagAznF6huTuI"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 14888,
    "path": "../public/assets/ibm-plex-mono-latin-500-normal-DSY6xOcd.woff2"
  },
  "/assets/_slug-BJHQijV3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"141b-vn/B1u+Bsiz3NTW2mqF74lhNTug"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 5147,
    "path": "../public/assets/_slug-BJHQijV3.js"
  },
  "/assets/bricolage-grotesque-latin-400-normal-A6LyuA6R.woff2": {
    "type": "font/woff2",
    "etag": '"575c-qrxajQAG2H/ZZ8pCetSe+2SPRcE"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 22364,
    "path": "../public/assets/bricolage-grotesque-latin-400-normal-A6LyuA6R.woff2"
  },
  "/assets/index-Dg9IGsTH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"263bc-zkEl70k46PQoE5szibqKd6k3xm0"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 156604,
    "path": "../public/assets/index-Dg9IGsTH.js"
  },
  "/assets/ibm-plex-mono-latin-700-normal-7sUh57Bg.woff2": {
    "type": "font/woff2",
    "etag": '"3a3c-IjZ3z8y3gsLkIJpxu3Wq6kUJrHE"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 14908,
    "path": "../public/assets/ibm-plex-mono-latin-700-normal-7sUh57Bg.woff2"
  },
  "/assets/ibm-plex-mono-latin-400-normal-DMJ8VG8y.woff2": {
    "type": "font/woff2",
    "etag": '"3974-u4dQDjIEo6fGXWYzx5xchAw76NM"',
    "mtime": "2026-02-06T02:43:16.292Z",
    "size": 14708,
    "path": "../public/assets/ibm-plex-mono-latin-400-normal-DMJ8VG8y.woff2"
  },
  "/assets/bricolage-grotesque-latin-800-normal-J50vIsBe.woff2": {
    "type": "font/woff2",
    "etag": '"5554-6QsGRI0zDEXXzJfWvM2RDWxVZ30"',
    "mtime": "2026-02-06T02:43:16.292Z",
    "size": 21844,
    "path": "../public/assets/bricolage-grotesque-latin-800-normal-J50vIsBe.woff2"
  },
  "/assets/bricolage-grotesque-latin-800-normal-Br4b-5gk.woff": {
    "type": "font/woff",
    "etag": '"6744-onYr4XjYfaUjLeG/xHNb/21VMZg"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 26436,
    "path": "../public/assets/bricolage-grotesque-latin-800-normal-Br4b-5gk.woff"
  },
  "/assets/manrope-latin-200-normal-DATVJ-xu.woff": {
    "type": "font/woff",
    "etag": '"4560-5uFXApRsX9XRlwxHtqPziE3qGqQ"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 17760,
    "path": "../public/assets/manrope-latin-200-normal-DATVJ-xu.woff"
  },
  "/assets/manrope-latin-600-normal-4f0koTD-.woff2": {
    "type": "font/woff2",
    "etag": '"375c-w937G8IX30U7QbSdunJAIHm3ERo"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 14172,
    "path": "../public/assets/manrope-latin-600-normal-4f0koTD-.woff2"
  },
  "/assets/bricolage-grotesque-latin-400-normal-D89K-qEP.woff": {
    "type": "font/woff",
    "etag": '"6a80-0BKodG2//D5tXTwnuOLmWL2BhxY"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 27264,
    "path": "../public/assets/bricolage-grotesque-latin-400-normal-D89K-qEP.woff"
  },
  "/assets/manrope-latin-500-normal-DMZssgOp.woff": {
    "type": "font/woff",
    "etag": '"4740-Q9EmdKM1E3weOZyciPd53Ds1hv8"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 18240,
    "path": "../public/assets/manrope-latin-500-normal-DMZssgOp.woff"
  },
  "/assets/bricolage-grotesque-latin-700-normal-gtcctNPv.woff2": {
    "type": "font/woff2",
    "etag": '"5770-KoD/BL2gxJm6XjYVNmOKpq/8uso"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 22384,
    "path": "../public/assets/bricolage-grotesque-latin-700-normal-gtcctNPv.woff2"
  },
  "/assets/bricolage-grotesque-latin-500-normal-DEDBoLFO.woff2": {
    "type": "font/woff2",
    "etag": '"57cc-th997ODpSA1s2gyb0/LuNS42sBo"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 22476,
    "path": "../public/assets/bricolage-grotesque-latin-500-normal-DEDBoLFO.woff2"
  },
  "/assets/bricolage-grotesque-latin-600-normal-Bw0J83-2.woff": {
    "type": "font/woff",
    "etag": '"6a78-pYwor8q7emY/piVS0FS3Nf4jII8"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 27256,
    "path": "../public/assets/bricolage-grotesque-latin-600-normal-Bw0J83-2.woff"
  },
  "/assets/manrope-latin-400-normal-PaqtzbVb.woff2": {
    "type": "font/woff2",
    "etag": '"371c-UpYQC/kqnfmqnPi4IPp15HTokX4"',
    "mtime": "2026-02-06T02:43:16.292Z",
    "size": 14108,
    "path": "../public/assets/manrope-latin-400-normal-PaqtzbVb.woff2"
  },
  "/assets/ibm-plex-mono-latin-100-normal-1QLOUEvb.woff": {
    "type": "font/woff",
    "etag": '"33bc-MJdjxtJ7GY+N2zSaoF1eiyKLPKk"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 13244,
    "path": "../public/assets/ibm-plex-mono-latin-100-normal-1QLOUEvb.woff"
  },
  "/assets/settings-CVXY39XO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"1087-bQhrx/2PkJ/KJVSZ6IOr1dJR2P8"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 4231,
    "path": "../public/assets/settings-CVXY39XO.js"
  },
  "/assets/main-BPgb0gzG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"b58ee-WZ7I0PhhRoWw81l3qZg6n3zjFKU"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 743662,
    "path": "../public/assets/main-BPgb0gzG.js"
  },
  "/assets/ibm-plex-mono-latin-700-normal-CNHXzs6v.woff": {
    "type": "font/woff",
    "etag": '"339c-MAJu7lUDBBn5b3TPJMjPovblQpg"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 13212,
    "path": "../public/assets/ibm-plex-mono-latin-700-normal-CNHXzs6v.woff"
  },
  "/assets/management-CYQ59yQn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"2df3-YiNLJJyvl/RO/0yftjoZaUnkUdw"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 11763,
    "path": "../public/assets/management-CYQ59yQn.js"
  },
  "/assets/bricolage-grotesque-latin-600-normal-nxTgbNFE.woff2": {
    "type": "font/woff2",
    "etag": '"57b8-NiJJyK7UGaqGTdjj95IilwUMnWc"',
    "mtime": "2026-02-06T02:43:16.294Z",
    "size": 22456,
    "path": "../public/assets/bricolage-grotesque-latin-600-normal-nxTgbNFE.woff2"
  },
  "/assets/manrope-latin-500-normal-BYYD-dBL.woff2": {
    "type": "font/woff2",
    "etag": '"36dc-EZ29/81rmFJDUFZa2ZHBvwyWCdw"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 14044,
    "path": "../public/assets/manrope-latin-500-normal-BYYD-dBL.woff2"
  },
  "/assets/stars-Cxte8qba.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"577-t7UMNXDGrINsRB8n8sCdUFSxaFg"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 1399,
    "path": "../public/assets/stars-Cxte8qba.js"
  },
  "/assets/ibm-plex-mono-latin-200-normal-Cj_OANUP.woff2": {
    "type": "font/woff2",
    "etag": '"3a5c-7Cp7AczIlao672xq8gE1Dtz6HCM"',
    "mtime": "2026-02-06T02:43:16.292Z",
    "size": 14940,
    "path": "../public/assets/ibm-plex-mono-latin-200-normal-Cj_OANUP.woff2"
  },
  "/assets/bricolage-grotesque-latin-500-normal-CV-uA8Lw.woff": {
    "type": "font/woff",
    "etag": '"6a94-qHmtQGNSpWgDsX/LIdjWhBqzRwg"',
    "mtime": "2026-02-06T02:43:16.296Z",
    "size": 27284,
    "path": "../public/assets/bricolage-grotesque-latin-500-normal-CV-uA8Lw.woff"
  },
  "/assets/SoulCard-Ck3NI4Wo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"189-xxF9SK4Xnet3UTQWxVvRM5bh+TE"',
    "mtime": "2026-02-06T02:43:16.293Z",
    "size": 393,
    "path": "../public/assets/SoulCard-Ck3NI4Wo.js"
  },
  "/assets/auth-Lo-W532v.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"726-uQAXYAA+n5v+uQIFl1OgSUdr2gk"',
    "mtime": "2026-02-06T02:43:16.295Z",
    "size": 1830,
    "path": "../public/assets/auth-Lo-W532v.js"
  },
  "/api/v1/openapi.json": {
    "type": "application/json",
    "etag": '"3664-c9LWTWgyfuFbpE2ul0hHbWXjFhk"',
    "mtime": "2026-02-06T02:43:15.636Z",
    "size": 13924,
    "path": "../public/api/v1/openapi.json"
  }
};
function readAsset(id) {
  const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
  return promises.readFile(resolve(serverDir, assets[id].path));
}
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
function getAsset(id) {
  return assets[id];
}
const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = {
  gzip: ".gz",
  br: ".br"
};
const _SMnEvP = defineHandler((event) => {
  if (event.req.method && !METHODS.has(event.req.method)) {
    return;
  }
  let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
  let asset;
  const encodingHeader = event.req.headers.get("accept-encoding") || "";
  const encodings = [...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
  if (encodings.length > 1) {
    event.res.headers.append("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.res.headers.delete("Cache-Control");
      throw new HTTPError({ status: 404 });
    }
    return;
  }
  const ifNotMatch = event.req.headers.get("if-none-match") === asset.etag;
  if (ifNotMatch) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  const ifModifiedSinceH = event.req.headers.get("if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.res.status = 304;
    event.res.statusText = "Not Modified";
    return "";
  }
  if (asset.type) {
    event.res.headers.set("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.headers.has("ETag")) {
    event.res.headers.set("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.headers.has("Last-Modified")) {
    event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.res.headers.has("Content-Encoding")) {
    event.res.headers.set("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.res.headers.has("Content-Length")) {
    event.res.headers.set("Content-Length", asset.size.toString());
  }
  return readAsset(id);
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/");
    s.length - 1;
    if (s[1] === "assets") {
      r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
    }
    return r;
  };
})();
const _lazy_TTDD9B = defineLazyEventHandler(() => import("./_routes/og/skill.png.mjs"));
const _lazy_ne8acR = defineLazyEventHandler(() => import("./_routes/og/soul.png.mjs"));
const _lazy_RHzDYT = defineLazyEventHandler(() => Promise.resolve().then(function() {
  return ssrRenderer$1;
}));
const findRoute = /* @__PURE__ */ (() => {
  const $0 = { route: "/og/skill.png", handler: _lazy_TTDD9B }, $1 = { route: "/og/soul.png", handler: _lazy_ne8acR }, $2 = { route: "/**", handler: _lazy_RHzDYT };
  return (m, p) => {
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    if (p === "/og/skill.png") {
      return { data: $0 };
    }
    if (p === "/og/soul.png") {
      return { data: $1 };
    }
    let s = p.split("/");
    s.length - 1;
    return { data: $2, params: { "_": s.slice(1).join("/") } };
  };
})();
const globalMiddleware = [
  toEventHandler(_SMnEvP)
].filter(Boolean);
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  h3App["~middleware"].push(...globalMiddleware);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      middleware.push(...h3App["~middleware"]);
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  for (const rule of Object.values(routeRules)) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function _captureError(error, type) {
  console.error(`[${type}]`, error);
  useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
  process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
  process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
const port = Number.parseInt(process.env.NITRO_PORT || process.env.PORT || "") || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
let _fetch = nitroApp.fetch;
serve({
  port,
  hostname: host,
  tls: cert && key ? {
    cert,
    key
  } : void 0,
  fetch: _fetch,
  bun: { websocket: void 0 }
});
trapUnhandledErrors();
const bun = {};
function fetchViteEnv(viteEnvName, input, init) {
  const envs = globalThis.__nitro_vite_envs__ || {};
  const viteEnv = envs[viteEnvName];
  if (!viteEnv) {
    throw HTTPError.status(404);
  }
  return Promise.resolve(viteEnv.fetch(toRequest(input, init)));
}
function ssrRenderer({ req }) {
  return fetchViteEnv("ssr", req);
}
const ssrRenderer$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: ssrRenderer
});
export {
  bun as default
};
