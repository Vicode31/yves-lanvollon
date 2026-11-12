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
  "title": "Première séance d’hypnose : à quoi s’attendre, concrètement ?",
  "description": "Échange, sensations, consentement : découvrez comment préparer une première séance d’hypnose avec Yves Deniau à Lanvollon.",
  "slug": "premiere-seance-hypnose-lanvollon",
  "image": "/blog/premiere-seance-premier-echange.webp",
  "alt": "Yves Deniau écoute un visiteur au début d’une consultation, dans une scène illustrée.",
  "datePublished": "2026-11-12",
  "dateModified": "2026-11-12"
};

const title = post.title;

// Titre court pour le <title> SERP (le h1 garde le titre éditorial ci-dessus)
const metaTitle = "Première séance d’hypnose à Lanvollon : le déroulement";

const description = post.description;

const slug = post.slug;
const url = `https://www.hypnotherapeute-lanvollon-plouha.fr/blog/${slug}`;
const ogImage = `https://www.hypnotherapeute-lanvollon-plouha.fr${post.image}`;

const keywords = ["première séance d’hypnose", "déroulement séance hypnose", "hypnose Lanvollon", "Yves Deniau"];

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

function ArticleImage({ src, alt, caption, priority = false }: { src: string; alt: string; caption?: string; priority?: boolean }) {
  return (
    <figure className="mb-10">
    <Image
      src={src}
      alt={alt}
      width={1536}
      height={1024}
      sizes="(max-width: 896px) calc(100vw - 48px), 848px"
      className="rounded-lg w-full h-auto mx-auto"
      priority={priority}
    />
    {caption && <figcaption className="mt-3 text-center text-sm text-gray-500">{caption}</figcaption>}
    </figure>
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
        if (block.type === "p") {
          return (
            <p key={`p-${index}`} className="mb-4 leading-relaxed text-gray-700">
              <InlineMarkdown text={block.text} />
            </p>
          );
        }
        if (block.type === "image") return <ArticleImage key={`image-${index}`} {...block} />;
        if (block.type === "faq") return <FaqAccordion key={`faq-${index}`} items={block.items} />;
        if (block.type === "cta") return <AppointmentButton key={`cta-${index}`} />;
        return null;
      })}
    </>
  );
}

const PremiereSeanceHypnosePage: React.FC = () => {
  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url={url}
        image={ogImage}
        imageWidth={1536}
        imageHeight={1024}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        keywords={keywords}
      />
      <article className="max-w-4xl mx-auto px-6 py-12 text-gray-800 text-justify">
        <header className="mb-12 text-center">
          <p className="mb-4 text-sm text-gray-500">Publié le <time dateTime={post.datePublished}>12 novembre 2026</time></p>
          <h1 className="text-2xl md:text-4xl font-bold mb-6">{title}</h1>
          <p className="text-sm text-gray-500 italic">Temps de lecture estimé : 3 min</p>
          <div className="w-24 h-1 bg-green-800 mx-auto rounded-full mt-6" />
        </header>
        <ArticleContent />
      </article>
    </>
  );
};

export default PremiereSeanceHypnosePage;
