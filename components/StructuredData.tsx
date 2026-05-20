export default function StructuredData() {
  const mainSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.perspektiveausland.com/ueber-uns#webpage",
        url: "https://www.perspektiveausland.com/ueber-uns",
        name: "Über Perspektive Ausland: die Plattform für Auswanderer",
        description:
          "Sebastian Sauerborn lebt seit 2000 selbst im Ausland und berät seitdem deutschsprachige Unternehmer zu Auswanderung, Plan B, Wegzugsbesteuerung und Strukturen außerhalb der EU. Sechs Länder, 40+ Jurisdiktionen.",
        inLanguage: "de-DE",
        isPartOf: { "@id": "https://www.perspektiveausland.com#website" },
        about: { "@id": "https://www.perspektiveausland.com#organization" },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663489425504/SEVjg9oq8Re7WUYduAWprk/hero_world_map_dark-H6jRoZfj3LaqrGaruscYXm.png",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://www.perspektiveausland.com#organization",
        name: "Perspektive Ausland",
        url: "https://www.perspektiveausland.com",
        description:
          "Deutschsprachige Plattform für internationale Wohnsitzverlagerung, Plan B und Strukturen außerhalb der EU.",
        founder: { "@id": "https://www.sebsauerborn.com#person" },
        areaServed: ["DE", "AT", "CH"],
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
        nationality: "DE",
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

  const timelineSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Stationen Sebastian Sauerborn",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: 10,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "2000 Zürich, PwC" },
      { "@type": "ListItem", position: 2, name: "2003 London, Allianz Versicherung" },
      { "@type": "ListItem", position: 3, name: "2006 London, Beratungs-Sozietät mit ex-PwC-Partnern" },
      { "@type": "ListItem", position: 4, name: "2007 London, Vollzeit-Wechsel in die eigene Praxis" },
      { "@type": "ListItem", position: 5, name: "2008 Miami, Aufbau der US-Praxis" },
      { "@type": "ListItem", position: 6, name: "2011 Bastrop County Texas, Vaquera Ranch" },
      { "@type": "ListItem", position: 7, name: "2015 Dublin, Irland-Standort" },
      { "@type": "ListItem", position: 8, name: "2016 Valletta, Malta-Standort" },
      { "@type": "ListItem", position: 9, name: "2017 London, Verlagerung des Lebensmittelpunkts zurück nach UK" },
      { "@type": "ListItem", position: 10, name: "heute UK und Texas, Perspektive Ausland" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mainSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(timelineSchema) }}
      />
    </>
  );
}
