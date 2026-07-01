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
  "Crises d'angoisse : pourquoi l'hypnose agit là où la volonté échoue";

const description =
  "Crises d'angoisse, attaques de panique, hypervigilance : comprendre ce que dit la neuroscience et pourquoi l'hypnose peut aider à apaiser durablement le système nerveux.";

const ogImage =
  "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/comment-cerveau-fabrique-crise-angoisse.png";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "crise d'angoisse",
    "attaque de panique",
    "hypnose anxiété",
    "hypnothérapie crise d'angoisse",
    "Lanvollon",
    "système nerveux",
    "trouble panique",
    "régulation émotionnelle",
  ],
  authors: [{ name: "Yves DENIAU", url: "https://www.hypnotherapeute-lanvollon-plouha.fr" }],
  alternates: {
    canonical:
      "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/crise-angoisse-hypnose-lanvollon",
  },
  openGraph: {
    title,
    description,
    url: "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/crise-angoisse-hypnose-lanvollon",
    siteName: "Hypnose Lanvollon - Yves Deniau",
    images: [
      {
        url: ogImage,
        width: 1024,
        height: 1024,
        alt: "Schéma : comment le cerveau fabrique une crise d'angoisse",
      },
    ],
    locale: "fr_FR",
    type: "article",
    publishedTime: "2026-05-08T00:00:00.000Z",
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

const CriseAngoisseHypnose: React.FC = () => {
  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url="https://www.hypnotherapeute-lanvollon-plouha.fr/blog/crise-angoisse-hypnose-lanvollon"
        image={ogImage}
        datePublished="2026-05-08T00:00:00.000Z"
        keywords={[
          "crise d'angoisse",
          "attaque de panique",
          "hypnose anxiété",
          "hypnothérapie crise d'angoisse",
          "Lanvollon",
          "système nerveux",
          "trouble panique",
          "régulation émotionnelle",
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 text-justify">
        <header className="mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">{title}</h1>
          <p className="text-sm text-gray-500 italic">
            Temps de lecture estimé : 14 min
          </p>
          <div className="w-24 h-1 bg-green-800 mx-auto rounded-full mt-6" />
        </header>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Sophie, 38 ans, « tout pour aller bien » — et pourtant
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Sophie travaille dans une entreprise de logistique à Lanvollon.
            Cadre depuis cinq ans, elle gère son équipe, ses dossiers, sa
            famille.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Elle est de celles qu&apos;on appelle quand ça coince, parce
            qu&apos;elles trouvent toujours une solution.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Depuis plusieurs mois, quelque chose a changé. Ça commence toujours
            pareil. Elle est en réunion, dans les transports, ou simplement en
            train de préparer le dîner.
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>Son cœur accélère brutalement.</li>
            <li>Ses mains deviennent moites.</li>
            <li>Elle a l&apos;impression de manquer d&apos;air.</li>
            <li>Une vague de chaleur remonte jusqu&apos;à sa gorge.</li>
            <li>Elle pense qu&apos;elle va perdre connaissance.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            En quelques secondes, Sophie n&apos;est plus vraiment dans la pièce.
            Elle est ailleurs. Dans cet endroit que toutes les personnes ayant
            vécu une crise d&apos;angoisse reconnaissent immédiatement : cet
            instant où tout semble sur le point de basculer.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La crise dure quelques minutes. Puis elle disparaît. Mais derrière
            elle reste quelque chose de plus insidieux encore :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              La peur que cela recommence.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Et souvent, c&apos;est cette peur-là qui finit par envahir toute la
            vie.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            L&apos;essentiel en 30 secondes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Une crise d&apos;angoisse est une réaction d&apos;alarme du
              système nerveux autonome.
            </li>
            <li>
              Les symptômes sont réels, physiques et extrêmement
              impressionnants, mais non dangereux sur le plan vital.
            </li>
            <li>
              Environ 11 % de la population présenterait des symptômes anxieux
              sévères au cours de sa vie selon l&apos;INSERM.
            </li>
            <li>
              L&apos;hypnose n&apos;agit pas uniquement sur les pensées : elle
              agit aussi sur les automatismes corporels et émotionnels.
            </li>
            <li>
              Plusieurs méta-analyses montrent des effets positifs de
              l&apos;hypnose sur l&apos;anxiété et la régulation émotionnelle.
            </li>
            <li>
              La crise est souvent le signal d&apos;un système nerveux resté
              trop longtemps en état d&apos;hypervigilance.
            </li>
            <li>
              Des outils concrets peuvent être appris dès les premières séances
              : respiration, ancrages, visualisations, régulation émotionnelle.
            </li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Qu&apos;est-ce qu&apos;une crise d&apos;angoisse ?
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Une expérience profondément physique
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Une crise d&apos;angoisse — ou attaque de panique dans sa forme la
            plus intense — est une expérience extrêmement brutale. Le corps
            réagit comme s&apos;il était face à un danger immédiat.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Les symptômes peuvent inclure :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>palpitations,</li>
            <li>oppression thoracique,</li>
            <li>sensation d&apos;étouffement,</li>
            <li>vertiges,</li>
            <li>tremblements,</li>
            <li>sueurs,</li>
            <li>nausées,</li>
            <li>déréalisation,</li>
            <li>peur de mourir,</li>
            <li>peur de perdre le contrôle.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Ces symptômes sont réels. Ils ne sont pas «&nbsp;imaginaires&nbsp;».
            Le système nerveux produit véritablement cette réaction.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Selon Kessler et al. (2006), les troubles paniques concernent
            environ 2 à 3 % de la population générale, avec une prévalence plus
            élevée chez les femmes.
          </p>
          <CitationBlock>
            <p className="mb-1">Kessler, R. C., et al. (2006).</p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/16585471/"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubmed.ncbi.nlm.nih.gov/16585471/
            </a>
          </CitationBlock>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            Le vrai problème : la peur de la prochaine crise
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le trouble panique ne se résume pas à la crise elle-même. Ce qui
            devient progressivement épuisant, c&apos;est l&apos;anticipation
            permanente.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            La personne commence à :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>surveiller ses sensations corporelles,</li>
            <li>éviter certains lieux,</li>
            <li>éviter les transports,</li>
            <li>éviter les situations sociales,</li>
            <li>vivre en état d&apos;alerte.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Et progressivement :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              La vie se rétrécit autour de la peur.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Comment le cerveau fabrique une crise d&apos;angoisse
          </h2>

          <Image
            src="/blog/comment-cerveau-fabrique-crise-angoisse.png"
            alt="Schéma : comment le cerveau fabrique une crise d'angoisse — rôle de l'amygdale et de la boucle anxieuse"
            width={1024}
            height={1024}
            className="rounded-lg w-full mb-10 lg:w-2/3 mx-auto"
          />

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Le rôle de l&apos;amygdale
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;amygdale cérébrale est une structure impliquée dans la
            détection du danger. Lorsqu&apos;elle perçoit une menace — réelle ou
            supposée — elle déclenche une réponse automatique :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>libération d&apos;adrénaline,</li>
            <li>accélération cardiaque,</li>
            <li>hyperventilation,</li>
            <li>contraction musculaire,</li>
            <li>augmentation de la vigilance.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            C&apos;est la réponse «&nbsp;combat-fuite&nbsp;». Un mécanisme
            parfaitement normal… lorsqu&apos;un danger réel existe.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Dans les crises d&apos;angoisse, ce système se déclenche alors
            qu&apos;aucun danger objectif immédiat n&apos;est présent.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            La boucle anxieuse
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Une boucle s&apos;installe souvent :
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
            <li>Une sensation physique anodine apparaît.</li>
            <li>L&apos;attention se fixe dessus.</li>
            <li>
              Une interprétation catastrophique survient :
              <span className="block italic ml-6 mt-1">
                «&nbsp;Je vais faire un malaise.&nbsp;»
              </span>
            </li>
            <li>
              Le cerveau active encore davantage la réponse d&apos;alarme.
            </li>
            <li>Les symptômes augmentent.</li>
            <li>La peur augmente à son tour.</li>
            <li>La crise complète se déclenche.</li>
          </ol>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Barlow (2002) décrit précisément ce cercle vicieux dans les troubles
            anxieux et paniques.
          </p>
          <CitationBlock>
            <p className="mb-1">Barlow, D. H. (2002).</p>
            <a
              href="https://www.guilford.com/books/Anxiety-and-Its-Disorders/David-Barlow/9781593850289"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.guilford.com/books/Anxiety-and-Its-Disorders/David-Barlow/9781593850289
            </a>
          </CitationBlock>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Pourquoi la volonté seule échoue souvent
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            C&apos;est l&apos;un des grands paradoxes de l&apos;anxiété :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Plus on essaie de contrôler la crise, plus le système nerveux se
              crispe.
            </p>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Dire à quelqu&apos;un «&nbsp;Calme-toi&nbsp;» pendant une crise
            d&apos;angoisse est souvent inefficace.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">Pourquoi ?</p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Parce que lorsque le système nerveux autonome est en mode survie, le
            cortex préfrontal — la partie rationnelle du cerveau — perd
            temporairement sa capacité à réguler efficacement les réponses
            émotionnelles.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Autrement dit : la personne sait intellectuellement qu&apos;elle
            n&apos;est pas en danger. Mais son corps, lui, ne le croit pas.
          </p>
          <p className="text-gray-700 leading-relaxed">
            C&apos;est précisément là que l&apos;hypnose devient intéressante.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Ce que j&apos;observe régulièrement en consultation d'hypnothérapie
            à Lanvollon :
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Quand une personne arrive au cabinet pour des crises
            d&apos;angoisse, ce qui me frappe le plus, c&apos;est souvent la
            fatigue.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Pas uniquement la fatigue physique. Mais la fatigue d&apos;être
            constamment en vigilance.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            La fatigue de surveiller :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>sa respiration,</li>
            <li>son cœur,</li>
            <li>ses sensations,</li>
            <li>ses pensées,</li>
            <li>son environnement.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Très souvent, la crise n&apos;est pas le problème principal. Elle
            est le signal.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Le signal d&apos;un système nerveux resté trop longtemps sous
              tension.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Les profils que je rencontre le plus souvent
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            La personne qui « tient tout »
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Elle gère. Elle encaisse. Elle continue. Jusqu&apos;au moment où le
            corps finit par parler autrement.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            La personne qui traverse une rupture de vie
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Séparation. Burn-out. Licenciement. Deuil.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le système nerveux n&apos;a pas eu le temps d&apos;intégrer ce qui
            s&apos;est passé.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            La personne anxieuse depuis longtemps
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Elle possède souvent un terrain hypersensible depuis des années. Les
            crises apparaissent comme une amplification progressive.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Le système nerveux autonome : comprendre ce qui se passe dans le
            corps
          </h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Le système nerveux autonome possède deux grandes branches.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Le système sympathique
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">
            C&apos;est l&apos;accélérateur. Il prépare le corps à agir face au
            danger :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>accélération du cœur,</li>
            <li>tension musculaire,</li>
            <li>vigilance maximale.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            Le système parasympathique
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">
            C&apos;est le frein. Il permet :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>le retour au calme,</li>
            <li>la récupération,</li>
            <li>le ralentissement cardiaque,</li>
            <li>le relâchement musculaire.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Dans les crises d&apos;angoisse, l&apos;équilibre entre ces deux
            systèmes se dérègle.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Le rôle du nerf vague
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les recherches de Stephen Porges (2011) sur la théorie polyvagale
            ont profondément modifié notre compréhension de la régulation
            émotionnelle.
          </p>
          <CitationBlock>
            <p className="mb-1">Porges, S. W. (2011).</p>
            <a
              href="https://wwnorton.com/books/The-Polyvagal-Theory/"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://wwnorton.com/books/The-Polyvagal-Theory/
            </a>
          </CitationBlock>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Le nerf vague joue un rôle majeur dans :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>l&apos;apaisement,</li>
            <li>la sécurité intérieure,</li>
            <li>la régulation cardiaque,</li>
            <li>la respiration,</li>
            <li>la sensation de calme.</li>
          </ul>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Or, certaines pratiques comme :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>l&apos;hypnose,</li>
            <li>la respiration lente,</li>
            <li>la cohérence cardiaque,</li>
            <li>la méditation,</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            stimulent directement ce système de régulation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            C&apos;est l&apos;une des raisons biologiques expliquant pourquoi
            l&apos;hypnose peut avoir un effet très concret sur les états
            anxieux.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Ce que la science dit sur l&apos;hypnose et l&apos;anxiété
          </h2>

          <Image
            src="/blog/ce-que-la-science-dit-hypnose-anxiété.png"
            alt="Ce que la science dit sur l'hypnose et l'anxiété : méta-analyses et imagerie cérébrale"
            width={1024}
            height={1024}
            className="rounded-lg w-full mb-10 lg:w-2/3 mx-auto"
          />

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Les données scientifiques actuelles
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose fait aujourd&apos;hui l&apos;objet d&apos;un nombre
            croissant d&apos;études scientifiques.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Valentine et al. (2019) montrent dans une méta-analyse des effets
            significatifs des interventions hypnotiques sur les symptômes
            anxieux et émotionnels.
          </p>
          <CitationBlock>
            <p className="mb-1">Valentine, K. E., et al. (2019).</p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/31251710/"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubmed.ncbi.nlm.nih.gov/31251710/
            </a>
          </CitationBlock>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Schnur et al. (2008) retrouvent également des effets positifs de
            l&apos;hypnose sur la réduction de la détresse psychologique.
          </p>
          <CitationBlock>
            <p className="mb-1">Schnur, J. B., et al. (2008).</p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/19746190/"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubmed.ncbi.nlm.nih.gov/19746190/
            </a>
          </CitationBlock>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Les recherches de Jiang et al. (2017), associées aux travaux de
            Spiegel, montrent que l&apos;état hypnotique modifie certaines zones
            cérébrales impliquées dans :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>la rumination,</li>
            <li>l&apos;hypervigilance,</li>
            <li>la régulation émotionnelle,</li>
            <li>l&apos;attention.</li>
          </ul>
          <CitationBlock>
            <p className="mb-1">Jiang, H., et al. (2017).</p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/27469596/"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubmed.ncbi.nlm.nih.gov/27469596/
            </a>
          </CitationBlock>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-8">
            Ce que cela signifie concrètement
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose ne «&nbsp;supprime&nbsp;» pas les émotions.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Elle aide le système nerveux à :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700">
            <li>sortir de certains automatismes,</li>
            <li>retrouver des états de sécurité,</li>
            <li>diminuer l&apos;hyperactivation permanente,</li>
            <li>modifier progressivement la relation à la peur.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Les approches complémentaires utiles
          </h2>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Les recommandations actuelles incluent souvent :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>thérapies cognitivo-comportementales, ou TCC,</li>
            <li>hypnothérapie,</li>
            <li>EMDR,</li>
            <li>cohérence cardiaque,</li>
            <li>méditation pleine conscience,</li>
            <li>activité physique adaptée,</li>
            <li>suivi médical si nécessaire.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Goyal et al. (2014) montrent notamment des effets significatifs de
            la méditation pleine conscience sur l&apos;anxiété.
          </p>
          <CitationBlock>
            <p className="mb-1">Goyal, M., et al. (2014).</p>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/24395196/"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pubmed.ncbi.nlm.nih.gov/24395196/
            </a>
          </CitationBlock>
          <p className="text-gray-700 leading-relaxed">
            Les approches ne s&apos;opposent pas forcément. Elles peuvent être
            complémentaires.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Mon approche en cabinet
          </h2>

          <Image
            src="/blog/crise-angoisse-mon-approche.png"
            alt="Crise d'angoisse : mon approche en cabinet à Lanvollon"
            width={1024}
            height={1024}
            className="rounded-lg w-full mb-10 lg:w-2/3 mx-auto"
          />

          <p className="mb-4 text-gray-700 leading-relaxed">
            Chaque personne est différente. Je ne travaille pas avec un
            protocole rigide.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Voici les grands axes de travail utilisés en séance.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            1. Comprendre le fonctionnement des crises
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Mettre du sens diminue déjà une partie de l&apos;anxiété.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            2. Identifier les premiers signaux
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Avant la crise complète, il existe souvent des signes subtils. Les
            reconnaître change beaucoup de choses.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            3. Installer des ressources internes
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose aide à retrouver des sensations de sécurité et
            d&apos;apaisement déjà présentes dans le corps.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            4. Créer des ancrages
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Des outils concrets sont mis en place pour retrouver rapidement un
            état plus stable dans le quotidien.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            5. Travailler sur les schémas profonds
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Certaines peurs ou hypervigilances sont anciennes. Le travail
            hypnotique permet parfois de modifier progressivement ces
            automatismes émotionnels.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            6. Redonner de l&apos;autonomie
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;objectif n&apos;est pas de rendre quelqu&apos;un dépendant
            des séances. Mais de lui transmettre des ressources utilisables dans
            la vie réelle.
          </p>
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
                Est-ce que l&apos;hypnose peut arrêter définitivement les crises
                ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base">
                <p>
                  Pas toujours. Mais elle peut profondément modifier leur
                  fréquence, leur intensité et surtout la relation que la
                  personne entretient avec elles.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-2"
              className="bg-vertSapin text-white rounded-3xl border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 text-lg">
                Combien de séances faut-il ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base">
                <p className="mb-3">Cela dépend :</p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li>de l&apos;ancienneté du trouble,</li>
                  <li>du contexte émotionnel,</li>
                  <li>de l&apos;histoire de vie,</li>
                  <li>du niveau d&apos;hypervigilance.</li>
                </ul>
                <p>
                  Certaines personnes ressentent déjà un changement important
                  après quelques séances.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-3"
              className="bg-vertSapin text-white rounded-3xl border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 text-lg">
                Est-ce qu&apos;on perd le contrôle sous hypnose ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base">
                <p>Non. Vous restez conscient pendant toute la séance.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-4"
              className="bg-vertSapin text-white rounded-3xl border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 text-lg">
                L&apos;hypnose peut-elle remplacer un traitement médical ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base">
                <p>
                  Non. Elle peut être complémentaire d&apos;un suivi médical ou
                  psychologique.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="faq-5"
              className="bg-vertSapin text-white rounded-3xl border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 text-lg">
                Peut-on pratiquer l&apos;hypnose même en étant sceptique ?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-base">
                <p>
                  Oui. Le scepticisme n&apos;empêche pas l&apos;état hypnotique.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Mythes &amp; réalités
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50/80 p-4 border-l-4 border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-2 italic">
                «&nbsp;Les crises d&apos;angoisse sont uniquement
                psychologiques&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>→ Faux.</strong> Les symptômes sont réellement produits
                par le système nerveux.
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 border-l-4 border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-2 italic">
                «&nbsp;L&apos;hypnose fait perdre le contrôle&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>→ Faux.</strong> Vous restez conscient et libre pendant
                toute la séance.
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 border-l-4 border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-2 italic">
                «&nbsp;Les personnes anxieuses sont faibles&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>→ Faux.</strong> Les personnes anxieuses ont souvent un
                système nerveux extrêmement vigilant et sensible.
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 border-l-4 border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-2 italic">
                «&nbsp;Il suffit de respirer pour arrêter une crise&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>→ Faux.</strong> La respiration aide, mais la régulation
                anxieuse est beaucoup plus complexe.
              </p>
            </div>

            <div className="bg-gray-50/80 p-4 border-l-4 border-gray-300">
              <p className="text-gray-700 leading-relaxed mb-2 italic">
                «&nbsp;L&apos;hypnose est magique&nbsp;»
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>→ Faux.</strong> C&apos;est un outil thérapeutique
                sérieux qui s&apos;intègre dans une approche globale.
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
            Les crises d&apos;angoisse ne sont pas un signe de faiblesse. Elles
            ne signifient pas que vous perdez le contrôle de votre esprit.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Elles traduisent souvent un système nerveux resté trop longtemps en
            état d&apos;alerte.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose ne cherche pas à «&nbsp;forcer&nbsp;» le calme. Elle
            cherche plutôt à apprendre progressivement au corps qu&apos;il peut
            retrouver un état de sécurité autrement.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Et parfois, ce changement commence simplement par une chose :
          </p>
          <div className="bg-green-50 p-6 border-l-4 border-vertSapin">
            <p className="text-lg font-semibold text-green-800 mb-2">
              Ne plus lutter seul contre ce qui vous arrive.
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
                href="/blog/hypnose-stress-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Hypnose et stress : une réponse naturelle validée par la science
              </a>{" "}
              — Crises d&apos;angoisse et stress chronique partagent les mêmes racines physiologiques.
            </li>
            <li>
              →{" "}
              <a
                href="/blog/hypnose-volonte-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Hypnose et volonté : ce que dit la science
              </a>{" "}
              — Comprendre pourquoi l&apos;angoisse ne répond pas à la volonté, et ce que l&apos;hypnose change.
            </li>
            <li>
              →{" "}
              <a
                href="/blog/insomnie-hypnose-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Insomnie : et si l&apos;hypnose réapprenait le sommeil à votre cerveau ?
              </a>{" "}
              — L&apos;anxiété nocturne et les crises d&apos;angoisse perturbent souvent le sommeil en profondeur.
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
              Alladin, A., &amp; Alibhai, A. (2007).{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/17365048/"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/17365048/
              </a>
            </li>
            <li>
              Barlow, D. H. (2002).{" "}
              <a
                href="https://www.guilford.com/books/Anxiety-and-Its-Disorders/David-Barlow/9781593850289"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.guilford.com/books/Anxiety-and-Its-Disorders/David-Barlow/9781593850289
              </a>
            </li>
            <li>
              Goyal, M., et al. (2014).{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/24395196/"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/24395196/
              </a>
            </li>
            <li>
              Jiang, H., et al. (2017).{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/27469596/"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/27469596/
              </a>
            </li>
            <li>
              Kessler, R. C., et al. (2006).{" "}
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/16585471/"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://pubmed.ncbi.nlm.nih.gov/16585471/
              </a>
            </li>
            <li>
              Porges, S. W. (2011).{" "}
              <a
                href="https://wwnorton.com/books/The-Polyvagal-Theory/"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://wwnorton.com/books/The-Polyvagal-Theory/
              </a>
            </li>
            <li>
              Schnur, J. B., et al. (2008).{" "}
              <a
                href="https://doi.org/10.1002/ch.364"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1002/ch.364
              </a>
            </li>
            <li>
              Valentine, K. E., Milling, L. S., Clark, L. J., &amp; Moriarty, C.
              L. (2019).{" "}
              <a
                href="https://doi.org/10.1080/00207144.2019.1613863"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1080/00207144.2019.1613863
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default CriseAngoisseHypnose;
