import type { Metadata } from "next";
import UeberUnsPage from "@/components/UeberUnsPage";

export const metadata: Metadata = {
  title: "Über Sebastian Sauerborn und Perspektive Ausland",
  description:
    "Sebastian Sauerborn ist seit 2000 selbst Auswanderer und berät seitdem deutschsprachige Unternehmer, Freiberufler und Investoren zu internationaler Wohnsitzverlagerung, Steuerstrukturen und Plan B.",
  alternates: {
    canonical: "https://www.perspektiveausland.com/ueber-uns",
  },
  openGraph: {
    title: "Über Sebastian Sauerborn und Perspektive Ausland",
    description:
      "Auswandern, Plan B und internationale Steuerplanung. Wir beraten zu Wegen, die wir selbst gegangen sind.",
    url: "https://www.perspektiveausland.com/ueber-uns",
    siteName: "Perspektive Ausland",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/hero_world_map_dark-H6jRoZfj3LaqrGaruscYXm.png",
        width: 2560,
        height: 1440,
        alt: "Perspektive Ausland. Wir beraten zu Wegen, die wir selbst gegangen sind.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@SauerbornX",
    title: "Über Sebastian Sauerborn und Perspektive Ausland",
    description:
      "Auswandern, Plan B und internationale Steuerplanung. Wir beraten zu Wegen, die wir selbst gegangen sind.",
  },
};

export default function Page() {
  return <UeberUnsPage />;
}
