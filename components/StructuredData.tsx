/**
 * JSON-LD Structured Data for the Über-uns page.
 * Helps Google understand the page content and Sebastian's identity.
 */
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://perspektiveausland.com/ueber-uns",
        url: "https://perspektiveausland.com/ueber-uns",
        name: "Über uns | Perspektive Ausland",
        description:
          "Perspektive Ausland ist die führende deutschsprachige Plattform für Auswandern, Plan B und internationale Steuerplanung. Gegründet von Sebastian Sauerborn.",
        inLanguage: "de-DE",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://perspektiveausland.com",
          url: "https://perspektiveausland.com",
          name: "Perspektive Ausland",
          description:
            "Die Plattform für deutschsprachige Unternehmer, Freiberufler und Investoren. Auswandern, Plan B und Strukturen außerhalb der EU.",
          inLanguage: "de-DE",
          publisher: {
            "@id": "https://perspektiveausland.com/#organization",
          },
        },
        about: {
          "@id": "https://perspektiveausland.com/#organization",
        },
        author: {
          "@id": "https://www.sebsauerborn.com/#person",
        },
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Startseite",
              item: "https://perspektiveausland.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Über uns",
              item: "https://perspektiveausland.com/ueber-uns",
            },
          ],
        },
      },
      {
        "@type": "Organization",
        "@id": "https://perspektiveausland.com/#organization",
        name: "Perspektive Ausland",
        url: "https://perspektiveausland.com",
        logo: {
          "@type": "ImageObject",
          url: "https://perspektiveausland.com/logo.png",
        },
        sameAs: [
          "https://www.youtube.com/c/PerspektiveAuslandPodcast",
          "https://t.me/PerspektiveAuslandPodcast",
          "https://www.linkedin.com/company/perspektive-ausland",
        ],
        founder: {
          "@id": "https://www.sebsauerborn.com/#person",
        },
        description:
          "Die führende deutschsprachige Plattform für Auswandern, Plan B und internationale Steuerplanung.",
      },
      {
        "@type": "Person",
        "@id": "https://www.sebsauerborn.com/#person",
        name: "Sebastian Sauerborn",
        url: "https://www.sebsauerborn.com",
        jobTitle: "International Tax Advisor & Founder",
        worksFor: {
          "@id": "https://perspektiveausland.com/#organization",
        },
        birthDate: "1977-07-15",
        birthPlace: {
          "@type": "Place",
          name: "Freiburg im Breisgau, Germany",
        },
        nationality: "German",
        knowsLanguage: ["de", "en"],
        sameAs: [
          "https://www.linkedin.com/in/sauerborn/",
          "https://x.com/SauerbornX",
          "https://www.youtube.com/@PerspektiveAusland",
        ],
        description:
          "Sebastian Sauerborn berät vermögende Privatpersonen aus dem DACH-Raum zu internationaler Steuerplanung, Wohnsitzverlagerung und Vermögenssicherung. Er lebt seit 2000 im Ausland und hat in sechs Ländern gelebt.",
      },
      {
        "@type": "PodcastSeries",
        name: "Perspektive Ausland Podcast",
        url: "https://www.perspektiveausland.com/podcast",
        description:
          "Der führende deutschsprachige Podcast zu Auswandern, Plan B und internationaler Steuerplanung.",
        inLanguage: "de-DE",
        author: {
          "@id": "https://www.sebsauerborn.com/#person",
        },
        publisher: {
          "@id": "https://perspektiveausland.com/#organization",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
