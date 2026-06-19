import OgImage, { alt as ogAlt, size as ogSize, contentType as ogType } from "./opengraph-image";

// Reuse the OpenGraph card for Twitter. `runtime` is declared directly here
// (re-exporting it from another file isn't statically recognized by Next).
export const runtime = "edge";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogType;

export default OgImage;
