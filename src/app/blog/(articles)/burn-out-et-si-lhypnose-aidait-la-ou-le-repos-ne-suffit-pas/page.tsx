import { articleBlocks } from "./content";
import ArticleSchema from "@/components/ArticleSchema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

const post = {
  title: "Burn-out : et si l'hypnose aidait là où le repos ne suffit pas",
  description:
    "Épuisement professionnel, surfonctionnement et récupération : comprendre le burn-out et la place de l’hypnose en complément du suivi médical à Lanvollon.",
  slug: "burn-out-et-si-lhypnose-aidait-la-ou-le-repos-ne-suffit-pas",
  image: "/blog/burnout-trois-dimensions.webp",
  alt: "Les trois dimensions du burn-out : épuisement émotionnel, dépersonnalisation et perte d’accomplissement personnel.",
  datePublished: "2026-11-03",
  dateModified: "2026-11-03",
};

const title = post.title;

// Titre court pour le <title> SERP (le h1 garde le titre éditorial ci-dessus)
const metaTitle = "Burn-out : quand le repos ne suffit pas, quelle aide ?";

const description = post.description;

const slug = post.slug;
const url = `https://www.hypnotherapeute-lanvollon-plouha.fr/blog/${slug}`;
const ogImage = `https://www.hypnotherapeute-lanvollon-plouha.fr${post.image}`;

const keywords = ["burn-out", "hypnose burn-out", "épuisement professionnel", "stress chronique", "Lanvollon"];

const resalibUrl =
  "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";

export const metadata: Metadata = {
  title: metaTitle,
  description,
  keywords,
  authors: [{ name: "Yves DENIAU", url: "https://www.hypnotherapeute-lanvollon-plouha.fr" }],
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: "Hypnose Lanvollon - Yves Deniau",
    images: [
      {
        url: ogImage,
        width: 1536,
        height: 1024,
        alt: post.alt,
      },
    ],
    locale: "fr_FR",
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    authors: ["Yves DENIAU"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

function InlineMarkdown({ text }: { text: string }) {
  const nodes: React.ReactNode[] = [];
  const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_|\[[^\]]+\]\([^)]+\))/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const token = match[0];

    if (token.startsWith("**")) {
      nodes.push(<strong key={`${match.index}-strong`}>{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("*") || token.startsWith("_")) {
      nodes.push(<em key={`${match.index}-em`}>{token.slice(1, -1)}</em>);
    } else {
      const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (linkMatch) {
        nodes.push(
          <a
            key={`${match.index}-link`}
            href={linkMatch[2]}
            className="font-medium text-vertSapin underline underline-offset-4"
            target={linkMatch[2].startsWith("http") ? "_blank" : undefined}
            rel={linkMatch[2].startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {linkMatch[1]}
          </a>
        );
      }
    }

    cursor = match.index + token.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return <>{nodes}</>;
}

function ArticleImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1536}
      height={1024}
      sizes="(max-width: 896px) calc(100vw - 48px), 848px"
      className="rounded-lg w-full h-auto mb-10 mx-auto"
      priority={priority}
    />
  );
}

function AppointmentButton() {
  return (
    <div className="my-10 text-center">
      <a
        href={resalibUrl}
        className="inline-flex items-center justify-center rounded-lg bg-vertSapin px-6 py-3 text-base font-medium text-white transition-colors hover:bg-vertSapin/80"
      >
        Prendre rendez-vous
      </a>
    </div>
  );
}

function SummaryBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mb-12 rounded-lg border-l-4 border-vertSapin bg-green-50 p-5 text-left">
      <h2 className="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item) => (
          <li key={item}>
            <InlineMarkdown text={item} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function FaqAccordion({ items }: { items: Array<{ question: string; answer: string[] }> }) {
  return (
    <Accordion type="single" collapsible className="flex flex-col gap-4 mb-12">
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`question-${index}`} className="border rounded-lg bg-white shadow-sm">
          <AccordionTrigger className="px-6 py-4 text-left text-base font-medium text-gray-800 hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 text-base leading-relaxed text-gray-700">
            {item.answer.map((answer, answerIndex) => (
              <p key={`${item.question}-${answerIndex}`} className="mb-4 last:mb-0">
                <InlineMarkdown text={answer} />
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function CalloutBlock({ variant, title, paragraphs }: { variant: string; title: string; paragraphs: string[] }) {
  const isFailure = variant === "failure";
  const isSuccess = variant === "success";
  const classes = isFailure
    ? "border-red-200 bg-red-50/70"
    : isSuccess
      ? "border-green-200 bg-green-50/80"
      : "border-gray-200 bg-gray-50/80";

  return (
    <div className={`my-6 rounded-lg border p-4 text-left ${classes}`}>
      {title ? <p className="mb-2 font-semibold text-gray-900"><InlineMarkdown text={title} /></p> : null}
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mb-3 last:mb-0 leading-relaxed text-gray-700">
          <InlineMarkdown text={paragraph} />
        </p>
      ))}
    </div>
  );
}

function ArticleContent() {
  return (
    <>
      {articleBlocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={`h2-${index}`} className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center text-gray-900">
              <InlineMarkdown text={block.text} />
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={`h3-${index}`} className="text-xl font-semibold mb-3 text-gray-900">
              <InlineMarkdown text={block.text} />
            </h3>
          );
        }
        if (block.type === "p") {
          return (
            <p key={`p-${index}`} className="mb-4 leading-relaxed text-gray-700">
              <InlineMarkdown text={block.text} />
            </p>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={`ul-${index}`} className="mb-6 list-disc list-inside space-y-2 text-gray-700">
              {block.items.map((item) => <li key={item}><InlineMarkdown text={item} /></li>)}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={`ol-${index}`} className="mb-6 list-decimal list-inside space-y-2 text-gray-700" start={block.start}>
              {block.items.map((item) => <li key={item}><InlineMarkdown text={item} /></li>)}
            </ol>
          );
        }
        if (block.type === "image") return <ArticleImage key={`image-${index}`} {...block} />;
        if (block.type === "summary") return <SummaryBlock key={`summary-${index}`} title={block.title} items={block.items} />;
        if (block.type === "faq") return <FaqAccordion key={`faq-${index}`} items={block.items} />;
        if (block.type === "callout") return <CalloutBlock key={`callout-${index}`} {...block} />;
        if (block.type === "cta") return <AppointmentButton key={`cta-${index}`} />;
        return <div key={`divider-${index}`} className="border-t border-gray-200 my-10" />;
      })}
    </>
  );
}

const BurnOutHypnosePage: React.FC = () => {
  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url={url}
        image={ogImage}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        keywords={keywords}
      />
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 text-justify">
        <header className="mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">{title}</h1>
          <p className="text-sm text-gray-500 italic">Temps de lecture estimé : 23 min</p>
          <div className="w-24 h-1 bg-green-800 mx-auto rounded-full mt-6" />
        </header>
        <ArticleContent />
      </article>
    </>
  );
};

export default BurnOutHypnosePage;
