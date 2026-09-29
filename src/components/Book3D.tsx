import Image, { type StaticImageData } from "next/image";

type Props = {
  cover: StaticImageData;
  alt: string;
  spineTitle: string;
  spineAuthor: string;
  href: string;
  width?: number;
  thickness?: number;
  /** Tailwind classes for the spine's background and text colour. */
  spineClassName?: string;
  backColor?: string;
};

// A book rendered with CSS 3D transforms: cover on the front, spine on the
// left and page edges on the right. Height follows the cover's aspect ratio.
export function Book3D({
  cover,
  alt,
  spineTitle,
  spineAuthor,
  href,
  width = 168,
  thickness = 30,
  spineClassName = "bg-[linear-gradient(90deg,#b9b9b9,#d6d6d6_45%,#c4c4c4)] text-[#222]",
  backColor = "#1d3f8a",
}: Props) {
  const height = Math.round((width * cover.height) / cover.width);
  const half = thickness / 2;

  return (
    <a
      href={href}
      className="book3d group relative block shrink-0"
      style={{ width: width + thickness, height, perspective: 1400 }}
    >
      <div
        className="book3d-body absolute top-0"
        style={{ width, height, left: thickness * 0.7 }}
      >
        {/* Front cover */}
        <div
          className="absolute inset-0 overflow-hidden rounded-r-[3px]"
          style={{ transform: `translateZ(${half}px)` }}
        >
          <Image
            src={cover}
            alt={alt}
            sizes={`${width}px`}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
          {/* Hinge crease and a soft sheen */}
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0,rgba(255,255,255,0.12)_2.5%,transparent_7%,transparent_70%,rgba(255,255,255,0.06)_100%)]" />
        </div>

        {/* Spine (decorative: the cover image's alt text names the book) */}
        <div
          aria-hidden
          // pt/pb are physical; py would map to the horizontal axis here
          // because of the vertical writing mode.
          className={`absolute top-0 flex items-center justify-between pt-6 pb-5 [writing-mode:vertical-rl] ${spineClassName}`}
          style={{
            width: thickness,
            height,
            left: (width - thickness) / 2,
            transform: `rotateY(-90deg) translateZ(${width / 2}px)`,
          }}
        >
          <span className="font-serif text-[7.5px] tracking-[0.14em] uppercase">
            {spineTitle}
          </span>
          <span className="font-serif text-[7.5px] tracking-[0.08em]">
            {spineAuthor}
          </span>
        </div>

        {/* Page edges */}
        <div
          className="absolute top-[2px] bg-[repeating-linear-gradient(90deg,#f4f1ea_0,#f4f1ea_1px,#d9d4c8_1px,#d9d4c8_2px)]"
          style={{
            width: thickness - 2,
            height: height - 4,
            left: (width - thickness + 2) / 2,
            transform: `rotateY(90deg) translateZ(${width / 2 - 2}px)`,
          }}
        />

        {/* Back cover */}
        <div
          className="absolute inset-0 rounded-r-[3px]"
          style={{
            background: backColor,
            transform: `rotateY(180deg) translateZ(${half}px)`,
          }}
        />
      </div>

      {/* Shadow on the "table" */}
      <div
        aria-hidden
        className="absolute -bottom-3 left-[10%] h-6 w-[85%] rounded-[50%] bg-black/70 blur-md"
      />
    </a>
  );
}
