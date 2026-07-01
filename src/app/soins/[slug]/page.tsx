import { gotu } from "@/app/font";
import ServiceCta from "@/components/ServiceCta";
import { SITE_URL, getSoinBySlug, soins } from "@/data/soins";
import { getTestimonialsByTheme } from "@/data/testimonials";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoChevronBackOutline } from "react-icons/io5";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return soins.map((soin) => ({ slug: soin.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const soin = getSoinBySlug(slug);
  if (!soin) return {};

  const url = `${SITE_URL}/soins/${soin.slug}`;
  const ogImage = `${SITE_URL}${soin.heroImage}`;

  return {
    title: soin.metaTitle,
    description: soin.metaDescription,
    keywords: soin.keywords,
    authors: [{ name: "Yves DENIAU", url: SITE_URL }],
    alternates: { canonical: url },
    openGraph: {
      title: soin.metaTitle,
      description: soin.metaDescription,
      url,
      siteName: "Hypnose Lanvollon - Yves Deniau",
      images: [
        {
          url: ogImage,
          width: 1024,
          height: 1024,
          alt: soin.heroImageAlt,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: soin.metaTitle,
      description: soin.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function SoinPage({ params }: Params) {
  const { slug } = await params;
  const soin = getSoinBySlug(slug);
  if (!soin) notFound();

  const Icon = soin.icon;
  const testimonials = getTestimonialsByTheme(soin.theme);
  const url = `${SITE_URL}/soins/${soin.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: soin.h1,
        description: soin.metaDescription,
        url,
        serviceType: "Hypnothérapie",
        areaServed: {
          "@type": "City",
          name: "Lanvollon",
        },
        provider: {
          "@type": "Person",
          name: "Yves Deniau",
          jobTitle: "Hypnothérapeute",
          url: SITE_URL,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: soin.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Soins",
            item: `${SITE_URL}/#services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: soin.cardTitle,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Link
        href="/#services"
        className="mx-auto flex max-w-5xl items-center gap-2 px-6 text-vertSapin transition-all duration-300 hover:gap-1 hover:font-medium"
      >
        <IoChevronBackOutline /> Tous les soins
      </Link>

      {/* Hero */}
      <header className="mx-auto max-w-5xl px-6 pt-6 pb-10">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <Icon className="mb-4 h-12 w-12 text-vertSapin" />
            <h1
              className={`mb-6 text-2xl md:text-4xl ${gotu.className} text-gray-900`}
            >
              {soin.h1}
            </h1>
            {soin.intro.map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed text-gray-700">
                {paragraph}
              </p>
            ))}
            <div className="mt-6">
              <ServiceCta trackingLabel={soin.slug} />
            </div>
          </div>
          <Image
            src={soin.heroImage}
            alt={soin.heroImageAlt}
            width={1024}
            height={1024}
            priority
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6">
        {/* Pour qui ? */}
        <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm">
          <h2
            className={`mb-6 text-2xl md:text-3xl ${gotu.className} text-gray-900`}
          >
            {soin.forWhomTitle}
          </h2>
          <ul className="space-y-3">
            {soin.forWhom.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vertSapin" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Comment l'hypnose agit */}
        <section className="mb-12">
          <h2
            className={`mb-8 text-center text-2xl md:text-3xl ${gotu.className} text-gray-900`}
          >
            {soin.howItHelpsTitle}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {soin.howItHelps.map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mon approche */}
        <section className="mb-12 rounded-2xl border-l-4 border-vertSapin bg-green-50/60 p-8">
          <h2
            className={`mb-6 text-2xl md:text-3xl ${gotu.className} text-gray-900`}
          >
            {soin.approachTitle}
          </h2>
          {soin.approach.map((paragraph, i) => (
            <p key={i} className="mb-4 leading-relaxed text-gray-700">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Témoignages */}
        {testimonials.length > 0 && (
          <section className="mb-12">
            <h2
              className={`mb-8 text-center text-2xl md:text-3xl ${gotu.className} text-gray-900`}
            >
              Ils ont été accompagnés
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="flex flex-col rounded-2xl bg-white p-6 shadow-sm"
                >
                  <blockquote className="mb-4 leading-relaxed text-gray-700 italic">
                    « {testimonial.quote} »
                  </blockquote>
                  <figcaption className="mt-auto flex items-center gap-3">
                    <Image
                      src={testimonial.pdp}
                      alt={testimonial.name}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        Avis{" "}
                        {testimonial.source === "google" ? "Google" : "Resalib"}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Honoraires + CTA */}
        <section className="mb-12 rounded-2xl bg-white p-8 text-center shadow-sm">
          <h2
            className={`mb-6 text-2xl md:text-3xl ${gotu.className} text-gray-900`}
          >
            Prendre rendez-vous à Lanvollon
          </h2>
          <ul className="mb-6 space-y-1 text-gray-800">
            <li>Adulte : 70 €</li>
            <li>Enfants et étudiants : 60 €</li>
            <li>Règlements : espèces ou chèque</li>
          </ul>
          <ServiceCta trackingLabel={`${soin.slug} - bas de page`} />
        </section>

        {/* Pour aller plus loin */}
        {soin.related.length > 0 && (
          <section className="mb-16">
            <h2
              className={`mb-6 text-2xl md:text-3xl ${gotu.className} text-gray-900`}
            >
              {soin.relatedTitle}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {soin.related.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="group rounded-2xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
                >
                  <p className="font-medium text-gray-900 group-hover:text-vertSapin">
                    {article.title}
                  </p>
                  <span className="mt-2 inline-block text-sm text-vertSapin">
                    Lire l&apos;article →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="mb-16">
          <h2
            className={`mb-8 text-center text-2xl md:text-3xl ${gotu.className} text-gray-900`}
          >
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {soin.faq.map((item, i) => (
              <details
                key={i}
                className="rounded-2xl bg-white p-5 shadow-sm [&_summary]:cursor-pointer"
              >
                <summary className="font-medium text-gray-900">
                  {item.q}
                </summary>
                <p className="mt-3 leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
