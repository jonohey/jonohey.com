import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Black and white portrait of Jono Hey beside the words Composer, Jono Hey";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(
    join(process.cwd(), "public/images/jono-hey-composer-black-and-white.jpg"),
  );
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#0b0b0c",
          color: "#ededee",
        }}
      >
        <img src={src} width={630} height={630} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
          }}
        >
          <div style={{ fontSize: 28, letterSpacing: 6, color: "#e8c27a" }}>
            COMPOSER
          </div>
          <div style={{ fontSize: 88, marginTop: 16 }}>Jono Hey</div>
          <div style={{ fontSize: 30, marginTop: 24, color: "#9a9aa2" }}>
            Melodic, atmospheric piano music
          </div>
        </div>
      </div>
    ),
    size,
  );
}
