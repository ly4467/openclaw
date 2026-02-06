import { p as redirect } from "../_chunks/_libs/@tanstack/router-core.mjs";
import { c as createRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, L as Link, u as useSearch, d as useNavigate, H as HeadContent, S as Scripts } from "../_chunks/_libs/@tanstack/react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports, W as We } from "../_chunks/_libs/react.mjs";
import { A as Analytics } from "../_chunks/_libs/@vercel/analytics.mjs";
import { r as reactDomExports } from "../_libs/react-dom.mjs";
import { P as Portal2, C as Content2, I as Item2, S as Separator2, R as Root2$1, T as Trigger } from "../_chunks/_libs/@radix-ui/react-dropdown-menu.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root2, I as Item2$1 } from "../_chunks/_libs/@radix-ui/react-toggle-group.mjs";
import { s as semver$1 } from "../_libs/semver.mjs";
import { u as unzipSync, g as gunzipSync } from "../_libs/fflate.mjs";
import { u as usePaginatedQuery } from "../_libs/convex-helpers.mjs";
import { b as anyApi, d as componentsGeneric } from "../_libs/convex.mjs";
import { M as Menu, a as Monitor, S as Sun, b as Moon } from "../_libs/lucide-react.mjs";
import "../_chunks/_libs/@tanstack/history.mjs";
import "../_libs/tiny-invariant.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/tiny-warning.mjs";
import "../_libs/isbot.mjs";
import "../_chunks/_libs/@radix-ui/primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-compose-refs.mjs";
import "../_chunks/_libs/@radix-ui/react-context.mjs";
import "../_chunks/_libs/@radix-ui/react-use-controllable-state.mjs";
import "../_chunks/_libs/@radix-ui/react-use-layout-effect.mjs";
import "../_chunks/_libs/@radix-ui/react-primitive.mjs";
import "../_chunks/_libs/@radix-ui/react-slot.mjs";
import "../_chunks/_libs/@radix-ui/react-menu.mjs";
import "../_chunks/_libs/@radix-ui/react-collection.mjs";
import "../_chunks/_libs/@radix-ui/react-direction.mjs";
import "../_chunks/_libs/@radix-ui/react-dismissable-layer.mjs";
import "../_chunks/_libs/@radix-ui/react-use-callback-ref.mjs";
import "../_chunks/_libs/@radix-ui/react-use-escape-keydown.mjs";
import "../_chunks/_libs/@radix-ui/react-focus-guards.mjs";
import "../_chunks/_libs/@radix-ui/react-focus-scope.mjs";
import "../_chunks/_libs/@radix-ui/react-popper.mjs";
import "../_chunks/_libs/@floating-ui/react-dom.mjs";
import "../_chunks/_libs/@floating-ui/dom.mjs";
import "../_chunks/_libs/@floating-ui/core.mjs";
import "../_chunks/_libs/@floating-ui/utils.mjs";
import "../_chunks/_libs/@radix-ui/react-arrow.mjs";
import "../_chunks/_libs/@radix-ui/react-use-size.mjs";
import "../_chunks/_libs/@radix-ui/react-portal.mjs";
import "../_chunks/_libs/@radix-ui/react-presence.mjs";
import "../_chunks/_libs/@radix-ui/react-roving-focus.mjs";
import "../_chunks/_libs/@radix-ui/react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/tslib.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_chunks/_libs/@radix-ui/react-toggle.mjs";
import "module";
const version = "1.31.7";
var lookup = [];
var revLookup = [];
var Arr = Uint8Array;
var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}
revLookup["-".charCodeAt(0)] = 62;
revLookup["_".charCodeAt(0)] = 63;
function getLens(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var validLen = b64.indexOf("=");
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
}
function _byteLength(_b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr2 = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0;
  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;
  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr2[curByte++] = tmp >> 16 & 255;
    arr2[curByte++] = tmp >> 8 & 255;
    arr2[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr2[curByte++] = tmp & 255;
  }
  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr2[curByte++] = tmp >> 8 & 255;
    arr2[curByte++] = tmp & 255;
  }
  return arr2;
}
function tripletToBase64(num) {
  return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
    output.push(tripletToBase64(tmp));
  }
  return output.join("");
}
function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3;
  var parts = [];
  var maxChunkLength = 16383;
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(
      encodeChunk(
        uint8,
        i,
        i + maxChunkLength > len2 ? len2 : i + maxChunkLength
      )
    );
  }
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "==");
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
    );
  }
  return parts.join("");
}
function parseArgs(args) {
  if (args === void 0) {
    return {};
  }
  if (!isSimpleObject(args)) {
    throw new Error(
      `The arguments to a Convex function must be an object. Received: ${args}`
    );
  }
  return args;
}
function validateDeploymentUrl(deploymentUrl) {
  if (typeof deploymentUrl === "undefined") {
    throw new Error(
      `Client created with undefined deployment address. If you used an environment variable, check that it's set.`
    );
  }
  if (typeof deploymentUrl !== "string") {
    throw new Error(
      `Invalid deployment address: found ${deploymentUrl}".`
    );
  }
  if (!(deploymentUrl.startsWith("http:") || deploymentUrl.startsWith("https:"))) {
    throw new Error(
      `Invalid deployment address: Must start with "https://" or "http://". Found "${deploymentUrl}".`
    );
  }
  try {
    new URL(deploymentUrl);
  } catch {
    throw new Error(
      `Invalid deployment address: "${deploymentUrl}" is not a valid URL. If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
  }
  if (deploymentUrl.endsWith(".convex.site")) {
    throw new Error(
      `Invalid deployment address: "${deploymentUrl}" ends with .convex.site, which is used for HTTP Actions. Convex deployment URLs typically end with .convex.cloud? If you believe this URL is correct, use the \`skipConvexDeploymentUrlCheck\` option to bypass this.`
    );
  }
}
function isSimpleObject(value2) {
  const isObject = typeof value2 === "object";
  const prototype = Object.getPrototypeOf(value2);
  const isSimple = prototype === null || prototype === Object.prototype || // Objects generated from other contexts (e.g. across Node.js `vm` modules) will not satisfy the previous
  // conditions but are still simple objects.
  prototype?.constructor?.name === "Object";
  return isObject && isSimple;
}
const LITTLE_ENDIAN = true;
const MIN_INT64 = BigInt("-9223372036854775808");
const MAX_INT64 = BigInt("9223372036854775807");
const ZERO = BigInt("0");
const EIGHT = BigInt("8");
const TWOFIFTYSIX = BigInt("256");
function isSpecial(n) {
  return Number.isNaN(n) || !Number.isFinite(n) || Object.is(n, -0);
}
function slowBigIntToBase64(value2) {
  if (value2 < ZERO) {
    value2 -= MIN_INT64 + MIN_INT64;
  }
  let hex2 = value2.toString(16);
  if (hex2.length % 2 === 1) hex2 = "0" + hex2;
  const bytes = new Uint8Array(new ArrayBuffer(8));
  let i = 0;
  for (const hexByte of hex2.match(/.{2}/g).reverse()) {
    bytes.set([parseInt(hexByte, 16)], i++);
    value2 >>= EIGHT;
  }
  return fromByteArray(bytes);
}
function slowBase64ToBigInt(encoded) {
  const integerBytes = toByteArray(encoded);
  if (integerBytes.byteLength !== 8) {
    throw new Error(
      `Received ${integerBytes.byteLength} bytes, expected 8 for $integer`
    );
  }
  let value2 = ZERO;
  let power = ZERO;
  for (const byte of integerBytes) {
    value2 += BigInt(byte) * TWOFIFTYSIX ** power;
    power++;
  }
  if (value2 > MAX_INT64) {
    value2 += MIN_INT64 + MIN_INT64;
  }
  return value2;
}
function modernBigIntToBase64(value2) {
  if (value2 < MIN_INT64 || MAX_INT64 < value2) {
    throw new Error(
      `BigInt ${value2} does not fit into a 64-bit signed integer.`
    );
  }
  const buffer = new ArrayBuffer(8);
  new DataView(buffer).setBigInt64(0, value2, true);
  return fromByteArray(new Uint8Array(buffer));
}
function modernBase64ToBigInt(encoded) {
  const integerBytes = toByteArray(encoded);
  if (integerBytes.byteLength !== 8) {
    throw new Error(
      `Received ${integerBytes.byteLength} bytes, expected 8 for $integer`
    );
  }
  const intBytesView = new DataView(integerBytes.buffer);
  return intBytesView.getBigInt64(0, true);
}
const bigIntToBase64 = DataView.prototype.setBigInt64 ? modernBigIntToBase64 : slowBigIntToBase64;
const base64ToBigInt = DataView.prototype.getBigInt64 ? modernBase64ToBigInt : slowBase64ToBigInt;
const MAX_IDENTIFIER_LEN = 1024;
function validateObjectField(k) {
  if (k.length > MAX_IDENTIFIER_LEN) {
    throw new Error(
      `Field name ${k} exceeds maximum field name length ${MAX_IDENTIFIER_LEN}.`
    );
  }
  if (k.startsWith("$")) {
    throw new Error(`Field name ${k} starts with a '$', which is reserved.`);
  }
  for (let i = 0; i < k.length; i += 1) {
    const charCode = k.charCodeAt(i);
    if (charCode < 32 || charCode >= 127) {
      throw new Error(
        `Field name ${k} has invalid character '${k[i]}': Field names can only contain non-control ASCII characters`
      );
    }
  }
}
function jsonToConvex(value2) {
  if (value2 === null) {
    return value2;
  }
  if (typeof value2 === "boolean") {
    return value2;
  }
  if (typeof value2 === "number") {
    return value2;
  }
  if (typeof value2 === "string") {
    return value2;
  }
  if (Array.isArray(value2)) {
    return value2.map((value22) => jsonToConvex(value22));
  }
  if (typeof value2 !== "object") {
    throw new Error(`Unexpected type of ${value2}`);
  }
  const entries = Object.entries(value2);
  if (entries.length === 1) {
    const key = entries[0][0];
    if (key === "$bytes") {
      if (typeof value2.$bytes !== "string") {
        throw new Error(`Malformed $bytes field on ${value2}`);
      }
      return toByteArray(value2.$bytes).buffer;
    }
    if (key === "$integer") {
      if (typeof value2.$integer !== "string") {
        throw new Error(`Malformed $integer field on ${value2}`);
      }
      return base64ToBigInt(value2.$integer);
    }
    if (key === "$float") {
      if (typeof value2.$float !== "string") {
        throw new Error(`Malformed $float field on ${value2}`);
      }
      const floatBytes = toByteArray(value2.$float);
      if (floatBytes.byteLength !== 8) {
        throw new Error(
          `Received ${floatBytes.byteLength} bytes, expected 8 for $float`
        );
      }
      const floatBytesView = new DataView(floatBytes.buffer);
      const float = floatBytesView.getFloat64(0, LITTLE_ENDIAN);
      if (!isSpecial(float)) {
        throw new Error(`Float ${float} should be encoded as a number`);
      }
      return float;
    }
    if (key === "$set") {
      throw new Error(
        `Received a Set which is no longer supported as a Convex type.`
      );
    }
    if (key === "$map") {
      throw new Error(
        `Received a Map which is no longer supported as a Convex type.`
      );
    }
  }
  const out = {};
  for (const [k, v] of Object.entries(value2)) {
    validateObjectField(k);
    out[k] = jsonToConvex(v);
  }
  return out;
}
const MAX_VALUE_FOR_ERROR_LEN = 16384;
function stringifyValueForError(value2) {
  const str = JSON.stringify(value2, (_key, value22) => {
    if (value22 === void 0) {
      return "undefined";
    }
    if (typeof value22 === "bigint") {
      return `${value22.toString()}n`;
    }
    return value22;
  });
  if (str.length > MAX_VALUE_FOR_ERROR_LEN) {
    const rest = "[...truncated]";
    let truncateAt = MAX_VALUE_FOR_ERROR_LEN - rest.length;
    const codePoint = str.codePointAt(truncateAt - 1);
    if (codePoint !== void 0 && codePoint > 65535) {
      truncateAt -= 1;
    }
    return str.substring(0, truncateAt) + rest;
  }
  return str;
}
function convexToJsonInternal(value2, originalValue, context, includeTopLevelUndefined) {
  if (value2 === void 0) {
    const contextText = context && ` (present at path ${context} in original object ${stringifyValueForError(
      originalValue
    )})`;
    throw new Error(
      `undefined is not a valid Convex value${contextText}. To learn about Convex's supported types, see https://docs.convex.dev/using/types.`
    );
  }
  if (value2 === null) {
    return value2;
  }
  if (typeof value2 === "bigint") {
    if (value2 < MIN_INT64 || MAX_INT64 < value2) {
      throw new Error(
        `BigInt ${value2} does not fit into a 64-bit signed integer.`
      );
    }
    return { $integer: bigIntToBase64(value2) };
  }
  if (typeof value2 === "number") {
    if (isSpecial(value2)) {
      const buffer = new ArrayBuffer(8);
      new DataView(buffer).setFloat64(0, value2, LITTLE_ENDIAN);
      return { $float: fromByteArray(new Uint8Array(buffer)) };
    } else {
      return value2;
    }
  }
  if (typeof value2 === "boolean") {
    return value2;
  }
  if (typeof value2 === "string") {
    return value2;
  }
  if (value2 instanceof ArrayBuffer) {
    return { $bytes: fromByteArray(new Uint8Array(value2)) };
  }
  if (Array.isArray(value2)) {
    return value2.map(
      (value22, i) => convexToJsonInternal(value22, originalValue, context + `[${i}]`)
    );
  }
  if (value2 instanceof Set) {
    throw new Error(
      errorMessageForUnsupportedType(context, "Set", [...value2], originalValue)
    );
  }
  if (value2 instanceof Map) {
    throw new Error(
      errorMessageForUnsupportedType(context, "Map", [...value2], originalValue)
    );
  }
  if (!isSimpleObject(value2)) {
    const theType = value2?.constructor?.name;
    const typeName = theType ? `${theType} ` : "";
    throw new Error(
      errorMessageForUnsupportedType(context, typeName, value2, originalValue)
    );
  }
  const out = {};
  const entries = Object.entries(value2);
  entries.sort(([k1, _v1], [k2, _v2]) => k1 === k2 ? 0 : k1 < k2 ? -1 : 1);
  for (const [k, v] of entries) {
    if (v !== void 0) {
      validateObjectField(k);
      out[k] = convexToJsonInternal(v, originalValue, context + `.${k}`);
    }
  }
  return out;
}
function errorMessageForUnsupportedType(context, typeName, value2, originalValue) {
  if (context) {
    return `${typeName}${stringifyValueForError(
      value2
    )} is not a supported Convex type (present at path ${context} in original object ${stringifyValueForError(
      originalValue
    )}). To learn about Convex's supported types, see https://docs.convex.dev/using/types.`;
  } else {
    return `${typeName}${stringifyValueForError(
      value2
    )} is not a supported Convex type.`;
  }
}
function convexToJson(value2) {
  return convexToJsonInternal(value2, value2, "");
}
var __defProp$d = Object.defineProperty;
var __defNormalProp$d = (obj, key, value2) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$d = (obj, key, value2) => __defNormalProp$d(obj, typeof key !== "symbol" ? key + "" : key, value2);
var _a, _b;
const IDENTIFYING_FIELD = /* @__PURE__ */ Symbol.for("ConvexError");
class ConvexError extends (_b = Error, _a = IDENTIFYING_FIELD, _b) {
  constructor(data) {
    super(typeof data === "string" ? data : stringifyValueForError(data));
    __publicField$d(this, "name", "ConvexError");
    __publicField$d(this, "data");
    __publicField$d(this, _a, true);
    this.data = data;
  }
}
const arr = () => Array.from({ length: 4 }, () => 0);
arr();
arr();
var __defProp$c = Object.defineProperty;
var __defNormalProp$c = (obj, key, value2) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$c = (obj, key, value2) => __defNormalProp$c(obj, typeof key !== "symbol" ? key + "" : key, value2);
const INFO_COLOR = "color:rgb(0, 145, 255)";
function prefix_for_source(source) {
  switch (source) {
    case "query":
      return "Q";
    case "mutation":
      return "M";
    case "action":
      return "A";
    case "any":
      return "?";
  }
}
class DefaultLogger {
  constructor(options) {
    __publicField$c(this, "_onLogLineFuncs");
    __publicField$c(this, "_verbose");
    this._onLogLineFuncs = {};
    this._verbose = options.verbose;
  }
  addLogLineListener(func) {
    let id = Math.random().toString(36).substring(2, 15);
    for (let i = 0; i < 10; i++) {
      if (this._onLogLineFuncs[id] === void 0) {
        break;
      }
      id = Math.random().toString(36).substring(2, 15);
    }
    this._onLogLineFuncs[id] = func;
    return () => {
      delete this._onLogLineFuncs[id];
    };
  }
  logVerbose(...args) {
    if (this._verbose) {
      for (const func of Object.values(this._onLogLineFuncs)) {
        func("debug", `${(/* @__PURE__ */ new Date()).toISOString()}`, ...args);
      }
    }
  }
  log(...args) {
    for (const func of Object.values(this._onLogLineFuncs)) {
      func("info", ...args);
    }
  }
  warn(...args) {
    for (const func of Object.values(this._onLogLineFuncs)) {
      func("warn", ...args);
    }
  }
  error(...args) {
    for (const func of Object.values(this._onLogLineFuncs)) {
      func("error", ...args);
    }
  }
}
function instantiateDefaultLogger(options) {
  const logger = new DefaultLogger(options);
  logger.addLogLineListener((level, ...args) => {
    switch (level) {
      case "debug":
        console.debug(...args);
        break;
      case "info":
        console.log(...args);
        break;
      case "warn":
        console.warn(...args);
        break;
      case "error":
        console.error(...args);
        break;
      default: {
        console.log(...args);
      }
    }
  });
  return logger;
}
function instantiateNoopLogger(options) {
  return new DefaultLogger(options);
}
function logForFunction(logger, type2, source, udfPath, message) {
  const prefix = prefix_for_source(source);
  if (typeof message === "object") {
    message = `ConvexError ${JSON.stringify(message.errorData, null, 2)}`;
  }
  if (type2 === "info") {
    const match = message.match(/^\[.*?\] /);
    if (match === null) {
      logger.error(
        `[CONVEX ${prefix}(${udfPath})] Could not parse console.log`
      );
      return;
    }
    const level = message.slice(1, match[0].length - 2);
    const args = message.slice(match[0].length);
    logger.log(`%c[CONVEX ${prefix}(${udfPath})] [${level}]`, INFO_COLOR, args);
  } else {
    logger.error(`[CONVEX ${prefix}(${udfPath})] ${message}`);
  }
}
function logFatalError(logger, message) {
  const errorMessage = `[CONVEX FATAL ERROR] ${message}`;
  logger.error(errorMessage);
  return new Error(errorMessage);
}
function createHybridErrorStacktrace(source, udfPath, result) {
  const prefix = prefix_for_source(source);
  return `[CONVEX ${prefix}(${udfPath})] ${result.errorMessage}
  Called by client`;
}
function forwardData(result, error) {
  error.data = result.errorData;
  return error;
}
function canonicalizeUdfPath(udfPath) {
  const pieces = udfPath.split(":");
  let moduleName;
  let functionName2;
  if (pieces.length === 1) {
    moduleName = pieces[0];
    functionName2 = "default";
  } else {
    moduleName = pieces.slice(0, pieces.length - 1).join(":");
    functionName2 = pieces[pieces.length - 1];
  }
  if (moduleName.endsWith(".js")) {
    moduleName = moduleName.slice(0, -3);
  }
  return `${moduleName}:${functionName2}`;
}
function serializePathAndArgs(udfPath, args) {
  return JSON.stringify({
    udfPath: canonicalizeUdfPath(udfPath),
    args: convexToJson(args)
  });
}
function serializePaginatedPathAndArgs(udfPath, args, options) {
  const { initialNumItems, id } = options;
  const result = JSON.stringify({
    type: "paginated",
    udfPath: canonicalizeUdfPath(udfPath),
    args: convexToJson(args),
    options: convexToJson({ initialNumItems, id })
  });
  return result;
}
var __defProp$b = Object.defineProperty;
var __defNormalProp$b = (obj, key, value2) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$b = (obj, key, value2) => __defNormalProp$b(obj, typeof key !== "symbol" ? key + "" : key, value2);
class LocalSyncState {
  constructor() {
    __publicField$b(this, "nextQueryId");
    __publicField$b(this, "querySetVersion");
    __publicField$b(this, "querySet");
    __publicField$b(this, "queryIdToToken");
    __publicField$b(this, "identityVersion");
    __publicField$b(this, "auth");
    __publicField$b(this, "outstandingQueriesOlderThanRestart");
    __publicField$b(this, "outstandingAuthOlderThanRestart");
    __publicField$b(this, "paused");
    __publicField$b(this, "pendingQuerySetModifications");
    this.nextQueryId = 0;
    this.querySetVersion = 0;
    this.identityVersion = 0;
    this.querySet = /* @__PURE__ */ new Map();
    this.queryIdToToken = /* @__PURE__ */ new Map();
    this.outstandingQueriesOlderThanRestart = /* @__PURE__ */ new Set();
    this.outstandingAuthOlderThanRestart = false;
    this.paused = false;
    this.pendingQuerySetModifications = /* @__PURE__ */ new Map();
  }
  hasSyncedPastLastReconnect() {
    return this.outstandingQueriesOlderThanRestart.size === 0 && !this.outstandingAuthOlderThanRestart;
  }
  markAuthCompletion() {
    this.outstandingAuthOlderThanRestart = false;
  }
  subscribe(udfPath, args, journal, componentPath) {
    const canonicalizedUdfPath = canonicalizeUdfPath(udfPath);
    const queryToken = serializePathAndArgs(canonicalizedUdfPath, args);
    const existingEntry = this.querySet.get(queryToken);
    if (existingEntry !== void 0) {
      existingEntry.numSubscribers += 1;
      return {
        queryToken,
        modification: null,
        unsubscribe: () => this.removeSubscriber(queryToken)
      };
    } else {
      const queryId = this.nextQueryId++;
      const query = {
        id: queryId,
        canonicalizedUdfPath,
        args,
        numSubscribers: 1,
        journal,
        componentPath
      };
      this.querySet.set(queryToken, query);
      this.queryIdToToken.set(queryId, queryToken);
      const baseVersion = this.querySetVersion;
      const newVersion = this.querySetVersion + 1;
      const add = {
        type: "Add",
        queryId,
        udfPath: canonicalizedUdfPath,
        args: [convexToJson(args)],
        journal,
        componentPath
      };
      if (this.paused) {
        this.pendingQuerySetModifications.set(queryId, add);
      } else {
        this.querySetVersion = newVersion;
      }
      const modification = {
        type: "ModifyQuerySet",
        baseVersion,
        newVersion,
        modifications: [add]
      };
      return {
        queryToken,
        modification,
        unsubscribe: () => this.removeSubscriber(queryToken)
      };
    }
  }
  transition(transition) {
    for (const modification of transition.modifications) {
      switch (modification.type) {
        case "QueryUpdated":
        case "QueryFailed": {
          this.outstandingQueriesOlderThanRestart.delete(modification.queryId);
          const journal = modification.journal;
          if (journal !== void 0) {
            const queryToken = this.queryIdToToken.get(modification.queryId);
            if (queryToken !== void 0) {
              this.querySet.get(queryToken).journal = journal;
            }
          }
          break;
        }
        case "QueryRemoved": {
          this.outstandingQueriesOlderThanRestart.delete(modification.queryId);
          break;
        }
        default: {
          throw new Error(`Invalid modification ${modification.type}`);
        }
      }
    }
  }
  queryId(udfPath, args) {
    const canonicalizedUdfPath = canonicalizeUdfPath(udfPath);
    const queryToken = serializePathAndArgs(canonicalizedUdfPath, args);
    const existingEntry = this.querySet.get(queryToken);
    if (existingEntry !== void 0) {
      return existingEntry.id;
    }
    return null;
  }
  isCurrentOrNewerAuthVersion(version2) {
    return version2 >= this.identityVersion;
  }
  getAuth() {
    return this.auth;
  }
  setAuth(value2) {
    this.auth = {
      tokenType: "User",
      value: value2
    };
    const baseVersion = this.identityVersion;
    if (!this.paused) {
      this.identityVersion = baseVersion + 1;
    }
    return {
      type: "Authenticate",
      baseVersion,
      ...this.auth
    };
  }
  setAdminAuth(value2, actingAs) {
    const auth = {
      tokenType: "Admin",
      value: value2,
      impersonating: actingAs
    };
    this.auth = auth;
    const baseVersion = this.identityVersion;
    if (!this.paused) {
      this.identityVersion = baseVersion + 1;
    }
    return {
      type: "Authenticate",
      baseVersion,
      ...auth
    };
  }
  clearAuth() {
    this.auth = void 0;
    this.markAuthCompletion();
    const baseVersion = this.identityVersion;
    if (!this.paused) {
      this.identityVersion = baseVersion + 1;
    }
    return {
      type: "Authenticate",
      tokenType: "None",
      baseVersion
    };
  }
  hasAuth() {
    return !!this.auth;
  }
  isNewAuth(value2) {
    return this.auth?.value !== value2;
  }
  queryPath(queryId) {
    const pathAndArgs = this.queryIdToToken.get(queryId);
    if (pathAndArgs) {
      return this.querySet.get(pathAndArgs).canonicalizedUdfPath;
    }
    return null;
  }
  queryArgs(queryId) {
    const pathAndArgs = this.queryIdToToken.get(queryId);
    if (pathAndArgs) {
      return this.querySet.get(pathAndArgs).args;
    }
    return null;
  }
  queryToken(queryId) {
    return this.queryIdToToken.get(queryId) ?? null;
  }
  queryJournal(queryToken) {
    return this.querySet.get(queryToken)?.journal;
  }
  restart(oldRemoteQueryResults) {
    this.unpause();
    this.outstandingQueriesOlderThanRestart.clear();
    const modifications = [];
    for (const localQuery of this.querySet.values()) {
      const add = {
        type: "Add",
        queryId: localQuery.id,
        udfPath: localQuery.canonicalizedUdfPath,
        args: [convexToJson(localQuery.args)],
        journal: localQuery.journal,
        componentPath: localQuery.componentPath
      };
      modifications.push(add);
      if (!oldRemoteQueryResults.has(localQuery.id)) {
        this.outstandingQueriesOlderThanRestart.add(localQuery.id);
      }
    }
    this.querySetVersion = 1;
    const querySet = {
      type: "ModifyQuerySet",
      baseVersion: 0,
      newVersion: 1,
      modifications
    };
    if (!this.auth) {
      this.identityVersion = 0;
      return [querySet, void 0];
    }
    this.outstandingAuthOlderThanRestart = true;
    const authenticate = {
      type: "Authenticate",
      baseVersion: 0,
      ...this.auth
    };
    this.identityVersion = 1;
    return [querySet, authenticate];
  }
  pause() {
    this.paused = true;
  }
  resume() {
    const querySet = this.pendingQuerySetModifications.size > 0 ? {
      type: "ModifyQuerySet",
      baseVersion: this.querySetVersion,
      newVersion: ++this.querySetVersion,
      modifications: Array.from(
        this.pendingQuerySetModifications.values()
      )
    } : void 0;
    const authenticate = this.auth !== void 0 ? {
      type: "Authenticate",
      baseVersion: this.identityVersion++,
      ...this.auth
    } : void 0;
    this.unpause();
    return [querySet, authenticate];
  }
  unpause() {
    this.paused = false;
    this.pendingQuerySetModifications.clear();
  }
  removeSubscriber(queryToken) {
    const localQuery = this.querySet.get(queryToken);
    if (localQuery.numSubscribers > 1) {
      localQuery.numSubscribers -= 1;
      return null;
    } else {
      this.querySet.delete(queryToken);
      this.queryIdToToken.delete(localQuery.id);
      this.outstandingQueriesOlderThanRestart.delete(localQuery.id);
      const baseVersion = this.querySetVersion;
      const newVersion = this.querySetVersion + 1;
      const remove = {
        type: "Remove",
        queryId: localQuery.id
      };
      if (this.paused) {
        if (this.pendingQuerySetModifications.has(localQuery.id)) {
          this.pendingQuerySetModifications.delete(localQuery.id);
        } else {
          this.pendingQuerySetModifications.set(localQuery.id, remove);
        }
      } else {
        this.querySetVersion = newVersion;
      }
      return {
        type: "ModifyQuerySet",
        baseVersion,
        newVersion,
        modifications: [remove]
      };
    }
  }
}
var __defProp$a = Object.defineProperty;
var __defNormalProp$a = (obj, key, value2) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$a = (obj, key, value2) => __defNormalProp$a(obj, typeof key !== "symbol" ? key + "" : key, value2);
class RequestManager {
  constructor(logger, markConnectionStateDirty) {
    this.logger = logger;
    this.markConnectionStateDirty = markConnectionStateDirty;
    __publicField$a(this, "inflightRequests");
    __publicField$a(this, "requestsOlderThanRestart");
    __publicField$a(this, "inflightMutationsCount", 0);
    __publicField$a(this, "inflightActionsCount", 0);
    this.inflightRequests = /* @__PURE__ */ new Map();
    this.requestsOlderThanRestart = /* @__PURE__ */ new Set();
  }
  request(message, sent) {
    const result = new Promise((resolve) => {
      const status = sent ? "Requested" : "NotSent";
      this.inflightRequests.set(message.requestId, {
        message,
        status: { status, requestedAt: /* @__PURE__ */ new Date(), onResult: resolve }
      });
      if (message.type === "Mutation") {
        this.inflightMutationsCount++;
      } else if (message.type === "Action") {
        this.inflightActionsCount++;
      }
    });
    this.markConnectionStateDirty();
    return result;
  }
  /**
   * Update the state after receiving a response.
   *
   * @returns A RequestId if the request is complete and its optimistic update
   * can be dropped, null otherwise.
   */
  onResponse(response) {
    const requestInfo = this.inflightRequests.get(response.requestId);
    if (requestInfo === void 0) {
      return null;
    }
    if (requestInfo.status.status === "Completed") {
      return null;
    }
    const udfType = requestInfo.message.type === "Mutation" ? "mutation" : "action";
    const udfPath = requestInfo.message.udfPath;
    for (const line of response.logLines) {
      logForFunction(this.logger, "info", udfType, udfPath, line);
    }
    const status = requestInfo.status;
    let result;
    let onResolve;
    if (response.success) {
      result = {
        success: true,
        logLines: response.logLines,
        value: jsonToConvex(response.result)
      };
      onResolve = () => status.onResult(result);
    } else {
      const errorMessage = response.result;
      const { errorData } = response;
      logForFunction(this.logger, "error", udfType, udfPath, errorMessage);
      result = {
        success: false,
        errorMessage,
        errorData: errorData !== void 0 ? jsonToConvex(errorData) : void 0,
        logLines: response.logLines
      };
      onResolve = () => status.onResult(result);
    }
    if (response.type === "ActionResponse" || !response.success) {
      onResolve();
      this.inflightRequests.delete(response.requestId);
      this.requestsOlderThanRestart.delete(response.requestId);
      if (requestInfo.message.type === "Action") {
        this.inflightActionsCount--;
      } else if (requestInfo.message.type === "Mutation") {
        this.inflightMutationsCount--;
      }
      this.markConnectionStateDirty();
      return { requestId: response.requestId, result };
    }
    requestInfo.status = {
      status: "Completed",
      result,
      ts: response.ts,
      onResolve
    };
    return null;
  }
  // Remove and returns completed requests.
  removeCompleted(ts) {
    const completeRequests = /* @__PURE__ */ new Map();
    for (const [requestId, requestInfo] of this.inflightRequests.entries()) {
      const status = requestInfo.status;
      if (status.status === "Completed" && status.ts.lessThanOrEqual(ts)) {
        status.onResolve();
        completeRequests.set(requestId, status.result);
        if (requestInfo.message.type === "Mutation") {
          this.inflightMutationsCount--;
        } else if (requestInfo.message.type === "Action") {
          this.inflightActionsCount--;
        }
        this.inflightRequests.delete(requestId);
        this.requestsOlderThanRestart.delete(requestId);
      }
    }
    if (completeRequests.size > 0) {
      this.markConnectionStateDirty();
    }
    return completeRequests;
  }
  restart() {
    this.requestsOlderThanRestart = new Set(this.inflightRequests.keys());
    const allMessages = [];
    for (const [requestId, value2] of this.inflightRequests) {
      if (value2.status.status === "NotSent") {
        value2.status.status = "Requested";
        allMessages.push(value2.message);
        continue;
      }
      if (value2.message.type === "Mutation") {
        allMessages.push(value2.message);
      } else if (value2.message.type === "Action") {
        this.inflightRequests.delete(requestId);
        this.requestsOlderThanRestart.delete(requestId);
        this.inflightActionsCount--;
        if (value2.status.status === "Completed") {
          throw new Error("Action should never be in 'Completed' state");
        }
        value2.status.onResult({
          success: false,
          errorMessage: "Connection lost while action was in flight",
          logLines: []
        });
      }
    }
    this.markConnectionStateDirty();
    return allMessages;
  }
  resume() {
    const allMessages = [];
    for (const [, value2] of this.inflightRequests) {
      if (value2.status.status === "NotSent") {
        value2.status.status = "Requested";
        allMessages.push(value2.message);
        continue;
      }
    }
    return allMessages;
  }
  /**
   * @returns true if there are any requests that have been requested but have
   * not be completed yet.
   */
  hasIncompleteRequests() {
    for (const requestInfo of this.inflightRequests.values()) {
      if (requestInfo.status.status === "Requested") {
        return true;
      }
    }
    return false;
  }
  /**
   * @returns true if there are any inflight requests, including ones that have
   * completed on the server, but have not been applied.
   */
  hasInflightRequests() {
    return this.inflightRequests.size > 0;
  }
  /**
   * @returns true if there are any inflight requests, that have been hanging around
   * since prior to the most recent restart.
   */
  hasSyncedPastLastReconnect() {
    return this.requestsOlderThanRestart.size === 0;
  }
  timeOfOldestInflightRequest() {
    if (this.inflightRequests.size === 0) {
      return null;
    }
    let oldestInflightRequest = Date.now();
    for (const request of this.inflightRequests.values()) {
      if (request.status.status !== "Completed") {
        if (request.status.requestedAt.getTime() < oldestInflightRequest) {
          oldestInflightRequest = request.status.requestedAt.getTime();
        }
      }
    }
    return new Date(oldestInflightRequest);
  }
  /**
   * @returns The number of mutations currently in flight.
   */
  inflightMutations() {
    return this.inflightMutationsCount;
  }
  /**
   * @returns The number of actions currently in flight.
   */
  inflightActions() {
    return this.inflightActionsCount;
  }
}
const functionName = /* @__PURE__ */ Symbol.for("functionName");
const toReferencePath = /* @__PURE__ */ Symbol.for("toReferencePath");
function extractReferencePath(reference2) {
  return reference2[toReferencePath] ?? null;
}
function isFunctionHandle(s) {
  return s.startsWith("function://");
}
function getFunctionAddress(functionReference) {
  let functionAddress;
  if (typeof functionReference === "string") {
    if (isFunctionHandle(functionReference)) {
      functionAddress = { functionHandle: functionReference };
    } else {
      functionAddress = { name: functionReference };
    }
  } else if (functionReference[functionName]) {
    functionAddress = { name: functionReference[functionName] };
  } else {
    const referencePath = extractReferencePath(functionReference);
    if (!referencePath) {
      throw new Error(`${functionReference} is not a functionReference`);
    }
    functionAddress = { reference: referencePath };
  }
  return functionAddress;
}
function getFunctionName(functionReference) {
  const address = getFunctionAddress(functionReference);
  if (address.name === void 0) {
    if (address.functionHandle !== void 0) {
      throw new Error(
        `Expected function reference like "api.file.func" or "internal.file.func", but received function handle ${address.functionHandle}`
      );
    } else if (address.reference !== void 0) {
      throw new Error(
        `Expected function reference in the current component like "api.file.func" or "internal.file.func", but received reference ${address.reference}`
      );
    }
    throw new Error(
      `Expected function reference like "api.file.func" or "internal.file.func", but received ${JSON.stringify(address)}`
    );
  }
  if (typeof functionReference === "string") return functionReference;
  const name = functionReference[functionName];
  if (!name) {
    throw new Error(`${functionReference} is not a functionReference`);
  }
  return name;
}
function makeFunctionReference(name) {
  return { [functionName]: name };
}
function createApi(pathParts = []) {
  const handler = {
    get(_, prop) {
      if (typeof prop === "string") {
        const newParts = [...pathParts, prop];
        return createApi(newParts);
      } else if (prop === functionName) {
        if (pathParts.length < 2) {
          const found = ["api", ...pathParts].join(".");
          throw new Error(
            `API path is expected to be of the form \`api.moduleName.functionName\`. Found: \`${found}\``
          );
        }
        const path = pathParts.slice(0, -1).join("/");
        const exportName = pathParts[pathParts.length - 1];
        if (exportName === "default") {
          return path;
        } else {
          return path + ":" + exportName;
        }
      } else if (prop === Symbol.toStringTag) {
        return "FunctionReference";
      } else {
        return void 0;
      }
    }
  };
  return new Proxy({}, handler);
}
createApi();
var __defProp$9 = Object.defineProperty;
var __defNormalProp$9 = (obj, key, value2) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$9 = (obj, key, value2) => __defNormalProp$9(obj, typeof key !== "symbol" ? key + "" : key, value2);
class OptimisticLocalStoreImpl {
  constructor(queryResults) {
    __publicField$9(this, "queryResults");
    __publicField$9(this, "modifiedQueries");
    this.queryResults = queryResults;
    this.modifiedQueries = [];
  }
  getQuery(query, ...args) {
    const queryArgs = parseArgs(args[0]);
    const name = getFunctionName(query);
    const queryResult = this.queryResults.get(
      serializePathAndArgs(name, queryArgs)
    );
    if (queryResult === void 0) {
      return void 0;
    }
    return OptimisticLocalStoreImpl.queryValue(queryResult.result);
  }
  getAllQueries(query) {
    const queriesWithName = [];
    const name = getFunctionName(query);
    for (const queryResult of this.queryResults.values()) {
      if (queryResult.udfPath === canonicalizeUdfPath(name)) {
        queriesWithName.push({
          args: queryResult.args,
          value: OptimisticLocalStoreImpl.queryValue(queryResult.result)
        });
      }
    }
    return queriesWithName;
  }
  setQuery(queryReference, args, value2) {
    const queryArgs = parseArgs(args);
    const name = getFunctionName(queryReference);
    const queryToken = serializePathAndArgs(name, queryArgs);
    let result;
    if (value2 === void 0) {
      result = void 0;
    } else {
      result = {
        success: true,
        value: value2,
        // It's an optimistic update, so there are no function logs to show.
        logLines: []
      };
    }
    const query = {
      udfPath: name,
      args: queryArgs,
      result
    };
    this.queryResults.set(queryToken, query);
    this.modifiedQueries.push(queryToken);
  }
  static queryValue(result) {
    if (result === void 0) {
      return void 0;
    } else if (result.success) {
      return result.value;
    } else {
      return void 0;
    }
  }
}
class OptimisticQueryResults {
  constructor() {
    __publicField$9(this, "queryResults");
    __publicField$9(this, "optimisticUpdates");
    this.queryResults = /* @__PURE__ */ new Map();
    this.optimisticUpdates = [];
  }
  /**
   * Apply all optimistic updates on top of server query results
   */
  ingestQueryResultsFromServer(serverQueryResults, optimisticUpdatesToDrop) {
    this.optimisticUpdates = this.optimisticUpdates.filter((updateAndId) => {
      return !optimisticUpdatesToDrop.has(updateAndId.mutationId);
    });
    const oldQueryResults = this.queryResults;
    this.queryResults = new Map(serverQueryResults);
    const localStore = new OptimisticLocalStoreImpl(this.queryResults);
    for (const updateAndId of this.optimisticUpdates) {
      updateAndId.update(localStore);
    }
    const changedQueries = [];
    for (const [queryToken, query] of this.queryResults) {
      const oldQuery = oldQueryResults.get(queryToken);
      if (oldQuery === void 0 || oldQuery.result !== query.result) {
        changedQueries.push(queryToken);
      }
    }
    return changedQueries;
  }
  applyOptimisticUpdate(update, mutationId) {
    this.optimisticUpdates.push({
      update,
      mutationId
    });
    const localStore = new OptimisticLocalStoreImpl(this.queryResults);
    update(localStore);
    return localStore.modifiedQueries;
  }
  /**
   * "Raw" with respect to errors vs values, but query results still have
   * optimistic updates applied.
   *
   * @internal
   */
  rawQueryResult(queryToken) {
    const query = this.queryResults.get(queryToken);
    if (query === void 0) {
      return void 0;
    }
    return query.result;
  }
  queryResult(queryToken) {
    const query = this.queryResults.get(queryToken);
    if (query === void 0) {
      return void 0;
    }
    const result = query.result;
    if (result === void 0) {
      return void 0;
    } else if (result.success) {
      return result.value;
    } else {
      if (result.errorData !== void 0) {
        throw forwardData(
          result,
          new ConvexError(
            createHybridErrorStacktrace("query", query.udfPath, result)
          )
        );
      }
      throw new Error(
        createHybridErrorStacktrace("query", query.udfPath, result)
      );
    }
  }
  hasQueryResult(queryToken) {
    return this.queryResults.get(queryToken) !== void 0;
  }
  /**
   * @internal
   */
  queryLogs(queryToken) {
    const query = this.queryResults.get(queryToken);
    return query?.result?.logLines;
  }
}
var __defProp$8 = Object.defineProperty;
var __defNormalProp$8 = (obj, key, value2) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$8 = (obj, key, value2) => __defNormalProp$8(obj, typeof key !== "symbol" ? key + "" : key, value2);
class Long {
  constructor(low, high) {
    __publicField$8(this, "low");
    __publicField$8(this, "high");
    __publicField$8(this, "__isUnsignedLong__");
    this.low = low | 0;
    this.high = high | 0;
    this.__isUnsignedLong__ = true;
  }
  static isLong(obj) {
    return (obj && obj.__isUnsignedLong__) === true;
  }
  // prettier-ignore
  static fromBytesLE(bytes) {
    return new Long(
      bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24,
      bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24
    );
  }
  // prettier-ignore
  toBytesLE() {
    const hi = this.high;
    const lo = this.low;
    return [
      lo & 255,
      lo >>> 8 & 255,
      lo >>> 16 & 255,
      lo >>> 24,
      hi & 255,
      hi >>> 8 & 255,
      hi >>> 16 & 255,
      hi >>> 24
    ];
  }
  static fromNumber(value2) {
    if (isNaN(value2)) return UZERO;
    if (value2 < 0) return UZERO;
    if (value2 >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
    return new Long(value2 % TWO_PWR_32_DBL | 0, value2 / TWO_PWR_32_DBL | 0);
  }
  toString() {
    return (BigInt(this.high) * BigInt(TWO_PWR_32_DBL) + BigInt(this.low)).toString();
  }
  equals(other) {
    if (!Long.isLong(other)) other = Long.fromValue(other);
    if (this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
    return this.high === other.high && this.low === other.low;
  }
  notEquals(other) {
    return !this.equals(other);
  }
  comp(other) {
    if (!Long.isLong(other)) other = Long.fromValue(other);
    if (this.equals(other)) return 0;
    return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
  }
  lessThanOrEqual(other) {
    return this.comp(
      /* validates */
      other
    ) <= 0;
  }
  static fromValue(val) {
    if (typeof val === "number") return Long.fromNumber(val);
    return new Long(val.low, val.high);
  }
}
const UZERO = new Long(0, 0);
const TWO_PWR_16_DBL = 1 << 16;
const TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
const TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
const MAX_UNSIGNED_VALUE = new Long(4294967295 | 0, 4294967295 | 0);
var __defProp$7 = Object.defineProperty;
var __defNormalProp$7 = (obj, key, value2) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$7 = (obj, key, value2) => __defNormalProp$7(obj, typeof key !== "symbol" ? key + "" : key, value2);
class RemoteQuerySet {
  constructor(queryPath, logger) {
    __publicField$7(this, "version");
    __publicField$7(this, "remoteQuerySet");
    __publicField$7(this, "queryPath");
    __publicField$7(this, "logger");
    this.version = { querySet: 0, ts: Long.fromNumber(0), identity: 0 };
    this.remoteQuerySet = /* @__PURE__ */ new Map();
    this.queryPath = queryPath;
    this.logger = logger;
  }
  transition(transition) {
    const start = transition.startVersion;
    if (this.version.querySet !== start.querySet || this.version.ts.notEquals(start.ts) || this.version.identity !== start.identity) {
      throw new Error(
        `Invalid start version: ${start.ts.toString()}:${start.querySet}:${start.identity}, transitioning from ${this.version.ts.toString()}:${this.version.querySet}:${this.version.identity}`
      );
    }
    for (const modification of transition.modifications) {
      switch (modification.type) {
        case "QueryUpdated": {
          const queryPath = this.queryPath(modification.queryId);
          if (queryPath) {
            for (const line of modification.logLines) {
              logForFunction(this.logger, "info", "query", queryPath, line);
            }
          }
          const value2 = jsonToConvex(modification.value ?? null);
          this.remoteQuerySet.set(modification.queryId, {
            success: true,
            value: value2,
            logLines: modification.logLines
          });
          break;
        }
        case "QueryFailed": {
          const queryPath = this.queryPath(modification.queryId);
          if (queryPath) {
            for (const line of modification.logLines) {
              logForFunction(this.logger, "info", "query", queryPath, line);
            }
          }
          const { errorData } = modification;
          this.remoteQuerySet.set(modification.queryId, {
            success: false,
            errorMessage: modification.errorMessage,
            errorData: errorData !== void 0 ? jsonToConvex(errorData) : void 0,
            logLines: modification.logLines
          });
          break;
        }
        case "QueryRemoved": {
          this.remoteQuerySet.delete(modification.queryId);
          break;
        }
        default: {
          throw new Error(`Invalid modification ${modification.type}`);
        }
      }
    }
    this.version = transition.endVersion;
  }
  remoteQueryResults() {
    return this.remoteQuerySet;
  }
  timestamp() {
    return this.version.ts;
  }
}
function u64ToLong(encoded) {
  const integerBytes = toByteArray(encoded);
  return Long.fromBytesLE(Array.from(integerBytes));
}
function longToU64(raw) {
  const integerBytes = new Uint8Array(raw.toBytesLE());
  return fromByteArray(integerBytes);
}
function parseServerMessage(encoded) {
  switch (encoded.type) {
    case "FatalError":
    case "AuthError":
    case "ActionResponse":
    case "TransitionChunk":
    case "Ping": {
      return { ...encoded };
    }
    case "MutationResponse": {
      if (encoded.success) {
        return { ...encoded, ts: u64ToLong(encoded.ts) };
      } else {
        return { ...encoded };
      }
    }
    case "Transition": {
      return {
        ...encoded,
        startVersion: {
          ...encoded.startVersion,
          ts: u64ToLong(encoded.startVersion.ts)
        },
        endVersion: {
          ...encoded.endVersion,
          ts: u64ToLong(encoded.endVersion.ts)
        }
      };
    }
  }
  return void 0;
}
function encodeClientMessage(message) {
  switch (message.type) {
    case "Authenticate":
    case "ModifyQuerySet":
    case "Mutation":
    case "Action":
    case "Event": {
      return { ...message };
    }
    case "Connect": {
      if (message.maxObservedTimestamp !== void 0) {
        return {
          ...message,
          maxObservedTimestamp: longToU64(message.maxObservedTimestamp)
        };
      } else {
        return { ...message, maxObservedTimestamp: void 0 };
      }
    }
  }
  return void 0;
}
var __defProp$6 = Object.defineProperty;
var __defNormalProp$6 = (obj, key, value2) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$6 = (obj, key, value2) => __defNormalProp$6(obj, typeof key !== "symbol" ? key + "" : key, value2);
const CLOSE_NORMAL = 1e3;
const CLOSE_GOING_AWAY = 1001;
const CLOSE_NO_STATUS = 1005;
const CLOSE_NOT_FOUND = 4040;
let firstTime;
function monotonicMillis() {
  if (firstTime === void 0) {
    firstTime = Date.now();
  }
  if (typeof performance === "undefined" || !performance.now) {
    return Date.now();
  }
  return Math.round(firstTime + performance.now());
}
function prettyNow() {
  return `t=${Math.round((monotonicMillis() - firstTime) / 100) / 10}s`;
}
const serverDisconnectErrors = {
  // A known error, e.g. during a restart or push
  InternalServerError: { timeout: 1e3 },
  // ErrorMetadata::overloaded() messages that we realy should back off
  SubscriptionsWorkerFullError: { timeout: 3e3 },
  TooManyConcurrentRequests: { timeout: 3e3 },
  CommitterFullError: { timeout: 3e3 },
  AwsTooManyRequestsException: { timeout: 3e3 },
  ExecuteFullError: { timeout: 3e3 },
  SystemTimeoutError: { timeout: 3e3 },
  ExpiredInQueue: { timeout: 3e3 },
  // ErrorMetadata::feature_temporarily_unavailable() that typically indicate a deploy just happened
  VectorIndexesUnavailable: { timeout: 1e3 },
  SearchIndexesUnavailable: { timeout: 1e3 },
  TableSummariesUnavailable: { timeout: 1e3 },
  // More ErrorMetadata::overloaded()
  VectorIndexTooLarge: { timeout: 3e3 },
  SearchIndexTooLarge: { timeout: 3e3 },
  TooManyWritesInTimePeriod: { timeout: 3e3 }
};
function classifyDisconnectError(s) {
  if (s === void 0) return "Unknown";
  for (const prefix of Object.keys(
    serverDisconnectErrors
  )) {
    if (s.startsWith(prefix)) {
      return prefix;
    }
  }
  return "Unknown";
}
class WebSocketManager {
  constructor(uri, callbacks, webSocketConstructor, logger, markConnectionStateDirty, debug) {
    this.markConnectionStateDirty = markConnectionStateDirty;
    this.debug = debug;
    __publicField$6(this, "socket");
    __publicField$6(this, "connectionCount");
    __publicField$6(this, "_hasEverConnected", false);
    __publicField$6(this, "lastCloseReason");
    __publicField$6(this, "transitionChunkBuffer", null);
    __publicField$6(this, "defaultInitialBackoff");
    __publicField$6(this, "maxBackoff");
    __publicField$6(this, "retries");
    __publicField$6(this, "serverInactivityThreshold");
    __publicField$6(this, "reconnectDueToServerInactivityTimeout");
    __publicField$6(this, "scheduledReconnect", null);
    __publicField$6(this, "networkOnlineHandler", null);
    __publicField$6(this, "pendingNetworkRecoveryInfo", null);
    __publicField$6(this, "uri");
    __publicField$6(this, "onOpen");
    __publicField$6(this, "onResume");
    __publicField$6(this, "onMessage");
    __publicField$6(this, "webSocketConstructor");
    __publicField$6(this, "logger");
    __publicField$6(this, "onServerDisconnectError");
    this.webSocketConstructor = webSocketConstructor;
    this.socket = { state: "disconnected" };
    this.connectionCount = 0;
    this.lastCloseReason = "InitialConnect";
    this.defaultInitialBackoff = 1e3;
    this.maxBackoff = 16e3;
    this.retries = 0;
    this.serverInactivityThreshold = 6e4;
    this.reconnectDueToServerInactivityTimeout = null;
    this.uri = uri;
    this.onOpen = callbacks.onOpen;
    this.onResume = callbacks.onResume;
    this.onMessage = callbacks.onMessage;
    this.onServerDisconnectError = callbacks.onServerDisconnectError;
    this.logger = logger;
    this.setupNetworkListener();
    this.connect();
  }
  setSocketState(state) {
    this.socket = state;
    this._logVerbose(
      `socket state changed: ${this.socket.state}, paused: ${"paused" in this.socket ? this.socket.paused : void 0}`
    );
    this.markConnectionStateDirty();
  }
  setupNetworkListener() {
    if (typeof window === "undefined" || typeof window.addEventListener !== "function") {
      return;
    }
    if (this.networkOnlineHandler !== null) {
      return;
    }
    this.networkOnlineHandler = () => {
      this._logVerbose("network online event detected");
      this.tryReconnectImmediately();
    };
    window.addEventListener("online", this.networkOnlineHandler);
    this._logVerbose("network online event listener registered");
  }
  cleanupNetworkListener() {
    if (this.networkOnlineHandler && typeof window !== "undefined" && typeof window.removeEventListener === "function") {
      window.removeEventListener("online", this.networkOnlineHandler);
      this.networkOnlineHandler = null;
      this._logVerbose("network online event listener removed");
    }
  }
  assembleTransition(chunk) {
    if (chunk.partNumber < 0 || chunk.partNumber >= chunk.totalParts || chunk.totalParts === 0 || this.transitionChunkBuffer && (this.transitionChunkBuffer.totalParts !== chunk.totalParts || this.transitionChunkBuffer.transitionId !== chunk.transitionId)) {
      this.transitionChunkBuffer = null;
      throw new Error("Invalid TransitionChunk");
    }
    if (this.transitionChunkBuffer === null) {
      this.transitionChunkBuffer = {
        chunks: [],
        totalParts: chunk.totalParts,
        transitionId: chunk.transitionId
      };
    }
    if (chunk.partNumber !== this.transitionChunkBuffer.chunks.length) {
      const expectedLength = this.transitionChunkBuffer.chunks.length;
      this.transitionChunkBuffer = null;
      throw new Error(
        `TransitionChunk received out of order: expected part ${expectedLength}, got ${chunk.partNumber}`
      );
    }
    this.transitionChunkBuffer.chunks.push(chunk.chunk);
    if (this.transitionChunkBuffer.chunks.length === chunk.totalParts) {
      const fullJson = this.transitionChunkBuffer.chunks.join("");
      this.transitionChunkBuffer = null;
      const transition = parseServerMessage(JSON.parse(fullJson));
      if (transition.type !== "Transition") {
        throw new Error(
          `Expected Transition, got ${transition.type} after assembling chunks`
        );
      }
      return transition;
    }
    return null;
  }
  connect() {
    if (this.socket.state === "terminated") {
      return;
    }
    if (this.socket.state !== "disconnected" && this.socket.state !== "stopped") {
      throw new Error(
        "Didn't start connection from disconnected state: " + this.socket.state
      );
    }
    const ws = new this.webSocketConstructor(this.uri);
    this._logVerbose("constructed WebSocket");
    this.setSocketState({
      state: "connecting",
      ws,
      paused: "no"
    });
    this.resetServerInactivityTimeout();
    ws.onopen = () => {
      this.logger.logVerbose("begin ws.onopen");
      if (this.socket.state !== "connecting") {
        throw new Error("onopen called with socket not in connecting state");
      }
      this.setSocketState({
        state: "ready",
        ws,
        paused: this.socket.paused === "yes" ? "uninitialized" : "no"
      });
      this.resetServerInactivityTimeout();
      if (this.socket.paused === "no") {
        this._hasEverConnected = true;
        this.onOpen({
          connectionCount: this.connectionCount,
          lastCloseReason: this.lastCloseReason,
          clientTs: monotonicMillis()
        });
      }
      if (this.lastCloseReason !== "InitialConnect") {
        if (this.lastCloseReason) {
          this.logger.log(
            "WebSocket reconnected at",
            prettyNow(),
            "after disconnect due to",
            this.lastCloseReason
          );
        } else {
          this.logger.log("WebSocket reconnected at", prettyNow());
        }
      }
      this.connectionCount += 1;
      this.lastCloseReason = null;
      if (this.pendingNetworkRecoveryInfo !== null) {
        const { timeSavedMs } = this.pendingNetworkRecoveryInfo;
        this.pendingNetworkRecoveryInfo = null;
        this.sendMessage({
          type: "Event",
          eventType: "NetworkRecoveryReconnect",
          event: { timeSavedMs }
        });
        this.logger.log(
          `Network recovery reconnect saved ~${Math.round(timeSavedMs / 1e3)}s of waiting`
        );
      }
    };
    ws.onerror = (error) => {
      this.transitionChunkBuffer = null;
      const message = error.message;
      if (message) {
        this.logger.log(`WebSocket error message: ${message}`);
      }
    };
    ws.onmessage = (message) => {
      this.resetServerInactivityTimeout();
      const messageLength = message.data.length;
      let serverMessage = parseServerMessage(JSON.parse(message.data));
      this._logVerbose(`received ws message with type ${serverMessage.type}`);
      if (serverMessage.type === "Ping") {
        return;
      }
      if (serverMessage.type === "TransitionChunk") {
        const transition = this.assembleTransition(serverMessage);
        if (!transition) {
          return;
        }
        serverMessage = transition;
        this._logVerbose(
          `assembled full ws message of type ${serverMessage.type}`
        );
      }
      if (this.transitionChunkBuffer !== null) {
        this.transitionChunkBuffer = null;
        this.logger.log(
          `Received unexpected ${serverMessage.type} while buffering TransitionChunks`
        );
      }
      if (serverMessage.type === "Transition") {
        this.reportLargeTransition({
          messageLength,
          transition: serverMessage
        });
      }
      const response = this.onMessage(serverMessage);
      if (response.hasSyncedPastLastReconnect) {
        this.retries = 0;
        this.markConnectionStateDirty();
      }
    };
    ws.onclose = (event) => {
      this._logVerbose("begin ws.onclose");
      this.transitionChunkBuffer = null;
      if (this.lastCloseReason === null) {
        this.lastCloseReason = event.reason || `closed with code ${event.code}`;
      }
      if (event.code !== CLOSE_NORMAL && event.code !== CLOSE_GOING_AWAY && // This commonly gets fired on mobile apps when the app is backgrounded
      event.code !== CLOSE_NO_STATUS && event.code !== CLOSE_NOT_FOUND) {
        let msg = `WebSocket closed with code ${event.code}`;
        if (event.reason) {
          msg += `: ${event.reason}`;
        }
        this.logger.log(msg);
        if (this.onServerDisconnectError && event.reason) {
          this.onServerDisconnectError(msg);
        }
      }
      const reason = classifyDisconnectError(event.reason);
      this.scheduleReconnect(reason);
      return;
    };
  }
  /**
   * @returns The state of the {@link Socket}.
   */
  socketState() {
    return this.socket.state;
  }
  /**
   * @param message - A ClientMessage to send.
   * @returns Whether the message (might have been) sent.
   */
  sendMessage(message) {
    const messageForLog = {
      type: message.type,
      ...message.type === "Authenticate" && message.tokenType === "User" ? {
        value: `...${message.value.slice(-7)}`
      } : {}
    };
    if (this.socket.state === "ready" && this.socket.paused === "no") {
      const encodedMessage = encodeClientMessage(message);
      const request = JSON.stringify(encodedMessage);
      let sent = false;
      try {
        this.socket.ws.send(request);
        sent = true;
      } catch (error) {
        this.logger.log(
          `Failed to send message on WebSocket, reconnecting: ${error}`
        );
        this.closeAndReconnect("FailedToSendMessage");
      }
      this._logVerbose(
        `${sent ? "sent" : "failed to send"} message with type ${message.type}: ${JSON.stringify(
          messageForLog
        )}`
      );
      return true;
    }
    this._logVerbose(
      `message not sent (socket state: ${this.socket.state}, paused: ${"paused" in this.socket ? this.socket.paused : void 0}): ${JSON.stringify(
        messageForLog
      )}`
    );
    return false;
  }
  resetServerInactivityTimeout() {
    if (this.socket.state === "terminated") {
      return;
    }
    if (this.reconnectDueToServerInactivityTimeout !== null) {
      clearTimeout(this.reconnectDueToServerInactivityTimeout);
      this.reconnectDueToServerInactivityTimeout = null;
    }
    this.reconnectDueToServerInactivityTimeout = setTimeout(() => {
      this.closeAndReconnect("InactiveServer");
    }, this.serverInactivityThreshold);
  }
  scheduleReconnect(reason) {
    if (this.scheduledReconnect) {
      clearTimeout(this.scheduledReconnect.timeout);
      this.scheduledReconnect = null;
    }
    this.socket = { state: "disconnected" };
    const backoff = this.nextBackoff(reason);
    this.markConnectionStateDirty();
    this.logger.log(`Attempting reconnect in ${Math.round(backoff)}ms`);
    const scheduledAt = monotonicMillis();
    const timeoutId = setTimeout(() => {
      if (this.scheduledReconnect?.timeout === timeoutId) {
        this.scheduledReconnect = null;
        this.connect();
      }
    }, backoff);
    this.scheduledReconnect = {
      timeout: timeoutId,
      scheduledAt,
      backoffMs: backoff
    };
  }
  /**
   * Close the WebSocket and schedule a reconnect.
   *
   * This should be used when we hit an error and would like to restart the session.
   */
  closeAndReconnect(closeReason) {
    this._logVerbose(`begin closeAndReconnect with reason ${closeReason}`);
    switch (this.socket.state) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return;
      case "connecting":
      case "ready": {
        this.lastCloseReason = closeReason;
        void this.close();
        this.scheduleReconnect("client");
        return;
      }
      default: {
        this.socket;
      }
    }
  }
  /**
   * Close the WebSocket, being careful to clear the onclose handler to avoid re-entrant
   * calls. Use this instead of directly calling `ws.close()`
   *
   * It is the callers responsibility to update the state after this method is called so that the
   * closed socket is not accessible or used again after this method is called
   */
  close() {
    this.transitionChunkBuffer = null;
    switch (this.socket.state) {
      case "disconnected":
      case "terminated":
      case "stopped":
        return Promise.resolve();
      case "connecting": {
        const ws = this.socket.ws;
        ws.onmessage = (_message) => {
          this._logVerbose("Ignoring message received after close");
        };
        return new Promise((r) => {
          ws.onclose = () => {
            this._logVerbose("Closed after connecting");
            r();
          };
          ws.onopen = () => {
            this._logVerbose("Opened after connecting");
            ws.close();
          };
        });
      }
      case "ready": {
        this._logVerbose("ws.close called");
        const ws = this.socket.ws;
        ws.onmessage = (_message) => {
          this._logVerbose("Ignoring message received after close");
        };
        const result = new Promise((r) => {
          ws.onclose = () => {
            r();
          };
        });
        ws.close();
        return result;
      }
      default: {
        this.socket;
        return Promise.resolve();
      }
    }
  }
  /**
   * Close the WebSocket and do not reconnect.
   * @returns A Promise that resolves when the WebSocket `onClose` callback is called.
   */
  terminate() {
    if (this.reconnectDueToServerInactivityTimeout) {
      clearTimeout(this.reconnectDueToServerInactivityTimeout);
    }
    if (this.scheduledReconnect) {
      clearTimeout(this.scheduledReconnect.timeout);
      this.scheduledReconnect = null;
    }
    this.cleanupNetworkListener();
    switch (this.socket.state) {
      case "terminated":
      case "stopped":
      case "disconnected":
      case "connecting":
      case "ready": {
        const result = this.close();
        this.setSocketState({ state: "terminated" });
        return result;
      }
      default: {
        this.socket;
        throw new Error(
          `Invalid websocket state: ${this.socket.state}`
        );
      }
    }
  }
  stop() {
    switch (this.socket.state) {
      case "terminated":
        return Promise.resolve();
      case "connecting":
      case "stopped":
      case "disconnected":
      case "ready": {
        this.cleanupNetworkListener();
        const result = this.close();
        this.socket = { state: "stopped" };
        return result;
      }
      default: {
        this.socket;
        return Promise.resolve();
      }
    }
  }
  /**
   * Create a new WebSocket after a previous `stop()`, unless `terminate()` was
   * called before.
   */
  tryRestart() {
    switch (this.socket.state) {
      case "stopped":
        break;
      case "terminated":
      case "connecting":
      case "ready":
      case "disconnected":
        this.logger.logVerbose("Restart called without stopping first");
        return;
      default: {
        this.socket;
      }
    }
    this.setupNetworkListener();
    this.connect();
  }
  pause() {
    switch (this.socket.state) {
      case "disconnected":
      case "stopped":
      case "terminated":
        return;
      case "connecting":
      case "ready": {
        this.socket = { ...this.socket, paused: "yes" };
        return;
      }
      default: {
        this.socket;
        return;
      }
    }
  }
  /**
   * Try to reconnect immediately, canceling any scheduled reconnect.
   * This is useful when detecting network recovery.
   * Only takes action if we're in disconnected state (waiting to reconnect).
   */
  tryReconnectImmediately() {
    this._logVerbose("tryReconnectImmediately called");
    if (this.socket.state !== "disconnected") {
      this._logVerbose(
        `tryReconnectImmediately called but socket state is ${this.socket.state}, no action taken`
      );
      return;
    }
    let timeSavedMs = null;
    if (this.scheduledReconnect) {
      const elapsed = monotonicMillis() - this.scheduledReconnect.scheduledAt;
      timeSavedMs = Math.max(0, this.scheduledReconnect.backoffMs - elapsed);
      this._logVerbose(
        `would have waited ${Math.round(timeSavedMs)}ms more (backoff was ${Math.round(this.scheduledReconnect.backoffMs)}ms, elapsed ${Math.round(elapsed)}ms)`
      );
      clearTimeout(this.scheduledReconnect.timeout);
      this.scheduledReconnect = null;
      this._logVerbose("canceled scheduled reconnect");
    }
    this.logger.log("Network recovery detected, reconnecting immediately");
    this.pendingNetworkRecoveryInfo = timeSavedMs !== null ? { timeSavedMs } : null;
    this.connect();
  }
  /**
   * Resume the state machine if previously paused.
   */
  resume() {
    switch (this.socket.state) {
      case "connecting":
        this.socket = { ...this.socket, paused: "no" };
        return;
      case "ready":
        if (this.socket.paused === "uninitialized") {
          this.socket = { ...this.socket, paused: "no" };
          this.onOpen({
            connectionCount: this.connectionCount,
            lastCloseReason: this.lastCloseReason,
            clientTs: monotonicMillis()
          });
        } else if (this.socket.paused === "yes") {
          this.socket = { ...this.socket, paused: "no" };
          this.onResume();
        }
        return;
      case "terminated":
      case "stopped":
      case "disconnected":
        return;
      default: {
        this.socket;
      }
    }
    this.connect();
  }
  connectionState() {
    return {
      isConnected: this.socket.state === "ready",
      hasEverConnected: this._hasEverConnected,
      connectionCount: this.connectionCount,
      connectionRetries: this.retries
    };
  }
  _logVerbose(message) {
    this.logger.logVerbose(message);
  }
  nextBackoff(reason) {
    const initialBackoff = reason === "client" ? 100 : reason === "Unknown" ? this.defaultInitialBackoff : serverDisconnectErrors[reason].timeout;
    const baseBackoff = initialBackoff * Math.pow(2, this.retries);
    this.retries += 1;
    const actualBackoff = Math.min(baseBackoff, this.maxBackoff);
    const jitter = actualBackoff * (Math.random() - 0.5);
    return actualBackoff + jitter;
  }
  reportLargeTransition({
    transition,
    messageLength
  }) {
    if (transition.clientClockSkew === void 0 || transition.serverTs === void 0) {
      return;
    }
    const transitionTransitTime = monotonicMillis() - // client time now
    // clientClockSkew = (server time + upstream latency) - client time
    // clientClockSkew is "how many milliseconds behind (slow) is the client clock"
    // but the latency of the Connect message inflates this, making it appear further behind
    transition.clientClockSkew - transition.serverTs / 1e6;
    const prettyTransitionTime = `${Math.round(transitionTransitTime)}ms`;
    const prettyMessageMB = `${Math.round(messageLength / 1e4) / 100}MB`;
    const bytesPerSecond = messageLength / (transitionTransitTime / 1e3);
    const prettyBytesPerSecond = `${Math.round(bytesPerSecond / 1e4) / 100}MB per second`;
    this._logVerbose(
      `received ${prettyMessageMB} transition in ${prettyTransitionTime} at ${prettyBytesPerSecond}`
    );
    if (messageLength > 2e7) {
      this.logger.log(
        `received query results totaling more that 20MB (${prettyMessageMB}) which will take a long time to download on slower connections`
      );
    } else if (transitionTransitTime > 2e4) {
      this.logger.log(
        `received query results totaling ${prettyMessageMB} which took more than 20s to arrive (${prettyTransitionTime})`
      );
    }
    if (this.debug) {
      this.sendMessage({
        type: "Event",
        eventType: "ClientReceivedTransition",
        event: { transitionTransitTime, messageLength }
      });
    }
  }
}
function newSessionId() {
  return uuidv4();
}
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
class InvalidTokenError extends Error {
}
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(
    atob(str).replace(/(.)/g, (_m, p) => {
      let code2 = p.charCodeAt(0).toString(16).toUpperCase();
      if (code2.length < 2) {
        code2 = "0" + code2;
      }
      return "%" + code2;
    })
  );
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(
      `Invalid token specified: missing part #${pos + 1}`
    );
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(
      `Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`
    );
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(
      `Invalid token specified: invalid json for part #${pos + 1} (${e.message})`
    );
  }
}
var __defProp$5 = Object.defineProperty;
var __defNormalProp$5 = (obj, key, value2) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$5 = (obj, key, value2) => __defNormalProp$5(obj, typeof key !== "symbol" ? key + "" : key, value2);
const MAXIMUM_REFRESH_DELAY = 20 * 24 * 60 * 60 * 1e3;
const MAX_TOKEN_CONFIRMATION_ATTEMPTS = 2;
class AuthenticationManager {
  constructor(syncState, callbacks, config) {
    __publicField$5(this, "authState", { state: "noAuth" });
    __publicField$5(this, "configVersion", 0);
    __publicField$5(this, "syncState");
    __publicField$5(this, "authenticate");
    __publicField$5(this, "stopSocket");
    __publicField$5(this, "tryRestartSocket");
    __publicField$5(this, "pauseSocket");
    __publicField$5(this, "resumeSocket");
    __publicField$5(this, "clearAuth");
    __publicField$5(this, "logger");
    __publicField$5(this, "refreshTokenLeewaySeconds");
    __publicField$5(this, "tokenConfirmationAttempts", 0);
    this.syncState = syncState;
    this.authenticate = callbacks.authenticate;
    this.stopSocket = callbacks.stopSocket;
    this.tryRestartSocket = callbacks.tryRestartSocket;
    this.pauseSocket = callbacks.pauseSocket;
    this.resumeSocket = callbacks.resumeSocket;
    this.clearAuth = callbacks.clearAuth;
    this.logger = config.logger;
    this.refreshTokenLeewaySeconds = config.refreshTokenLeewaySeconds;
  }
  async setConfig(fetchToken, onChange) {
    this.resetAuthState();
    this._logVerbose("pausing WS for auth token fetch");
    this.pauseSocket();
    const token = await this.fetchTokenAndGuardAgainstRace(fetchToken, {
      forceRefreshToken: false
    });
    if (token.isFromOutdatedConfig) {
      return;
    }
    if (token.value) {
      this.setAuthState({
        state: "waitingForServerConfirmationOfCachedToken",
        config: { fetchToken, onAuthChange: onChange },
        hasRetried: false
      });
      this.authenticate(token.value);
    } else {
      this.setAuthState({
        state: "initialRefetch",
        config: { fetchToken, onAuthChange: onChange }
      });
      await this.refetchToken();
    }
    this._logVerbose("resuming WS after auth token fetch");
    this.resumeSocket();
  }
  onTransition(serverMessage) {
    if (!this.syncState.isCurrentOrNewerAuthVersion(
      serverMessage.endVersion.identity
    )) {
      return;
    }
    if (serverMessage.endVersion.identity <= serverMessage.startVersion.identity) {
      return;
    }
    if (this.authState.state === "waitingForServerConfirmationOfCachedToken") {
      this._logVerbose("server confirmed auth token is valid");
      void this.refetchToken();
      this.authState.config.onAuthChange(true);
      return;
    }
    if (this.authState.state === "waitingForServerConfirmationOfFreshToken") {
      this._logVerbose("server confirmed new auth token is valid");
      this.scheduleTokenRefetch(this.authState.token);
      this.tokenConfirmationAttempts = 0;
      if (!this.authState.hadAuth) {
        this.authState.config.onAuthChange(true);
      }
    }
  }
  onAuthError(serverMessage) {
    if (serverMessage.authUpdateAttempted === false && (this.authState.state === "waitingForServerConfirmationOfFreshToken" || this.authState.state === "waitingForServerConfirmationOfCachedToken")) {
      this._logVerbose("ignoring non-auth token expired error");
      return;
    }
    const { baseVersion } = serverMessage;
    if (!this.syncState.isCurrentOrNewerAuthVersion(baseVersion + 1)) {
      this._logVerbose("ignoring auth error for previous auth attempt");
      return;
    }
    void this.tryToReauthenticate(serverMessage);
    return;
  }
  // This is similar to `refetchToken` defined below, in fact we
  // don't represent them as different states, but it is different
  // in that we pause the WebSocket so that mutations
  // don't retry with bad auth.
  async tryToReauthenticate(serverMessage) {
    this._logVerbose(`attempting to reauthenticate: ${serverMessage.error}`);
    if (
      // No way to fetch another token, kaboom
      this.authState.state === "noAuth" || // We failed on a fresh token. After a small number of retries, we give up
      // and clear the auth state to avoid infinite retries.
      this.authState.state === "waitingForServerConfirmationOfFreshToken" && this.tokenConfirmationAttempts >= MAX_TOKEN_CONFIRMATION_ATTEMPTS
    ) {
      this.logger.error(
        `Failed to authenticate: "${serverMessage.error}", check your server auth config`
      );
      if (this.syncState.hasAuth()) {
        this.syncState.clearAuth();
      }
      if (this.authState.state !== "noAuth") {
        this.setAndReportAuthFailed(this.authState.config.onAuthChange);
      }
      return;
    }
    if (this.authState.state === "waitingForServerConfirmationOfFreshToken") {
      this.tokenConfirmationAttempts++;
      this._logVerbose(
        `retrying reauthentication, ${MAX_TOKEN_CONFIRMATION_ATTEMPTS - this.tokenConfirmationAttempts} attempts remaining`
      );
    }
    await this.stopSocket();
    const token = await this.fetchTokenAndGuardAgainstRace(
      this.authState.config.fetchToken,
      {
        forceRefreshToken: true
      }
    );
    if (token.isFromOutdatedConfig) {
      return;
    }
    if (token.value && this.syncState.isNewAuth(token.value)) {
      this.authenticate(token.value);
      this.setAuthState({
        state: "waitingForServerConfirmationOfFreshToken",
        config: this.authState.config,
        token: token.value,
        hadAuth: this.authState.state === "notRefetching" || this.authState.state === "waitingForScheduledRefetch"
      });
    } else {
      this._logVerbose("reauthentication failed, could not fetch a new token");
      if (this.syncState.hasAuth()) {
        this.syncState.clearAuth();
      }
      this.setAndReportAuthFailed(this.authState.config.onAuthChange);
    }
    this.tryRestartSocket();
  }
  // Force refetch the token and schedule another refetch
  // before the token expires - an active client should never
  // need to reauthenticate.
  async refetchToken() {
    if (this.authState.state === "noAuth") {
      return;
    }
    this._logVerbose("refetching auth token");
    const token = await this.fetchTokenAndGuardAgainstRace(
      this.authState.config.fetchToken,
      {
        forceRefreshToken: true
      }
    );
    if (token.isFromOutdatedConfig) {
      return;
    }
    if (token.value) {
      if (this.syncState.isNewAuth(token.value)) {
        this.setAuthState({
          state: "waitingForServerConfirmationOfFreshToken",
          hadAuth: this.syncState.hasAuth(),
          token: token.value,
          config: this.authState.config
        });
        this.authenticate(token.value);
      } else {
        this.setAuthState({
          state: "notRefetching",
          config: this.authState.config
        });
      }
    } else {
      this._logVerbose("refetching token failed");
      if (this.syncState.hasAuth()) {
        this.clearAuth();
      }
      this.setAndReportAuthFailed(this.authState.config.onAuthChange);
    }
    this._logVerbose(
      "restarting WS after auth token fetch (if currently stopped)"
    );
    this.tryRestartSocket();
  }
  scheduleTokenRefetch(token) {
    if (this.authState.state === "noAuth") {
      return;
    }
    const decodedToken = this.decodeToken(token);
    if (!decodedToken) {
      this.logger.error(
        "Auth token is not a valid JWT, cannot refetch the token"
      );
      return;
    }
    const { iat, exp } = decodedToken;
    if (!iat || !exp) {
      this.logger.error(
        "Auth token does not have required fields, cannot refetch the token"
      );
      return;
    }
    const tokenValiditySeconds = exp - iat;
    if (tokenValiditySeconds <= 2) {
      this.logger.error(
        "Auth token does not live long enough, cannot refetch the token"
      );
      return;
    }
    let delay = Math.min(
      MAXIMUM_REFRESH_DELAY,
      (tokenValiditySeconds - this.refreshTokenLeewaySeconds) * 1e3
    );
    if (delay <= 0) {
      this.logger.warn(
        `Refetching auth token immediately, configured leeway ${this.refreshTokenLeewaySeconds}s is larger than the token's lifetime ${tokenValiditySeconds}s`
      );
      delay = 0;
    }
    const refetchTokenTimeoutId = setTimeout(() => {
      this._logVerbose("running scheduled token refetch");
      void this.refetchToken();
    }, delay);
    this.setAuthState({
      state: "waitingForScheduledRefetch",
      refetchTokenTimeoutId,
      config: this.authState.config
    });
    this._logVerbose(
      `scheduled preemptive auth token refetching in ${delay}ms`
    );
  }
  // Protects against simultaneous calls to `setConfig`
  // while we're fetching a token
  async fetchTokenAndGuardAgainstRace(fetchToken, fetchArgs) {
    const originalConfigVersion = ++this.configVersion;
    this._logVerbose(
      `fetching token with config version ${originalConfigVersion}`
    );
    const token = await fetchToken(fetchArgs);
    if (this.configVersion !== originalConfigVersion) {
      this._logVerbose(
        `stale config version, expected ${originalConfigVersion}, got ${this.configVersion}`
      );
      return { isFromOutdatedConfig: true };
    }
    return { isFromOutdatedConfig: false, value: token };
  }
  stop() {
    this.resetAuthState();
    this.configVersion++;
    this._logVerbose(`config version bumped to ${this.configVersion}`);
  }
  setAndReportAuthFailed(onAuthChange) {
    onAuthChange(false);
    this.resetAuthState();
  }
  resetAuthState() {
    this.setAuthState({ state: "noAuth" });
  }
  setAuthState(newAuth) {
    const authStateForLog = newAuth.state === "waitingForServerConfirmationOfFreshToken" ? {
      hadAuth: newAuth.hadAuth,
      state: newAuth.state,
      token: `...${newAuth.token.slice(-7)}`
    } : { state: newAuth.state };
    this._logVerbose(
      `setting auth state to ${JSON.stringify(authStateForLog)}`
    );
    switch (newAuth.state) {
      case "waitingForScheduledRefetch":
      case "notRefetching":
      case "noAuth":
        this.tokenConfirmationAttempts = 0;
        break;
    }
    if (this.authState.state === "waitingForScheduledRefetch") {
      clearTimeout(this.authState.refetchTokenTimeoutId);
      this.syncState.markAuthCompletion();
    }
    this.authState = newAuth;
  }
  decodeToken(token) {
    try {
      return jwtDecode(token);
    } catch (e) {
      this._logVerbose(
        `Error decoding token: ${e instanceof Error ? e.message : "Unknown error"}`
      );
      return null;
    }
  }
  _logVerbose(message) {
    this.logger.logVerbose(`${message} [v${this.configVersion}]`);
  }
}
const markNames = [
  "convexClientConstructed",
  "convexWebSocketOpen",
  "convexFirstMessageReceived"
];
function mark(name, sessionId) {
  const detail = { sessionId };
  if (typeof performance === "undefined" || !performance.mark) return;
  performance.mark(name, { detail });
}
function performanceMarkToJson(mark2) {
  let name = mark2.name.slice("convex".length);
  name = name.charAt(0).toLowerCase() + name.slice(1);
  return {
    name,
    startTime: mark2.startTime
  };
}
function getMarksReport(sessionId) {
  if (typeof performance === "undefined" || !performance.getEntriesByName) {
    return [];
  }
  const allMarks = [];
  for (const name of markNames) {
    const marks = performance.getEntriesByName(name).filter((entry) => entry.entryType === "mark").filter((mark2) => mark2.detail.sessionId === sessionId);
    allMarks.push(...marks);
  }
  return allMarks.map(performanceMarkToJson);
}
var __defProp$4 = Object.defineProperty;
var __defNormalProp$4 = (obj, key, value2) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$4 = (obj, key, value2) => __defNormalProp$4(obj, typeof key !== "symbol" ? key + "" : key, value2);
class BaseConvexClient {
  /**
   * @param address - The url of your Convex deployment, often provided
   * by an environment variable. E.g. `https://small-mouse-123.convex.cloud`.
   * @param onTransition - A callback receiving an array of query tokens
   * corresponding to query results that have changed -- additional handlers
   * can be added via `addOnTransitionHandler`.
   * @param options - See {@link BaseConvexClientOptions} for a full description.
   */
  constructor(address, onTransition, options) {
    __publicField$4(this, "address");
    __publicField$4(this, "state");
    __publicField$4(this, "requestManager");
    __publicField$4(this, "webSocketManager");
    __publicField$4(this, "authenticationManager");
    __publicField$4(this, "remoteQuerySet");
    __publicField$4(this, "optimisticQueryResults");
    __publicField$4(this, "_transitionHandlerCounter", 0);
    __publicField$4(this, "_nextRequestId");
    __publicField$4(this, "_onTransitionFns", /* @__PURE__ */ new Map());
    __publicField$4(this, "_sessionId");
    __publicField$4(this, "firstMessageReceived", false);
    __publicField$4(this, "debug");
    __publicField$4(this, "logger");
    __publicField$4(this, "maxObservedTimestamp");
    __publicField$4(this, "connectionStateSubscribers", /* @__PURE__ */ new Map());
    __publicField$4(this, "nextConnectionStateSubscriberId", 0);
    __publicField$4(this, "_lastPublishedConnectionState");
    __publicField$4(this, "markConnectionStateDirty", () => {
      void Promise.resolve().then(() => {
        const curConnectionState = this.connectionState();
        if (JSON.stringify(curConnectionState) !== JSON.stringify(this._lastPublishedConnectionState)) {
          this._lastPublishedConnectionState = curConnectionState;
          for (const cb of this.connectionStateSubscribers.values()) {
            cb(curConnectionState);
          }
        }
      });
    });
    __publicField$4(this, "mark", (name) => {
      if (this.debug) {
        mark(name, this.sessionId);
      }
    });
    if (typeof address === "object") {
      throw new Error(
        "Passing a ClientConfig object is no longer supported. Pass the URL of the Convex deployment as a string directly."
      );
    }
    if (options?.skipConvexDeploymentUrlCheck !== true) {
      validateDeploymentUrl(address);
    }
    options = { ...options };
    const authRefreshTokenLeewaySeconds = options.authRefreshTokenLeewaySeconds ?? 2;
    let webSocketConstructor = options.webSocketConstructor;
    if (!webSocketConstructor && typeof WebSocket === "undefined") {
      throw new Error(
        "No WebSocket global variable defined! To use Convex in an environment without WebSocket try the HTTP client: https://docs.convex.dev/api/classes/browser.ConvexHttpClient"
      );
    }
    webSocketConstructor = webSocketConstructor || WebSocket;
    this.debug = options.reportDebugInfoToConvex ?? false;
    this.address = address;
    this.logger = options.logger === false ? instantiateNoopLogger({ verbose: options.verbose ?? false }) : options.logger !== true && options.logger ? options.logger : instantiateDefaultLogger({ verbose: options.verbose ?? false });
    const i = address.search("://");
    if (i === -1) {
      throw new Error("Provided address was not an absolute URL.");
    }
    const origin = address.substring(i + 3);
    const protocol = address.substring(0, i);
    let wsProtocol;
    if (protocol === "http") {
      wsProtocol = "ws";
    } else if (protocol === "https") {
      wsProtocol = "wss";
    } else {
      throw new Error(`Unknown parent protocol ${protocol}`);
    }
    const wsUri = `${wsProtocol}://${origin}/api/${version}/sync`;
    this.state = new LocalSyncState();
    this.remoteQuerySet = new RemoteQuerySet(
      (queryId) => this.state.queryPath(queryId),
      this.logger
    );
    this.requestManager = new RequestManager(
      this.logger,
      this.markConnectionStateDirty
    );
    const pauseSocket = () => {
      this.webSocketManager.pause();
      this.state.pause();
    };
    this.authenticationManager = new AuthenticationManager(
      this.state,
      {
        authenticate: (token) => {
          const message = this.state.setAuth(token);
          this.webSocketManager.sendMessage(message);
          return message.baseVersion;
        },
        stopSocket: () => this.webSocketManager.stop(),
        tryRestartSocket: () => this.webSocketManager.tryRestart(),
        pauseSocket,
        resumeSocket: () => this.webSocketManager.resume(),
        clearAuth: () => {
          this.clearAuth();
        }
      },
      {
        logger: this.logger,
        refreshTokenLeewaySeconds: authRefreshTokenLeewaySeconds
      }
    );
    this.optimisticQueryResults = new OptimisticQueryResults();
    this.addOnTransitionHandler((transition) => {
      onTransition(transition.queries.map((q) => q.token));
    });
    this._nextRequestId = 0;
    this._sessionId = newSessionId();
    const { unsavedChangesWarning } = options;
    if (typeof window === "undefined" || typeof window.addEventListener === "undefined") {
      if (unsavedChangesWarning === true) {
        throw new Error(
          "unsavedChangesWarning requested, but window.addEventListener not found! Remove {unsavedChangesWarning: true} from Convex client options."
        );
      }
    } else if (unsavedChangesWarning !== false) {
      window.addEventListener("beforeunload", (e) => {
        if (this.requestManager.hasIncompleteRequests()) {
          e.preventDefault();
          const confirmationMessage = "Are you sure you want to leave? Your changes may not be saved.";
          (e || window.event).returnValue = confirmationMessage;
          return confirmationMessage;
        }
      });
    }
    this.webSocketManager = new WebSocketManager(
      wsUri,
      {
        onOpen: (reconnectMetadata) => {
          this.mark("convexWebSocketOpen");
          this.webSocketManager.sendMessage({
            ...reconnectMetadata,
            type: "Connect",
            sessionId: this._sessionId,
            maxObservedTimestamp: this.maxObservedTimestamp
          });
          const oldRemoteQueryResults = new Set(
            this.remoteQuerySet.remoteQueryResults().keys()
          );
          this.remoteQuerySet = new RemoteQuerySet(
            (queryId) => this.state.queryPath(queryId),
            this.logger
          );
          const [querySetModification, authModification] = this.state.restart(
            oldRemoteQueryResults
          );
          if (authModification) {
            this.webSocketManager.sendMessage(authModification);
          }
          this.webSocketManager.sendMessage(querySetModification);
          for (const message of this.requestManager.restart()) {
            this.webSocketManager.sendMessage(message);
          }
        },
        onResume: () => {
          const [querySetModification, authModification] = this.state.resume();
          if (authModification) {
            this.webSocketManager.sendMessage(authModification);
          }
          if (querySetModification) {
            this.webSocketManager.sendMessage(querySetModification);
          }
          for (const message of this.requestManager.resume()) {
            this.webSocketManager.sendMessage(message);
          }
        },
        onMessage: (serverMessage) => {
          if (!this.firstMessageReceived) {
            this.firstMessageReceived = true;
            this.mark("convexFirstMessageReceived");
            this.reportMarks();
          }
          switch (serverMessage.type) {
            case "Transition": {
              this.observedTimestamp(serverMessage.endVersion.ts);
              this.authenticationManager.onTransition(serverMessage);
              this.remoteQuerySet.transition(serverMessage);
              this.state.transition(serverMessage);
              const completedRequests = this.requestManager.removeCompleted(
                this.remoteQuerySet.timestamp()
              );
              this.notifyOnQueryResultChanges(completedRequests);
              break;
            }
            case "MutationResponse": {
              if (serverMessage.success) {
                this.observedTimestamp(serverMessage.ts);
              }
              const completedMutationInfo = this.requestManager.onResponse(serverMessage);
              if (completedMutationInfo !== null) {
                this.notifyOnQueryResultChanges(
                  /* @__PURE__ */ new Map([
                    [
                      completedMutationInfo.requestId,
                      completedMutationInfo.result
                    ]
                  ])
                );
              }
              break;
            }
            case "ActionResponse": {
              this.requestManager.onResponse(serverMessage);
              break;
            }
            case "AuthError": {
              this.authenticationManager.onAuthError(serverMessage);
              break;
            }
            case "FatalError": {
              const error = logFatalError(this.logger, serverMessage.error);
              void this.webSocketManager.terminate();
              throw error;
            }
          }
          return {
            hasSyncedPastLastReconnect: this.hasSyncedPastLastReconnect()
          };
        },
        onServerDisconnectError: options.onServerDisconnectError
      },
      webSocketConstructor,
      this.logger,
      this.markConnectionStateDirty,
      this.debug
    );
    this.mark("convexClientConstructed");
    if (options.expectAuth) {
      pauseSocket();
    }
  }
  /**
   * Return true if there is outstanding work from prior to the time of the most recent restart.
   * This indicates that the client has not proven itself to have gotten past the issue that
   * potentially led to the restart. Use this to influence when to reset backoff after a failure.
   */
  hasSyncedPastLastReconnect() {
    const hasSyncedPastLastReconnect = this.requestManager.hasSyncedPastLastReconnect() || this.state.hasSyncedPastLastReconnect();
    return hasSyncedPastLastReconnect;
  }
  observedTimestamp(observedTs) {
    if (this.maxObservedTimestamp === void 0 || this.maxObservedTimestamp.lessThanOrEqual(observedTs)) {
      this.maxObservedTimestamp = observedTs;
    }
  }
  getMaxObservedTimestamp() {
    return this.maxObservedTimestamp;
  }
  /**
   * Compute the current query results based on the remoteQuerySet and the
   * current optimistic updates and call `onTransition` for all the changed
   * queries.
   *
   * @param completedMutations - A set of mutation IDs whose optimistic updates
   * are no longer needed.
   */
  notifyOnQueryResultChanges(completedRequests) {
    const remoteQueryResults = this.remoteQuerySet.remoteQueryResults();
    const queryTokenToValue = /* @__PURE__ */ new Map();
    for (const [queryId, result] of remoteQueryResults) {
      const queryToken = this.state.queryToken(queryId);
      if (queryToken !== null) {
        const query = {
          result,
          udfPath: this.state.queryPath(queryId),
          args: this.state.queryArgs(queryId)
        };
        queryTokenToValue.set(queryToken, query);
      }
    }
    const changedQueryTokens = this.optimisticQueryResults.ingestQueryResultsFromServer(
      queryTokenToValue,
      new Set(completedRequests.keys())
    );
    this.handleTransition({
      queries: changedQueryTokens.map((token) => {
        const optimisticResult = this.optimisticQueryResults.rawQueryResult(token);
        return {
          token,
          modification: {
            kind: "Updated",
            result: optimisticResult
          }
        };
      }),
      reflectedMutations: Array.from(completedRequests).map(
        ([requestId, result]) => ({
          requestId,
          result
        })
      ),
      timestamp: this.remoteQuerySet.timestamp()
    });
  }
  handleTransition(transition) {
    for (const fn of this._onTransitionFns.values()) {
      fn(transition);
    }
  }
  /**
   * Add a handler that will be called on a transition.
   *
   * Any external side effects (e.g. setting React state) should be handled here.
   *
   * @param fn
   *
   * @returns
   */
  addOnTransitionHandler(fn) {
    const id = this._transitionHandlerCounter++;
    this._onTransitionFns.set(id, fn);
    return () => this._onTransitionFns.delete(id);
  }
  /**
   * Get the current JWT auth token and decoded claims.
   */
  getCurrentAuthClaims() {
    const authToken = this.state.getAuth();
    let decoded = {};
    if (authToken && authToken.tokenType === "User") {
      try {
        decoded = authToken ? jwtDecode(authToken.value) : {};
      } catch {
        decoded = {};
      }
    } else {
      return void 0;
    }
    return { token: authToken.value, decoded };
  }
  /**
   * Set the authentication token to be used for subsequent queries and mutations.
   * `fetchToken` will be called automatically again if a token expires.
   * `fetchToken` should return `null` if the token cannot be retrieved, for example
   * when the user's rights were permanently revoked.
   * @param fetchToken - an async function returning the JWT-encoded OpenID Connect Identity Token
   * @param onChange - a callback that will be called when the authentication status changes
   */
  setAuth(fetchToken, onChange) {
    void this.authenticationManager.setConfig(fetchToken, onChange);
  }
  hasAuth() {
    return this.state.hasAuth();
  }
  /** @internal */
  setAdminAuth(value2, fakeUserIdentity) {
    const message = this.state.setAdminAuth(value2, fakeUserIdentity);
    this.webSocketManager.sendMessage(message);
  }
  clearAuth() {
    const message = this.state.clearAuth();
    this.webSocketManager.sendMessage(message);
  }
  /**
     * Subscribe to a query function.
     *
     * Whenever this query's result changes, the `onTransition` callback
     * passed into the constructor will be called.
     *
     * @param name - The name of the query.
     * @param args - An arguments object for the query. If this is omitted, the
     * arguments will be `{}`.
     * @param options - A {@link SubscribeOptions} options object for this query.
  
     * @returns An object containing a {@link QueryToken} corresponding to this
     * query and an `unsubscribe` callback.
     */
  subscribe(name, args, options) {
    const argsObject = parseArgs(args);
    const { modification, queryToken, unsubscribe } = this.state.subscribe(
      name,
      argsObject,
      options?.journal,
      options?.componentPath
    );
    if (modification !== null) {
      this.webSocketManager.sendMessage(modification);
    }
    return {
      queryToken,
      unsubscribe: () => {
        const modification2 = unsubscribe();
        if (modification2) {
          this.webSocketManager.sendMessage(modification2);
        }
      }
    };
  }
  /**
   * A query result based only on the current, local state.
   *
   * The only way this will return a value is if we're already subscribed to the
   * query or its value has been set optimistically.
   */
  localQueryResult(udfPath, args) {
    const argsObject = parseArgs(args);
    const queryToken = serializePathAndArgs(udfPath, argsObject);
    return this.optimisticQueryResults.queryResult(queryToken);
  }
  /**
   * Get query result by query token based on current, local state
   *
   * The only way this will return a value is if we're already subscribed to the
   * query or its value has been set optimistically.
   *
   * @internal
   */
  localQueryResultByToken(queryToken) {
    return this.optimisticQueryResults.queryResult(queryToken);
  }
  /**
   * Whether local query result is available for a token.
   *
   * This method does not throw if the result is an error.
   *
   * @internal
   */
  hasLocalQueryResultByToken(queryToken) {
    return this.optimisticQueryResults.hasQueryResult(queryToken);
  }
  /**
   * @internal
   */
  localQueryLogs(udfPath, args) {
    const argsObject = parseArgs(args);
    const queryToken = serializePathAndArgs(udfPath, argsObject);
    return this.optimisticQueryResults.queryLogs(queryToken);
  }
  /**
   * Retrieve the current {@link QueryJournal} for this query function.
   *
   * If we have not yet received a result for this query, this will be `undefined`.
   *
   * @param name - The name of the query.
   * @param args - The arguments object for this query.
   * @returns The query's {@link QueryJournal} or `undefined`.
   */
  queryJournal(name, args) {
    const argsObject = parseArgs(args);
    const queryToken = serializePathAndArgs(name, argsObject);
    return this.state.queryJournal(queryToken);
  }
  /**
   * Get the current {@link ConnectionState} between the client and the Convex
   * backend.
   *
   * @returns The {@link ConnectionState} with the Convex backend.
   */
  connectionState() {
    const wsConnectionState = this.webSocketManager.connectionState();
    return {
      hasInflightRequests: this.requestManager.hasInflightRequests(),
      isWebSocketConnected: wsConnectionState.isConnected,
      hasEverConnected: wsConnectionState.hasEverConnected,
      connectionCount: wsConnectionState.connectionCount,
      connectionRetries: wsConnectionState.connectionRetries,
      timeOfOldestInflightRequest: this.requestManager.timeOfOldestInflightRequest(),
      inflightMutations: this.requestManager.inflightMutations(),
      inflightActions: this.requestManager.inflightActions()
    };
  }
  /**
   * Subscribe to the {@link ConnectionState} between the client and the Convex
   * backend, calling a callback each time it changes.
   *
   * Subscribed callbacks will be called when any part of ConnectionState changes.
   * ConnectionState may grow in future versions (e.g. to provide a array of
   * inflight requests) in which case callbacks would be called more frequently.
   *
   * @returns An unsubscribe function to stop listening.
   */
  subscribeToConnectionState(cb) {
    const id = this.nextConnectionStateSubscriberId++;
    this.connectionStateSubscribers.set(id, cb);
    return () => {
      this.connectionStateSubscribers.delete(id);
    };
  }
  /**
     * Execute a mutation function.
     *
     * @param name - The name of the mutation.
     * @param args - An arguments object for the mutation. If this is omitted,
     * the arguments will be `{}`.
     * @param options - A {@link MutationOptions} options object for this mutation.
  
     * @returns - A promise of the mutation's result.
     */
  async mutation(name, args, options) {
    const result = await this.mutationInternal(name, args, options);
    if (!result.success) {
      if (result.errorData !== void 0) {
        throw forwardData(
          result,
          new ConvexError(
            createHybridErrorStacktrace("mutation", name, result)
          )
        );
      }
      throw new Error(createHybridErrorStacktrace("mutation", name, result));
    }
    return result.value;
  }
  /**
   * @internal
   */
  async mutationInternal(udfPath, args, options, componentPath) {
    const { mutationPromise } = this.enqueueMutation(
      udfPath,
      args,
      options,
      componentPath
    );
    return mutationPromise;
  }
  /**
   * @internal
   */
  enqueueMutation(udfPath, args, options, componentPath) {
    const mutationArgs = parseArgs(args);
    this.tryReportLongDisconnect();
    const requestId = this.nextRequestId;
    this._nextRequestId++;
    if (options !== void 0) {
      const optimisticUpdate = options.optimisticUpdate;
      if (optimisticUpdate !== void 0) {
        const wrappedUpdate = (localQueryStore) => {
          const result = optimisticUpdate(
            localQueryStore,
            mutationArgs
          );
          if (result instanceof Promise) {
            this.logger.warn(
              "Optimistic update handler returned a Promise. Optimistic updates should be synchronous."
            );
          }
        };
        const changedQueryTokens = this.optimisticQueryResults.applyOptimisticUpdate(
          wrappedUpdate,
          requestId
        );
        const changedQueries = changedQueryTokens.map((token) => {
          const localResult = this.localQueryResultByToken(token);
          return {
            token,
            modification: {
              kind: "Updated",
              result: localResult === void 0 ? void 0 : {
                success: true,
                value: localResult,
                logLines: []
              }
            }
          };
        });
        this.handleTransition({
          queries: changedQueries,
          reflectedMutations: [],
          timestamp: this.remoteQuerySet.timestamp()
        });
      }
    }
    const message = {
      type: "Mutation",
      requestId,
      udfPath,
      componentPath,
      args: [convexToJson(mutationArgs)]
    };
    const mightBeSent = this.webSocketManager.sendMessage(message);
    const mutationPromise = this.requestManager.request(message, mightBeSent);
    return {
      requestId,
      mutationPromise
    };
  }
  /**
   * Execute an action function.
   *
   * @param name - The name of the action.
   * @param args - An arguments object for the action. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the action's result.
   */
  async action(name, args) {
    const result = await this.actionInternal(name, args);
    if (!result.success) {
      if (result.errorData !== void 0) {
        throw forwardData(
          result,
          new ConvexError(createHybridErrorStacktrace("action", name, result))
        );
      }
      throw new Error(createHybridErrorStacktrace("action", name, result));
    }
    return result.value;
  }
  /**
   * @internal
   */
  async actionInternal(udfPath, args, componentPath) {
    const actionArgs = parseArgs(args);
    const requestId = this.nextRequestId;
    this._nextRequestId++;
    this.tryReportLongDisconnect();
    const message = {
      type: "Action",
      requestId,
      udfPath,
      componentPath,
      args: [convexToJson(actionArgs)]
    };
    const mightBeSent = this.webSocketManager.sendMessage(message);
    return this.requestManager.request(message, mightBeSent);
  }
  /**
   * Close any network handles associated with this client and stop all subscriptions.
   *
   * Call this method when you're done with an {@link BaseConvexClient} to
   * dispose of its sockets and resources.
   *
   * @returns A `Promise` fulfilled when the connection has been completely closed.
   */
  async close() {
    this.authenticationManager.stop();
    return this.webSocketManager.terminate();
  }
  /**
   * Return the address for this client, useful for creating a new client.
   *
   * Not guaranteed to match the address with which this client was constructed:
   * it may be canonicalized.
   */
  get url() {
    return this.address;
  }
  /**
   * @internal
   */
  get nextRequestId() {
    return this._nextRequestId;
  }
  /**
   * @internal
   */
  get sessionId() {
    return this._sessionId;
  }
  /**
   * Reports performance marks to the server. This should only be called when
   * we have a functional websocket.
   */
  reportMarks() {
    if (this.debug) {
      const report = getMarksReport(this.sessionId);
      this.webSocketManager.sendMessage({
        type: "Event",
        eventType: "ClientConnect",
        event: report
      });
    }
  }
  tryReportLongDisconnect() {
    if (!this.debug) {
      return;
    }
    const timeOfOldestRequest = this.connectionState().timeOfOldestInflightRequest;
    if (timeOfOldestRequest === null || Date.now() - timeOfOldestRequest.getTime() <= 60 * 1e3) {
      return;
    }
    const endpoint = `${this.address}/api/debug_event`;
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Convex-Client": `npm-${version}`
      },
      body: JSON.stringify({ event: "LongWebsocketDisconnect" })
    }).then((response) => {
      if (!response.ok) {
        this.logger.warn(
          "Analytics request failed with response:",
          response.body
        );
      }
    }).catch((error) => {
      this.logger.warn("Analytics response failed with error:", error);
    });
  }
}
function asPaginationResult(value2) {
  if (typeof value2 !== "object" || value2 === null || !Array.isArray(value2.page) || typeof value2.isDone !== "boolean" || typeof value2.continueCursor !== "string") {
    throw new Error(`Not a valid paginated query result: ${value2?.toString()}`);
  }
  return value2;
}
var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value2) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$3 = (obj, key, value2) => __defNormalProp$3(obj, typeof key !== "symbol" ? key + "" : key, value2);
class PaginatedQueryClient {
  constructor(client, onTransition) {
    this.client = client;
    this.onTransition = onTransition;
    __publicField$3(this, "paginatedQuerySet", /* @__PURE__ */ new Map());
    __publicField$3(this, "lastTransitionTs");
    this.lastTransitionTs = Long.fromNumber(0);
    this.client.addOnTransitionHandler(
      (transition) => this.onBaseTransition(transition)
    );
  }
  /**
   * Subscribe to a paginated query.
   *
   * @param name - The name of the paginated query function
   * @param args - Arguments for the query (excluding paginationOpts)
   * @param options - Pagination options including initialNumItems
   * @returns Object with paginatedQueryToken and unsubscribe function
   */
  subscribe(name, args, options) {
    const canonicalizedUdfPath = canonicalizeUdfPath(name);
    const token = serializePaginatedPathAndArgs(
      canonicalizedUdfPath,
      args,
      options
    );
    const unsubscribe = () => this.removePaginatedQuerySubscriber(token);
    const existingEntry = this.paginatedQuerySet.get(token);
    if (existingEntry) {
      existingEntry.numSubscribers += 1;
      return {
        paginatedQueryToken: token,
        unsubscribe
      };
    }
    this.paginatedQuerySet.set(token, {
      token,
      canonicalizedUdfPath,
      args,
      numSubscribers: 1,
      options: { initialNumItems: options.initialNumItems },
      nextPageKey: 0,
      pageKeys: [],
      pageKeyToQuery: /* @__PURE__ */ new Map(),
      ongoingSplits: /* @__PURE__ */ new Map(),
      skip: false,
      id: options.id
    });
    this.addPageToPaginatedQuery(token, null, options.initialNumItems);
    return {
      paginatedQueryToken: token,
      unsubscribe
    };
  }
  /**
   * Get current results for a paginated query based on local state.
   *
   * Throws an error when one of the pages has errored.
   */
  localQueryResult(name, args, options) {
    const canonicalizedUdfPath = canonicalizeUdfPath(name);
    const token = serializePaginatedPathAndArgs(
      canonicalizedUdfPath,
      args,
      options
    );
    return this.localQueryResultByToken(token);
  }
  /**
   * @internal
   */
  localQueryResultByToken(token) {
    const paginatedQuery = this.paginatedQuerySet.get(token);
    if (!paginatedQuery) {
      return void 0;
    }
    const activePages = this.activePageQueryTokens(paginatedQuery);
    if (activePages.length === 0) {
      return {
        results: [],
        status: "LoadingFirstPage",
        loadMore: (numItems) => {
          return this.loadMoreOfPaginatedQuery(token, numItems);
        }
      };
    }
    let allResults = [];
    let hasUndefined = false;
    let isDone = false;
    for (const pageToken of activePages) {
      const result = this.client.localQueryResultByToken(pageToken);
      if (result === void 0) {
        hasUndefined = true;
        isDone = false;
        continue;
      }
      const paginationResult = asPaginationResult(result);
      allResults = allResults.concat(paginationResult.page);
      isDone = !!paginationResult.isDone;
    }
    let status;
    if (hasUndefined) {
      status = allResults.length === 0 ? "LoadingFirstPage" : "LoadingMore";
    } else if (isDone) {
      status = "Exhausted";
    } else {
      status = "CanLoadMore";
    }
    return {
      results: allResults,
      status,
      loadMore: (numItems) => {
        return this.loadMoreOfPaginatedQuery(token, numItems);
      }
    };
  }
  onBaseTransition(transition) {
    const changedBaseTokens = transition.queries.map((q) => q.token);
    const changed = this.queriesContainingTokens(changedBaseTokens);
    let paginatedQueries = [];
    if (changed.length > 0) {
      this.processPaginatedQuerySplits(
        changed,
        (token) => this.client.localQueryResultByToken(token)
      );
      paginatedQueries = changed.map((token) => ({
        token,
        modification: {
          kind: "Updated",
          result: this.localQueryResultByToken(token)
        }
      }));
    }
    const extendedTransition = {
      ...transition,
      paginatedQueries
    };
    this.onTransition(extendedTransition);
  }
  /**
   * Load more items for a paginated query.
   *
   * This *always* causes a transition, the status of the query
   * has probably changed from "CanLoadMore" to "LoadingMore".
   * Data might have changed too: maybe a subscription to this page
   * query already exists (unlikely but possible) or this page query
   * has an optimistic update providing some initial data.
   *
   * @internal
   */
  loadMoreOfPaginatedQuery(token, numItems) {
    this.mustGetPaginatedQuery(token);
    const lastPageToken = this.queryTokenForLastPageOfPaginatedQuery(token);
    const lastPageResult = this.client.localQueryResultByToken(lastPageToken);
    if (!lastPageResult) {
      return false;
    }
    const paginationResult = asPaginationResult(lastPageResult);
    if (paginationResult.isDone) {
      return false;
    }
    this.addPageToPaginatedQuery(
      token,
      paginationResult.continueCursor,
      numItems
    );
    const loadMoreTransition = {
      timestamp: this.lastTransitionTs,
      reflectedMutations: [],
      queries: [],
      paginatedQueries: [
        {
          token,
          modification: {
            kind: "Updated",
            result: this.localQueryResultByToken(token)
          }
        }
      ]
    };
    this.onTransition(loadMoreTransition);
    return true;
  }
  /**
   * @internal
   */
  queriesContainingTokens(queryTokens) {
    if (queryTokens.length === 0) {
      return [];
    }
    const changed = [];
    const queryTokenSet = new Set(queryTokens);
    for (const [paginatedToken, paginatedQuery] of this.paginatedQuerySet) {
      for (const pageToken of this.allQueryTokens(paginatedQuery)) {
        if (queryTokenSet.has(pageToken)) {
          changed.push(paginatedToken);
          break;
        }
      }
    }
    return changed;
  }
  /**
   * @internal
   */
  processPaginatedQuerySplits(changed, getResult) {
    for (const paginatedQueryToken of changed) {
      const paginatedQuery = this.mustGetPaginatedQuery(paginatedQueryToken);
      const { ongoingSplits, pageKeyToQuery, pageKeys } = paginatedQuery;
      for (const [pageKey, [splitKey1, splitKey2]] of ongoingSplits) {
        const bothNewPagesLoaded = getResult(pageKeyToQuery.get(splitKey1).queryToken) !== void 0 && getResult(pageKeyToQuery.get(splitKey2).queryToken) !== void 0;
        if (bothNewPagesLoaded) {
          this.completePaginatedQuerySplit(
            paginatedQuery,
            pageKey,
            splitKey1,
            splitKey2
          );
        }
      }
      for (const pageKey of pageKeys) {
        if (ongoingSplits.has(pageKey)) {
          continue;
        }
        const pageToken = pageKeyToQuery.get(pageKey).queryToken;
        const pageResult = getResult(pageToken);
        if (!pageResult) {
          continue;
        }
        const result = asPaginationResult(pageResult);
        const shouldSplit = result.splitCursor && (result.pageStatus === "SplitRecommended" || result.pageStatus === "SplitRequired" || // This client-driven page splitting condition will change in the future.
        result.page.length > paginatedQuery.options.initialNumItems * 2);
        if (shouldSplit) {
          this.splitPaginatedQueryPage(
            paginatedQuery,
            pageKey,
            result.splitCursor,
            // we just checked
            result.continueCursor
          );
        }
      }
    }
  }
  splitPaginatedQueryPage(paginatedQuery, pageKey, splitCursor, continueCursor) {
    const splitKey1 = paginatedQuery.nextPageKey++;
    const splitKey2 = paginatedQuery.nextPageKey++;
    const paginationOpts = {
      cursor: continueCursor,
      numItems: paginatedQuery.options.initialNumItems,
      id: paginatedQuery.id
    };
    const firstSubscription = this.client.subscribe(
      paginatedQuery.canonicalizedUdfPath,
      {
        ...paginatedQuery.args,
        paginationOpts: {
          ...paginationOpts,
          cursor: null,
          // Start from beginning for first split
          endCursor: splitCursor
        }
      }
    );
    paginatedQuery.pageKeyToQuery.set(splitKey1, firstSubscription);
    const secondSubscription = this.client.subscribe(
      paginatedQuery.canonicalizedUdfPath,
      {
        ...paginatedQuery.args,
        paginationOpts: {
          ...paginationOpts,
          cursor: splitCursor,
          endCursor: continueCursor
        }
      }
    );
    paginatedQuery.pageKeyToQuery.set(splitKey2, secondSubscription);
    paginatedQuery.ongoingSplits.set(pageKey, [splitKey1, splitKey2]);
  }
  /**
   * @internal
   */
  addPageToPaginatedQuery(token, continueCursor, numItems) {
    const paginatedQuery = this.mustGetPaginatedQuery(token);
    const pageKey = paginatedQuery.nextPageKey++;
    const paginationOpts = {
      cursor: continueCursor,
      numItems,
      id: paginatedQuery.id
    };
    const pageArgs = {
      ...paginatedQuery.args,
      paginationOpts
    };
    const subscription = this.client.subscribe(
      paginatedQuery.canonicalizedUdfPath,
      pageArgs
    );
    paginatedQuery.pageKeys.push(pageKey);
    paginatedQuery.pageKeyToQuery.set(pageKey, subscription);
    return subscription;
  }
  removePaginatedQuerySubscriber(token) {
    const paginatedQuery = this.paginatedQuerySet.get(token);
    if (!paginatedQuery) {
      return;
    }
    paginatedQuery.numSubscribers -= 1;
    if (paginatedQuery.numSubscribers > 0) {
      return;
    }
    for (const subscription of paginatedQuery.pageKeyToQuery.values()) {
      subscription.unsubscribe();
    }
    this.paginatedQuerySet.delete(token);
  }
  completePaginatedQuerySplit(paginatedQuery, pageKey, splitKey1, splitKey2) {
    const originalQuery = paginatedQuery.pageKeyToQuery.get(pageKey);
    paginatedQuery.pageKeyToQuery.delete(pageKey);
    const pageIndex = paginatedQuery.pageKeys.indexOf(pageKey);
    paginatedQuery.pageKeys.splice(pageIndex, 1, splitKey1, splitKey2);
    paginatedQuery.ongoingSplits.delete(pageKey);
    originalQuery.unsubscribe();
  }
  /** The query tokens for all active pages, in result order */
  activePageQueryTokens(paginatedQuery) {
    return paginatedQuery.pageKeys.map(
      (pageKey) => paginatedQuery.pageKeyToQuery.get(pageKey).queryToken
    );
  }
  allQueryTokens(paginatedQuery) {
    return Array.from(paginatedQuery.pageKeyToQuery.values()).map(
      (sub) => sub.queryToken
    );
  }
  queryTokenForLastPageOfPaginatedQuery(token) {
    const paginatedQuery = this.mustGetPaginatedQuery(token);
    const lastPageKey = paginatedQuery.pageKeys[paginatedQuery.pageKeys.length - 1];
    if (lastPageKey === void 0) {
      throw new Error(`No pages for paginated query ${token}`);
    }
    return paginatedQuery.pageKeyToQuery.get(lastPageKey).queryToken;
  }
  mustGetPaginatedQuery(token) {
    const paginatedQuery = this.paginatedQuerySet.get(token);
    if (!paginatedQuery) {
      throw new Error("paginated query no longer exists for token " + token);
    }
    return paginatedQuery;
  }
}
var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value2) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$2 = (obj, key, value2) => __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value2);
const STATUS_CODE_UDF_FAILED = 560;
let specifiedFetch = void 0;
class ConvexHttpClient {
  /**
   * Create a new {@link ConvexHttpClient}.
   *
   * @param address - The url of your Convex deployment, often provided
   * by an environment variable. E.g. `https://small-mouse-123.convex.cloud`.
   * @param options - An object of options.
   * - `skipConvexDeploymentUrlCheck` - Skip validating that the Convex deployment URL looks like
   * `https://happy-animal-123.convex.cloud` or localhost. This can be useful if running a self-hosted
   * Convex backend that uses a different URL.
   * - `logger` - A logger or a boolean. If not provided, logs to the console.
   * You can construct your own logger to customize logging to log elsewhere
   * or not log at all, or use `false` as a shorthand for a no-op logger.
   * A logger is an object with 4 methods: log(), warn(), error(), and logVerbose().
   * These methods can receive multiple arguments of any types, like console.log().
   * - `auth` - A JWT containing identity claims accessible in Convex functions.
   * This identity may expire so it may be necessary to call `setAuth()` later,
   * but for short-lived clients it's convenient to specify this value here.
   * - `fetch` - A custom fetch implementation to use for all HTTP requests made by this client.
   */
  constructor(address, options) {
    __publicField$2(this, "address");
    __publicField$2(this, "auth");
    __publicField$2(this, "adminAuth");
    __publicField$2(this, "encodedTsPromise");
    __publicField$2(this, "debug");
    __publicField$2(this, "fetchOptions");
    __publicField$2(this, "fetch");
    __publicField$2(this, "logger");
    __publicField$2(this, "mutationQueue", []);
    __publicField$2(this, "isProcessingQueue", false);
    if (typeof options === "boolean") {
      throw new Error(
        "skipConvexDeploymentUrlCheck as the second argument is no longer supported. Please pass an options object, `{ skipConvexDeploymentUrlCheck: true }`."
      );
    }
    const opts = options ?? {};
    if (opts.skipConvexDeploymentUrlCheck !== true) {
      validateDeploymentUrl(address);
    }
    this.logger = options?.logger === false ? instantiateNoopLogger({ verbose: false }) : options?.logger !== true && options?.logger ? options.logger : instantiateDefaultLogger({ verbose: false });
    this.address = address;
    this.debug = true;
    this.auth = void 0;
    this.adminAuth = void 0;
    this.fetch = options?.fetch;
    if (options?.auth) {
      this.setAuth(options.auth);
    }
  }
  /**
   * Obtain the {@link ConvexHttpClient}'s URL to its backend.
   * @deprecated Use url, which returns the url without /api at the end.
   *
   * @returns The URL to the Convex backend, including the client's API version.
   */
  backendUrl() {
    return `${this.address}/api`;
  }
  /**
   * Return the address for this client, useful for creating a new client.
   *
   * Not guaranteed to match the address with which this client was constructed:
   * it may be canonicalized.
   */
  get url() {
    return this.address;
  }
  /**
   * Set the authentication token to be used for subsequent queries and mutations.
   *
   * Should be called whenever the token changes (i.e. due to expiration and refresh).
   *
   * @param value - JWT-encoded OpenID Connect identity token.
   */
  setAuth(value2) {
    this.clearAuth();
    this.auth = value2;
  }
  /**
   * Set admin auth token to allow calling internal queries, mutations, and actions
   * and acting as an identity.
   *
   * @internal
   */
  setAdminAuth(token, actingAsIdentity) {
    this.clearAuth();
    if (actingAsIdentity !== void 0) {
      const bytes = new TextEncoder().encode(JSON.stringify(actingAsIdentity));
      const actingAsIdentityEncoded = btoa(String.fromCodePoint(...bytes));
      this.adminAuth = `${token}:${actingAsIdentityEncoded}`;
    } else {
      this.adminAuth = token;
    }
  }
  /**
   * Clear the current authentication token if set.
   */
  clearAuth() {
    this.auth = void 0;
    this.adminAuth = void 0;
  }
  /**
   * Sets whether the result log lines should be printed on the console or not.
   *
   * @internal
   */
  setDebug(debug) {
    this.debug = debug;
  }
  /**
   * Used to customize the fetch behavior in some runtimes.
   *
   * @internal
   */
  setFetchOptions(fetchOptions) {
    this.fetchOptions = fetchOptions;
  }
  /**
   * This API is experimental: it may change or disappear.
   *
   * Execute a Convex query function at the same timestamp as every other
   * consistent query execution run by this HTTP client.
   *
   * This doesn't make sense for long-lived ConvexHttpClients as Convex
   * backends can read a limited amount into the past: beyond 30 seconds
   * in the past may not be available.
   *
   * Create a new client to use a consistent time.
   *
   * @param name - The name of the query.
   * @param args - The arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the query's result.
   *
   * @deprecated This API is experimental: it may change or disappear.
   */
  async consistentQuery(query, ...args) {
    const queryArgs = parseArgs(args[0]);
    const timestampPromise = this.getTimestamp();
    return await this.queryInner(query, queryArgs, { timestampPromise });
  }
  async getTimestamp() {
    if (this.encodedTsPromise) {
      return this.encodedTsPromise;
    }
    return this.encodedTsPromise = this.getTimestampInner();
  }
  async getTimestampInner() {
    const localFetch = this.fetch || specifiedFetch || fetch;
    const headers = {
      "Content-Type": "application/json",
      "Convex-Client": `npm-${version}`
    };
    const response = await localFetch(`${this.address}/api/query_ts`, {
      ...this.fetchOptions,
      method: "POST",
      headers
    });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    const { ts } = await response.json();
    return ts;
  }
  /**
   * Execute a Convex query function.
   *
   * @param name - The name of the query.
   * @param args - The arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the query's result.
   */
  async query(query, ...args) {
    const queryArgs = parseArgs(args[0]);
    return await this.queryInner(query, queryArgs, {});
  }
  async queryInner(query, queryArgs, options) {
    const name = getFunctionName(query);
    const args = [convexToJson(queryArgs)];
    const headers = {
      "Content-Type": "application/json",
      "Convex-Client": `npm-${version}`
    };
    if (this.adminAuth) {
      headers["Authorization"] = `Convex ${this.adminAuth}`;
    } else if (this.auth) {
      headers["Authorization"] = `Bearer ${this.auth}`;
    }
    const localFetch = this.fetch || specifiedFetch || fetch;
    const timestamp = options.timestampPromise ? await options.timestampPromise : void 0;
    const body = JSON.stringify({
      path: name,
      format: "convex_encoded_json",
      args,
      ...timestamp ? { ts: timestamp } : {}
    });
    const endpoint = timestamp ? `${this.address}/api/query_at_ts` : `${this.address}/api/query`;
    const response = await localFetch(endpoint, {
      ...this.fetchOptions,
      body,
      method: "POST",
      headers
    });
    if (!response.ok && response.status !== STATUS_CODE_UDF_FAILED) {
      throw new Error(await response.text());
    }
    const respJSON = await response.json();
    if (this.debug) {
      for (const line of respJSON.logLines ?? []) {
        logForFunction(this.logger, "info", "query", name, line);
      }
    }
    switch (respJSON.status) {
      case "success":
        return jsonToConvex(respJSON.value);
      case "error":
        if (respJSON.errorData !== void 0) {
          throw forwardErrorData(
            respJSON.errorData,
            new ConvexError(respJSON.errorMessage)
          );
        }
        throw new Error(respJSON.errorMessage);
      default:
        throw new Error(`Invalid response: ${JSON.stringify(respJSON)}`);
    }
  }
  async mutationInner(mutation, mutationArgs) {
    const name = getFunctionName(mutation);
    const body = JSON.stringify({
      path: name,
      format: "convex_encoded_json",
      args: [convexToJson(mutationArgs)]
    });
    const headers = {
      "Content-Type": "application/json",
      "Convex-Client": `npm-${version}`
    };
    if (this.adminAuth) {
      headers["Authorization"] = `Convex ${this.adminAuth}`;
    } else if (this.auth) {
      headers["Authorization"] = `Bearer ${this.auth}`;
    }
    const localFetch = this.fetch || specifiedFetch || fetch;
    const response = await localFetch(`${this.address}/api/mutation`, {
      ...this.fetchOptions,
      body,
      method: "POST",
      headers
    });
    if (!response.ok && response.status !== STATUS_CODE_UDF_FAILED) {
      throw new Error(await response.text());
    }
    const respJSON = await response.json();
    if (this.debug) {
      for (const line of respJSON.logLines ?? []) {
        logForFunction(this.logger, "info", "mutation", name, line);
      }
    }
    switch (respJSON.status) {
      case "success":
        return jsonToConvex(respJSON.value);
      case "error":
        if (respJSON.errorData !== void 0) {
          throw forwardErrorData(
            respJSON.errorData,
            new ConvexError(respJSON.errorMessage)
          );
        }
        throw new Error(respJSON.errorMessage);
      default:
        throw new Error(`Invalid response: ${JSON.stringify(respJSON)}`);
    }
  }
  async processMutationQueue() {
    if (this.isProcessingQueue) {
      return;
    }
    this.isProcessingQueue = true;
    while (this.mutationQueue.length > 0) {
      const { mutation, args, resolve, reject } = this.mutationQueue.shift();
      try {
        const result = await this.mutationInner(mutation, args);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }
    this.isProcessingQueue = false;
  }
  enqueueMutation(mutation, args) {
    return new Promise((resolve, reject) => {
      this.mutationQueue.push({ mutation, args, resolve, reject });
      void this.processMutationQueue();
    });
  }
  /**
   * Execute a Convex mutation function. Mutations are queued by default.
   *
   * @param name - The name of the mutation.
   * @param args - The arguments object for the mutation. If this is omitted,
   * the arguments will be `{}`.
   * @param options - An optional object containing
   * @returns A promise of the mutation's result.
   */
  async mutation(mutation, ...args) {
    const [fnArgs, options] = args;
    const mutationArgs = parseArgs(fnArgs);
    const queued = !options?.skipQueue;
    if (queued) {
      return await this.enqueueMutation(mutation, mutationArgs);
    } else {
      return await this.mutationInner(mutation, mutationArgs);
    }
  }
  /**
   * Execute a Convex action function. Actions are not queued.
   *
   * @param name - The name of the action.
   * @param args - The arguments object for the action. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the action's result.
   */
  async action(action, ...args) {
    const actionArgs = parseArgs(args[0]);
    const name = getFunctionName(action);
    const body = JSON.stringify({
      path: name,
      format: "convex_encoded_json",
      args: [convexToJson(actionArgs)]
    });
    const headers = {
      "Content-Type": "application/json",
      "Convex-Client": `npm-${version}`
    };
    if (this.adminAuth) {
      headers["Authorization"] = `Convex ${this.adminAuth}`;
    } else if (this.auth) {
      headers["Authorization"] = `Bearer ${this.auth}`;
    }
    const localFetch = this.fetch || specifiedFetch || fetch;
    const response = await localFetch(`${this.address}/api/action`, {
      ...this.fetchOptions,
      body,
      method: "POST",
      headers
    });
    if (!response.ok && response.status !== STATUS_CODE_UDF_FAILED) {
      throw new Error(await response.text());
    }
    const respJSON = await response.json();
    if (this.debug) {
      for (const line of respJSON.logLines ?? []) {
        logForFunction(this.logger, "info", "action", name, line);
      }
    }
    switch (respJSON.status) {
      case "success":
        return jsonToConvex(respJSON.value);
      case "error":
        if (respJSON.errorData !== void 0) {
          throw forwardErrorData(
            respJSON.errorData,
            new ConvexError(respJSON.errorMessage)
          );
        }
        throw new Error(respJSON.errorMessage);
      default:
        throw new Error(`Invalid response: ${JSON.stringify(respJSON)}`);
    }
  }
  /**
   * Execute a Convex function of an unknown type. These function calls are not queued.
   *
   * @param name - The name of the function.
   * @param args - The arguments object for the function. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the function's result.
   *
   * @internal
   */
  async function(anyFunction, componentPath, ...args) {
    const functionArgs = parseArgs(args[0]);
    const name = typeof anyFunction === "string" ? anyFunction : getFunctionName(anyFunction);
    const body = JSON.stringify({
      componentPath,
      path: name,
      format: "convex_encoded_json",
      args: convexToJson(functionArgs)
    });
    const headers = {
      "Content-Type": "application/json",
      "Convex-Client": `npm-${version}`
    };
    if (this.adminAuth) {
      headers["Authorization"] = `Convex ${this.adminAuth}`;
    } else if (this.auth) {
      headers["Authorization"] = `Bearer ${this.auth}`;
    }
    const localFetch = this.fetch || specifiedFetch || fetch;
    const response = await localFetch(`${this.address}/api/function`, {
      ...this.fetchOptions,
      body,
      method: "POST",
      headers
    });
    if (!response.ok && response.status !== STATUS_CODE_UDF_FAILED) {
      throw new Error(await response.text());
    }
    const respJSON = await response.json();
    if (this.debug) {
      for (const line of respJSON.logLines ?? []) {
        logForFunction(this.logger, "info", "any", name, line);
      }
    }
    switch (respJSON.status) {
      case "success":
        return jsonToConvex(respJSON.value);
      case "error":
        if (respJSON.errorData !== void 0) {
          throw forwardErrorData(
            respJSON.errorData,
            new ConvexError(respJSON.errorMessage)
          );
        }
        throw new Error(respJSON.errorMessage);
      default:
        throw new Error(`Invalid response: ${JSON.stringify(respJSON)}`);
    }
  }
}
function forwardErrorData(errorData, error) {
  error.data = jsonToConvex(errorData);
  return error;
}
function useSubscription({
  // (Synchronously) returns the current value of our subscription.
  getCurrentValue,
  // This function is passed an event handler to attach to the subscription.
  // It should return an unsubscribe function that removes the handler.
  subscribe
}) {
  const [state, setState] = reactExports.useState(() => ({
    getCurrentValue,
    subscribe,
    value: getCurrentValue()
  }));
  let valueToReturn = state.value;
  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue,
      subscribe,
      value: valueToReturn
    });
  }
  reactExports.useEffect(() => {
    let didUnsubscribe = false;
    const checkForUpdates = () => {
      if (didUnsubscribe) {
        return;
      }
      setState((prevState) => {
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        }
        const value2 = getCurrentValue();
        if (prevState.value === value2) {
          return prevState;
        }
        return { ...prevState, value: value2 };
      });
    };
    const unsubscribe = subscribe(checkForUpdates);
    checkForUpdates();
    return () => {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]);
  return valueToReturn;
}
var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value2) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField$1 = (obj, key, value2) => __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value2);
const DEFAULT_EXTEND_SUBSCRIPTION_FOR = 5e3;
if (typeof We === "undefined") {
  throw new Error("Required dependency 'react' not found");
}
function createMutation(mutationReference, client, update) {
  function mutation(args) {
    assertNotAccidentalArgument(args);
    return client.mutation(mutationReference, args, {
      optimisticUpdate: update
    });
  }
  mutation.withOptimisticUpdate = function withOptimisticUpdate(optimisticUpdate) {
    if (update !== void 0) {
      throw new Error(
        `Already specified optimistic update for mutation ${getFunctionName(
          mutationReference
        )}`
      );
    }
    return createMutation(mutationReference, client, optimisticUpdate);
  };
  return mutation;
}
function createAction(actionReference, client) {
  return function(args) {
    return client.action(actionReference, args);
  };
}
class ConvexReactClient {
  /**
   * @param address - The url of your Convex deployment, often provided
   * by an environment variable. E.g. `https://small-mouse-123.convex.cloud`.
   * @param options - See {@link ConvexReactClientOptions} for a full description.
   */
  constructor(address, options) {
    __publicField$1(this, "address");
    __publicField$1(this, "cachedSync");
    __publicField$1(this, "cachedPaginatedQueryClient");
    __publicField$1(this, "listeners");
    __publicField$1(this, "options");
    __publicField$1(this, "closed", false);
    __publicField$1(this, "_logger");
    __publicField$1(this, "adminAuth");
    __publicField$1(this, "fakeUserIdentity");
    if (address === void 0) {
      throw new Error(
        "No address provided to ConvexReactClient.\nIf trying to deploy to production, make sure to follow all the instructions found at https://docs.convex.dev/production/hosting/\nIf running locally, make sure to run `convex dev` and ensure the .env.local file is populated."
      );
    }
    if (typeof address !== "string") {
      throw new Error(
        `ConvexReactClient requires a URL like 'https://happy-otter-123.convex.cloud', received something of type ${typeof address} instead.`
      );
    }
    if (!address.includes("://")) {
      throw new Error("Provided address was not an absolute URL.");
    }
    this.address = address;
    this.listeners = /* @__PURE__ */ new Map();
    this._logger = options?.logger === false ? instantiateNoopLogger({ verbose: options?.verbose ?? false }) : options?.logger !== true && options?.logger ? options.logger : instantiateDefaultLogger({ verbose: options?.verbose ?? false });
    this.options = { ...options, logger: this._logger };
  }
  /**
   * Return the address for this client, useful for creating a new client.
   *
   * Not guaranteed to match the address with which this client was constructed:
   * it may be canonicalized.
   */
  get url() {
    return this.address;
  }
  /**
   * Lazily instantiate the `BaseConvexClient` so we don't create the WebSocket
   * when server-side rendering.
   *
   * @internal
   */
  get sync() {
    if (this.closed) {
      throw new Error("ConvexReactClient has already been closed.");
    }
    if (this.cachedSync) {
      return this.cachedSync;
    }
    this.cachedSync = new BaseConvexClient(
      this.address,
      () => {
      },
      // Use the PaginatedQueryClient's transition instead.
      this.options
    );
    if (this.adminAuth) {
      this.cachedSync.setAdminAuth(this.adminAuth, this.fakeUserIdentity);
    }
    this.cachedPaginatedQueryClient = new PaginatedQueryClient(
      this.cachedSync,
      (transition) => this.handleTransition(transition)
    );
    return this.cachedSync;
  }
  /**
   * Lazily instantiate the `PaginatedQueryClient` so we don't create it
   * when server-side rendering.
   *
   * @internal
   */
  get paginatedQueryClient() {
    this.sync;
    if (this.cachedPaginatedQueryClient) {
      return this.cachedPaginatedQueryClient;
    }
    throw new Error("Should already be instantiated");
  }
  /**
   * Set the authentication token to be used for subsequent queries and mutations.
   * `fetchToken` will be called automatically again if a token expires.
   * `fetchToken` should return `null` if the token cannot be retrieved, for example
   * when the user's rights were permanently revoked.
   * @param fetchToken - an async function returning the JWT-encoded OpenID Connect Identity Token
   * @param onChange - a callback that will be called when the authentication status changes
   */
  setAuth(fetchToken, onChange) {
    if (typeof fetchToken === "string") {
      throw new Error(
        "Passing a string to ConvexReactClient.setAuth is no longer supported, please upgrade to passing in an async function to handle reauthentication."
      );
    }
    this.sync.setAuth(
      fetchToken,
      onChange ?? (() => {
      })
    );
  }
  /**
   * Clear the current authentication token if set.
   */
  clearAuth() {
    this.sync.clearAuth();
  }
  /**
   * @internal
   */
  setAdminAuth(token, identity) {
    this.adminAuth = token;
    this.fakeUserIdentity = identity;
    if (this.closed) {
      throw new Error("ConvexReactClient has already been closed.");
    }
    if (this.cachedSync) {
      this.sync.setAdminAuth(token, identity);
    }
  }
  /**
   * Construct a new {@link Watch} on a Convex query function.
   *
   * **Most application code should not call this method directly. Instead use
   * the {@link useQuery} hook.**
   *
   * The act of creating a watch does nothing, a Watch is stateless.
   *
   * @param query - A {@link server.FunctionReference} for the public query to run.
   * @param args - An arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @param options - A {@link WatchQueryOptions} options object for this query.
   *
   * @returns The {@link Watch} object.
   */
  watchQuery(query, ...argsAndOptions) {
    const [args, options] = argsAndOptions;
    const name = getFunctionName(query);
    return {
      onUpdate: (callback) => {
        const { queryToken, unsubscribe } = this.sync.subscribe(
          name,
          args,
          options
        );
        const currentListeners = this.listeners.get(queryToken);
        if (currentListeners !== void 0) {
          currentListeners.add(callback);
        } else {
          this.listeners.set(queryToken, /* @__PURE__ */ new Set([callback]));
        }
        return () => {
          if (this.closed) {
            return;
          }
          const currentListeners2 = this.listeners.get(queryToken);
          currentListeners2.delete(callback);
          if (currentListeners2.size === 0) {
            this.listeners.delete(queryToken);
          }
          unsubscribe();
        };
      },
      localQueryResult: () => {
        if (this.cachedSync) {
          return this.cachedSync.localQueryResult(name, args);
        }
        return void 0;
      },
      localQueryLogs: () => {
        if (this.cachedSync) {
          return this.cachedSync.localQueryLogs(name, args);
        }
        return void 0;
      },
      journal: () => {
        if (this.cachedSync) {
          return this.cachedSync.queryJournal(name, args);
        }
        return void 0;
      }
    };
  }
  // Let's try out a queryOptions-style API.
  // This method is similar to the React Query API `queryClient.prefetchQuery()`.
  // In the future an ensureQueryData(): Promise<Data> method could exist.
  /**
   * Indicates likely future interest in a query subscription.
   *
   * The implementation currently immediately subscribes to a query. In the future this method
   * may prioritize some queries over others, fetch the query result without subscribing, or
   * do nothing in slow network connections or high load scenarios.
   *
   * To use this in a React component, call useQuery() and ignore the return value.
   *
   * @param queryOptions - A query (function reference from an api object) and its args, plus
   * an optional extendSubscriptionFor for how long to subscribe to the query.
   */
  prewarmQuery(queryOptions) {
    const extendSubscriptionFor = queryOptions.extendSubscriptionFor ?? DEFAULT_EXTEND_SUBSCRIPTION_FOR;
    const watch = this.watchQuery(queryOptions.query, queryOptions.args || {});
    const unsubscribe = watch.onUpdate(() => {
    });
    setTimeout(unsubscribe, extendSubscriptionFor);
  }
  /**
   * Construct a new {@link PaginatedWatch} on a Convex paginated query function.
   *
   * **Most application code should not call this method directly. Instead use
   * the {@link usePaginatedQuery} hook.**
   *
   * The act of creating a watch does nothing, a Watch is stateless.
   *
   * @param query - A {@link server.FunctionReference} for the public query to run.
   * @param args - An arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @param options - A {@link WatchPaginatedQueryOptions} options object for this query.
   *
   * @returns The {@link PaginatedWatch} object.
   *
   * @internal
   */
  watchPaginatedQuery(query, args, options) {
    const name = getFunctionName(query);
    return {
      onUpdate: (callback) => {
        const { paginatedQueryToken, unsubscribe } = this.paginatedQueryClient.subscribe(name, args || {}, options);
        const currentListeners = this.listeners.get(paginatedQueryToken);
        if (currentListeners !== void 0) {
          currentListeners.add(callback);
        } else {
          this.listeners.set(paginatedQueryToken, /* @__PURE__ */ new Set([callback]));
        }
        return () => {
          if (this.closed) {
            return;
          }
          const currentListeners2 = this.listeners.get(paginatedQueryToken);
          currentListeners2.delete(callback);
          if (currentListeners2.size === 0) {
            this.listeners.delete(paginatedQueryToken);
          }
          unsubscribe();
        };
      },
      localQueryResult: () => {
        return this.paginatedQueryClient.localQueryResult(name, args, options);
      }
    };
  }
  /**
   * Execute a mutation function.
   *
   * @param mutation - A {@link server.FunctionReference} for the public mutation
   * to run.
   * @param args - An arguments object for the mutation. If this is omitted,
   * the arguments will be `{}`.
   * @param options - A {@link MutationOptions} options object for the mutation.
   * @returns A promise of the mutation's result.
   */
  mutation(mutation, ...argsAndOptions) {
    const [args, options] = argsAndOptions;
    const name = getFunctionName(mutation);
    return this.sync.mutation(name, args, options);
  }
  /**
   * Execute an action function.
   *
   * @param action - A {@link server.FunctionReference} for the public action
   * to run.
   * @param args - An arguments object for the action. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the action's result.
   */
  action(action, ...args) {
    const name = getFunctionName(action);
    return this.sync.action(name, ...args);
  }
  /**
   * Fetch a query result once.
   *
   * **Most application code should subscribe to queries instead, using
   * the {@link useQuery} hook.**
   *
   * @param query - A {@link server.FunctionReference} for the public query
   * to run.
   * @param args - An arguments object for the query. If this is omitted,
   * the arguments will be `{}`.
   * @returns A promise of the query's result.
   */
  query(query, ...args) {
    const watch = this.watchQuery(query, ...args);
    const existingResult = watch.localQueryResult();
    if (existingResult !== void 0) {
      return Promise.resolve(existingResult);
    }
    return new Promise((resolve, reject) => {
      const unsubscribe = watch.onUpdate(() => {
        unsubscribe();
        try {
          resolve(watch.localQueryResult());
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  /**
   * Get the current {@link ConnectionState} between the client and the Convex
   * backend.
   *
   * @returns The {@link ConnectionState} with the Convex backend.
   */
  connectionState() {
    return this.sync.connectionState();
  }
  /**
   * Subscribe to the {@link ConnectionState} between the client and the Convex
   * backend, calling a callback each time it changes.
   *
   * Subscribed callbacks will be called when any part of ConnectionState changes.
   * ConnectionState may grow in future versions (e.g. to provide a array of
   * inflight requests) in which case callbacks would be called more frequently.
   * ConnectionState may also *lose* properties in future versions as we figure
   * out what information is most useful. As such this API is considered unstable.
   *
   * @returns An unsubscribe function to stop listening.
   */
  subscribeToConnectionState(cb) {
    return this.sync.subscribeToConnectionState(cb);
  }
  /**
   * Get the logger for this client.
   *
   * @returns The {@link Logger} for this client.
   */
  get logger() {
    return this._logger;
  }
  /**
   * Close any network handles associated with this client and stop all subscriptions.
   *
   * Call this method when you're done with a {@link ConvexReactClient} to
   * dispose of its sockets and resources.
   *
   * @returns A `Promise` fulfilled when the connection has been completely closed.
   */
  async close() {
    this.closed = true;
    this.listeners = /* @__PURE__ */ new Map();
    if (this.cachedPaginatedQueryClient) {
      this.cachedPaginatedQueryClient = void 0;
    }
    if (this.cachedSync) {
      const sync = this.cachedSync;
      this.cachedSync = void 0;
      await sync.close();
    }
  }
  /**
   * Handle transitions from both base client and paginated client.
   * This ensures all transitions are processed synchronously and in order.
   */
  handleTransition(transition) {
    const simple = transition.queries.map((q) => q.token);
    const paginated = transition.paginatedQueries.map((q) => q.token);
    this.transition([...simple, ...paginated]);
  }
  transition(updatedQueries) {
    for (const queryToken of updatedQueries) {
      const callbacks = this.listeners.get(queryToken);
      if (callbacks) {
        for (const callback of callbacks) {
          callback();
        }
      }
    }
  }
}
const ConvexContext = We.createContext(
  void 0
  // in the future this will be a mocked client for testing
);
function useConvex() {
  return reactExports.useContext(ConvexContext);
}
const ConvexProvider = ({ client, children }) => {
  return We.createElement(
    ConvexContext.Provider,
    { value: client },
    children
  );
};
function useQuery(query, ...args) {
  const skip = args[0] === "skip";
  const argsObject = args[0] === "skip" ? {} : parseArgs(args[0]);
  const queryReference = typeof query === "string" ? makeFunctionReference(query) : query;
  const queryName = getFunctionName(queryReference);
  const queries = reactExports.useMemo(
    () => skip ? {} : { query: { query: queryReference, args: argsObject } },
    // Stringify args so args that are semantically the same don't trigger a
    // rerender. Saves developers from adding `useMemo` on every args usage.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(convexToJson(argsObject)), queryName, skip]
  );
  const results = useQueries(queries);
  const result = results["query"];
  if (result instanceof Error) {
    throw result;
  }
  return result;
}
function useMutation(mutation) {
  const mutationReference = typeof mutation === "string" ? makeFunctionReference(mutation) : mutation;
  const convex2 = reactExports.useContext(ConvexContext);
  if (convex2 === void 0) {
    throw new Error(
      "Could not find Convex client! `useMutation` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  }
  return reactExports.useMemo(
    () => createMutation(mutationReference, convex2),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [convex2, getFunctionName(mutationReference)]
  );
}
function useAction(action) {
  const convex2 = reactExports.useContext(ConvexContext);
  const actionReference = typeof action === "string" ? makeFunctionReference(action) : action;
  if (convex2 === void 0) {
    throw new Error(
      "Could not find Convex client! `useAction` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  }
  return reactExports.useMemo(
    () => createAction(actionReference, convex2),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [convex2, getFunctionName(actionReference)]
  );
}
function assertNotAccidentalArgument(value2) {
  if (typeof value2 === "object" && value2 !== null && "bubbles" in value2 && "persist" in value2 && "isDefaultPrevented" in value2) {
    throw new Error(
      `Convex function called with SyntheticEvent object. Did you use a Convex function as an event handler directly? Event handlers like onClick receive an event object as their first argument. These SyntheticEvent objects are not valid Convex values. Try wrapping the function like \`const handler = () => myMutation();\` and using \`handler\` in the event handler.`
    );
  }
}
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField = (obj, key, value2) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
class QueriesObserver {
  constructor(createWatch) {
    __publicField(this, "createWatch");
    __publicField(this, "queries");
    __publicField(this, "listeners");
    this.createWatch = createWatch;
    this.queries = {};
    this.listeners = /* @__PURE__ */ new Set();
  }
  setQueries(newQueries) {
    for (const identifier of Object.keys(newQueries)) {
      const { query, args, paginationOptions } = newQueries[identifier];
      getFunctionName(query);
      if (this.queries[identifier] === void 0) {
        this.addQuery(
          identifier,
          query,
          args,
          paginationOptions ? { paginationOptions } : {}
        );
      } else {
        const existingInfo = this.queries[identifier];
        if (getFunctionName(query) !== getFunctionName(existingInfo.query) || JSON.stringify(convexToJson(args)) !== JSON.stringify(convexToJson(existingInfo.args)) || JSON.stringify(paginationOptions) !== JSON.stringify(existingInfo.paginationOptions)) {
          this.removeQuery(identifier);
          this.addQuery(
            identifier,
            query,
            args,
            paginationOptions ? { paginationOptions } : {}
          );
        }
      }
    }
    for (const identifier of Object.keys(this.queries)) {
      if (newQueries[identifier] === void 0) {
        this.removeQuery(identifier);
      }
    }
  }
  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }
  getLocalResults(queries) {
    const result = {};
    for (const identifier of Object.keys(queries)) {
      const { query, args } = queries[identifier];
      const paginationOptions = queries[identifier].paginationOptions;
      getFunctionName(query);
      const watch = this.createWatch(
        query,
        args,
        paginationOptions ? { paginationOptions } : {}
      );
      let value2;
      try {
        value2 = watch.localQueryResult();
      } catch (e) {
        if (e instanceof Error) {
          value2 = e;
        } else {
          throw e;
        }
      }
      result[identifier] = value2;
    }
    return result;
  }
  setCreateWatch(createWatch) {
    this.createWatch = createWatch;
    for (const identifier of Object.keys(this.queries)) {
      const { query, args, watch, paginationOptions } = this.queries[identifier];
      const journal = "journal" in watch ? watch.journal() : void 0;
      this.removeQuery(identifier);
      this.addQuery(identifier, query, args, {
        ...journal ? { journal } : [],
        ...paginationOptions ? { paginationOptions } : {}
      });
    }
  }
  destroy() {
    for (const identifier of Object.keys(this.queries)) {
      this.removeQuery(identifier);
    }
    this.listeners = /* @__PURE__ */ new Set();
  }
  addQuery(identifier, query, args, {
    paginationOptions,
    journal
  }) {
    if (this.queries[identifier] !== void 0) {
      throw new Error(
        `Tried to add a new query with identifier ${identifier} when it already exists.`
      );
    }
    const watch = this.createWatch(query, args, {
      ...journal ? { journal } : [],
      ...paginationOptions ? { paginationOptions } : {}
    });
    const unsubscribe = watch.onUpdate(() => this.notifyListeners());
    this.queries[identifier] = {
      query,
      args,
      watch,
      unsubscribe,
      ...paginationOptions ? { paginationOptions } : {}
    };
  }
  removeQuery(identifier) {
    const info = this.queries[identifier];
    if (info === void 0) {
      throw new Error(`No query found with identifier ${identifier}.`);
    }
    info.unsubscribe();
    delete this.queries[identifier];
  }
  notifyListeners() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}
function useQueries(queries) {
  const convex2 = useConvex();
  if (convex2 === void 0) {
    throw new Error(
      "Could not find Convex client! `useQuery` must be used in the React component tree under `ConvexProvider`. Did you forget it? See https://docs.convex.dev/quick-start#set-up-convex-in-your-react-app"
    );
  }
  const createWatch = reactExports.useMemo(() => {
    return (query, args, {
      journal,
      paginationOptions
    }) => {
      if (paginationOptions) {
        return convex2.watchPaginatedQuery(query, args, paginationOptions);
      } else {
        return convex2.watchQuery(query, args, journal ? { journal } : {});
      }
    };
  }, [convex2]);
  return useQueriesHelper(queries, createWatch);
}
function useQueriesHelper(queries, createWatch) {
  const [observer] = reactExports.useState(() => new QueriesObserver(createWatch));
  if (observer.createWatch !== createWatch) {
    observer.setCreateWatch(createWatch);
  }
  reactExports.useEffect(() => () => observer.destroy(), [observer]);
  const subscription = reactExports.useMemo(
    () => ({
      getCurrentValue: () => {
        return observer.getLocalResults(queries);
      },
      subscribe: (callback) => {
        observer.setQueries(queries);
        return observer.subscribe(callback);
      }
    }),
    [observer, queries]
  );
  return useSubscription(subscription);
}
const ConvexAuthContext = reactExports.createContext(void 0);
function ConvexProviderWithAuth({
  children,
  client,
  useAuth: useAuth2
}) {
  const {
    isLoading: authProviderLoading,
    isAuthenticated: authProviderAuthenticated,
    fetchAccessToken
  } = useAuth2();
  const [isConvexAuthenticated, setIsConvexAuthenticated] = reactExports.useState(null);
  if (authProviderLoading && isConvexAuthenticated !== null) {
    setIsConvexAuthenticated(null);
  }
  if (!authProviderLoading && !authProviderAuthenticated && isConvexAuthenticated !== false) {
    setIsConvexAuthenticated(false);
  }
  return /* @__PURE__ */ We.createElement(
    ConvexAuthContext.Provider,
    {
      value: {
        isLoading: isConvexAuthenticated === null,
        isAuthenticated: authProviderAuthenticated && (isConvexAuthenticated ?? false)
      }
    },
    /* @__PURE__ */ We.createElement(
      ConvexAuthStateFirstEffect,
      {
        authProviderAuthenticated,
        fetchAccessToken,
        authProviderLoading,
        client,
        setIsConvexAuthenticated
      }
    ),
    /* @__PURE__ */ We.createElement(ConvexProvider, { client }, children),
    /* @__PURE__ */ We.createElement(
      ConvexAuthStateLastEffect,
      {
        authProviderAuthenticated,
        fetchAccessToken,
        authProviderLoading,
        client,
        setIsConvexAuthenticated
      }
    )
  );
}
function ConvexAuthStateFirstEffect({
  authProviderAuthenticated,
  fetchAccessToken,
  authProviderLoading,
  client,
  setIsConvexAuthenticated
}) {
  reactExports.useEffect(() => {
    let isThisEffectRelevant = true;
    if (authProviderAuthenticated) {
      client.setAuth(fetchAccessToken, (backendReportsIsAuthenticated) => {
        if (isThisEffectRelevant) {
          setIsConvexAuthenticated(() => backendReportsIsAuthenticated);
        }
      });
      return () => {
        isThisEffectRelevant = false;
        setIsConvexAuthenticated(
          (isConvexAuthenticated) => isConvexAuthenticated ? false : null
        );
      };
    }
  }, [
    authProviderAuthenticated,
    fetchAccessToken,
    authProviderLoading,
    client,
    setIsConvexAuthenticated
  ]);
  return null;
}
function ConvexAuthStateLastEffect({
  authProviderAuthenticated,
  fetchAccessToken,
  authProviderLoading,
  client,
  setIsConvexAuthenticated
}) {
  reactExports.useEffect(() => {
    if (authProviderAuthenticated) {
      return () => {
        client.clearAuth();
        setIsConvexAuthenticated(() => null);
      };
    }
  }, [
    authProviderAuthenticated,
    fetchAccessToken,
    authProviderLoading,
    client,
    setIsConvexAuthenticated
  ]);
  return null;
}
const objectToString = Object.prototype.toString;
const isError = (value2) => objectToString.call(value2) === "[object Error]";
const errorMessages = /* @__PURE__ */ new Set([
  "network error",
  // Chrome
  "Failed to fetch",
  // Chrome
  "NetworkError when attempting to fetch resource.",
  // Firefox
  "The Internet connection appears to be offline.",
  // Safari 16
  "Network request failed",
  // `cross-fetch`
  "fetch failed",
  // Undici (Node.js)
  "terminated",
  // Undici (Node.js)
  " A network error occurred.",
  // Bun (WebKit)
  "Network connection lost"
  // Cloudflare Workers (fetch)
]);
function isNetworkError(error) {
  const isValid = error && isError(error) && error.name === "TypeError" && typeof error.message === "string";
  if (!isValid) {
    return false;
  }
  const { message, stack } = error;
  if (message === "Load failed") {
    return stack === void 0 || "__sentry_captured__" in error;
  }
  if (message.startsWith("error sending request for url")) {
    return true;
  }
  return errorMessages.has(message);
}
const RETRY_BACKOFF = [500, 2e3];
const RETRY_JITTER = 100;
const ConvexAuthActionsContext = reactExports.createContext(void 0);
const ConvexAuthInternalContext = reactExports.createContext(void 0);
function useAuth() {
  return reactExports.useContext(ConvexAuthInternalContext);
}
const ConvexAuthTokenContext = reactExports.createContext(null);
const VERIFIER_STORAGE_KEY = "__convexAuthOAuthVerifier";
const JWT_STORAGE_KEY = "__convexAuthJWT";
const REFRESH_TOKEN_STORAGE_KEY = "__convexAuthRefreshToken";
const SERVER_STATE_FETCH_TIME_STORAGE_KEY = "__convexAuthServerStateFetchTime";
function AuthProvider({ client, serverState, onChange, shouldHandleCode, storage, storageNamespace, replaceURL, children }) {
  const token = reactExports.useRef(serverState?._state.token ?? null);
  const [isLoading, setIsLoading] = reactExports.useState(token.current === null);
  const [tokenState, setTokenState] = reactExports.useState(token.current);
  const verbose = client.verbose ?? false;
  const logVerbose = reactExports.useCallback((message) => {
    if (verbose) {
      console.debug(`${(/* @__PURE__ */ new Date()).toISOString()} ${message}`);
      client.logger?.logVerbose(message);
    }
  }, [verbose]);
  const { storageSet, storageGet, storageRemove, storageKey } = useNamespacedStorage(storage, storageNamespace);
  const [isRefreshingToken, setIsRefreshingToken] = reactExports.useState(false);
  const setToken = reactExports.useCallback(async (args) => {
    const wasAuthenticated = token.current !== null;
    let newToken;
    if (args.tokens === null) {
      token.current = null;
      if (args.shouldStore) {
        await storageRemove(JWT_STORAGE_KEY);
        await storageRemove(REFRESH_TOKEN_STORAGE_KEY);
      }
      newToken = null;
    } else {
      const { token: value2 } = args.tokens;
      token.current = value2;
      if (args.shouldStore) {
        const { refreshToken } = args.tokens;
        await storageSet(JWT_STORAGE_KEY, value2);
        await storageSet(REFRESH_TOKEN_STORAGE_KEY, refreshToken);
      }
      newToken = value2;
    }
    if (wasAuthenticated !== (newToken !== null)) {
      await onChange?.();
    }
    setTokenState(newToken);
    setIsLoading(false);
  }, [storageSet, storageRemove]);
  reactExports.useEffect(() => {
    const listener = async (e) => {
      if (isRefreshingToken) {
        e.preventDefault();
        const confirmationMessage = "Are you sure you want to leave? Your changes may not be saved.";
        e.returnValue = true;
        return confirmationMessage;
      }
    };
    browserAddEventListener("beforeunload", listener);
    return () => {
      browserRemoveEventListener("beforeunload", listener);
    };
  });
  reactExports.useEffect(() => {
    const listener = (event) => {
      void (async () => {
        if (event.storageArea !== storage) {
          return;
        }
        if (event.key === storageKey(JWT_STORAGE_KEY)) {
          const value2 = event.newValue;
          logVerbose(`synced access token, is null: ${value2 === null}`);
          await setToken({
            shouldStore: false,
            tokens: value2 === null ? null : { token: value2 }
          });
        }
      })();
    };
    browserAddEventListener("storage", listener);
    return () => browserRemoveEventListener("storage", listener);
  }, [setToken]);
  const verifyCode = reactExports.useCallback(async (args) => {
    let lastError;
    let retry = 0;
    while (retry < RETRY_BACKOFF.length) {
      try {
        return await client.unauthenticatedCall("auth:signIn", "code" in args ? { params: { code: args.code }, verifier: args.verifier } : args);
      } catch (e) {
        lastError = e;
        if (!isNetworkError(e)) {
          break;
        }
        const wait = RETRY_BACKOFF[retry] + RETRY_JITTER * Math.random();
        retry++;
        logVerbose(`verifyCode failed with network error, retry ${retry} of ${RETRY_BACKOFF.length} in ${wait}ms`);
        await new Promise((resolve) => setTimeout(resolve, wait));
      }
    }
    throw lastError;
  }, [client]);
  const verifyCodeAndSetToken = reactExports.useCallback(async (args) => {
    const { tokens } = await verifyCode(args);
    logVerbose(`retrieved tokens, is null: ${tokens === null}`);
    await setToken({ shouldStore: true, tokens: tokens ?? null });
    return tokens !== null;
  }, [client, setToken]);
  const signIn = reactExports.useCallback(async (provider, args) => {
    const params = args instanceof FormData ? Array.from(args.entries()).reduce((acc, [key, value2]) => {
      acc[key] = value2;
      return acc;
    }, {}) : args ?? {};
    const verifier = await storageGet(VERIFIER_STORAGE_KEY) ?? void 0;
    await storageRemove(VERIFIER_STORAGE_KEY);
    const result = await client.authenticatedCall("auth:signIn", { provider, params, verifier });
    if (result.redirect !== void 0) {
      const url2 = new URL(result.redirect);
      await storageSet(VERIFIER_STORAGE_KEY, result.verifier);
      if (navigator.product !== "ReactNative") {
        window.location.href = url2.toString();
      }
      return { signingIn: false, redirect: url2 };
    } else if (result.tokens !== void 0) {
      const { tokens } = result;
      logVerbose(`signed in and got tokens, is null: ${tokens === null}`);
      await setToken({ shouldStore: true, tokens });
      return { signingIn: result.tokens !== null };
    }
    return { signingIn: false };
  }, [client, setToken, storageGet]);
  const signOut = reactExports.useCallback(async () => {
    try {
      await client.authenticatedCall("auth:signOut");
    } catch (error) {
    }
    logVerbose(`signed out, erasing tokens`);
    await setToken({ shouldStore: true, tokens: null });
  }, [setToken, client]);
  const fetchAccessToken = reactExports.useCallback(async ({ forceRefreshToken }) => {
    if (forceRefreshToken) {
      const tokenBeforeLockAquisition = token.current;
      return await browserMutex(REFRESH_TOKEN_STORAGE_KEY, async () => {
        const tokenAfterLockAquisition = token.current;
        if (tokenAfterLockAquisition !== tokenBeforeLockAquisition) {
          logVerbose(`returning synced token, is null: ${tokenAfterLockAquisition === null}`);
          return tokenAfterLockAquisition;
        }
        const refreshToken = await storageGet(REFRESH_TOKEN_STORAGE_KEY) ?? null;
        if (refreshToken !== null) {
          setIsRefreshingToken(true);
          await verifyCodeAndSetToken({ refreshToken }).finally(() => {
            setIsRefreshingToken(false);
          });
          logVerbose(`returning retrieved token, is null: ${tokenAfterLockAquisition === null}`);
          return token.current;
        } else {
          setIsRefreshingToken(false);
          logVerbose(`returning null, there is no refresh token`);
          return null;
        }
      });
    }
    return token.current;
  }, [verifyCodeAndSetToken, signOut, storageGet]);
  const signingInWithCodeFromURL = reactExports.useRef(false);
  reactExports.useEffect(
    () => {
      if (storage === void 0) {
        throw new Error("`localStorage` is not available in this environment, set the `storage` prop on `ConvexAuthProvider`!");
      }
      const readStateFromStorage = async () => {
        const token2 = await storageGet(JWT_STORAGE_KEY) ?? null;
        logVerbose(`retrieved token from storage, is null: ${token2 === null}`);
        await setToken({
          shouldStore: false,
          tokens: token2 === null ? null : { token: token2 }
        });
      };
      if (serverState !== void 0) {
        const timeFetched = storageGet(SERVER_STATE_FETCH_TIME_STORAGE_KEY);
        const setTokensFromServerState = (timeFetched2) => {
          if (!timeFetched2 || serverState._timeFetched > +timeFetched2) {
            const { token: token2, refreshToken } = serverState._state;
            const tokens = token2 === null || refreshToken === null ? null : { token: token2, refreshToken };
            void storageSet(SERVER_STATE_FETCH_TIME_STORAGE_KEY, serverState._timeFetched.toString());
            void setToken({ tokens, shouldStore: true });
          } else {
            void readStateFromStorage();
          }
        };
        if (timeFetched instanceof Promise) {
          void timeFetched.then(setTokensFromServerState);
        } else {
          setTokensFromServerState(timeFetched);
        }
        return;
      }
      const code2 = typeof window?.location?.search !== "undefined" ? new URLSearchParams(window.location.search).get("code") : null;
      if ((signingInWithCodeFromURL.current || code2) && !signingInWithCodeFromURL.current && (shouldHandleCode === void 0 || (typeof shouldHandleCode === "function" ? shouldHandleCode() : shouldHandleCode))) {
        signingInWithCodeFromURL.current = true;
        const url2 = new URL(window.location.href);
        url2.searchParams.delete("code");
        void (async () => {
          await replaceURL(url2.pathname + url2.search + url2.hash);
          await signIn(void 0, { code: code2 });
          signingInWithCodeFromURL.current = false;
        })();
      } else {
        void readStateFromStorage();
      }
    },
    // Explicitly chosen dependencies.
    // This effect should mostly only run once
    // on mount.
    [client, storageGet]
  );
  const actions = reactExports.useMemo(() => ({ signIn, signOut }), [signIn, signOut]);
  const isAuthenticated = tokenState !== null;
  const authState = reactExports.useMemo(() => ({
    isLoading,
    isAuthenticated,
    fetchAccessToken
  }), [fetchAccessToken, isLoading, isAuthenticated]);
  return jsxRuntimeExports.jsx(ConvexAuthInternalContext.Provider, { value: authState, children: jsxRuntimeExports.jsx(ConvexAuthActionsContext.Provider, { value: actions, children: jsxRuntimeExports.jsx(ConvexAuthTokenContext.Provider, { value: tokenState, children }) }) });
}
function useNamespacedStorage(peristentStorage, namespace) {
  const inMemoryStorage = useInMemoryStorage();
  const storage = reactExports.useMemo(() => peristentStorage ?? inMemoryStorage(), [peristentStorage]);
  const escapedNamespace = namespace.replace(/[^a-zA-Z0-9]/g, "");
  const storageKey = reactExports.useCallback((key) => `${key}_${escapedNamespace}`, [namespace]);
  const storageSet = reactExports.useCallback((key, value2) => storage.setItem(storageKey(key), value2), [storage, storageKey]);
  const storageGet = reactExports.useCallback((key) => storage.getItem(storageKey(key)), [storage, storageKey]);
  const storageRemove = reactExports.useCallback((key) => storage.removeItem(storageKey(key)), [storage, storageKey]);
  return { storageSet, storageGet, storageRemove, storageKey };
}
function useInMemoryStorage() {
  const [inMemoryStorage, setInMemoryStorage] = reactExports.useState({});
  return () => ({
    getItem: (key) => inMemoryStorage[key],
    setItem: (key, value2) => {
      setInMemoryStorage((prev) => ({ ...prev, [key]: value2 }));
    },
    removeItem: (key) => {
      setInMemoryStorage((prev) => {
        const { [key]: _, ...rest } = prev;
        return rest;
      });
    }
  });
}
async function browserMutex(key, callback) {
  const lockManager = window?.navigator?.locks;
  return lockManager !== void 0 ? await lockManager.request(key, callback) : await manualMutex(key, callback);
}
function getMutexValue(key) {
  if (globalThis.__convexAuthMutexes === void 0) {
    globalThis.__convexAuthMutexes = {};
  }
  let mutex = globalThis.__convexAuthMutexes[key];
  if (mutex === void 0) {
    globalThis.__convexAuthMutexes[key] = {
      currentlyRunning: null,
      waiting: []
    };
  }
  mutex = globalThis.__convexAuthMutexes[key];
  return mutex;
}
function setMutexValue(key, value2) {
  globalThis.__convexAuthMutexes[key] = value2;
}
async function enqueueCallbackForMutex(key, callback) {
  const mutex = getMutexValue(key);
  if (mutex.currentlyRunning === null) {
    setMutexValue(key, {
      currentlyRunning: callback().finally(() => {
        const nextCb = getMutexValue(key).waiting.shift();
        getMutexValue(key).currentlyRunning = null;
        setMutexValue(key, {
          ...getMutexValue(key),
          currentlyRunning: nextCb === void 0 ? null : enqueueCallbackForMutex(key, nextCb)
        });
      }),
      waiting: []
    });
  } else {
    setMutexValue(key, {
      ...mutex,
      waiting: [...mutex.waiting, callback]
    });
  }
}
async function manualMutex(key, callback) {
  const outerPromise = new Promise((resolve, reject) => {
    const wrappedCallback = () => {
      return callback().then((v) => resolve(v)).catch((e) => reject(e));
    };
    void enqueueCallbackForMutex(key, wrappedCallback);
  });
  return outerPromise;
}
function browserAddEventListener(type2, listener, options) {
  window.addEventListener?.(type2, listener, options);
}
function browserRemoveEventListener(type2, listener, options) {
  window.removeEventListener?.(type2, listener, options);
}
function useAuthActions() {
  return reactExports.useContext(ConvexAuthActionsContext);
}
function ConvexAuthProvider(props) {
  const { client, storage, storageNamespace, replaceURL, shouldHandleCode, children } = props;
  const authClient = reactExports.useMemo(() => ({
    authenticatedCall(action, args) {
      return client.action(action, args);
    },
    unauthenticatedCall(action, args) {
      return new ConvexHttpClient(client.address, {
        logger: client.logger
      }).action(action, args);
    },
    verbose: client.options?.verbose,
    logger: client.logger
  }), [client]);
  return jsxRuntimeExports.jsx(AuthProvider, { client: authClient, storage: storage ?? // Handle SSR, RN, Web, etc.
  // Pretend we always have storage, the component checks
  // it in first useEffect.
  (typeof window === "undefined" ? void 0 : window?.localStorage), storageNamespace: storageNamespace ?? client.address, replaceURL: replaceURL ?? ((url2) => {
    window.history.replaceState({}, "", url2);
  }), shouldHandleCode, children: jsxRuntimeExports.jsx(ConvexProviderWithAuth, { client, useAuth, children }) });
}
const convex = new ConvexReactClient(void 0);
const api = anyApi;
componentsGeneric();
function useAuthStatus() {
  const me = useQuery(api.users.me);
  return {
    me,
    isLoading: me === void 0,
    isAuthenticated: Boolean(me)
  };
}
function UserBootstrap() {
  const { isAuthenticated, isLoading } = useAuthStatus();
  const ensureUser = useMutation(api.users.ensure);
  const didRun = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (isLoading || !isAuthenticated || didRun.current) return;
    didRun.current = true;
    void ensureUser();
  }, [isAuthenticated, isLoading, ensureUser]);
  return null;
}
function AppProviders({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    ConvexAuthProvider,
    {
      client: convex,
      replaceURL: (relativeUrl) => {
        if (typeof window !== "undefined") {
          window.history.replaceState(null, "", relativeUrl);
        }
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(UserBootstrap, {}),
        children
      ]
    }
  );
}
function ClientOnly({
  children,
  fallback = null
}) {
  const [ready, setReady] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setReady(true);
  }, []);
  if (!ready) return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: fallback });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children });
}
const DEFAULT_CLAWHUB_SITE_URL = "https://clawhub.ai";
const DEFAULT_ONLYCRABS_SITE_URL = "https://onlycrabs.ai";
const DEFAULT_ONLYCRABS_HOST = "onlycrabs.ai";
function getClawHubSiteUrl() {
  return DEFAULT_CLAWHUB_SITE_URL;
}
function getOnlyCrabsSiteUrl() {
  return DEFAULT_ONLYCRABS_SITE_URL;
}
function getOnlyCrabsHost() {
  return DEFAULT_ONLYCRABS_HOST;
}
function detectSiteMode(host) {
  if (!host) return "skills";
  const onlyCrabsHost = getOnlyCrabsHost().toLowerCase();
  const lower2 = host.toLowerCase();
  if (lower2 === onlyCrabsHost || lower2.endsWith(`.${onlyCrabsHost}`)) return "souls";
  return "skills";
}
function detectSiteModeFromUrl(value2) {
  if (!value2) return "skills";
  try {
    const host = new URL(value2).hostname;
    return detectSiteMode(host);
  } catch {
    return detectSiteMode(value2);
  }
}
function getSiteMode() {
  if (typeof window !== "undefined") {
    return detectSiteMode(window.location.hostname);
  }
  const siteUrl = process.env.SITE_URL;
  if (siteUrl) return detectSiteModeFromUrl(siteUrl);
  return "skills";
}
function getSiteName(mode = getSiteMode()) {
  return mode === "souls" ? "SoulHub" : "ClawHub";
}
function getSiteDescription(mode = getSiteMode()) {
  return mode === "souls" ? "SoulHub — the home for SOUL.md bundles and personal system lore." : "ClawHub — a fast skill registry for agents, with vector search.";
}
function getSiteUrlForMode(mode = getSiteMode()) {
  return mode === "souls" ? getOnlyCrabsSiteUrl() : getClawHubSiteUrl();
}
function Footer() {
  const siteName = getSiteName();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "site-footer", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-footer-inner", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "site-footer-divider", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "site-footer-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "site-footer-copy", children: [
      siteName,
      " · A",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://openclaw.ai", target: "_blank", rel: "noreferrer", children: "OpenClaw" }),
      " ",
      "project ·",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/openclaw/clawhub", target: "_blank", rel: "noreferrer", children: "Open source (MIT)" }),
      " ",
      "·",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://steipete.me", target: "_blank", rel: "noreferrer", children: "Peter Steinberger" }),
      "."
    ] }) })
  ] }) });
}
function md5cycle(x, k) {
  let [a, b, c, d] = x;
  a = ff(a, b, c, d, k[0], 7, -680876936);
  d = ff(d, a, b, c, k[1], 12, -389564586);
  c = ff(c, d, a, b, k[2], 17, 606105819);
  b = ff(b, c, d, a, k[3], 22, -1044525330);
  a = ff(a, b, c, d, k[4], 7, -176418897);
  d = ff(d, a, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a, k[7], 22, -45705983);
  a = ff(a, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a, b, k[10], 17, -42063);
  b = ff(b, c, d, a, k[11], 22, -1990404162);
  a = ff(a, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a, b, c, k[13], 12, -40341101);
  c = ff(c, d, a, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a, k[15], 22, 1236535329);
  a = gg(a, b, c, d, k[1], 5, -165796510);
  d = gg(d, a, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a, b, k[11], 14, 643717713);
  b = gg(b, c, d, a, k[0], 20, -373897302);
  a = gg(a, b, c, d, k[5], 5, -701558691);
  d = gg(d, a, b, c, k[10], 9, 38016083);
  c = gg(c, d, a, b, k[15], 14, -660478335);
  b = gg(b, c, d, a, k[4], 20, -405537848);
  a = gg(a, b, c, d, k[9], 5, 568446438);
  d = gg(d, a, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a, b, k[3], 14, -187363961);
  b = gg(b, c, d, a, k[8], 20, 1163531501);
  a = gg(a, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a, b, c, k[2], 9, -51403784);
  c = gg(c, d, a, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a, k[12], 20, -1926607734);
  a = hh(a, b, c, d, k[5], 4, -378558);
  d = hh(d, a, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a, k[14], 23, -35309556);
  a = hh(a, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a, b, k[7], 16, -155497632);
  b = hh(b, c, d, a, k[10], 23, -1094730640);
  a = hh(a, b, c, d, k[13], 4, 681279174);
  d = hh(d, a, b, c, k[0], 11, -358537222);
  c = hh(c, d, a, b, k[3], 16, -722521979);
  b = hh(b, c, d, a, k[6], 23, 76029189);
  a = hh(a, b, c, d, k[9], 4, -640364487);
  d = hh(d, a, b, c, k[12], 11, -421815835);
  c = hh(c, d, a, b, k[15], 16, 530742520);
  b = hh(b, c, d, a, k[2], 23, -995338651);
  a = ii(a, b, c, d, k[0], 6, -198630844);
  d = ii(d, a, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a, k[5], 21, -57434055);
  a = ii(a, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a, b, k[10], 15, -1051523);
  b = ii(b, c, d, a, k[1], 21, -2054922799);
  a = ii(a, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a, b, c, k[15], 10, -30611744);
  c = ii(c, d, a, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a, k[13], 21, 1309151649);
  a = ii(a, b, c, d, k[4], 6, -145523070);
  d = ii(d, a, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a, b, k[2], 15, 718787259);
  b = ii(b, c, d, a, k[9], 21, -343485551);
  x[0] = add32(a, x[0]);
  x[1] = add32(b, x[1]);
  x[2] = add32(c, x[2]);
  x[3] = add32(d, x[3]);
}
function cmn(q, a, b, x, s, t) {
  a = add32(add32(a, q), add32(x, t));
  return add32(a << s | a >>> 32 - s, b);
}
function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
}
function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
}
function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}
function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}
function md51(s) {
  const n = s.length;
  const state = [1732584193, -271733879, -1732584194, 271733878];
  let i = 0;
  for (i = 64; i <= n; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }
  s = s.substring(i - 64);
  const tail = Array(16).fill(0);
  for (i = 0; i < s.length; i += 1) {
    tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
  }
  tail[i >> 2] |= 128 << (i % 4 << 3);
  if (i > 55) {
    md5cycle(state, tail);
    for (let j = 0; j < 16; j += 1) tail[j] = 0;
  }
  tail[14] = n * 8;
  md5cycle(state, tail);
  return state;
}
function md5blk(s) {
  const md5blks = [];
  for (let i = 0; i < 64; i += 4) {
    md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
  }
  return md5blks;
}
function rhex(n) {
  const s = "0123456789abcdef";
  let j = 0;
  let out = "";
  for (; j < 4; j += 1) {
    out += s.charAt(n >> j * 8 + 4 & 15) + s.charAt(n >> j * 8 & 15);
  }
  return out;
}
function hex$1(x) {
  for (let i = 0; i < x.length; i += 1) {
    x[i] = Number(x[i]);
  }
  return x.map(rhex).join("");
}
function add32(a, b) {
  return a + b & 4294967295;
}
function gravatarUrl(email2, size = 160) {
  const normalized = email2.trim().toLowerCase();
  const hash = hex$1(md51(normalized));
  return `https://www.gravatar.com/avatar/${hash}?d=identicon&s=${size}`;
}
function isAdmin(user) {
  return user?.role === "admin";
}
function isModerator(user) {
  return user?.role === "admin" || user?.role === "moderator";
}
function canManageSkill(user, skill) {
  if (!user || !skill) return false;
  return user._id === skill.ownerUserId || isModerator(user);
}
const THEME_KEY = "clawhub-theme";
const LEGACY_THEME_KEY = "clawdhub-theme";
function getStoredTheme() {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  const legacy = window.localStorage.getItem(LEGACY_THEME_KEY);
  if (legacy === "light" || legacy === "dark" || legacy === "system") return legacy;
  return "system";
}
function resolveTheme(mode) {
  if (mode !== "system") return mode;
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(mode) {
  if (typeof document === "undefined") return;
  const resolved = resolveTheme(mode);
  document.documentElement.dataset.theme = resolved;
  document.documentElement.classList.toggle("dark", resolved === "dark");
}
function useThemeMode() {
  const [mode, setMode] = reactExports.useState(() => getStoredTheme());
  reactExports.useEffect(() => {
    applyTheme(mode);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(THEME_KEY, mode);
    }
    if (mode !== "system" || typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme(mode);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [mode]);
  return { mode, setMode };
}
const clamp01 = (value2) => {
  if (Number.isNaN(value2)) return 0.5;
  if (value2 <= 0) return 0;
  if (value2 >= 1) return 1;
  return value2;
};
const resolveWindow = () => globalThis.window;
const hasReducedMotionPreference = () => {
  const currentWindow = resolveWindow();
  if (!currentWindow || typeof currentWindow.matchMedia !== "function") return false;
  return currentWindow.matchMedia("(prefers-reduced-motion: reduce)").matches ?? false;
};
const cleanupThemeTransition = (root) => {
  root.classList.remove("theme-transition");
  root.style.removeProperty("--theme-switch-x");
  root.style.removeProperty("--theme-switch-y");
};
const startThemeTransition = ({
  nextTheme,
  setTheme,
  context,
  onBeforeThemeChange,
  onAfterThemeChange,
  currentTheme
}) => {
  if (currentTheme === nextTheme) return;
  const documentReference = globalThis.document ?? null;
  if (!documentReference) {
    onBeforeThemeChange?.();
    setTheme(nextTheme);
    onAfterThemeChange?.();
    return;
  }
  const root = documentReference.documentElement;
  const document_ = documentReference;
  const prefersReducedMotion = hasReducedMotionPreference();
  const applyTheme2 = () => {
    onBeforeThemeChange?.();
    reactDomExports.flushSync(() => {
      setTheme(nextTheme);
    });
    onAfterThemeChange?.();
  };
  const canUseViewTransition = Boolean(document_.startViewTransition) && !prefersReducedMotion;
  if (canUseViewTransition) {
    let xPercent = 0.5;
    let yPercent = 0.5;
    const currentWindow = resolveWindow();
    if (context?.pointerClientX !== void 0 && context?.pointerClientY !== void 0 && currentWindow) {
      xPercent = clamp01(context.pointerClientX / currentWindow.innerWidth);
      yPercent = clamp01(context.pointerClientY / currentWindow.innerHeight);
    } else if (context?.element) {
      const rect = context.element.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0 && currentWindow) {
        xPercent = clamp01((rect.left + rect.width / 2) / currentWindow.innerWidth);
        yPercent = clamp01((rect.top + rect.height / 2) / currentWindow.innerHeight);
      }
    }
    root.style.setProperty("--theme-switch-x", `${xPercent * 100}%`);
    root.style.setProperty("--theme-switch-y", `${yPercent * 100}%`);
    root.classList.add("theme-transition");
    try {
      const transition = document_.startViewTransition?.(() => {
        applyTheme2();
      });
      if (transition?.finished === void 0) {
        cleanupThemeTransition(root);
      } else {
        const handleTransitionFinish = async () => {
          try {
            await transition.finished;
          } catch {
          } finally {
            cleanupThemeTransition(root);
          }
        };
        void handleTransitionFinish();
      }
    } catch {
      cleanupThemeTransition(root);
      applyTheme2();
    }
    return;
  }
  applyTheme2();
  cleanupThemeTransition(root);
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const DropdownMenu = Root2$1;
const DropdownMenuTrigger = Trigger;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[180px] rounded-xl border border-[color:var(--line)] bg-[color:var(--surface)] p-2 text-[color:var(--ink)] shadow-[var(--shadow)]",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "flex cursor-pointer select-none items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-[color:var(--ink)] outline-none transition-colors focus:bg-[color:rgba(255,107,74,0.12)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("my-1 h-px bg-[color:var(--line)]", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
const ToggleGroup = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Root2,
  {
    ref,
    className: cn(
      "inline-flex items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] p-1",
      className
    ),
    ...props
  }
));
ToggleGroup.displayName = Root2.displayName;
const ToggleGroupItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2$1,
  {
    ref,
    className: cn(
      "inline-flex h-9 w-9 items-center justify-center rounded-full text-[color:var(--ink-soft)] transition-colors hover:text-[color:var(--ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:rgba(255,107,74,0.4)] data-[state=on]:bg-[color:var(--accent)] data-[state=on]:text-white",
      className
    ),
    ...props
  }
));
ToggleGroupItem.displayName = Item2$1.displayName;
function Header() {
  const { isAuthenticated, isLoading, me } = useAuthStatus();
  const { signIn, signOut } = useAuthActions();
  const { mode, setMode } = useThemeMode();
  const toggleRef = reactExports.useRef(null);
  const siteMode = getSiteMode();
  const siteName = reactExports.useMemo(() => getSiteName(siteMode), [siteMode]);
  const isSoulMode = siteMode === "souls";
  const clawHubUrl = getClawHubSiteUrl();
  const avatar = me?.image ?? (me?.email ? gravatarUrl(me.email) : void 0);
  const handle = me?.handle ?? me?.displayName ?? "user";
  const initial = (me?.displayName ?? me?.name ?? handle).charAt(0).toUpperCase();
  const isStaff = isModerator(me);
  const setTheme = (next2) => {
    startThemeTransition({
      nextTheme: next2,
      currentTheme: mode,
      setTheme: (value2) => {
        const nextMode = value2;
        applyTheme(nextMode);
        setMode(nextMode);
      },
      context: { element: toggleRef.current }
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "navbar", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "navbar-inner", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/",
        search: { q: void 0, highlighted: void 0, search: void 0 },
        className: "brand",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-mark", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/clawd-logo.png", alt: "", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "brand-name", children: siteName })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "nav-links", children: [
      isSoulMode ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: clawHubUrl, children: "ClawHub" }) : null,
      isSoulMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/souls",
          search: {
            q: void 0,
            sort: void 0,
            dir: void 0,
            view: void 0,
            focus: void 0
          },
          children: "Souls"
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/skills",
          search: {
            q: void 0,
            sort: void 0,
            dir: void 0,
            highlighted: void 0,
            view: void 0,
            focus: void 0
          },
          children: "Skills"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", search: { updateSlug: void 0 }, children: "Upload" }),
      isSoulMode ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/import", children: "Import" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: isSoulMode ? "/souls" : "/skills",
          search: isSoulMode ? {
            q: void 0,
            sort: void 0,
            dir: void 0,
            view: void 0,
            focus: "search"
          } : {
            q: void 0,
            sort: void 0,
            dir: void 0,
            highlighted: void 0,
            view: void 0,
            focus: "search"
          },
          children: "Search"
        }
      ),
      me ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/stars", children: "Stars" }) : null,
      isStaff ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/management", search: { skill: void 0 }, children: "Management" }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "nav-actions", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "nav-mobile", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "nav-mobile-trigger", type: "button", "aria-label": "Open menu", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4", "aria-hidden": "true" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
          isSoulMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: clawHubUrl, children: "ClawHub" }) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: isSoulMode ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/souls",
              search: {
                q: void 0,
                sort: void 0,
                dir: void 0,
                view: void 0,
                focus: void 0
              },
              children: "Souls"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/skills",
              search: {
                q: void 0,
                sort: void 0,
                dir: void 0,
                highlighted: void 0,
                view: void 0,
                focus: void 0
              },
              children: "Skills"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", search: { updateSlug: void 0 }, children: "Upload" }) }),
          isSoulMode ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/import", children: "Import" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: isSoulMode ? "/souls" : "/skills",
              search: isSoulMode ? {
                q: void 0,
                sort: void 0,
                dir: void 0,
                view: void 0,
                focus: "search"
              } : {
                q: void 0,
                sort: void 0,
                dir: void 0,
                highlighted: void 0,
                view: void 0,
                focus: "search"
              },
              children: "Search"
            }
          ) }),
          me ? /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/stars", children: "Stars" }) }) : null,
          isStaff ? /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/management", search: { skill: void 0 }, children: "Management" }) }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => setTheme("system"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "h-4 w-4", "aria-hidden": "true" }),
            "System"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => setTheme("light"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4", "aria-hidden": "true" }),
            "Light"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuItem, { onClick: () => setTheme("dark"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4", "aria-hidden": "true" }),
            "Dark"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "theme-toggle", ref: toggleRef, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        ToggleGroup,
        {
          type: "single",
          value: mode,
          onValueChange: (value2) => {
            if (!value2) return;
            setTheme(value2);
          },
          "aria-label": "Theme mode",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroupItem, { value: "system", "aria-label": "System theme", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Monitor, { className: "h-4 w-4", "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "System" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroupItem, { value: "light", "aria-label": "Light theme", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4", "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Light" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(ToggleGroupItem, { value: "dark", "aria-label": "Dark theme", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4", "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Dark" })
            ] })
          ]
        }
      ) }),
      isAuthenticated && me ? /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "user-trigger", type: "button", children: [
          avatar ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avatar, alt: me.displayName ?? me.name ?? "User avatar" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "user-menu-fallback", children: initial }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mono", children: [
            "@",
            handle
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "user-menu-chevron", children: "▾" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuContent, { align: "end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", children: "Dashboard" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/settings", children: "Settings" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { onClick: () => void signOut(), children: "Sign out" })
        ] })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: "btn btn-primary",
          type: "button",
          disabled: isLoading,
          onClick: () => void signIn("github"),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sign-in-label", children: "Sign in" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sign-in-provider", children: "with GitHub" })
          ]
        }
      )
    ] })
  ] }) });
}
const appCss = "/assets/styles-DtRaT0BV.css";
const Route$e = createRootRoute({
  head: () => {
    const mode = getSiteMode();
    const siteName = getSiteName(mode);
    const siteDescription = getSiteDescription(mode);
    const siteUrl = getSiteUrlForMode(mode);
    const ogImage = `${siteUrl}/og.png`;
    return {
      meta: [
        {
          charSet: "utf-8"
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          title: siteName
        },
        {
          name: "description",
          content: siteDescription
        },
        {
          property: "og:site_name",
          content: siteName
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:title",
          content: siteName
        },
        {
          property: "og:description",
          content: siteDescription
        },
        {
          property: "og:image",
          content: ogImage
        },
        {
          property: "og:image:width",
          content: "1200"
        },
        {
          property: "og:image:height",
          content: "630"
        },
        {
          property: "og:image:alt",
          content: `${siteName} — ${siteDescription}`
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        },
        {
          name: "twitter:title",
          content: siteName
        },
        {
          name: "twitter:description",
          content: siteDescription
        },
        {
          name: "twitter:image",
          content: ogImage
        },
        {
          name: "twitter:image:alt",
          content: `${siteName} — ${siteDescription}`
        }
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss
        }
      ]
    };
  },
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClientOnly, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AppProviders, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-shell", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
          children,
          /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Analytics, {}),
        null
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
const liftArray = (data) => Array.isArray(data) ? data : [data];
const spliterate = (arr2, predicate) => {
  const result = [[], []];
  for (const item of arr2) {
    if (predicate(item))
      result[0].push(item);
    else
      result[1].push(item);
  }
  return result;
};
const ReadonlyArray = Array;
const includes = (array, element) => array.includes(element);
const range = (length, offset = 0) => [...new Array(length)].map((_, i) => i + offset);
const append = (to, value2, opts) => {
  if (to === void 0) {
    return value2 === void 0 ? [] : Array.isArray(value2) ? value2 : [value2];
  }
  {
    if (Array.isArray(value2))
      to.push(...value2);
    else
      to.push(value2);
  }
  return to;
};
const conflatenate = (to, elementOrList) => {
  if (elementOrList === void 0 || elementOrList === null)
    return to ?? [];
  if (to === void 0 || to === null)
    return liftArray(elementOrList);
  return to.concat(elementOrList);
};
const conflatenateAll = (...elementsOrLists) => elementsOrLists.reduce(conflatenate, []);
const appendUnique = (to, value2, opts) => {
  if (to === void 0)
    return Array.isArray(value2) ? value2 : [value2];
  const isEqual = opts?.isEqual ?? ((l, r) => l === r);
  for (const v of liftArray(value2))
    if (!to.some((existing) => isEqual(existing, v)))
      to.push(v);
  return to;
};
const groupBy = (array, discriminant) => array.reduce((result, item) => {
  const key = item[discriminant];
  result[key] = append(result[key], item);
  return result;
}, {});
const arrayEquals = (l, r, opts) => l.length === r.length && l.every(opts?.isEqual ? (lItem, i) => opts.isEqual(lItem, r[i]) : (lItem, i) => lItem === r[i]);
const hasDomain = (data, kind) => domainOf(data) === kind;
const domainOf = (data) => {
  const builtinType = typeof data;
  return builtinType === "object" ? data === null ? "null" : "object" : builtinType === "function" ? "object" : builtinType;
};
const domainDescriptions = {
  boolean: "boolean",
  null: "null",
  undefined: "undefined",
  bigint: "a bigint",
  number: "a number",
  object: "an object",
  string: "a string",
  symbol: "a symbol"
};
const jsTypeOfDescriptions = {
  ...domainDescriptions,
  function: "a function"
};
class InternalArktypeError extends Error {
}
const throwInternalError = (message) => throwError(message, InternalArktypeError);
const throwError = (message, ctor = Error) => {
  throw new ctor(message);
};
class ParseError extends Error {
  name = "ParseError";
}
const throwParseError = (message) => throwError(message, ParseError);
const noSuggest = (s) => ` ${s}`;
const ZeroWidthSpace = "​";
const flatMorph = (o, flatMapEntry) => {
  const result = {};
  const inputIsArray = Array.isArray(o);
  let outputShouldBeArray = false;
  for (const [i, entry] of Object.entries(o).entries()) {
    const mapped = inputIsArray ? flatMapEntry(i, entry[1]) : flatMapEntry(...entry, i);
    outputShouldBeArray ||= typeof mapped[0] === "number";
    const flattenedEntries = Array.isArray(mapped[0]) || mapped.length === 0 ? (
      // if we have an empty array (for filtering) or an array with
      // another array as its first element, treat it as a list
      mapped
    ) : [mapped];
    for (const [k, v] of flattenedEntries) {
      if (typeof k === "object")
        result[k.group] = append(result[k.group], v);
      else
        result[k] = v;
    }
  }
  return outputShouldBeArray ? Object.values(result) : result;
};
const entriesOf = Object.entries;
const isKeyOf = (k, o) => k in o;
const hasKey = (o, k) => k in o;
class DynamicBase {
  constructor(properties) {
    Object.assign(this, properties);
  }
}
const NoopBase = class {
};
class CastableBase extends NoopBase {
}
const splitByKeys = (o, leftKeys) => {
  const l = {};
  const r = {};
  let k;
  for (k in o) {
    if (k in leftKeys)
      l[k] = o[k];
    else
      r[k] = o[k];
  }
  return [l, r];
};
const omit = (o, keys) => splitByKeys(o, keys)[1];
const isEmptyObject = (o) => Object.keys(o).length === 0;
const stringAndSymbolicEntriesOf = (o) => [
  ...Object.entries(o),
  ...Object.getOwnPropertySymbols(o).map((k) => [k, o[k]])
];
const defineProperties = (base, merged) => (
  // declared like this to avoid https://github.com/microsoft/TypeScript/issues/55049
  Object.defineProperties(base, Object.getOwnPropertyDescriptors(merged))
);
const withAlphabetizedKeys = (o) => {
  const keys = Object.keys(o).sort();
  const result = {};
  for (let i = 0; i < keys.length; i++)
    result[keys[i]] = o[keys[i]];
  return result;
};
const unset = noSuggest(`unset${ZeroWidthSpace}`);
const enumValues = (tsEnum) => Object.values(tsEnum).filter((v) => {
  if (typeof v === "number")
    return true;
  return typeof tsEnum[v] !== "number";
});
const ecmascriptConstructors = {
  Array,
  Boolean,
  Date,
  Error,
  Function,
  Map,
  Number,
  Promise,
  RegExp,
  Set,
  String,
  WeakMap,
  WeakSet
};
const FileConstructor = globalThis.File ?? Blob;
const platformConstructors = {
  ArrayBuffer,
  Blob,
  File: FileConstructor,
  FormData,
  Headers,
  Request,
  Response,
  URL
};
const typedArrayConstructors = {
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  BigInt64Array,
  BigUint64Array
};
const builtinConstructors = {
  ...ecmascriptConstructors,
  ...platformConstructors,
  ...typedArrayConstructors,
  String,
  Number,
  Boolean
};
const objectKindOf = (data) => {
  let prototype = Object.getPrototypeOf(data);
  while (prototype?.constructor && (!isKeyOf(prototype.constructor.name, builtinConstructors) || !(data instanceof builtinConstructors[prototype.constructor.name])))
    prototype = Object.getPrototypeOf(prototype);
  const name = prototype?.constructor?.name;
  if (name === void 0 || name === "Object")
    return void 0;
  return name;
};
const objectKindOrDomainOf = (data) => typeof data === "object" && data !== null ? objectKindOf(data) ?? "object" : domainOf(data);
const isArray = Array.isArray;
const ecmascriptDescriptions = {
  Array: "an array",
  Function: "a function",
  Date: "a Date",
  RegExp: "a RegExp",
  Error: "an Error",
  Map: "a Map",
  Set: "a Set",
  String: "a String object",
  Number: "a Number object",
  Boolean: "a Boolean object",
  Promise: "a Promise",
  WeakMap: "a WeakMap",
  WeakSet: "a WeakSet"
};
const platformDescriptions = {
  ArrayBuffer: "an ArrayBuffer instance",
  Blob: "a Blob instance",
  File: "a File instance",
  FormData: "a FormData instance",
  Headers: "a Headers instance",
  Request: "a Request instance",
  Response: "a Response instance",
  URL: "a URL instance"
};
const typedArrayDescriptions = {
  Int8Array: "an Int8Array",
  Uint8Array: "a Uint8Array",
  Uint8ClampedArray: "a Uint8ClampedArray",
  Int16Array: "an Int16Array",
  Uint16Array: "a Uint16Array",
  Int32Array: "an Int32Array",
  Uint32Array: "a Uint32Array",
  Float32Array: "a Float32Array",
  Float64Array: "a Float64Array",
  BigInt64Array: "a BigInt64Array",
  BigUint64Array: "a BigUint64Array"
};
const objectKindDescriptions = {
  ...ecmascriptDescriptions,
  ...platformDescriptions,
  ...typedArrayDescriptions
};
const getBuiltinNameOfConstructor = (ctor) => {
  const constructorName = Object(ctor).name ?? null;
  return constructorName && isKeyOf(constructorName, builtinConstructors) && builtinConstructors[constructorName] === ctor ? constructorName : null;
};
const constructorExtends = (ctor, base) => {
  let current = ctor.prototype;
  while (current !== null) {
    if (current === base.prototype)
      return true;
    current = Object.getPrototypeOf(current);
  }
  return false;
};
const deepClone = (input) => _clone(input, /* @__PURE__ */ new Map());
const _clone = (input, seen) => {
  if (typeof input !== "object" || input === null)
    return input;
  if (seen?.has(input))
    return seen.get(input);
  const builtinConstructorName = getBuiltinNameOfConstructor(input.constructor);
  if (builtinConstructorName === "Date")
    return new Date(input.getTime());
  if (builtinConstructorName && builtinConstructorName !== "Array")
    return input;
  const cloned = Array.isArray(input) ? input.slice() : Object.create(Object.getPrototypeOf(input));
  const propertyDescriptors = Object.getOwnPropertyDescriptors(input);
  if (seen) {
    seen.set(input, cloned);
    for (const k in propertyDescriptors) {
      const desc = propertyDescriptors[k];
      if ("get" in desc || "set" in desc)
        continue;
      desc.value = _clone(desc.value, seen);
    }
  }
  Object.defineProperties(cloned, propertyDescriptors);
  return cloned;
};
const cached = (thunk) => {
  let result = unset;
  return () => result === unset ? result = thunk() : result;
};
const isThunk = (value2) => typeof value2 === "function" && value2.length === 0;
const DynamicFunction = class extends Function {
  constructor(...args) {
    const params = args.slice(0, -1);
    const body = args[args.length - 1];
    try {
      super(...params, body);
    } catch (e) {
      return throwInternalError(`Encountered an unexpected error while compiling your definition:
                Message: ${e} 
                Source: (${args.slice(0, -1)}) => {
                    ${args[args.length - 1]}
                }`);
    }
  }
};
class Callable {
  constructor(fn, ...[opts]) {
    return Object.assign(Object.setPrototypeOf(fn.bind(opts?.bind ?? this), this.constructor.prototype), opts?.attach);
  }
}
const envHasCsp = cached(() => {
  try {
    return new Function("return false")();
  } catch {
    return true;
  }
});
class Hkt {
  constructor() {
  }
}
const fileName = () => {
  try {
    const error = new Error();
    const stackLine = error.stack?.split("\n")[2]?.trim() || "";
    const filePath = stackLine.match(/\(?(.+?)(?::\d+:\d+)?\)?$/)?.[1] || "unknown";
    return filePath.replace(/^file:\/\//, "");
  } catch {
    return "unknown";
  }
};
const env = globalThis.process?.env ?? {};
const isomorphic = {
  fileName,
  env
};
const capitalize$1 = (s) => s[0].toUpperCase() + s.slice(1);
const uncapitalize = (s) => s[0].toLowerCase() + s.slice(1);
const anchoredRegex = (regex2) => new RegExp(anchoredSource(regex2), typeof regex2 === "string" ? "" : regex2.flags);
const anchoredSource = (regex2) => {
  const source = typeof regex2 === "string" ? regex2 : regex2.source;
  return `^(?:${source})$`;
};
const RegexPatterns = {
  negativeLookahead: (pattern) => `(?!${pattern})`,
  nonCapturingGroup: (pattern) => `(?:${pattern})`
};
const Backslash = "\\";
const whitespaceChars = {
  " ": 1,
  "\n": 1,
  "	": 1
};
const anchoredNegativeZeroPattern = /^-0\.?0*$/.source;
const positiveIntegerPattern = /[1-9]\d*/.source;
const looseDecimalPattern = /\.\d+/.source;
const strictDecimalPattern = /\.\d*[1-9]/.source;
const createNumberMatcher = (opts) => anchoredRegex(RegexPatterns.negativeLookahead(anchoredNegativeZeroPattern) + RegexPatterns.nonCapturingGroup("-?" + RegexPatterns.nonCapturingGroup(RegexPatterns.nonCapturingGroup("0|" + positiveIntegerPattern) + RegexPatterns.nonCapturingGroup(opts.decimalPattern) + "?") + (opts.allowDecimalOnly ? "|" + opts.decimalPattern : "") + "?"));
const wellFormedNumberMatcher = createNumberMatcher({
  decimalPattern: strictDecimalPattern,
  allowDecimalOnly: false
});
const isWellFormedNumber = wellFormedNumberMatcher.test.bind(wellFormedNumberMatcher);
const numericStringMatcher = createNumberMatcher({
  decimalPattern: looseDecimalPattern,
  allowDecimalOnly: true
});
numericStringMatcher.test.bind(numericStringMatcher);
const numberLikeMatcher = /^-?\d*\.?\d*$/;
const isNumberLike = (s) => s.length !== 0 && numberLikeMatcher.test(s);
const wellFormedIntegerMatcher = anchoredRegex(RegexPatterns.negativeLookahead("^-0$") + "-?" + RegexPatterns.nonCapturingGroup(RegexPatterns.nonCapturingGroup("0|" + positiveIntegerPattern)));
const isWellFormedInteger = wellFormedIntegerMatcher.test.bind(wellFormedIntegerMatcher);
const integerLikeMatcher = /^-?\d+$/;
const isIntegerLike = integerLikeMatcher.test.bind(integerLikeMatcher);
const numericLiteralDescriptions = {
  number: "a number",
  bigint: "a bigint",
  integer: "an integer"
};
const writeMalformedNumericLiteralMessage = (def, kind) => `'${def}' was parsed as ${numericLiteralDescriptions[kind]} but could not be narrowed to a literal value. Avoid unnecessary leading or trailing zeros and other abnormal notation`;
const isWellFormed = (def, kind) => kind === "number" ? isWellFormedNumber(def) : isWellFormedInteger(def);
const parseKind = (def, kind) => kind === "number" ? Number(def) : Number.parseInt(def);
const isKindLike = (def, kind) => kind === "number" ? isNumberLike(def) : isIntegerLike(def);
const tryParseNumber = (token, options) => parseNumeric(token, "number", options);
const tryParseWellFormedNumber = (token, options) => parseNumeric(token, "number", { ...options, strict: true });
const tryParseInteger = (token, options) => parseNumeric(token, "integer", options);
const parseNumeric = (token, kind, options) => {
  const value2 = parseKind(token, kind);
  if (!Number.isNaN(value2)) {
    if (isKindLike(token, kind)) {
      if (options?.strict) {
        return isWellFormed(token, kind) ? value2 : throwParseError(writeMalformedNumericLiteralMessage(token, kind));
      }
      return value2;
    }
  }
  return options?.errorOnFail ? throwParseError(options?.errorOnFail === true ? `Failed to parse ${numericLiteralDescriptions[kind]} from '${token}'` : options?.errorOnFail) : void 0;
};
const tryParseWellFormedBigint = (def) => {
  if (def[def.length - 1] !== "n")
    return;
  const maybeIntegerLiteral = def.slice(0, -1);
  let value2;
  try {
    value2 = BigInt(maybeIntegerLiteral);
  } catch {
    return;
  }
  if (wellFormedIntegerMatcher.test(maybeIntegerLiteral))
    return value2;
  if (integerLikeMatcher.test(maybeIntegerLiteral)) {
    return throwParseError(writeMalformedNumericLiteralMessage(def, "bigint"));
  }
};
const arkUtilVersion = "0.56.0";
const initialRegistryContents = {
  version: arkUtilVersion,
  filename: isomorphic.fileName(),
  FileConstructor
};
const registry = initialRegistryContents;
const namesByResolution = /* @__PURE__ */ new Map();
const nameCounts = /* @__PURE__ */ Object.create(null);
const register = (value2) => {
  const existingName = namesByResolution.get(value2);
  if (existingName)
    return existingName;
  let name = baseNameFor(value2);
  if (nameCounts[name])
    name = `${name}${nameCounts[name]++}`;
  else
    nameCounts[name] = 1;
  registry[name] = value2;
  namesByResolution.set(value2, name);
  return name;
};
const isDotAccessible = (keyName) => /^[$A-Z_a-z][\w$]*$/.test(keyName);
const baseNameFor = (value2) => {
  switch (typeof value2) {
    case "object": {
      if (value2 === null)
        break;
      const prefix = objectKindOf(value2) ?? "object";
      return prefix[0].toLowerCase() + prefix.slice(1);
    }
    case "function":
      return isDotAccessible(value2.name) ? value2.name : "fn";
    case "symbol":
      return value2.description && isDotAccessible(value2.description) ? value2.description : "symbol";
  }
  return throwInternalError(`Unexpected attempt to register serializable value of type ${domainOf(value2)}`);
};
const serializePrimitive = (value2) => typeof value2 === "string" ? JSON.stringify(value2) : typeof value2 === "bigint" ? `${value2}n` : `${value2}`;
const snapshot = (data, opts = {}) => _serialize(data, {
  onUndefined: `$ark.undefined`,
  onBigInt: (n) => `$ark.bigint-${n}`,
  ...opts
}, []);
const printable = (data, opts) => {
  switch (domainOf(data)) {
    case "object":
      const o = data;
      const ctorName = o.constructor?.name ?? "Object";
      return ctorName === "Object" || ctorName === "Array" ? opts?.quoteKeys === false ? stringifyUnquoted(o, opts?.indent ?? 0, "") : JSON.stringify(_serialize(o, printableOpts, []), null, opts?.indent) : stringifyUnquoted(o, opts?.indent ?? 0, "");
    case "symbol":
      return printableOpts.onSymbol(data);
    default:
      return serializePrimitive(data);
  }
};
const stringifyUnquoted = (value2, indent2, currentIndent) => {
  if (typeof value2 === "function")
    return printableOpts.onFunction(value2);
  if (typeof value2 !== "object" || value2 === null)
    return serializePrimitive(value2);
  const nextIndent = currentIndent + " ".repeat(indent2);
  if (Array.isArray(value2)) {
    if (value2.length === 0)
      return "[]";
    const items = value2.map((item) => stringifyUnquoted(item, indent2, nextIndent)).join(",\n" + nextIndent);
    return indent2 ? `[
${nextIndent}${items}
${currentIndent}]` : `[${items}]`;
  }
  const ctorName = value2.constructor?.name ?? "Object";
  if (ctorName === "Object") {
    const keyValues = stringAndSymbolicEntriesOf(value2).map(([key, val]) => {
      const stringifiedKey = typeof key === "symbol" ? printableOpts.onSymbol(key) : isDotAccessible(key) ? key : JSON.stringify(key);
      const stringifiedValue = stringifyUnquoted(val, indent2, nextIndent);
      return `${nextIndent}${stringifiedKey}: ${stringifiedValue}`;
    });
    if (keyValues.length === 0)
      return "{}";
    return indent2 ? `{
${keyValues.join(",\n")}
${currentIndent}}` : `{${keyValues.join(", ")}}`;
  }
  if (value2 instanceof Date)
    return describeCollapsibleDate(value2);
  if ("expression" in value2 && typeof value2.expression === "string")
    return value2.expression;
  return ctorName;
};
const printableOpts = {
  onCycle: () => "(cycle)",
  onSymbol: (v) => `Symbol(${register(v)})`,
  onFunction: (v) => `Function(${register(v)})`
};
const _serialize = (data, opts, seen) => {
  switch (domainOf(data)) {
    case "object": {
      const o = data;
      if ("toJSON" in o && typeof o.toJSON === "function")
        return o.toJSON();
      if (typeof o === "function")
        return printableOpts.onFunction(o);
      if (seen.includes(o))
        return "(cycle)";
      const nextSeen = [...seen, o];
      if (Array.isArray(o))
        return o.map((item) => _serialize(item, opts, nextSeen));
      if (o instanceof Date)
        return o.toDateString();
      const result = {};
      for (const k in o)
        result[k] = _serialize(o[k], opts, nextSeen);
      for (const s of Object.getOwnPropertySymbols(o)) {
        result[opts.onSymbol?.(s) ?? s.toString()] = _serialize(o[s], opts, nextSeen);
      }
      return result;
    }
    case "symbol":
      return printableOpts.onSymbol(data);
    case "bigint":
      return opts.onBigInt?.(data) ?? `${data}n`;
    case "undefined":
      return opts.onUndefined ?? "undefined";
    case "string":
      return data.replace(/\\/g, "\\\\");
    default:
      return data;
  }
};
const describeCollapsibleDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  if (month === 0 && dayOfMonth === 1 && hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0)
    return `${year}`;
  const datePortion = `${months[month]} ${dayOfMonth}, ${year}`;
  if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 0)
    return datePortion;
  let timePortion = date.toLocaleTimeString();
  const suffix2 = timePortion.endsWith(" AM") || timePortion.endsWith(" PM") ? timePortion.slice(-3) : "";
  if (suffix2)
    timePortion = timePortion.slice(0, -suffix2.length);
  if (milliseconds)
    timePortion += `.${pad(milliseconds, 3)}`;
  else if (timeWithUnnecessarySeconds.test(timePortion))
    timePortion = timePortion.slice(0, -3);
  return `${timePortion + suffix2}, ${datePortion}`;
};
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const timeWithUnnecessarySeconds = /:\d\d:00$/;
const pad = (value2, length) => String(value2).padStart(length, "0");
const appendStringifiedKey = (path, prop, ...[opts]) => {
  const stringifySymbol = opts?.stringifySymbol ?? printable;
  let propAccessChain = path;
  switch (typeof prop) {
    case "string":
      propAccessChain = isDotAccessible(prop) ? path === "" ? prop : `${path}.${prop}` : `${path}[${JSON.stringify(prop)}]`;
      break;
    case "number":
      propAccessChain = `${path}[${prop}]`;
      break;
    case "symbol":
      propAccessChain = `${path}[${stringifySymbol(prop)}]`;
      break;
    default:
      if (opts?.stringifyNonKey)
        propAccessChain = `${path}[${opts.stringifyNonKey(prop)}]`;
      else {
        throwParseError(`${printable(prop)} must be a PropertyKey or stringifyNonKey must be passed to options`);
      }
  }
  return propAccessChain;
};
const stringifyPath = (path, ...opts) => path.reduce((s, k) => appendStringifiedKey(s, k, ...opts), "");
class ReadonlyPath extends ReadonlyArray {
  // alternate strategy for caching since the base object is frozen
  cache = {};
  constructor(...items) {
    super();
    this.push(...items);
  }
  toJSON() {
    if (this.cache.json)
      return this.cache.json;
    this.cache.json = [];
    for (let i = 0; i < this.length; i++) {
      this.cache.json.push(typeof this[i] === "symbol" ? printable(this[i]) : this[i]);
    }
    return this.cache.json;
  }
  stringify() {
    if (this.cache.stringify)
      return this.cache.stringify;
    return this.cache.stringify = stringifyPath(this);
  }
  stringifyAncestors() {
    if (this.cache.stringifyAncestors)
      return this.cache.stringifyAncestors;
    let propString = "";
    const result = [propString];
    for (const path of this) {
      propString = appendStringifiedKey(propString, path);
      result.push(propString);
    }
    return this.cache.stringifyAncestors = result;
  }
}
class Scanner {
  chars;
  i;
  def;
  constructor(def) {
    this.def = def;
    this.chars = [...def];
    this.i = 0;
  }
  /** Get lookahead and advance scanner by one */
  shift() {
    return this.chars[this.i++] ?? "";
  }
  get lookahead() {
    return this.chars[this.i] ?? "";
  }
  get nextLookahead() {
    return this.chars[this.i + 1] ?? "";
  }
  get length() {
    return this.chars.length;
  }
  shiftUntil(condition) {
    let shifted = "";
    while (this.lookahead) {
      if (condition(this, shifted))
        break;
      else
        shifted += this.shift();
    }
    return shifted;
  }
  shiftUntilEscapable(condition) {
    let shifted = "";
    while (this.lookahead) {
      if (this.lookahead === Backslash) {
        this.shift();
        if (condition(this, shifted))
          shifted += this.shift();
        else if (this.lookahead === Backslash)
          shifted += this.shift();
        else
          shifted += `${Backslash}${this.shift()}`;
      } else if (condition(this, shifted))
        break;
      else
        shifted += this.shift();
    }
    return shifted;
  }
  shiftUntilLookahead(charOrSet) {
    return typeof charOrSet === "string" ? this.shiftUntil((s) => s.lookahead === charOrSet) : this.shiftUntil((s) => s.lookahead in charOrSet);
  }
  shiftUntilNonWhitespace() {
    return this.shiftUntil(() => !(this.lookahead in whitespaceChars));
  }
  jumpToIndex(i) {
    this.i = i < 0 ? this.length + i : i;
  }
  jumpForward(count) {
    this.i += count;
  }
  get location() {
    return this.i;
  }
  get unscanned() {
    return this.chars.slice(this.i, this.length).join("");
  }
  get scanned() {
    return this.chars.slice(0, this.i).join("");
  }
  sliceChars(start, end) {
    return this.chars.slice(start, end).join("");
  }
  lookaheadIs(char) {
    return this.lookahead === char;
  }
  lookaheadIsIn(tokens) {
    return this.lookahead in tokens;
  }
}
const writeUnmatchedGroupCloseMessage = (char, unscanned) => `Unmatched ${char}${unscanned === "" ? "" : ` before ${unscanned}`}`;
const writeUnclosedGroupMessage = (missingChar) => `Missing ${missingChar}`;
let _registryName = "$ark";
let suffix = 2;
while (_registryName in globalThis)
  _registryName = `$ark${suffix++}`;
const registryName = _registryName;
globalThis[registryName] = registry;
const $ark = registry;
const reference = (name) => `${registryName}.${name}`;
const registeredReference = (value2) => reference(register(value2));
class CompiledFunction extends CastableBase {
  argNames;
  body = "";
  constructor(...args) {
    super();
    this.argNames = args;
    for (const arg of args) {
      if (arg in this) {
        throw new Error(`Arg name '${arg}' would overwrite an existing property on FunctionBody`);
      }
      this[arg] = arg;
    }
  }
  indentation = 0;
  indent() {
    this.indentation += 4;
    return this;
  }
  dedent() {
    this.indentation -= 4;
    return this;
  }
  prop(key, optional = false) {
    return compileLiteralPropAccess(key, optional);
  }
  index(key, optional = false) {
    return indexPropAccess(`${key}`, optional);
  }
  line(statement) {
    this.body += `${" ".repeat(this.indentation)}${statement}
`;
    return this;
  }
  const(identifier, expression) {
    this.line(`const ${identifier} = ${expression}`);
    return this;
  }
  let(identifier, expression) {
    return this.line(`let ${identifier} = ${expression}`);
  }
  set(identifier, expression) {
    return this.line(`${identifier} = ${expression}`);
  }
  if(condition, then) {
    return this.block(`if (${condition})`, then);
  }
  elseIf(condition, then) {
    return this.block(`else if (${condition})`, then);
  }
  else(then) {
    return this.block("else", then);
  }
  /** Current index is "i" */
  for(until, body, initialValue = 0) {
    return this.block(`for (let i = ${initialValue}; ${until}; i++)`, body);
  }
  /** Current key is "k" */
  forIn(object2, body) {
    return this.block(`for (const k in ${object2})`, body);
  }
  block(prefix, contents, suffix2 = "") {
    this.line(`${prefix} {`);
    this.indent();
    contents(this);
    this.dedent();
    return this.line(`}${suffix2}`);
  }
  return(expression = "") {
    return this.line(`return ${expression}`);
  }
  write(name = "anonymous", indent2 = 0) {
    return `${name}(${this.argNames.join(", ")}) { ${indent2 ? this.body.split("\n").map((l) => " ".repeat(indent2) + `${l}`).join("\n") : this.body} }`;
  }
  compile() {
    return new DynamicFunction(...this.argNames, this.body);
  }
}
const compileSerializedValue = (value2) => hasDomain(value2, "object") || typeof value2 === "symbol" ? registeredReference(value2) : serializePrimitive(value2);
const compileLiteralPropAccess = (key, optional = false) => {
  if (typeof key === "string" && isDotAccessible(key))
    return `${optional ? "?" : ""}.${key}`;
  return indexPropAccess(serializeLiteralKey(key), optional);
};
const serializeLiteralKey = (key) => typeof key === "symbol" ? registeredReference(key) : JSON.stringify(key);
const indexPropAccess = (key, optional = false) => `${optional ? "?." : ""}[${key}]`;
class NodeCompiler extends CompiledFunction {
  traversalKind;
  optimistic;
  constructor(ctx) {
    super("data", "ctx");
    this.traversalKind = ctx.kind;
    this.optimistic = ctx.optimistic === true;
  }
  invoke(node2, opts) {
    const arg = opts?.arg ?? this.data;
    const requiresContext = typeof node2 === "string" ? true : this.requiresContextFor(node2);
    const id = typeof node2 === "string" ? node2 : node2.id;
    if (requiresContext)
      return `${this.referenceToId(id, opts)}(${arg}, ${this.ctx})`;
    return `${this.referenceToId(id, opts)}(${arg})`;
  }
  referenceToId(id, opts) {
    const invokedKind = opts?.kind ?? this.traversalKind;
    const base = `this.${id}${invokedKind}`;
    return opts?.bind ? `${base}.bind(${opts?.bind})` : base;
  }
  requiresContextFor(node2) {
    return this.traversalKind === "Apply" || node2.allowsRequiresContext;
  }
  initializeErrorCount() {
    return this.const("errorCount", "ctx.currentErrorCount");
  }
  returnIfFail() {
    return this.if("ctx.currentErrorCount > errorCount", () => this.return());
  }
  returnIfFailFast() {
    return this.if("ctx.failFast && ctx.currentErrorCount > errorCount", () => this.return());
  }
  traverseKey(keyExpression, accessExpression, node2) {
    const requiresContext = this.requiresContextFor(node2);
    if (requiresContext)
      this.line(`${this.ctx}.path.push(${keyExpression})`);
    this.check(node2, {
      arg: accessExpression
    });
    if (requiresContext)
      this.line(`${this.ctx}.path.pop()`);
    return this;
  }
  check(node2, opts) {
    return this.traversalKind === "Allows" ? this.if(`!${this.invoke(node2, opts)}`, () => this.return(false)) : this.line(this.invoke(node2, opts));
  }
}
const makeRootAndArrayPropertiesMutable = (o) => (
  // this cast should not be required, but it seems TS is referencing
  // the wrong parameters here?
  flatMorph(o, (k, v) => [k, isArray(v) ? [...v] : v])
);
const arkKind = noSuggest("arkKind");
const hasArkKind = (value2, kind) => value2?.[arkKind] === kind;
const isNode = (value2) => hasArkKind(value2, "root") || hasArkKind(value2, "constraint");
const basisKinds = ["unit", "proto", "domain"];
const structuralKinds = [
  "required",
  "optional",
  "index",
  "sequence"
];
const prestructuralKinds = [
  "pattern",
  "divisor",
  "exactLength",
  "max",
  "min",
  "maxLength",
  "minLength",
  "before",
  "after"
];
const refinementKinds = [
  ...prestructuralKinds,
  "structure",
  "predicate"
];
const constraintKinds = [...refinementKinds, ...structuralKinds];
const rootKinds = [
  "alias",
  "union",
  "morph",
  "unit",
  "intersection",
  "proto",
  "domain"
];
const nodeKinds = [...rootKinds, ...constraintKinds];
const constraintKeys = flatMorph(constraintKinds, (i, kind) => [kind, 1]);
const structureKeys = flatMorph([...structuralKinds, "undeclared"], (i, k) => [k, 1]);
const precedenceByKind = flatMorph(nodeKinds, (i, kind) => [kind, i]);
const isNodeKind = (value2) => typeof value2 === "string" && value2 in precedenceByKind;
const precedenceOfKind = (kind) => precedenceByKind[kind];
const schemaKindsRightOf = (kind) => rootKinds.slice(precedenceOfKind(kind) + 1);
[
  ...schemaKindsRightOf("union"),
  "alias"
];
[
  ...schemaKindsRightOf("morph"),
  "alias"
];
const defaultValueSerializer = (v) => {
  if (typeof v === "string" || typeof v === "boolean" || v === null)
    return v;
  if (typeof v === "number") {
    if (Number.isNaN(v))
      return "NaN";
    if (v === Number.POSITIVE_INFINITY)
      return "Infinity";
    if (v === Number.NEGATIVE_INFINITY)
      return "-Infinity";
    return v;
  }
  return compileSerializedValue(v);
};
const compileObjectLiteral = (ctx) => {
  let result = "{ ";
  for (const [k, v] of Object.entries(ctx))
    result += `${k}: ${compileSerializedValue(v)}, `;
  return result + " }";
};
const implementNode = (_) => {
  const implementation2 = _;
  if (implementation2.hasAssociatedError) {
    implementation2.defaults.expected ??= (ctx) => "description" in ctx ? ctx.description : implementation2.defaults.description(ctx);
    implementation2.defaults.actual ??= (data) => printable(data);
    implementation2.defaults.problem ??= (ctx) => `must be ${ctx.expected}${ctx.actual ? ` (was ${ctx.actual})` : ""}`;
    implementation2.defaults.message ??= (ctx) => {
      if (ctx.path.length === 0)
        return ctx.problem;
      const problemWithLocation = `${ctx.propString} ${ctx.problem}`;
      if (problemWithLocation[0] === "[") {
        return `value at ${problemWithLocation}`;
      }
      return problemWithLocation;
    };
  }
  return implementation2;
};
class ToJsonSchemaError extends Error {
  name = "ToJsonSchemaError";
  code;
  context;
  constructor(code2, context) {
    super(printable(context, { quoteKeys: false, indent: 4 }));
    this.code = code2;
    this.context = context;
  }
  hasCode(code2) {
    return this.code === code2;
  }
}
const defaultConfig = {
  target: "draft-2020-12",
  dialect: "https://json-schema.org/draft/2020-12/schema",
  useRefs: false,
  fallback: {
    arrayObject: (ctx) => ToJsonSchema.throw("arrayObject", ctx),
    arrayPostfix: (ctx) => ToJsonSchema.throw("arrayPostfix", ctx),
    defaultValue: (ctx) => ToJsonSchema.throw("defaultValue", ctx),
    domain: (ctx) => ToJsonSchema.throw("domain", ctx),
    morph: (ctx) => ToJsonSchema.throw("morph", ctx),
    patternIntersection: (ctx) => ToJsonSchema.throw("patternIntersection", ctx),
    predicate: (ctx) => ToJsonSchema.throw("predicate", ctx),
    proto: (ctx) => ToJsonSchema.throw("proto", ctx),
    symbolKey: (ctx) => ToJsonSchema.throw("symbolKey", ctx),
    unit: (ctx) => ToJsonSchema.throw("unit", ctx),
    date: (ctx) => ToJsonSchema.throw("date", ctx)
  }
};
const ToJsonSchema = {
  Error: ToJsonSchemaError,
  throw: (...args) => {
    throw new ToJsonSchema.Error(...args);
  },
  throwInternalOperandError: (kind, schema) => throwInternalError(`Unexpected JSON Schema input for ${kind}: ${printable(schema)}`),
  defaultConfig
};
$ark.config ??= {};
const mergeConfigs = (base, merged) => {
  if (!merged)
    return base;
  const result = { ...base };
  let k;
  for (k in merged) {
    const keywords2 = { ...base.keywords };
    if (k === "keywords") {
      for (const flatAlias in merged[k]) {
        const v = merged.keywords[flatAlias];
        if (v === void 0)
          continue;
        keywords2[flatAlias] = typeof v === "string" ? { description: v } : v;
      }
      result.keywords = keywords2;
    } else if (k === "toJsonSchema") {
      result[k] = mergeToJsonSchemaConfigs(base.toJsonSchema, merged.toJsonSchema);
    } else if (isNodeKind(k)) {
      result[k] = // not casting this makes TS compute a very inefficient
      // type that is not needed
      {
        ...base[k],
        ...merged[k]
      };
    } else
      result[k] = merged[k];
  }
  return result;
};
const jsonSchemaTargetToDialect = {
  "draft-2020-12": "https://json-schema.org/draft/2020-12/schema",
  "draft-07": "http://json-schema.org/draft-07/schema#"
};
const mergeToJsonSchemaConfigs = ((baseConfig, mergedConfig) => {
  if (!baseConfig)
    return resolveTargetToDialect(mergedConfig ?? {}, void 0);
  if (!mergedConfig)
    return baseConfig;
  const result = { ...baseConfig };
  let k;
  for (k in mergedConfig) {
    if (k === "fallback") {
      result.fallback = mergeFallbacks(baseConfig.fallback, mergedConfig.fallback);
    } else
      result[k] = mergedConfig[k];
  }
  return resolveTargetToDialect(result, mergedConfig);
});
const resolveTargetToDialect = (opts, userOpts) => {
  if (userOpts?.dialect !== void 0)
    return opts;
  if (userOpts?.target !== void 0) {
    return {
      ...opts,
      dialect: jsonSchemaTargetToDialect[userOpts.target]
    };
  }
  return opts;
};
const mergeFallbacks = (base, merged) => {
  base = normalizeFallback(base);
  merged = normalizeFallback(merged);
  const result = {};
  let code2;
  for (code2 in ToJsonSchema.defaultConfig.fallback) {
    result[code2] = merged[code2] ?? merged.default ?? base[code2] ?? base.default ?? ToJsonSchema.defaultConfig.fallback[code2];
  }
  return result;
};
const normalizeFallback = (fallback) => typeof fallback === "function" ? { default: fallback } : fallback ?? {};
class ArkError extends CastableBase {
  [arkKind] = "error";
  path;
  data;
  nodeConfig;
  input;
  ctx;
  // TS gets confused by <code>, so internally we just use the base type for input
  constructor({ prefixPath, relativePath, ...input }, ctx) {
    super();
    this.input = input;
    this.ctx = ctx;
    defineProperties(this, input);
    const data = ctx.data;
    if (input.code === "union") {
      input.errors = input.errors.flatMap((innerError) => {
        const flat = innerError.hasCode("union") ? innerError.errors : [innerError];
        if (!prefixPath && !relativePath)
          return flat;
        return flat.map((e) => e.transform((e2) => ({
          ...e2,
          path: conflatenateAll(prefixPath, e2.path, relativePath)
        })));
      });
    }
    this.nodeConfig = ctx.config[this.code];
    const basePath = [...input.path ?? ctx.path];
    if (relativePath)
      basePath.push(...relativePath);
    if (prefixPath)
      basePath.unshift(...prefixPath);
    this.path = new ReadonlyPath(...basePath);
    this.data = "data" in input ? input.data : data;
  }
  transform(f) {
    return new ArkError(f({
      data: this.data,
      path: this.path,
      ...this.input
    }), this.ctx);
  }
  hasCode(code2) {
    return this.code === code2;
  }
  get propString() {
    return stringifyPath(this.path);
  }
  get expected() {
    if (this.input.expected)
      return this.input.expected;
    const config = this.meta?.expected ?? this.nodeConfig.expected;
    return typeof config === "function" ? config(this.input) : config;
  }
  get actual() {
    if (this.input.actual)
      return this.input.actual;
    const config = this.meta?.actual ?? this.nodeConfig.actual;
    return typeof config === "function" ? config(this.data) : config;
  }
  get problem() {
    if (this.input.problem)
      return this.input.problem;
    const config = this.meta?.problem ?? this.nodeConfig.problem;
    return typeof config === "function" ? config(this) : config;
  }
  get message() {
    if (this.input.message)
      return this.input.message;
    const config = this.meta?.message ?? this.nodeConfig.message;
    return typeof config === "function" ? config(this) : config;
  }
  get flat() {
    return this.hasCode("intersection") ? [...this.errors] : [this];
  }
  toJSON() {
    return {
      data: this.data,
      path: this.path,
      ...this.input,
      expected: this.expected,
      actual: this.actual,
      problem: this.problem,
      message: this.message
    };
  }
  toString() {
    return this.message;
  }
  throw() {
    throw this;
  }
}
class ArkErrors extends ReadonlyArray {
  [arkKind] = "errors";
  ctx;
  constructor(ctx) {
    super();
    this.ctx = ctx;
  }
  /**
   * Errors by a pathString representing their location.
   */
  byPath = /* @__PURE__ */ Object.create(null);
  /**
   * {@link byPath} flattened so that each value is an array of ArkError instances at that path.
   *
   * ✅ Since "intersection" errors will be flattened to their constituent `.errors`,
   * they will never be directly present in this representation.
   */
  get flatByPath() {
    return flatMorph(this.byPath, (k, v) => [k, v.flat]);
  }
  /**
   * {@link byPath} flattened so that each value is an array of problem strings at that path.
   */
  get flatProblemsByPath() {
    return flatMorph(this.byPath, (k, v) => [k, v.flat.map((e) => e.problem)]);
  }
  /**
   * All pathStrings at which errors are present mapped to the errors occuring
   * at that path or any nested path within it.
   */
  byAncestorPath = /* @__PURE__ */ Object.create(null);
  count = 0;
  mutable = this;
  /**
   * Throw a TraversalError based on these errors.
   */
  throw() {
    throw this.toTraversalError();
  }
  /**
   * Converts ArkErrors to TraversalError, a subclass of `Error` suitable for throwing with nice
   * formatting.
   */
  toTraversalError() {
    return new TraversalError(this);
  }
  /**
   * Append an ArkError to this array, ignoring duplicates.
   */
  add(error) {
    const existing = this.byPath[error.propString];
    if (existing) {
      if (error === existing)
        return;
      if (existing.hasCode("union") && existing.errors.length === 0)
        return;
      const errorIntersection = error.hasCode("union") && error.errors.length === 0 ? error : new ArkError({
        code: "intersection",
        errors: existing.hasCode("intersection") ? [...existing.errors, error] : [existing, error]
      }, this.ctx);
      const existingIndex = this.indexOf(existing);
      this.mutable[existingIndex === -1 ? this.length : existingIndex] = errorIntersection;
      this.byPath[error.propString] = errorIntersection;
      this.addAncestorPaths(error);
    } else {
      this.byPath[error.propString] = error;
      this.addAncestorPaths(error);
      this.mutable.push(error);
    }
    this.count++;
  }
  transform(f) {
    const result = new ArkErrors(this.ctx);
    for (const e of this)
      result.add(f(e));
    return result;
  }
  /**
   * Add all errors from an ArkErrors instance, ignoring duplicates and
   * prefixing their paths with that of the current Traversal.
   */
  merge(errors) {
    for (const e of errors) {
      this.add(new ArkError({ ...e, path: [...this.ctx.path, ...e.path] }, this.ctx));
    }
  }
  /**
   * @internal
   */
  affectsPath(path) {
    if (this.length === 0)
      return false;
    return (
      // this would occur if there is an existing error at a prefix of path
      // e.g. the path is ["foo", "bar"] and there is an error at ["foo"]
      path.stringifyAncestors().some((s) => s in this.byPath) || // this would occur if there is an existing error at a suffix of path
      // e.g. the path is ["foo"] and there is an error at ["foo", "bar"]
      path.stringify() in this.byAncestorPath
    );
  }
  /**
   * A human-readable summary of all errors.
   */
  get summary() {
    return this.toString();
  }
  /**
   * Alias of this ArkErrors instance for StandardSchema compatibility.
   */
  get issues() {
    return this;
  }
  toJSON() {
    return [...this.map((e) => e.toJSON())];
  }
  toString() {
    return this.join("\n");
  }
  addAncestorPaths(error) {
    for (const propString of error.path.stringifyAncestors()) {
      this.byAncestorPath[propString] = append(this.byAncestorPath[propString], error);
    }
  }
}
class TraversalError extends Error {
  name = "TraversalError";
  constructor(errors) {
    if (errors.length === 1)
      super(errors.summary);
    else
      super("\n" + errors.map((error) => `  • ${indent(error)}`).join("\n"));
    Object.defineProperty(this, "arkErrors", {
      value: errors,
      enumerable: false
    });
  }
}
const indent = (error) => error.toString().split("\n").join("\n  ");
class Traversal {
  /**
   * #### the path being validated or morphed
   *
   * ✅ array indices represented as numbers
   * ⚠️ mutated during traversal - use `path.slice(0)` to snapshot
   * 🔗 use {@link propString} for a stringified version
   */
  path = [];
  /**
   * #### {@link ArkErrors} that will be part of this traversal's finalized result
   *
   * ✅ will always be an empty array for a valid traversal
   */
  errors = new ArkErrors(this);
  /**
   * #### the original value being traversed
   */
  root;
  /**
   * #### configuration for this traversal
   *
   * ✅ options can affect traversal results and error messages
   * ✅ defaults < global config < scope config
   * ✅ does not include options configured on individual types
   */
  config;
  queuedMorphs = [];
  branches = [];
  seen = {};
  constructor(root, config) {
    this.root = root;
    this.config = config;
  }
  /**
   * #### the data being validated or morphed
   *
   * ✅ extracted from {@link root} at {@link path}
   */
  get data() {
    let result = this.root;
    for (const segment of this.path)
      result = result?.[segment];
    return result;
  }
  /**
   * #### a string representing {@link path}
   *
   * @propString
   */
  get propString() {
    return stringifyPath(this.path);
  }
  /**
   * #### add an {@link ArkError} and return `false`
   *
   * ✅ useful for predicates like `.narrow`
   */
  reject(input) {
    this.error(input);
    return false;
  }
  /**
   * #### add an {@link ArkError} from a description and return `false`
   *
   * ✅ useful for predicates like `.narrow`
   * 🔗 equivalent to {@link reject}({ expected })
   */
  mustBe(expected) {
    this.error(expected);
    return false;
  }
  error(input) {
    const errCtx = typeof input === "object" ? input.code ? input : { ...input, code: "predicate" } : { code: "predicate", expected: input };
    return this.errorFromContext(errCtx);
  }
  /**
   * #### whether {@link currentBranch} (or the traversal root, outside a union) has one or more errors
   */
  hasError() {
    return this.currentErrorCount !== 0;
  }
  get currentBranch() {
    return this.branches[this.branches.length - 1];
  }
  queueMorphs(morphs) {
    const input = {
      path: new ReadonlyPath(...this.path),
      morphs
    };
    if (this.currentBranch)
      this.currentBranch.queuedMorphs.push(input);
    else
      this.queuedMorphs.push(input);
  }
  finalize(onFail) {
    if (this.queuedMorphs.length) {
      if (typeof this.root === "object" && this.root !== null && this.config.clone)
        this.root = this.config.clone(this.root);
      this.applyQueuedMorphs();
    }
    if (this.hasError())
      return onFail ? onFail(this.errors) : this.errors;
    return this.root;
  }
  get currentErrorCount() {
    return this.currentBranch ? this.currentBranch.error ? 1 : 0 : this.errors.count;
  }
  get failFast() {
    return this.branches.length !== 0;
  }
  pushBranch() {
    this.branches.push({
      error: void 0,
      queuedMorphs: []
    });
  }
  popBranch() {
    return this.branches.pop();
  }
  /**
   * @internal
   * Convenience for casting from InternalTraversal to Traversal
   * for cases where the extra methods on the external type are expected, e.g.
   * a morph or predicate.
   */
  get external() {
    return this;
  }
  errorFromNodeContext(input) {
    return this.errorFromContext(input);
  }
  errorFromContext(errCtx) {
    const error = new ArkError(errCtx, this);
    if (this.currentBranch)
      this.currentBranch.error = error;
    else
      this.errors.add(error);
    return error;
  }
  applyQueuedMorphs() {
    while (this.queuedMorphs.length) {
      const queuedMorphs = this.queuedMorphs;
      this.queuedMorphs = [];
      for (const { path, morphs } of queuedMorphs) {
        if (this.errors.affectsPath(path))
          continue;
        this.applyMorphsAtPath(path, morphs);
      }
    }
  }
  applyMorphsAtPath(path, morphs) {
    const key = path[path.length - 1];
    let parent;
    if (key !== void 0) {
      parent = this.root;
      for (let pathIndex = 0; pathIndex < path.length - 1; pathIndex++)
        parent = parent[path[pathIndex]];
    }
    for (const morph of morphs) {
      this.path = [...path];
      const morphIsNode = isNode(morph);
      const result = morph(parent === void 0 ? this.root : parent[key], this);
      if (result instanceof ArkError) {
        if (!this.errors.includes(result))
          this.errors.add(result);
        break;
      }
      if (result instanceof ArkErrors) {
        if (!morphIsNode) {
          this.errors.merge(result);
        }
        this.queuedMorphs = [];
        break;
      }
      if (parent === void 0)
        this.root = result;
      else
        parent[key] = result;
      this.applyQueuedMorphs();
    }
  }
}
const traverseKey = (key, fn, ctx) => {
  if (!ctx)
    return fn();
  ctx.path.push(key);
  const result = fn();
  ctx.path.pop();
  return result;
};
class BaseNode extends Callable {
  attachments;
  $;
  onFail;
  includesTransform;
  includesContextualPredicate;
  isCyclic;
  allowsRequiresContext;
  rootApplyStrategy;
  contextFreeMorph;
  rootApply;
  referencesById;
  shallowReferences;
  flatRefs;
  flatMorphs;
  allows;
  get shallowMorphs() {
    return [];
  }
  constructor(attachments, $) {
    super((data, pipedFromCtx, onFail = this.onFail) => {
      if (pipedFromCtx) {
        this.traverseApply(data, pipedFromCtx);
        return pipedFromCtx.hasError() ? pipedFromCtx.errors : pipedFromCtx.data;
      }
      return this.rootApply(data, onFail);
    }, { attach: attachments });
    this.attachments = attachments;
    this.$ = $;
    this.onFail = this.meta.onFail ?? this.$.resolvedConfig.onFail;
    this.includesTransform = this.hasKind("morph") || this.hasKind("structure") && this.structuralMorph !== void 0 || this.hasKind("sequence") && this.inner.defaultables !== void 0;
    this.includesContextualPredicate = this.hasKind("predicate") && this.inner.predicate.length !== 1;
    this.isCyclic = this.kind === "alias";
    this.referencesById = { [this.id]: this };
    this.shallowReferences = this.hasKind("structure") ? [this, ...this.children] : this.children.reduce((acc, child) => appendUniqueNodes(acc, child.shallowReferences), [this]);
    const isStructural = this.isStructural();
    this.flatRefs = [];
    this.flatMorphs = [];
    for (let i = 0; i < this.children.length; i++) {
      this.includesTransform ||= this.children[i].includesTransform;
      this.includesContextualPredicate ||= this.children[i].includesContextualPredicate;
      this.isCyclic ||= this.children[i].isCyclic;
      if (!isStructural) {
        const childFlatRefs = this.children[i].flatRefs;
        for (let j = 0; j < childFlatRefs.length; j++) {
          const childRef = childFlatRefs[j];
          if (!this.flatRefs.some((existing) => flatRefsAreEqual(existing, childRef))) {
            this.flatRefs.push(childRef);
            for (const branch of childRef.node.branches) {
              if (branch.hasKind("morph") || branch.hasKind("intersection") && branch.structure?.structuralMorph !== void 0) {
                this.flatMorphs.push({
                  path: childRef.path,
                  propString: childRef.propString,
                  node: branch
                });
              }
            }
          }
        }
      }
      Object.assign(this.referencesById, this.children[i].referencesById);
    }
    this.flatRefs.sort((l, r) => l.path.length > r.path.length ? 1 : l.path.length < r.path.length ? -1 : l.propString > r.propString ? 1 : l.propString < r.propString ? -1 : l.node.expression < r.node.expression ? -1 : 1);
    this.allowsRequiresContext = this.includesContextualPredicate || this.isCyclic;
    this.rootApplyStrategy = !this.allowsRequiresContext && this.flatMorphs.length === 0 ? this.shallowMorphs.length === 0 ? "allows" : this.shallowMorphs.every((morph) => morph.length === 1 || morph.name === "$arkStructuralMorph") ? this.hasKind("union") ? (
      // multiple morphs not yet supported for optimistic compilation
      this.branches.some((branch) => branch.shallowMorphs.length > 1) ? "contextual" : "branchedOptimistic"
    ) : this.shallowMorphs.length > 1 ? "contextual" : "optimistic" : "contextual" : "contextual";
    this.rootApply = this.createRootApply();
    this.allows = this.allowsRequiresContext ? (data) => this.traverseAllows(data, new Traversal(data, this.$.resolvedConfig)) : (data) => this.traverseAllows(data);
  }
  createRootApply() {
    switch (this.rootApplyStrategy) {
      case "allows":
        return (data, onFail) => {
          if (this.allows(data))
            return data;
          const ctx = new Traversal(data, this.$.resolvedConfig);
          this.traverseApply(data, ctx);
          return ctx.finalize(onFail);
        };
      case "contextual":
        return (data, onFail) => {
          const ctx = new Traversal(data, this.$.resolvedConfig);
          this.traverseApply(data, ctx);
          return ctx.finalize(onFail);
        };
      case "optimistic":
        this.contextFreeMorph = this.shallowMorphs[0];
        const clone = this.$.resolvedConfig.clone;
        return (data, onFail) => {
          if (this.allows(data)) {
            return this.contextFreeMorph(clone && (typeof data === "object" && data !== null || typeof data === "function") ? clone(data) : data);
          }
          const ctx = new Traversal(data, this.$.resolvedConfig);
          this.traverseApply(data, ctx);
          return ctx.finalize(onFail);
        };
      case "branchedOptimistic":
        return this.createBranchedOptimisticRootApply();
      default:
        this.rootApplyStrategy;
        return throwInternalError(`Unexpected rootApplyStrategy ${this.rootApplyStrategy}`);
    }
  }
  compiledMeta = compileMeta(this.metaJson);
  cacheGetter(name, value2) {
    Object.defineProperty(this, name, { value: value2 });
    return value2;
  }
  get description() {
    return this.cacheGetter("description", this.meta?.description ?? this.$.resolvedConfig[this.kind].description(this));
  }
  // we don't cache this currently since it can be updated once a scope finishes
  // resolving cyclic references, although it may be possible to ensure it is cached safely
  get references() {
    return Object.values(this.referencesById);
  }
  precedence = precedenceOfKind(this.kind);
  precompilation;
  // defined as an arrow function since it is often detached, e.g. when passing to tRPC
  // otherwise, would run into issues with this binding
  assert = (data, pipedFromCtx) => this(data, pipedFromCtx, (errors) => errors.throw());
  traverse(data, pipedFromCtx) {
    return this(data, pipedFromCtx, null);
  }
  /** rawIn should be used internally instead */
  get in() {
    return this.cacheGetter("in", this.rawIn.isRoot() ? this.$.finalize(this.rawIn) : this.rawIn);
  }
  get rawIn() {
    return this.cacheGetter("rawIn", this.getIo("in"));
  }
  /** rawOut should be used internally instead */
  get out() {
    return this.cacheGetter("out", this.rawOut.isRoot() ? this.$.finalize(this.rawOut) : this.rawOut);
  }
  get rawOut() {
    return this.cacheGetter("rawOut", this.getIo("out"));
  }
  // Should be refactored to use transform
  // https://github.com/arktypeio/arktype/issues/1020
  getIo(ioKind) {
    if (!this.includesTransform)
      return this;
    const ioInner = {};
    for (const [k, v] of this.innerEntries) {
      const keySchemaImplementation = this.impl.keys[k];
      if (keySchemaImplementation.reduceIo)
        keySchemaImplementation.reduceIo(ioKind, ioInner, v);
      else if (keySchemaImplementation.child) {
        const childValue = v;
        ioInner[k] = isArray(childValue) ? childValue.map((child) => ioKind === "in" ? child.rawIn : child.rawOut) : ioKind === "in" ? childValue.rawIn : childValue.rawOut;
      } else
        ioInner[k] = v;
    }
    return this.$.node(this.kind, ioInner);
  }
  toJSON() {
    return this.json;
  }
  toString() {
    return `Type<${this.expression}>`;
  }
  equals(r) {
    const rNode = isNode(r) ? r : this.$.parseDefinition(r);
    return this.innerHash === rNode.innerHash;
  }
  ifEquals(r) {
    return this.equals(r) ? this : void 0;
  }
  hasKind(kind) {
    return this.kind === kind;
  }
  assertHasKind(kind) {
    if (this.kind !== kind)
      throwError(`${this.kind} node was not of asserted kind ${kind}`);
    return this;
  }
  hasKindIn(...kinds) {
    return kinds.includes(this.kind);
  }
  assertHasKindIn(...kinds) {
    if (!includes(kinds, this.kind))
      throwError(`${this.kind} node was not one of asserted kinds ${kinds}`);
    return this;
  }
  isBasis() {
    return includes(basisKinds, this.kind);
  }
  isConstraint() {
    return includes(constraintKinds, this.kind);
  }
  isStructural() {
    return includes(structuralKinds, this.kind);
  }
  isRefinement() {
    return includes(refinementKinds, this.kind);
  }
  isRoot() {
    return includes(rootKinds, this.kind);
  }
  isUnknown() {
    return this.hasKind("intersection") && this.children.length === 0;
  }
  isNever() {
    return this.hasKind("union") && this.children.length === 0;
  }
  hasUnit(value2) {
    return this.hasKind("unit") && this.allows(value2);
  }
  hasOpenIntersection() {
    return this.impl.intersectionIsOpen;
  }
  get nestableExpression() {
    return this.expression;
  }
  select(selector) {
    const normalized = NodeSelector.normalize(selector);
    return this._select(normalized);
  }
  _select(selector) {
    let nodes = NodeSelector.applyBoundary[selector.boundary ?? "references"](this);
    if (selector.kind)
      nodes = nodes.filter((n) => n.kind === selector.kind);
    if (selector.where)
      nodes = nodes.filter(selector.where);
    return NodeSelector.applyMethod[selector.method ?? "filter"](nodes, this, selector);
  }
  transform(mapper, opts) {
    return this._transform(mapper, this._createTransformContext(opts));
  }
  _createTransformContext(opts) {
    return {
      root: this,
      selected: void 0,
      seen: {},
      path: [],
      parseOptions: {
        prereduced: opts?.prereduced ?? false
      },
      undeclaredKeyHandling: void 0,
      ...opts
    };
  }
  _transform(mapper, ctx) {
    const $ = ctx.bindScope ?? this.$;
    if (ctx.seen[this.id])
      return this.$.lazilyResolve(ctx.seen[this.id]);
    if (ctx.shouldTransform?.(this, ctx) === false)
      return this;
    let transformedNode;
    ctx.seen[this.id] = () => transformedNode;
    if (this.hasKind("structure") && this.undeclared !== ctx.undeclaredKeyHandling) {
      ctx = {
        ...ctx,
        undeclaredKeyHandling: this.undeclared
      };
    }
    const innerWithTransformedChildren = flatMorph(this.inner, (k, v) => {
      if (!this.impl.keys[k].child)
        return [k, v];
      const children = v;
      if (!isArray(children)) {
        const transformed2 = children._transform(mapper, ctx);
        return transformed2 ? [k, transformed2] : [];
      }
      if (children.length === 0)
        return [k, v];
      const transformed = children.flatMap((n) => {
        const transformedChild = n._transform(mapper, ctx);
        return transformedChild ?? [];
      });
      return transformed.length ? [k, transformed] : [];
    });
    delete ctx.seen[this.id];
    const innerWithMeta = Object.assign(innerWithTransformedChildren, {
      meta: this.meta
    });
    const transformedInner = ctx.selected && !ctx.selected.includes(this) ? innerWithMeta : mapper(this.kind, innerWithMeta, ctx);
    if (transformedInner === null)
      return null;
    if (isNode(transformedInner))
      return transformedNode = transformedInner;
    const transformedKeys = Object.keys(transformedInner);
    const hasNoTypedKeys = transformedKeys.length === 0 || transformedKeys.length === 1 && transformedKeys[0] === "meta";
    if (hasNoTypedKeys && // if inner was previously an empty object (e.g. unknown) ensure it is not pruned
    !isEmptyObject(this.inner))
      return null;
    if ((this.kind === "required" || this.kind === "optional" || this.kind === "index") && !("value" in transformedInner)) {
      return ctx.undeclaredKeyHandling ? { ...transformedInner, value: $ark.intrinsic.unknown } : null;
    }
    if (this.kind === "morph") {
      transformedInner.in ??= $ark.intrinsic.unknown;
    }
    return transformedNode = $.node(this.kind, transformedInner, ctx.parseOptions);
  }
  configureReferences(meta, selector = "references") {
    const normalized = NodeSelector.normalize(selector);
    const mapper = typeof meta === "string" ? (kind, inner) => ({
      ...inner,
      meta: { ...inner.meta, description: meta }
    }) : typeof meta === "function" ? (kind, inner) => ({ ...inner, meta: meta(inner.meta) }) : (kind, inner) => ({
      ...inner,
      meta: { ...inner.meta, ...meta }
    });
    if (normalized.boundary === "self") {
      return this.$.node(this.kind, mapper(this.kind, { ...this.inner, meta: this.meta }));
    }
    const rawSelected = this._select(normalized);
    const selected = rawSelected && liftArray(rawSelected);
    const shouldTransform = normalized.boundary === "child" ? (node2, ctx) => ctx.root.children.includes(node2) : normalized.boundary === "shallow" ? (node2) => node2.kind !== "structure" : () => true;
    return this.$.finalize(this.transform(mapper, {
      shouldTransform,
      selected
    }));
  }
}
const NodeSelector = {
  applyBoundary: {
    self: (node2) => [node2],
    child: (node2) => [...node2.children],
    shallow: (node2) => [...node2.shallowReferences],
    references: (node2) => [...node2.references]
  },
  applyMethod: {
    filter: (nodes) => nodes,
    assertFilter: (nodes, from, selector) => {
      if (nodes.length === 0)
        throwError(writeSelectAssertionMessage(from, selector));
      return nodes;
    },
    find: (nodes) => nodes[0],
    assertFind: (nodes, from, selector) => {
      if (nodes.length === 0)
        throwError(writeSelectAssertionMessage(from, selector));
      return nodes[0];
    }
  },
  normalize: (selector) => typeof selector === "function" ? { boundary: "references", method: "filter", where: selector } : typeof selector === "string" ? isKeyOf(selector, NodeSelector.applyBoundary) ? { method: "filter", boundary: selector } : { boundary: "references", method: "filter", kind: selector } : { boundary: "references", method: "filter", ...selector }
};
const writeSelectAssertionMessage = (from, selector) => `${from} had no references matching ${printable(selector)}.`;
const typePathToPropString = (path) => stringifyPath(path, {
  stringifyNonKey: (node2) => node2.expression
});
const referenceMatcher = /"(\$ark\.[^"]+)"/g;
const compileMeta = (metaJson) => JSON.stringify(metaJson).replace(referenceMatcher, "$1");
const flatRef = (path, node2) => ({
  path,
  node: node2,
  propString: typePathToPropString(path)
});
const flatRefsAreEqual = (l, r) => l.propString === r.propString && l.node.equals(r.node);
const appendUniqueFlatRefs = (existing, refs) => appendUnique(existing, refs, {
  isEqual: flatRefsAreEqual
});
const appendUniqueNodes = (existing, refs) => appendUnique(existing, refs, {
  isEqual: (l, r) => l.equals(r)
});
class Disjoint extends Array {
  static init(kind, l, r, ctx) {
    return new Disjoint({
      kind,
      l,
      r,
      path: ctx?.path ?? [],
      optional: ctx?.optional ?? false
    });
  }
  add(kind, l, r, ctx) {
    this.push({
      kind,
      l,
      r,
      path: ctx?.path ?? [],
      optional: ctx?.optional ?? false
    });
    return this;
  }
  get summary() {
    return this.describeReasons();
  }
  describeReasons() {
    if (this.length === 1) {
      const { path, l, r } = this[0];
      const pathString = stringifyPath(path);
      return writeUnsatisfiableExpressionError(`Intersection${pathString && ` at ${pathString}`} of ${describeReasons(l, r)}`);
    }
    return `The following intersections result in unsatisfiable types:
• ${this.map(({ path, l, r }) => `${path}: ${describeReasons(l, r)}`).join("\n• ")}`;
  }
  throw() {
    return throwParseError(this.describeReasons());
  }
  invert() {
    const result = this.map((entry) => ({
      ...entry,
      l: entry.r,
      r: entry.l
    }));
    if (!(result instanceof Disjoint))
      return new Disjoint(...result);
    return result;
  }
  withPrefixKey(key, kind) {
    return this.map((entry) => ({
      ...entry,
      path: [key, ...entry.path],
      optional: entry.optional || kind === "optional"
    }));
  }
  toNeverIfDisjoint() {
    return $ark.intrinsic.never;
  }
}
const describeReasons = (l, r) => `${describeReason(l)} and ${describeReason(r)}`;
const describeReason = (value2) => isNode(value2) ? value2.expression : isArray(value2) ? value2.map(describeReason).join(" | ") || "never" : String(value2);
const writeUnsatisfiableExpressionError = (expression) => `${expression} results in an unsatisfiable type`;
const intersectionCache = {};
const intersectNodesRoot = (l, r, $) => intersectOrPipeNodes(l, r, {
  $,
  invert: false,
  pipe: false
});
const pipeNodesRoot = (l, r, $) => intersectOrPipeNodes(l, r, {
  $,
  invert: false,
  pipe: true
});
const intersectOrPipeNodes = ((l, r, ctx) => {
  const operator = ctx.pipe ? "|>" : "&";
  const lrCacheKey = `${l.hash}${operator}${r.hash}`;
  if (intersectionCache[lrCacheKey] !== void 0)
    return intersectionCache[lrCacheKey];
  if (!ctx.pipe) {
    const rlCacheKey = `${r.hash}${operator}${l.hash}`;
    if (intersectionCache[rlCacheKey] !== void 0) {
      const rlResult = intersectionCache[rlCacheKey];
      const lrResult = rlResult instanceof Disjoint ? rlResult.invert() : rlResult;
      intersectionCache[lrCacheKey] = lrResult;
      return lrResult;
    }
  }
  const isPureIntersection = !ctx.pipe || !l.includesTransform && !r.includesTransform;
  if (isPureIntersection && l.equals(r))
    return l;
  let result = isPureIntersection ? _intersectNodes(l, r, ctx) : l.hasKindIn(...rootKinds) ? (
    // if l is a RootNode, r will be as well
    _pipeNodes(l, r, ctx)
  ) : _intersectNodes(l, r, ctx);
  if (isNode(result)) {
    if (l.equals(result))
      result = l;
    else if (r.equals(result))
      result = r;
  }
  intersectionCache[lrCacheKey] = result;
  return result;
});
const _intersectNodes = (l, r, ctx) => {
  const leftmostKind = l.precedence < r.precedence ? l.kind : r.kind;
  const implementation2 = l.impl.intersections[r.kind] ?? r.impl.intersections[l.kind];
  if (implementation2 === void 0) {
    return null;
  } else if (leftmostKind === l.kind)
    return implementation2(l, r, ctx);
  else {
    let result = implementation2(r, l, { ...ctx, invert: !ctx.invert });
    if (result instanceof Disjoint)
      result = result.invert();
    return result;
  }
};
const _pipeNodes = (l, r, ctx) => l.includesTransform || r.includesTransform ? ctx.invert ? pipeMorphed(r, l, ctx) : pipeMorphed(l, r, ctx) : _intersectNodes(l, r, ctx);
const pipeMorphed = (from, to, ctx) => from.distribute((fromBranch) => _pipeMorphed(fromBranch, to, ctx), (results) => {
  const viableBranches = results.filter(isNode);
  if (viableBranches.length === 0)
    return Disjoint.init("union", from.branches, to.branches);
  if (viableBranches.length < from.branches.length || !from.branches.every((branch, i) => branch.rawIn.equals(viableBranches[i].rawIn)))
    return ctx.$.parseSchema(viableBranches);
  if (viableBranches.length === 1) {
    const onlyBranch = viableBranches[0];
    return onlyBranch;
  }
  const schema = {
    branches: viableBranches
  };
  return ctx.$.parseSchema(schema);
});
const _pipeMorphed = (from, to, ctx) => {
  const fromIsMorph = from.hasKind("morph");
  if (fromIsMorph) {
    const morphs = [...from.morphs];
    if (from.lastMorphIfNode) {
      const outIntersection = intersectOrPipeNodes(from.lastMorphIfNode, to, ctx);
      if (outIntersection instanceof Disjoint)
        return outIntersection;
      morphs[morphs.length - 1] = outIntersection;
    } else
      morphs.push(to);
    return ctx.$.node("morph", {
      morphs,
      in: from.inner.in
    });
  }
  if (to.hasKind("morph")) {
    const inTersection = intersectOrPipeNodes(from, to.rawIn, ctx);
    if (inTersection instanceof Disjoint)
      return inTersection;
    return ctx.$.node("morph", {
      morphs: [to],
      in: inTersection
    });
  }
  return ctx.$.node("morph", {
    morphs: [to],
    in: from
  });
};
class BaseConstraint extends BaseNode {
  constructor(attachments, $) {
    super(attachments, $);
    Object.defineProperty(this, arkKind, {
      value: "constraint",
      enumerable: false
    });
  }
  impliedSiblings;
  intersect(r) {
    return intersectNodesRoot(this, r, this.$);
  }
}
class InternalPrimitiveConstraint extends BaseConstraint {
  traverseApply = (data, ctx) => {
    if (!this.traverseAllows(data, ctx))
      ctx.errorFromNodeContext(this.errorContext);
  };
  compile(js) {
    if (js.traversalKind === "Allows")
      js.return(this.compiledCondition);
    else {
      js.if(this.compiledNegation, () => js.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`));
    }
  }
  get errorContext() {
    return {
      code: this.kind,
      description: this.description,
      meta: this.meta,
      ...this.inner
    };
  }
  get compiledErrorContext() {
    return compileObjectLiteral(this.errorContext);
  }
}
const constraintKeyParser = (kind) => (schema, ctx) => {
  if (isArray(schema)) {
    if (schema.length === 0) {
      return;
    }
    const nodes = schema.map((schema2) => ctx.$.node(kind, schema2));
    if (kind === "predicate")
      return nodes;
    return nodes.sort((l, r) => l.hash < r.hash ? -1 : 1);
  }
  const child = ctx.$.node(kind, schema);
  return child.hasOpenIntersection() ? [child] : child;
};
const intersectConstraints = (s) => {
  const head = s.r.shift();
  if (!head) {
    let result = s.l.length === 0 && s.kind === "structure" ? $ark.intrinsic.unknown.internal : s.ctx.$.node(s.kind, Object.assign(s.baseInner, unflattenConstraints(s.l)), { prereduced: true });
    for (const root of s.roots) {
      if (result instanceof Disjoint)
        return result;
      result = intersectOrPipeNodes(root, result, s.ctx);
    }
    return result;
  }
  let matched = false;
  for (let i = 0; i < s.l.length; i++) {
    const result = intersectOrPipeNodes(s.l[i], head, s.ctx);
    if (result === null)
      continue;
    if (result instanceof Disjoint)
      return result;
    if (result.isRoot()) {
      s.roots.push(result);
      s.l.splice(i);
      return intersectConstraints(s);
    }
    if (!matched) {
      s.l[i] = result;
      matched = true;
    } else if (!s.l.includes(result)) {
      return throwInternalError(`Unexpectedly encountered multiple distinct intersection results for refinement ${head}`);
    }
  }
  if (!matched)
    s.l.push(head);
  if (s.kind === "intersection") {
    if (head.impliedSiblings)
      for (const node2 of head.impliedSiblings)
        appendUnique(s.r, node2);
  }
  return intersectConstraints(s);
};
const flattenConstraints = (inner) => {
  const result = Object.entries(inner).flatMap(([k, v]) => k in constraintKeys ? v : []).sort((l, r) => l.precedence < r.precedence ? -1 : l.precedence > r.precedence ? 1 : l.kind === "predicate" && r.kind === "predicate" ? 0 : l.hash < r.hash ? -1 : 1);
  return result;
};
const unflattenConstraints = (constraints) => {
  const inner = {};
  for (const constraint of constraints) {
    if (constraint.hasOpenIntersection()) {
      inner[constraint.kind] = append(inner[constraint.kind], constraint);
    } else {
      if (inner[constraint.kind]) {
        return throwInternalError(`Unexpected intersection of closed refinements of kind ${constraint.kind}`);
      }
      inner[constraint.kind] = constraint;
    }
  }
  return inner;
};
const throwInvalidOperandError = (...args) => throwParseError(writeInvalidOperandMessage(...args));
const writeInvalidOperandMessage = (kind, expected, actual) => {
  const actualDescription = actual.hasKind("morph") ? "a morph" : actual.isUnknown() ? "unknown" : actual.exclude(expected).defaultShortDescription;
  return `${capitalize$1(kind)} operand must be ${expected.description} (was ${actualDescription})`;
};
const parseGeneric = (paramDefs, bodyDef, $) => new GenericRoot(paramDefs, bodyDef, $, $, null);
class LazyGenericBody extends Callable {
}
class GenericRoot extends Callable {
  [arkKind] = "generic";
  paramDefs;
  bodyDef;
  $;
  arg$;
  baseInstantiation;
  hkt;
  description;
  constructor(paramDefs, bodyDef, $, arg$, hkt) {
    super((...args) => {
      const argNodes = flatMorph(this.names, (i, name) => {
        const arg = this.arg$.parse(args[i]);
        if (!arg.extends(this.constraints[i])) {
          throwParseError(writeUnsatisfiedParameterConstraintMessage(name, this.constraints[i].expression, arg.expression));
        }
        return [name, arg];
      });
      if (this.defIsLazy()) {
        const def = this.bodyDef(argNodes);
        return this.$.parse(def);
      }
      return this.$.parse(bodyDef, { args: argNodes });
    });
    this.paramDefs = paramDefs;
    this.bodyDef = bodyDef;
    this.$ = $;
    this.arg$ = arg$;
    this.hkt = hkt;
    this.description = hkt ? new hkt().description ?? `a generic type for ${hkt.constructor.name}` : "a generic type";
    this.baseInstantiation = this(...this.constraints);
  }
  defIsLazy() {
    return this.bodyDef instanceof LazyGenericBody;
  }
  cacheGetter(name, value2) {
    Object.defineProperty(this, name, { value: value2 });
    return value2;
  }
  get json() {
    return this.cacheGetter("json", {
      params: this.params.map((param) => param[1].isUnknown() ? param[0] : [param[0], param[1].json]),
      body: snapshot(this.bodyDef)
    });
  }
  get params() {
    return this.cacheGetter("params", this.paramDefs.map((param) => typeof param === "string" ? [param, $ark.intrinsic.unknown] : [param[0], this.$.parse(param[1])]));
  }
  get names() {
    return this.cacheGetter("names", this.params.map((e) => e[0]));
  }
  get constraints() {
    return this.cacheGetter("constraints", this.params.map((e) => e[1]));
  }
  get internal() {
    return this;
  }
  get referencesById() {
    return this.baseInstantiation.internal.referencesById;
  }
  get references() {
    return this.baseInstantiation.internal.references;
  }
}
const writeUnsatisfiedParameterConstraintMessage = (name, constraint, arg) => `${name} must be assignable to ${constraint} (was ${arg})`;
const implementation$l = implementNode({
  kind: "predicate",
  hasAssociatedError: true,
  collapsibleKey: "predicate",
  keys: {
    predicate: {}
  },
  normalize: (schema) => typeof schema === "function" ? { predicate: schema } : schema,
  defaults: {
    description: (node2) => `valid according to ${node2.predicate.name || "an anonymous predicate"}`
  },
  intersectionIsOpen: true,
  intersections: {
    // as long as the narrows in l and r are individually safe to check
    // in the order they're specified, checking them in the order
    // resulting from this intersection should also be safe.
    predicate: () => null
  }
});
class PredicateNode extends BaseConstraint {
  serializedPredicate = registeredReference(this.predicate);
  compiledCondition = `${this.serializedPredicate}(data, ctx)`;
  compiledNegation = `!${this.compiledCondition}`;
  impliedBasis = null;
  expression = this.serializedPredicate;
  traverseAllows = this.predicate;
  errorContext = {
    code: "predicate",
    description: this.description,
    meta: this.meta
  };
  compiledErrorContext = compileObjectLiteral(this.errorContext);
  traverseApply = (data, ctx) => {
    const errorCount = ctx.currentErrorCount;
    if (!this.predicate(data, ctx.external) && ctx.currentErrorCount === errorCount)
      ctx.errorFromNodeContext(this.errorContext);
  };
  compile(js) {
    if (js.traversalKind === "Allows") {
      js.return(this.compiledCondition);
      return;
    }
    js.initializeErrorCount();
    js.if(
      // only add the default error if the predicate didn't add one itself
      `${this.compiledNegation} && ctx.currentErrorCount === errorCount`,
      () => js.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`)
    );
  }
  reduceJsonSchema(base, ctx) {
    return ctx.fallback.predicate({
      code: "predicate",
      base,
      predicate: this.predicate
    });
  }
}
const Predicate = {
  implementation: implementation$l,
  Node: PredicateNode
};
const implementation$k = implementNode({
  kind: "divisor",
  collapsibleKey: "rule",
  keys: {
    rule: {
      parse: (divisor) => Number.isInteger(divisor) ? divisor : throwParseError(writeNonIntegerDivisorMessage(divisor))
    }
  },
  normalize: (schema) => typeof schema === "number" ? { rule: schema } : schema,
  hasAssociatedError: true,
  defaults: {
    description: (node2) => node2.rule === 1 ? "an integer" : node2.rule === 2 ? "even" : `a multiple of ${node2.rule}`
  },
  intersections: {
    divisor: (l, r, ctx) => ctx.$.node("divisor", {
      rule: Math.abs(l.rule * r.rule / greatestCommonDivisor(l.rule, r.rule))
    })
  },
  obviatesBasisDescription: true
});
class DivisorNode extends InternalPrimitiveConstraint {
  traverseAllows = (data) => data % this.rule === 0;
  compiledCondition = `data % ${this.rule} === 0`;
  compiledNegation = `data % ${this.rule} !== 0`;
  impliedBasis = $ark.intrinsic.number.internal;
  expression = `% ${this.rule}`;
  reduceJsonSchema(schema) {
    schema.type = "integer";
    if (this.rule === 1)
      return schema;
    schema.multipleOf = this.rule;
    return schema;
  }
}
const Divisor = {
  implementation: implementation$k,
  Node: DivisorNode
};
const writeNonIntegerDivisorMessage = (divisor) => `divisor must be an integer (was ${divisor})`;
const greatestCommonDivisor = (l, r) => {
  let previous;
  let greatestCommonDivisor2 = l;
  let current = r;
  while (current !== 0) {
    previous = current;
    current = greatestCommonDivisor2 % current;
    greatestCommonDivisor2 = previous;
  }
  return greatestCommonDivisor2;
};
class BaseRange extends InternalPrimitiveConstraint {
  boundOperandKind = operandKindsByBoundKind[this.kind];
  compiledActual = this.boundOperandKind === "value" ? `data` : this.boundOperandKind === "length" ? `data.length` : `data.valueOf()`;
  comparator = compileComparator(this.kind, this.exclusive);
  numericLimit = this.rule.valueOf();
  expression = `${this.comparator} ${this.rule}`;
  compiledCondition = `${this.compiledActual} ${this.comparator} ${this.numericLimit}`;
  compiledNegation = `${this.compiledActual} ${negatedComparators[this.comparator]} ${this.numericLimit}`;
  // we need to compute stringLimit before errorContext, which references it
  // transitively through description for date bounds
  stringLimit = this.boundOperandKind === "date" ? dateLimitToString(this.numericLimit) : `${this.numericLimit}`;
  limitKind = this.comparator["0"] === "<" ? "upper" : "lower";
  isStricterThan(r) {
    const thisLimitIsStricter = this.limitKind === "upper" ? this.numericLimit < r.numericLimit : this.numericLimit > r.numericLimit;
    return thisLimitIsStricter || this.numericLimit === r.numericLimit && this.exclusive === true && !r.exclusive;
  }
  overlapsRange(r) {
    if (this.isStricterThan(r))
      return false;
    if (this.numericLimit === r.numericLimit && (this.exclusive || r.exclusive))
      return false;
    return true;
  }
  overlapIsUnit(r) {
    return this.numericLimit === r.numericLimit && !this.exclusive && !r.exclusive;
  }
}
const negatedComparators = {
  "<": ">=",
  "<=": ">",
  ">": "<=",
  ">=": "<"
};
const boundKindPairsByLower = {
  min: "max",
  minLength: "maxLength",
  after: "before"
};
const parseExclusiveKey = {
  // omit key with value false since it is the default
  parse: (flag) => flag || void 0
};
const createLengthSchemaNormalizer = (kind) => (schema) => {
  if (typeof schema === "number")
    return { rule: schema };
  const { exclusive, ...normalized } = schema;
  return exclusive ? {
    ...normalized,
    rule: kind === "minLength" ? normalized.rule + 1 : normalized.rule - 1
  } : normalized;
};
const createDateSchemaNormalizer = (kind) => (schema) => {
  if (typeof schema === "number" || typeof schema === "string" || schema instanceof Date)
    return { rule: schema };
  const { exclusive, ...normalized } = schema;
  if (!exclusive)
    return normalized;
  const numericLimit = typeof normalized.rule === "number" ? normalized.rule : typeof normalized.rule === "string" ? new Date(normalized.rule).valueOf() : normalized.rule.valueOf();
  return exclusive ? {
    ...normalized,
    rule: kind === "after" ? numericLimit + 1 : numericLimit - 1
  } : normalized;
};
const parseDateLimit = (limit) => typeof limit === "string" || typeof limit === "number" ? new Date(limit) : limit;
const writeInvalidLengthBoundMessage = (kind, limit) => `${kind} bound must be a positive integer (was ${limit})`;
const createLengthRuleParser = (kind) => (limit) => {
  if (!Number.isInteger(limit) || limit < 0)
    throwParseError(writeInvalidLengthBoundMessage(kind, limit));
  return limit;
};
const operandKindsByBoundKind = {
  min: "value",
  max: "value",
  minLength: "length",
  maxLength: "length",
  after: "date",
  before: "date"
};
const compileComparator = (kind, exclusive) => `${isKeyOf(kind, boundKindPairsByLower) ? ">" : "<"}${exclusive ? "" : "="}`;
const dateLimitToString = (limit) => typeof limit === "string" ? limit : new Date(limit).toLocaleString();
const writeUnboundableMessage = (root) => `Bounded expression ${root} must be exactly one of number, string, Array, or Date`;
const implementation$j = implementNode({
  kind: "after",
  collapsibleKey: "rule",
  hasAssociatedError: true,
  keys: {
    rule: {
      parse: parseDateLimit,
      serialize: (schema) => schema.toISOString()
    }
  },
  normalize: createDateSchemaNormalizer("after"),
  defaults: {
    description: (node2) => `${node2.collapsibleLimitString} or later`,
    actual: describeCollapsibleDate
  },
  intersections: {
    after: (l, r) => l.isStricterThan(r) ? l : r
  }
});
class AfterNode extends BaseRange {
  impliedBasis = $ark.intrinsic.Date.internal;
  collapsibleLimitString = describeCollapsibleDate(this.rule);
  traverseAllows = (data) => data >= this.rule;
  reduceJsonSchema(base, ctx) {
    return ctx.fallback.date({ code: "date", base, after: this.rule });
  }
}
const After = {
  implementation: implementation$j,
  Node: AfterNode
};
const implementation$i = implementNode({
  kind: "before",
  collapsibleKey: "rule",
  hasAssociatedError: true,
  keys: {
    rule: {
      parse: parseDateLimit,
      serialize: (schema) => schema.toISOString()
    }
  },
  normalize: createDateSchemaNormalizer("before"),
  defaults: {
    description: (node2) => `${node2.collapsibleLimitString} or earlier`,
    actual: describeCollapsibleDate
  },
  intersections: {
    before: (l, r) => l.isStricterThan(r) ? l : r,
    after: (before, after, ctx) => before.overlapsRange(after) ? before.overlapIsUnit(after) ? ctx.$.node("unit", { unit: before.rule }) : null : Disjoint.init("range", before, after)
  }
});
class BeforeNode extends BaseRange {
  collapsibleLimitString = describeCollapsibleDate(this.rule);
  traverseAllows = (data) => data <= this.rule;
  impliedBasis = $ark.intrinsic.Date.internal;
  reduceJsonSchema(base, ctx) {
    return ctx.fallback.date({ code: "date", base, before: this.rule });
  }
}
const Before = {
  implementation: implementation$i,
  Node: BeforeNode
};
const implementation$h = implementNode({
  kind: "exactLength",
  collapsibleKey: "rule",
  keys: {
    rule: {
      parse: createLengthRuleParser("exactLength")
    }
  },
  normalize: (schema) => typeof schema === "number" ? { rule: schema } : schema,
  hasAssociatedError: true,
  defaults: {
    description: (node2) => `exactly length ${node2.rule}`,
    actual: (data) => `${data.length}`
  },
  intersections: {
    exactLength: (l, r, ctx) => Disjoint.init("unit", ctx.$.node("unit", { unit: l.rule }), ctx.$.node("unit", { unit: r.rule }), { path: ["length"] }),
    minLength: (exactLength, minLength) => exactLength.rule >= minLength.rule ? exactLength : Disjoint.init("range", exactLength, minLength),
    maxLength: (exactLength, maxLength) => exactLength.rule <= maxLength.rule ? exactLength : Disjoint.init("range", exactLength, maxLength)
  }
});
class ExactLengthNode extends InternalPrimitiveConstraint {
  traverseAllows = (data) => data.length === this.rule;
  compiledCondition = `data.length === ${this.rule}`;
  compiledNegation = `data.length !== ${this.rule}`;
  impliedBasis = $ark.intrinsic.lengthBoundable.internal;
  expression = `== ${this.rule}`;
  reduceJsonSchema(schema) {
    switch (schema.type) {
      case "string":
        schema.minLength = this.rule;
        schema.maxLength = this.rule;
        return schema;
      case "array":
        schema.minItems = this.rule;
        schema.maxItems = this.rule;
        return schema;
      default:
        return ToJsonSchema.throwInternalOperandError("exactLength", schema);
    }
  }
}
const ExactLength = {
  implementation: implementation$h,
  Node: ExactLengthNode
};
const implementation$g = implementNode({
  kind: "max",
  collapsibleKey: "rule",
  hasAssociatedError: true,
  keys: {
    rule: {},
    exclusive: parseExclusiveKey
  },
  normalize: (schema) => typeof schema === "number" ? { rule: schema } : schema,
  defaults: {
    description: (node2) => {
      if (node2.rule === 0)
        return node2.exclusive ? "negative" : "non-positive";
      return `${node2.exclusive ? "less than" : "at most"} ${node2.rule}`;
    }
  },
  intersections: {
    max: (l, r) => l.isStricterThan(r) ? l : r,
    min: (max, min, ctx) => max.overlapsRange(min) ? max.overlapIsUnit(min) ? ctx.$.node("unit", { unit: max.rule }) : null : Disjoint.init("range", max, min)
  },
  obviatesBasisDescription: true
});
class MaxNode extends BaseRange {
  impliedBasis = $ark.intrinsic.number.internal;
  traverseAllows = this.exclusive ? (data) => data < this.rule : (data) => data <= this.rule;
  reduceJsonSchema(schema) {
    if (this.exclusive)
      schema.exclusiveMaximum = this.rule;
    else
      schema.maximum = this.rule;
    return schema;
  }
}
const Max = {
  implementation: implementation$g,
  Node: MaxNode
};
const implementation$f = implementNode({
  kind: "maxLength",
  collapsibleKey: "rule",
  hasAssociatedError: true,
  keys: {
    rule: {
      parse: createLengthRuleParser("maxLength")
    }
  },
  reduce: (inner, $) => inner.rule === 0 ? $.node("exactLength", inner) : void 0,
  normalize: createLengthSchemaNormalizer("maxLength"),
  defaults: {
    description: (node2) => `at most length ${node2.rule}`,
    actual: (data) => `${data.length}`
  },
  intersections: {
    maxLength: (l, r) => l.isStricterThan(r) ? l : r,
    minLength: (max, min, ctx) => max.overlapsRange(min) ? max.overlapIsUnit(min) ? ctx.$.node("exactLength", { rule: max.rule }) : null : Disjoint.init("range", max, min)
  }
});
class MaxLengthNode extends BaseRange {
  impliedBasis = $ark.intrinsic.lengthBoundable.internal;
  traverseAllows = (data) => data.length <= this.rule;
  reduceJsonSchema(schema) {
    switch (schema.type) {
      case "string":
        schema.maxLength = this.rule;
        return schema;
      case "array":
        schema.maxItems = this.rule;
        return schema;
      default:
        return ToJsonSchema.throwInternalOperandError("maxLength", schema);
    }
  }
}
const MaxLength = {
  implementation: implementation$f,
  Node: MaxLengthNode
};
const implementation$e = implementNode({
  kind: "min",
  collapsibleKey: "rule",
  hasAssociatedError: true,
  keys: {
    rule: {},
    exclusive: parseExclusiveKey
  },
  normalize: (schema) => typeof schema === "number" ? { rule: schema } : schema,
  defaults: {
    description: (node2) => {
      if (node2.rule === 0)
        return node2.exclusive ? "positive" : "non-negative";
      return `${node2.exclusive ? "more than" : "at least"} ${node2.rule}`;
    }
  },
  intersections: {
    min: (l, r) => l.isStricterThan(r) ? l : r
  },
  obviatesBasisDescription: true
});
class MinNode extends BaseRange {
  impliedBasis = $ark.intrinsic.number.internal;
  traverseAllows = this.exclusive ? (data) => data > this.rule : (data) => data >= this.rule;
  reduceJsonSchema(schema) {
    if (this.exclusive)
      schema.exclusiveMinimum = this.rule;
    else
      schema.minimum = this.rule;
    return schema;
  }
}
const Min = {
  implementation: implementation$e,
  Node: MinNode
};
const implementation$d = implementNode({
  kind: "minLength",
  collapsibleKey: "rule",
  hasAssociatedError: true,
  keys: {
    rule: {
      parse: createLengthRuleParser("minLength")
    }
  },
  reduce: (inner) => inner.rule === 0 ? (
    // a minimum length of zero is trivially satisfied
    $ark.intrinsic.unknown
  ) : void 0,
  normalize: createLengthSchemaNormalizer("minLength"),
  defaults: {
    description: (node2) => node2.rule === 1 ? "non-empty" : `at least length ${node2.rule}`,
    // avoid default message like "must be non-empty (was 0)"
    actual: (data) => data.length === 0 ? "" : `${data.length}`
  },
  intersections: {
    minLength: (l, r) => l.isStricterThan(r) ? l : r
  }
});
class MinLengthNode extends BaseRange {
  impliedBasis = $ark.intrinsic.lengthBoundable.internal;
  traverseAllows = (data) => data.length >= this.rule;
  reduceJsonSchema(schema) {
    switch (schema.type) {
      case "string":
        schema.minLength = this.rule;
        return schema;
      case "array":
        schema.minItems = this.rule;
        return schema;
      default:
        return ToJsonSchema.throwInternalOperandError("minLength", schema);
    }
  }
}
const MinLength = {
  implementation: implementation$d,
  Node: MinLengthNode
};
const boundImplementationsByKind = {
  min: Min.implementation,
  max: Max.implementation,
  minLength: MinLength.implementation,
  maxLength: MaxLength.implementation,
  exactLength: ExactLength.implementation,
  after: After.implementation,
  before: Before.implementation
};
const boundClassesByKind = {
  min: Min.Node,
  max: Max.Node,
  minLength: MinLength.Node,
  maxLength: MaxLength.Node,
  exactLength: ExactLength.Node,
  after: After.Node,
  before: Before.Node
};
const implementation$c = implementNode({
  kind: "pattern",
  collapsibleKey: "rule",
  keys: {
    rule: {},
    flags: {}
  },
  normalize: (schema) => typeof schema === "string" ? { rule: schema } : schema instanceof RegExp ? schema.flags ? { rule: schema.source, flags: schema.flags } : { rule: schema.source } : schema,
  obviatesBasisDescription: true,
  obviatesBasisExpression: true,
  hasAssociatedError: true,
  intersectionIsOpen: true,
  defaults: {
    description: (node2) => `matched by ${node2.rule}`
  },
  intersections: {
    // for now, non-equal regex are naively intersected:
    // https://github.com/arktypeio/arktype/issues/853
    pattern: () => null
  }
});
class PatternNode extends InternalPrimitiveConstraint {
  instance = new RegExp(this.rule, this.flags);
  expression = `${this.instance}`;
  traverseAllows = this.instance.test.bind(this.instance);
  compiledCondition = `${this.expression}.test(data)`;
  compiledNegation = `!${this.compiledCondition}`;
  impliedBasis = $ark.intrinsic.string.internal;
  reduceJsonSchema(base, ctx) {
    if (base.pattern) {
      return ctx.fallback.patternIntersection({
        code: "patternIntersection",
        base,
        pattern: this.rule
      });
    }
    base.pattern = this.rule;
    return base;
  }
}
const Pattern = {
  implementation: implementation$c,
  Node: PatternNode
};
const schemaKindOf = (schema, allowedKinds) => {
  const kind = discriminateRootKind(schema);
  if (allowedKinds && !allowedKinds.includes(kind)) {
    return throwParseError(`Root of kind ${kind} should be one of ${allowedKinds}`);
  }
  return kind;
};
const discriminateRootKind = (schema) => {
  if (hasArkKind(schema, "root"))
    return schema.kind;
  if (typeof schema === "string") {
    return schema[0] === "$" ? "alias" : schema in domainDescriptions ? "domain" : "proto";
  }
  if (typeof schema === "function")
    return "proto";
  if (typeof schema !== "object" || schema === null)
    return throwParseError(writeInvalidSchemaMessage(schema));
  if ("morphs" in schema)
    return "morph";
  if ("branches" in schema || isArray(schema))
    return "union";
  if ("unit" in schema)
    return "unit";
  if ("reference" in schema)
    return "alias";
  const schemaKeys = Object.keys(schema);
  if (schemaKeys.length === 0 || schemaKeys.some((k) => k in constraintKeys))
    return "intersection";
  if ("proto" in schema)
    return "proto";
  if ("domain" in schema)
    return "domain";
  return throwParseError(writeInvalidSchemaMessage(schema));
};
const writeInvalidSchemaMessage = (schema) => `${printable(schema)} is not a valid type schema`;
const nodeCountsByPrefix = {};
const serializeListableChild = (listableNode) => isArray(listableNode) ? listableNode.map((node2) => node2.collapsibleJson) : listableNode.collapsibleJson;
const nodesByRegisteredId = {};
$ark.nodesByRegisteredId = nodesByRegisteredId;
const registerNodeId = (prefix) => {
  nodeCountsByPrefix[prefix] ??= 0;
  return `${prefix}${++nodeCountsByPrefix[prefix]}`;
};
const parseNode = (ctx) => {
  const impl = nodeImplementationsByKind[ctx.kind];
  const configuredSchema = impl.applyConfig?.(ctx.def, ctx.$.resolvedConfig) ?? ctx.def;
  const inner = {};
  const { meta: metaSchema, ...innerSchema } = configuredSchema;
  const meta = metaSchema === void 0 ? {} : typeof metaSchema === "string" ? { description: metaSchema } : metaSchema;
  const innerSchemaEntries = entriesOf(innerSchema).sort(([lKey], [rKey]) => isNodeKind(lKey) ? isNodeKind(rKey) ? precedenceOfKind(lKey) - precedenceOfKind(rKey) : 1 : isNodeKind(rKey) ? -1 : lKey < rKey ? -1 : 1).filter(([k, v]) => {
    if (k.startsWith("meta.")) {
      const metaKey = k.slice(5);
      meta[metaKey] = v;
      return false;
    }
    return true;
  });
  for (const entry of innerSchemaEntries) {
    const k = entry[0];
    const keyImpl = impl.keys[k];
    if (!keyImpl)
      return throwParseError(`Key ${k} is not valid on ${ctx.kind} schema`);
    const v = keyImpl.parse ? keyImpl.parse(entry[1], ctx) : entry[1];
    if (v !== unset && (v !== void 0 || keyImpl.preserveUndefined))
      inner[k] = v;
  }
  if (impl.reduce && !ctx.prereduced) {
    const reduced = impl.reduce(inner, ctx.$);
    if (reduced) {
      if (reduced instanceof Disjoint)
        return reduced.throw();
      return withMeta(reduced, meta);
    }
  }
  const node2 = createNode({
    id: ctx.id,
    kind: ctx.kind,
    inner,
    meta,
    $: ctx.$
  });
  return node2;
};
const createNode = ({ id, kind, inner, meta, $, ignoreCache }) => {
  const impl = nodeImplementationsByKind[kind];
  const innerEntries = entriesOf(inner);
  const children = [];
  let innerJson = {};
  for (const [k, v] of innerEntries) {
    const keyImpl = impl.keys[k];
    const serialize = keyImpl.serialize ?? (keyImpl.child ? serializeListableChild : defaultValueSerializer);
    innerJson[k] = serialize(v);
    if (keyImpl.child === true) {
      const listableNode = v;
      if (isArray(listableNode))
        children.push(...listableNode);
      else
        children.push(listableNode);
    } else if (typeof keyImpl.child === "function")
      children.push(...keyImpl.child(v));
  }
  if (impl.finalizeInnerJson)
    innerJson = impl.finalizeInnerJson(innerJson);
  let json2 = { ...innerJson };
  let metaJson = {};
  if (!isEmptyObject(meta)) {
    metaJson = flatMorph(meta, (k, v) => [
      k,
      k === "examples" ? v : defaultValueSerializer(v)
    ]);
    json2.meta = possiblyCollapse(metaJson, "description", true);
  }
  innerJson = possiblyCollapse(innerJson, impl.collapsibleKey, false);
  const innerHash = JSON.stringify({ kind, ...innerJson });
  json2 = possiblyCollapse(json2, impl.collapsibleKey, false);
  const collapsibleJson = possiblyCollapse(json2, impl.collapsibleKey, true);
  const hash = JSON.stringify({ kind, ...json2 });
  if ($.nodesByHash[hash] && !ignoreCache)
    return $.nodesByHash[hash];
  const attachments = {
    id,
    kind,
    impl,
    inner,
    innerEntries,
    innerJson,
    innerHash,
    meta,
    metaJson,
    json: json2,
    hash,
    collapsibleJson,
    children
  };
  if (kind !== "intersection") {
    for (const k in inner)
      if (k !== "in" && k !== "out")
        attachments[k] = inner[k];
  }
  const node2 = new nodeClassesByKind[kind](attachments, $);
  return $.nodesByHash[hash] = node2;
};
const withId = (node2, id) => {
  if (node2.id === id)
    return node2;
  if (isNode(nodesByRegisteredId[id]))
    throwInternalError(`Unexpected attempt to overwrite node id ${id}`);
  return createNode({
    id,
    kind: node2.kind,
    inner: node2.inner,
    meta: node2.meta,
    $: node2.$,
    ignoreCache: true
  });
};
const withMeta = (node2, meta, id) => {
  return createNode({
    id: registerNodeId(meta.alias ?? node2.kind),
    kind: node2.kind,
    inner: node2.inner,
    meta,
    $: node2.$
  });
};
const possiblyCollapse = (json2, toKey, allowPrimitive) => {
  const collapsibleKeys = Object.keys(json2);
  if (collapsibleKeys.length === 1 && collapsibleKeys[0] === toKey) {
    const collapsed = json2[toKey];
    if (allowPrimitive)
      return collapsed;
    if (
      // if the collapsed value is still an object
      hasDomain(collapsed, "object") && // and the JSON did not include any implied keys
      (Object.keys(collapsed).length === 1 || Array.isArray(collapsed))
    ) {
      return collapsed;
    }
  }
  return json2;
};
const intersectProps = (l, r, ctx) => {
  if (l.key !== r.key)
    return null;
  const key = l.key;
  let value2 = intersectOrPipeNodes(l.value, r.value, ctx);
  const kind = l.required || r.required ? "required" : "optional";
  if (value2 instanceof Disjoint) {
    if (kind === "optional")
      value2 = $ark.intrinsic.never.internal;
    else {
      return value2.withPrefixKey(l.key, l.required && r.required ? "required" : "optional");
    }
  }
  if (kind === "required") {
    return ctx.$.node("required", {
      key,
      value: value2
    });
  }
  const defaultIntersection = l.hasDefault() ? r.hasDefault() ? l.default === r.default ? l.default : throwParseError(writeDefaultIntersectionMessage(l.default, r.default)) : l.default : r.hasDefault() ? r.default : unset;
  return ctx.$.node("optional", {
    key,
    value: value2,
    // unset is stripped during parsing
    default: defaultIntersection
  });
};
class BaseProp extends BaseConstraint {
  required = this.kind === "required";
  optional = this.kind === "optional";
  impliedBasis = $ark.intrinsic.object.internal;
  serializedKey = compileSerializedValue(this.key);
  compiledKey = typeof this.key === "string" ? this.key : this.serializedKey;
  flatRefs = append(this.value.flatRefs.map((ref) => flatRef([this.key, ...ref.path], ref.node)), flatRef([this.key], this.value));
  _transform(mapper, ctx) {
    ctx.path.push(this.key);
    const result = super._transform(mapper, ctx);
    ctx.path.pop();
    return result;
  }
  hasDefault() {
    return "default" in this.inner;
  }
  traverseAllows = (data, ctx) => {
    if (this.key in data) {
      return traverseKey(this.key, () => this.value.traverseAllows(data[this.key], ctx), ctx);
    }
    return this.optional;
  };
  traverseApply = (data, ctx) => {
    if (this.key in data) {
      traverseKey(this.key, () => this.value.traverseApply(data[this.key], ctx), ctx);
    } else if (this.hasKind("required"))
      ctx.errorFromNodeContext(this.errorContext);
  };
  compile(js) {
    js.if(`${this.serializedKey} in data`, () => js.traverseKey(this.serializedKey, `data${js.prop(this.key)}`, this.value));
    if (this.hasKind("required")) {
      js.else(() => js.traversalKind === "Apply" ? js.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`) : js.return(false));
    }
    if (js.traversalKind === "Allows")
      js.return(true);
  }
}
const writeDefaultIntersectionMessage = (lValue, rValue) => `Invalid intersection of default values ${printable(lValue)} & ${printable(rValue)}`;
const implementation$b = implementNode({
  kind: "optional",
  hasAssociatedError: false,
  intersectionIsOpen: true,
  keys: {
    key: {},
    value: {
      child: true,
      parse: (schema, ctx) => ctx.$.parseSchema(schema)
    },
    default: {
      preserveUndefined: true
    }
  },
  normalize: (schema) => schema,
  reduce: (inner, $) => {
    if ($.resolvedConfig.exactOptionalPropertyTypes === false) {
      if (!inner.value.allows(void 0)) {
        return $.node("optional", { ...inner, value: inner.value.or(intrinsic.undefined) }, { prereduced: true });
      }
    }
  },
  defaults: {
    description: (node2) => `${node2.compiledKey}?: ${node2.value.description}`
  },
  intersections: {
    optional: intersectProps
  }
});
class OptionalNode extends BaseProp {
  constructor(...args) {
    super(...args);
    if ("default" in this.inner)
      assertDefaultValueAssignability(this.value, this.inner.default, this.key);
  }
  get rawIn() {
    const baseIn = super.rawIn;
    if (!this.hasDefault())
      return baseIn;
    return this.$.node("optional", omit(baseIn.inner, { default: true }), {
      prereduced: true
    });
  }
  get outProp() {
    if (!this.hasDefault())
      return this;
    const { default: defaultValue, ...requiredInner } = this.inner;
    return this.cacheGetter("outProp", this.$.node("required", requiredInner, { prereduced: true }));
  }
  expression = this.hasDefault() ? `${this.compiledKey}: ${this.value.expression} = ${printable(this.inner.default)}` : `${this.compiledKey}?: ${this.value.expression}`;
  defaultValueMorph = getDefaultableMorph(this);
  defaultValueMorphRef = this.defaultValueMorph && registeredReference(this.defaultValueMorph);
}
const Optional = {
  implementation: implementation$b,
  Node: OptionalNode
};
const defaultableMorphCache = {};
const getDefaultableMorph = (node2) => {
  if (!node2.hasDefault())
    return;
  const cacheKey = `{${node2.compiledKey}: ${node2.value.id} = ${defaultValueSerializer(node2.default)}}`;
  return defaultableMorphCache[cacheKey] ??= computeDefaultValueMorph(node2.key, node2.value, node2.default);
};
const computeDefaultValueMorph = (key, value2, defaultInput) => {
  if (typeof defaultInput === "function") {
    return value2.includesTransform ? (data, ctx) => {
      traverseKey(key, () => value2(data[key] = defaultInput(), ctx), ctx);
      return data;
    } : (data) => {
      data[key] = defaultInput();
      return data;
    };
  }
  const precomputedMorphedDefault = value2.includesTransform ? value2.assert(defaultInput) : defaultInput;
  return hasDomain(precomputedMorphedDefault, "object") ? (
    // the type signature only allows this if the value was morphed
    ((data, ctx) => {
      traverseKey(key, () => value2(data[key] = defaultInput, ctx), ctx);
      return data;
    })
  ) : (data) => {
    data[key] = precomputedMorphedDefault;
    return data;
  };
};
const assertDefaultValueAssignability = (node2, value2, key) => {
  const wrapped = isThunk(value2);
  if (hasDomain(value2, "object") && !wrapped)
    throwParseError(writeNonPrimitiveNonFunctionDefaultValueMessage(key));
  const out = node2.in(wrapped ? value2() : value2);
  if (out instanceof ArkErrors) {
    if (key === null) {
      throwParseError(`Default ${out.summary}`);
    }
    const atPath = out.transform((e) => e.transform((input) => ({ ...input, prefixPath: [key] })));
    throwParseError(`Default for ${atPath.summary}`);
  }
  return value2;
};
const writeNonPrimitiveNonFunctionDefaultValueMessage = (key) => {
  const keyDescription = key === null ? "" : typeof key === "number" ? `for value at [${key}] ` : `for ${compileSerializedValue(key)} `;
  return `Non-primitive default ${keyDescription}must be specified as a function like () => ({my: 'object'})`;
};
class BaseRoot extends BaseNode {
  constructor(attachments, $) {
    super(attachments, $);
    Object.defineProperty(this, arkKind, { value: "root", enumerable: false });
  }
  // doesn't seem possible to override this at a type-level (e.g. via declare)
  // without TS complaining about getters
  get rawIn() {
    return super.rawIn;
  }
  get rawOut() {
    return super.rawOut;
  }
  get internal() {
    return this;
  }
  get "~standard"() {
    return {
      vendor: "arktype",
      version: 1,
      validate: (input) => {
        const out = this(input);
        if (out instanceof ArkErrors)
          return out;
        return { value: out };
      },
      jsonSchema: {
        input: (opts) => this.rawIn.toJsonSchema({
          target: validateStandardJsonSchemaTarget(opts.target),
          ...opts.libraryOptions
        }),
        output: (opts) => this.rawOut.toJsonSchema({
          target: validateStandardJsonSchemaTarget(opts.target),
          ...opts.libraryOptions
        })
      }
    };
  }
  as() {
    return this;
  }
  brand(name) {
    if (name === "")
      return throwParseError(emptyBrandNameMessage);
    return this;
  }
  readonly() {
    return this;
  }
  branches = this.hasKind("union") ? this.inner.branches : [this];
  distribute(mapBranch, reduceMapped) {
    const mappedBranches = this.branches.map(mapBranch);
    return reduceMapped?.(mappedBranches) ?? mappedBranches;
  }
  get shortDescription() {
    return this.meta.description ?? this.defaultShortDescription;
  }
  toJsonSchema(opts = {}) {
    const ctx = mergeToJsonSchemaConfigs(this.$.resolvedConfig.toJsonSchema, opts);
    ctx.useRefs ||= this.isCyclic;
    const schema = typeof ctx.dialect === "string" ? { $schema: ctx.dialect } : {};
    Object.assign(schema, this.toJsonSchemaRecurse(ctx));
    if (ctx.useRefs) {
      const defs = flatMorph(this.references, (i, ref) => ref.isRoot() && !ref.alwaysExpandJsonSchema ? [ref.id, ref.toResolvedJsonSchema(ctx)] : []);
      if (ctx.target === "draft-07")
        Object.assign(schema, { definitions: defs });
      else
        schema.$defs = defs;
    }
    return schema;
  }
  toJsonSchemaRecurse(ctx) {
    if (ctx.useRefs && !this.alwaysExpandJsonSchema) {
      const defsKey = ctx.target === "draft-07" ? "definitions" : "$defs";
      return { $ref: `#/${defsKey}/${this.id}` };
    }
    return this.toResolvedJsonSchema(ctx);
  }
  get alwaysExpandJsonSchema() {
    return this.isBasis() || this.kind === "alias" || this.hasKind("union") && this.isBoolean;
  }
  toResolvedJsonSchema(ctx) {
    const result = this.innerToJsonSchema(ctx);
    return Object.assign(result, this.metaJson);
  }
  intersect(r) {
    const rNode = this.$.parseDefinition(r);
    const result = this.rawIntersect(rNode);
    if (result instanceof Disjoint)
      return result;
    return this.$.finalize(result);
  }
  rawIntersect(r) {
    return intersectNodesRoot(this, r, this.$);
  }
  toNeverIfDisjoint() {
    return this;
  }
  and(r) {
    const result = this.intersect(r);
    return result instanceof Disjoint ? result.throw() : result;
  }
  rawAnd(r) {
    const result = this.rawIntersect(r);
    return result instanceof Disjoint ? result.throw() : result;
  }
  or(r) {
    const rNode = this.$.parseDefinition(r);
    return this.$.finalize(this.rawOr(rNode));
  }
  rawOr(r) {
    const branches = [...this.branches, ...r.branches];
    return this.$.node("union", branches);
  }
  map(flatMapEntry) {
    return this.$.schema(this.applyStructuralOperation("map", [flatMapEntry]));
  }
  pick(...keys) {
    return this.$.schema(this.applyStructuralOperation("pick", keys));
  }
  omit(...keys) {
    return this.$.schema(this.applyStructuralOperation("omit", keys));
  }
  required() {
    return this.$.schema(this.applyStructuralOperation("required", []));
  }
  partial() {
    return this.$.schema(this.applyStructuralOperation("partial", []));
  }
  _keyof;
  keyof() {
    if (this._keyof)
      return this._keyof;
    const result = this.applyStructuralOperation("keyof", []).reduce((result2, branch) => result2.intersect(branch).toNeverIfDisjoint(), $ark.intrinsic.unknown.internal);
    if (result.branches.length === 0) {
      throwParseError(writeUnsatisfiableExpressionError(`keyof ${this.expression}`));
    }
    return this._keyof = this.$.finalize(result);
  }
  get props() {
    if (this.branches.length !== 1)
      return throwParseError(writeLiteralUnionEntriesMessage(this.expression));
    return [...this.applyStructuralOperation("props", [])[0]];
  }
  merge(r) {
    const rNode = this.$.parseDefinition(r);
    return this.$.schema(rNode.distribute((branch) => this.applyStructuralOperation("merge", [
      structureOf(branch) ?? throwParseError(writeNonStructuralOperandMessage("merge", branch.expression))
    ])));
  }
  applyStructuralOperation(operation, args) {
    return this.distribute((branch) => {
      if (branch.equals($ark.intrinsic.object) && operation !== "merge")
        return branch;
      const structure = structureOf(branch);
      if (!structure) {
        throwParseError(writeNonStructuralOperandMessage(operation, branch.expression));
      }
      if (operation === "keyof")
        return structure.keyof();
      if (operation === "get")
        return structure.get(...args);
      if (operation === "props")
        return structure.props;
      const structuralMethodName = operation === "required" ? "require" : operation === "partial" ? "optionalize" : operation;
      return this.$.node("intersection", {
        domain: "object",
        structure: structure[structuralMethodName](...args)
      });
    });
  }
  get(...path) {
    if (path[0] === void 0)
      return this;
    return this.$.schema(this.applyStructuralOperation("get", path));
  }
  extract(r) {
    const rNode = this.$.parseDefinition(r);
    return this.$.schema(this.branches.filter((branch) => branch.extends(rNode)));
  }
  exclude(r) {
    const rNode = this.$.parseDefinition(r);
    return this.$.schema(this.branches.filter((branch) => !branch.extends(rNode)));
  }
  array() {
    return this.$.schema(this.isUnknown() ? { proto: Array } : {
      proto: Array,
      sequence: this
    }, { prereduced: true });
  }
  overlaps(r) {
    const intersection = this.intersect(r);
    return !(intersection instanceof Disjoint);
  }
  extends(r) {
    if (this.isNever())
      return true;
    const intersection = this.intersect(r);
    return !(intersection instanceof Disjoint) && this.equals(intersection);
  }
  ifExtends(r) {
    return this.extends(r) ? this : void 0;
  }
  subsumes(r) {
    const rNode = this.$.parseDefinition(r);
    return rNode.extends(this);
  }
  configure(meta, selector = "shallow") {
    return this.configureReferences(meta, selector);
  }
  describe(description, selector = "shallow") {
    return this.configure({ description }, selector);
  }
  // these should ideally be implemented in arktype since they use its syntax
  // https://github.com/arktypeio/arktype/issues/1223
  optional() {
    return [this, "?"];
  }
  // these should ideally be implemented in arktype since they use its syntax
  // https://github.com/arktypeio/arktype/issues/1223
  default(thunkableValue) {
    assertDefaultValueAssignability(this, thunkableValue, null);
    return [this, "=", thunkableValue];
  }
  from(input) {
    return this.assert(input);
  }
  _pipe(...morphs) {
    const result = morphs.reduce((acc, morph) => acc.rawPipeOnce(morph), this);
    return this.$.finalize(result);
  }
  tryPipe(...morphs) {
    const result = morphs.reduce((acc, morph) => acc.rawPipeOnce(hasArkKind(morph, "root") ? morph : ((In, ctx) => {
      try {
        return morph(In, ctx);
      } catch (e) {
        return ctx.error({
          code: "predicate",
          predicate: morph,
          actual: `aborted due to error:
    ${e}
`
        });
      }
    })), this);
    return this.$.finalize(result);
  }
  pipe = Object.assign(this._pipe.bind(this), {
    try: this.tryPipe.bind(this)
  });
  to(def) {
    return this.$.finalize(this.toNode(this.$.parseDefinition(def)));
  }
  toNode(root) {
    const result = pipeNodesRoot(this, root, this.$);
    if (result instanceof Disjoint)
      return result.throw();
    return result;
  }
  rawPipeOnce(morph) {
    if (hasArkKind(morph, "root"))
      return this.toNode(morph);
    return this.distribute((branch) => branch.hasKind("morph") ? this.$.node("morph", {
      in: branch.inner.in,
      morphs: [...branch.morphs, morph]
    }) : this.$.node("morph", {
      in: branch,
      morphs: [morph]
    }), this.$.parseSchema);
  }
  narrow(predicate) {
    return this.constrainOut("predicate", predicate);
  }
  constrain(kind, schema) {
    return this._constrain("root", kind, schema);
  }
  constrainIn(kind, schema) {
    return this._constrain("in", kind, schema);
  }
  constrainOut(kind, schema) {
    return this._constrain("out", kind, schema);
  }
  _constrain(io, kind, schema) {
    const constraint = this.$.node(kind, schema);
    if (constraint.isRoot()) {
      return constraint.isUnknown() ? this : throwInternalError(`Unexpected constraint node ${constraint}`);
    }
    const operand = io === "root" ? this : io === "in" ? this.rawIn : this.rawOut;
    if (operand.hasKind("morph") || constraint.impliedBasis && !operand.extends(constraint.impliedBasis)) {
      return throwInvalidOperandError(kind, constraint.impliedBasis, this);
    }
    const partialIntersection = this.$.node("intersection", {
      // important this is constraint.kind instead of kind in case
      // the node was reduced during parsing
      [constraint.kind]: constraint
    });
    const result = io === "out" ? pipeNodesRoot(this, partialIntersection, this.$) : intersectNodesRoot(this, partialIntersection, this.$);
    if (result instanceof Disjoint)
      result.throw();
    return this.$.finalize(result);
  }
  onUndeclaredKey(cfg) {
    const rule = typeof cfg === "string" ? cfg : cfg.rule;
    const deep = typeof cfg === "string" ? false : cfg.deep;
    return this.$.finalize(this.transform((kind, inner) => kind === "structure" ? rule === "ignore" ? omit(inner, { undeclared: 1 }) : { ...inner, undeclared: rule } : inner, deep ? void 0 : { shouldTransform: (node2) => !includes(structuralKinds, node2.kind) }));
  }
  hasEqualMorphs(r) {
    if (!this.includesTransform && !r.includesTransform)
      return true;
    if (!arrayEquals(this.shallowMorphs, r.shallowMorphs))
      return false;
    if (!arrayEquals(this.flatMorphs, r.flatMorphs, {
      isEqual: (l, r2) => l.propString === r2.propString && (l.node.hasKind("morph") && r2.node.hasKind("morph") ? l.node.hasEqualMorphs(r2.node) : l.node.hasKind("intersection") && r2.node.hasKind("intersection") ? l.node.structure?.structuralMorphRef === r2.node.structure?.structuralMorphRef : false)
    }))
      return false;
    return true;
  }
  onDeepUndeclaredKey(behavior) {
    return this.onUndeclaredKey({ rule: behavior, deep: true });
  }
  filter(predicate) {
    return this.constrainIn("predicate", predicate);
  }
  divisibleBy(schema) {
    return this.constrain("divisor", schema);
  }
  matching(schema) {
    return this.constrain("pattern", schema);
  }
  atLeast(schema) {
    return this.constrain("min", schema);
  }
  atMost(schema) {
    return this.constrain("max", schema);
  }
  moreThan(schema) {
    return this.constrain("min", exclusivizeRangeSchema(schema));
  }
  lessThan(schema) {
    return this.constrain("max", exclusivizeRangeSchema(schema));
  }
  atLeastLength(schema) {
    return this.constrain("minLength", schema);
  }
  atMostLength(schema) {
    return this.constrain("maxLength", schema);
  }
  moreThanLength(schema) {
    return this.constrain("minLength", exclusivizeRangeSchema(schema));
  }
  lessThanLength(schema) {
    return this.constrain("maxLength", exclusivizeRangeSchema(schema));
  }
  exactlyLength(schema) {
    return this.constrain("exactLength", schema);
  }
  atOrAfter(schema) {
    return this.constrain("after", schema);
  }
  atOrBefore(schema) {
    return this.constrain("before", schema);
  }
  laterThan(schema) {
    return this.constrain("after", exclusivizeRangeSchema(schema));
  }
  earlierThan(schema) {
    return this.constrain("before", exclusivizeRangeSchema(schema));
  }
}
const emptyBrandNameMessage = `Expected a non-empty brand name after #`;
const supportedJsonSchemaTargets = [
  "draft-2020-12",
  "draft-07"
];
const writeInvalidJsonSchemaTargetMessage = (target) => `JSONSchema target '${target}' is not supported (must be ${supportedJsonSchemaTargets.map((t) => `"${t}"`).join(" or ")})`;
const validateStandardJsonSchemaTarget = (target) => {
  if (!includes(supportedJsonSchemaTargets, target))
    throwParseError(writeInvalidJsonSchemaTargetMessage(target));
  return target;
};
const exclusivizeRangeSchema = (schema) => typeof schema === "object" && !(schema instanceof Date) ? { ...schema, exclusive: true } : {
  rule: schema,
  exclusive: true
};
const typeOrTermExtends = (t, base) => hasArkKind(base, "root") ? hasArkKind(t, "root") ? t.extends(base) : base.allows(t) : hasArkKind(t, "root") ? t.hasUnit(base) : base === t;
const structureOf = (branch) => {
  if (branch.hasKind("morph"))
    return null;
  if (branch.hasKind("intersection")) {
    return branch.inner.structure ?? (branch.basis?.domain === "object" ? branch.$.bindReference($ark.intrinsic.emptyStructure) : null);
  }
  if (branch.isBasis() && branch.domain === "object")
    return branch.$.bindReference($ark.intrinsic.emptyStructure);
  return null;
};
const writeLiteralUnionEntriesMessage = (expression) => `Props cannot be extracted from a union. Use .distribute to extract props from each branch instead. Received:
${expression}`;
const writeNonStructuralOperandMessage = (operation, operand) => `${operation} operand must be an object (was ${operand})`;
const defineRightwardIntersections = (kind, implementation2) => flatMorph(schemaKindsRightOf(kind), (i, kind2) => [
  kind2,
  implementation2
]);
const normalizeAliasSchema = (schema) => typeof schema === "string" ? { reference: schema } : schema;
const neverIfDisjoint = (result) => result instanceof Disjoint ? $ark.intrinsic.never.internal : result;
const implementation$a = implementNode({
  kind: "alias",
  hasAssociatedError: false,
  collapsibleKey: "reference",
  keys: {
    reference: {
      serialize: (s) => s.startsWith("$") ? s : `$ark.${s}`
    },
    resolve: {}
  },
  normalize: normalizeAliasSchema,
  defaults: {
    description: (node2) => node2.reference
  },
  intersections: {
    alias: (l, r, ctx) => ctx.$.lazilyResolve(() => neverIfDisjoint(intersectOrPipeNodes(l.resolution, r.resolution, ctx)), `${l.reference}${ctx.pipe ? "=>" : "&"}${r.reference}`),
    ...defineRightwardIntersections("alias", (l, r, ctx) => {
      if (r.isUnknown())
        return l;
      if (r.isNever())
        return r;
      if (r.isBasis() && !r.overlaps($ark.intrinsic.object)) {
        return Disjoint.init("assignability", $ark.intrinsic.object, r);
      }
      return ctx.$.lazilyResolve(() => neverIfDisjoint(intersectOrPipeNodes(l.resolution, r, ctx)), `${l.reference}${ctx.pipe ? "=>" : "&"}${r.id}`);
    })
  }
});
class AliasNode extends BaseRoot {
  expression = this.reference;
  structure = void 0;
  get resolution() {
    const result = this._resolve();
    return nodesByRegisteredId[this.id] = result;
  }
  _resolve() {
    if (this.resolve)
      return this.resolve();
    if (this.reference[0] === "$")
      return this.$.resolveRoot(this.reference.slice(1));
    const id = this.reference;
    let resolution = nodesByRegisteredId[id];
    const seen = [];
    while (hasArkKind(resolution, "context")) {
      if (seen.includes(resolution.id)) {
        return throwParseError(writeShallowCycleErrorMessage(resolution.id, seen));
      }
      seen.push(resolution.id);
      resolution = nodesByRegisteredId[resolution.id];
    }
    if (!hasArkKind(resolution, "root")) {
      return throwInternalError(`Unexpected resolution for reference ${this.reference}
Seen: [${seen.join("->")}] 
Resolution: ${printable(resolution)}`);
    }
    return resolution;
  }
  get resolutionId() {
    if (this.reference.includes("&") || this.reference.includes("=>"))
      return this.resolution.id;
    if (this.reference[0] !== "$")
      return this.reference;
    const alias = this.reference.slice(1);
    const resolution = this.$.resolutions[alias];
    if (typeof resolution === "string")
      return resolution;
    if (hasArkKind(resolution, "root"))
      return resolution.id;
    return throwInternalError(`Unexpected resolution for reference ${this.reference}: ${printable(resolution)}`);
  }
  get defaultShortDescription() {
    return domainDescriptions.object;
  }
  innerToJsonSchema(ctx) {
    return this.resolution.toJsonSchemaRecurse(ctx);
  }
  traverseAllows = (data, ctx) => {
    const seen = ctx.seen[this.reference];
    if (seen?.includes(data))
      return true;
    ctx.seen[this.reference] = append(seen, data);
    return this.resolution.traverseAllows(data, ctx);
  };
  traverseApply = (data, ctx) => {
    const seen = ctx.seen[this.reference];
    if (seen?.includes(data))
      return;
    ctx.seen[this.reference] = append(seen, data);
    this.resolution.traverseApply(data, ctx);
  };
  compile(js) {
    const id = this.resolutionId;
    js.if(`ctx.seen.${id} && ctx.seen.${id}.includes(data)`, () => js.return(true));
    js.if(`!ctx.seen.${id}`, () => js.line(`ctx.seen.${id} = []`));
    js.line(`ctx.seen.${id}.push(data)`);
    js.return(js.invoke(id));
  }
}
const writeShallowCycleErrorMessage = (name, seen) => `Alias '${name}' has a shallow resolution cycle: ${[...seen, name].join("->")}`;
const Alias = {
  implementation: implementation$a,
  Node: AliasNode
};
class InternalBasis extends BaseRoot {
  traverseApply = (data, ctx) => {
    if (!this.traverseAllows(data, ctx))
      ctx.errorFromNodeContext(this.errorContext);
  };
  get errorContext() {
    return {
      code: this.kind,
      description: this.description,
      meta: this.meta,
      ...this.inner
    };
  }
  get compiledErrorContext() {
    return compileObjectLiteral(this.errorContext);
  }
  compile(js) {
    if (js.traversalKind === "Allows")
      js.return(this.compiledCondition);
    else {
      js.if(this.compiledNegation, () => js.line(`ctx.errorFromNodeContext(${this.compiledErrorContext})`));
    }
  }
}
const implementation$9 = implementNode({
  kind: "domain",
  hasAssociatedError: true,
  collapsibleKey: "domain",
  keys: {
    domain: {},
    numberAllowsNaN: {}
  },
  normalize: (schema) => typeof schema === "string" ? { domain: schema } : hasKey(schema, "numberAllowsNaN") && schema.domain !== "number" ? throwParseError(Domain.writeBadAllowNanMessage(schema.domain)) : schema,
  applyConfig: (schema, config) => schema.numberAllowsNaN === void 0 && schema.domain === "number" && config.numberAllowsNaN ? { ...schema, numberAllowsNaN: true } : schema,
  defaults: {
    description: (node2) => domainDescriptions[node2.domain],
    actual: (data) => Number.isNaN(data) ? "NaN" : domainDescriptions[domainOf(data)]
  },
  intersections: {
    domain: (l, r) => (
      // since l === r is handled by default, remaining cases are disjoint
      // outside those including options like numberAllowsNaN
      l.domain === "number" && r.domain === "number" ? l.numberAllowsNaN ? r : l : Disjoint.init("domain", l, r)
    )
  }
});
class DomainNode extends InternalBasis {
  requiresNaNCheck = this.domain === "number" && !this.numberAllowsNaN;
  traverseAllows = this.requiresNaNCheck ? (data) => typeof data === "number" && !Number.isNaN(data) : (data) => domainOf(data) === this.domain;
  compiledCondition = this.domain === "object" ? `((typeof data === "object" && data !== null) || typeof data === "function")` : `typeof data === "${this.domain}"${this.requiresNaNCheck ? " && !Number.isNaN(data)" : ""}`;
  compiledNegation = this.domain === "object" ? `((typeof data !== "object" || data === null) && typeof data !== "function")` : `typeof data !== "${this.domain}"${this.requiresNaNCheck ? " || Number.isNaN(data)" : ""}`;
  expression = this.numberAllowsNaN ? "number | NaN" : this.domain;
  get nestableExpression() {
    return this.numberAllowsNaN ? `(${this.expression})` : this.expression;
  }
  get defaultShortDescription() {
    return domainDescriptions[this.domain];
  }
  innerToJsonSchema(ctx) {
    if (this.domain === "bigint" || this.domain === "symbol") {
      return ctx.fallback.domain({
        code: "domain",
        base: {},
        domain: this.domain
      });
    }
    return {
      type: this.domain
    };
  }
}
const Domain = {
  implementation: implementation$9,
  Node: DomainNode,
  writeBadAllowNanMessage: (actual) => `numberAllowsNaN may only be specified with domain "number" (was ${actual})`
};
const implementation$8 = implementNode({
  kind: "intersection",
  hasAssociatedError: true,
  normalize: (rawSchema) => {
    if (isNode(rawSchema))
      return rawSchema;
    const { structure, ...schema } = rawSchema;
    const hasRootStructureKey = !!structure;
    const normalizedStructure = structure ?? {};
    const normalized = flatMorph(schema, (k, v) => {
      if (isKeyOf(k, structureKeys)) {
        if (hasRootStructureKey) {
          throwParseError(`Flattened structure key ${k} cannot be specified alongside a root 'structure' key.`);
        }
        normalizedStructure[k] = v;
        return [];
      }
      return [k, v];
    });
    if (hasArkKind(normalizedStructure, "constraint") || !isEmptyObject(normalizedStructure))
      normalized.structure = normalizedStructure;
    return normalized;
  },
  finalizeInnerJson: ({ structure, ...rest }) => hasDomain(structure, "object") ? { ...structure, ...rest } : rest,
  keys: {
    domain: {
      child: true,
      parse: (schema, ctx) => ctx.$.node("domain", schema)
    },
    proto: {
      child: true,
      parse: (schema, ctx) => ctx.$.node("proto", schema)
    },
    structure: {
      child: true,
      parse: (schema, ctx) => ctx.$.node("structure", schema),
      serialize: (node2) => {
        if (!node2.sequence?.minLength)
          return node2.collapsibleJson;
        const { sequence, ...structureJson } = node2.collapsibleJson;
        const { minVariadicLength, ...sequenceJson } = sequence;
        const collapsibleSequenceJson = sequenceJson.variadic && Object.keys(sequenceJson).length === 1 ? sequenceJson.variadic : sequenceJson;
        return { ...structureJson, sequence: collapsibleSequenceJson };
      }
    },
    divisor: {
      child: true,
      parse: constraintKeyParser("divisor")
    },
    max: {
      child: true,
      parse: constraintKeyParser("max")
    },
    min: {
      child: true,
      parse: constraintKeyParser("min")
    },
    maxLength: {
      child: true,
      parse: constraintKeyParser("maxLength")
    },
    minLength: {
      child: true,
      parse: constraintKeyParser("minLength")
    },
    exactLength: {
      child: true,
      parse: constraintKeyParser("exactLength")
    },
    before: {
      child: true,
      parse: constraintKeyParser("before")
    },
    after: {
      child: true,
      parse: constraintKeyParser("after")
    },
    pattern: {
      child: true,
      parse: constraintKeyParser("pattern")
    },
    predicate: {
      child: true,
      parse: constraintKeyParser("predicate")
    }
  },
  // leverage reduction logic from intersection and identity to ensure initial
  // parse result is reduced
  reduce: (inner, $) => (
    // we cast union out of the result here since that only occurs when intersecting two sequences
    // that cannot occur when reducing a single intersection schema using unknown
    intersectIntersections({}, inner, {
      $,
      invert: false,
      pipe: false
    })
  ),
  defaults: {
    description: (node2) => {
      if (node2.children.length === 0)
        return "unknown";
      if (node2.structure)
        return node2.structure.description;
      const childDescriptions = [];
      if (node2.basis && !node2.prestructurals.some((r) => r.impl.obviatesBasisDescription))
        childDescriptions.push(node2.basis.description);
      if (node2.prestructurals.length) {
        const sortedRefinementDescriptions = node2.prestructurals.slice().sort((l, r) => l.kind === "min" && r.kind === "max" ? -1 : 0).map((r) => r.description);
        childDescriptions.push(...sortedRefinementDescriptions);
      }
      if (node2.inner.predicate) {
        childDescriptions.push(...node2.inner.predicate.map((p) => p.description));
      }
      return childDescriptions.join(" and ");
    },
    expected: (source) => `  ◦ ${source.errors.map((e) => e.expected).join("\n  ◦ ")}`,
    problem: (ctx) => `(${ctx.actual}) must be...
${ctx.expected}`
  },
  intersections: {
    intersection: (l, r, ctx) => intersectIntersections(l.inner, r.inner, ctx),
    ...defineRightwardIntersections("intersection", (l, r, ctx) => {
      if (l.children.length === 0)
        return r;
      const { domain, proto, ...lInnerConstraints } = l.inner;
      const lBasis = proto ?? domain;
      const basis = lBasis ? intersectOrPipeNodes(lBasis, r, ctx) : r;
      return basis instanceof Disjoint ? basis : l?.basis?.equals(basis) ? (
        // if the basis doesn't change, return the original intesection
        l
      ) : l.$.node("intersection", { ...lInnerConstraints, [basis.kind]: basis }, { prereduced: true });
    })
  }
});
class IntersectionNode extends BaseRoot {
  basis = this.inner.domain ?? this.inner.proto ?? null;
  prestructurals = [];
  refinements = this.children.filter((node2) => {
    if (!node2.isRefinement())
      return false;
    if (includes(prestructuralKinds, node2.kind))
      this.prestructurals.push(node2);
    return true;
  });
  structure = this.inner.structure;
  expression = writeIntersectionExpression(this);
  get shallowMorphs() {
    return this.inner.structure?.structuralMorph ? [this.inner.structure.structuralMorph] : [];
  }
  get defaultShortDescription() {
    return this.basis?.defaultShortDescription ?? "present";
  }
  innerToJsonSchema(ctx) {
    return this.children.reduce(
      // cast is required since TS doesn't know children have compatible schema prerequisites
      (schema, child) => child.isBasis() ? child.toJsonSchemaRecurse(ctx) : child.reduceJsonSchema(schema, ctx),
      {}
    );
  }
  traverseAllows = (data, ctx) => this.children.every((child) => child.traverseAllows(data, ctx));
  traverseApply = (data, ctx) => {
    const errorCount = ctx.currentErrorCount;
    if (this.basis) {
      this.basis.traverseApply(data, ctx);
      if (ctx.currentErrorCount > errorCount)
        return;
    }
    if (this.prestructurals.length) {
      for (let i = 0; i < this.prestructurals.length - 1; i++) {
        this.prestructurals[i].traverseApply(data, ctx);
        if (ctx.failFast && ctx.currentErrorCount > errorCount)
          return;
      }
      this.prestructurals[this.prestructurals.length - 1].traverseApply(data, ctx);
      if (ctx.currentErrorCount > errorCount)
        return;
    }
    if (this.structure) {
      this.structure.traverseApply(data, ctx);
      if (ctx.currentErrorCount > errorCount)
        return;
    }
    if (this.inner.predicate) {
      for (let i = 0; i < this.inner.predicate.length - 1; i++) {
        this.inner.predicate[i].traverseApply(data, ctx);
        if (ctx.failFast && ctx.currentErrorCount > errorCount)
          return;
      }
      this.inner.predicate[this.inner.predicate.length - 1].traverseApply(data, ctx);
    }
  };
  compile(js) {
    if (js.traversalKind === "Allows") {
      for (const child of this.children)
        js.check(child);
      js.return(true);
      return;
    }
    js.initializeErrorCount();
    if (this.basis) {
      js.check(this.basis);
      if (this.children.length > 1)
        js.returnIfFail();
    }
    if (this.prestructurals.length) {
      for (let i = 0; i < this.prestructurals.length - 1; i++) {
        js.check(this.prestructurals[i]);
        js.returnIfFailFast();
      }
      js.check(this.prestructurals[this.prestructurals.length - 1]);
      if (this.structure || this.inner.predicate)
        js.returnIfFail();
    }
    if (this.structure) {
      js.check(this.structure);
      if (this.inner.predicate)
        js.returnIfFail();
    }
    if (this.inner.predicate) {
      for (let i = 0; i < this.inner.predicate.length - 1; i++) {
        js.check(this.inner.predicate[i]);
        js.returnIfFail();
      }
      js.check(this.inner.predicate[this.inner.predicate.length - 1]);
    }
  }
}
const Intersection = {
  implementation: implementation$8,
  Node: IntersectionNode
};
const writeIntersectionExpression = (node2) => {
  if (node2.structure?.expression)
    return node2.structure.expression;
  const basisExpression = node2.basis && !node2.prestructurals.some((n) => n.impl.obviatesBasisExpression) ? node2.basis.nestableExpression : "";
  const refinementsExpression = node2.prestructurals.map((n) => n.expression).join(" & ");
  const fullExpression = `${basisExpression}${basisExpression ? " " : ""}${refinementsExpression}`;
  if (fullExpression === "Array == 0")
    return "[]";
  return fullExpression || "unknown";
};
const intersectIntersections = (l, r, ctx) => {
  const baseInner = {};
  const lBasis = l.proto ?? l.domain;
  const rBasis = r.proto ?? r.domain;
  const basisResult = lBasis ? rBasis ? intersectOrPipeNodes(lBasis, rBasis, ctx) : lBasis : rBasis;
  if (basisResult instanceof Disjoint)
    return basisResult;
  if (basisResult)
    baseInner[basisResult.kind] = basisResult;
  return intersectConstraints({
    kind: "intersection",
    baseInner,
    l: flattenConstraints(l),
    r: flattenConstraints(r),
    roots: [],
    ctx
  });
};
const implementation$7 = implementNode({
  kind: "morph",
  hasAssociatedError: false,
  keys: {
    in: {
      child: true,
      parse: (schema, ctx) => ctx.$.parseSchema(schema)
    },
    morphs: {
      parse: liftArray,
      serialize: (morphs) => morphs.map((m) => hasArkKind(m, "root") ? m.json : registeredReference(m))
    },
    declaredIn: {
      child: false,
      serialize: (node2) => node2.json
    },
    declaredOut: {
      child: false,
      serialize: (node2) => node2.json
    }
  },
  normalize: (schema) => schema,
  defaults: {
    description: (node2) => `a morph from ${node2.rawIn.description} to ${node2.rawOut?.description ?? "unknown"}`
  },
  intersections: {
    morph: (l, r, ctx) => {
      if (!l.hasEqualMorphs(r)) {
        return throwParseError(writeMorphIntersectionMessage(l.expression, r.expression));
      }
      const inTersection = intersectOrPipeNodes(l.rawIn, r.rawIn, ctx);
      if (inTersection instanceof Disjoint)
        return inTersection;
      const baseInner = {
        morphs: l.morphs
      };
      if (l.declaredIn || r.declaredIn) {
        const declaredIn = intersectOrPipeNodes(l.rawIn, r.rawIn, ctx);
        if (declaredIn instanceof Disjoint)
          return declaredIn.throw();
        else
          baseInner.declaredIn = declaredIn;
      }
      if (l.declaredOut || r.declaredOut) {
        const declaredOut = intersectOrPipeNodes(l.rawOut, r.rawOut, ctx);
        if (declaredOut instanceof Disjoint)
          return declaredOut.throw();
        else
          baseInner.declaredOut = declaredOut;
      }
      return inTersection.distribute((inBranch) => ctx.$.node("morph", {
        ...baseInner,
        in: inBranch
      }), ctx.$.parseSchema);
    },
    ...defineRightwardIntersections("morph", (l, r, ctx) => {
      const inTersection = l.inner.in ? intersectOrPipeNodes(l.inner.in, r, ctx) : r;
      return inTersection instanceof Disjoint ? inTersection : inTersection.equals(l.inner.in) ? l : ctx.$.node("morph", {
        ...l.inner,
        in: inTersection
      });
    })
  }
});
class MorphNode extends BaseRoot {
  serializedMorphs = this.morphs.map(registeredReference);
  compiledMorphs = `[${this.serializedMorphs}]`;
  lastMorph = this.inner.morphs[this.inner.morphs.length - 1];
  lastMorphIfNode = hasArkKind(this.lastMorph, "root") ? this.lastMorph : void 0;
  introspectableIn = this.inner.in;
  introspectableOut = this.lastMorphIfNode ? Object.assign(this.referencesById, this.lastMorphIfNode.referencesById) && this.lastMorphIfNode.rawOut : void 0;
  get shallowMorphs() {
    return Array.isArray(this.inner.in?.shallowMorphs) ? [...this.inner.in.shallowMorphs, ...this.morphs] : this.morphs;
  }
  get rawIn() {
    return this.declaredIn ?? this.inner.in?.rawIn ?? $ark.intrinsic.unknown.internal;
  }
  get rawOut() {
    return this.declaredOut ?? this.introspectableOut ?? $ark.intrinsic.unknown.internal;
  }
  declareIn(declaredIn) {
    return this.$.node("morph", {
      ...this.inner,
      declaredIn
    });
  }
  declareOut(declaredOut) {
    return this.$.node("morph", {
      ...this.inner,
      declaredOut
    });
  }
  expression = `(In: ${this.rawIn.expression}) => ${this.lastMorphIfNode ? "To" : "Out"}<${this.rawOut.expression}>`;
  get defaultShortDescription() {
    return this.rawIn.meta.description ?? this.rawIn.defaultShortDescription;
  }
  innerToJsonSchema(ctx) {
    return ctx.fallback.morph({
      code: "morph",
      base: this.rawIn.toJsonSchemaRecurse(ctx),
      out: this.introspectableOut?.toJsonSchemaRecurse(ctx) ?? null
    });
  }
  compile(js) {
    if (js.traversalKind === "Allows") {
      if (!this.introspectableIn)
        return;
      js.return(js.invoke(this.introspectableIn));
      return;
    }
    if (this.introspectableIn)
      js.line(js.invoke(this.introspectableIn));
    js.line(`ctx.queueMorphs(${this.compiledMorphs})`);
  }
  traverseAllows = (data, ctx) => !this.introspectableIn || this.introspectableIn.traverseAllows(data, ctx);
  traverseApply = (data, ctx) => {
    if (this.introspectableIn)
      this.introspectableIn.traverseApply(data, ctx);
    ctx.queueMorphs(this.morphs);
  };
  /** Check if the morphs of r are equal to those of this node */
  hasEqualMorphs(r) {
    return arrayEquals(this.morphs, r.morphs, {
      isEqual: (lMorph, rMorph) => lMorph === rMorph || hasArkKind(lMorph, "root") && hasArkKind(rMorph, "root") && lMorph.equals(rMorph)
    });
  }
}
const Morph = {
  implementation: implementation$7,
  Node: MorphNode
};
const writeMorphIntersectionMessage = (lDescription, rDescription) => `The intersection of distinct morphs at a single path is indeterminate:
Left: ${lDescription}
Right: ${rDescription}`;
const implementation$6 = implementNode({
  kind: "proto",
  hasAssociatedError: true,
  collapsibleKey: "proto",
  keys: {
    proto: {
      serialize: (ctor) => getBuiltinNameOfConstructor(ctor) ?? defaultValueSerializer(ctor)
    },
    dateAllowsInvalid: {}
  },
  normalize: (schema) => {
    const normalized = typeof schema === "string" ? { proto: builtinConstructors[schema] } : typeof schema === "function" ? isNode(schema) ? schema : { proto: schema } : typeof schema.proto === "string" ? { ...schema, proto: builtinConstructors[schema.proto] } : schema;
    if (typeof normalized.proto !== "function")
      throwParseError(Proto.writeInvalidSchemaMessage(normalized.proto));
    if (hasKey(normalized, "dateAllowsInvalid") && normalized.proto !== Date)
      throwParseError(Proto.writeBadInvalidDateMessage(normalized.proto));
    return normalized;
  },
  applyConfig: (schema, config) => {
    if (schema.dateAllowsInvalid === void 0 && schema.proto === Date && config.dateAllowsInvalid)
      return { ...schema, dateAllowsInvalid: true };
    return schema;
  },
  defaults: {
    description: (node2) => node2.builtinName ? objectKindDescriptions[node2.builtinName] : `an instance of ${node2.proto.name}`,
    actual: (data) => data instanceof Date && data.toString() === "Invalid Date" ? "an invalid Date" : objectKindOrDomainOf(data)
  },
  intersections: {
    proto: (l, r) => l.proto === Date && r.proto === Date ? (
      // since l === r is handled by default,
      // exactly one of l or r must have allow invalid dates
      l.dateAllowsInvalid ? r : l
    ) : constructorExtends(l.proto, r.proto) ? l : constructorExtends(r.proto, l.proto) ? r : Disjoint.init("proto", l, r),
    domain: (proto, domain) => domain.domain === "object" ? proto : Disjoint.init("domain", $ark.intrinsic.object.internal, domain)
  }
});
class ProtoNode extends InternalBasis {
  builtinName = getBuiltinNameOfConstructor(this.proto);
  serializedConstructor = this.json.proto;
  requiresInvalidDateCheck = this.proto === Date && !this.dateAllowsInvalid;
  traverseAllows = this.requiresInvalidDateCheck ? (data) => data instanceof Date && data.toString() !== "Invalid Date" : (data) => data instanceof this.proto;
  compiledCondition = `data instanceof ${this.serializedConstructor}${this.requiresInvalidDateCheck ? ` && data.toString() !== "Invalid Date"` : ""}`;
  compiledNegation = `!(${this.compiledCondition})`;
  innerToJsonSchema(ctx) {
    switch (this.builtinName) {
      case "Array":
        return {
          type: "array"
        };
      case "Date":
        return ctx.fallback.date?.({ code: "date", base: {} }) ?? ctx.fallback.proto({ code: "proto", base: {}, proto: this.proto });
      default:
        return ctx.fallback.proto({
          code: "proto",
          base: {},
          proto: this.proto
        });
    }
  }
  expression = this.dateAllowsInvalid ? "Date | InvalidDate" : this.proto.name;
  get nestableExpression() {
    return this.dateAllowsInvalid ? `(${this.expression})` : this.expression;
  }
  domain = "object";
  get defaultShortDescription() {
    return this.description;
  }
}
const Proto = {
  implementation: implementation$6,
  Node: ProtoNode,
  writeBadInvalidDateMessage: (actual) => `dateAllowsInvalid may only be specified with constructor Date (was ${actual.name})`,
  writeInvalidSchemaMessage: (actual) => `instanceOf operand must be a function (was ${domainOf(actual)})`
};
const implementation$5 = implementNode({
  kind: "union",
  hasAssociatedError: true,
  collapsibleKey: "branches",
  keys: {
    ordered: {},
    branches: {
      child: true,
      parse: (schema, ctx) => {
        const branches = [];
        for (const branchSchema of schema) {
          const branchNodes = hasArkKind(branchSchema, "root") ? branchSchema.branches : ctx.$.parseSchema(branchSchema).branches;
          for (const node2 of branchNodes) {
            if (node2.hasKind("morph")) {
              const matchingMorphIndex = branches.findIndex((matching) => matching.hasKind("morph") && matching.hasEqualMorphs(node2));
              if (matchingMorphIndex === -1)
                branches.push(node2);
              else {
                const matchingMorph = branches[matchingMorphIndex];
                branches[matchingMorphIndex] = ctx.$.node("morph", {
                  ...matchingMorph.inner,
                  in: matchingMorph.rawIn.rawOr(node2.rawIn)
                });
              }
            } else
              branches.push(node2);
          }
        }
        if (!ctx.def.ordered)
          branches.sort((l, r) => l.hash < r.hash ? -1 : 1);
        return branches;
      }
    }
  },
  normalize: (schema) => isArray(schema) ? { branches: schema } : schema,
  reduce: (inner, $) => {
    const reducedBranches = reduceBranches(inner);
    if (reducedBranches.length === 1)
      return reducedBranches[0];
    if (reducedBranches.length === inner.branches.length)
      return;
    return $.node("union", {
      ...inner,
      branches: reducedBranches
    }, { prereduced: true });
  },
  defaults: {
    description: (node2) => node2.distribute((branch) => branch.description, describeBranches),
    expected: (ctx) => {
      const byPath = groupBy(ctx.errors, "propString");
      const pathDescriptions = Object.entries(byPath).map(([path, errors]) => {
        const branchesAtPath = [];
        for (const errorAtPath of errors)
          appendUnique(branchesAtPath, errorAtPath.expected);
        const expected = describeBranches(branchesAtPath);
        const actual = errors.every((e) => e.actual === errors[0].actual) ? errors[0].actual : printable(errors[0].data);
        return `${path && `${path} `}must be ${expected}${actual && ` (was ${actual})`}`;
      });
      return describeBranches(pathDescriptions);
    },
    problem: (ctx) => ctx.expected,
    message: (ctx) => {
      if (ctx.problem[0] === "[") {
        return `value at ${ctx.problem}`;
      }
      return ctx.problem;
    }
  },
  intersections: {
    union: (l, r, ctx) => {
      if (l.isNever !== r.isNever) {
        return Disjoint.init("presence", l, r);
      }
      let resultBranches;
      if (l.ordered) {
        if (r.ordered) {
          throwParseError(writeOrderedIntersectionMessage(l.expression, r.expression));
        }
        resultBranches = intersectBranches(r.branches, l.branches, ctx);
        if (resultBranches instanceof Disjoint)
          resultBranches.invert();
      } else
        resultBranches = intersectBranches(l.branches, r.branches, ctx);
      if (resultBranches instanceof Disjoint)
        return resultBranches;
      return ctx.$.parseSchema(l.ordered || r.ordered ? {
        branches: resultBranches,
        ordered: true
      } : { branches: resultBranches });
    },
    ...defineRightwardIntersections("union", (l, r, ctx) => {
      const branches = intersectBranches(l.branches, [r], ctx);
      if (branches instanceof Disjoint)
        return branches;
      if (branches.length === 1)
        return branches[0];
      return ctx.$.parseSchema(l.ordered ? { branches, ordered: true } : { branches });
    })
  }
});
class UnionNode extends BaseRoot {
  isBoolean = this.branches.length === 2 && this.branches[0].hasUnit(false) && this.branches[1].hasUnit(true);
  get branchGroups() {
    const branchGroups = [];
    let firstBooleanIndex = -1;
    for (const branch of this.branches) {
      if (branch.hasKind("unit") && branch.domain === "boolean") {
        if (firstBooleanIndex === -1) {
          firstBooleanIndex = branchGroups.length;
          branchGroups.push(branch);
        } else
          branchGroups[firstBooleanIndex] = $ark.intrinsic.boolean;
        continue;
      }
      branchGroups.push(branch);
    }
    return branchGroups;
  }
  unitBranches = this.branches.filter((n) => n.rawIn.hasKind("unit"));
  discriminant = this.discriminate();
  discriminantJson = this.discriminant ? discriminantToJson(this.discriminant) : null;
  expression = this.distribute((n) => n.nestableExpression, expressBranches);
  createBranchedOptimisticRootApply() {
    return (data, onFail) => {
      const optimisticResult = this.traverseOptimistic(data);
      if (optimisticResult !== unset)
        return optimisticResult;
      const ctx = new Traversal(data, this.$.resolvedConfig);
      this.traverseApply(data, ctx);
      return ctx.finalize(onFail);
    };
  }
  get shallowMorphs() {
    return this.branches.reduce((morphs, branch) => appendUnique(morphs, branch.shallowMorphs), []);
  }
  get defaultShortDescription() {
    return this.distribute((branch) => branch.defaultShortDescription, describeBranches);
  }
  innerToJsonSchema(ctx) {
    if (this.branchGroups.length === 1 && this.branchGroups[0].equals($ark.intrinsic.boolean))
      return { type: "boolean" };
    const jsonSchemaBranches = this.branchGroups.map((group) => group.toJsonSchemaRecurse(ctx));
    if (jsonSchemaBranches.every((branch) => (
      // iff all branches are pure unit values with no metadata,
      // we can simplify the representation to an enum
      Object.keys(branch).length === 1 && hasKey(branch, "const")
    ))) {
      return {
        enum: jsonSchemaBranches.map((branch) => branch.const)
      };
    }
    return {
      anyOf: jsonSchemaBranches
    };
  }
  traverseAllows = (data, ctx) => this.branches.some((b) => b.traverseAllows(data, ctx));
  traverseApply = (data, ctx) => {
    const errors = [];
    for (let i = 0; i < this.branches.length; i++) {
      ctx.pushBranch();
      this.branches[i].traverseApply(data, ctx);
      if (!ctx.hasError()) {
        if (this.branches[i].includesTransform)
          return ctx.queuedMorphs.push(...ctx.popBranch().queuedMorphs);
        return ctx.popBranch();
      }
      errors.push(ctx.popBranch().error);
    }
    ctx.errorFromNodeContext({ code: "union", errors, meta: this.meta });
  };
  traverseOptimistic = (data) => {
    for (let i = 0; i < this.branches.length; i++) {
      const branch = this.branches[i];
      if (branch.traverseAllows(data)) {
        if (branch.contextFreeMorph)
          return branch.contextFreeMorph(data);
        return data;
      }
    }
    return unset;
  };
  compile(js) {
    if (!this.discriminant || // if we have a union of two units like `boolean`, the
    // undiscriminated compilation will be just as fast
    this.unitBranches.length === this.branches.length && this.branches.length === 2)
      return this.compileIndiscriminable(js);
    let condition = this.discriminant.optionallyChainedPropString;
    if (this.discriminant.kind === "domain")
      condition = `typeof ${condition} === "object" ? ${condition} === null ? "null" : "object" : typeof ${condition} === "function" ? "object" : typeof ${condition}`;
    const cases = this.discriminant.cases;
    const caseKeys = Object.keys(cases);
    const { optimistic } = js;
    js.optimistic = false;
    js.block(`switch(${condition})`, () => {
      for (const k in cases) {
        const v = cases[k];
        const caseCondition = k === "default" ? k : `case ${k}`;
        let caseResult;
        if (v === true)
          caseResult = optimistic ? "data" : "true";
        else if (optimistic) {
          if (v.rootApplyStrategy === "branchedOptimistic")
            caseResult = js.invoke(v, { kind: "Optimistic" });
          else if (v.contextFreeMorph)
            caseResult = `${js.invoke(v)} ? ${registeredReference(v.contextFreeMorph)}(data) : "${unset}"`;
          else
            caseResult = `${js.invoke(v)} ? data : "${unset}"`;
        } else
          caseResult = js.invoke(v);
        js.line(`${caseCondition}: return ${caseResult}`);
      }
      return js;
    });
    if (js.traversalKind === "Allows") {
      js.return(optimistic ? `"${unset}"` : false);
      return;
    }
    const expected = describeBranches(this.discriminant.kind === "domain" ? caseKeys.map((k) => {
      const jsTypeOf = k.slice(1, -1);
      return jsTypeOf === "function" ? domainDescriptions.object : domainDescriptions[jsTypeOf];
    }) : caseKeys);
    const serializedPathSegments = this.discriminant.path.map((k) => typeof k === "symbol" ? registeredReference(k) : JSON.stringify(k));
    const serializedExpected = JSON.stringify(expected);
    const serializedActual = this.discriminant.kind === "domain" ? `${serializedTypeOfDescriptions}[${condition}]` : `${serializedPrintable}(${condition})`;
    js.line(`ctx.errorFromNodeContext({
	code: "predicate",
	expected: ${serializedExpected},
	actual: ${serializedActual},
	relativePath: [${serializedPathSegments}],
	meta: ${this.compiledMeta}
})`);
  }
  compileIndiscriminable(js) {
    if (js.traversalKind === "Apply") {
      js.const("errors", "[]");
      for (const branch of this.branches) {
        js.line("ctx.pushBranch()").line(js.invoke(branch)).if("!ctx.hasError()", () => js.return(branch.includesTransform ? "ctx.queuedMorphs.push(...ctx.popBranch().queuedMorphs)" : "ctx.popBranch()")).line("errors.push(ctx.popBranch().error)");
      }
      js.line(`ctx.errorFromNodeContext({ code: "union", errors, meta: ${this.compiledMeta} })`);
    } else {
      const { optimistic } = js;
      js.optimistic = false;
      for (const branch of this.branches) {
        js.if(`${js.invoke(branch)}`, () => js.return(optimistic ? branch.contextFreeMorph ? `${registeredReference(branch.contextFreeMorph)}(data)` : "data" : true));
      }
      js.return(optimistic ? `"${unset}"` : false);
    }
  }
  get nestableExpression() {
    return this.isBoolean ? "boolean" : `(${this.expression})`;
  }
  discriminate() {
    if (this.branches.length < 2 || this.isCyclic)
      return null;
    if (this.unitBranches.length === this.branches.length) {
      const cases2 = flatMorph(this.unitBranches, (i, n) => [
        `${n.rawIn.serializedValue}`,
        n.hasKind("morph") ? n : true
      ]);
      return {
        kind: "unit",
        path: [],
        optionallyChainedPropString: "data",
        cases: cases2
      };
    }
    const candidates = [];
    for (let lIndex = 0; lIndex < this.branches.length - 1; lIndex++) {
      const l = this.branches[lIndex];
      for (let rIndex = lIndex + 1; rIndex < this.branches.length; rIndex++) {
        const r = this.branches[rIndex];
        const result = intersectNodesRoot(l.rawIn, r.rawIn, l.$);
        if (!(result instanceof Disjoint))
          continue;
        for (const entry of result) {
          if (!entry.kind || entry.optional)
            continue;
          let lSerialized;
          let rSerialized;
          if (entry.kind === "domain") {
            const lValue = entry.l;
            const rValue = entry.r;
            lSerialized = `"${typeof lValue === "string" ? lValue : lValue.domain}"`;
            rSerialized = `"${typeof rValue === "string" ? rValue : rValue.domain}"`;
          } else if (entry.kind === "unit") {
            lSerialized = entry.l.serializedValue;
            rSerialized = entry.r.serializedValue;
          } else
            continue;
          const matching = candidates.find((d) => arrayEquals(d.path, entry.path) && d.kind === entry.kind);
          if (!matching) {
            candidates.push({
              kind: entry.kind,
              cases: {
                [lSerialized]: {
                  branchIndices: [lIndex],
                  condition: entry.l
                },
                [rSerialized]: {
                  branchIndices: [rIndex],
                  condition: entry.r
                }
              },
              path: entry.path
            });
          } else {
            if (matching.cases[lSerialized]) {
              matching.cases[lSerialized].branchIndices = appendUnique(matching.cases[lSerialized].branchIndices, lIndex);
            } else {
              matching.cases[lSerialized] ??= {
                branchIndices: [lIndex],
                condition: entry.l
              };
            }
            if (matching.cases[rSerialized]) {
              matching.cases[rSerialized].branchIndices = appendUnique(matching.cases[rSerialized].branchIndices, rIndex);
            } else {
              matching.cases[rSerialized] ??= {
                branchIndices: [rIndex],
                condition: entry.r
              };
            }
          }
        }
      }
    }
    const viableCandidates = this.ordered ? viableOrderedCandidates(candidates, this.branches) : candidates;
    if (!viableCandidates.length)
      return null;
    const ctx = createCaseResolutionContext(viableCandidates, this);
    const cases = {};
    for (const k in ctx.best.cases) {
      const resolution = resolveCase(ctx, k);
      if (resolution === null) {
        cases[k] = true;
        continue;
      }
      if (resolution.length === this.branches.length)
        return null;
      if (this.ordered) {
        resolution.sort((l, r) => l.originalIndex - r.originalIndex);
      }
      const branches = resolution.map((entry) => entry.branch);
      const caseNode = branches.length === 1 ? branches[0] : this.$.node("union", this.ordered ? { branches, ordered: true } : branches);
      Object.assign(this.referencesById, caseNode.referencesById);
      cases[k] = caseNode;
    }
    if (ctx.defaultEntries.length) {
      const branches = ctx.defaultEntries.map((entry) => entry.branch);
      cases.default = this.$.node("union", this.ordered ? { branches, ordered: true } : branches, {
        prereduced: true
      });
      Object.assign(this.referencesById, cases.default.referencesById);
    }
    return Object.assign(ctx.location, {
      cases
    });
  }
}
const createCaseResolutionContext = (viableCandidates, node2) => {
  const ordered = viableCandidates.sort((l, r) => l.path.length === r.path.length ? Object.keys(r.cases).length - Object.keys(l.cases).length : l.path.length - r.path.length);
  const best = ordered[0];
  const location = {
    kind: best.kind,
    path: best.path,
    optionallyChainedPropString: optionallyChainPropString(best.path)
  };
  const defaultEntries = node2.branches.map((branch, originalIndex) => ({
    originalIndex,
    branch
  }));
  return {
    best,
    location,
    defaultEntries,
    node: node2
  };
};
const resolveCase = (ctx, key) => {
  const caseCtx = ctx.best.cases[key];
  const discriminantNode = discriminantCaseToNode(caseCtx.condition, ctx.location.path, ctx.node.$);
  let resolvedEntries = [];
  const nextDefaults = [];
  for (let i = 0; i < ctx.defaultEntries.length; i++) {
    const entry = ctx.defaultEntries[i];
    if (caseCtx.branchIndices.includes(entry.originalIndex)) {
      const pruned = pruneDiscriminant(ctx.node.branches[entry.originalIndex], ctx.location);
      if (pruned === null) {
        resolvedEntries = null;
      } else {
        resolvedEntries?.push({
          originalIndex: entry.originalIndex,
          branch: pruned
        });
      }
    } else if (
      // we shouldn't need a special case for alias to avoid the below
      // once alias resolution issues are improved:
      // https://github.com/arktypeio/arktype/issues/1026
      entry.branch.hasKind("alias") && discriminantNode.hasKind("domain") && discriminantNode.domain === "object"
    )
      resolvedEntries?.push(entry);
    else {
      if (entry.branch.rawIn.overlaps(discriminantNode)) {
        const overlapping = pruneDiscriminant(entry.branch, ctx.location);
        resolvedEntries?.push({
          originalIndex: entry.originalIndex,
          branch: overlapping
        });
      }
      nextDefaults.push(entry);
    }
  }
  ctx.defaultEntries = nextDefaults;
  return resolvedEntries;
};
const viableOrderedCandidates = (candidates, originalBranches) => {
  const viableCandidates = candidates.filter((candidate) => {
    const caseGroups = Object.values(candidate.cases).map((caseCtx) => caseCtx.branchIndices);
    for (let i = 0; i < caseGroups.length - 1; i++) {
      const currentGroup = caseGroups[i];
      for (let j = i + 1; j < caseGroups.length; j++) {
        const nextGroup = caseGroups[j];
        for (const currentIndex of currentGroup) {
          for (const nextIndex of nextGroup) {
            if (currentIndex > nextIndex) {
              if (originalBranches[currentIndex].overlaps(originalBranches[nextIndex])) {
                return false;
              }
            }
          }
        }
      }
    }
    return true;
  });
  return viableCandidates;
};
const discriminantCaseToNode = (caseDiscriminant, path, $) => {
  let node2 = caseDiscriminant === "undefined" ? $.node("unit", { unit: void 0 }) : caseDiscriminant === "null" ? $.node("unit", { unit: null }) : caseDiscriminant === "boolean" ? $.units([true, false]) : caseDiscriminant;
  for (let i = path.length - 1; i >= 0; i--) {
    const key = path[i];
    node2 = $.node("intersection", typeof key === "number" ? {
      proto: "Array",
      // create unknown for preceding elements (could be optimized with safe imports)
      sequence: [...range(key).map((_) => ({})), node2]
    } : {
      domain: "object",
      required: [{ key, value: node2 }]
    });
  }
  return node2;
};
const optionallyChainPropString = (path) => path.reduce((acc, k) => acc + compileLiteralPropAccess(k, true), "data");
const serializedTypeOfDescriptions = registeredReference(jsTypeOfDescriptions);
const serializedPrintable = registeredReference(printable);
const Union = {
  implementation: implementation$5,
  Node: UnionNode
};
const discriminantToJson = (discriminant) => ({
  kind: discriminant.kind,
  path: discriminant.path.map((k) => typeof k === "string" ? k : compileSerializedValue(k)),
  cases: flatMorph(discriminant.cases, (k, node2) => [
    k,
    node2 === true ? node2 : node2.hasKind("union") && node2.discriminantJson ? node2.discriminantJson : node2.json
  ])
});
const describeExpressionOptions = {
  delimiter: " | ",
  finalDelimiter: " | "
};
const expressBranches = (expressions) => describeBranches(expressions, describeExpressionOptions);
const describeBranches = (descriptions, opts) => {
  const delimiter = opts?.delimiter ?? ", ";
  const finalDelimiter = opts?.finalDelimiter ?? " or ";
  if (descriptions.length === 0)
    return "never";
  if (descriptions.length === 1)
    return descriptions[0];
  if (descriptions.length === 2 && descriptions[0] === "false" && descriptions[1] === "true" || descriptions[0] === "true" && descriptions[1] === "false")
    return "boolean";
  const seen = {};
  const unique = descriptions.filter((s) => seen[s] ? false : seen[s] = true);
  const last = unique.pop();
  return `${unique.join(delimiter)}${unique.length ? finalDelimiter : ""}${last}`;
};
const intersectBranches = (l, r, ctx) => {
  const batchesByR = r.map(() => []);
  for (let lIndex = 0; lIndex < l.length; lIndex++) {
    let candidatesByR = {};
    for (let rIndex = 0; rIndex < r.length; rIndex++) {
      if (batchesByR[rIndex] === null) {
        continue;
      }
      if (l[lIndex].equals(r[rIndex])) {
        batchesByR[rIndex] = null;
        candidatesByR = {};
        break;
      }
      const branchIntersection = intersectOrPipeNodes(l[lIndex], r[rIndex], ctx);
      if (branchIntersection instanceof Disjoint) {
        continue;
      }
      if (branchIntersection.equals(l[lIndex])) {
        batchesByR[rIndex].push(l[lIndex]);
        candidatesByR = {};
        break;
      }
      if (branchIntersection.equals(r[rIndex])) {
        batchesByR[rIndex] = null;
      } else {
        candidatesByR[rIndex] = branchIntersection;
      }
    }
    for (const rIndex in candidatesByR) {
      batchesByR[rIndex][lIndex] = candidatesByR[rIndex];
    }
  }
  const resultBranches = batchesByR.flatMap(
    // ensure unions returned from branchable intersections like sequence are flattened
    (batch, i) => batch?.flatMap((branch) => branch.branches) ?? r[i]
  );
  return resultBranches.length === 0 ? Disjoint.init("union", l, r) : resultBranches;
};
const reduceBranches = ({ branches, ordered }) => {
  if (branches.length < 2)
    return branches;
  const uniquenessByIndex = branches.map(() => true);
  for (let i = 0; i < branches.length; i++) {
    for (let j = i + 1; j < branches.length && uniquenessByIndex[i] && uniquenessByIndex[j]; j++) {
      if (branches[i].equals(branches[j])) {
        uniquenessByIndex[j] = false;
        continue;
      }
      const intersection = intersectNodesRoot(branches[i].rawIn, branches[j].rawIn, branches[0].$);
      if (intersection instanceof Disjoint)
        continue;
      if (!ordered)
        assertDeterminateOverlap(branches[i], branches[j]);
      if (intersection.equals(branches[i].rawIn)) {
        uniquenessByIndex[i] = !!ordered;
      } else if (intersection.equals(branches[j].rawIn))
        uniquenessByIndex[j] = false;
    }
  }
  return branches.filter((_, i) => uniquenessByIndex[i]);
};
const assertDeterminateOverlap = (l, r) => {
  if (!l.includesTransform && !r.includesTransform)
    return;
  if (!arrayEquals(l.shallowMorphs, r.shallowMorphs)) {
    throwParseError(writeIndiscriminableMorphMessage(l.expression, r.expression));
  }
  if (!arrayEquals(l.flatMorphs, r.flatMorphs, {
    isEqual: (l2, r2) => l2.propString === r2.propString && (l2.node.hasKind("morph") && r2.node.hasKind("morph") ? l2.node.hasEqualMorphs(r2.node) : l2.node.hasKind("intersection") && r2.node.hasKind("intersection") ? l2.node.structure?.structuralMorphRef === r2.node.structure?.structuralMorphRef : false)
  })) {
    throwParseError(writeIndiscriminableMorphMessage(l.expression, r.expression));
  }
};
const pruneDiscriminant = (discriminantBranch, discriminantCtx) => discriminantBranch.transform((nodeKind, inner) => {
  if (nodeKind === "domain" || nodeKind === "unit")
    return null;
  return inner;
}, {
  shouldTransform: (node2, ctx) => {
    const propString = optionallyChainPropString(ctx.path);
    if (!discriminantCtx.optionallyChainedPropString.startsWith(propString))
      return false;
    if (node2.hasKind("domain") && node2.domain === "object")
      return true;
    if ((node2.hasKind("domain") || discriminantCtx.kind === "unit") && propString === discriminantCtx.optionallyChainedPropString)
      return true;
    return node2.children.length !== 0 && node2.kind !== "index";
  }
});
const writeIndiscriminableMorphMessage = (lDescription, rDescription) => `An unordered union of a type including a morph and a type with overlapping input is indeterminate:
Left: ${lDescription}
Right: ${rDescription}`;
const writeOrderedIntersectionMessage = (lDescription, rDescription) => `The intersection of two ordered unions is indeterminate:
Left: ${lDescription}
Right: ${rDescription}`;
const implementation$4 = implementNode({
  kind: "unit",
  hasAssociatedError: true,
  keys: {
    unit: {
      preserveUndefined: true,
      serialize: (schema) => schema instanceof Date ? schema.toISOString() : defaultValueSerializer(schema)
    }
  },
  normalize: (schema) => schema,
  defaults: {
    description: (node2) => printable(node2.unit),
    problem: ({ expected, actual }) => `${expected === actual ? `must be reference equal to ${expected} (serialized to the same value)` : `must be ${expected} (was ${actual})`}`
  },
  intersections: {
    unit: (l, r) => Disjoint.init("unit", l, r),
    ...defineRightwardIntersections("unit", (l, r) => {
      if (r.allows(l.unit))
        return l;
      const rBasis = r.hasKind("intersection") ? r.basis : r;
      if (rBasis) {
        const rDomain = rBasis.hasKind("domain") ? rBasis : $ark.intrinsic.object;
        if (l.domain !== rDomain.domain) {
          const lDomainDisjointValue = l.domain === "undefined" || l.domain === "null" || l.domain === "boolean" ? l.domain : $ark.intrinsic[l.domain];
          return Disjoint.init("domain", lDomainDisjointValue, rDomain);
        }
      }
      return Disjoint.init("assignability", l, r.hasKind("intersection") ? r.children.find((rConstraint) => !rConstraint.allows(l.unit)) : r);
    })
  }
});
class UnitNode extends InternalBasis {
  compiledValue = this.json.unit;
  serializedValue = typeof this.unit === "string" || this.unit instanceof Date ? JSON.stringify(this.compiledValue) : `${this.compiledValue}`;
  compiledCondition = compileEqualityCheck(this.unit, this.serializedValue);
  compiledNegation = compileEqualityCheck(this.unit, this.serializedValue, "negated");
  expression = printable(this.unit);
  domain = domainOf(this.unit);
  get defaultShortDescription() {
    return this.domain === "object" ? domainDescriptions.object : this.description;
  }
  innerToJsonSchema(ctx) {
    return (
      // this is the more standard JSON schema representation, especially for Open API
      this.unit === null ? { type: "null" } : $ark.intrinsic.jsonPrimitive.allows(this.unit) ? { const: this.unit } : ctx.fallback.unit({ code: "unit", base: {}, unit: this.unit })
    );
  }
  traverseAllows = this.unit instanceof Date ? (data) => data instanceof Date && data.toISOString() === this.compiledValue : Number.isNaN(this.unit) ? (data) => Number.isNaN(data) : (data) => data === this.unit;
}
const Unit = {
  implementation: implementation$4,
  Node: UnitNode
};
const compileEqualityCheck = (unit, serializedValue, negated) => {
  if (unit instanceof Date) {
    const condition = `data instanceof Date && data.toISOString() === ${serializedValue}`;
    return negated ? `!(${condition})` : condition;
  }
  if (Number.isNaN(unit))
    return `${negated ? "!" : ""}Number.isNaN(data)`;
  return `data ${negated ? "!" : "="}== ${serializedValue}`;
};
const implementation$3 = implementNode({
  kind: "index",
  hasAssociatedError: false,
  intersectionIsOpen: true,
  keys: {
    signature: {
      child: true,
      parse: (schema, ctx) => {
        const key = ctx.$.parseSchema(schema);
        if (!key.extends($ark.intrinsic.key)) {
          return throwParseError(writeInvalidPropertyKeyMessage(key.expression));
        }
        const enumerableBranches = key.branches.filter((b) => b.hasKind("unit"));
        if (enumerableBranches.length) {
          return throwParseError(writeEnumerableIndexBranches(enumerableBranches.map((b) => printable(b.unit))));
        }
        return key;
      }
    },
    value: {
      child: true,
      parse: (schema, ctx) => ctx.$.parseSchema(schema)
    }
  },
  normalize: (schema) => schema,
  defaults: {
    description: (node2) => `[${node2.signature.expression}]: ${node2.value.description}`
  },
  intersections: {
    index: (l, r, ctx) => {
      if (l.signature.equals(r.signature)) {
        const valueIntersection = intersectOrPipeNodes(l.value, r.value, ctx);
        const value2 = valueIntersection instanceof Disjoint ? $ark.intrinsic.never.internal : valueIntersection;
        return ctx.$.node("index", { signature: l.signature, value: value2 });
      }
      if (l.signature.extends(r.signature) && l.value.subsumes(r.value))
        return r;
      if (r.signature.extends(l.signature) && r.value.subsumes(l.value))
        return l;
      return null;
    }
  }
});
class IndexNode extends BaseConstraint {
  impliedBasis = $ark.intrinsic.object.internal;
  expression = `[${this.signature.expression}]: ${this.value.expression}`;
  flatRefs = append(this.value.flatRefs.map((ref) => flatRef([this.signature, ...ref.path], ref.node)), flatRef([this.signature], this.value));
  traverseAllows = (data, ctx) => stringAndSymbolicEntriesOf(data).every((entry) => {
    if (this.signature.traverseAllows(entry[0], ctx)) {
      return traverseKey(entry[0], () => this.value.traverseAllows(entry[1], ctx), ctx);
    }
    return true;
  });
  traverseApply = (data, ctx) => {
    for (const entry of stringAndSymbolicEntriesOf(data)) {
      if (this.signature.traverseAllows(entry[0], ctx)) {
        traverseKey(entry[0], () => this.value.traverseApply(entry[1], ctx), ctx);
      }
    }
  };
  _transform(mapper, ctx) {
    ctx.path.push(this.signature);
    const result = super._transform(mapper, ctx);
    ctx.path.pop();
    return result;
  }
  compile() {
  }
}
const Index = {
  implementation: implementation$3,
  Node: IndexNode
};
const writeEnumerableIndexBranches = (keys) => `Index keys ${keys.join(", ")} should be specified as named props.`;
const writeInvalidPropertyKeyMessage = (indexSchema) => `Indexed key definition '${indexSchema}' must be a string or symbol`;
const implementation$2 = implementNode({
  kind: "required",
  hasAssociatedError: true,
  intersectionIsOpen: true,
  keys: {
    key: {},
    value: {
      child: true,
      parse: (schema, ctx) => ctx.$.parseSchema(schema)
    }
  },
  normalize: (schema) => schema,
  defaults: {
    description: (node2) => `${node2.compiledKey}: ${node2.value.description}`,
    expected: (ctx) => ctx.missingValueDescription,
    actual: () => "missing"
  },
  intersections: {
    required: intersectProps,
    optional: intersectProps
  }
});
class RequiredNode extends BaseProp {
  expression = `${this.compiledKey}: ${this.value.expression}`;
  errorContext = Object.freeze({
    code: "required",
    missingValueDescription: this.value.defaultShortDescription,
    relativePath: [this.key],
    meta: this.meta
  });
  compiledErrorContext = compileObjectLiteral(this.errorContext);
}
const Required$1 = {
  implementation: implementation$2,
  Node: RequiredNode
};
const implementation$1 = implementNode({
  kind: "sequence",
  hasAssociatedError: false,
  collapsibleKey: "variadic",
  keys: {
    prefix: {
      child: true,
      parse: (schema, ctx) => {
        if (schema.length === 0)
          return void 0;
        return schema.map((element) => ctx.$.parseSchema(element));
      }
    },
    optionals: {
      child: true,
      parse: (schema, ctx) => {
        if (schema.length === 0)
          return void 0;
        return schema.map((element) => ctx.$.parseSchema(element));
      }
    },
    defaultables: {
      child: (defaultables) => defaultables.map((element) => element[0]),
      parse: (defaultables, ctx) => {
        if (defaultables.length === 0)
          return void 0;
        return defaultables.map((element) => {
          const node2 = ctx.$.parseSchema(element[0]);
          assertDefaultValueAssignability(node2, element[1], null);
          return [node2, element[1]];
        });
      },
      serialize: (defaults) => defaults.map((element) => [
        element[0].collapsibleJson,
        defaultValueSerializer(element[1])
      ]),
      reduceIo: (ioKind, inner, defaultables) => {
        if (ioKind === "in") {
          inner.optionals = defaultables.map((d) => d[0].rawIn);
          return;
        }
        inner.prefix = defaultables.map((d) => d[0].rawOut);
        return;
      }
    },
    variadic: {
      child: true,
      parse: (schema, ctx) => ctx.$.parseSchema(schema, ctx)
    },
    minVariadicLength: {
      // minVariadicLength is reflected in the id of this node,
      // but not its IntersectionNode parent since it is superceded by the minLength
      // node it implies
      parse: (min) => min === 0 ? void 0 : min
    },
    postfix: {
      child: true,
      parse: (schema, ctx) => {
        if (schema.length === 0)
          return void 0;
        return schema.map((element) => ctx.$.parseSchema(element));
      }
    }
  },
  normalize: (schema) => {
    if (typeof schema === "string")
      return { variadic: schema };
    if ("variadic" in schema || "prefix" in schema || "defaultables" in schema || "optionals" in schema || "postfix" in schema || "minVariadicLength" in schema) {
      if (schema.postfix?.length) {
        if (!schema.variadic)
          return throwParseError(postfixWithoutVariadicMessage);
        if (schema.optionals?.length || schema.defaultables?.length)
          return throwParseError(postfixAfterOptionalOrDefaultableMessage);
      }
      if (schema.minVariadicLength && !schema.variadic) {
        return throwParseError("minVariadicLength may not be specified without a variadic element");
      }
      return schema;
    }
    return { variadic: schema };
  },
  reduce: (raw, $) => {
    let minVariadicLength = raw.minVariadicLength ?? 0;
    const prefix = raw.prefix?.slice() ?? [];
    const defaultables = raw.defaultables?.slice() ?? [];
    const optionals = raw.optionals?.slice() ?? [];
    const postfix = raw.postfix?.slice() ?? [];
    if (raw.variadic) {
      while (optionals[optionals.length - 1]?.equals(raw.variadic))
        optionals.pop();
      if (optionals.length === 0 && defaultables.length === 0) {
        while (prefix[prefix.length - 1]?.equals(raw.variadic)) {
          prefix.pop();
          minVariadicLength++;
        }
      }
      while (postfix[0]?.equals(raw.variadic)) {
        postfix.shift();
        minVariadicLength++;
      }
    } else if (optionals.length === 0 && defaultables.length === 0) {
      prefix.push(...postfix.splice(0));
    }
    if (
      // if any variadic adjacent elements were moved to minVariadicLength
      minVariadicLength !== raw.minVariadicLength || // or any postfix elements were moved to prefix
      raw.prefix && raw.prefix.length !== prefix.length
    ) {
      return $.node("sequence", {
        ...raw,
        // empty lists will be omitted during parsing
        prefix,
        defaultables,
        optionals,
        postfix,
        minVariadicLength
      }, { prereduced: true });
    }
  },
  defaults: {
    description: (node2) => {
      if (node2.isVariadicOnly)
        return `${node2.variadic.nestableExpression}[]`;
      const innerDescription = node2.tuple.map((element) => element.kind === "defaultables" ? `${element.node.nestableExpression} = ${printable(element.default)}` : element.kind === "optionals" ? `${element.node.nestableExpression}?` : element.kind === "variadic" ? `...${element.node.nestableExpression}[]` : element.node.expression).join(", ");
      return `[${innerDescription}]`;
    }
  },
  intersections: {
    sequence: (l, r, ctx) => {
      const rootState = _intersectSequences({
        l: l.tuple,
        r: r.tuple,
        disjoint: new Disjoint(),
        result: [],
        fixedVariants: [],
        ctx
      });
      const viableBranches = rootState.disjoint.length === 0 ? [rootState, ...rootState.fixedVariants] : rootState.fixedVariants;
      return viableBranches.length === 0 ? rootState.disjoint : viableBranches.length === 1 ? ctx.$.node("sequence", sequenceTupleToInner(viableBranches[0].result)) : ctx.$.node("union", viableBranches.map((state) => ({
        proto: Array,
        sequence: sequenceTupleToInner(state.result)
      })));
    }
    // exactLength, minLength, and maxLength don't need to be defined
    // here since impliedSiblings guarantees they will be added
    // directly to the IntersectionNode parent of the SequenceNode
    // they exist on
  }
});
class SequenceNode extends BaseConstraint {
  impliedBasis = $ark.intrinsic.Array.internal;
  tuple = sequenceInnerToTuple(this.inner);
  prefixLength = this.prefix?.length ?? 0;
  defaultablesLength = this.defaultables?.length ?? 0;
  optionalsLength = this.optionals?.length ?? 0;
  postfixLength = this.postfix?.length ?? 0;
  defaultablesAndOptionals = [];
  prevariadic = this.tuple.filter((el) => {
    if (el.kind === "defaultables" || el.kind === "optionals") {
      this.defaultablesAndOptionals.push(el.node);
      return true;
    }
    return el.kind === "prefix";
  });
  variadicOrPostfix = conflatenate(this.variadic && [this.variadic], this.postfix);
  // have to wait until prevariadic and variadicOrPostfix are set to calculate
  flatRefs = this.addFlatRefs();
  addFlatRefs() {
    appendUniqueFlatRefs(this.flatRefs, this.prevariadic.flatMap((element, i) => append(element.node.flatRefs.map((ref) => flatRef([`${i}`, ...ref.path], ref.node)), flatRef([`${i}`], element.node))));
    appendUniqueFlatRefs(this.flatRefs, this.variadicOrPostfix.flatMap((element) => (
      // a postfix index can't be directly represented as a type
      // key, so we just use the same matcher for variadic
      append(element.flatRefs.map((ref) => flatRef([$ark.intrinsic.nonNegativeIntegerString.internal, ...ref.path], ref.node)), flatRef([$ark.intrinsic.nonNegativeIntegerString.internal], element))
    )));
    return this.flatRefs;
  }
  isVariadicOnly = this.prevariadic.length + this.postfixLength === 0;
  minVariadicLength = this.inner.minVariadicLength ?? 0;
  minLength = this.prefixLength + this.minVariadicLength + this.postfixLength;
  minLengthNode = this.minLength === 0 ? null : this.$.node("minLength", this.minLength);
  maxLength = this.variadic ? null : this.tuple.length;
  maxLengthNode = this.maxLength === null ? null : this.$.node("maxLength", this.maxLength);
  impliedSiblings = this.minLengthNode ? this.maxLengthNode ? [this.minLengthNode, this.maxLengthNode] : [this.minLengthNode] : this.maxLengthNode ? [this.maxLengthNode] : [];
  defaultValueMorphs = getDefaultableMorphs(this);
  defaultValueMorphsReference = this.defaultValueMorphs.length ? registeredReference(this.defaultValueMorphs) : void 0;
  elementAtIndex(data, index) {
    if (index < this.prevariadic.length)
      return this.tuple[index];
    const firstPostfixIndex = data.length - this.postfixLength;
    if (index >= firstPostfixIndex)
      return { kind: "postfix", node: this.postfix[index - firstPostfixIndex] };
    return {
      kind: "variadic",
      node: this.variadic ?? throwInternalError(`Unexpected attempt to access index ${index} on ${this}`)
    };
  }
  // minLength/maxLength should be checked by Intersection before either traversal
  traverseAllows = (data, ctx) => {
    for (let i = 0; i < data.length; i++) {
      if (!this.elementAtIndex(data, i).node.traverseAllows(data[i], ctx))
        return false;
    }
    return true;
  };
  traverseApply = (data, ctx) => {
    let i = 0;
    for (; i < data.length; i++) {
      traverseKey(i, () => this.elementAtIndex(data, i).node.traverseApply(data[i], ctx), ctx);
    }
  };
  get element() {
    return this.cacheGetter("element", this.$.node("union", this.children));
  }
  // minLength/maxLength compilation should be handled by Intersection
  compile(js) {
    if (this.prefix) {
      for (const [i, node2] of this.prefix.entries())
        js.traverseKey(`${i}`, `data[${i}]`, node2);
    }
    for (const [i, node2] of this.defaultablesAndOptionals.entries()) {
      const dataIndex = `${i + this.prefixLength}`;
      js.if(`${dataIndex} >= data.length`, () => js.traversalKind === "Allows" ? js.return(true) : js.return());
      js.traverseKey(dataIndex, `data[${dataIndex}]`, node2);
    }
    if (this.variadic) {
      if (this.postfix) {
        js.const("firstPostfixIndex", `data.length${this.postfix ? `- ${this.postfix.length}` : ""}`);
      }
      js.for(`i < ${this.postfix ? "firstPostfixIndex" : "data.length"}`, () => js.traverseKey("i", "data[i]", this.variadic), this.prevariadic.length);
      if (this.postfix) {
        for (const [i, node2] of this.postfix.entries()) {
          const keyExpression = `firstPostfixIndex + ${i}`;
          js.traverseKey(keyExpression, `data[${keyExpression}]`, node2);
        }
      }
    }
    if (js.traversalKind === "Allows")
      js.return(true);
  }
  _transform(mapper, ctx) {
    ctx.path.push($ark.intrinsic.nonNegativeIntegerString.internal);
    const result = super._transform(mapper, ctx);
    ctx.path.pop();
    return result;
  }
  // this depends on tuple so needs to come after it
  expression = this.description;
  reduceJsonSchema(schema, ctx) {
    const isDraft07 = ctx.target === "draft-07";
    if (this.prevariadic.length) {
      const prefixSchemas = this.prevariadic.map((el) => {
        const valueSchema = el.node.toJsonSchemaRecurse(ctx);
        if (el.kind === "defaultables") {
          const value2 = typeof el.default === "function" ? el.default() : el.default;
          valueSchema.default = $ark.intrinsic.jsonData.allows(value2) ? value2 : ctx.fallback.defaultValue({
            code: "defaultValue",
            base: valueSchema,
            value: value2
          });
        }
        return valueSchema;
      });
      if (isDraft07)
        schema.items = prefixSchemas;
      else
        schema.prefixItems = prefixSchemas;
    }
    if (this.minLength)
      schema.minItems = this.minLength;
    if (this.variadic) {
      const variadicItemSchema = this.variadic.toJsonSchemaRecurse(ctx);
      if (isDraft07 && this.prevariadic.length)
        schema.additionalItems = variadicItemSchema;
      else
        schema.items = variadicItemSchema;
      if (this.maxLength)
        schema.maxItems = this.maxLength;
      if (this.postfix) {
        const elements = this.postfix.map((el) => el.toJsonSchemaRecurse(ctx));
        schema = ctx.fallback.arrayPostfix({
          code: "arrayPostfix",
          base: schema,
          elements
        });
      }
    } else {
      if (isDraft07)
        schema.additionalItems = false;
      else
        schema.items = false;
      delete schema.maxItems;
    }
    return schema;
  }
}
const defaultableMorphsCache$1 = {};
const getDefaultableMorphs = (node2) => {
  if (!node2.defaultables)
    return [];
  const morphs = [];
  let cacheKey = "[";
  const lastDefaultableIndex = node2.prefixLength + node2.defaultablesLength - 1;
  for (let i = node2.prefixLength; i <= lastDefaultableIndex; i++) {
    const [elementNode, defaultValue] = node2.defaultables[i - node2.prefixLength];
    morphs.push(computeDefaultValueMorph(i, elementNode, defaultValue));
    cacheKey += `${i}: ${elementNode.id} = ${defaultValueSerializer(defaultValue)}, `;
  }
  cacheKey += "]";
  return defaultableMorphsCache$1[cacheKey] ??= morphs;
};
const Sequence = {
  implementation: implementation$1,
  Node: SequenceNode
};
const sequenceInnerToTuple = (inner) => {
  const tuple = [];
  if (inner.prefix)
    for (const node2 of inner.prefix)
      tuple.push({ kind: "prefix", node: node2 });
  if (inner.defaultables) {
    for (const [node2, defaultValue] of inner.defaultables)
      tuple.push({ kind: "defaultables", node: node2, default: defaultValue });
  }
  if (inner.optionals)
    for (const node2 of inner.optionals)
      tuple.push({ kind: "optionals", node: node2 });
  if (inner.variadic)
    tuple.push({ kind: "variadic", node: inner.variadic });
  if (inner.postfix)
    for (const node2 of inner.postfix)
      tuple.push({ kind: "postfix", node: node2 });
  return tuple;
};
const sequenceTupleToInner = (tuple) => tuple.reduce((result, element) => {
  if (element.kind === "variadic")
    result.variadic = element.node;
  else if (element.kind === "defaultables") {
    result.defaultables = append(result.defaultables, [
      [element.node, element.default]
    ]);
  } else
    result[element.kind] = append(result[element.kind], element.node);
  return result;
}, {});
const postfixAfterOptionalOrDefaultableMessage = "A postfix required element cannot follow an optional or defaultable element";
const postfixWithoutVariadicMessage = "A postfix element requires a variadic element";
const _intersectSequences = (s) => {
  const [lHead, ...lTail] = s.l;
  const [rHead, ...rTail] = s.r;
  if (!lHead || !rHead)
    return s;
  const lHasPostfix = lTail[lTail.length - 1]?.kind === "postfix";
  const rHasPostfix = rTail[rTail.length - 1]?.kind === "postfix";
  const kind = lHead.kind === "prefix" || rHead.kind === "prefix" ? "prefix" : lHead.kind === "postfix" || rHead.kind === "postfix" ? "postfix" : lHead.kind === "variadic" && rHead.kind === "variadic" ? "variadic" : lHasPostfix || rHasPostfix ? "prefix" : lHead.kind === "defaultables" || rHead.kind === "defaultables" ? "defaultables" : "optionals";
  if (lHead.kind === "prefix" && rHead.kind === "variadic" && rHasPostfix) {
    const postfixBranchResult = _intersectSequences({
      ...s,
      fixedVariants: [],
      r: rTail.map((element) => ({ ...element, kind: "prefix" }))
    });
    if (postfixBranchResult.disjoint.length === 0)
      s.fixedVariants.push(postfixBranchResult);
  } else if (rHead.kind === "prefix" && lHead.kind === "variadic" && lHasPostfix) {
    const postfixBranchResult = _intersectSequences({
      ...s,
      fixedVariants: [],
      l: lTail.map((element) => ({ ...element, kind: "prefix" }))
    });
    if (postfixBranchResult.disjoint.length === 0)
      s.fixedVariants.push(postfixBranchResult);
  }
  const result = intersectOrPipeNodes(lHead.node, rHead.node, s.ctx);
  if (result instanceof Disjoint) {
    if (kind === "prefix" || kind === "postfix") {
      s.disjoint.push(...result.withPrefixKey(
        // ideally we could handle disjoint paths more precisely here,
        // but not trivial to serialize postfix elements as keys
        kind === "prefix" ? s.result.length : `-${lTail.length + 1}`,
        // both operands must be required for the disjoint to be considered required
        elementIsRequired(lHead) && elementIsRequired(rHead) ? "required" : "optional"
      ));
      s.result = [...s.result, { kind, node: $ark.intrinsic.never.internal }];
    } else if (kind === "optionals" || kind === "defaultables") {
      return s;
    } else {
      return _intersectSequences({
        ...s,
        fixedVariants: [],
        // if there were any optional elements, there will be no postfix elements
        // so this mapping will never occur (which would be illegal otherwise)
        l: lTail.map((element) => ({ ...element, kind: "prefix" })),
        r: lTail.map((element) => ({ ...element, kind: "prefix" }))
      });
    }
  } else if (kind === "defaultables") {
    if (lHead.kind === "defaultables" && rHead.kind === "defaultables" && lHead.default !== rHead.default) {
      throwParseError(writeDefaultIntersectionMessage(lHead.default, rHead.default));
    }
    s.result = [
      ...s.result,
      {
        kind,
        node: result,
        default: lHead.kind === "defaultables" ? lHead.default : rHead.kind === "defaultables" ? rHead.default : throwInternalError(`Unexpected defaultable intersection from ${lHead.kind} and ${rHead.kind} elements.`)
      }
    ];
  } else
    s.result = [...s.result, { kind, node: result }];
  const lRemaining = s.l.length;
  const rRemaining = s.r.length;
  if (lHead.kind !== "variadic" || lRemaining >= rRemaining && (rHead.kind === "variadic" || rRemaining === 1))
    s.l = lTail;
  if (rHead.kind !== "variadic" || rRemaining >= lRemaining && (lHead.kind === "variadic" || lRemaining === 1))
    s.r = rTail;
  return _intersectSequences(s);
};
const elementIsRequired = (el) => el.kind === "prefix" || el.kind === "postfix";
const createStructuralWriter = (childStringProp) => (node2) => {
  if (node2.props.length || node2.index) {
    const parts = node2.index?.map((index) => index[childStringProp]) ?? [];
    for (const prop of node2.props)
      parts.push(prop[childStringProp]);
    if (node2.undeclared)
      parts.push(`+ (undeclared): ${node2.undeclared}`);
    const objectLiteralDescription = `{ ${parts.join(", ")} }`;
    return node2.sequence ? `${objectLiteralDescription} & ${node2.sequence.description}` : objectLiteralDescription;
  }
  return node2.sequence?.description ?? "{}";
};
const structuralDescription = createStructuralWriter("description");
const structuralExpression = createStructuralWriter("expression");
const intersectPropsAndIndex = (l, r, $) => {
  const kind = l.required ? "required" : "optional";
  if (!r.signature.allows(l.key))
    return null;
  const value2 = intersectNodesRoot(l.value, r.value, $);
  if (value2 instanceof Disjoint) {
    return kind === "optional" ? $.node("optional", {
      key: l.key,
      value: $ark.intrinsic.never.internal
    }) : value2.withPrefixKey(l.key, l.kind);
  }
  return null;
};
const implementation = implementNode({
  kind: "structure",
  hasAssociatedError: false,
  normalize: (schema) => schema,
  applyConfig: (schema, config) => {
    if (!schema.undeclared && config.onUndeclaredKey !== "ignore") {
      return {
        ...schema,
        undeclared: config.onUndeclaredKey
      };
    }
    return schema;
  },
  keys: {
    required: {
      child: true,
      parse: constraintKeyParser("required"),
      reduceIo: (ioKind, inner, nodes) => {
        inner.required = append(inner.required, nodes.map((node2) => ioKind === "in" ? node2.rawIn : node2.rawOut));
        return;
      }
    },
    optional: {
      child: true,
      parse: constraintKeyParser("optional"),
      reduceIo: (ioKind, inner, nodes) => {
        if (ioKind === "in") {
          inner.optional = nodes.map((node2) => node2.rawIn);
          return;
        }
        for (const node2 of nodes) {
          inner[node2.outProp.kind] = append(inner[node2.outProp.kind], node2.outProp.rawOut);
        }
      }
    },
    index: {
      child: true,
      parse: constraintKeyParser("index")
    },
    sequence: {
      child: true,
      parse: constraintKeyParser("sequence")
    },
    undeclared: {
      parse: (behavior) => behavior === "ignore" ? void 0 : behavior,
      reduceIo: (ioKind, inner, value2) => {
        if (value2 === "reject") {
          inner.undeclared = "reject";
          return;
        }
        if (ioKind === "in")
          delete inner.undeclared;
        else
          inner.undeclared = "reject";
      }
    }
  },
  defaults: {
    description: structuralDescription
  },
  intersections: {
    structure: (l, r, ctx) => {
      const lInner = { ...l.inner };
      const rInner = { ...r.inner };
      const disjointResult = new Disjoint();
      if (l.undeclared) {
        const lKey = l.keyof();
        for (const k of r.requiredKeys) {
          if (!lKey.allows(k)) {
            disjointResult.add("presence", $ark.intrinsic.never.internal, r.propsByKey[k].value, {
              path: [k]
            });
          }
        }
        if (rInner.optional)
          rInner.optional = rInner.optional.filter((n) => lKey.allows(n.key));
        if (rInner.index) {
          rInner.index = rInner.index.flatMap((n) => {
            if (n.signature.extends(lKey))
              return n;
            const indexOverlap = intersectNodesRoot(lKey, n.signature, ctx.$);
            if (indexOverlap instanceof Disjoint)
              return [];
            const normalized = normalizeIndex(indexOverlap, n.value, ctx.$);
            if (normalized.required) {
              rInner.required = conflatenate(rInner.required, normalized.required);
            }
            if (normalized.optional) {
              rInner.optional = conflatenate(rInner.optional, normalized.optional);
            }
            return normalized.index ?? [];
          });
        }
      }
      if (r.undeclared) {
        const rKey = r.keyof();
        for (const k of l.requiredKeys) {
          if (!rKey.allows(k)) {
            disjointResult.add("presence", l.propsByKey[k].value, $ark.intrinsic.never.internal, {
              path: [k]
            });
          }
        }
        if (lInner.optional)
          lInner.optional = lInner.optional.filter((n) => rKey.allows(n.key));
        if (lInner.index) {
          lInner.index = lInner.index.flatMap((n) => {
            if (n.signature.extends(rKey))
              return n;
            const indexOverlap = intersectNodesRoot(rKey, n.signature, ctx.$);
            if (indexOverlap instanceof Disjoint)
              return [];
            const normalized = normalizeIndex(indexOverlap, n.value, ctx.$);
            if (normalized.required) {
              lInner.required = conflatenate(lInner.required, normalized.required);
            }
            if (normalized.optional) {
              lInner.optional = conflatenate(lInner.optional, normalized.optional);
            }
            return normalized.index ?? [];
          });
        }
      }
      const baseInner = {};
      if (l.undeclared || r.undeclared) {
        baseInner.undeclared = l.undeclared === "reject" || r.undeclared === "reject" ? "reject" : "delete";
      }
      const childIntersectionResult = intersectConstraints({
        kind: "structure",
        baseInner,
        l: flattenConstraints(lInner),
        r: flattenConstraints(rInner),
        roots: [],
        ctx
      });
      if (childIntersectionResult instanceof Disjoint)
        disjointResult.push(...childIntersectionResult);
      if (disjointResult.length)
        return disjointResult;
      return childIntersectionResult;
    }
  },
  reduce: (inner, $) => {
    if (!inner.required && !inner.optional)
      return;
    const seen = {};
    let updated = false;
    const newOptionalProps = inner.optional ? [...inner.optional] : [];
    if (inner.required) {
      for (let i = 0; i < inner.required.length; i++) {
        const requiredProp = inner.required[i];
        if (requiredProp.key in seen)
          throwParseError(writeDuplicateKeyMessage(requiredProp.key));
        seen[requiredProp.key] = true;
        if (inner.index) {
          for (const index of inner.index) {
            const intersection = intersectPropsAndIndex(requiredProp, index, $);
            if (intersection instanceof Disjoint)
              return intersection;
          }
        }
      }
    }
    if (inner.optional) {
      for (let i = 0; i < inner.optional.length; i++) {
        const optionalProp = inner.optional[i];
        if (optionalProp.key in seen)
          throwParseError(writeDuplicateKeyMessage(optionalProp.key));
        seen[optionalProp.key] = true;
        if (inner.index) {
          for (const index of inner.index) {
            const intersection = intersectPropsAndIndex(optionalProp, index, $);
            if (intersection instanceof Disjoint)
              return intersection;
            if (intersection !== null) {
              newOptionalProps[i] = intersection;
              updated = true;
            }
          }
        }
      }
    }
    if (updated) {
      return $.node("structure", { ...inner, optional: newOptionalProps }, { prereduced: true });
    }
  }
});
class StructureNode extends BaseConstraint {
  impliedBasis = $ark.intrinsic.object.internal;
  impliedSiblings = this.children.flatMap((n) => n.impliedSiblings ?? []);
  props = conflatenate(this.required, this.optional);
  propsByKey = flatMorph(this.props, (i, node2) => [node2.key, node2]);
  propsByKeyReference = registeredReference(this.propsByKey);
  expression = structuralExpression(this);
  requiredKeys = this.required?.map((node2) => node2.key) ?? [];
  optionalKeys = this.optional?.map((node2) => node2.key) ?? [];
  literalKeys = [...this.requiredKeys, ...this.optionalKeys];
  _keyof;
  keyof() {
    if (this._keyof)
      return this._keyof;
    let branches = this.$.units(this.literalKeys).branches;
    if (this.index) {
      for (const { signature } of this.index)
        branches = branches.concat(signature.branches);
    }
    return this._keyof = this.$.node("union", branches);
  }
  map(flatMapProp) {
    return this.$.node("structure", this.props.flatMap(flatMapProp).reduce((structureInner, mapped) => {
      const originalProp = this.propsByKey[mapped.key];
      if (isNode(mapped)) {
        if (mapped.kind !== "required" && mapped.kind !== "optional") {
          return throwParseError(`Map result must have kind "required" or "optional" (was ${mapped.kind})`);
        }
        structureInner[mapped.kind] = append(structureInner[mapped.kind], mapped);
        return structureInner;
      }
      const mappedKind = mapped.kind ?? originalProp?.kind ?? "required";
      const mappedPropInner = flatMorph(mapped, (k, v) => k in Optional.implementation.keys ? [k, v] : []);
      structureInner[mappedKind] = append(structureInner[mappedKind], this.$.node(mappedKind, mappedPropInner));
      return structureInner;
    }, {}));
  }
  assertHasKeys(keys) {
    const invalidKeys = keys.filter((k) => !typeOrTermExtends(k, this.keyof()));
    if (invalidKeys.length) {
      return throwParseError(writeInvalidKeysMessage(this.expression, invalidKeys));
    }
  }
  get(indexer, ...path) {
    let value2;
    let required = false;
    const key = indexerToKey(indexer);
    if ((typeof key === "string" || typeof key === "symbol") && this.propsByKey[key]) {
      value2 = this.propsByKey[key].value;
      required = this.propsByKey[key].required;
    }
    if (this.index) {
      for (const n of this.index) {
        if (typeOrTermExtends(key, n.signature))
          value2 = value2?.and(n.value) ?? n.value;
      }
    }
    if (this.sequence && typeOrTermExtends(key, $ark.intrinsic.nonNegativeIntegerString)) {
      if (hasArkKind(key, "root")) {
        if (this.sequence.variadic)
          value2 = value2?.and(this.sequence.element) ?? this.sequence.element;
      } else {
        const index = Number.parseInt(key);
        if (index < this.sequence.prevariadic.length) {
          const fixedElement = this.sequence.prevariadic[index].node;
          value2 = value2?.and(fixedElement) ?? fixedElement;
          required ||= index < this.sequence.prefixLength;
        } else if (this.sequence.variadic) {
          const nonFixedElement = this.$.node("union", this.sequence.variadicOrPostfix);
          value2 = value2?.and(nonFixedElement) ?? nonFixedElement;
        }
      }
    }
    if (!value2) {
      if (this.sequence?.variadic && hasArkKind(key, "root") && key.extends($ark.intrinsic.number)) {
        return throwParseError(writeNumberIndexMessage(key.expression, this.sequence.expression));
      }
      return throwParseError(writeInvalidKeysMessage(this.expression, [key]));
    }
    const result = value2.get(...path);
    return required ? result : result.or($ark.intrinsic.undefined);
  }
  pick(...keys) {
    this.assertHasKeys(keys);
    return this.$.node("structure", this.filterKeys("pick", keys));
  }
  omit(...keys) {
    this.assertHasKeys(keys);
    return this.$.node("structure", this.filterKeys("omit", keys));
  }
  optionalize() {
    const { required, ...inner } = this.inner;
    return this.$.node("structure", {
      ...inner,
      optional: this.props.map((prop) => prop.hasKind("required") ? this.$.node("optional", prop.inner) : prop)
    });
  }
  require() {
    const { optional, ...inner } = this.inner;
    return this.$.node("structure", {
      ...inner,
      required: this.props.map((prop) => prop.hasKind("optional") ? {
        key: prop.key,
        value: prop.value
      } : prop)
    });
  }
  merge(r) {
    const inner = this.filterKeys("omit", [r.keyof()]);
    if (r.required)
      inner.required = append(inner.required, r.required);
    if (r.optional)
      inner.optional = append(inner.optional, r.optional);
    if (r.index)
      inner.index = append(inner.index, r.index);
    if (r.sequence)
      inner.sequence = r.sequence;
    if (r.undeclared)
      inner.undeclared = r.undeclared;
    else
      delete inner.undeclared;
    return this.$.node("structure", inner);
  }
  filterKeys(operation, keys) {
    const result = makeRootAndArrayPropertiesMutable(this.inner);
    const shouldKeep = (key) => {
      const matchesKey = keys.some((k) => typeOrTermExtends(key, k));
      return operation === "pick" ? matchesKey : !matchesKey;
    };
    if (result.required)
      result.required = result.required.filter((prop) => shouldKeep(prop.key));
    if (result.optional)
      result.optional = result.optional.filter((prop) => shouldKeep(prop.key));
    if (result.index)
      result.index = result.index.filter((index) => shouldKeep(index.signature));
    return result;
  }
  traverseAllows = (data, ctx) => this._traverse("Allows", data, ctx);
  traverseApply = (data, ctx) => this._traverse("Apply", data, ctx);
  _traverse = (traversalKind, data, ctx) => {
    const errorCount = ctx?.currentErrorCount ?? 0;
    for (let i = 0; i < this.props.length; i++) {
      if (traversalKind === "Allows") {
        if (!this.props[i].traverseAllows(data, ctx))
          return false;
      } else {
        this.props[i].traverseApply(data, ctx);
        if (ctx.failFast && ctx.currentErrorCount > errorCount)
          return false;
      }
    }
    if (this.sequence) {
      if (traversalKind === "Allows") {
        if (!this.sequence.traverseAllows(data, ctx))
          return false;
      } else {
        this.sequence.traverseApply(data, ctx);
        if (ctx.failFast && ctx.currentErrorCount > errorCount)
          return false;
      }
    }
    if (this.index || this.undeclared === "reject") {
      const keys = Object.keys(data);
      keys.push(...Object.getOwnPropertySymbols(data));
      for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (this.index) {
          for (const node2 of this.index) {
            if (node2.signature.traverseAllows(k, ctx)) {
              if (traversalKind === "Allows") {
                const result = traverseKey(k, () => node2.value.traverseAllows(data[k], ctx), ctx);
                if (!result)
                  return false;
              } else {
                traverseKey(k, () => node2.value.traverseApply(data[k], ctx), ctx);
                if (ctx.failFast && ctx.currentErrorCount > errorCount)
                  return false;
              }
            }
          }
        }
        if (this.undeclared === "reject" && !this.declaresKey(k)) {
          if (traversalKind === "Allows")
            return false;
          ctx.errorFromNodeContext({
            code: "predicate",
            expected: "removed",
            actual: "",
            relativePath: [k],
            meta: this.meta
          });
          if (ctx.failFast)
            return false;
        }
      }
    }
    if (this.structuralMorph && ctx && !ctx.hasError())
      ctx.queueMorphs([this.structuralMorph]);
    return true;
  };
  get defaultable() {
    return this.cacheGetter("defaultable", this.optional?.filter((o) => o.hasDefault()) ?? []);
  }
  declaresKey = (k) => k in this.propsByKey || this.index?.some((n) => n.signature.allows(k)) || this.sequence !== void 0 && $ark.intrinsic.nonNegativeIntegerString.allows(k);
  _compileDeclaresKey(js) {
    const parts = [];
    if (this.props.length)
      parts.push(`k in ${this.propsByKeyReference}`);
    if (this.index) {
      for (const index of this.index)
        parts.push(js.invoke(index.signature, { kind: "Allows", arg: "k" }));
    }
    if (this.sequence)
      parts.push("$ark.intrinsic.nonNegativeIntegerString.allows(k)");
    return parts.join(" || ") || "false";
  }
  get structuralMorph() {
    return this.cacheGetter("structuralMorph", getPossibleMorph(this));
  }
  structuralMorphRef = this.structuralMorph && registeredReference(this.structuralMorph);
  compile(js) {
    if (js.traversalKind === "Apply")
      js.initializeErrorCount();
    for (const prop of this.props) {
      js.check(prop);
      if (js.traversalKind === "Apply")
        js.returnIfFailFast();
    }
    if (this.sequence) {
      js.check(this.sequence);
      if (js.traversalKind === "Apply")
        js.returnIfFailFast();
    }
    if (this.index || this.undeclared === "reject") {
      js.const("keys", "Object.keys(data)");
      js.line("keys.push(...Object.getOwnPropertySymbols(data))");
      js.for("i < keys.length", () => this.compileExhaustiveEntry(js));
    }
    if (js.traversalKind === "Allows")
      return js.return(true);
    if (this.structuralMorphRef) {
      js.if("ctx && !ctx.hasError()", () => {
        js.line(`ctx.queueMorphs([`);
        precompileMorphs(js, this);
        return js.line("])");
      });
    }
  }
  compileExhaustiveEntry(js) {
    js.const("k", "keys[i]");
    if (this.index) {
      for (const node2 of this.index) {
        js.if(`${js.invoke(node2.signature, { arg: "k", kind: "Allows" })}`, () => js.traverseKey("k", "data[k]", node2.value));
      }
    }
    if (this.undeclared === "reject") {
      js.if(`!(${this._compileDeclaresKey(js)})`, () => {
        if (js.traversalKind === "Allows")
          return js.return(false);
        return js.line(`ctx.errorFromNodeContext({ code: "predicate", expected: "removed", actual: "", relativePath: [k], meta: ${this.compiledMeta} })`).if("ctx.failFast", () => js.return());
      });
    }
    return js;
  }
  reduceJsonSchema(schema, ctx) {
    switch (schema.type) {
      case "object":
        return this.reduceObjectJsonSchema(schema, ctx);
      case "array":
        const arraySchema = this.sequence?.reduceJsonSchema(schema, ctx) ?? schema;
        if (this.props.length || this.index) {
          return ctx.fallback.arrayObject({
            code: "arrayObject",
            base: arraySchema,
            object: this.reduceObjectJsonSchema({ type: "object" }, ctx)
          });
        }
        return arraySchema;
      default:
        return ToJsonSchema.throwInternalOperandError("structure", schema);
    }
  }
  reduceObjectJsonSchema(schema, ctx) {
    if (this.props.length) {
      schema.properties = {};
      for (const prop of this.props) {
        const valueSchema = prop.value.toJsonSchemaRecurse(ctx);
        if (typeof prop.key === "symbol") {
          ctx.fallback.symbolKey({
            code: "symbolKey",
            base: schema,
            key: prop.key,
            value: valueSchema,
            optional: prop.optional
          });
          continue;
        }
        if (prop.hasDefault()) {
          const value2 = typeof prop.default === "function" ? prop.default() : prop.default;
          valueSchema.default = $ark.intrinsic.jsonData.allows(value2) ? value2 : ctx.fallback.defaultValue({
            code: "defaultValue",
            base: valueSchema,
            value: value2
          });
        }
        schema.properties[prop.key] = valueSchema;
      }
      if (this.requiredKeys.length && schema.properties) {
        schema.required = this.requiredKeys.filter((k) => typeof k === "string" && k in schema.properties);
      }
    }
    if (this.index) {
      for (const index of this.index) {
        const valueJsonSchema = index.value.toJsonSchemaRecurse(ctx);
        if (index.signature.equals($ark.intrinsic.string)) {
          schema.additionalProperties = valueJsonSchema;
          continue;
        }
        for (const keyBranch of index.signature.branches) {
          if (!keyBranch.extends($ark.intrinsic.string)) {
            schema = ctx.fallback.symbolKey({
              code: "symbolKey",
              base: schema,
              key: null,
              value: valueJsonSchema,
              optional: false
            });
            continue;
          }
          let keySchema = { type: "string" };
          if (keyBranch.hasKind("morph")) {
            keySchema = ctx.fallback.morph({
              code: "morph",
              base: keyBranch.rawIn.toJsonSchemaRecurse(ctx),
              out: keyBranch.rawOut.toJsonSchemaRecurse(ctx)
            });
          }
          if (!keyBranch.hasKind("intersection")) {
            return throwInternalError(`Unexpected index branch kind ${keyBranch.kind}.`);
          }
          const { pattern } = keyBranch.inner;
          if (pattern) {
            const keySchemaWithPattern = Object.assign(keySchema, {
              pattern: pattern[0].rule
            });
            for (let i = 1; i < pattern.length; i++) {
              keySchema = ctx.fallback.patternIntersection({
                code: "patternIntersection",
                base: keySchemaWithPattern,
                pattern: pattern[i].rule
              });
            }
            schema.patternProperties ??= {};
            schema.patternProperties[keySchemaWithPattern.pattern] = valueJsonSchema;
          }
        }
      }
    }
    if (this.undeclared && !schema.additionalProperties)
      schema.additionalProperties = false;
    return schema;
  }
}
const defaultableMorphsCache = {};
const constructStructuralMorphCacheKey = (node2) => {
  let cacheKey = "";
  for (let i = 0; i < node2.defaultable.length; i++)
    cacheKey += node2.defaultable[i].defaultValueMorphRef;
  if (node2.sequence?.defaultValueMorphsReference)
    cacheKey += node2.sequence?.defaultValueMorphsReference;
  if (node2.undeclared === "delete") {
    cacheKey += "delete !(";
    if (node2.required)
      for (const n of node2.required)
        cacheKey += n.compiledKey + " | ";
    if (node2.optional)
      for (const n of node2.optional)
        cacheKey += n.compiledKey + " | ";
    if (node2.index)
      for (const index of node2.index)
        cacheKey += index.signature.id + " | ";
    if (node2.sequence) {
      if (node2.sequence.maxLength === null)
        cacheKey += intrinsic.nonNegativeIntegerString.id;
      else {
        for (let i = 0; i < node2.sequence.tuple.length; i++)
          cacheKey += i + " | ";
      }
    }
    cacheKey += ")";
  }
  return cacheKey;
};
const getPossibleMorph = (node2) => {
  const cacheKey = constructStructuralMorphCacheKey(node2);
  if (!cacheKey)
    return void 0;
  if (defaultableMorphsCache[cacheKey])
    return defaultableMorphsCache[cacheKey];
  const $arkStructuralMorph = (data, ctx) => {
    for (let i = 0; i < node2.defaultable.length; i++) {
      if (!(node2.defaultable[i].key in data))
        node2.defaultable[i].defaultValueMorph(data, ctx);
    }
    if (node2.sequence?.defaultables) {
      for (let i = data.length - node2.sequence.prefixLength; i < node2.sequence.defaultables.length; i++)
        node2.sequence.defaultValueMorphs[i](data, ctx);
    }
    if (node2.undeclared === "delete") {
      for (const k in data)
        if (!node2.declaresKey(k))
          delete data[k];
    }
    return data;
  };
  return defaultableMorphsCache[cacheKey] = $arkStructuralMorph;
};
const precompileMorphs = (js, node2) => {
  const requiresContext = node2.defaultable.some((node3) => node3.defaultValueMorph.length === 2) || node2.sequence?.defaultValueMorphs.some((morph) => morph.length === 2);
  const args = `(data${requiresContext ? ", ctx" : ""})`;
  return js.block(`${args} => `, (js2) => {
    for (let i = 0; i < node2.defaultable.length; i++) {
      const { serializedKey, defaultValueMorphRef } = node2.defaultable[i];
      js2.if(`!(${serializedKey} in data)`, (js3) => js3.line(`${defaultValueMorphRef}${args}`));
    }
    if (node2.sequence?.defaultables) {
      js2.for(`i < ${node2.sequence.defaultables.length}`, (js3) => js3.set(`data[i]`, 5), `data.length - ${node2.sequence.prefixLength}`);
    }
    if (node2.undeclared === "delete") {
      js2.forIn("data", (js3) => js3.if(`!(${node2._compileDeclaresKey(js3)})`, (js4) => js4.line(`delete data[k]`)));
    }
    return js2.return("data");
  });
};
const Structure = {
  implementation,
  Node: StructureNode
};
const indexerToKey = (indexable) => {
  if (hasArkKind(indexable, "root") && indexable.hasKind("unit"))
    indexable = indexable.unit;
  if (typeof indexable === "number")
    indexable = `${indexable}`;
  return indexable;
};
const writeNumberIndexMessage = (indexExpression, sequenceExpression) => `${indexExpression} is not allowed as an array index on ${sequenceExpression}. Use the 'nonNegativeIntegerString' keyword instead.`;
const normalizeIndex = (signature, value2, $) => {
  const [enumerableBranches, nonEnumerableBranches] = spliterate(signature.branches, (k) => k.hasKind("unit"));
  if (!enumerableBranches.length)
    return { index: $.node("index", { signature, value: value2 }) };
  const normalized = {};
  for (const n of enumerableBranches) {
    const prop = $.node("required", { key: n.unit, value: value2 });
    normalized[prop.kind] = append(normalized[prop.kind], prop);
  }
  if (nonEnumerableBranches.length) {
    normalized.index = $.node("index", {
      signature: nonEnumerableBranches,
      value: value2
    });
  }
  return normalized;
};
const typeKeyToString = (k) => hasArkKind(k, "root") ? k.expression : printable(k);
const writeInvalidKeysMessage = (o, keys) => `Key${keys.length === 1 ? "" : "s"} ${keys.map(typeKeyToString).join(", ")} ${keys.length === 1 ? "does" : "do"} not exist on ${o}`;
const writeDuplicateKeyMessage = (key) => `Duplicate key ${compileSerializedValue(key)}`;
const nodeImplementationsByKind = {
  ...boundImplementationsByKind,
  alias: Alias.implementation,
  domain: Domain.implementation,
  unit: Unit.implementation,
  proto: Proto.implementation,
  union: Union.implementation,
  morph: Morph.implementation,
  intersection: Intersection.implementation,
  divisor: Divisor.implementation,
  pattern: Pattern.implementation,
  predicate: Predicate.implementation,
  required: Required$1.implementation,
  optional: Optional.implementation,
  index: Index.implementation,
  sequence: Sequence.implementation,
  structure: Structure.implementation
};
$ark.defaultConfig = withAlphabetizedKeys(Object.assign(flatMorph(nodeImplementationsByKind, (kind, implementation2) => [
  kind,
  implementation2.defaults
]), {
  jitless: envHasCsp(),
  clone: deepClone,
  onUndeclaredKey: "ignore",
  exactOptionalPropertyTypes: true,
  numberAllowsNaN: false,
  dateAllowsInvalid: false,
  onFail: null,
  keywords: {},
  toJsonSchema: ToJsonSchema.defaultConfig
}));
$ark.resolvedConfig = mergeConfigs($ark.defaultConfig, $ark.config);
const nodeClassesByKind = {
  ...boundClassesByKind,
  alias: Alias.Node,
  domain: Domain.Node,
  unit: Unit.Node,
  proto: Proto.Node,
  union: Union.Node,
  morph: Morph.Node,
  intersection: Intersection.Node,
  divisor: Divisor.Node,
  pattern: Pattern.Node,
  predicate: Predicate.Node,
  required: Required$1.Node,
  optional: Optional.Node,
  index: Index.Node,
  sequence: Sequence.Node,
  structure: Structure.Node
};
class RootModule extends DynamicBase {
  // ensure `[arkKind]` is non-enumerable so it doesn't get spread on import/export
  get [arkKind]() {
    return "module";
  }
}
const bindModule = (module, $) => new RootModule(flatMorph(module, (alias, value2) => [
  alias,
  hasArkKind(value2, "module") ? bindModule(value2, $) : $.bindReference(value2)
]));
const schemaBranchesOf = (schema) => isArray(schema) ? schema : "branches" in schema && isArray(schema.branches) ? schema.branches : void 0;
const throwMismatchedNodeRootError = (expected, actual) => throwParseError(`Node of kind ${actual} is not valid as a ${expected} definition`);
const writeDuplicateAliasError = (alias) => `#${alias} duplicates public alias ${alias}`;
const scopesByName = {};
$ark.ambient ??= {};
let rawUnknownUnion;
const rootScopeFnName = "function $";
const precompile = (references) => bindPrecompilation(references, precompileReferences(references));
const bindPrecompilation = (references, precompiler) => {
  const precompilation = precompiler.write(rootScopeFnName, 4);
  const compiledTraversals = precompiler.compile()();
  for (const node2 of references) {
    if (node2.precompilation) {
      continue;
    }
    node2.traverseAllows = compiledTraversals[`${node2.id}Allows`].bind(compiledTraversals);
    if (node2.isRoot() && !node2.allowsRequiresContext) {
      node2.allows = node2.traverseAllows;
    }
    node2.traverseApply = compiledTraversals[`${node2.id}Apply`].bind(compiledTraversals);
    if (compiledTraversals[`${node2.id}Optimistic`]) {
      node2.traverseOptimistic = compiledTraversals[`${node2.id}Optimistic`].bind(compiledTraversals);
    }
    node2.precompilation = precompilation;
  }
};
const precompileReferences = (references) => new CompiledFunction().return(references.reduce((js, node2) => {
  const allowsCompiler = new NodeCompiler({ kind: "Allows" }).indent();
  node2.compile(allowsCompiler);
  const allowsJs = allowsCompiler.write(`${node2.id}Allows`);
  const applyCompiler = new NodeCompiler({ kind: "Apply" }).indent();
  node2.compile(applyCompiler);
  const applyJs = applyCompiler.write(`${node2.id}Apply`);
  const result = `${js}${allowsJs},
${applyJs},
`;
  if (!node2.hasKind("union"))
    return result;
  const optimisticCompiler = new NodeCompiler({
    kind: "Allows",
    optimistic: true
  }).indent();
  node2.compile(optimisticCompiler);
  const optimisticJs = optimisticCompiler.write(`${node2.id}Optimistic`);
  return `${result}${optimisticJs},
`;
}, "{\n") + "}");
class BaseScope {
  config;
  resolvedConfig;
  name;
  get [arkKind]() {
    return "scope";
  }
  referencesById = {};
  references = [];
  resolutions = {};
  exportedNames = [];
  aliases = {};
  resolved = false;
  nodesByHash = {};
  intrinsic;
  constructor(def, config) {
    this.config = mergeConfigs($ark.config, config);
    this.resolvedConfig = mergeConfigs($ark.resolvedConfig, config);
    this.name = this.resolvedConfig.name ?? `anonymousScope${Object.keys(scopesByName).length}`;
    if (this.name in scopesByName)
      throwParseError(`A Scope already named ${this.name} already exists`);
    scopesByName[this.name] = this;
    const aliasEntries = Object.entries(def).map((entry) => this.preparseOwnAliasEntry(...entry));
    for (const [k, v] of aliasEntries) {
      let name = k;
      if (k[0] === "#") {
        name = k.slice(1);
        if (name in this.aliases)
          throwParseError(writeDuplicateAliasError(name));
        this.aliases[name] = v;
      } else {
        if (name in this.aliases)
          throwParseError(writeDuplicateAliasError(k));
        this.aliases[name] = v;
        this.exportedNames.push(name);
      }
      if (!hasArkKind(v, "module") && !hasArkKind(v, "generic") && !isThunk(v)) {
        const preparsed = this.preparseOwnDefinitionFormat(v, { alias: name });
        this.resolutions[name] = hasArkKind(preparsed, "root") ? this.bindReference(preparsed) : this.createParseContext(preparsed).id;
      }
    }
    rawUnknownUnion ??= this.node("union", {
      branches: [
        "string",
        "number",
        "object",
        "bigint",
        "symbol",
        { unit: true },
        { unit: false },
        { unit: void 0 },
        { unit: null }
      ]
    }, { prereduced: true });
    this.nodesByHash[rawUnknownUnion.hash] = this.node("intersection", {}, { prereduced: true });
    this.intrinsic = $ark.intrinsic ? flatMorph($ark.intrinsic, (k, v) => (
      // don't include cyclic aliases from JSON scope
      k.startsWith("json") ? [] : [k, this.bindReference(v)]
    )) : {};
  }
  cacheGetter(name, value2) {
    Object.defineProperty(this, name, { value: value2 });
    return value2;
  }
  get internal() {
    return this;
  }
  // json is populated when the scope is exported, so ensure it is populated
  // before allowing external access
  _json;
  get json() {
    if (!this._json)
      this.export();
    return this._json;
  }
  defineSchema(def) {
    return def;
  }
  generic = (...params) => {
    const $ = this;
    return (def, possibleHkt) => new GenericRoot(params, possibleHkt ? new LazyGenericBody(def) : def, $, $, possibleHkt ?? null);
  };
  units = (values, opts) => {
    const uniqueValues = [];
    for (const value2 of values)
      if (!uniqueValues.includes(value2))
        uniqueValues.push(value2);
    const branches = uniqueValues.map((unit) => this.node("unit", { unit }, opts));
    return this.node("union", branches, {
      ...opts,
      prereduced: true
    });
  };
  lazyResolutions = [];
  lazilyResolve(resolve, syntheticAlias) {
    const node2 = this.node("alias", {
      reference: syntheticAlias ?? "synthetic",
      resolve
    }, { prereduced: true });
    if (!this.resolved)
      this.lazyResolutions.push(node2);
    return node2;
  }
  schema = (schema, opts) => this.finalize(this.parseSchema(schema, opts));
  parseSchema = (schema, opts) => this.node(schemaKindOf(schema), schema, opts);
  preparseNode(kinds, schema, opts) {
    let kind = typeof kinds === "string" ? kinds : schemaKindOf(schema, kinds);
    if (isNode(schema) && schema.kind === kind)
      return schema;
    if (kind === "alias" && !opts?.prereduced) {
      const { reference: reference2 } = Alias.implementation.normalize(schema, this);
      if (reference2.startsWith("$")) {
        const resolution = this.resolveRoot(reference2.slice(1));
        schema = resolution;
        kind = resolution.kind;
      }
    } else if (kind === "union" && hasDomain(schema, "object")) {
      const branches = schemaBranchesOf(schema);
      if (branches?.length === 1) {
        schema = branches[0];
        kind = schemaKindOf(schema);
      }
    }
    if (isNode(schema) && schema.kind === kind)
      return schema;
    const impl = nodeImplementationsByKind[kind];
    const normalizedSchema = impl.normalize?.(schema, this) ?? schema;
    if (isNode(normalizedSchema)) {
      return normalizedSchema.kind === kind ? normalizedSchema : throwMismatchedNodeRootError(kind, normalizedSchema.kind);
    }
    return {
      ...opts,
      $: this,
      kind,
      def: normalizedSchema,
      prefix: opts.alias ?? kind
    };
  }
  bindReference(reference2) {
    let bound;
    if (isNode(reference2)) {
      bound = reference2.$ === this ? reference2 : new reference2.constructor(reference2.attachments, this);
    } else {
      bound = reference2.$ === this ? reference2 : new GenericRoot(reference2.params, reference2.bodyDef, reference2.$, this, reference2.hkt);
    }
    if (!this.resolved) {
      Object.assign(this.referencesById, bound.referencesById);
    }
    return bound;
  }
  resolveRoot(name) {
    return this.maybeResolveRoot(name) ?? throwParseError(writeUnresolvableMessage(name));
  }
  maybeResolveRoot(name) {
    const result = this.maybeResolve(name);
    if (hasArkKind(result, "generic"))
      return;
    return result;
  }
  /** If name is a valid reference to a submodule alias, return its resolution  */
  maybeResolveSubalias(name) {
    return maybeResolveSubalias(this.aliases, name) ?? maybeResolveSubalias(this.ambient, name);
  }
  get ambient() {
    return $ark.ambient;
  }
  maybeResolve(name) {
    const cached2 = this.resolutions[name];
    if (cached2) {
      if (typeof cached2 !== "string")
        return this.bindReference(cached2);
      const v = nodesByRegisteredId[cached2];
      if (hasArkKind(v, "root"))
        return this.resolutions[name] = v;
      if (hasArkKind(v, "context")) {
        if (v.phase === "resolving") {
          return this.node("alias", { reference: `$${name}` }, { prereduced: true });
        }
        if (v.phase === "resolved") {
          return throwInternalError(`Unexpected resolved context for was uncached by its scope: ${printable(v)}`);
        }
        v.phase = "resolving";
        const node2 = this.bindReference(this.parseOwnDefinitionFormat(v.def, v));
        v.phase = "resolved";
        nodesByRegisteredId[node2.id] = node2;
        nodesByRegisteredId[v.id] = node2;
        return this.resolutions[name] = node2;
      }
      return throwInternalError(`Unexpected nodesById entry for ${cached2}: ${printable(v)}`);
    }
    let def = this.aliases[name] ?? this.ambient?.[name];
    if (!def)
      return this.maybeResolveSubalias(name);
    def = this.normalizeRootScopeValue(def);
    if (hasArkKind(def, "generic"))
      return this.resolutions[name] = this.bindReference(def);
    if (hasArkKind(def, "module")) {
      if (!def.root)
        throwParseError(writeMissingSubmoduleAccessMessage(name));
      return this.resolutions[name] = this.bindReference(def.root);
    }
    return this.resolutions[name] = this.parse(def, {
      alias: name
    });
  }
  createParseContext(input) {
    const id = input.id ?? registerNodeId(input.prefix);
    return nodesByRegisteredId[id] = Object.assign(input, {
      [arkKind]: "context",
      $: this,
      id,
      phase: "unresolved"
    });
  }
  traversal(root) {
    return new Traversal(root, this.resolvedConfig);
  }
  import(...names) {
    return new RootModule(flatMorph(this.export(...names), (alias, value2) => [
      `#${alias}`,
      value2
    ]));
  }
  precompilation;
  _exportedResolutions;
  _exports;
  export(...names) {
    if (!this._exports) {
      this._exports = {};
      for (const name of this.exportedNames) {
        const def = this.aliases[name];
        this._exports[name] = hasArkKind(def, "module") ? bindModule(def, this) : bootstrapAliasReferences(this.maybeResolve(name));
      }
      for (const node2 of this.lazyResolutions)
        node2.resolution;
      this._exportedResolutions = resolutionsOfModule(this, this._exports);
      this._json = resolutionsToJson(this._exportedResolutions);
      Object.assign(this.resolutions, this._exportedResolutions);
      this.references = Object.values(this.referencesById);
      if (!this.resolvedConfig.jitless) {
        const precompiler = precompileReferences(this.references);
        this.precompilation = precompiler.write(rootScopeFnName, 4);
        bindPrecompilation(this.references, precompiler);
      }
      this.resolved = true;
    }
    const namesToExport = names.length ? names : this.exportedNames;
    return new RootModule(flatMorph(namesToExport, (_, name) => [
      name,
      this._exports[name]
    ]));
  }
  resolve(name) {
    return this.export()[name];
  }
  node = (kinds, nodeSchema, opts = {}) => {
    const ctxOrNode = this.preparseNode(kinds, nodeSchema, opts);
    if (isNode(ctxOrNode))
      return this.bindReference(ctxOrNode);
    const ctx = this.createParseContext(ctxOrNode);
    const node2 = parseNode(ctx);
    const bound = this.bindReference(node2);
    return nodesByRegisteredId[ctx.id] = bound;
  };
  parse = (def, opts = {}) => this.finalize(this.parseDefinition(def, opts));
  parseDefinition(def, opts = {}) {
    if (hasArkKind(def, "root"))
      return this.bindReference(def);
    const ctxInputOrNode = this.preparseOwnDefinitionFormat(def, opts);
    if (hasArkKind(ctxInputOrNode, "root"))
      return this.bindReference(ctxInputOrNode);
    const ctx = this.createParseContext(ctxInputOrNode);
    nodesByRegisteredId[ctx.id] = ctx;
    let node2 = this.bindReference(this.parseOwnDefinitionFormat(def, ctx));
    if (node2.isCyclic)
      node2 = withId(node2, ctx.id);
    nodesByRegisteredId[ctx.id] = node2;
    return node2;
  }
  finalize(node2) {
    bootstrapAliasReferences(node2);
    if (!node2.precompilation && !this.resolvedConfig.jitless)
      precompile(node2.references);
    return node2;
  }
}
class SchemaScope extends BaseScope {
  parseOwnDefinitionFormat(def, ctx) {
    return parseNode(ctx);
  }
  preparseOwnDefinitionFormat(schema, opts) {
    return this.preparseNode(schemaKindOf(schema), schema, opts);
  }
  preparseOwnAliasEntry(k, v) {
    return [k, v];
  }
  normalizeRootScopeValue(v) {
    return v;
  }
}
const bootstrapAliasReferences = (resolution) => {
  const aliases = resolution.references.filter((node2) => node2.hasKind("alias"));
  for (const aliasNode of aliases) {
    Object.assign(aliasNode.referencesById, aliasNode.resolution.referencesById);
    for (const ref of resolution.references) {
      if (aliasNode.id in ref.referencesById)
        Object.assign(ref.referencesById, aliasNode.referencesById);
    }
  }
  return resolution;
};
const resolutionsToJson = (resolutions) => flatMorph(resolutions, (k, v) => [
  k,
  hasArkKind(v, "root") || hasArkKind(v, "generic") ? v.json : hasArkKind(v, "module") ? resolutionsToJson(v) : throwInternalError(`Unexpected resolution ${printable(v)}`)
]);
const maybeResolveSubalias = (base, name) => {
  const dotIndex = name.indexOf(".");
  if (dotIndex === -1)
    return;
  const dotPrefix = name.slice(0, dotIndex);
  const prefixSchema = base[dotPrefix];
  if (prefixSchema === void 0)
    return;
  if (!hasArkKind(prefixSchema, "module"))
    return throwParseError(writeNonSubmoduleDotMessage(dotPrefix));
  const subalias = name.slice(dotIndex + 1);
  const resolution = prefixSchema[subalias];
  if (resolution === void 0)
    return maybeResolveSubalias(prefixSchema, subalias);
  if (hasArkKind(resolution, "root") || hasArkKind(resolution, "generic"))
    return resolution;
  if (hasArkKind(resolution, "module")) {
    return resolution.root ?? throwParseError(writeMissingSubmoduleAccessMessage(name));
  }
  throwInternalError(`Unexpected resolution for alias '${name}': ${printable(resolution)}`);
};
const schemaScope = (aliases, config) => new SchemaScope(aliases, config);
const rootSchemaScope = new SchemaScope({});
const resolutionsOfModule = ($, typeSet) => {
  const result = {};
  for (const k in typeSet) {
    const v = typeSet[k];
    if (hasArkKind(v, "module")) {
      const innerResolutions = resolutionsOfModule($, v);
      const prefixedResolutions = flatMorph(innerResolutions, (innerK, innerV) => [`${k}.${innerK}`, innerV]);
      Object.assign(result, prefixedResolutions);
    } else if (hasArkKind(v, "root") || hasArkKind(v, "generic"))
      result[k] = v;
    else
      throwInternalError(`Unexpected scope resolution ${printable(v)}`);
  }
  return result;
};
const writeUnresolvableMessage = (token) => `'${token}' is unresolvable`;
const writeNonSubmoduleDotMessage = (name) => `'${name}' must reference a module to be accessed using dot syntax`;
const writeMissingSubmoduleAccessMessage = (name) => `Reference to submodule '${name}' must specify an alias`;
rootSchemaScope.export();
const rootSchema = rootSchemaScope.schema;
const node = rootSchemaScope.node;
rootSchemaScope.defineSchema;
const genericNode = rootSchemaScope.generic;
const arrayIndexSource = `^(?:0|[1-9]\\d*)$`;
const arrayIndexMatcher = new RegExp(arrayIndexSource);
registeredReference(arrayIndexMatcher);
const intrinsicBases = schemaScope({
  bigint: "bigint",
  // since we know this won't be reduced, it can be safely cast to a union
  boolean: [{ unit: false }, { unit: true }],
  false: { unit: false },
  never: [],
  null: { unit: null },
  number: "number",
  object: "object",
  string: "string",
  symbol: "symbol",
  true: { unit: true },
  unknown: {},
  undefined: { unit: void 0 },
  Array,
  Date
}, { prereducedAliases: true }).export();
$ark.intrinsic = { ...intrinsicBases };
const intrinsicRoots = schemaScope({
  integer: {
    domain: "number",
    divisor: 1
  },
  lengthBoundable: ["string", Array],
  key: ["string", "symbol"],
  nonNegativeIntegerString: { domain: "string", pattern: arrayIndexSource }
}, { prereducedAliases: true }).export();
Object.assign($ark.intrinsic, intrinsicRoots);
const intrinsicJson = schemaScope({
  jsonPrimitive: [
    "string",
    "number",
    { unit: true },
    { unit: false },
    { unit: null }
  ],
  jsonObject: {
    domain: "object",
    index: {
      signature: "string",
      value: "$jsonData"
    }
  },
  jsonData: ["$jsonPrimitive", "$jsonObject"]
}, { prereducedAliases: true }).export();
const intrinsic = {
  ...intrinsicBases,
  ...intrinsicRoots,
  ...intrinsicJson,
  emptyStructure: node("structure", {}, { prereduced: true })
};
$ark.intrinsic = { ...intrinsic };
const regex$1 = ((src, flags) => new RegExp(src, flags));
Object.assign(regex$1, { as: regex$1 });
const isDateLiteral = (value2) => typeof value2 === "string" && value2[0] === "d" && (value2[1] === "'" || value2[1] === '"') && value2[value2.length - 1] === value2[1];
const isValidDate = (d) => d.toString() !== "Invalid Date";
const extractDateLiteralSource = (literal) => literal.slice(2, -1);
const writeInvalidDateMessage = (source) => `'${source}' could not be parsed by the Date constructor`;
const tryParseDate = (source, errorOnFail) => maybeParseDate(source, errorOnFail);
const maybeParseDate = (source, errorOnFail) => {
  const stringParsedDate = new Date(source);
  if (isValidDate(stringParsedDate))
    return stringParsedDate;
  const epochMillis = tryParseNumber(source);
  if (epochMillis !== void 0) {
    const numberParsedDate = new Date(epochMillis);
    if (isValidDate(numberParsedDate))
      return numberParsedDate;
  }
  return errorOnFail ? throwParseError(errorOnFail === true ? writeInvalidDateMessage(source) : errorOnFail) : void 0;
};
const regexExecArray = rootSchema({
  proto: "Array",
  sequence: "string",
  required: {
    key: "groups",
    value: ["object", { unit: void 0 }]
  }
});
const parseEnclosed = (s, enclosing) => {
  const enclosed = s.scanner.shiftUntilEscapable(untilLookaheadIsClosing[enclosingTokens[enclosing]]);
  if (s.scanner.lookahead === "")
    return s.error(writeUnterminatedEnclosedMessage(enclosed, enclosing));
  s.scanner.shift();
  if (enclosing in enclosingRegexTokens) {
    let regex2;
    try {
      regex2 = new RegExp(enclosed);
    } catch (e) {
      throwParseError(String(e));
    }
    s.root = s.ctx.$.node("intersection", {
      domain: "string",
      pattern: enclosed
    }, { prereduced: true });
    if (enclosing === "x/") {
      s.root = s.ctx.$.node("morph", {
        in: s.root,
        morphs: (s2) => regex2.exec(s2),
        declaredOut: regexExecArray
      });
    }
  } else if (isKeyOf(enclosing, enclosingQuote))
    s.root = s.ctx.$.node("unit", { unit: enclosed });
  else {
    const date = tryParseDate(enclosed, writeInvalidDateMessage(enclosed));
    s.root = s.ctx.$.node("unit", { meta: enclosed, unit: date });
  }
};
const enclosingQuote = {
  "'": 1,
  '"': 1
};
const enclosingChar = {
  "/": 1,
  "'": 1,
  '"': 1
};
const enclosingLiteralTokens = {
  "d'": "'",
  'd"': '"',
  "'": "'",
  '"': '"'
};
const enclosingRegexTokens = {
  "/": "/",
  "x/": "/"
};
const enclosingTokens = {
  ...enclosingLiteralTokens,
  ...enclosingRegexTokens
};
const untilLookaheadIsClosing = {
  "'": (scanner) => scanner.lookahead === `'`,
  '"': (scanner) => scanner.lookahead === `"`,
  "/": (scanner) => scanner.lookahead === `/`
};
const enclosingCharDescriptions = {
  '"': "double-quote",
  "'": "single-quote",
  "/": "forward slash"
};
const writeUnterminatedEnclosedMessage = (fragment, enclosingStart) => `${enclosingStart}${fragment} requires a closing ${enclosingCharDescriptions[enclosingTokens[enclosingStart]]}`;
const writePrefixedPrivateReferenceMessage = (name) => `Private type references should not include '#'. Use '${name}' instead.`;
const shallowOptionalMessage = "Optional definitions like 'string?' are only valid as properties in an object or tuple";
const shallowDefaultableMessage = "Defaultable definitions like 'number = 0' are only valid as properties in an object or tuple";
const terminatingChars = {
  "<": 1,
  ">": 1,
  "=": 1,
  "|": 1,
  "&": 1,
  ")": 1,
  "[": 1,
  "%": 1,
  ",": 1,
  ":": 1,
  "?": 1,
  "#": 1,
  ...whitespaceChars
};
const lookaheadIsFinalizing = (lookahead, unscanned) => lookahead === ">" ? unscanned[0] === "=" ? (
  // >== would only occur in an expression like Array<number>==5
  // otherwise, >= would only occur as part of a bound like number>=5
  unscanned[1] === "="
) : unscanned.trimStart() === "" || isKeyOf(unscanned.trimStart()[0], terminatingChars) : lookahead === "=" ? unscanned[0] !== "=" : lookahead === "," || lookahead === "?";
const parseGenericArgs = (name, g, s) => _parseGenericArgs(name, g, s, []);
const _parseGenericArgs = (name, g, s, argNodes) => {
  const argState = s.parseUntilFinalizer();
  argNodes.push(argState.root);
  if (argState.finalizer === ">") {
    if (argNodes.length !== g.params.length) {
      return s.error(writeInvalidGenericArgCountMessage(name, g.names, argNodes.map((arg) => arg.expression)));
    }
    return argNodes;
  }
  if (argState.finalizer === ",")
    return _parseGenericArgs(name, g, s, argNodes);
  return argState.error(writeUnclosedGroupMessage(">"));
};
const writeInvalidGenericArgCountMessage = (name, params, argDefs) => `${name}<${params.join(", ")}> requires exactly ${params.length} args (got ${argDefs.length}${argDefs.length === 0 ? "" : `: ${argDefs.join(", ")}`})`;
const parseUnenclosed = (s) => {
  const token = s.scanner.shiftUntilLookahead(terminatingChars);
  if (token === "keyof")
    s.addPrefix("keyof");
  else
    s.root = unenclosedToNode(s, token);
};
const parseGenericInstantiation = (name, g, s) => {
  s.scanner.shiftUntilNonWhitespace();
  const lookahead = s.scanner.shift();
  if (lookahead !== "<")
    return s.error(writeInvalidGenericArgCountMessage(name, g.names, []));
  const parsedArgs = parseGenericArgs(name, g, s);
  return g(...parsedArgs);
};
const unenclosedToNode = (s, token) => maybeParseReference(s, token) ?? maybeParseUnenclosedLiteral(s, token) ?? s.error(token === "" ? s.scanner.lookahead === "#" ? writePrefixedPrivateReferenceMessage(s.shiftedBy(1).scanner.shiftUntilLookahead(terminatingChars)) : writeMissingOperandMessage(s) : writeUnresolvableMessage(token));
const maybeParseReference = (s, token) => {
  if (s.ctx.args?.[token]) {
    const arg = s.ctx.args[token];
    if (typeof arg !== "string")
      return arg;
    return s.ctx.$.node("alias", { reference: arg }, { prereduced: true });
  }
  const resolution = s.ctx.$.maybeResolve(token);
  if (hasArkKind(resolution, "root"))
    return resolution;
  if (resolution === void 0)
    return;
  if (hasArkKind(resolution, "generic"))
    return parseGenericInstantiation(token, resolution, s);
  return throwParseError(`Unexpected resolution ${printable(resolution)}`);
};
const maybeParseUnenclosedLiteral = (s, token) => {
  const maybeNumber = tryParseWellFormedNumber(token);
  if (maybeNumber !== void 0)
    return s.ctx.$.node("unit", { unit: maybeNumber });
  const maybeBigint = tryParseWellFormedBigint(token);
  if (maybeBigint !== void 0)
    return s.ctx.$.node("unit", { unit: maybeBigint });
};
const writeMissingOperandMessage = (s) => {
  const operator = s.previousOperator();
  return operator ? writeMissingRightOperandMessage(operator, s.scanner.unscanned) : writeExpressionExpectedMessage(s.scanner.unscanned);
};
const writeMissingRightOperandMessage = (token, unscanned = "") => `Token '${token}' requires a right operand${unscanned ? ` before '${unscanned}'` : ""}`;
const writeExpressionExpectedMessage = (unscanned) => `Expected an expression${unscanned ? ` before '${unscanned}'` : ""}`;
const parseOperand = (s) => s.scanner.lookahead === "" ? s.error(writeMissingOperandMessage(s)) : s.scanner.lookahead === "(" ? s.shiftedBy(1).reduceGroupOpen() : s.scanner.lookaheadIsIn(enclosingChar) ? parseEnclosed(s, s.scanner.shift()) : s.scanner.lookaheadIsIn(whitespaceChars) ? parseOperand(s.shiftedBy(1)) : s.scanner.lookahead === "d" ? s.scanner.nextLookahead in enclosingQuote ? parseEnclosed(s, `${s.scanner.shift()}${s.scanner.shift()}`) : parseUnenclosed(s) : s.scanner.lookahead === "x" ? s.scanner.nextLookahead === "/" ? s.shiftedBy(2) && parseEnclosed(s, "x/") : parseUnenclosed(s) : parseUnenclosed(s);
const minComparators = {
  ">": true,
  ">=": true
};
const maxComparators = {
  "<": true,
  "<=": true
};
const invertedComparators = {
  "<": ">",
  ">": "<",
  "<=": ">=",
  ">=": "<=",
  "==": "=="
};
const writeOpenRangeMessage = (min, comparator) => `Left bounds are only valid when paired with right bounds (try ...${comparator}${min})`;
const writeUnpairableComparatorMessage = (comparator) => `Left-bounded expressions must specify their limits using < or <= (was ${comparator})`;
const writeMultipleLeftBoundsMessage = (openLimit, openComparator, limit, comparator) => `An expression may have at most one left bound (parsed ${openLimit}${invertedComparators[openComparator]}, ${limit}${invertedComparators[comparator]})`;
const parseBound = (s, start) => {
  const comparator = shiftComparator(s, start);
  if (s.root.hasKind("unit")) {
    if (typeof s.root.unit === "number") {
      s.reduceLeftBound(s.root.unit, comparator);
      s.unsetRoot();
      return;
    }
    if (s.root.unit instanceof Date) {
      const literal = `d'${s.root.description ?? s.root.unit.toISOString()}'`;
      s.unsetRoot();
      s.reduceLeftBound(literal, comparator);
      return;
    }
  }
  return parseRightBound(s, comparator);
};
const comparatorStartChars = {
  "<": 1,
  ">": 1,
  "=": 1
};
const shiftComparator = (s, start) => s.scanner.lookaheadIs("=") ? `${start}${s.scanner.shift()}` : start;
const getBoundKinds = (comparator, limit, root, boundKind) => {
  if (root.extends($ark.intrinsic.number)) {
    if (typeof limit !== "number") {
      return throwParseError(writeInvalidLimitMessage(comparator, limit, boundKind));
    }
    return comparator === "==" ? ["min", "max"] : comparator[0] === ">" ? ["min"] : ["max"];
  }
  if (root.extends($ark.intrinsic.lengthBoundable)) {
    if (typeof limit !== "number") {
      return throwParseError(writeInvalidLimitMessage(comparator, limit, boundKind));
    }
    return comparator === "==" ? ["exactLength"] : comparator[0] === ">" ? ["minLength"] : ["maxLength"];
  }
  if (root.extends($ark.intrinsic.Date)) {
    return comparator === "==" ? ["after", "before"] : comparator[0] === ">" ? ["after"] : ["before"];
  }
  return throwParseError(writeUnboundableMessage(root.expression));
};
const openLeftBoundToRoot = (leftBound) => ({
  rule: isDateLiteral(leftBound.limit) ? extractDateLiteralSource(leftBound.limit) : leftBound.limit,
  exclusive: leftBound.comparator.length === 1
});
const parseRightBound = (s, comparator) => {
  const previousRoot = s.unsetRoot();
  const previousScannerIndex = s.scanner.location;
  s.parseOperand();
  const limitNode = s.unsetRoot();
  const limitToken = s.scanner.sliceChars(previousScannerIndex, s.scanner.location);
  s.root = previousRoot;
  if (!limitNode.hasKind("unit") || typeof limitNode.unit !== "number" && !(limitNode.unit instanceof Date))
    return s.error(writeInvalidLimitMessage(comparator, limitToken, "right"));
  const limit = limitNode.unit;
  const exclusive = comparator.length === 1;
  const boundKinds = getBoundKinds(comparator, typeof limit === "number" ? limit : limitToken, previousRoot, "right");
  for (const kind of boundKinds) {
    s.constrainRoot(kind, comparator === "==" ? { rule: limit } : { rule: limit, exclusive });
  }
  if (!s.branches.leftBound)
    return;
  if (!isKeyOf(comparator, maxComparators))
    return s.error(writeUnpairableComparatorMessage(comparator));
  const lowerBoundKind = getBoundKinds(s.branches.leftBound.comparator, s.branches.leftBound.limit, previousRoot, "left");
  s.constrainRoot(lowerBoundKind[0], openLeftBoundToRoot(s.branches.leftBound));
  s.branches.leftBound = null;
};
const writeInvalidLimitMessage = (comparator, limit, boundKind) => `Comparator ${boundKind === "left" ? invertedComparators[comparator] : comparator} must be ${boundKind === "left" ? "preceded" : "followed"} by a corresponding literal (was ${limit})`;
const parseBrand = (s) => {
  s.scanner.shiftUntilNonWhitespace();
  const brandName = s.scanner.shiftUntilLookahead(terminatingChars);
  s.root = s.root.brand(brandName);
};
const parseDivisor = (s) => {
  s.scanner.shiftUntilNonWhitespace();
  const divisorToken = s.scanner.shiftUntilLookahead(terminatingChars);
  const divisor = tryParseInteger(divisorToken, {
    errorOnFail: writeInvalidDivisorMessage(divisorToken)
  });
  if (divisor === 0)
    s.error(writeInvalidDivisorMessage(0));
  s.root = s.root.constrain("divisor", divisor);
};
const writeInvalidDivisorMessage = (divisor) => `% operator must be followed by a non-zero integer literal (was ${divisor})`;
const parseOperator = (s) => {
  const lookahead = s.scanner.shift();
  return lookahead === "" ? s.finalize("") : lookahead === "[" ? s.scanner.shift() === "]" ? s.setRoot(s.root.array()) : s.error(incompleteArrayTokenMessage) : lookahead === "|" ? s.scanner.lookahead === ">" ? s.shiftedBy(1).pushRootToBranch("|>") : s.pushRootToBranch(lookahead) : lookahead === "&" ? s.pushRootToBranch(lookahead) : lookahead === ")" ? s.finalizeGroup() : lookaheadIsFinalizing(lookahead, s.scanner.unscanned) ? s.finalize(lookahead) : isKeyOf(lookahead, comparatorStartChars) ? parseBound(s, lookahead) : lookahead === "%" ? parseDivisor(s) : lookahead === "#" ? parseBrand(s) : lookahead in whitespaceChars ? parseOperator(s) : s.error(writeUnexpectedCharacterMessage(lookahead));
};
const writeUnexpectedCharacterMessage = (char, shouldBe = "") => `'${char}' is not allowed here${shouldBe && ` (should be ${shouldBe})`}`;
const incompleteArrayTokenMessage = `Missing expected ']'`;
const parseDefault = (s) => {
  const baseNode = s.unsetRoot();
  s.parseOperand();
  const defaultNode = s.unsetRoot();
  if (!defaultNode.hasKind("unit"))
    return s.error(writeNonLiteralDefaultMessage(defaultNode.expression));
  const defaultValue = defaultNode.unit instanceof Date ? () => new Date(defaultNode.unit) : defaultNode.unit;
  return [baseNode, "=", defaultValue];
};
const writeNonLiteralDefaultMessage = (defaultDef) => `Default value '${defaultDef}' must be a literal value`;
const parseString = (def, ctx) => {
  const aliasResolution = ctx.$.maybeResolveRoot(def);
  if (aliasResolution)
    return aliasResolution;
  if (def.endsWith("[]")) {
    const possibleElementResolution = ctx.$.maybeResolveRoot(def.slice(0, -2));
    if (possibleElementResolution)
      return possibleElementResolution.array();
  }
  const s = new RuntimeState(new Scanner(def), ctx);
  const node2 = fullStringParse(s);
  if (s.finalizer === ">")
    throwParseError(writeUnexpectedCharacterMessage(">"));
  return node2;
};
const fullStringParse = (s) => {
  s.parseOperand();
  let result = parseUntilFinalizer(s).root;
  if (!result) {
    return throwInternalError(`Root was unexpectedly unset after parsing string '${s.scanner.scanned}'`);
  }
  if (s.finalizer === "=")
    result = parseDefault(s);
  else if (s.finalizer === "?")
    result = [result, "?"];
  s.scanner.shiftUntilNonWhitespace();
  if (s.scanner.lookahead) {
    throwParseError(writeUnexpectedCharacterMessage(s.scanner.lookahead));
  }
  return result;
};
const parseUntilFinalizer = (s) => {
  while (s.finalizer === void 0)
    next(s);
  return s;
};
const next = (s) => s.hasRoot() ? s.parseOperator() : s.parseOperand();
class RuntimeState {
  root;
  branches = {
    prefixes: [],
    leftBound: null,
    intersection: null,
    union: null,
    pipe: null
  };
  finalizer;
  groups = [];
  scanner;
  ctx;
  constructor(scanner, ctx) {
    this.scanner = scanner;
    this.ctx = ctx;
  }
  error(message) {
    return throwParseError(message);
  }
  hasRoot() {
    return this.root !== void 0;
  }
  setRoot(root) {
    this.root = root;
  }
  unsetRoot() {
    const value2 = this.root;
    this.root = void 0;
    return value2;
  }
  constrainRoot(...args) {
    this.root = this.root.constrain(args[0], args[1]);
  }
  finalize(finalizer) {
    if (this.groups.length)
      return this.error(writeUnclosedGroupMessage(")"));
    this.finalizeBranches();
    this.finalizer = finalizer;
  }
  reduceLeftBound(limit, comparator) {
    const invertedComparator = invertedComparators[comparator];
    if (!isKeyOf(invertedComparator, minComparators))
      return this.error(writeUnpairableComparatorMessage(comparator));
    if (this.branches.leftBound) {
      return this.error(writeMultipleLeftBoundsMessage(this.branches.leftBound.limit, this.branches.leftBound.comparator, limit, invertedComparator));
    }
    this.branches.leftBound = {
      comparator: invertedComparator,
      limit
    };
  }
  finalizeBranches() {
    this.assertRangeUnset();
    if (this.branches.pipe) {
      this.pushRootToBranch("|>");
      this.root = this.branches.pipe;
      return;
    }
    if (this.branches.union) {
      this.pushRootToBranch("|");
      this.root = this.branches.union;
      return;
    }
    if (this.branches.intersection) {
      this.pushRootToBranch("&");
      this.root = this.branches.intersection;
      return;
    }
    this.applyPrefixes();
  }
  finalizeGroup() {
    this.finalizeBranches();
    const topBranchState = this.groups.pop();
    if (!topBranchState) {
      return this.error(writeUnmatchedGroupCloseMessage(")", this.scanner.unscanned));
    }
    this.branches = topBranchState;
  }
  addPrefix(prefix) {
    this.branches.prefixes.push(prefix);
  }
  applyPrefixes() {
    while (this.branches.prefixes.length) {
      const lastPrefix = this.branches.prefixes.pop();
      this.root = lastPrefix === "keyof" ? this.root.keyof() : throwInternalError(`Unexpected prefix '${lastPrefix}'`);
    }
  }
  pushRootToBranch(token) {
    this.assertRangeUnset();
    this.applyPrefixes();
    const root = this.root;
    this.root = void 0;
    this.branches.intersection = this.branches.intersection?.rawAnd(root) ?? root;
    if (token === "&")
      return;
    this.branches.union = this.branches.union?.rawOr(this.branches.intersection) ?? this.branches.intersection;
    this.branches.intersection = null;
    if (token === "|")
      return;
    this.branches.pipe = this.branches.pipe?.rawPipeOnce(this.branches.union) ?? this.branches.union;
    this.branches.union = null;
  }
  parseUntilFinalizer() {
    return parseUntilFinalizer(new RuntimeState(this.scanner, this.ctx));
  }
  parseOperator() {
    return parseOperator(this);
  }
  parseOperand() {
    return parseOperand(this);
  }
  assertRangeUnset() {
    if (this.branches.leftBound) {
      return this.error(writeOpenRangeMessage(this.branches.leftBound.limit, this.branches.leftBound.comparator));
    }
  }
  reduceGroupOpen() {
    this.groups.push(this.branches);
    this.branches = {
      prefixes: [],
      leftBound: null,
      union: null,
      intersection: null,
      pipe: null
    };
  }
  previousOperator() {
    return this.branches.leftBound?.comparator ?? this.branches.prefixes[this.branches.prefixes.length - 1] ?? (this.branches.intersection ? "&" : this.branches.union ? "|" : this.branches.pipe ? "|>" : void 0);
  }
  shiftedBy(count) {
    this.scanner.jumpForward(count);
    return this;
  }
}
const emptyGenericParameterMessage = "An empty string is not a valid generic parameter name";
const parseGenericParamName = (scanner, result, ctx) => {
  scanner.shiftUntilNonWhitespace();
  const name = scanner.shiftUntilLookahead(terminatingChars);
  if (name === "") {
    if (scanner.lookahead === "" && result.length)
      return result;
    return throwParseError(emptyGenericParameterMessage);
  }
  scanner.shiftUntilNonWhitespace();
  return _parseOptionalConstraint(scanner, name, result, ctx);
};
const extendsToken = "extends ";
const _parseOptionalConstraint = (scanner, name, result, ctx) => {
  scanner.shiftUntilNonWhitespace();
  if (scanner.unscanned.startsWith(extendsToken))
    scanner.jumpForward(extendsToken.length);
  else {
    if (scanner.lookahead === ",")
      scanner.shift();
    result.push(name);
    return parseGenericParamName(scanner, result, ctx);
  }
  const s = parseUntilFinalizer(new RuntimeState(scanner, ctx));
  result.push([name, s.root]);
  return parseGenericParamName(scanner, result, ctx);
};
class InternalFnParser extends Callable {
  constructor($) {
    const attach = {
      $,
      raw: $.fn
    };
    super((...signature) => {
      const returnOperatorIndex = signature.indexOf(":");
      const lastParamIndex = returnOperatorIndex === -1 ? signature.length - 1 : returnOperatorIndex - 1;
      const paramDefs = signature.slice(0, lastParamIndex + 1);
      const paramTuple = $.parse(paramDefs).assertHasKind("intersection");
      let returnType = $.intrinsic.unknown;
      if (returnOperatorIndex !== -1) {
        if (returnOperatorIndex !== signature.length - 2)
          return throwParseError(badFnReturnTypeMessage);
        returnType = $.parse(signature[returnOperatorIndex + 1]);
      }
      return (impl) => new InternalTypedFn(impl, paramTuple, returnType);
    }, { attach });
  }
}
class InternalTypedFn extends Callable {
  raw;
  params;
  returns;
  expression;
  constructor(raw, params, returns) {
    const typedName = `typed ${raw.name}`;
    const typed = {
      // assign to a key with the expected name to force it to be created that way
      [typedName]: (...args) => {
        const validatedArgs = params.assert(args);
        const returned = raw(...validatedArgs);
        return returns.assert(returned);
      }
    }[typedName];
    super(typed);
    this.raw = raw;
    this.params = params;
    this.returns = returns;
    let argsExpression = params.expression;
    if (argsExpression[0] === "[" && argsExpression[argsExpression.length - 1] === "]")
      argsExpression = argsExpression.slice(1, -1);
    else if (argsExpression.endsWith("[]"))
      argsExpression = `...${argsExpression}`;
    this.expression = `(${argsExpression}) => ${returns?.expression ?? "unknown"}`;
  }
}
const badFnReturnTypeMessage = `":" must be followed by exactly one return type e.g:
fn("string", ":", "number")(s => s.length)`;
class InternalMatchParser extends Callable {
  $;
  constructor($) {
    super((...args) => new InternalChainedMatchParser($)(...args), {
      bind: $
    });
    this.$ = $;
  }
  in(def) {
    return new InternalChainedMatchParser(this.$, def === void 0 ? void 0 : this.$.parse(def));
  }
  at(key, cases) {
    return new InternalChainedMatchParser(this.$).at(key, cases);
  }
  case(when, then) {
    return new InternalChainedMatchParser(this.$).case(when, then);
  }
}
class InternalChainedMatchParser extends Callable {
  $;
  in;
  key;
  branches = [];
  constructor($, In) {
    super((cases) => this.caseEntries(Object.entries(cases).map(([k, v]) => k === "default" ? [k, v] : [this.$.parse(k), v])));
    this.$ = $;
    this.in = In;
  }
  at(key, cases) {
    if (this.key)
      throwParseError(doubleAtMessage);
    if (this.branches.length)
      throwParseError(chainedAtMessage);
    this.key = key;
    return cases ? this.match(cases) : this;
  }
  case(def, resolver) {
    return this.caseEntry(this.$.parse(def), resolver);
  }
  caseEntry(node2, resolver) {
    const wrappableNode = this.key ? this.$.parse({ [this.key]: node2 }) : node2;
    const branch = wrappableNode.pipe(resolver);
    this.branches.push(branch);
    return this;
  }
  match(cases) {
    return this(cases);
  }
  strings(cases) {
    return this.caseEntries(Object.entries(cases).map(([k, v]) => k === "default" ? [k, v] : [this.$.node("unit", { unit: k }), v]));
  }
  caseEntries(entries) {
    for (let i = 0; i < entries.length; i++) {
      const [k, v] = entries[i];
      if (k === "default") {
        if (i !== entries.length - 1) {
          throwParseError(`default may only be specified as the last key of a switch definition`);
        }
        return this.default(v);
      }
      if (typeof v !== "function") {
        return throwParseError(`Value for case "${k}" must be a function (was ${domainOf(v)})`);
      }
      this.caseEntry(k, v);
    }
    return this;
  }
  default(defaultCase) {
    if (typeof defaultCase === "function")
      this.case(intrinsic.unknown, defaultCase);
    const schema = {
      branches: this.branches,
      ordered: true
    };
    if (defaultCase === "never" || defaultCase === "assert")
      schema.meta = { onFail: throwOnDefault };
    const cases = this.$.node("union", schema);
    if (!this.in)
      return this.$.finalize(cases);
    let inputValidatedCases = this.in.pipe(cases);
    if (defaultCase === "never" || defaultCase === "assert") {
      inputValidatedCases = inputValidatedCases.configureReferences({
        onFail: throwOnDefault
      }, "self");
    }
    return this.$.finalize(inputValidatedCases);
  }
}
const throwOnDefault = (errors) => errors.throw();
const chainedAtMessage = `A key matcher must be specified before the first case i.e. match.at('foo') or match.in<object>().at('bar')`;
const doubleAtMessage = `At most one key matcher may be specified per expression`;
const parseProperty = (def, ctx) => {
  if (isArray(def)) {
    if (def[1] === "=")
      return [ctx.$.parseOwnDefinitionFormat(def[0], ctx), "=", def[2]];
    if (def[1] === "?")
      return [ctx.$.parseOwnDefinitionFormat(def[0], ctx), "?"];
  }
  return parseInnerDefinition(def, ctx);
};
const invalidOptionalKeyKindMessage = `Only required keys may make their values optional, e.g. { [mySymbol]: ['number', '?'] }`;
const invalidDefaultableKeyKindMessage = `Only required keys may specify default values, e.g. { value: 'number = 0' }`;
const parseObjectLiteral = (def, ctx) => {
  let spread;
  const structure = {};
  const defEntries = stringAndSymbolicEntriesOf(def);
  for (const [k, v] of defEntries) {
    const parsedKey = preparseKey(k);
    if (parsedKey.kind === "spread") {
      if (!isEmptyObject(structure))
        return throwParseError(nonLeadingSpreadError);
      const operand = ctx.$.parseOwnDefinitionFormat(v, ctx);
      if (operand.equals(intrinsic.object))
        continue;
      if (!operand.hasKind("intersection") || // still error on attempts to spread proto nodes like ...Date
      !operand.basis?.equals(intrinsic.object)) {
        return throwParseError(writeInvalidSpreadTypeMessage(operand.expression));
      }
      spread = operand.structure;
      continue;
    }
    if (parsedKey.kind === "undeclared") {
      if (v !== "reject" && v !== "delete" && v !== "ignore")
        throwParseError(writeInvalidUndeclaredBehaviorMessage(v));
      structure.undeclared = v;
      continue;
    }
    const parsedValue = parseProperty(v, ctx);
    const parsedEntryKey = parsedKey;
    if (parsedKey.kind === "required") {
      if (!isArray(parsedValue)) {
        appendNamedProp(structure, "required", {
          key: parsedKey.normalized,
          value: parsedValue
        }, ctx);
      } else {
        appendNamedProp(structure, "optional", parsedValue[1] === "=" ? {
          key: parsedKey.normalized,
          value: parsedValue[0],
          default: parsedValue[2]
        } : {
          key: parsedKey.normalized,
          value: parsedValue[0]
        }, ctx);
      }
      continue;
    }
    if (isArray(parsedValue)) {
      if (parsedValue[1] === "?")
        throwParseError(invalidOptionalKeyKindMessage);
      if (parsedValue[1] === "=")
        throwParseError(invalidDefaultableKeyKindMessage);
    }
    if (parsedKey.kind === "optional") {
      appendNamedProp(structure, "optional", {
        key: parsedKey.normalized,
        value: parsedValue
      }, ctx);
      continue;
    }
    const signature = ctx.$.parseOwnDefinitionFormat(parsedEntryKey.normalized, ctx);
    const normalized = normalizeIndex(signature, parsedValue, ctx.$);
    if (normalized.index)
      structure.index = append(structure.index, normalized.index);
    if (normalized.required)
      structure.required = append(structure.required, normalized.required);
  }
  const structureNode = ctx.$.node("structure", structure);
  return ctx.$.parseSchema({
    domain: "object",
    structure: spread?.merge(structureNode) ?? structureNode
  });
};
const appendNamedProp = (structure, kind, inner, ctx) => {
  structure[kind] = append(
    // doesn't seem like this cast should be necessary
    structure[kind],
    ctx.$.node(kind, inner)
  );
};
const writeInvalidUndeclaredBehaviorMessage = (actual) => `Value of '+' key must be 'reject', 'delete', or 'ignore' (was ${printable(actual)})`;
const nonLeadingSpreadError = "Spread operator may only be used as the first key in an object";
const preparseKey = (key) => typeof key === "symbol" ? { kind: "required", normalized: key } : key[key.length - 1] === "?" ? key[key.length - 2] === Backslash ? { kind: "required", normalized: `${key.slice(0, -2)}?` } : {
  kind: "optional",
  normalized: key.slice(0, -1)
} : key[0] === "[" && key[key.length - 1] === "]" ? { kind: "index", normalized: key.slice(1, -1) } : key[0] === Backslash && key[1] === "[" && key[key.length - 1] === "]" ? { kind: "required", normalized: key.slice(1) } : key === "..." ? { kind: "spread" } : key === "+" ? { kind: "undeclared" } : {
  kind: "required",
  normalized: key === "\\..." ? "..." : key === "\\+" ? "+" : key
};
const writeInvalidSpreadTypeMessage = (def) => `Spread operand must resolve to an object literal type (was ${def})`;
const maybeParseTupleExpression = (def, ctx) => isIndexZeroExpression(def) ? indexZeroParsers[def[0]](def, ctx) : isIndexOneExpression(def) ? indexOneParsers[def[1]](def, ctx) : null;
const parseKeyOfTuple = (def, ctx) => ctx.$.parseOwnDefinitionFormat(def[1], ctx).keyof();
const parseBranchTuple = (def, ctx) => {
  if (def[2] === void 0)
    return throwParseError(writeMissingRightOperandMessage(def[1], ""));
  const l = ctx.$.parseOwnDefinitionFormat(def[0], ctx);
  const r = ctx.$.parseOwnDefinitionFormat(def[2], ctx);
  if (def[1] === "|")
    return ctx.$.node("union", { branches: [l, r] });
  const result = def[1] === "&" ? intersectNodesRoot(l, r, ctx.$) : pipeNodesRoot(l, r, ctx.$);
  if (result instanceof Disjoint)
    return result.throw();
  return result;
};
const parseArrayTuple = (def, ctx) => ctx.$.parseOwnDefinitionFormat(def[0], ctx).array();
const parseMorphTuple = (def, ctx) => {
  if (typeof def[2] !== "function") {
    return throwParseError(writeMalformedFunctionalExpressionMessage("=>", def[2]));
  }
  return ctx.$.parseOwnDefinitionFormat(def[0], ctx).pipe(def[2]);
};
const writeMalformedFunctionalExpressionMessage = (operator, value2) => `${operator === ":" ? "Narrow" : "Morph"} expression requires a function following '${operator}' (was ${typeof value2})`;
const parseNarrowTuple = (def, ctx) => {
  if (typeof def[2] !== "function") {
    return throwParseError(writeMalformedFunctionalExpressionMessage(":", def[2]));
  }
  return ctx.$.parseOwnDefinitionFormat(def[0], ctx).constrain("predicate", def[2]);
};
const parseMetaTuple = (def, ctx) => ctx.$.parseOwnDefinitionFormat(def[0], ctx).configure(def[2], def[3]);
const defineIndexOneParsers = (parsers) => parsers;
const postfixParsers = defineIndexOneParsers({
  "[]": parseArrayTuple,
  "?": () => throwParseError(shallowOptionalMessage)
});
const infixParsers = defineIndexOneParsers({
  "|": parseBranchTuple,
  "&": parseBranchTuple,
  ":": parseNarrowTuple,
  "=>": parseMorphTuple,
  "|>": parseBranchTuple,
  "@": parseMetaTuple,
  // since object and tuple literals parse there via `parseProperty`,
  // they must be shallow if parsed directly as a tuple expression
  "=": () => throwParseError(shallowDefaultableMessage)
});
const indexOneParsers = { ...postfixParsers, ...infixParsers };
const isIndexOneExpression = (def) => indexOneParsers[def[1]] !== void 0;
const defineIndexZeroParsers = (parsers) => parsers;
const indexZeroParsers = defineIndexZeroParsers({
  keyof: parseKeyOfTuple,
  instanceof: (def, ctx) => {
    if (typeof def[1] !== "function") {
      return throwParseError(writeInvalidConstructorMessage(objectKindOrDomainOf(def[1])));
    }
    const branches = def.slice(1).map((ctor) => typeof ctor === "function" ? ctx.$.node("proto", { proto: ctor }) : throwParseError(writeInvalidConstructorMessage(objectKindOrDomainOf(ctor))));
    return branches.length === 1 ? branches[0] : ctx.$.node("union", { branches });
  },
  "===": (def, ctx) => ctx.$.units(def.slice(1))
});
const isIndexZeroExpression = (def) => indexZeroParsers[def[0]] !== void 0;
const writeInvalidConstructorMessage = (actual) => `Expected a constructor following 'instanceof' operator (was ${actual})`;
const parseTupleLiteral = (def, ctx) => {
  let sequences = [{}];
  let i = 0;
  while (i < def.length) {
    let spread = false;
    if (def[i] === "..." && i < def.length - 1) {
      spread = true;
      i++;
    }
    const parsedProperty = parseProperty(def[i], ctx);
    const [valueNode, operator, possibleDefaultValue] = !isArray(parsedProperty) ? [parsedProperty] : parsedProperty;
    i++;
    if (spread) {
      if (!valueNode.extends($ark.intrinsic.Array))
        return throwParseError(writeNonArraySpreadMessage(valueNode.expression));
      sequences = sequences.flatMap((base) => (
        // since appendElement mutates base, we have to shallow-ish clone it for each branch
        valueNode.distribute((branch) => appendSpreadBranch(makeRootAndArrayPropertiesMutable(base), branch))
      ));
    } else {
      sequences = sequences.map((base) => {
        if (operator === "?")
          return appendOptionalElement(base, valueNode);
        if (operator === "=")
          return appendDefaultableElement(base, valueNode, possibleDefaultValue);
        return appendRequiredElement(base, valueNode);
      });
    }
  }
  return ctx.$.parseSchema(sequences.map((sequence) => isEmptyObject(sequence) ? {
    proto: Array,
    exactLength: 0
  } : {
    proto: Array,
    sequence
  }));
};
const appendRequiredElement = (base, element) => {
  if (base.defaultables || base.optionals) {
    return throwParseError(base.variadic ? (
      // e.g. [boolean = true, ...string[], number]
      postfixAfterOptionalOrDefaultableMessage
    ) : requiredPostOptionalMessage);
  }
  if (base.variadic) {
    base.postfix = append(base.postfix, element);
  } else {
    base.prefix = append(base.prefix, element);
  }
  return base;
};
const appendOptionalElement = (base, element) => {
  if (base.variadic)
    return throwParseError(optionalOrDefaultableAfterVariadicMessage);
  base.optionals = append(base.optionals, element);
  return base;
};
const appendDefaultableElement = (base, element, value2) => {
  if (base.variadic)
    return throwParseError(optionalOrDefaultableAfterVariadicMessage);
  if (base.optionals)
    return throwParseError(defaultablePostOptionalMessage);
  base.defaultables = append(base.defaultables, [[element, value2]]);
  return base;
};
const appendVariadicElement = (base, element) => {
  if (base.postfix)
    throwParseError(multipleVariadicMesage);
  if (base.variadic) {
    if (!base.variadic.equals(element)) {
      throwParseError(multipleVariadicMesage);
    }
  } else {
    base.variadic = element.internal;
  }
  return base;
};
const appendSpreadBranch = (base, branch) => {
  const spread = branch.select({ method: "find", kind: "sequence" });
  if (!spread) {
    return appendVariadicElement(base, $ark.intrinsic.unknown);
  }
  if (spread.prefix)
    for (const node2 of spread.prefix)
      appendRequiredElement(base, node2);
  if (spread.optionals)
    for (const node2 of spread.optionals)
      appendOptionalElement(base, node2);
  if (spread.variadic)
    appendVariadicElement(base, spread.variadic);
  if (spread.postfix)
    for (const node2 of spread.postfix)
      appendRequiredElement(base, node2);
  return base;
};
const writeNonArraySpreadMessage = (operand) => `Spread element must be an array (was ${operand})`;
const multipleVariadicMesage = "A tuple may have at most one variadic element";
const requiredPostOptionalMessage = "A required element may not follow an optional element";
const optionalOrDefaultableAfterVariadicMessage = "An optional element may not follow a variadic element";
const defaultablePostOptionalMessage = "A defaultable element may not follow an optional element without a default";
const parseCache = {};
const parseInnerDefinition = (def, ctx) => {
  if (typeof def === "string") {
    if (ctx.args && Object.keys(ctx.args).some((k) => def.includes(k))) {
      return parseString(def, ctx);
    }
    const scopeCache = parseCache[ctx.$.name] ??= {};
    return scopeCache[def] ??= parseString(def, ctx);
  }
  return hasDomain(def, "object") ? parseObject(def, ctx) : throwParseError(writeBadDefinitionTypeMessage(domainOf(def)));
};
const parseObject = (def, ctx) => {
  const objectKind = objectKindOf(def);
  switch (objectKind) {
    case void 0:
      if (hasArkKind(def, "root"))
        return def;
      if ("~standard" in def)
        return parseStandardSchema(def, ctx);
      return parseObjectLiteral(def, ctx);
    case "Array":
      return parseTuple(def, ctx);
    case "RegExp":
      return ctx.$.node("intersection", {
        domain: "string",
        pattern: def
      }, { prereduced: true });
    case "Function": {
      const resolvedDef = isThunk(def) ? def() : def;
      if (hasArkKind(resolvedDef, "root"))
        return resolvedDef;
      return throwParseError(writeBadDefinitionTypeMessage("Function"));
    }
    default:
      return throwParseError(writeBadDefinitionTypeMessage(objectKind ?? printable(def)));
  }
};
const parseStandardSchema = (def, ctx) => ctx.$.intrinsic.unknown.pipe((v, ctx2) => {
  const result = def["~standard"].validate(v);
  if (!result.issues)
    return result.value;
  for (const { message, path } of result.issues) {
    if (path) {
      if (path.length) {
        ctx2.error({
          problem: uncapitalize(message),
          relativePath: path.map((k) => typeof k === "object" ? k.key : k)
        });
      } else {
        ctx2.error({
          message
        });
      }
    } else {
      ctx2.error({
        message
      });
    }
  }
});
const parseTuple = (def, ctx) => maybeParseTupleExpression(def, ctx) ?? parseTupleLiteral(def, ctx);
const writeBadDefinitionTypeMessage = (actual) => `Type definitions must be strings or objects (was ${actual})`;
class InternalTypeParser extends Callable {
  constructor($) {
    const attach = Object.assign(
      {
        errors: ArkErrors,
        hkt: Hkt,
        $,
        raw: $.parse,
        module: $.constructor.module,
        scope: $.constructor.scope,
        declare: $.declare,
        define: $.define,
        match: $.match,
        generic: $.generic,
        schema: $.schema,
        // this won't be defined during bootstrapping, but externally always will be
        keywords: $.ambient,
        unit: $.unit,
        enumerated: $.enumerated,
        instanceOf: $.instanceOf,
        valueOf: $.valueOf,
        or: $.or,
        and: $.and,
        merge: $.merge,
        pipe: $.pipe,
        fn: $.fn
      },
      // also won't be defined during bootstrapping
      $.ambientAttachments
    );
    super((...args) => {
      if (args.length === 1) {
        return $.parse(args[0]);
      }
      if (args.length === 2 && typeof args[0] === "string" && args[0][0] === "<" && args[0][args[0].length - 1] === ">") {
        const paramString = args[0].slice(1, -1);
        const params = $.parseGenericParams(paramString, {});
        return new GenericRoot(params, args[1], $, $, null);
      }
      return $.parse(args);
    }, {
      attach
    });
  }
}
const $arkTypeRegistry = $ark;
class InternalScope extends BaseScope {
  get ambientAttachments() {
    if (!$arkTypeRegistry.typeAttachments)
      return;
    return this.cacheGetter("ambientAttachments", flatMorph($arkTypeRegistry.typeAttachments, (k, v) => [
      k,
      this.bindReference(v)
    ]));
  }
  preparseOwnAliasEntry(alias, def) {
    const firstParamIndex = alias.indexOf("<");
    if (firstParamIndex === -1) {
      if (hasArkKind(def, "module") || hasArkKind(def, "generic"))
        return [alias, def];
      const qualifiedName = this.name === "ark" ? alias : alias === "root" ? this.name : `${this.name}.${alias}`;
      const config = this.resolvedConfig.keywords?.[qualifiedName];
      if (config)
        def = [def, "@", config];
      return [alias, def];
    }
    if (alias[alias.length - 1] !== ">") {
      throwParseError(`'>' must be the last character of a generic declaration in a scope`);
    }
    const name = alias.slice(0, firstParamIndex);
    const paramString = alias.slice(firstParamIndex + 1, -1);
    return [
      name,
      // use a thunk definition for the generic so that we can parse
      // constraints within the current scope
      () => {
        const params = this.parseGenericParams(paramString, { alias: name });
        const generic = parseGeneric(params, def, this);
        return generic;
      }
    ];
  }
  parseGenericParams(def, opts) {
    return parseGenericParamName(new Scanner(def), [], this.createParseContext({
      ...opts,
      def,
      prefix: "generic"
    }));
  }
  normalizeRootScopeValue(resolution) {
    if (isThunk(resolution) && !hasArkKind(resolution, "generic"))
      return resolution();
    return resolution;
  }
  preparseOwnDefinitionFormat(def, opts) {
    return {
      ...opts,
      def,
      prefix: opts.alias ?? "type"
    };
  }
  parseOwnDefinitionFormat(def, ctx) {
    const isScopeAlias = ctx.alias && ctx.alias in this.aliases;
    if (!isScopeAlias && !ctx.args)
      ctx.args = { this: ctx.id };
    const result = parseInnerDefinition(def, ctx);
    if (isArray(result)) {
      if (result[1] === "=")
        return throwParseError(shallowDefaultableMessage);
      if (result[1] === "?")
        return throwParseError(shallowOptionalMessage);
    }
    return result;
  }
  unit = (value2) => this.units([value2]);
  valueOf = (tsEnum) => this.units(enumValues(tsEnum));
  enumerated = (...values) => this.units(values);
  instanceOf = (ctor) => this.node("proto", { proto: ctor }, { prereduced: true });
  or = (...defs) => this.schema(defs.map((def) => this.parse(def)));
  and = (...defs) => defs.reduce((node2, def) => node2.and(this.parse(def)), this.intrinsic.unknown);
  merge = (...defs) => defs.reduce((node2, def) => node2.merge(this.parse(def)), this.intrinsic.object);
  pipe = (...morphs) => this.intrinsic.unknown.pipe(...morphs);
  fn = new InternalFnParser(this);
  match = new InternalMatchParser(this);
  declare = () => ({
    type: this.type
  });
  define(def) {
    return def;
  }
  type = new InternalTypeParser(this);
  static scope = ((def, config = {}) => new InternalScope(def, config));
  static module = ((def, config = {}) => this.scope(def, config).export());
}
const scope = Object.assign(InternalScope.scope, {
  define: (def) => def
});
const Scope = InternalScope;
class MergeHkt extends Hkt {
  description = 'merge an object\'s properties onto another like `Merge(User, { isAdmin: "true" })`';
}
const Merge = genericNode(["base", intrinsic.object], ["props", intrinsic.object])((args) => args.base.merge(args.props), MergeHkt);
const arkBuiltins = Scope.module({
  Key: intrinsic.key,
  Merge
});
class liftFromHkt extends Hkt {
}
const liftFrom = genericNode("element")((args) => {
  const nonArrayElement = args.element.exclude(intrinsic.Array);
  const lifted = nonArrayElement.array();
  return nonArrayElement.rawOr(lifted).pipe(liftArray).distribute((branch) => branch.assertHasKind("morph").declareOut(lifted), rootSchema);
}, liftFromHkt);
const arkArray = Scope.module({
  root: intrinsic.Array,
  readonly: "root",
  index: intrinsic.nonNegativeIntegerString,
  liftFrom
}, {
  name: "Array"
});
const value = rootSchema(["string", registry.FileConstructor]);
const parsedFormDataValue = value.rawOr(value.array());
const parsed = rootSchema({
  meta: "an object representing parsed form data",
  domain: "object",
  index: {
    signature: "string",
    value: parsedFormDataValue
  }
});
const arkFormData = Scope.module({
  root: ["instanceof", FormData],
  value,
  parsed,
  parse: rootSchema({
    in: FormData,
    morphs: (data) => {
      const result = {};
      for (const [k, v] of data) {
        if (k in result) {
          const existing = result[k];
          if (typeof existing === "string" || existing instanceof registry.FileConstructor)
            result[k] = [existing, v];
          else
            existing.push(v);
        } else
          result[k] = v;
      }
      return result;
    },
    declaredOut: parsed
  })
}, {
  name: "FormData"
});
const TypedArray = Scope.module({
  Int8: ["instanceof", Int8Array],
  Uint8: ["instanceof", Uint8Array],
  Uint8Clamped: ["instanceof", Uint8ClampedArray],
  Int16: ["instanceof", Int16Array],
  Uint16: ["instanceof", Uint16Array],
  Int32: ["instanceof", Int32Array],
  Uint32: ["instanceof", Uint32Array],
  Float32: ["instanceof", Float32Array],
  Float64: ["instanceof", Float64Array],
  BigInt64: ["instanceof", BigInt64Array],
  BigUint64: ["instanceof", BigUint64Array]
}, {
  name: "TypedArray"
});
const omittedPrototypes = {
  Boolean: 1,
  Number: 1,
  String: 1
};
const arkPrototypes = Scope.module({
  ...flatMorph({ ...ecmascriptConstructors, ...platformConstructors }, (k, v) => k in omittedPrototypes ? [] : [k, ["instanceof", v]]),
  Array: arkArray,
  TypedArray,
  FormData: arkFormData
});
const epoch$1 = rootSchema({
  domain: {
    domain: "number",
    meta: "a number representing a Unix timestamp"
  },
  divisor: {
    rule: 1,
    meta: `an integer representing a Unix timestamp`
  },
  min: {
    rule: -864e13,
    meta: `a Unix timestamp after -8640000000000000`
  },
  max: {
    rule: 864e13,
    meta: "a Unix timestamp before 8640000000000000"
  },
  meta: "an integer representing a safe Unix timestamp"
});
const integer = rootSchema({
  domain: "number",
  divisor: 1
});
const number = Scope.module({
  root: intrinsic.number,
  integer,
  epoch: epoch$1,
  safe: rootSchema({
    domain: {
      domain: "number",
      numberAllowsNaN: false
    },
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER
  }),
  NaN: ["===", Number.NaN],
  Infinity: ["===", Number.POSITIVE_INFINITY],
  NegativeInfinity: ["===", Number.NEGATIVE_INFINITY]
}, {
  name: "number"
});
const regexStringNode = (regex2, description, jsonSchemaFormat) => {
  const schema = {
    domain: "string",
    pattern: {
      rule: regex2.source,
      flags: regex2.flags,
      meta: description
    }
  };
  if (jsonSchemaFormat)
    schema.meta = { format: jsonSchemaFormat };
  return node("intersection", schema);
};
const stringIntegerRoot = regexStringNode(wellFormedIntegerMatcher, "a well-formed integer string");
const stringInteger = Scope.module({
  root: stringIntegerRoot,
  parse: rootSchema({
    in: stringIntegerRoot,
    morphs: (s, ctx) => {
      const parsed2 = Number.parseInt(s);
      return Number.isSafeInteger(parsed2) ? parsed2 : ctx.error("an integer in the range Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER");
    },
    declaredOut: intrinsic.integer
  })
}, {
  name: "string.integer"
});
const hex = regexStringNode(/^[\dA-Fa-f]+$/, "hex characters only");
const base64 = Scope.module({
  root: regexStringNode(/^(?:[\d+/A-Za-z]{4})*(?:[\d+/A-Za-z]{2}==|[\d+/A-Za-z]{3}=)?$/, "base64-encoded"),
  url: regexStringNode(/^(?:[\w-]{4})*(?:[\w-]{2}(?:==|%3D%3D)?|[\w-]{3}(?:=|%3D)?)?$/, "base64url-encoded")
}, {
  name: "string.base64"
});
const preformattedCapitalize = regexStringNode(/^[A-Z].*$/, "capitalized");
const capitalize = Scope.module({
  root: rootSchema({
    in: "string",
    morphs: (s) => s.charAt(0).toUpperCase() + s.slice(1),
    declaredOut: preformattedCapitalize
  }),
  preformatted: preformattedCapitalize
}, {
  name: "string.capitalize"
});
const isLuhnValid = (creditCardInput) => {
  const sanitized = creditCardInput.replace(/[ -]+/g, "");
  let sum = 0;
  let digit;
  let tmpNum;
  let shouldDouble = false;
  for (let i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = Number.parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      sum += tmpNum >= 10 ? tmpNum % 10 + 1 : tmpNum;
    } else
      sum += tmpNum;
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
};
const creditCardMatcher = /^(?:4\d{12}(?:\d{3,6})?|5[1-5]\d{14}|(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}|6(?:011|5\d\d)\d{12,15}|3[47]\d{13}|3(?:0[0-5]|[68]\d)\d{11}|(?:2131|1800|35\d{3})\d{11}|6[27]\d{14}|^(81\d{14,17}))$/;
const creditCard = rootSchema({
  domain: "string",
  pattern: {
    meta: "a credit card number",
    rule: creditCardMatcher.source
  },
  predicate: {
    meta: "a credit card number",
    predicate: isLuhnValid
  }
});
const iso8601Matcher = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))(T((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([,.]\d+(?!:))?)?(\17[0-5]\d([,.]\d+)?)?([Zz]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
const isParsableDate = (s) => !Number.isNaN(new Date(s).valueOf());
const parsableDate = rootSchema({
  domain: "string",
  predicate: {
    meta: "a parsable date",
    predicate: isParsableDate
  }
}).assertHasKind("intersection");
const epochRoot = stringInteger.root.internal.narrow((s, ctx) => {
  const n = Number.parseInt(s);
  const out = number.epoch(n);
  if (out instanceof ArkErrors) {
    ctx.errors.merge(out);
    return false;
  }
  return true;
}).configure({
  description: "an integer string representing a safe Unix timestamp"
}, "self").assertHasKind("intersection");
const epoch = Scope.module({
  root: epochRoot,
  parse: rootSchema({
    in: epochRoot,
    morphs: (s) => new Date(s),
    declaredOut: intrinsic.Date
  })
}, {
  name: "string.date.epoch"
});
const isoRoot = regexStringNode(iso8601Matcher, "an ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ) date").internal.assertHasKind("intersection");
const iso = Scope.module({
  root: isoRoot,
  parse: rootSchema({
    in: isoRoot,
    morphs: (s) => new Date(s),
    declaredOut: intrinsic.Date
  })
}, {
  name: "string.date.iso"
});
const stringDate = Scope.module({
  root: parsableDate,
  parse: rootSchema({
    declaredIn: parsableDate,
    in: "string",
    morphs: (s, ctx) => {
      const date = new Date(s);
      if (Number.isNaN(date.valueOf()))
        return ctx.error("a parsable date");
      return date;
    },
    declaredOut: intrinsic.Date
  }),
  iso,
  epoch
}, {
  name: "string.date"
});
const email = regexStringNode(
  // considered https://colinhacks.com/essays/reasonable-email-regex but it includes a lookahead
  // which breaks some integrations e.g. fast-check
  // regex based on:
  // https://www.regular-expressions.info/email.html
  /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/,
  "an email address",
  "email"
);
const ipv4Segment = "(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])";
const ipv4Address = `(${ipv4Segment}[.]){3}${ipv4Segment}`;
const ipv4Matcher = new RegExp(`^${ipv4Address}$`);
const ipv6Segment = "(?:[0-9a-fA-F]{1,4})";
const ipv6Matcher = new RegExp(`^((?:${ipv6Segment}:){7}(?:${ipv6Segment}|:)|(?:${ipv6Segment}:){6}(?:${ipv4Address}|:${ipv6Segment}|:)|(?:${ipv6Segment}:){5}(?::${ipv4Address}|(:${ipv6Segment}){1,2}|:)|(?:${ipv6Segment}:){4}(?:(:${ipv6Segment}){0,1}:${ipv4Address}|(:${ipv6Segment}){1,3}|:)|(?:${ipv6Segment}:){3}(?:(:${ipv6Segment}){0,2}:${ipv4Address}|(:${ipv6Segment}){1,4}|:)|(?:${ipv6Segment}:){2}(?:(:${ipv6Segment}){0,3}:${ipv4Address}|(:${ipv6Segment}){1,5}|:)|(?:${ipv6Segment}:){1}(?:(:${ipv6Segment}){0,4}:${ipv4Address}|(:${ipv6Segment}){1,6}|:)|(?::((?::${ipv6Segment}){0,5}:${ipv4Address}|(?::${ipv6Segment}){1,7}|:)))(%[0-9a-zA-Z.]{1,})?$`);
const ip = Scope.module({
  root: ["v4 | v6", "@", "an IP address"],
  v4: regexStringNode(ipv4Matcher, "an IPv4 address", "ipv4"),
  v6: regexStringNode(ipv6Matcher, "an IPv6 address", "ipv6")
}, {
  name: "string.ip"
});
const jsonStringDescription = "a JSON string";
const writeJsonSyntaxErrorProblem = (error) => {
  if (!(error instanceof SyntaxError))
    throw error;
  return `must be ${jsonStringDescription} (${error})`;
};
const jsonRoot = rootSchema({
  meta: jsonStringDescription,
  domain: "string",
  predicate: {
    meta: jsonStringDescription,
    predicate: (s, ctx) => {
      try {
        JSON.parse(s);
        return true;
      } catch (e) {
        return ctx.reject({
          code: "predicate",
          expected: jsonStringDescription,
          problem: writeJsonSyntaxErrorProblem(e)
        });
      }
    }
  }
});
const parseJson = (s, ctx) => {
  if (s.length === 0) {
    return ctx.error({
      code: "predicate",
      expected: jsonStringDescription,
      actual: "empty"
    });
  }
  try {
    return JSON.parse(s);
  } catch (e) {
    return ctx.error({
      code: "predicate",
      expected: jsonStringDescription,
      problem: writeJsonSyntaxErrorProblem(e)
    });
  }
};
const json$1 = Scope.module({
  root: jsonRoot,
  parse: rootSchema({
    meta: "safe JSON string parser",
    in: "string",
    morphs: parseJson,
    declaredOut: intrinsic.jsonObject
  })
}, {
  name: "string.json"
});
const preformattedLower = regexStringNode(/^[a-z]*$/, "only lowercase letters");
const lower = Scope.module({
  root: rootSchema({
    in: "string",
    morphs: (s) => s.toLowerCase(),
    declaredOut: preformattedLower
  }),
  preformatted: preformattedLower
}, {
  name: "string.lower"
});
const normalizedForms = ["NFC", "NFD", "NFKC", "NFKD"];
const preformattedNodes = flatMorph(normalizedForms, (i, form) => [
  form,
  rootSchema({
    domain: "string",
    predicate: (s) => s.normalize(form) === s,
    meta: `${form}-normalized unicode`
  })
]);
const normalizeNodes = flatMorph(normalizedForms, (i, form) => [
  form,
  rootSchema({
    in: "string",
    morphs: (s) => s.normalize(form),
    declaredOut: preformattedNodes[form]
  })
]);
const NFC = Scope.module({
  root: normalizeNodes.NFC,
  preformatted: preformattedNodes.NFC
}, {
  name: "string.normalize.NFC"
});
const NFD = Scope.module({
  root: normalizeNodes.NFD,
  preformatted: preformattedNodes.NFD
}, {
  name: "string.normalize.NFD"
});
const NFKC = Scope.module({
  root: normalizeNodes.NFKC,
  preformatted: preformattedNodes.NFKC
}, {
  name: "string.normalize.NFKC"
});
const NFKD = Scope.module({
  root: normalizeNodes.NFKD,
  preformatted: preformattedNodes.NFKD
}, {
  name: "string.normalize.NFKD"
});
const normalize = Scope.module({
  root: "NFC",
  NFC,
  NFD,
  NFKC,
  NFKD
}, {
  name: "string.normalize"
});
const numericRoot = regexStringNode(numericStringMatcher, "a well-formed numeric string");
const stringNumeric = Scope.module({
  root: numericRoot,
  parse: rootSchema({
    in: numericRoot,
    morphs: (s) => Number.parseFloat(s),
    declaredOut: intrinsic.number
  })
}, {
  name: "string.numeric"
});
const regexPatternDescription = "a regex pattern";
const regex = rootSchema({
  domain: "string",
  predicate: {
    meta: regexPatternDescription,
    predicate: (s, ctx) => {
      try {
        new RegExp(s);
        return true;
      } catch (e) {
        return ctx.reject({
          code: "predicate",
          expected: regexPatternDescription,
          problem: String(e)
        });
      }
    }
  },
  meta: { format: "regex" }
});
const semverMatcher = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*)(?:\.(?:0|[1-9]\d*|\d*[A-Za-z-][\dA-Za-z-]*))*))?(?:\+([\dA-Za-z-]+(?:\.[\dA-Za-z-]+)*))?$/;
const semver = regexStringNode(semverMatcher, "a semantic version (see https://semver.org/)");
const preformattedTrim = regexStringNode(
  // no leading or trailing whitespace
  /^\S.*\S$|^\S?$/,
  "trimmed"
);
const trim = Scope.module({
  root: rootSchema({
    in: "string",
    morphs: (s) => s.trim(),
    declaredOut: preformattedTrim
  }),
  preformatted: preformattedTrim
}, {
  name: "string.trim"
});
const preformattedUpper = regexStringNode(/^[A-Z]*$/, "only uppercase letters");
const upper = Scope.module({
  root: rootSchema({
    in: "string",
    morphs: (s) => s.toUpperCase(),
    declaredOut: preformattedUpper
  }),
  preformatted: preformattedUpper
}, {
  name: "string.upper"
});
const isParsableUrl = (s) => URL.canParse(s);
const urlRoot = rootSchema({
  domain: "string",
  predicate: {
    meta: "a URL string",
    predicate: isParsableUrl
  },
  // URL.canParse allows a subset of the RFC-3986 URI spec
  // since there is no other serializable validation, best include a format
  meta: { format: "uri" }
});
const url = Scope.module({
  root: urlRoot,
  parse: rootSchema({
    declaredIn: urlRoot,
    in: "string",
    morphs: (s, ctx) => {
      try {
        return new URL(s);
      } catch {
        return ctx.error("a URL string");
      }
    },
    declaredOut: rootSchema(URL)
  })
}, {
  name: "string.url"
});
const uuid = Scope.module({
  // the meta tuple expression ensures the error message does not delegate
  // to the individual branches, which are too detailed
  root: [
    "versioned | nil | max",
    "@",
    { description: "a UUID", format: "uuid" }
  ],
  "#nil": "'00000000-0000-0000-0000-000000000000'",
  "#max": "'ffffffff-ffff-ffff-ffff-ffffffffffff'",
  "#versioned": /[\da-f]{8}-[\da-f]{4}-[1-8][\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}/i,
  v1: regexStringNode(/^[\da-f]{8}-[\da-f]{4}-1[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i, "a UUIDv1"),
  v2: regexStringNode(/^[\da-f]{8}-[\da-f]{4}-2[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i, "a UUIDv2"),
  v3: regexStringNode(/^[\da-f]{8}-[\da-f]{4}-3[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i, "a UUIDv3"),
  v4: regexStringNode(/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i, "a UUIDv4"),
  v5: regexStringNode(/^[\da-f]{8}-[\da-f]{4}-5[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i, "a UUIDv5"),
  v6: regexStringNode(/^[\da-f]{8}-[\da-f]{4}-6[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i, "a UUIDv6"),
  v7: regexStringNode(/^[\da-f]{8}-[\da-f]{4}-7[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i, "a UUIDv7"),
  v8: regexStringNode(/^[\da-f]{8}-[\da-f]{4}-8[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i, "a UUIDv8")
}, {
  name: "string.uuid"
});
const string = Scope.module({
  root: intrinsic.string,
  alpha: regexStringNode(/^[A-Za-z]*$/, "only letters"),
  alphanumeric: regexStringNode(/^[\dA-Za-z]*$/, "only letters and digits 0-9"),
  hex,
  base64,
  capitalize,
  creditCard,
  date: stringDate,
  digits: regexStringNode(/^\d*$/, "only digits 0-9"),
  email,
  integer: stringInteger,
  ip,
  json: json$1,
  lower,
  normalize,
  numeric: stringNumeric,
  regex,
  semver,
  trim,
  upper,
  url,
  uuid
}, {
  name: "string"
});
const arkTsKeywords = Scope.module({
  bigint: intrinsic.bigint,
  boolean: intrinsic.boolean,
  false: intrinsic.false,
  never: intrinsic.never,
  null: intrinsic.null,
  number: intrinsic.number,
  object: intrinsic.object,
  string: intrinsic.string,
  symbol: intrinsic.symbol,
  true: intrinsic.true,
  unknown: intrinsic.unknown,
  undefined: intrinsic.undefined
});
const unknown = Scope.module({
  root: intrinsic.unknown,
  any: intrinsic.unknown
}, {
  name: "unknown"
});
const json = Scope.module({
  root: intrinsic.jsonObject,
  stringify: node("morph", {
    in: intrinsic.jsonObject,
    morphs: (data) => JSON.stringify(data),
    declaredOut: intrinsic.string
  })
}, {
  name: "object.json"
});
const object = Scope.module({
  root: intrinsic.object,
  json
}, {
  name: "object"
});
class RecordHkt extends Hkt {
  description = 'instantiate an object from an index signature and corresponding value type like `Record("string", "number")`';
}
const Record = genericNode(["K", intrinsic.key], "V")((args) => ({
  domain: "object",
  index: {
    signature: args.K,
    value: args.V
  }
}), RecordHkt);
class PickHkt extends Hkt {
  description = 'pick a set of properties from an object like `Pick(User, "name | age")`';
}
const Pick = genericNode(["T", intrinsic.object], ["K", intrinsic.key])((args) => args.T.pick(args.K), PickHkt);
class OmitHkt extends Hkt {
  description = 'omit a set of properties from an object like `Omit(User, "age")`';
}
const Omit = genericNode(["T", intrinsic.object], ["K", intrinsic.key])((args) => args.T.omit(args.K), OmitHkt);
class PartialHkt extends Hkt {
  description = "make all named properties of an object optional like `Partial(User)`";
}
const Partial = genericNode(["T", intrinsic.object])((args) => args.T.partial(), PartialHkt);
class RequiredHkt extends Hkt {
  description = "make all named properties of an object required like `Required(User)`";
}
const Required = genericNode(["T", intrinsic.object])((args) => args.T.required(), RequiredHkt);
class ExcludeHkt extends Hkt {
  description = 'exclude branches of a union like `Exclude("boolean", "true")`';
}
const Exclude = genericNode("T", "U")((args) => args.T.exclude(args.U), ExcludeHkt);
class ExtractHkt extends Hkt {
  description = 'extract branches of a union like `Extract("0 | false | 1", "number")`';
}
const Extract = genericNode("T", "U")((args) => args.T.extract(args.U), ExtractHkt);
const arkTsGenerics = Scope.module({
  Exclude,
  Extract,
  Omit,
  Partial,
  Pick,
  Record,
  Required
});
const ark = scope({
  ...arkTsKeywords,
  ...arkTsGenerics,
  ...arkPrototypes,
  ...arkBuiltins,
  string,
  number,
  object,
  unknown
}, { prereducedAliases: true, name: "ark" });
const keywords = ark.export();
Object.assign($arkTypeRegistry.ambient, keywords);
$arkTypeRegistry.typeAttachments = {
  string: keywords.string.root,
  number: keywords.number.root,
  bigint: keywords.bigint,
  boolean: keywords.boolean,
  symbol: keywords.symbol,
  undefined: keywords.undefined,
  null: keywords.null,
  object: keywords.object.root,
  unknown: keywords.unknown.root,
  false: keywords.false,
  true: keywords.true,
  never: keywords.never,
  arrayIndex: keywords.Array.index,
  Key: keywords.Key,
  Record: keywords.Record,
  Array: keywords.Array.root,
  Date: keywords.Date
};
const type = Object.assign(
  ark.type,
  // assign attachments newly parsed in keywords
  // future scopes add these directly from the
  // registry when their TypeParsers are instantiated
  $arkTypeRegistry.typeAttachments
);
ark.match;
ark.fn;
ark.generic;
ark.schema;
ark.define;
ark.declare;
type({
  registry: "string",
  token: "string?"
});
type({
  apiBase: "string",
  authBase: "string?",
  minCliVersion: "string?"
}).or({
  registry: "string",
  authBase: "string?",
  minCliVersion: "string?"
});
type({
  version: "1",
  skills: {
    "[string]": {
      version: "string|null",
      installedAt: "number"
    }
  }
});
type({
  user: {
    handle: "string|null"
  }
});
type({
  results: type({
    slug: "string?",
    displayName: "string?",
    version: "string|null?",
    score: "number"
  }).array()
});
type({
  latestVersion: type({
    version: "string"
  }).optional(),
  skill: "unknown|null?"
});
type({
  uploadUrl: "string"
});
type({
  storageId: "string"
});
const CliPublishFileSchema = type({
  path: "string",
  size: "number",
  storageId: "string",
  sha256: "string",
  contentType: "string?"
});
const PublishSourceSchema = type({
  kind: '"github"',
  url: "string",
  repo: "string",
  ref: "string",
  commit: "string",
  path: "string",
  importedAt: "number"
});
type({
  slug: "string",
  displayName: "string",
  version: "string",
  changelog: "string",
  tags: "string[]?",
  source: PublishSourceSchema.optional(),
  forkOf: type({
    slug: "string",
    version: "string?"
  }).optional(),
  files: CliPublishFileSchema.array()
});
type({
  ok: "true",
  skillId: "string",
  versionId: "string"
});
type({
  slug: "string"
});
type({
  ok: "true"
});
type({
  match: type({ version: "string" }).or("null"),
  latestVersion: type({ version: "string" }).or("null")
});
type({
  roots: type({
    rootId: "string",
    label: "string",
    skills: type({
      slug: "string",
      version: "string|null?"
    }).array()
  }).array()
});
type({
  ok: "true"
});
type({
  user: {
    handle: "string|null",
    displayName: "string|null?",
    image: "string|null?"
  }
});
type({
  results: type({
    slug: "string?",
    displayName: "string?",
    summary: "string|null?",
    version: "string|null?",
    score: "number",
    updatedAt: "number?"
  }).array()
});
type({
  items: type({
    slug: "string",
    displayName: "string",
    summary: "string|null?",
    tags: "unknown",
    stats: "unknown",
    createdAt: "number",
    updatedAt: "number",
    latestVersion: type({
      version: "string",
      createdAt: "number",
      changelog: "string"
    }).optional()
  }).array(),
  nextCursor: "string|null"
});
type({
  skill: type({
    slug: "string",
    displayName: "string",
    summary: "string|null?",
    tags: "unknown",
    stats: "unknown",
    createdAt: "number",
    updatedAt: "number"
  }).or("null"),
  latestVersion: type({
    version: "string",
    createdAt: "number",
    changelog: "string"
  }).or("null"),
  owner: type({
    handle: "string|null",
    displayName: "string|null?",
    image: "string|null?"
  }).or("null")
});
type({
  items: type({
    version: "string",
    createdAt: "number",
    changelog: "string",
    changelogSource: '"auto"|"user"|null?'
  }).array(),
  nextCursor: "string|null"
});
type({
  version: type({
    version: "string",
    createdAt: "number",
    changelog: "string",
    changelogSource: '"auto"|"user"|null?',
    files: "unknown?"
  }).or("null"),
  skill: type({
    slug: "string",
    displayName: "string"
  }).or("null")
});
type({
  match: type({ version: "string" }).or("null"),
  latestVersion: type({ version: "string" }).or("null")
});
type({
  ok: "true",
  skillId: "string",
  versionId: "string"
});
type({
  ok: "true"
});
type({
  ok: "true",
  role: '"admin"|"moderator"|"user"'
});
type({
  ok: "true",
  starred: "boolean",
  alreadyStarred: "boolean"
});
type({
  ok: "true",
  unstarred: "boolean",
  alreadyUnstarred: "boolean"
});
const SkillInstallSpecSchema = type({
  id: "string?",
  kind: '"brew"|"node"|"go"|"uv"',
  label: "string?",
  bins: "string[]?",
  formula: "string?",
  tap: "string?",
  package: "string?",
  module: "string?"
});
const NixPluginSpecSchema = type({
  plugin: "string",
  systems: "string[]?"
});
const ClawdbotConfigSpecSchema = type({
  requiredEnv: "string[]?",
  stateDirs: "string[]?",
  example: "string?"
});
const ClawdisRequiresSchema = type({
  bins: "string[]?",
  anyBins: "string[]?",
  env: "string[]?",
  config: "string[]?"
});
type({
  always: "boolean?",
  skillKey: "string?",
  primaryEnv: "string?",
  emoji: "string?",
  homepage: "string?",
  os: "string[]?",
  cliHelp: "string?",
  requires: ClawdisRequiresSchema.optional(),
  install: SkillInstallSpecSchema.array().optional(),
  nix: NixPluginSpecSchema.optional(),
  config: ClawdbotConfigSpecSchema.optional()
});
const RAW_TEXT_FILE_EXTENSIONS = [
  "md",
  "mdx",
  "txt",
  "json",
  "json5",
  "yaml",
  "yml",
  "toml",
  "js",
  "cjs",
  "mjs",
  "ts",
  "tsx",
  "jsx",
  "py",
  "sh",
  "rb",
  "go",
  "rs",
  "swift",
  "kt",
  "java",
  "cs",
  "cpp",
  "c",
  "h",
  "hpp",
  "sql",
  "csv",
  "ini",
  "cfg",
  "env",
  "xml",
  "html",
  "css",
  "scss",
  "sass",
  "svg"
];
const TEXT_FILE_EXTENSIONS = RAW_TEXT_FILE_EXTENSIONS;
const TEXT_FILE_EXTENSION_SET = new Set(TEXT_FILE_EXTENSIONS);
const RAW_TEXT_CONTENT_TYPES = [
  "application/json",
  "application/xml",
  "application/yaml",
  "application/x-yaml",
  "application/toml",
  "application/javascript",
  "application/typescript",
  "application/markdown",
  "image/svg+xml"
];
const TEXT_CONTENT_TYPES = RAW_TEXT_CONTENT_TYPES;
const TEXT_CONTENT_TYPE_SET = new Set(TEXT_CONTENT_TYPES);
function isTextContentType(contentType) {
  if (!contentType)
    return false;
  const normalized = contentType.split(";", 1)[0]?.trim().toLowerCase() ?? "";
  if (!normalized)
    return false;
  if (normalized.startsWith("text/"))
    return true;
  return TEXT_CONTENT_TYPE_SET.has(normalized);
}
const TEXT_TYPES = /* @__PURE__ */ new Map([
  ["md", "text/markdown"],
  ["markdown", "text/markdown"],
  ["txt", "text/plain"],
  ["json", "application/json"],
  ["yaml", "text/yaml"],
  ["yml", "text/yaml"],
  ["toml", "text/plain"],
  ["js", "text/javascript"],
  ["ts", "text/plain"],
  ["tsx", "text/plain"],
  ["jsx", "text/plain"],
  ["css", "text/css"],
  ["html", "text/html"],
  ["svg", "image/svg+xml"]
]);
async function expandFiles(selected) {
  const expanded = [];
  for (const file of selected) {
    const lower2 = file.name.toLowerCase();
    if (lower2.endsWith(".zip")) {
      const entries = unzipSync(new Uint8Array(await readArrayBuffer(file)));
      pushArchiveEntries(
        expanded,
        Object.entries(entries).map(([path, data]) => ({ path, data }))
      );
      continue;
    }
    if (lower2.endsWith(".tar.gz") || lower2.endsWith(".tgz")) {
      const unpacked = gunzipSync(new Uint8Array(await readArrayBuffer(file)));
      pushArchiveEntries(expanded, untar(unpacked));
      continue;
    }
    if (lower2.endsWith(".gz")) {
      const unpacked = gunzipSync(new Uint8Array(await readArrayBuffer(file)));
      const name = file.name.replace(/\.gz$/i, "");
      expanded.push(new File([toArrayBuffer(unpacked)], name, { type: guessContentType(name) }));
      continue;
    }
    expanded.push(file);
  }
  return expanded;
}
async function expandDroppedItems(items) {
  if (!items || items.length === 0) return [];
  const dropped = [];
  const entries = [];
  for (const item of Array.from(items)) {
    const entry = item.webkitGetAsEntry?.();
    if (entry) {
      entries.push(entry);
      continue;
    }
    const file = item.getAsFile();
    if (file) dropped.push(file);
  }
  if (entries.length === 0) return dropped;
  for (const entry of entries) {
    await collectEntry(entry, "", dropped);
  }
  return dropped;
}
async function collectEntry(entry, parentPath, files) {
  if (entry.isFile && entry.file) {
    const file = await new Promise((resolve, reject) => {
      entry.file?.(resolve, reject);
    });
    const fullPath = entry.fullPath?.replace(/^\/+/, "");
    const path = fullPath || (parentPath ? `${parentPath}/${file.name}` : file.name);
    files.push(new File([file], path, { type: file.type, lastModified: file.lastModified }));
    return;
  }
  if (!entry.isDirectory || !entry.createReader) return;
  const basePath = entry.fullPath?.replace(/^\/+/, "") || (parentPath ? `${parentPath}/${entry.name}` : entry.name);
  const reader = entry.createReader();
  const children = await readAllEntries(reader);
  for (const child of children) {
    await collectEntry(child, basePath, files);
  }
}
async function readAllEntries(reader) {
  const entries = [];
  while (true) {
    const batch = await new Promise((resolve, reject) => {
      reader.readEntries(resolve, reject);
    });
    if (batch.length === 0) break;
    entries.push(...batch);
  }
  return entries;
}
function pushArchiveEntries(target, entries) {
  const normalized = entries.map((entry) => ({ ...entry, path: normalizePath(entry.path) })).filter((entry) => entry.path && !entry.path.endsWith("/")).filter((entry) => !isJunkPath(entry.path)).filter((entry) => isTextPath(entry.path));
  const unwrapped = unwrapSingleTopLevelFolder(normalized);
  for (const entry of unwrapped) {
    target.push(
      new File([toArrayBuffer(entry.data)], entry.path, {
        type: guessContentType(entry.path)
      })
    );
  }
}
function toArrayBuffer(bytes) {
  const buffer = bytes.buffer;
  if (buffer instanceof ArrayBuffer) {
    return buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  }
  return Uint8Array.from(bytes).buffer;
}
async function readArrayBuffer(file) {
  if (typeof file.arrayBuffer === "function") {
    return file.arrayBuffer();
  }
  if (typeof FileReader !== "undefined") {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(reader.error ?? new Error("Could not read file."));
      reader.onload = () => resolve(reader.result);
      reader.readAsArrayBuffer(file);
    });
  }
  return new Response(file).arrayBuffer();
}
function guessContentType(path) {
  const ext = path.split(".").pop()?.toLowerCase();
  if (!ext) return "application/octet-stream";
  const known = TEXT_TYPES.get(ext);
  if (known) return known;
  if (TEXT_FILE_EXTENSION_SET.has(ext)) return "text/plain";
  return "application/octet-stream";
}
function normalizePath(path) {
  return path.replaceAll("\0", "").replaceAll("\\", "/").trim().replace(/^\.\/+/, "").replace(/^\/+/, "");
}
function untar(bytes) {
  const entries = [];
  let offset = 0;
  while (offset + 512 <= bytes.length) {
    const header = bytes.subarray(offset, offset + 512);
    if (header.every((byte) => byte === 0)) break;
    const name = readString(header.subarray(0, 100));
    const size = readOctal(header.subarray(124, 136));
    const typeflag = header[156];
    offset += 512;
    const data = bytes.subarray(offset, offset + size);
    offset += Math.ceil(size / 512) * 512;
    if (!name || typeflag === 53) continue;
    entries.push({ path: name, data });
  }
  return entries;
}
function readString(bytes) {
  const end = bytes.indexOf(0);
  const slice = end === -1 ? bytes : bytes.subarray(0, end);
  return new TextDecoder().decode(slice).trim();
}
function readOctal(bytes) {
  const raw = readString(bytes);
  return raw ? Number.parseInt(raw, 8) : 0;
}
function unwrapSingleTopLevelFolder(entries) {
  if (entries.length === 0) return entries;
  const segments = entries.map((entry) => entry.path.split("/").filter(Boolean));
  if (segments.some((parts) => parts.length < 2)) return entries;
  const first = segments[0]?.[0];
  if (!first) return entries;
  if (!segments.every((parts) => parts[0] === first)) return entries;
  return entries.map((entry) => ({
    ...entry,
    path: entry.path.split("/").slice(1).join("/")
  }));
}
function isJunkPath(path) {
  const normalized = path.toLowerCase();
  if (normalized.startsWith("__macosx/")) return true;
  if (normalized.endsWith("/.ds_store")) return true;
  if (normalized === ".ds_store") return true;
  return false;
}
function isTextPath(path) {
  const normalized = path.trim().toLowerCase();
  const parts = normalized.split(".");
  const extension = parts.length > 1 ? parts.at(-1) ?? "" : "";
  if (!extension) return false;
  return TEXT_FILE_EXTENSION_SET.has(extension);
}
async function uploadFile(uploadUrl, file) {
  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: { "Content-Type": file.type || "application/octet-stream" },
    body: file
  });
  if (!response.ok) {
    throw new Error(`Upload failed: ${await response.text()}`);
  }
  const payload = await response.json();
  return payload.storageId;
}
async function hashFile(file) {
  const buffer = typeof file.arrayBuffer === "function" ? await file.arrayBuffer() : await new Response(file).arrayBuffer();
  const hash = await crypto.subtle.digest("SHA-256", new Uint8Array(buffer));
  const bytes = new Uint8Array(hash);
  return Array.from(bytes).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unit = 0;
  while (size >= 1024 && unit < units.length - 1) {
    size /= 1024;
    unit += 1;
  }
  return `${size.toFixed(size < 10 && unit > 0 ? 1 : 0)} ${units[unit]}`;
}
function formatPublishError(error) {
  if (error && typeof error === "object" && "data" in error) {
    const data = error.data;
    if (typeof data === "string" && data.trim()) return data.trim();
    if (data && typeof data === "object" && "message" in data && typeof data.message === "string") {
      const message = data.message?.trim();
      if (message) return message;
    }
  }
  if (error instanceof Error) {
    const cleaned = error.message.replace(/\[CONVEX[^\]]*\]\s*/g, "").replace(/\[Request ID:[^\]]*\]\s*/g, "").replace(/^Server Error Called by client\s*/i, "").replace(/^ConvexError:\s*/i, "").trim();
    if (cleaned && cleaned !== "Server Error") return cleaned;
  }
  return "Publish failed. Please try again.";
}
function isTextFile(file) {
  const path = (file.webkitRelativePath || file.name).trim().toLowerCase();
  if (!path) return false;
  const parts = path.split(".");
  const extension = parts.length > 1 ? parts.at(-1) ?? "" : "";
  if (file.type && isTextContentType(file.type)) return true;
  if (extension && TEXT_FILE_EXTENSION_SET.has(extension)) return true;
  return false;
}
async function readText(blob) {
  if (typeof blob.text === "function") {
    return blob.text();
  }
  return new Response(blob).text();
}
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const Route$d = createFileRoute("/upload")({
  validateSearch: (search) => ({
    updateSlug: typeof search.updateSlug === "string" ? search.updateSlug : void 0
  }),
  component: Upload
});
function Upload() {
  const { isAuthenticated, me } = useAuthStatus();
  const { updateSlug } = useSearch({ from: "/upload" });
  const siteMode = getSiteMode();
  const isSoulMode = siteMode === "souls";
  const requiredFileLabel = isSoulMode ? "SOUL.md" : "SKILL.md";
  const contentLabel = isSoulMode ? "soul" : "skill";
  const generateUploadUrl = useMutation(api.uploads.generateUploadUrl);
  const publishVersion = useAction(
    isSoulMode ? api.souls.publishVersion : api.skills.publishVersion
  );
  const generateChangelogPreview = useAction(
    isSoulMode ? api.souls.generateChangelogPreview : api.skills.generateChangelogPreview
  );
  const existingSkill = useQuery(
    api.skills.getBySlug,
    !isSoulMode && updateSlug ? { slug: updateSlug } : "skip"
  );
  const existingSoul = useQuery(
    api.souls.getBySlug,
    isSoulMode && updateSlug ? { slug: updateSlug } : "skip"
  );
  const existing = isSoulMode ? existingSoul : existingSkill;
  const [hasAttempted, setHasAttempted] = reactExports.useState(false);
  const [files, setFiles] = reactExports.useState([]);
  const [slug, setSlug] = reactExports.useState(updateSlug ?? "");
  const [displayName, setDisplayName] = reactExports.useState("");
  const [version2, setVersion] = reactExports.useState("1.0.0");
  const [tags, setTags] = reactExports.useState("latest");
  const [changelog, setChangelog] = reactExports.useState("");
  const [changelogStatus, setChangelogStatus] = reactExports.useState(
    "idle"
  );
  const [changelogSource, setChangelogSource] = reactExports.useState(null);
  const changelogTouchedRef = reactExports.useRef(false);
  const changelogRequestRef = reactExports.useRef(0);
  const changelogKeyRef = reactExports.useRef(null);
  const [status, setStatus] = reactExports.useState(null);
  const isSubmitting = status !== null;
  const [error, setError] = reactExports.useState(null);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const validationRef = reactExports.useRef(null);
  const navigate = useNavigate();
  const maxBytes = 50 * 1024 * 1024;
  const totalBytes = reactExports.useMemo(() => files.reduce((sum, file) => sum + file.size, 0), [files]);
  const stripRoot = reactExports.useMemo(() => {
    if (files.length === 0) return null;
    const paths = files.map((file) => (file.webkitRelativePath || file.name).replace(/^\.\//, ""));
    if (!paths.every((path) => path.includes("/"))) return null;
    const firstSegment = paths[0]?.split("/")[0];
    if (!firstSegment) return null;
    if (!paths.every((path) => path.startsWith(`${firstSegment}/`))) return null;
    return firstSegment;
  }, [files]);
  const normalizedPaths = reactExports.useMemo(
    () => files.map((file) => {
      const raw = (file.webkitRelativePath || file.name).replace(/^\.\//, "");
      if (stripRoot && raw.startsWith(`${stripRoot}/`)) {
        return raw.slice(stripRoot.length + 1);
      }
      return raw;
    }),
    [files, stripRoot]
  );
  const hasRequiredFile = reactExports.useMemo(
    () => normalizedPaths.some((path) => {
      const lower2 = path.trim().toLowerCase();
      return isSoulMode ? lower2 === "soul.md" : lower2 === "skill.md" || lower2 === "skills.md";
    }),
    [isSoulMode, normalizedPaths]
  );
  const sizeLabel = totalBytes ? formatBytes(totalBytes) : "0 B";
  const trimmedSlug = slug.trim();
  const trimmedName = displayName.trim();
  const trimmedChangelog = changelog.trim();
  reactExports.useEffect(() => {
    if (!existing?.latestVersion || !existing?.skill && !existing?.soul) return;
    const name = existing.skill?.displayName ?? existing.soul?.displayName;
    const nextSlug = existing.skill?.slug ?? existing.soul?.slug;
    if (nextSlug) setSlug(nextSlug);
    if (name) setDisplayName(name);
    const nextVersion = semver$1.inc(existing.latestVersion.version, "patch");
    if (nextVersion) setVersion(nextVersion);
  }, [existing]);
  reactExports.useEffect(() => {
    if (changelogTouchedRef.current) return;
    if (trimmedChangelog) return;
    if (!trimmedSlug || !SLUG_PATTERN.test(trimmedSlug)) return;
    if (!semver$1.valid(version2)) return;
    if (!hasRequiredFile) return;
    if (files.length === 0) return;
    const requiredIndex = normalizedPaths.findIndex((path) => {
      const lower2 = path.trim().toLowerCase();
      return isSoulMode ? lower2 === "soul.md" : lower2 === "skill.md" || lower2 === "skills.md";
    });
    if (requiredIndex < 0) return;
    const requiredFile = files[requiredIndex];
    if (!requiredFile) return;
    const key = `${trimmedSlug}:${version2}:${requiredFile.size}:${requiredFile.lastModified}:${normalizedPaths.length}`;
    if (changelogKeyRef.current === key) return;
    changelogKeyRef.current = key;
    const requestId = ++changelogRequestRef.current;
    setChangelogStatus("loading");
    void readText(requiredFile).then((text) => {
      if (changelogRequestRef.current !== requestId) return null;
      return generateChangelogPreview({
        slug: trimmedSlug,
        version: version2,
        readmeText: text.slice(0, 2e4),
        filePaths: normalizedPaths
      });
    }).then((result) => {
      if (!result) return;
      if (changelogRequestRef.current !== requestId) return;
      setChangelog(result.changelog);
      setChangelogSource("auto");
      setChangelogStatus("ready");
    }).catch(() => {
      if (changelogRequestRef.current !== requestId) return;
      setChangelogStatus("error");
    });
  }, [
    files,
    generateChangelogPreview,
    hasRequiredFile,
    isSoulMode,
    normalizedPaths,
    trimmedChangelog,
    trimmedSlug,
    version2
  ]);
  const parsedTags = reactExports.useMemo(
    () => tags.split(",").map((tag) => tag.trim()).filter(Boolean),
    [tags]
  );
  const validation = reactExports.useMemo(() => {
    const issues = [];
    if (!trimmedSlug) {
      issues.push("Slug is required.");
    } else if (!SLUG_PATTERN.test(trimmedSlug)) {
      issues.push("Slug must be lowercase and use dashes only.");
    }
    if (!trimmedName) {
      issues.push("Display name is required.");
    }
    if (!semver$1.valid(version2)) {
      issues.push("Version must be valid semver (e.g. 1.0.0).");
    }
    if (parsedTags.length === 0) {
      issues.push("At least one tag is required.");
    }
    if (files.length === 0) {
      issues.push("Add at least one file.");
    }
    if (!hasRequiredFile) {
      issues.push(`${requiredFileLabel} is required.`);
    }
    const invalidFiles = files.filter((file) => !isTextFile(file));
    if (invalidFiles.length > 0) {
      issues.push(
        `Remove non-text files: ${invalidFiles.slice(0, 3).map((file) => file.name).join(", ")}`
      );
    }
    if (totalBytes > maxBytes) {
      issues.push("Total file size exceeds 50MB.");
    }
    return {
      issues,
      ready: issues.length === 0
    };
  }, [
    trimmedSlug,
    trimmedName,
    version2,
    parsedTags.length,
    files,
    hasRequiredFile,
    totalBytes,
    requiredFileLabel
  ]);
  reactExports.useEffect(() => {
    if (!fileInputRef.current) return;
    fileInputRef.current.setAttribute("webkitdirectory", "");
    fileInputRef.current.setAttribute("directory", "");
  }, []);
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      "Sign in to upload a ",
      contentLabel,
      "."
    ] }) });
  }
  async function handleSubmit(event) {
    event.preventDefault();
    setHasAttempted(true);
    if (!validation.ready) {
      if (validationRef.current && "scrollIntoView" in validationRef.current) {
        validationRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }
    setError(null);
    if (totalBytes > maxBytes) {
      setError("Total size exceeds 50MB per version.");
      return;
    }
    if (!hasRequiredFile) {
      setError(`${requiredFileLabel} is required.`);
      return;
    }
    setStatus("Uploading files…");
    const uploaded = [];
    for (const file of files) {
      const uploadUrl = await generateUploadUrl();
      const rawPath = (file.webkitRelativePath || file.name).replace(/^\.\//, "");
      const path = stripRoot && rawPath.startsWith(`${stripRoot}/`) ? rawPath.slice(stripRoot.length + 1) : rawPath;
      const sha256 = await hashFile(file);
      const storageId = await uploadFile(uploadUrl, file);
      uploaded.push({
        path,
        size: file.size,
        storageId,
        sha256,
        contentType: file.type || void 0
      });
    }
    setStatus("Publishing…");
    try {
      const result = await publishVersion({
        slug: trimmedSlug,
        displayName: trimmedName,
        version: version2,
        changelog: trimmedChangelog,
        tags: parsedTags,
        files: uploaded
      });
      setStatus(null);
      setError(null);
      setHasAttempted(false);
      setChangelogSource("user");
      if (result) {
        const ownerParam = me?.handle ?? (me?._id ? String(me._id) : "unknown");
        void navigate({
          to: isSoulMode ? "/souls/$slug" : "/$owner/$slug",
          params: isSoulMode ? { slug: trimmedSlug } : { owner: ownerParam, slug: trimmedSlug }
        });
      }
    } catch (error2) {
      setStatus(null);
      setError(formatPublishError(error2));
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "section-title", children: [
      "Publish a ",
      contentLabel
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "section-subtitle", children: [
      "Drop a folder with ",
      requiredFileLabel,
      " and text files. We will handle the rest."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "upload-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", htmlFor: "slug", children: "Slug" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "form-input",
            id: "slug",
            value: slug,
            onChange: (event) => setSlug(event.target.value),
            placeholder: `${contentLabel}-name`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", htmlFor: "displayName", children: "Display name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "form-input",
            id: "displayName",
            value: displayName,
            onChange: (event) => setDisplayName(event.target.value),
            placeholder: `My ${contentLabel}`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", htmlFor: "version", children: "Version" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "form-input",
            id: "version",
            value: version2,
            onChange: (event) => setVersion(event.target.value),
            placeholder: "1.0.0"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", htmlFor: "tags", children: "Tags" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "form-input",
            id: "tags",
            value: tags,
            onChange: (event) => setTags(event.target.value),
            placeholder: "latest, stable"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "label",
          {
            className: `upload-dropzone${isDragging ? " is-dragging" : ""}`,
            onDragOver: (event) => {
              event.preventDefault();
              setIsDragging(true);
            },
            onDragLeave: () => setIsDragging(false),
            onDrop: (event) => {
              event.preventDefault();
              setIsDragging(false);
              const items = event.dataTransfer.items;
              void (async () => {
                const dropped = items?.length ? await expandDroppedItems(items) : Array.from(event.dataTransfer.files);
                const next2 = await expandFiles(dropped);
                setFiles(next2);
              })();
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  ref: fileInputRef,
                  className: "upload-input",
                  id: "upload-files",
                  "data-testid": "upload-input",
                  type: "file",
                  multiple: true,
                  webkitdirectory: "",
                  directory: "",
                  onChange: (event) => {
                    const picked = Array.from(event.target.files ?? []);
                    void expandFiles(picked).then((next2) => setFiles(next2));
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "upload-dropzone-copy", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Drop a folder" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  files.length,
                  " files · ",
                  sizeLabel
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: () => fileInputRef.current?.click(), children: "Choose folder" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-file-list", children: files.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "No files selected." }) : normalizedPaths.map((path) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "upload-file-row", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: path }) }, path)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", ref: validationRef, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", style: { fontSize: "1.2rem", margin: 0 }, children: "Validation" }),
        validation.issues.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "All checks passed." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "validation-list", children: validation.issues.map((issue) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: issue }, issue)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", htmlFor: "changelog", children: "Changelog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            className: "form-input",
            id: "changelog",
            rows: 6,
            value: changelog,
            onChange: (event) => {
              changelogTouchedRef.current = true;
              setChangelogSource("user");
              setChangelog(event.target.value);
            },
            placeholder: `Describe what changed in this ${contentLabel}...`
          }
        ),
        changelogStatus === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Generating changelog…" }) : null,
        changelogStatus === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Could not auto-generate changelog." }) : null,
        changelogSource === "auto" && changelog ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Auto-generated changelog (edit as needed)." }) : null
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        error ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "error", role: "alert", children: error }) : null,
        status ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: status }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "btn btn-primary",
            type: "submit",
            disabled: !validation.ready || isSubmitting,
            children: [
              "Publish ",
              contentLabel
            ]
          }
        ),
        hasAttempted && !validation.ready ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat", children: "Fix validation issues to continue." }) : null
      ] })
    ] })
  ] });
}
const $$splitComponentImporter$a = () => import("./stars-CPknSrGh.mjs");
const Route$c = createFileRoute("/stars")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./settings-Bg_04bad.mjs");
const Route$b = createFileRoute("/settings")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./management-BxcPwkrF.mjs");
const Route$a = createFileRoute("/management")({
  validateSearch: (search) => ({
    skill: typeof search.skill === "string" && search.skill.trim() ? search.skill : void 0
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./import-BcigkHCK.mjs");
const Route$9 = createFileRoute("/import")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./dashboard-DDn2qnzF.mjs");
const Route$8 = createFileRoute("/dashboard")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const Route$7 = createFileRoute("/admin")({
  beforeLoad: () => {
    throw redirect({
      to: "/management",
      search: { skill: void 0 },
      replace: true
    });
  }
});
const $$splitComponentImporter$5 = () => import("./index-CdDAxQHF.mjs");
const Route$6 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-3hRIVKdq.mjs");
const sortKeys$1 = ["newest", "downloads", "stars", "name", "updated"];
function parseSort$1(value2) {
  if (typeof value2 !== "string") return "newest";
  if (sortKeys$1.includes(value2)) return value2;
  return "newest";
}
const Route$5 = createFileRoute("/souls/")({
  validateSearch: (search) => {
    return {
      q: typeof search.q === "string" && search.q.trim() ? search.q : void 0,
      sort: typeof search.sort === "string" ? parseSort$1(search.sort) : void 0,
      dir: search.dir === "asc" || search.dir === "desc" ? search.dir : void 0,
      view: search.view === "cards" || search.view === "list" ? search.view : void 0,
      focus: search.focus === "search" ? "search" : void 0
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
function SkillCard({ skill, badge, chip, summaryFallback, meta, href }) {
  const owner = encodeURIComponent(String(skill.ownerUserId));
  const link = href ?? `/${owner}/${skill.slug}`;
  const badges = Array.isArray(badge) ? badge : badge ? [badge] : [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: link, className: "card skill-card", children: [
    badges.length || chip ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skill-card-tags", children: [
      badges.map((label) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tag", children: label }, label)),
      chip ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "tag tag-accent tag-compact", children: chip }) : null
    ] }) : null,
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "skill-card-title", children: skill.displayName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "skill-card-summary", children: skill.summary ?? summaryFallback }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skill-card-footer", children: meta })
  ] });
}
function isSkillHighlighted(skill) {
  return Boolean(skill.badges?.highlighted);
}
function isSkillOfficial(skill) {
  return Boolean(skill.badges?.official);
}
function isSkillDeprecated(skill) {
  return Boolean(skill.badges?.deprecated);
}
function getSkillBadges(skill) {
  const badges = [];
  if (isSkillDeprecated(skill)) badges.push("Deprecated");
  if (isSkillOfficial(skill)) badges.push("Official");
  if (isSkillHighlighted(skill)) badges.push("Highlighted");
  return badges;
}
const sortKeys = ["newest", "downloads", "installs", "stars", "name", "updated"];
const pageSize = 25;
function parseSort(value2) {
  if (typeof value2 !== "string") return "newest";
  if (sortKeys.includes(value2)) return value2;
  return "newest";
}
function parseDir(value2, sort) {
  if (value2 === "asc" || value2 === "desc") return value2;
  return sort === "name" ? "asc" : "desc";
}
function buildSkillHref(skill, ownerHandle) {
  const owner = ownerHandle?.trim() || String(skill.ownerUserId);
  return `/${encodeURIComponent(owner)}/${encodeURIComponent(skill.slug)}`;
}
const Route$4 = createFileRoute("/skills/")({
  validateSearch: (search) => {
    return {
      q: typeof search.q === "string" && search.q.trim() ? search.q : void 0,
      sort: typeof search.sort === "string" ? parseSort(search.sort) : void 0,
      dir: search.dir === "asc" || search.dir === "desc" ? search.dir : void 0,
      highlighted: search.highlighted === "1" || search.highlighted === "true" || search.highlighted === true ? true : void 0,
      view: search.view === "cards" || search.view === "list" ? search.view : void 0,
      focus: search.focus === "search" ? "search" : void 0
    };
  },
  component: SkillsIndex
});
function SkillsIndex() {
  const navigate = Route$4.useNavigate();
  const search = Route$4.useSearch();
  const sort = search.sort ?? "newest";
  const dir = parseDir(search.dir, sort);
  const view = search.view ?? "list";
  const highlightedOnly = search.highlighted ?? false;
  const [query, setQuery] = reactExports.useState(search.q ?? "");
  const searchSkills = useAction(api.search.searchSkills);
  const [searchResults, setSearchResults] = reactExports.useState([]);
  const [searchLimit, setSearchLimit] = reactExports.useState(pageSize);
  const [isSearching, setIsSearching] = reactExports.useState(false);
  const searchRequest = reactExports.useRef(0);
  const loadMoreRef = reactExports.useRef(null);
  const searchInputRef = reactExports.useRef(null);
  const trimmedQuery = reactExports.useMemo(() => query.trim(), [query]);
  const hasQuery = trimmedQuery.length > 0;
  const searchKey = trimmedQuery ? `${trimmedQuery}::${highlightedOnly ? "1" : "0"}` : "";
  const {
    results: paginatedResults,
    status: paginationStatus,
    loadMore: loadMorePaginated
  } = usePaginatedQuery(api.skills.listPublicPageV2, hasQuery ? "skip" : {}, {
    initialNumItems: pageSize
  });
  const isLoadingList = paginationStatus === "LoadingFirstPage";
  const canLoadMoreList = paginationStatus === "CanLoadMore";
  const isLoadingMoreList = paginationStatus === "LoadingMore";
  reactExports.useEffect(() => {
    setQuery(search.q ?? "");
  }, [search.q]);
  reactExports.useEffect(() => {
    if (search.focus === "search" && searchInputRef.current) {
      searchInputRef.current.focus();
      void navigate({ search: (prev) => ({ ...prev, focus: void 0 }), replace: true });
    }
  }, [search.focus, navigate]);
  reactExports.useEffect(() => {
    if (!searchKey) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    setSearchResults([]);
    setSearchLimit(pageSize);
  }, [searchKey]);
  reactExports.useEffect(() => {
    if (!hasQuery) return;
    searchRequest.current += 1;
    const requestId = searchRequest.current;
    setIsSearching(true);
    const handle = window.setTimeout(() => {
      void (async () => {
        try {
          const data = await searchSkills({
            query: trimmedQuery,
            highlightedOnly,
            limit: searchLimit
          });
          if (requestId === searchRequest.current) {
            setSearchResults(data);
          }
        } finally {
          if (requestId === searchRequest.current) {
            setIsSearching(false);
          }
        }
      })();
    }, 220);
    return () => window.clearTimeout(handle);
  }, [hasQuery, highlightedOnly, searchLimit, searchSkills, trimmedQuery]);
  const baseItems = reactExports.useMemo(() => {
    if (hasQuery) {
      return searchResults.map((entry) => ({
        skill: entry.skill,
        latestVersion: entry.version,
        ownerHandle: entry.ownerHandle ?? null
      }));
    }
    return paginatedResults;
  }, [hasQuery, paginatedResults, searchResults]);
  const filtered = reactExports.useMemo(
    () => baseItems.filter((entry) => highlightedOnly ? isSkillHighlighted(entry.skill) : true),
    [baseItems, highlightedOnly]
  );
  const sorted = reactExports.useMemo(() => {
    const multiplier = dir === "asc" ? 1 : -1;
    const results = [...filtered];
    results.sort((a, b) => {
      switch (sort) {
        case "downloads":
          return (a.skill.stats.downloads - b.skill.stats.downloads) * multiplier;
        case "installs":
          return ((a.skill.stats.installsAllTime ?? 0) - (b.skill.stats.installsAllTime ?? 0)) * multiplier;
        case "stars":
          return (a.skill.stats.stars - b.skill.stats.stars) * multiplier;
        case "updated":
          return (a.skill.updatedAt - b.skill.updatedAt) * multiplier;
        case "name":
          return (a.skill.displayName.localeCompare(b.skill.displayName) || a.skill.slug.localeCompare(b.skill.slug)) * multiplier;
        default:
          return (a.skill.createdAt - b.skill.createdAt) * multiplier;
      }
    });
    return results;
  }, [dir, filtered, sort]);
  const isLoadingSkills = hasQuery ? isSearching && searchResults.length === 0 : isLoadingList;
  const canLoadMore = hasQuery ? !isSearching && searchResults.length === searchLimit && searchResults.length > 0 : canLoadMoreList;
  const isLoadingMore = hasQuery ? isSearching && searchResults.length > 0 : isLoadingMoreList;
  const canAutoLoad = typeof IntersectionObserver !== "undefined";
  const loadMore = reactExports.useCallback(() => {
    if (isLoadingMore || !canLoadMore) return;
    if (hasQuery) {
      setSearchLimit((value2) => value2 + pageSize);
    } else {
      loadMorePaginated(pageSize);
    }
  }, [canLoadMore, hasQuery, isLoadingMore, loadMorePaginated]);
  reactExports.useEffect(() => {
    if (!canLoadMore || typeof IntersectionObserver === "undefined") return;
    const target = loadMoreRef.current;
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loadMore();
        }
      },
      { rootMargin: "200px" }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [canLoadMore, loadMore]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "section", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "skills-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "section-title", style: { marginBottom: 8 }, children: "Skills" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "section-subtitle", style: { marginBottom: 0 }, children: isLoadingSkills ? "Loading skills…" : `Browse the skill library${highlightedOnly ? " (highlighted)" : ""}.` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-toolbar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-search", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: searchInputRef,
            className: "skills-search-input",
            value: query,
            onChange: (event) => {
              const next2 = event.target.value;
              const trimmed = next2.trim();
              setQuery(next2);
              void navigate({
                search: (prev) => ({ ...prev, q: trimmed ? next2 : void 0 }),
                replace: true
              });
            },
            placeholder: "Filter by name, slug, or summary…"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-toolbar-row", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `search-filter-button${highlightedOnly ? " is-active" : ""}`,
              type: "button",
              "aria-pressed": highlightedOnly,
              onClick: () => {
                void navigate({
                  search: (prev) => ({
                    ...prev,
                    highlighted: highlightedOnly ? void 0 : true
                  }),
                  replace: true
                });
              },
              children: "Highlighted"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "skills-sort",
              value: sort,
              onChange: (event) => {
                const sort2 = parseSort(event.target.value);
                void navigate({
                  search: (prev) => ({
                    ...prev,
                    sort: sort2,
                    dir: parseDir(prev.dir, sort2)
                  }),
                  replace: true
                });
              },
              "aria-label": "Sort skills",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "newest", children: "Newest" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "updated", children: "Recently updated" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "downloads", children: "Downloads" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "installs", children: "Installs" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "stars", children: "Stars" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "name", children: "Name" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "skills-dir",
              type: "button",
              "aria-label": `Sort direction ${dir}`,
              onClick: () => {
                void navigate({
                  search: (prev) => ({
                    ...prev,
                    dir: parseDir(prev.dir, sort) === "asc" ? "desc" : "asc"
                  }),
                  replace: true
                });
              },
              children: dir === "asc" ? "↑" : "↓"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `skills-view${view === "cards" ? " is-active" : ""}`,
              type: "button",
              onClick: () => {
                void navigate({
                  search: (prev) => ({
                    ...prev,
                    view: prev.view === "cards" ? void 0 : "cards"
                  }),
                  replace: true
                });
              },
              children: view === "cards" ? "List" : "Cards"
            }
          )
        ] })
      ] })
    ] }),
    isLoadingSkills ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-indicator", children: "Loading skills…" }) }) : sorted.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", children: "No skills match that filter." }) : view === "cards" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: sorted.map((entry) => {
      const skill = entry.skill;
      const isPlugin = Boolean(entry.latestVersion?.parsed?.clawdis?.nix?.plugin);
      const skillHref = buildSkillHref(skill, entry.ownerHandle);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        SkillCard,
        {
          skill,
          href: skillHref,
          badge: getSkillBadges(skill),
          chip: isPlugin ? "Plugin bundle (nix)" : void 0,
          summaryFallback: "Agent-ready skill pack.",
          meta: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stat", children: [
            "⭐ ",
            skill.stats.stars,
            " · ⤓ ",
            skill.stats.downloads,
            " · ⤒",
            " ",
            skill.stats.installsAllTime ?? 0
          ] })
        },
        skill._id
      );
    }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-list", children: sorted.map((entry) => {
      const skill = entry.skill;
      const isPlugin = Boolean(entry.latestVersion?.parsed?.clawdis?.nix?.plugin);
      const skillHref = buildSkillHref(skill, entry.ownerHandle);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { className: "skills-row", to: skillHref, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-row-main", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-row-title", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: skill.displayName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "skills-row-slug", children: [
              "/",
              skill.slug
            ] }),
            getSkillBadges(skill).map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag", children: badge }, badge)),
            isPlugin ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "tag tag-accent tag-compact", children: "Plugin bundle (nix)" }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-row-summary", children: skill.summary ?? "No summary provided." }),
          isPlugin ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "skills-row-meta", children: "Bundle includes SKILL.md, CLI, and config." }) : null
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "skills-row-metrics", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "⤓ ",
            skill.stats.downloads
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "⤒ ",
            skill.stats.installsAllTime ?? 0
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "★ ",
            skill.stats.stars
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            skill.stats.versions,
            " v"
          ] })
        ] })
      ] }, skill._id);
    }) }),
    canLoadMore ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: canAutoLoad ? loadMoreRef : null,
        className: "card",
        style: { marginTop: 16, display: "flex", justifyContent: "center" },
        children: canAutoLoad ? isLoadingMore ? "Loading more…" : "Scroll to load more" : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn", type: "button", onClick: loadMore, disabled: isLoadingMore, children: isLoadingMore ? "Loading…" : "Load more" })
      }
    ) : null
  ] });
}
const $$splitComponentImporter$3 = () => import("./_handle-DTnf9_fL.mjs");
const Route$3 = createFileRoute("/u/$handle")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const DEFAULT_DESCRIPTION = "ClawHub — a fast skill registry for agents, with vector search.";
const DEFAULT_SOUL_DESCRIPTION = "SoulHub — the home for SOUL.md bundles and personal system lore.";
const OG_SKILL_IMAGE_LAYOUT_VERSION = "5";
const OG_SOUL_IMAGE_LAYOUT_VERSION = "1";
function getSiteUrl() {
  return getClawHubSiteUrl();
}
function getSoulSiteUrl() {
  return getOnlyCrabsSiteUrl();
}
function getApiBase() {
  return getSiteUrl();
}
async function fetchSkillMeta(slug) {
  try {
    const apiBase = getApiBase();
    const url2 = new URL(`/api/v1/skills/${encodeURIComponent(slug)}`, apiBase);
    const response = await fetch(url2.toString(), { headers: { Accept: "application/json" } });
    if (!response.ok) return null;
    const payload = await response.json();
    return {
      displayName: payload.skill?.displayName ?? null,
      summary: payload.skill?.summary ?? null,
      owner: payload.owner?.handle ?? null,
      ownerId: payload.owner?.userId ?? null,
      version: payload.latestVersion?.version ?? null
    };
  } catch {
    return null;
  }
}
async function fetchSoulMeta(slug) {
  try {
    const apiBase = getApiBase();
    const url2 = new URL(`/api/v1/souls/${encodeURIComponent(slug)}`, apiBase);
    const response = await fetch(url2.toString(), { headers: { Accept: "application/json" } });
    if (!response.ok) return null;
    const payload = await response.json();
    return {
      displayName: payload.soul?.displayName ?? null,
      summary: payload.soul?.summary ?? null,
      owner: payload.owner?.handle ?? null,
      version: payload.latestVersion?.version ?? null
    };
  } catch {
    return null;
  }
}
function buildSkillMeta(source) {
  const siteUrl = getSiteUrl();
  const owner = clean(source.owner);
  const ownerId = clean(source.ownerId);
  const displayName = clean(source.displayName) || clean(source.slug);
  const summary = clean(source.summary);
  const version2 = clean(source.version);
  const title = `${displayName} — ClawHub`;
  const description = summary || (owner ? `Agent skill by @${owner} on ClawHub.` : DEFAULT_DESCRIPTION);
  const ownerPath = owner || ownerId || "unknown";
  const url2 = `${siteUrl}/${ownerPath}/${source.slug}`;
  const imageParams = new URLSearchParams();
  imageParams.set("v", OG_SKILL_IMAGE_LAYOUT_VERSION);
  imageParams.set("slug", source.slug);
  if (owner) imageParams.set("owner", owner);
  if (version2) imageParams.set("version", version2);
  return {
    title,
    description: truncate(description, 200),
    image: `${siteUrl}/og/skill.png?${imageParams.toString()}`,
    url: url2,
    owner: owner || null
  };
}
function buildSoulMeta(source) {
  const siteUrl = getSoulSiteUrl();
  const owner = clean(source.owner);
  const displayName = clean(source.displayName) || clean(source.slug);
  const summary = clean(source.summary);
  const version2 = clean(source.version);
  const title = `${displayName} — SoulHub`;
  const description = summary || (owner ? `Soul by @${owner} on SoulHub.` : DEFAULT_SOUL_DESCRIPTION);
  const url2 = `${siteUrl}/souls/${source.slug}`;
  const imageParams = new URLSearchParams();
  imageParams.set("v", OG_SOUL_IMAGE_LAYOUT_VERSION);
  imageParams.set("slug", source.slug);
  if (owner) imageParams.set("owner", owner);
  if (version2) imageParams.set("version", version2);
  return {
    title,
    description: truncate(description, 200),
    image: `${siteUrl}/og/soul.png?${imageParams.toString()}`,
    url: url2,
    owner: owner || null
  };
}
function clean(value2) {
  return value2?.trim() ?? "";
}
function truncate(value2, max) {
  if (value2.length <= max) return value2;
  return `${value2.slice(0, max - 1).trim()}…`;
}
const $$splitComponentImporter$2 = () => import("./_slug-KVoiGnSM.mjs");
const Route$2 = createFileRoute("/souls/$slug")({
  loader: async ({
    params
  }) => {
    const data = await fetchSoulMeta(params.slug);
    return {
      owner: data?.owner ?? null,
      displayName: data?.displayName ?? null,
      summary: data?.summary ?? null,
      version: data?.version ?? null
    };
  },
  head: ({
    params,
    loaderData
  }) => {
    const meta = buildSoulMeta({
      slug: params.slug,
      owner: loaderData?.owner ?? null,
      displayName: loaderData?.displayName,
      summary: loaderData?.summary,
      version: loaderData?.version ?? null
    });
    return {
      links: [{
        rel: "canonical",
        href: meta.url
      }],
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        property: "og:title",
        content: meta.title
      }, {
        property: "og:description",
        content: meta.description
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: meta.url
      }, {
        property: "og:image",
        content: meta.image
      }, {
        property: "og:image:width",
        content: "1200"
      }, {
        property: "og:image:height",
        content: "630"
      }, {
        property: "og:image:alt",
        content: meta.title
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: meta.title
      }, {
        name: "twitter:description",
        content: meta.description
      }, {
        name: "twitter:image",
        content: meta.image
      }, {
        name: "twitter:image:alt",
        content: meta.title
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./auth-djEbxDas.mjs");
const Route$1 = createFileRoute("/cli/auth")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_slug-viwOm64n.mjs");
const Route = createFileRoute("/$owner/$slug")({
  loader: async ({
    params
  }) => {
    const data = await fetchSkillMeta(params.slug);
    return {
      owner: data?.owner ?? params.owner,
      displayName: data?.displayName ?? null,
      summary: data?.summary ?? null,
      version: data?.version ?? null
    };
  },
  head: ({
    params,
    loaderData
  }) => {
    const meta = buildSkillMeta({
      slug: params.slug,
      owner: loaderData?.owner ?? params.owner,
      displayName: loaderData?.displayName,
      summary: loaderData?.summary,
      version: loaderData?.version ?? null
    });
    return {
      links: [{
        rel: "canonical",
        href: meta.url
      }],
      meta: [{
        title: meta.title
      }, {
        name: "description",
        content: meta.description
      }, {
        property: "og:title",
        content: meta.title
      }, {
        property: "og:description",
        content: meta.description
      }, {
        property: "og:type",
        content: "website"
      }, {
        property: "og:url",
        content: meta.url
      }, {
        property: "og:image",
        content: meta.image
      }, {
        property: "og:image:width",
        content: "1200"
      }, {
        property: "og:image:height",
        content: "630"
      }, {
        property: "og:image:alt",
        content: meta.title
      }, {
        name: "twitter:card",
        content: "summary_large_image"
      }, {
        name: "twitter:title",
        content: meta.title
      }, {
        name: "twitter:description",
        content: meta.description
      }, {
        name: "twitter:image",
        content: meta.image
      }, {
        name: "twitter:image:alt",
        content: meta.title
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const UploadRoute = Route$d.update({
  id: "/upload",
  path: "/upload",
  getParentRoute: () => Route$e
});
const StarsRoute = Route$c.update({
  id: "/stars",
  path: "/stars",
  getParentRoute: () => Route$e
});
const SettingsRoute = Route$b.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => Route$e
});
const ManagementRoute = Route$a.update({
  id: "/management",
  path: "/management",
  getParentRoute: () => Route$e
});
const ImportRoute = Route$9.update({
  id: "/import",
  path: "/import",
  getParentRoute: () => Route$e
});
const DashboardRoute = Route$8.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$e
});
const AdminRoute = Route$7.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$e
});
const IndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$e
});
const SoulsIndexRoute = Route$5.update({
  id: "/souls/",
  path: "/souls/",
  getParentRoute: () => Route$e
});
const SkillsIndexRoute = Route$4.update({
  id: "/skills/",
  path: "/skills/",
  getParentRoute: () => Route$e
});
const UHandleRoute = Route$3.update({
  id: "/u/$handle",
  path: "/u/$handle",
  getParentRoute: () => Route$e
});
const SoulsSlugRoute = Route$2.update({
  id: "/souls/$slug",
  path: "/souls/$slug",
  getParentRoute: () => Route$e
});
const CliAuthRoute = Route$1.update({
  id: "/cli/auth",
  path: "/cli/auth",
  getParentRoute: () => Route$e
});
const OwnerSlugRoute = Route.update({
  id: "/$owner/$slug",
  path: "/$owner/$slug",
  getParentRoute: () => Route$e
});
const rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  DashboardRoute,
  ImportRoute,
  ManagementRoute,
  SettingsRoute,
  StarsRoute,
  UploadRoute,
  OwnerSlugRoute,
  CliAuthRoute,
  SoulsSlugRoute,
  UHandleRoute,
  SkillsIndexRoute,
  SoulsIndexRoute
};
const routeTree = Route$e._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  ClientOnly as C,
  Route$a as R,
  SkillCard as S,
  api as a,
  useMutation as b,
  useAuthStatus as c,
  isAdmin as d,
  isSkillHighlighted as e,
  isSkillOfficial as f,
  gravatarUrl as g,
  isSkillDeprecated as h,
  isModerator as i,
  getSkillBadges as j,
  useAction as k,
  getSiteMode as l,
  Route$6 as m,
  Route$5 as n,
  Route$3 as o,
  Route$2 as p,
  useAuthActions as q,
  Route$1 as r,
  canManageSkill as s,
  Route as t,
  useQuery as u,
  router as v
};
