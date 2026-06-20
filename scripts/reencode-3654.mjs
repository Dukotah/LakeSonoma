import { createRequire } from "module";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { statSync, renameSync } from "fs";

const require = createRequire(import.meta.url);
const sharp = require("./node_modules/sharp/lib/index.js");

const input = new URL("../public/images/singenuity/3654.jpg", import.meta.url);
const inputPath = fileURLToPath(input);
const tmpPath = inputPath.replace("3654.jpg", "3654_tmp.jpg");

const origSize = statSync(inputPath).size;
console.log("Original size:", origSize, "bytes (", Math.round(origSize / 1024), "KB)");

sharp(inputPath)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(tmpPath)
  .then((info) => {
    console.log("Re-encoded:", info.size, "bytes (", Math.round(info.size / 1024), "KB)", info.width + "x" + info.height);
    renameSync(tmpPath, inputPath);
    console.log("Replaced original 3654.jpg");
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
