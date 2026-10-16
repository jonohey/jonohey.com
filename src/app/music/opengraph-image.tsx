import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Black and white portrait of Jono Hey, composer";
export const size = { width: 1200, height: 1200 };
export const contentType = "image/png";

// Square so that Linktree and X's "summary" card show the whole portrait
// instead of cropping a wide card.
export default async function Image() {
  const photo = await readFile(
    join(process.cwd(), "public/images/jono-hey-composer-black-and-white.jpg"),
  );
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    <img src={src} width={1200} height={1200} alt="" />,
    size,
  );
}
