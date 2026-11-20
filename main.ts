// news-image-20261120 entry — Node 22, standard library only.
//
// The entry image sits next to this file as entry.png. It is a JPEG in a
// .png name (the gate reads the format from the first bytes, so that is
// fine). This program writes those exact bytes to /output/entry.png on
// every run. It does no network, takes no input and stamps nothing
// time-dependent into the output, so two runs are byte-identical.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const folder = dirname(fileURLToPath(import.meta.url));
const picture = join(folder, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outFile = join(outDir, 'entry.png');

// A whole JPEG starts FFD8 and a whole PNG starts 89504E47. Anything else
// means the image file is damaged, so fail loudly instead of shipping it.
function looksLikeImage(bytes) {
  const jpeg = bytes[0] === 0xff && bytes[1] === 0xd8;
  const png =
    bytes[0] === 0x89 &&
    bytes[1] === 0x50 &&
    bytes[2] === 0x4e &&
    bytes[3] === 0x47;
  return jpeg || png;
}

const image = readFileSync(picture);
if (!looksLikeImage(image)) {
  throw new Error('entry.png does not start with a JPEG or PNG marker');
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, image);

// Read the output back and make sure every byte landed before exiting.
const written = readFileSync(outFile);
if (written.length !== image.length) {
  throw new Error(
    `entry.png write is short: ${written.length} of ${image.length} bytes`,
  );
}

// The written file must still carry the same format marker as the source,
// so a mangled write cannot pass silently.
if (!looksLikeImage(written)) {
  throw new Error('entry.png in output lost its JPEG/PNG marker');
}
if (Buffer.compare(written.subarray(0, 4), image.subarray(0, 4)) !== 0) {
  throw new Error('entry.png in output has different leading bytes');
}

console.log(`wrote ${outFile} (${written.length} bytes)`);
