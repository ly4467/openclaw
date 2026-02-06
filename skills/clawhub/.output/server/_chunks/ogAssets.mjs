import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
const FONT_SANS = "Bricolage Grotesque";
const FONT_MONO = "IBM Plex Mono";
let markDataUrlPromise = null;
let resvgWasmPromise = null;
let fontBuffersPromise = null;
function getServerRootUrl() {
  const nitroMain = globalThis.__nitro_main__;
  if (typeof nitroMain === "string") {
    try {
      return new URL("./", nitroMain);
    } catch {
    }
  }
  return pathToFileURL(`${process.cwd()}/`);
}
function getServerUrl(pathname) {
  return new URL(pathname.replace(/^\//, ""), getServerRootUrl());
}
async function getMarkDataUrl() {
  if (!markDataUrlPromise) {
    markDataUrlPromise = (async () => {
      const candidates = [getServerUrl("clawd-mark.png"), getServerUrl("public/clawd-mark.png")];
      let lastError = null;
      for (const url of candidates) {
        try {
          const buffer = await readFile(url);
          return `data:image/png;base64,${buffer.toString("base64")}`;
        } catch (error) {
          lastError = error;
        }
      }
      throw lastError;
    })();
  }
  return markDataUrlPromise;
}
async function getResvgWasm() {
  if (!resvgWasmPromise) {
    resvgWasmPromise = readFile(getServerUrl("node_modules/@resvg/resvg-wasm/index_bg.wasm")).then(
      (buffer) => new Uint8Array(buffer)
    );
  }
  return resvgWasmPromise;
}
async function getFontBuffers() {
  if (!fontBuffersPromise) {
    fontBuffersPromise = Promise.all([
      readFile(
        getServerUrl(
          "node_modules/@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-800-normal.woff2"
        )
      ),
      readFile(
        getServerUrl(
          "node_modules/@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-500-normal.woff2"
        )
      ),
      readFile(
        getServerUrl(
          "node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2"
        )
      )
    ]).then((buffers) => buffers.map((buffer) => new Uint8Array(buffer)));
  }
  return fontBuffersPromise;
}
export {
  FONT_SANS as F,
  FONT_MONO as a,
  getFontBuffers as b,
  getResvgWasm as c,
  getMarkDataUrl as g
};
