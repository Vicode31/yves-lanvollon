export default function SchemaOrg() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness", "HealthAndBeautyBusiness"],
    name: "Cabinet d'Hypnose Yves Deniau à Saint-Brieuc",
    image: [
      "https://www.hypnose-saintbrieuc.fr/yves-deniau.jpg",
      "https://www.hypnose-saintbrieuc.fr/cabinet-horizontal.JPG",
    ],
    description:
      "Cabinet d'hypnothérapie à Saint-Brieuc, spécialisé dans le traitement du stress, de l'anxiété, des phobies et l'arrêt du tabac. Yves Deniau, hypnothérapeute certifié, vous accompagne vers un mieux-être.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 G Bd de la Tour d'Auvergne Bâtiment le Grand",
      addressLocality: "Saint-Brieuc",
      addressRegion: "Bretagne",
      postalCode: "22000",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.51496748409328,
      longitude: -2.775324847050378,
    },
    url: "https://www.hypnose-saintbrieuc.fr",
    telephone: "+33613224382",
    email: "yvesdeniauhypnose@gmail.com",
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Cash", "Cheque"],

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "20:00",
      },
    ],

    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 48.51496748409328,
        longitude: -2.775324847050378,
      },
      geoRadius: "50000",
    },

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services d'Hypnothérapie",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hypnose pour l'arrêt du tabac",
            description:
              "Accompagnement par l'hypnose pour arrêter de fumer naturellement",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hypnose anti-stress",
            description:
              "Gestion du stress et de l'anxiété par l'hypnothérapie",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hypnose pour les phobies",
            description:
              "Traitement des phobies et peurs par l'hypnose thérapeutique",
          },
        },
      ],
    },

    founder: {
      "@type": "Person",
      name: "Yves Deniau",
      jobTitle: "Hypnothérapeute",
      alumniOf: "Formation certifiée en hypnothérapie",
      knowsAbout: [
        "Hypnose",
        "Hypnothérapie",
        "Arrêt du tabac",
        "Gestion du stress",
      ],
    },

    sameAs: [
      "https://www.linkedin.com/in/yvesdeniauhypnotherapeute",
      "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc",
      "https://www.facebook.com/profile.php?id=61575927465588&locale=fr_FR",
      "https://www.instagram.com/yves_deniau_hypnotherapeute?igsh=MWlueHcxbTQ3dWNkdg%3D%3D&utm_source=qr",
    ],

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "16",
      bestRating: "5",
      worstRating: "4",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
}
