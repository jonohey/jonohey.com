import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF where supported (smallest), WebP otherwise.
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    // Images are statically imported with hashed URLs, so cache them for a year.
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: "/zoom",
        destination:
          "https://us04web.zoom.us/j/5226698361?pwd=MVdjMHVRR2FpK1ppekdHUDUwY3Fzdz09",
        // Same 302 as the old Netlify redirect.
        statusCode: 302,
      },
      {
        source: "/books",
        destination: "https://sketchplanations.com/big-ideas-little-pictures",
        permanent: true,
      },
      // Old portrait URL from the Hugo site.
      {
        source: "/images/jono-hey.jpg",
        destination: "/images/jono-hey-portrait.jpg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
