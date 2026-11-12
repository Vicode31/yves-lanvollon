import { getPost } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";

export default function RelatedArticles({ slugs }: { slugs: string[] }) {
  return (
    <section aria-labelledby="related-articles-title" className="mx-auto max-w-4xl px-6 pb-12 text-left">
      <h2 id="related-articles-title" className="mb-6 text-xl font-semibold text-gray-900 md:text-2xl">
        Pour poursuivre votre découverte
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {slugs.map((slug) => {
          const relatedPost = getPost(slug);
          return (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vertSapin"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={relatedPost.image}
                  alt={relatedPost.alt}
                  fill
                  sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 896px) calc((100vw - 72px) / 2), 412px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 text-sm text-gray-500">{relatedPost.readTime}</p>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-vertSapin">
                  {relatedPost.title.trim()}
                </h3>
                <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600">{relatedPost.description}</p>
                <span className="mt-auto font-medium text-vertSapin">Lire l’article <span aria-hidden="true">→</span></span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

