import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { streamingLinks } from "@/lib/music";
import { email, links, siteDescription, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jono Hey — Product, UX, Design and Startup Leader",
    template: "%s · Jono Hey",
  },
  description: siteDescription,
  openGraph: {
    siteName: "Jono Hey",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
};

// Tells search engines who Jono is, links his other profiles, and gives the
// site a name to show in search results.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Jono Hey",
      url: siteUrl,
      inLanguage: "en-GB",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Jono Hey",
      alternateName: "Jonathan Hey",
      url: siteUrl,
      image: `${siteUrl}/images/jono-hey-portrait.jpg`,
      jobTitle: "Product, UX, design and startup leader",
      description: siteDescription,
      email: `mailto:${email}`,
      homeLocation: { "@type": "Place", name: "London, United Kingdom" },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of California, Berkeley",
      },
      knowsAbout: [
        "Product design",
        "User experience design",
        "Startups",
        "Visual explanation",
        "Piano composition",
      ],
      sameAs: [
        links.sketchplanations,
        links.linkedin,
        ...streamingLinks.map((link) => link.href),
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={structuredData} />
        <SiteHeader />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
