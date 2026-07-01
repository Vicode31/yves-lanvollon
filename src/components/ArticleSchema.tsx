interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  keywords?: string[];
}

export default function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  keywords = []
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    image: {
      "@type": "ImageObject",
      url: image,
      width: 1200,
      height: 630
    },
    url: url,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: "Yves Deniau",
      url: "https://www.hypnotherapeute-lanvollon-plouha.fr",
      jobTitle: "Hypnothérapeute",
      worksFor: {
        "@type": "LocalBusiness",
        name: "Cabinet d'Hypnose Yves Deniau à Lanvollon",
        url: "https://www.hypnotherapeute-lanvollon-plouha.fr"
      }
    },
    publisher: {
      "@type": "Organization",
      name: "Hypnose Lanvollon - Yves Deniau",
      url: "https://www.hypnotherapeute-lanvollon-plouha.fr",
      logo: {
        "@type": "ImageObject",
        url: "https://www.hypnotherapeute-lanvollon-plouha.fr/logo-hypnose.avif",
        width: 60,
        height: 60
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    keywords: keywords.join(", "),
    articleSection: "Hypnothérapie",
    about: [
      {
        "@type": "Thing",
        name: "Hypnose",
        sameAs: "https://fr.wikipedia.org/wiki/Hypnose"
      },
      {
        "@type": "Thing", 
        name: "Hypnothérapie",
        sameAs: "https://fr.wikipedia.org/wiki/Hypnoth%C3%A9rapie"
      }
    ],
    mentions: [
      {
        "@type": "Place",
        name: "Lanvollon",
        sameAs: "https://fr.wikipedia.org/wiki/Lanvollon"
      }
    ],
    inLanguage: "fr-FR",
    isAccessibleForFree: true
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.hypnotherapeute-lanvollon-plouha.fr"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.hypnotherapeute-lanvollon-plouha.fr/blog"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: url
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}