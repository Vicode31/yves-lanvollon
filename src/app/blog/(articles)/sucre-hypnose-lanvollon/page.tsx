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

const title =
  "Sucre et hypnose : et si votre cerveau pouvait enfin s'en libérer ?";

const description =
  "Envies de sucre, compulsions, grignotage émotionnel : comprendre ce que dit la neuroscience et pourquoi l'hypnose peut aider à modifier durablement la relation au sucre.";

const ogImage =
  "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/sucre-hypnose.png";

const keywords = [
  "hypnose sucre",
  "addiction au sucre",
  "envie de sucre",
  "comportement alimentaire",
  "compulsion sucrée",
  "hypnothérapie Lanvollon",
  "alimentation émotionnelle",
  "dopamine sucre",
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  authors: [{ name: "Yves DENIAU", url: "https://www.hypnotherapeute-lanvollon-plouha.fr" }],
  alternates: {
    canonical:
      "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/sucre-hypnose-lanvollon",
  },
  openGraph: {
    title,
    description,
    url: "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/sucre-hypnose-lanvollon",
    siteName: "Hypnose Lanvollon - Yves Deniau",
    images: [
      {
        url: ogImage,
        width: 1024,
        height: 1024,
        alt: "Hypnose et sucre : libérer le cerveau des envies compulsives",
      },
    ],
    locale: "fr_FR",
    type: "article",
    publishedTime: "2026-05-07T00:00:00.000Z",
    authors: ["Yves DENIAU"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

function CitationBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-6 border-l-4 border-gray-300 bg-gray-50/80 py-3 pl-4 pr-4 text-sm text-gray-700 not-italic">
      {children}
    </blockquote>
  );
}

const SucreHypnose: React.FC = () => {
  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url="https://www.hypnotherapeute-lanvollon-plouha.fr/blog/sucre-hypnose-lanvollon"
        image={ogImage}
        datePublished="2026-05-07T00:00:00.000Z"
        keywords={keywords}
      />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 text-justify">
        <header className="mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">{title}</h1>
          <p className="text-sm text-gray-500 italic">
            Temps de lecture estimé : 23 min
          </p>
          <div className="w-24 h-1 bg-green-800 mx-auto rounded-full mt-6" />
        </header>

        <Image
          src="/blog/sucre-hypnose.png"
          alt="Hypnose et sucre : se libérer des envies compulsives"
          width={1024}
          height={1024}
          className="rounded-lg w-full mb-10 lg:w-2/3 mx-auto"
        />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Le carré de chocolat qui en appelle dix autres
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Camille a 41 ans.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Professeure des écoles à Lanvollon, deux enfants, une vie bien
            remplie.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Elle mange globalement sainement — du moins, c&apos;est ce
            qu&apos;elle se dit le matin.
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>Légumes.</li>
            <li>Protéines.</li>
            <li>Peu de gras.</li>
            <li>Pas de sodas.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Sur le papier : une alimentation raisonnable.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Sauf que vers seize heures, quelque chose change.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium italic">
              «&nbsp;Un carré. Juste un.&nbsp;»
            </p>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Vingt minutes plus tard, la moitié du paquet a disparu.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Pas parce qu&apos;elle avait faim.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Pas parce que le chocolat était extraordinairement bon.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mais comme si une partie d&apos;elle avait décidé toute seule.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            L&apos;essentiel en 30 secondes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              L&apos;attirance excessive pour le sucre n&apos;est pas un défaut
              de caractère.
            </li>
            <li>
              Le sucre active le circuit de la récompense dopaminergique.
            </li>
            <li>
              Beaucoup d&apos;envies de sucre sont émotionnelles avant
              d&apos;être nutritionnelles.
            </li>
            <li>
              La volonté seule échoue souvent car elle lutte contre un
              automatisme neurologique.
            </li>
            <li>
              L&apos;hypnose peut aider à modifier la relation émotionnelle au
              sucre.
            </li>
            <li>
              L&apos;objectif n&apos;est pas de supprimer le sucre, mais de
              retrouver du choix.
            </li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Pourquoi le sucre est si difficile à arrêter
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Ce que nous consommons réellement
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les chiffres donnent le vertige.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;OMS recommande depuis 2015 de limiter les sucres libres à
            moins de 10&nbsp;% de l&apos;apport énergétique total — idéalement
            moins de 5&nbsp;%.
          </p>
          <CitationBlock>
            <p className="mb-1">Recommandations OMS (2015).</p>
            <a
              href="https://www.who.int/publications/i/item/9789241549028"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.who.int/publications/i/item/9789241549028
            </a>
          </CitationBlock>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Pourtant, une grande partie de la population dépasse largement ces
            seuils.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            Pourquoi «&nbsp;savoir&nbsp;» ne suffit pas
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            C&apos;est le paradoxe central du sucre :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              L&apos;information seule ne modifie pas durablement le
              comportement.
            </p>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les envies de sucre ne naissent pas dans la partie rationnelle du
            cerveau.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Elles émergent dans :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>le système limbique,</li>
            <li>l&apos;amygdale,</li>
            <li>le circuit de la récompense,</li>
            <li>les automatismes émotionnels.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Et ces zones ne répondent pas à la logique.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Les mécanismes neurobiologiques du sucre
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Le sucre et la dopamine
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le sucre stimule fortement la dopamine dans le noyau accumbens.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Le cerveau enregistre alors :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium italic">
              «&nbsp;C&apos;était agréable. Recommence.&nbsp;»
            </p>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les travaux d&apos;Avena et al. (2008) montrent que des comportements
            proches des addictions peuvent apparaître avec le sucre.
          </p>
          <CitationBlock>
            <p className="mb-1">Avena, N. M., et al. (2008).</p>
            <a
              href="https://doi.org/10.1016/j.neubiorev.2007.04.019"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1016/j.neubiorev.2007.04.019
            </a>
          </CitationBlock>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            Le phénomène de tolérance
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">Avec le temps :</p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>le plaisir diminue,</li>
            <li>les quantités augmentent,</li>
            <li>les envies deviennent plus fréquentes.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Johnson &amp; Kenny (2010) ont montré une réduction des récepteurs
            dopaminergiques D2 après une consommation répétée d&apos;aliments
            très appétissants.
          </p>
          <CitationBlock>
            <p className="mb-1">Johnson, P. M., &amp; Kenny, P. J. (2010).</p>
            <a
              href="https://doi.org/10.1038/nn.2519"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1038/nn.2519
            </a>
          </CitationBlock>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le cerveau devient moins sensible.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Il faut davantage de sucre pour ressentir le même effet.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Le sucre émotionnel
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Quand on ne mange plus par faim
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La plupart des personnes ne mangent pas du sucre parce qu&apos;elles
            ont faim.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Elles mangent pour :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>se calmer,</li>
            <li>se récompenser,</li>
            <li>anesthésier un stress,</li>
            <li>remplir un vide,</li>
            <li>apaiser une solitude,</li>
            <li>compenser une fatigue émotionnelle.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Macht (2008) décrit précisément cette fonction émotionnelle de
            l&apos;alimentation.
          </p>
          <CitationBlock>
            <p className="mb-1">Macht, M. (2008).</p>
            <a
              href="https://doi.org/10.1016/j.appet.2007.07.002"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1016/j.appet.2007.07.002
            </a>
          </CitationBlock>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            Pourquoi le sucre «&nbsp;fonctionne&nbsp;»
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Le sucre agit temporairement sur :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>la dopamine,</li>
            <li>les opioïdes endogènes,</li>
            <li>la sérotonine.</li>
          </ul>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Pendant quelques minutes :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>l&apos;anxiété diminue,</li>
            <li>la tension baisse,</li>
            <li>le cerveau se calme.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Mais le soulagement est bref.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Et le cerveau apprend :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium italic">
              «&nbsp;Quand ça va mal → mange sucré.&nbsp;»
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Le circuit se renforce.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Ce que j&apos;observe en consultation — Yves DENIAU
          </h2>

          <Image
            src="/blog/consultation-sucre-hypnose.png"
            alt="Consultation hypnose et sucre à Lanvollon : comprendre la relation émotionnelle au sucre"
            width={1024}
            height={1024}
            className="rounded-lg w-full mb-10 lg:w-2/3 mx-auto"
          />

          <p className="mb-4 text-gray-700 leading-relaxed">
            Je recommande systématiquement un suivi nutritionnel ou médical
            lorsque le contexte le nécessite.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose ne remplace pas un accompagnement médical.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">Elle agit sur :</p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>la relation émotionnelle au sucre,</li>
            <li>les automatismes,</li>
            <li>les déclencheurs émotionnels,</li>
            <li>les comportements compulsifs.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            Une question essentielle
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Quand une personne me parle de sucre, je pose souvent cette question
            :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium italic">
              «&nbsp;Dans quelles situations l&apos;envie apparaît-elle
              ?&nbsp;»
            </p>
          </div>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Et très souvent, les réponses sont :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>quand je suis stressé,</li>
            <li>quand je suis seul,</li>
            <li>quand je rentre épuisé,</li>
            <li>après une dispute,</li>
            <li>quand je me sens vide.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            À ce moment-là, on comprend quelque chose d&apos;essentiel :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Ce n&apos;est pas une question de goût.
              <br />
              C&apos;est une question d&apos;état émotionnel.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Pourquoi la volonté seule échoue
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            La volonté est limitée
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;autocontrôle est une ressource cognitive épuisable.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Plus une journée demande :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>de patience,</li>
            <li>de contrôle,</li>
            <li>d&apos;efforts émotionnels,</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            moins il reste de ressources le soir.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Ce n&apos;est pas un hasard si les envies arrivent souvent :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>à 16h,</li>
            <li>le soir,</li>
            <li>après une journée difficile.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            La restriction augmente l&apos;obsession
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les travaux de Daniel Wegner sur la suppression de pensées montrent
            un phénomène simple :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Plus on tente de ne pas penser à quelque chose, plus cette chose
              occupe l&apos;esprit.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            C&apos;est exactement ce qui se passe avec les régimes très
            restrictifs.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Le microbiome intestinal : l&apos;acteur oublié
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les recherches de Cryan &amp; Dinan (2012) montrent que le microbiote
            influence :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>l&apos;humeur,</li>
            <li>les comportements,</li>
            <li>certaines envies alimentaires.</li>
          </ul>
          <CitationBlock>
            <p className="mb-1">Cryan, J. F., &amp; Dinan, T. G. (2012).</p>
            <a
              href="https://doi.org/10.1038/nrn3346"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1038/nrn3346
            </a>
          </CitationBlock>
          <p className="mb-2 text-gray-700 leading-relaxed">
            L&apos;axe intestin-cerveau joue un rôle majeur dans :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700">
            <li>le stress,</li>
            <li>l&apos;anxiété,</li>
            <li>les comportements compulsifs.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Comment l&apos;hypnose agit sur le sucre
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Travailler sur la racine
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose ne cherche pas à supprimer brutalement les envies.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Elle travaille sur :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>les automatismes,</li>
            <li>les émotions,</li>
            <li>les besoins cachés,</li>
            <li>les représentations mentales.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            Dialoguer avec la partie protectrice
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Une idée importante :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Le comportement n&apos;est pas là pour vous détruire.
            </p>
          </div>
          <p className="mb-2 text-gray-700 leading-relaxed">
            À un moment donné, il a servi à quelque chose :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>calmer,</li>
            <li>rassurer,</li>
            <li>protéger,</li>
            <li>réconforter.</li>
          </ul>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Le travail consiste alors à :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700">
            <li>comprendre cette fonction,</li>
            <li>reconnaître son intention,</li>
            <li>installer d&apos;autres stratégies.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Ce que dit la science sur l&apos;hypnose et l&apos;alimentation
          </h2>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Les méta-analyses de :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>Allison &amp; Faith (1996),</li>
            <li>Kirsch (1996),</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            montrent un bénéfice significatif lorsque l&apos;hypnose est
            associée à des approches comportementales.
          </p>
          <CitationBlock>
            <p className="mb-1">Allison, D. B., &amp; Faith, M. S. (1996).</p>
            <a
              href="https://doi.org/10.1037/0022-006X.64.3.513"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1037/0022-006X.64.3.513
            </a>
          </CitationBlock>
          <CitationBlock>
            <p className="mb-1">Kirsch, I. (1996).</p>
            <a
              href="https://doi.org/10.1037/0022-006X.64.3.517"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1037/0022-006X.64.3.517
            </a>
          </CitationBlock>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Les effets semblent particulièrement intéressants sur :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700">
            <li>le maintien dans le temps,</li>
            <li>les compulsions,</li>
            <li>les comportements automatiques.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            L&apos;approche du cabinet à Lanvollon
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;accompagnement proposé repose sur plusieurs axes :
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li>Comprendre les déclencheurs émotionnels</li>
            <li>Identifier l&apos;intention positive du comportement</li>
            <li>Modifier les automatismes inconscients</li>
            <li>Développer d&apos;autres ressources émotionnelles</li>
            <li>Installer des outils d&apos;autorégulation</li>
            <li>
              Travailler sur les représentations mentales associées au sucre
            </li>
          </ol>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            FAQ
          </h2>

          <Accordion type="single" collapsible className="flex flex-col gap-4">
            <AccordionItem
              value="faq-1"
              className="bg-vertSapin text-white rounded-3xl border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 text-lg">
                L&apos;hypnose peut-elle supprimer totalement les envies ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base">
                <p>
                  Non. L&apos;objectif est de retrouver du choix et de réduire
                  la compulsion.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="bg-vertSapin text-white rounded-3xl border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 text-lg">
                Est-ce que l&apos;hypnose remplace un nutritionniste ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base">
                <p>Non. Les deux approches sont complémentaires.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="bg-vertSapin text-white rounded-3xl border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 text-lg">
                Combien de séances faut-il ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base">
                <p className="mb-3">Cela dépend :</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>de l&apos;ancienneté du comportement,</li>
                  <li>des facteurs émotionnels,</li>
                  <li>du contexte de vie.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Mythes &amp; réalités
          </h2>

          <Image
            src="/blog/sucre-mythe-realite.png"
            alt="Sucre et hypnose : mythes et réalités"
            width={1024}
            height={1024}
            className="rounded-lg w-full mb-10 lg:w-2/3 mx-auto"
          />

          <div className="space-y-6">
            <div className="bg-gray-50/80 p-4 border-l-4 border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-2 italic">
                «&nbsp;Le sucre est juste une question de volonté&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>→ Faux.</strong> Les mécanismes sont neurobiologiques et
                émotionnels.
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 border-l-4 border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-2 italic">
                «&nbsp;Le sucre naturel ne pose aucun problème&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>→ Faux.</strong> Un excès de sucres libres reste
                problématique, même lorsqu&apos;ils sont naturels.
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 border-l-4 border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-2 italic">
                «&nbsp;L&apos;hypnose va me faire détester le sucre&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>→ Faux.</strong> L&apos;objectif est de modifier la
                relation au comportement, pas de créer un dégoût.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 max-md:text-center text-left">
            Le mot de la fin
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le problème n&apos;est pas forcément le sucre.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le problème, c&apos;est parfois tout ce qu&apos;il essaye de calmer.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose ne cherche pas à lutter contre vous.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Elle cherche à comprendre pourquoi une partie de vous a eu besoin de
            ce comportement.
          </p>
          <div className="bg-green-50 p-6 border-l-4 border-vertSapin">
            <p className="text-lg font-semibold text-green-800 mb-2">
              Et parfois, comprendre change déjà énormément de choses.
            </p>
            <p className="text-gray-700">
              Prenez rendez-vous directement en cliquant sur le bouton
              ci-dessous.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section>
          <h2 className="text-xl font-semibold mb-4">Lire aussi</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              →{" "}
              <a
                href="/blog/hypnose-tabac-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Combien de séances d&apos;hypnose pour arrêter de fumer ?
              </a>{" "}
              — La dépendance au tabac suit les mêmes circuits de récompense que le sucre — ce qui fonctionne pour l&apos;un vaut pour l&apos;autre.
            </li>
            <li>
              →{" "}
              <a
                href="/blog/sevrage-tabac-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Hypnose et sevrage tabagique : entre science et expérience
              </a>{" "}
              — Le mécanisme d&apos;addiction expliqué en détail, et comment l&apos;hypnose le court-circuite.
            </li>
            <li>
              →{" "}
              <a
                href="/blog/hypnose-stress-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Hypnose et stress : une réponse naturelle validée par la science
              </a>{" "}
              — Le stress est souvent le déclencheur des comportements compulsifs alimentaires. L&apos;hypnose traite la racine.
            </li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Références scientifiques (format APA)
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm leading-relaxed">
            <li>
              Allison, D. B., &amp; Faith, M. S. (1996).{" "}
              <a
                href="https://doi.org/10.1037/0022-006X.64.3.513"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1037/0022-006X.64.3.513
              </a>
            </li>
            <li>
              ANSES — PNNS (2016).{" "}
              <a
                href="https://www.anses.fr/fr/content/avis-de-l%E2%80%99anses-relatif-%C3%A0-l%E2%80%99actualisation-des-rep%C3%A8res-alimentaires-du-pnns"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.anses.fr/fr/content/avis-de-l-anses-relatif-a-l-actualisation-des-reperes-alimentaires-du-pnns
              </a>
            </li>
            <li>
              Avena, N. M., et al. (2008).{" "}
              <a
                href="https://doi.org/10.1016/j.neubiorev.2007.04.019"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1016/j.neubiorev.2007.04.019
              </a>
            </li>
            <li>
              Cryan, J. F., &amp; Dinan, T. G. (2012).{" "}
              <a
                href="https://doi.org/10.1038/nrn3346"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1038/nrn3346
              </a>
            </li>
            <li>
              Johnson, P. M., &amp; Kenny, P. J. (2010).{" "}
              <a
                href="https://doi.org/10.1038/nn.2519"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1038/nn.2519
              </a>
            </li>
            <li>
              Kirsch, I. (1996).{" "}
              <a
                href="https://doi.org/10.1037/0022-006X.64.3.517"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1037/0022-006X.64.3.517
              </a>
            </li>
            <li>
              Macht, M. (2008).{" "}
              <a
                href="https://doi.org/10.1016/j.appet.2007.07.002"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1016/j.appet.2007.07.002
              </a>
            </li>
            <li>
              OMS — Guideline Sugars Intake (2015).{" "}
              <a
                href="https://www.who.int/publications/i/item/9789241549028"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.who.int/publications/i/item/9789241549028
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default SucreHypnose;
