import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://perspektiveausland.com"),
  title: {
    default: "Über uns | Perspektive Ausland",
    template: "%s | Perspektive Ausland",
  },
  description:
    "Perspektive Ausland ist die führende deutschsprachige Plattform für Auswandern, Plan B und internationale Steuerplanung. Gegründet von Sebastian Sauerborn — 25 Jahre Erfahrung, 40+ Jurisdiktionen, 1.000+ Mandanten.",
  keywords: [
    "Auswandern", "Plan B", "internationale Steuerplanung", "Wegzugsbesteuerung",
    "Wohnsitzverlagerung", "Vermögenssicherung", "Zweitpass", "Banking außerhalb EU",
    "Sebastian Sauerborn", "Perspektive Ausland", "Podcast Auswandern",
  ],
  authors: [{ name: "Sebastian Sauerborn", url: "https://www.sebsauerborn.com" }],
  creator: "Sebastian Sauerborn",
  publisher: "Perspektive Ausland",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://perspektiveausland.com/ueber-uns",
    siteName: "Perspektive Ausland",
    title: "Über uns | Perspektive Ausland",
    description:
      "Die Plattform für deutschsprachige Unternehmer, Freiberufler und Investoren. Auswandern, Plan B und Strukturen außerhalb der EU.",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/hero_world_map_dark-H6jRoZfj3LaqrGaruscYXm.png",
        width: 2560,
        height: 1440,
        alt: "Perspektive Ausland — Mehr Geld. Mehr Freiheit. Weniger Staat.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Über uns | Perspektive Ausland",
    description: "Die führende deutschsprachige Plattform für Auswandern, Plan B und internationale Steuerplanung.",
    images: ["https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/hero_world_map_dark-H6jRoZfj3LaqrGaruscYXm.png"],
    creator: "@SauerbornX",
  },
  alternates: {
    canonical: "https://perspektiveausland.com/ueber-uns",
    languages: { "de-DE": "https://perspektiveausland.com/ueber-uns" },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#FAF7F2" }}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
