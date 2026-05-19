export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.perspektiveausland.com/ueber-uns#webpage",
        url: "https://www.perspektiveausland.com/ueber-uns",
        name: "Über Sebastian Sauerborn und Perspektive Ausland",
        description:
          "Sebastian Sauerborn ist seit 2000 selbst Auswanderer und berät seitdem deutschsprachige Unternehmer, Freiberufler und Investoren zu internationaler Wohnsitzverlagerung, Steuerstrukturen und Plan B.",
        inLanguage: "de-DE",
        isPartOf: { "@id": "https://www.perspektiveausland.com#website" },
        about: { "@id": "https://www.perspektiveausland.com#organization" },
      },
      {
        "@type": "Organization",
        "@id": "https://www.perspektiveausland.com#organization",
        name: "Perspektive Ausland",
        url: "https://www.perspektiveausland.com",
        description:
          "Deutschsprachige Plattform für internationale Wohnsitzverlagerung, Plan B und Strukturen außerhalb der EU.",
        founder: { "@id": "https://www.sebsauerborn.com#person" },
        sameAs: [
          "https://www.youtube.com/c/PerspektiveAuslandPodcast",
          "https://x.com/SauerbornX",
        ],
      },
      {
        "@type": "Person",
        "@id": "https://www.sebsauerborn.com#person",
        name: "Sebastian Sauerborn",
        url: "https://www.sebsauerborn.com",
        jobTitle: "Gründer, Perspektive Ausland",
        worksFor: { "@id": "https://www.perspektiveausland.com#organization" },
        sameAs: [
          "https://x.com/SauerbornX",
          "https://www.linkedin.com/in/sauerborn/",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Perspektive Ausland",
            item: "https://www.perspektiveausland.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Über uns",
            item: "https://www.perspektiveausland.com/ueber-uns",
          },
        ],
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
