const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "../public/images/singenuity/3654.jpg");
const tmpPath = path.join(__dirname, "../public/images/singenuity/3654_tmp.jpg");

const origSize = fs.statSync(inputPath).size;
console.log("Original size:", origSize, "bytes (" + Math.round(origSize / 1024) + " KB)");

sharp(inputPath)
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(tmpPath)
  .then((info) => {
    console.log(
      "Re-encoded:",
      info.size,
      "bytes (" + Math.round(info.size / 1024) + " KB)",
      info.width + "x" + info.height
    );
    fs.renameSync(tmpPath, inputPath);
    console.log("Replaced original 3654.jpg successfully.");
  })
  .catch((err) => {
    console.error("Error:", err);
    process.exit(1);
  });
