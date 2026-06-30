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
  "Insomnie : et si l'hypnose réapprenait le sommeil à votre cerveau ?";

const description =
  "Insomnie chronique, hyperéveil, ruminations nocturnes : comprendre ce que dit la neuroscience et pourquoi l'hypnose peut aider le cerveau à retrouver le sommeil durablement à Saint-Brieuc.";

const ogImage =
  "https://www.hypnose-saintbrieuc.fr/blog/hypnose-reaprenait-sommeil.png";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "insomnie",
    "hypnose insomnie",
    "hypnothérapie sommeil",
    "Saint-Brieuc",
    "trouble du sommeil",
    "hyperéveil",
    "ruminations nocturnes",
    "insomnie chronique",
  ],
  authors: [{ name: "Yves DENIAU", url: "https://www.hypnose-saintbrieuc.fr" }],
  alternates: {
    canonical:
      "https://www.hypnose-saintbrieuc.fr/blog/insomnie-hypnose-saint-brieuc",
  },
  openGraph: {
    title,
    description,
    url: "https://www.hypnose-saintbrieuc.fr/blog/insomnie-hypnose-saint-brieuc",
    siteName: "Hypnose Saint-Brieuc - Yves Deniau",
    images: [
      {
        url: ogImage,
        width: 1024,
        height: 1024,
        alt: "Insomnie et hypnose : réapprendre le sommeil à son cerveau",
      },
    ],
    locale: "fr_FR",
    type: "article",
    publishedTime: "2026-06-07T00:00:00.000Z",
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

const InsomniesHypnosePage: React.FC = () => {
  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url="https://www.hypnose-saintbrieuc.fr/blog/insomnie-hypnose-saint-brieuc"
        image={ogImage}
        datePublished="2026-06-07T00:00:00.000Z"
        keywords={[
          "insomnie",
          "hypnose insomnie",
          "hypnothérapie sommeil",
          "Saint-Brieuc",
          "trouble du sommeil",
          "hyperéveil",
          "ruminations nocturnes",
          "insomnie chronique",
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 text-justify">
        <header className="mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">{title}</h1>
          <p className="text-sm text-gray-500 italic">
            Temps de lecture estimé : 12 min
          </p>
          <div className="w-24 h-1 bg-green-800 mx-auto rounded-full mt-6" />
        </header>

        {/* Franck's story */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Trois heures du matin, les yeux ouverts dans le noir
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">Franck a 50 ans.</p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Directeur commercial dans une entreprise de distribution de
            matériaux de construction en Bretagne, père de deux grands
            adolescents, quelqu&apos;un que l&apos;on décrirait sans hésiter
            comme « solide ».
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Il gère des équipes, des budgets, des imprévus. Il prend des
            décisions rapidement. Il n&apos;est pas du genre à s&apos;effondrer.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Sauf qu&apos;il y a deux ans, quelque chose a commencé à se dérégler
            dans ses nuits.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            D&apos;abord, les réveils à trois heures du matin. Un fournisseur
            qui tarde. Une restructuration d&apos;équipe. Des objectifs de
            trimestre tendus. Il se réveillait, et les pensées démarraient
            immédiatement.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Pas des angoisses dramatiques. Juste le cerveau qui tourne, qui
            calcule, qui anticipe. Qui refuse de s&apos;arrêter.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Il se retournait. Changeait de position. Regardait le plafond.
            Regardait son téléphone pour savoir l&apos;heure — erreur qu&apos;il
            répétait pourtant chaque nuit, sachant très bien que ça allait
            aggraver les choses.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Il essayait de « ne pas penser ». Il essayait de « penser à autre
            chose ». Il comptait mentalement les heures de sommeil qu&apos;il
            lui restait.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium italic">
              Six heures moins le temps qu&apos;il avait déjà perdu, moins le
              temps qu&apos;il allait encore passer éveillé.
            </p>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les calculs se faisaient tout seuls. Certaines nuits, il se
            rendormait après une heure. D&apos;autres, il était encore éveillé à
            cinq heures, et le réveil sonnait à six heures et demie.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Après six mois, le profil avait changé. Il avait maintenant du mal à
            s&apos;endormir. Il appréhendait le coucher. Il se couchait fatigué
            — vraiment fatigué — mais aussitôt la tête posée sur
            l&apos;oreiller, quelque chose se mettait en alerte. Comme si son
            corps avait appris à associer le lit à l&apos;éveil plutôt
            qu&apos;au sommeil.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Il en avait parlé à son médecin. Bilan sanguin : normal. Un
            somnifère lui avait été prescrit « pour passer le cap ». Il
            fonctionnait — au sens où il dormait. Mais le lendemain matin, il se
            réveillait avec une tête cotonneuse qui durait jusqu&apos;en milieu
            d&apos;après-midi. Et surtout : les nuits sans somnifère étaient
            toujours aussi mauvaises. Rien n&apos;avait changé dans la façon
            dont son cerveau fonctionnait.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Au bout d&apos;un an de ce régime, il a commencé à se poser une
            vraie question :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium italic">
              Est-ce que ce problème peut se résoudre, ou est-ce que je vais
              vivre comme ça jusqu&apos;à la retraite ?
            </p>
          </div>
        </section>

        <Image
          src="/blog/hypnose-reaprenait-sommeil.png"
          alt="Insomnie et hypnose : réapprendre le sommeil à son cerveau"
          width={1024}
          height={1024}
          className="rounded-lg w-full mb-10 lg:w-2/3 mx-auto"
        />

        <div className="border-t border-gray-200 my-10" />

        {/* L'essentiel en 30 secondes */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            L&apos;essentiel en 30 secondes
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              L&apos;insomnie chronique touche 15 à 20 % des adultes en France :
              c&apos;est l&apos;un des troubles du sommeil les plus répandus et
              les plus sous-traités.
            </li>
            <li>
              Elle ne résulte pas d&apos;un seul facteur, mais d&apos;une
              interaction entre prédispositions, déclencheurs et mécanismes de
              perpétuation.
            </li>
            <li>
              Le principal mécanisme impliqué est souvent l&apos;hyperéveil : un
              cerveau bloqué en mode alerte même au moment du coucher.
            </li>
            <li>
              Les somnifères traitent le symptôme sans modifier les mécanismes
              qui entretiennent l&apos;insomnie.
            </li>
            <li>
              L&apos;hypnose intervient sur ce que les médicaments ne touchent
              pas toujours : l&apos;hyperéveil, l&apos;association négative au
              lit, les pensées nocturnes et les automatismes du sommeil.
            </li>
            <li>
              Une étude randomisée publiée dans <em>SLEEP</em> en 2014 a montré
              que l&apos;hypnose augmentait le sommeil lent profond des femmes
              jeunes en bonne santé.
            </li>
            <li>
              À Saint-Brieuc, j&apos;accompagne régulièrement des personnes
              souffrant d&apos;insomnie, en travaillant sur l&apos;hyperéveil,
              les pensées nocturnes et les automatismes qui maintiennent le
              cercle vicieux.
            </li>
            <li>
              L&apos;objectif n&apos;est pas de « forcer » le sommeil —
              c&apos;est précisément ce qui le fait fuir.
            </li>
            <li>
              L&apos;objectif est de créer les conditions dans lesquelles le
              sommeil peut revenir naturellement.
            </li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* L'insomnie : de quoi parle-t-on */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            L&apos;insomnie : de quoi parle-t-on vraiment ?
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Une définition précise pour un mot souvent galvaudé
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le mot « insomnie » est souvent utilisé de façon vague pour désigner
            toute nuit difficile. Mais cliniquement, l&apos;insomnie est définie
            de façon précise.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le psychiatre Daniel Buysse (2013) définit l&apos;insomnie comme{" "}
            <em>
              une plainte de difficultés d&apos;initiation ou de maintien du
              sommeil, ou un réveil matinal prématuré, malgré des circonstances
              adéquates pour dormir, entraînant une souffrance ou une altération
              du fonctionnement diurne.
            </em>
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Trois éléments sont essentiels dans cette définition.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            1. La plainte subjective
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;insomnie, c&apos;est d&apos;abord ce que la personne vit, pas
            uniquement ce que les capteurs mesurent. Certaines personnes dorment
            objectivement peu mais se sentent reposées : on parle parfois de
            dormeurs courts.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;insomnie combine un sommeil insuffisant ou insatisfaisant et
            un impact réel sur la vie éveillée.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            2. Des circonstances adéquates
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Ne pas dormir à cause de travaux chez un voisin ou d&apos;un
            nourrisson qui se réveille toutes les deux heures relève d&apos;une
            perturbation externe. L&apos;insomnie suppose que les conditions
            pour dormir soient globalement réunies, mais que le sommeil ne
            vienne pas ou ne se maintienne pas.
          </p>
          <CitationBlock>
            <p className="mb-1">
              Buysse, D. J. (2013). <em>Insomnia</em>. JAMA, 309(7), 706–716.
            </p>
            <a
              href="https://doi.org/10.1001/jama.2013.193"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1001/jama.2013.193
            </a>
          </CitationBlock>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            3. Le retentissement diurne
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">
            L&apos;insomnie ne se limite pas aux nuits. Elle peut entraîner :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>fatigue,</li>
            <li>irritabilité,</li>
            <li>difficultés de concentration,</li>
            <li>altération des performances,</li>
            <li>humeur instable,</li>
            <li>préoccupation excessive à propos du sommeil.</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Les formes d'insomnie */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Les différentes formes d&apos;insomnie
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            L&apos;insomnie d&apos;endormissement
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La personne met plus de 30 minutes à s&apos;endormir de façon
            régulière. C&apos;est souvent la forme la plus liée à
            l&apos;anxiété, à la rumination, au mental qui s&apos;emballe au
            moment où le corps essaie de se poser.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            L&apos;insomnie de maintien
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La personne s&apos;endort normalement, mais se réveille une ou
            plusieurs fois dans la nuit — souvent entre 2 et 4 heures du matin,
            avec une difficulté à se rendormir. C&apos;est le tableau de Franck.
            Il est souvent associé au stress chronique, à la vigilance
            professionnelle, à l&apos;hypercontrôle.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Le réveil matinal précoce
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La personne se réveille définitivement une heure ou plus avant
            l&apos;heure souhaitée. Ce tableau est plus fréquent chez les
            personnes de plus de 50 ans, dans certains contextes dépressifs, ou
            lorsque le rythme de sommeil s&apos;est profondément désorganisé.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            L&apos;insomnie mixte
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Elle combine plusieurs formes et apparaît souvent lorsque
            l&apos;insomnie s&apos;installe dans la durée : difficulté
            d&apos;endormissement, réveils nocturnes, réveil matinal précoce.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Épidémiologie */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Un problème de santé publique silencieux
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;insomnie chronique — présente au moins trois nuits par
            semaine depuis plus de trois mois — touche entre 15 et 20 % des
            adultes en France. La Haute Autorité de Santé souligne que
            l&apos;insomnie est le trouble du sommeil le plus fréquemment
            rencontré en médecine générale.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les femmes en sont plus souvent affectées que les hommes. La
            prévalence augmente avec l&apos;âge, mais l&apos;insomnie ne
            concerne pas uniquement les personnes âgées. Les adultes de 30 à 50
            ans sont largement concernés, notamment en lien avec les pressions
            professionnelles, les responsabilités familiales, le stress
            chronique, les rythmes de vie irréguliers et la charge mentale.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Le coût humain est considérable :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>absentéisme,</li>
            <li>accidents du travail et de la route,</li>
            <li>consommation de médicaments,</li>
            <li>dégradation de la qualité de vie,</li>
            <li>comorbidités psychiatriques et médicales.</li>
          </ul>
          <CitationBlock>
            <p className="mb-1">
              Qaseem, A., et al. (2016).{" "}
              <em>
                Management of Chronic Insomnia Disorder in Adults: A Clinical
                Practice Guideline from the American College of Physicians.
              </em>{" "}
              Annals of Internal Medicine, 165(2), 125–133.
            </p>
            <a
              href="https://doi.org/10.7326/M15-2175"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.7326/M15-2175
            </a>
          </CitationBlock>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Ce que le cerveau fait pendant le sommeil */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Ce que le cerveau fait vraiment pendant le sommeil
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le sommeil n&apos;est pas une pause : c&apos;est un travail actif.
            Plusieurs processus fondamentaux se déroulent simultanément pendant
            le sommeil.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            La consolidation mémorielle
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Walker et Stickgold (2006) ont documenté le rôle majeur du sommeil
            dans la consolidation de la mémoire. Pendant le sommeil lent
            profond, les informations de la journée sont rejouées et transférées
            vers la mémoire à long terme. Pendant le sommeil paradoxal, les
            connexions entre informations distantes sont renforcées — favorisant
            créativité et résolution de problèmes.
          </p>
          <CitationBlock>
            <p className="mb-1">
              Walker, M. P., & Stickgold, R. (2006).{" "}
              <em>Sleep, memory, and plasticity.</em> Annual Review of
              Psychology, 57, 139–166.
            </p>
            <a
              href="https://doi.org/10.1146/annurev.psych.56.091103.070307"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1146/annurev.psych.56.091103.070307
            </a>
          </CitationBlock>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            La régulation émotionnelle
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le sommeil joue un rôle crucial dans le traitement des émotions. Le
            sommeil paradoxal, ou sommeil REM, aide à « digérer » les
            expériences difficiles : il permet de conserver l&apos;information
            tout en diminuant progressivement sa charge émotionnelle excessive.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            À l&apos;inverse, le manque de sommeil augmente souvent :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>l&apos;irritabilité et la réactivité émotionnelle,</li>
            <li>la sensibilité au stress,</li>
            <li>les pensées négatives,</li>
            <li>la difficulté à prendre du recul.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Le nettoyage cérébral
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            En 2013, Xie et al. ont montré dans <em>Science</em> que le cerveau
            endormi active un système de nettoyage appelé système glymphatique,
            permettant d&apos;éliminer des déchets métaboliques accumulés
            pendant la journée. Ce processus s&apos;interrompt presque
            totalement pendant l&apos;éveil.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Dormir n&apos;est pas un luxe. C&apos;est une maintenance
              neurologique indispensable.
            </p>
          </div>
          <CitationBlock>
            <p className="mb-1">
              Xie, L., et al. (2013).{" "}
              <em>Sleep drives metabolite clearance from the adult brain.</em>{" "}
              Science, 342(6156), 373–377.
            </p>
            <a
              href="https://doi.org/10.1126/science.1241224"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1126/science.1241224
            </a>
          </CitationBlock>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            La régulation métabolique et hormonale
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Spiegel, Leproult et Van Cauter (1999) ont montré que quelques nuits
            écourtées peuvent rapidement perturber le fonctionnement métabolique
            et hormonal : tolérance au glucose, cortisol, appétit, réponses
            immunitaires. Le manque de sommeil ne produit donc pas seulement de
            la fatigue — il modifie la façon dont le corps régule son énergie et
            ses émotions.
          </p>
          <CitationBlock>
            <p className="mb-1">
              Spiegel, K., Leproult, R., & Van Cauter, E. (1999).{" "}
              <em>Impact of sleep debt on metabolic and endocrine function.</em>{" "}
              The Lancet, 354(9188), 1435–1439.
            </p>
            <a
              href="https://doi.org/10.1016/S0140-6736(99)01376-8"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1016/S0140-6736(99)01376-8
            </a>
          </CitationBlock>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Ce que l&apos;insomnie chronique retire concrètement
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Au-delà de la fatigue immédiate, l&apos;insomnie chronique peut
            entraîner :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>une consolidation mémorielle dégradée,</li>
            <li>une régulation émotionnelle appauvrie,</li>
            <li>une vulnérabilité accrue au stress,</li>
            <li>un métabolisme perturbé,</li>
            <li>une défense immunitaire fragilisée,</li>
            <li>une maintenance neurologique insuffisante.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed font-medium">
            Ce n&apos;est pas « juste » de la fatigue. C&apos;est un
            appauvrissement progressif du fonctionnement global.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Modèle des 3P */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Le modèle des 3P : pourquoi l&apos;insomnie s&apos;installe et
            persiste
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le modèle de Spielman, Caruso et Glovinsky (1987) identifie trois
            types de facteurs : prédisposants, précipitants et perpétuants.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Les facteurs prédisposants
          </h3>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Ces caractéristiques stables créent un terrain de vulnérabilité :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>tendance à l&apos;anxiété,</li>
            <li>perfectionnisme,</li>
            <li>tempérament hypervigilant,</li>
            <li>forte réactivité émotionnelle.</li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Franck reconnaît ce profil. Il a toujours été quelqu&apos;un de «
            dans sa tête », jamais vraiment capable de déconnecter complètement.
            Ce n&apos;est pas un défaut — c&apos;est une caractéristique.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Les facteurs précipitants
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Ce sont les événements qui déclenchent l&apos;insomnie : surcharge
            professionnelle, deuil, maladie d&apos;un proche, changement de vie.
            Pour Franck, c&apos;était la période de restructuration. Les
            premières mauvaises nuits avaient une raison.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Les facteurs perpétuants : le vrai problème
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les facteurs précipitants peuvent disparaître, mais l&apos;insomnie
            reste — parce que des comportements et des pensées se sont mis en
            place en réaction aux premières mauvaises nuits.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Les plus fréquents :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>la compensation (siestes, coucher précoce),</li>
            <li>
              l&apos;hypervigilance au sommeil (surveiller l&apos;heure,
              calculer les heures restantes),
            </li>
            <li>
              les pensées catastrophiques (« si je ne dors pas, demain sera
              horrible »),
            </li>
            <li>
              le conditionnement négatif (le lit devient associé à
              l&apos;anxiété et à la frustration).
            </li>
          </ul>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Dans l&apos;insomnie chronique, ce sont souvent les mécanismes qui
              entretiennent l&apos;insomnie qui deviennent le vrai cœur du
              trouble — bien plus que les causes initiales.
            </p>
          </div>
          <CitationBlock>
            <p className="mb-1">
              Spielman, A. J., Caruso, L. S., & Glovinsky, P. B. (1987).{" "}
              <em>A behavioral perspective on insomnia treatment.</em>{" "}
              Psychiatric Clinics of North America, 10(4), 541–553.
            </p>
            <a
              href="https://doi.org/10.1016/S0193-953X(18)30532-X"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1016/S0193-953X(18)30532-X
            </a>
          </CitationBlock>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Ce que j'observe en consultation */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Ce que j&apos;observe en consultation — Yves DENIAU, hypnothérapeute
            à Saint-Brieuc
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Je reçois régulièrement des personnes qui viennent avec un
            historique d&apos;insomnie de plusieurs mois, parfois de plusieurs
            années. Ce qui me frappe presque systématiquement, c&apos;est que
            ces personnes ont développé une relation d&apos;anxiété avec leur
            propre sommeil.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Ce que les bilans révèlent — et que les patients ignorent souvent
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Quand j&apos;explore l&apos;insomnie d&apos;une personne, je cherche
            à comprendre ce qui se passe au moment précis où elle pose la tête
            sur l&apos;oreiller. Le plus souvent, j&apos;entends la description
            d&apos;une activation : le corps est fatigué, mais quelque chose se
            met en alerte. La respiration change, le mental part et les pensées
            de la journée reviennent.
          </p>
          <p className="mb-2 text-gray-700 leading-relaxed">
            Ces pensées peuvent être :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>pratiques : ce qu&apos;il faut faire ou anticiper demain,</li>
            <li>
              émotionnelles : inquiétudes, regrets, tensions relationnelles,
            </li>
            <li>
              diffuses : une vigilance sans objet précis, comme si le cerveau
              cherchait une menace sans la trouver.
            </li>
          </ul>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le corps est allongé, le contexte est calme et la journée est finie.
            Mais l&apos;alarme intérieure reste allumée.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La question que je pose toujours est simple :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium italic">
              « Est-ce que vous faites confiance à votre capacité à dormir ? »
            </p>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La réponse, presque invariablement, est non. Après des mois de
            mauvaises nuits, la personne a perdu confiance dans son propre
            cerveau pour accomplir quelque chose que tout le monde est censé
            faire naturellement. Et cette perte de confiance génère une
            vigilance anxieuse qui empêche précisément ce qu&apos;elle cherche à
            obtenir.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            C&apos;est le paradoxe central de l&apos;insomnie :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Plus on essaie de forcer le sommeil, plus on le fait fuir.
              L&apos;effort d&apos;endormissement maintient l&apos;éveil et la
              surveillance du sommeil l&apos;empêche.
            </p>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Deux profils reviennent souvent
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le premier est celui des personnes très actives professionnellement,
            comme Franck. Leur hypervigilance est utile dans la journée, mais
            continue la nuit : le mental surveille, analyse, prépare et anticipe
            alors que les conditions extérieures ne justifient plus aucune
            alerte.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Le second concerne les personnes dont l&apos;insomnie est alimentée
            par un contenu émotionnel non traité : soucis, tensions
            relationnelles, décisions difficiles, émotions non digérées ou
            événements de vie encore actifs intérieurement. Le silence de la
            nuit fait alors revenir ce que le bruit du jour permettait de
            repousser.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Ce que je rappelle souvent à ces personnes :
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Votre cerveau n&apos;est pas en panne. Il a appris quelque chose
              qui n&apos;est plus utile. Et il peut désapprendre.
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Ce que je ne peux pas affirmer
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose n&apos;est pas un traitement médical de
            l&apos;insomnie et ne remplace pas un bilan destiné à rechercher une
            cause organique : apnées du sommeil, syndrome des jambes sans repos,
            pathologie thyroïdienne, effet secondaire médicamenteux ou douleur
            chronique. Ces causes doivent être évaluées ou traitées par un
            médecin.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Elle n&apos;agit pas non plus de la même façon sur tous les profils.
            Elle est surtout pertinente lorsque l&apos;insomnie est liée à
            l&apos;hyperéveil anxieux, aux ruminations, au stress chronique, au
            conditionnement négatif et à la perte de confiance dans le sommeil.
            L&apos;amélioration peut être rapide sur l&apos;endormissement ou
            plus progressive sur le maintien du sommeil.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Hyperéveil */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            L&apos;hyperéveil : le mécanisme central de l&apos;insomnie
            chronique
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La psychologue Allison Harvey (2002) a proposé un modèle cognitif de
            l&apos;insomnie qui identifie l&apos;hyperéveil — cognitif,
            émotionnel et physiologique — comme le mécanisme central qui
            perpétue l&apos;insomnie une fois qu&apos;elle est installée.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            L&apos;hyperéveil physiologique
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Il se manifeste par une activité du système nerveux sympathique plus
            élevée au moment du coucher : rythme cardiaque élevé, température
            corporelle centrale moins basse, cortisol plus élevé, activité
            cérébrale de haute fréquence, tension musculaire persistante. Des
            études polysomnographiques ont confirmé ces différences objectives
            entre insomniaques et bons dormeurs.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            L&apos;hyperéveil cognitif
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les pensées qui ne s&apos;arrêtent pas, les listes du lendemain, les
            scénarios, les inquiétudes en boucle. Ces pensées se déclenchent
            souvent au moment précis où les conditions sont réunies pour dormir,
            quand le bruit extérieur s&apos;est tu. Essayer de « ne pas penser »
            produit souvent l&apos;effet inverse — c&apos;est le même phénomène
            que l&apos;expérience de l&apos;ours blanc de Wegner.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            L&apos;hyperéveil émotionnel
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            À mesure que l&apos;insomnie se chronicise, la personne commence à
            craindre ses nuits. Le lit lui-même devient progressivement associé
            à la frustration, à l&apos;anxiété, à l&apos;effort. Ce
            conditionnement négatif est l&apos;un des mécanismes les plus
            tenaces. Certaines personnes dorment correctement en vacances ou à
            l&apos;hôtel, mais pas dans leur propre lit — leur lit est devenu
            associé à l&apos;insomnie elle-même.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              L&apos;insomnie chronique n&apos;est pas seulement une difficulté
              à dormir. C&apos;est souvent un état d&apos;alerte qui s&apos;est
              installé autour du sommeil.
            </p>
          </div>
          <CitationBlock>
            <p className="mb-1">
              Harvey, A. G. (2002). <em>A cognitive model of insomnia.</em>{" "}
              Behaviour Research and Therapy, 40(8), 869–893.
            </p>
            <a
              href="https://doi.org/10.1016/S0005-7967(01)00061-4"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1016/S0005-7967(01)00061-4
            </a>
          </CitationBlock>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Somnifères */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Pourquoi les somnifères ne résolvent pas l&apos;insomnie chronique
          </h2>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Ce que les somnifères font réellement
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les somnifères peuvent réduire le temps d&apos;endormissement et
            augmenter la durée totale du sommeil, notamment pendant une période
            aiguë. Mais le sommeil obtenu n&apos;est pas toujours identique au
            sommeil naturel. Les benzodiazépines peuvent modifier
            l&apos;architecture du sommeil et réduire la proportion de sommeil
            lent profond : la quantité est améliorée, mais la qualité peut être
            différente.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Ce que les somnifères ne font pas
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Ils n&apos;agissent pas directement sur les mécanismes qui
            entretiennent l&apos;insomnie : l&apos;hyperéveil, le
            conditionnement négatif, les pensées catastrophiques, les
            comportements compensateurs et la perte de confiance dans le
            sommeil.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Ces mécanismes continuent à fonctionner pendant la durée du
            traitement. Et ils peuvent se retrouver intacts à l&apos;arrêt du
            médicament — parfois même aggravés par l&apos;effet rebond.
            C&apos;est exactement ce que Franck a vécu. Le somnifère lui
            permettait de dormir, mais son cerveau n&apos;avait pas réappris à
            dormir seul.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Les recommandations internationales s&apos;accordent sur un point
              : la thérapie cognitivo-comportementale de l&apos;insomnie (TCC-I)
              est recommandée comme traitement de première ligne de
              l&apos;insomnie chronique.
            </p>
          </div>
          <CitationBlock>
            <p className="mb-1">
              Riemann, D., et al. (2017).{" "}
              <em>
                European guideline for the diagnosis and treatment of insomnia.
              </em>{" "}
              Journal of Sleep Research, 26(6), 675–700.
            </p>
            <a
              href="https://doi.org/10.1111/jsr.12594"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1111/jsr.12594
            </a>
          </CitationBlock>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Hypnose et sommeil */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Comment l&apos;hypnose intervient sur le sommeil
          </h2>

          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            Sortir du mode alerte sans forcer
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            En induisant un état de conscience modifiée, l&apos;hypnose favorise
            un basculement vers un état de calme physiologique. La personne
            n&apos;a pas besoin de « se forcer à se détendre » — c&apos;est
            justement cette tentative qui échoue souvent chez
            l&apos;insomniaque. L&apos;hypnose contourne le paradoxe de
            l&apos;effort.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Défaire le conditionnement négatif
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;un des objectifs est de remplacer progressivement
            l&apos;association <em>lit = éveil, frustration, effort</em> par{" "}
            <em>lit = sécurité, relâchement, appartenance au sommeil</em>. Ce
            travail de reconditionnement se fait sous hypnose en associant
            l&apos;environnement du coucher à des états de calme profond.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Travailler sur les pensées nocturnes
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose permet de modifier la relation aux pensées nocturnes
            — non pas en les supprimant, mais en apprenant à les déposer, les
            observer sans s&apos;y accrocher, les laisser passer. Ces outils
            peuvent ensuite être utilisés seuls lors des réveils nocturnes.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Modifier les croyances sur le sommeil
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les personnes insomniaques développent souvent des croyances comme «
            j&apos;ai besoin de huit heures exactement pour fonctionner », « une
            nuit ratée va me détruire » ou « je ne dormirai plus jamais
            normalement ». Ces pensées augmentent l&apos;anxiété avant même que
            le raisonnement puisse les corriger.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose peut aider à assouplir ces croyances en travaillant
            le rapport à l&apos;incertitude nocturne, la capacité à tolérer une
            nuit imparfaite, la réduction de l&apos;anxiété de performance et la
            restauration de la confiance dans le sommeil.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            L&apos;auto-hypnose : un outil d&apos;endormissement autonome
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La personne apprend en séance un protocole guidé qu&apos;elle peut
            ensuite utiliser seule : au moment du coucher, lors des réveils
            nocturnes, dans les périodes de stress. Elle réapprend à faire
            confiance à sa propre capacité à se calmer — et indirectement, à
            dormir. Elle ne dépend plus uniquement d&apos;un médicament ou
            d&apos;une présence extérieure.
          </p>
        </section>

        <Image
          src="/blog/insomnie-et-hypnose.png"
          alt="Hypnose et insomnie : retrouver le sommeil naturellement à Saint-Brieuc"
          width={1024}
          height={1024}
          className="rounded-lg w-full mb-10 lg:w-2/3 mx-auto"
        />

        <div className="border-t border-gray-200 my-10" />

        {/* Preuve scientifique */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            La preuve scientifique : l&apos;étude Cordi et al. (2014)
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;étude de Cordi, Schlarb et Rasch (2014), publiée dans la
            revue <em>SLEEP</em>, est l&apos;une des plus citées sur le lien
            entre hypnose et qualité du sommeil. Elle a été conduite à
            l&apos;Université de Tübingen sur 70 femmes jeunes en bonne santé,
            réparties en trois groupes : suggestion hypnotique de sommeil
            profond, suggestion neutre, et groupe contrôle.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Les participantes exposées à la suggestion de sommeil profond
            présentaient, après l&apos;induction, une augmentation importante du
            sommeil lent profond mesurée objectivement par EEG. Le temps
            d&apos;éveil après l&apos;endormissement était également réduit.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed">
              Ce résultat est remarquable : il a été mesuré objectivement par
              EEG, pas seulement par ressenti subjectif. L&apos;hypnose peut
              modifier la neurophysiologie du sommeil de façon mesurable.
            </p>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            <strong>Limites importantes :</strong> l&apos;étude portait sur des
            femmes jeunes sans trouble du sommeil. Sa généralisation aux
            insomniaques chroniques n&apos;est pas automatique. Elle constitue
            une preuve de concept solide, mais pas une démonstration clinique
            exhaustive.
          </p>
          <CitationBlock>
            <p className="mb-1">
              Cordi, M. J., Schlarb, A. A., & Rasch, B. (2014).{" "}
              <em>Deepening sleep by hypnotic suggestion.</em> SLEEP, 37(6),
              1143–1152.
            </p>
            <a
              href="https://doi.org/10.5665/sleep.3778"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.5665/sleep.3778
            </a>
          </CitationBlock>
          <CitationBlock>
            <p className="mb-1">
              Graci, G. M., & Hardie, J. C. (2007).{" "}
              <em>
                Evidenced-based hypnotherapy for the management of sleep
                disorders.
              </em>{" "}
              International Journal of Clinical and Experimental Hypnosis,
              55(3), 288–302.
            </p>
            <a
              href="https://doi.org/10.1080/00207140701338662"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1080/00207140701338662
            </a>
          </CitationBlock>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Ce que la science dit dans son ensemble
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Au-delà de l&apos;étude de Cordi, plusieurs travaux documentent
            l&apos;intérêt clinique de l&apos;hypnose pour certaines insomnies
            liées à l&apos;anxiété et au stress. Des recherches sur
            l&apos;hypnose associée à une TCC suggèrent aussi un bénéfice
            possible sur la composante physiologique de l&apos;hyperéveil.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Il faut toutefois rester honnête : la recherche spécifique sur
            l&apos;hypnose et l&apos;insomnie est moins abondante que celle sur
            la TCC-I, avec des études de qualité variable et des effectifs
            souvent limités. L&apos;hypnose est prometteuse et cliniquement
            utilisée, mais ne dispose pas encore du même niveau de preuve
            accumulé que la TCC-I.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              L&apos;hypnose ne doit pas être présentée comme une solution
              miracle. Elle peut être un outil complémentaire pertinent, surtout
              lorsque l&apos;insomnie est liée au stress, à l&apos;hyperéveil et
              aux ruminations nocturnes.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Recommandations et traitements de référence
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La thérapie cognitivo-comportementale pour l&apos;insomnie, ou
            TCC-I, est recommandée comme traitement de première ligne par la
            Haute Autorité de Santé, l&apos;American College of Physicians et le
            guide européen de l&apos;insomnie.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>La restriction de sommeil</strong> limite temporairement
              le temps passé au lit au temps réellement dormi afin de consolider
              le sommeil.
            </li>
            <li>
              <strong>Le contrôle du stimulus</strong> réassocie le lit au
              sommeil : ne pas y rester longtemps éveillé, se lever si le
              sommeil ne vient pas et éviter d&apos;y travailler ou ruminer.
            </li>
            <li>
              <strong>La restructuration cognitive</strong> assouplit les
              croyances dysfonctionnelles sur la durée et la perfection du
              sommeil.
            </li>
            <li>
              <strong>L&apos;hygiène du sommeil</strong> soutient des horaires
              réguliers, une chambre calme et fraîche, moins de stimulants et
              une exposition à la lumière naturelle le matin. Seule, elle est
              rarement suffisante face à une insomnie chronique installée.
            </li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            La place de l&apos;hypnose dans cet ensemble
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose peut être utilisée seule pour certaines insomnies
            légères à modérées liées à l&apos;hyperéveil, ou comme complément à
            la TCC-I, soutien pendant une diminution médicalement encadrée des
            somnifères et méthode d&apos;apprentissage de l&apos;autorégulation.
          </p>
          <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">
            Les autres approches
          </h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            La méditation de pleine conscience peut réduire les ruminations, la
            sophrologie construire une routine de détente, et l&apos;EMDR être
            indiquée lorsque l&apos;insomnie est associée à un traumatisme ou à
            des cauchemars récurrents. Les médicaments peuvent avoir leur place
            dans certaines situations, mais ne constituent pas seuls un
            traitement de fond.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* L'approche du cabinet */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            L&apos;approche du cabinet à Saint-Brieuc
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            À Saint-Brieuc, je propose un accompagnement spécifique pour les
            personnes souffrant d&apos;insomnie chronique ou de troubles du
            sommeil liés à l&apos;anxiété et au stress. Cet accompagnement
            s&apos;articule autour de plusieurs axes.
          </p>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li>
              <strong>
                Un premier entretien d&apos;exploration approfondie
              </strong>{" "}
              — profil de l&apos;insomnie, son histoire, ses déclencheurs, les
              comportements qui l&apos;entretiennent, les pensées nocturnes.
            </li>
            <li>
              <strong>
                L&apos;identification de l&apos;hyperéveil dominant
              </strong>{" "}
              — physiologique, cognitif ou émotionnel — pour orienter le
              travail.
            </li>
            <li>
              <strong>La régulation du système nerveux autonome</strong> par le
              travail hypnotique : construire une référence interne de sécurité.
            </li>
            <li>
              <strong>Le déconditionnement progressif du lit</strong> —
              réassocier l&apos;environnement du coucher à la sécurité, au
              relâchement, à la récupération.
            </li>
            <li>
              <strong>L&apos;enseignement de l&apos;auto-hypnose</strong> — un
              protocole que la personne peut pratiquer seule au coucher et lors
              des réveils nocturnes.
            </li>
            <li>
              <strong>Un travail sur les pensées nocturnes</strong> et les
              croyances dysfonctionnelles sur le sommeil.
            </li>
            <li>
              <strong>La modification des croyances sur le sommeil</strong> —
              assouplir progressivement la pression et l&apos;anxiété de
              performance nocturne.
            </li>
            <li>
              <strong>L&apos;adressage des émotions de fond</strong> — stress
              professionnel chronique, tensions relationnelles, décisions
              difficiles.
            </li>
            <li>
              <strong>Un accompagnement dans la durée</strong> — les premières
              séances construisent la régulation et les outils de base, puis le
              travail est ajusté selon l&apos;évolution.
            </li>
          </ul>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Les séances peuvent se tenir au cabinet de Saint-Brieuc ou en
            visioconférence. La visioconférence peut même être avantageuse pour
            l&apos;insomnie : la personne travaille depuis l&apos;environnement
            dans lequel le sommeil doit se réapprendre.
          </p>
          <div className="bg-green-50 p-6 border-l-4 border-vertSapin">
            <p className="text-lg font-semibold text-green-800 mb-2">
              Prendre rendez-vous
            </p>
            <p className="text-gray-700">
              Pour un accompagnement personnalisé de votre insomnie à
              Saint-Brieuc, contactez le cabinet via{" "}
              <a
                href="https://www.hypnose-saintbrieuc.fr"
                className="text-vertSapin underline hover:no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.hypnose-saintbrieuc.fr
              </a>
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem
              value="q1"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                L&apos;hypnose va-t-elle m&apos;endormir pendant la séance ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Pas nécessairement, et ce n&apos;est pas l&apos;objectif
                principal. L&apos;état hypnotique est un état de conscience
                modifiée, différent du sommeil. La personne reste consciente,
                peut entendre et réagir. Certaines glissent naturellement vers
                le sommeil en fin de séance — ce n&apos;est pas un problème.
                Mais le travail thérapeutique s&apos;effectue dans l&apos;état
                hypnotique, pas dans le sommeil lui-même.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="q2"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                Combien de séances faut-il pour améliorer le sommeil ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Cela dépend de l&apos;ancienneté de l&apos;insomnie, du niveau
                d&apos;hyperéveil, du stress actuel et de la présence de
                somnifères. Des améliorations peuvent être perceptibles dès les
                premières séances, notamment sur l&apos;endormissement. Pour un
                travail complet — reconditionnement du lit, croyances sur le
                sommeil, pensées nocturnes — un accompagnement de plusieurs
                séances est généralement plus cohérent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="q3"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                Peut-on utiliser l&apos;hypnose si on prend déjà des somnifères
                ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Oui, l&apos;hypnose et les médicaments sont compatibles. Dans
                certains cas, l&apos;objectif de l&apos;accompagnement peut être
                de préparer une diminution progressive des somnifères. Mais
                cette réduction doit toujours se faire sous supervision
                médicale.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="q4"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                Suis-je hypnotisable si j&apos;ai l&apos;esprit très actif la
                nuit ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Oui. Avoir l&apos;esprit actif n&apos;est pas un obstacle à
                l&apos;hypnose — c&apos;est même souvent le signe d&apos;un
                cerveau très sensible à l&apos;imagerie et aux associations
                internes. En hypnose, les pensées n&apos;ont pas besoin
                d&apos;être supprimées. Elles peuvent simplement se mettre
                progressivement en arrière-plan.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="q5"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                Les séances à distance sont-elles efficaces pour l&apos;insomnie
                ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Oui. Dans le cas de l&apos;insomnie, la visioconférence peut
                même avoir un avantage : la personne travaille depuis son propre
                environnement de sommeil, ce qui permet de pratiquer les outils
                dans le lieu même où ils devront être utilisés.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="q6"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                L&apos;hypnose peut-elle aider pour les insomnies liées à la
                ménopause ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Oui, elle peut être utile. Les troubles du sommeil liés à la
                ménopause associent souvent bouffées de chaleur nocturnes,
                anxiété, hyperéveil et réveils fréquents. L&apos;hypnose peut
                aider à mieux réguler la réponse au stress, les sensations
                corporelles et l&apos;appréhension du sommeil.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="q7"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                L&apos;hygiène du sommeil est-elle suffisante ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                L&apos;hygiène du sommeil est importante, mais souvent
                insuffisante pour une insomnie chronique installée. Elle est
                plus efficace en prévention qu&apos;en traitement. Si vous
                appliquez déjà les règles classiques sans résultat durable, cela
                signifie probablement que d&apos;autres mécanismes sont en jeu :
                hyperéveil, conditionnement négatif, anxiété du sommeil,
                croyances dysfonctionnelles. C&apos;est à ce niveau qu&apos;il
                faut intervenir.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="q8"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                L&apos;hypnose peut-elle aider pour les cauchemars et le sommeil
                agité ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Oui, dans certains cas, notamment avec des techniques
                d&apos;imagerie mentale. Lorsque les cauchemars sont liés à un
                traumatisme, l&apos;EMDR ou un accompagnement
                psychothérapeutique spécialisé peut être plus indiqué. Les
                approches peuvent parfois se compléter.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="q9"
              className="border border-gray-200 rounded-lg px-4"
            >
              <AccordionTrigger className="text-left font-medium text-gray-800 hover:no-underline">
                Mon conjoint dit que je ronfle et que je m&apos;arrête de
                respirer la nuit. Est-ce lié à mon insomnie ?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 leading-relaxed">
                Des pauses respiratoires observées pendant le sommeil sont un
                signal important qui peut évoquer un syndrome d&apos;apnées
                obstructives du sommeil. La première étape est de consulter un
                médecin ou un spécialiste du sommeil. L&apos;hypnose ne remplace
                pas cette évaluation médicale.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* Mythes & réalités */}
        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Mythes & réalités
          </h2>
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-gray-800 mb-2">
                « L&apos;insomnie, c&apos;est dans la tête — il suffit de ne pas
                y penser »
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Faux.</strong> L&apos;insomnie chronique a une base
                neurobiologique et physiologique réelle. Des études documentent
                des différences objectives entre insomniaques et bons dormeurs.
                Et justement, essayer de ne pas y penser est souvent ce qui
                aggrave le problème.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6">
              <p className="font-semibold text-gray-800 mb-2">
                « Un somnifère de temps en temps ne peut pas faire de mal »
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>À nuancer.</strong> Utilisé ponctuellement sur quelques
                jours, un somnifère peut être utile. Le problème apparaît avec
                la chronicisation : tolérance, dépendance, effet rebond à
                l&apos;arrêt et modification de l&apos;architecture du sommeil.
                Il peut aider ponctuellement sans résoudre les mécanismes de
                fond.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6">
              <p className="font-semibold text-gray-800 mb-2">
                « Si je dors mal, je dois récupérer avec une sieste »
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>À nuancer.</strong> Les longues siestes réduisent la
                pression de sommeil nécessaire pour s&apos;endormir le soir.
                Chez les insomniaques, elles peuvent entretenir le problème. Une
                courte sieste de 15-20 minutes en début d&apos;après-midi peut
                parfois être acceptable, mais les siestes longues ou tardives
                aggravent souvent l&apos;insomnie nocturne.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6">
              <p className="font-semibold text-gray-800 mb-2">
                « L&apos;hypnose, c&apos;est pour les gens crédules »
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Faux.</strong> L&apos;hypnose modifie l&apos;attention,
                la perception et certains états physiologiques. L&apos;étude de
                Cordi et al. (2014) montre des modifications objectives du
                sommeil après suggestion hypnotique. Ce n&apos;est pas une
                simple affaire de crédulité.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6">
              <p className="font-semibold text-gray-800 mb-2">
                « Pour guérir de l&apos;insomnie, il suffit d&apos;apprendre à
                se détendre »
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Faux.</strong> La relaxation peut aider, mais elle est
                souvent insuffisante face à une insomnie chronique. Elle ne
                traite pas toujours le conditionnement négatif, les croyances
                dysfonctionnelles, l&apos;hypervigilance, les comportements
                compensateurs ni l&apos;anxiété de performance nocturne.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6">
              <p className="font-semibold text-gray-800 mb-2">
                « Après 50 ans, mal dormir est normal »
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Faux.</strong> Le sommeil change avec l&apos;âge, mais
                l&apos;insomnie chronique n&apos;est pas une fatalité. Elle
                reste traitable à tout âge. Accepter l&apos;insomnie comme
                normale revient parfois à se priver d&apos;un accompagnement
                efficace.
              </p>
            </div>
            <div className="border-t border-gray-100 pt-6">
              <p className="font-semibold text-gray-800 mb-2">
                « L&apos;auto-hypnose pour dormir, c&apos;est juste du comptage
                de moutons amélioré »
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Faux.</strong> L&apos;auto-hypnose est un protocole
                structuré qui vise à modifier l&apos;état du système nerveux. Il
                ne s&apos;agit pas de penser à autre chose, mais
                d&apos;apprendre à changer d&apos;état — en favorisant
                l&apos;activation parasympathique et la réduction de
                l&apos;hyperéveil.
              </p>
            </div>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        {/* À retenir */}
        <section className="mb-12">
          <div className="bg-green-50 p-6 border-l-4 border-vertSapin rounded-r-lg">
            <h2 className="text-xl font-semibold mb-4 text-green-900">
              À retenir
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                L&apos;insomnie chronique touche une part importante de la
                population adulte.
              </li>
              <li>
                Elle est souvent entretenue par l&apos;hyperéveil du système
                nerveux.
              </li>
              <li>
                Plus on tente de forcer le sommeil, plus il peut
                s&apos;éloigner.
              </li>
              <li>
                Les somnifères peuvent aider ponctuellement, mais ne rééduquent
                pas toujours le cerveau à dormir.
              </li>
              <li>
                La TCC-I reste le traitement de référence de l&apos;insomnie
                chronique.
              </li>
              <li>
                L&apos;hypnose peut être un outil complémentaire pertinent,
                notamment lorsque l&apos;insomnie est liée au stress, aux
                ruminations et à l&apos;anxiété du sommeil.
              </li>
              <li>
                Le cerveau peut réapprendre à associer le lit au calme, à la
                sécurité et au sommeil.
              </li>
            </ul>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Références scientifiques
          </h2>
          <ul className="space-y-4 text-sm text-gray-700">
            {[
              {
                label:
                  "Spielman, A. J., Caruso, L. S., & Glovinsky, P. B. (1987). A behavioral perspective on insomnia treatment.",
                href: "https://doi.org/10.1016/S0193-953X(18)30532-X",
              },
              {
                label: "Buysse, D. J. (2013). Insomnia. JAMA.",
                href: "https://doi.org/10.1001/jama.2013.193",
              },
              {
                label:
                  "Haute Autorité de Santé (2006). Prise en charge du patient adulte se plaignant d'insomnie en médecine générale.",
                href: "https://www.has-sante.fr/jcms/c_554821/fr/prise-en-charge-du-patient-adulte-se-plaignant-d-insomnie-en-medecine-generale",
              },
              {
                label:
                  "Spiegel, K., Leproult, R., & Van Cauter, E. (1999). Impact of sleep debt on metabolic and endocrine function.",
                href: "https://doi.org/10.1016/S0140-6736(99)01376-8",
              },
              {
                label:
                  "Xie, L., Kang, H., Xu, Q., et al. (2013). Sleep drives metabolite clearance from the adult brain.",
                href: "https://doi.org/10.1126/science.1241224",
              },
              {
                label:
                  "Walker, M. P., & Stickgold, R. (2006). Sleep, memory, and plasticity.",
                href: "https://doi.org/10.1146/annurev.psych.56.091103.070307",
              },
              {
                label: "Harvey, A. G. (2002). A cognitive model of insomnia.",
                href: "https://doi.org/10.1016/S0005-7967(01)00061-4",
              },
              {
                label:
                  "Morin, C. M., Vallières, A., Guay, B., et al. (2009). Cognitive behavioral therapy, singly and combined with medication, for persistent insomnia.",
                href: "https://doi.org/10.1001/jama.2009.682",
              },
              {
                label:
                  "Qaseem, A., Kansagara, D., Forciea, M. A., et al. (2016). Management of chronic insomnia disorder in adults.",
                href: "https://doi.org/10.7326/M15-2175",
              },
              {
                label:
                  "Cordi, M. J., Schlarb, A. A., & Rasch, B. (2014). Deepening sleep by hypnotic suggestion.",
                href: "https://doi.org/10.5665/sleep.3778",
              },
              {
                label:
                  "Graci, G. M., & Hardie, J. C. (2007). Evidenced-based hypnotherapy for the management of sleep disorders.",
                href: "https://doi.org/10.1080/00207140701338662",
              },
              {
                label:
                  "Riemann, D., Baglioni, C., Bassetti, C., et al. (2017). European guideline for the diagnosis and treatment of insomnia.",
                href: "https://doi.org/10.1111/jsr.12594",
              },
              {
                label:
                  "Bootzin, R. R., & Epstein, D. R. (2011). Understanding and treating insomnia.",
                href: "https://doi.org/10.1146/annurev.clinpsy.3.022806.091516",
              },
            ].map((reference) => (
              <li key={reference.href}>
                <a
                  href={reference.href}
                  className="text-vertSapin underline hover:no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {reference.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Le mot de la fin
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Franck a fini par comprendre quelque chose qui avait tout changé
            dans sa relation à ses nuits : il essayait trop fort.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Chaque soir, il se couchait avec une mission : dormir. Il
            l&apos;abordait avec la même rigueur que ses objectifs
            professionnels. Il surveillait son endormissement, calculait ses
            heures et s&apos;évaluait. C&apos;était précisément cette
            surveillance qui maintenait l&apos;éveil qu&apos;il cherchait à
            éteindre.
          </p>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed font-medium">
              Le sommeil ne se conquiert pas. Il se laisse venir.
            </p>
          </div>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Son cerveau n&apos;avait pas oublié comment dormir. Il avait
            progressivement appris à ne plus lui faire confiance.
            L&apos;insomnie chronique n&apos;est ni une fatalité, ni une
            question de caractère ou de discipline. C&apos;est souvent un
            système nerveux qui a appris quelque chose d&apos;inutile et qui
            peut en apprendre autre chose.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            L&apos;hypnose ne force rien et ne programme rien. Elle crée les
            conditions dans lesquelles le cerveau peut réapprendre ce qu&apos;il
            savait faire naturellement : se laisser aller. Moins de bruit
            mental, moins de contrôle rigide, plus de perception et
            d&apos;écoute fine. Dans cet espace, souvent pour la première fois
            depuis longtemps, le sommeil peut revenir.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed font-medium">
            Si vous lisez cet article à trois heures du matin en vous demandant
            si cela peut changer, la réponse est oui.
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>
              Yves DENIAU reçoit à son cabinet de Saint-Brieuc du lundi au
              vendredi.
            </strong>{" "}
            Les séances peuvent également se tenir à distance, en
            visioconférence.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section>
          <h2 className="text-xl font-semibold mb-4">Lire aussi</h2>
          <ul className="space-y-3 text-gray-700">
            <li>
              →{" "}
              <a
                href="/blog/hypnose-stress-saint-brieuc"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Hypnose et stress : une réponse naturelle validée par la science
              </a>{" "}
              — Le stress chronique est l&apos;une des premières causes d&apos;insomnie. L&apos;hypnose agit sur les deux simultanément.
            </li>
            <li>
              →{" "}
              <a
                href="/blog/crise-angoisse-hypnose-saint-brieuc"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Crises d&apos;angoisse : pourquoi l&apos;hypnose agit là où la volonté échoue
              </a>{" "}
              — Anxiété nocturne et hypervigilance partagent les mêmes mécanismes que les crises d&apos;angoisse.
            </li>
            <li>
              →{" "}
              <a
                href="/blog/sucre-hypnose-saint-brieuc"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Sucre et hypnose : et si votre cerveau pouvait enfin s&apos;en libérer ?
              </a>{" "}
              — La consommation de sucre en soirée perturbe la qualité du sommeil — l&apos;hypnose peut aider sur ce point aussi.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default InsomniesHypnosePage;
