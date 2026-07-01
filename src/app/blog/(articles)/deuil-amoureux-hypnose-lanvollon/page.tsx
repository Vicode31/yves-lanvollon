import ArticleSchema from "@/components/ArticleSchema";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";

const title = "Deuil amoureux et hypnose : se reconstruire | Lanvollon";

const description =
  "Rupture amoureuse, ruminations, manque : le deuil amoureux est une réaction normale. La neuroscience et l'hypnose pour se reconstruire durablement à Lanvollon.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "deuil amoureux",
    "rupture amoureuse",
    "hypnose deuil",
    "hypnothérapie rupture",
    "Lanvollon",
    "surmonter rupture",
    "rumination amoureuse",
  ],
  authors: [{ name: "Yves DENIAU", url: "https://www.hypnotherapeute-lanvollon-plouha.fr" }],
  alternates: {
    canonical:
      "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/deuil-amoureux-hypnose-lanvollon",
  },
  openGraph: {
    title,
    description,
    url: "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/deuil-amoureux-hypnose-lanvollon",
    siteName: "Hypnose Lanvollon - Yves Deniau",
    images: [
      {
        url: "https://www.hypnotherapeute-lanvollon-plouha.fr/blog/deuil-amoureux.png",
        width: 1024,
        height: 1024,
        alt: "Schéma des étapes du deuil amoureux : choc, sens, rumination, tristesse, détachement",
      },
    ],
    locale: "fr_FR",
    type: "article",
    publishedTime: "2026-03-21T00:00:00.000Z",
    authors: ["Yves DENIAU"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["https://www.hypnotherapeute-lanvollon-plouha.fr/blog/deuil-amoureux.png"],
  },
};

function CitationBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-6 border-l-4 border-gray-300 bg-gray-50/80 py-3 pl-4 pr-4 text-sm text-gray-700 not-italic">
      {children}
    </blockquote>
  );
}

const DeuilAmoureuxHypnose: React.FC = () => {
  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url="https://www.hypnotherapeute-lanvollon-plouha.fr/blog/deuil-amoureux-hypnose-lanvollon"
        image="https://www.hypnotherapeute-lanvollon-plouha.fr/blog/deuil-amoureux.png"
        datePublished="2026-03-21T00:00:00.000Z"
        keywords={[
          "deuil amoureux",
          "rupture amoureuse",
          "hypnose deuil",
          "hypnothérapie rupture",
          "Lanvollon",
          "surmonter rupture",
          "rumination amoureuse",
        ]}
      />
      <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 text-justify">
        <header className="mb-12 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">{title}</h1>
          <div className="w-24 h-1 bg-green-800 mx-auto rounded-full" />
        </header>

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Comprendre le deuil amoureux : une réaction psychologique normale
            après une rupture
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Une rupture amoureuse est souvent vécue comme un choc. Même lorsque
            la relation était conflictuelle, toxique ou insatisfaisante, la
            séparation peut provoquer une douleur intense.
          </p>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Contrairement à ce que l&apos;on pourrait penser, cette souffrance
            n&apos;est pas un signe de fragilité. Elle correspond à un processus
            psychologique naturel : le <strong>deuil</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La psychiatre Kübler-Ross (1969) a décrit les grandes étapes du
            deuil : déni, colère, négociation, tristesse et acceptation.
          </p>
          <CitationBlock>
            <p className="mb-1">
              Kübler-Ross, E. (1969). <em>On Death and Dying</em>.
            </p>
            <a
              href="https://doi.org/10.4324/9780203991417"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.4324/9780203991417
            </a>
          </CitationBlock>
          <p className="text-gray-700 leading-relaxed">
            Dans le cadre d&apos;un deuil amoureux, ces étapes ne sont pas
            linéaires. Il est fréquent de passer de l&apos;espoir à la
            tristesse, puis de revenir à la colère, parfois dans la même
            journée.
          </p>
        </section>

        <Image
          src="/blog/coeur-deuil-amoureux.png"
          alt="Infographie : les étapes du deuil amoureux autour d'un cœur fissuré"
          width={1024}
          height={1024}
          className="rounded-lg w-full mt-16 lg:w-2/3 mx-auto"
        />

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Pourquoi une rupture amoureuse fait autant souffrir : ce que dit la
            neuroscience
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une question revient très souvent :
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 italic">
            &quot;Pourquoi est-ce que je souffre autant alors que je sais que
            cette relation n&apos;était pas bonne pour moi ?&quot;
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La réponse est en partie biologique.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les travaux de Fisher et al. (2010) ont montré que la rupture
            amoureuse active les zones cérébrales impliquées dans :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>la récompense</li>
            <li>le manque</li>
            <li>la dépendance</li>
          </ul>
          <CitationBlock>
            <p className="mb-1">
              Fisher, H. E., Brown, L. L., Aron, A., Strong, G., &amp; Mashek,
              D. (2010).
            </p>
            <a
              href="https://doi.org/10.1152/jn.00784.2009"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1152/jn.00784.2009
            </a>
          </CitationBlock>
          <p className="text-gray-700 leading-relaxed mb-4">
            Autrement dit, la personne devient une forme de &quot;référence
            neurologique&quot;. Lorsqu&apos;elle disparaît, le cerveau entre en
            état de manque.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            C&apos;est ce qui explique :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700">
            <li>le besoin de contact</li>
            <li>les pensées obsessionnelles</li>
            <li>la difficulté à accepter la rupture</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Les symptômes du deuil amoureux : quand le corps et le mental
            réagissent
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le deuil amoureux ne se limite pas à une tristesse émotionnelle. Il
            s&apos;exprime souvent de manière globale :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>fatigue importante</li>
            <li>troubles du sommeil</li>
            <li>perte ou augmentation de l&apos;appétit</li>
            <li>difficultés de concentration</li>
            <li>anxiété</li>
            <li>sensation de vide</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Certaines personnes décrivent même une douleur physique dans la
            poitrine.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ces manifestations sont normales. Elles traduisent une phase
            d&apos;adaptation du système nerveux.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Rumination après une rupture amoureuse : pourquoi votre cerveau
            refuse de lâcher
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Très rapidement après la rupture, le mental se met en mouvement.
          </p>
          <p className="text-gray-700 leading-relaxed mb-1">
            &quot;Pourquoi ?&quot;
          </p>
          <p className="text-gray-700 leading-relaxed mb-1">
            &quot;Qu&apos;est-ce que j&apos;ai raté ?&quot;
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            &quot;Est-ce que j&apos;aurais pu éviter ça ?&quot;
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ces questions peuvent tourner en boucle pendant des heures. Vous
            rejouez des scènes, vous refaites les conversations, vous imaginez
            d&apos;autres issues possibles.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ce phénomène est bien documenté. Les recherches de Wegner (1994)
            montrent que plus on tente de supprimer une pensée, plus elle
            devient persistante.
          </p>
          <CitationBlock>
            <p className="mb-1">Wegner, D. M. (1994).</p>
            <a
              href="https://doi.org/10.1037/0033-295X.101.1.34"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1037/0033-295X.101.1.34
            </a>
          </CitationBlock>
          <div className="bg-green-50 p-4 border-l-4 border-vertSapin my-6">
            <p className="text-gray-700 leading-relaxed">
              La rumination est donc paradoxale : elle donne l&apos;impression
              d&apos;avancer… mais maintient en réalité la souffrance.
            </p>
          </div>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Surveiller son ex sur les réseaux sociaux : un comportement fréquent
            et compréhensible
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            C&apos;est souvent une source de honte ou de culpabilité. Pourtant,
            dans la réalité, ce comportement est extrêmement répandu.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vous regardez ses publications, vous vérifiez ses connexions, vous
            cherchez à comprendre où il/elle en est.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">
            Certaines personnes vont même jusqu&apos;à analyser :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>les horaires de connexion</li>
            <li>les likes</li>
            <li>les nouvelles fréquentations</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            D&apos;un point de vue neurologique, ce comportement
            s&apos;apparente à un mécanisme de dépendance. Chaque consultation
            agit comme une récompense immédiate… mais entretient le lien
            émotionnel. Cela prolonge le processus de deuil.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            L&apos;attachement amoureux : pourquoi il est si difficile de
            tourner la page
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Selon la théorie de l&apos;attachement (Bowlby, 1980), les relations
            amoureuses créent des liens profonds.
          </p>
          <CitationBlock>
            <p className="mb-1">Bowlby, J. (1980).</p>
            <a
              href="https://psycnet.apa.org/record/1980-50528-000"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://psycnet.apa.org/record/1980-50528-000
            </a>
          </CitationBlock>
          <p className="text-gray-700 leading-relaxed mb-2">
            Dans une relation, l&apos;autre devient :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>une source de sécurité</li>
            <li>un repère émotionnel</li>
            <li>un point d&apos;ancrage</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-2">
            Après la rupture, ce système ne s&apos;arrête pas immédiatement.
            C&apos;est pourquoi certaines personnes ressentent :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700">
            <li>un manque intense</li>
            <li>une difficulté à se projeter</li>
            <li>une impression d&apos;incomplétude</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Les étapes du deuil amoureux : ce que l&apos;on observe concrètement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            En pratique, le deuil amoureux se manifeste souvent ainsi :
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-900">Le choc</h3>
          <p className="text-gray-700 leading-relaxed mb-6 italic">
            &quot;Ce n&apos;est pas réel.&quot;
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            L&apos;espoir
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 italic">
            &quot;Il/elle va revenir.&quot;
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            La recherche de sens
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 italic">
            &quot;Pourquoi ça s&apos;est terminé ?&quot;
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            La rumination
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Pensées constantes, analyse excessive.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            La tristesse
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Vide, perte d&apos;énergie, repli.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            Le détachement progressif
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Moins d&apos;intensité émotionnelle.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ces étapes ne sont pas fixes. Il est normal de revenir en arrière.
          </p>
          <Image
            src="/blog/deuil-amoureux.png"
            alt="Infographie : les étapes du deuil amoureux autour d'un cœur fissuré"
            width={1024}
            height={1024}
            className="rounded-lg w-full mt-16 lg:w-2/3 mx-auto"
          />
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Comment commencer à se reconstruire après une rupture
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La reconstruction ne consiste pas à &quot;oublier&quot;. Elle
            consiste à <strong>transformer le lien</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Les approches cognitives (Beck, 1976) montrent que nos pensées
            influencent directement notre état émotionnel.
          </p>
          <CitationBlock>
            <p className="mb-1">Beck, A. T. (1976).</p>
            <a
              href="https://psycnet.apa.org/record/1976-28302-000"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://psycnet.apa.org/record/1976-28302-000
            </a>
          </CitationBlock>
          <p className="text-gray-700 leading-relaxed mb-2">
            Progressivement, certaines évolutions apparaissent :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>les pensées deviennent moins fréquentes</li>
            <li>les émotions moins intenses</li>
            <li>une nouvelle stabilité se construit</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Mais ce processus peut prendre du temps.
          </p>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Hypnose et rupture amoureuse : comment se libérer plus rapidement
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L&apos;hypnose agit sur les mécanismes inconscients impliqués dans
            le deuil amoureux. Elle permet de travailler directement sur :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>les liens émotionnels</li>
            <li>les automatismes de pensée</li>
            <li>les souvenirs chargés affectivement</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Une méta-analyse de Kirsch (1995) confirme l&apos;efficacité de
            l&apos;hypnose en accompagnement thérapeutique.
          </p>
          <CitationBlock>
            <p className="mb-1">Kirsch, I. (1995).</p>
            <a
              href="https://doi.org/10.1037/0022-006X.63.2.214"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1037/0022-006X.63.2.214
            </a>
          </CitationBlock>
          <p className="text-gray-700 leading-relaxed mb-2">
            Dans ce contexte, elle permet notamment :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700">
            <li>de diminuer les ruminations</li>
            <li>d&apos;apaiser la charge émotionnelle</li>
            <li>de faciliter le détachement</li>
            <li>de restaurer l&apos;estime de soi</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-6 max-md:text-center">
            Peut-on vraiment passer à autre chose après une rupture amoureuse ?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Oui, mais cela ne se fait pas par la volonté seule. Comme le
            souligne Rogers (1961), le changement repose sur l&apos;acceptation
            de l&apos;expérience vécue.
          </p>
          <CitationBlock>
            <p className="mb-1">Rogers, C. R. (1961).</p>
            <a
              href="https://psycnet.apa.org/record/1961-15042-000"
              className="text-vertSapin underline hover:no-underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://psycnet.apa.org/record/1961-15042-000
            </a>
          </CitationBlock>
          <p className="text-gray-700 leading-relaxed mb-2">Avec le temps :</p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700">
            <li>les souvenirs restent, mais ne font plus souffrir</li>
            <li>le lien émotionnel se transforme</li>
            <li>une nouvelle ouverture devient possible</li>
          </ul>
        </section>

        <div className="border-t border-gray-200 my-10" />

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 max-md:text-center text-left">
            Conclusion : sortir d’un deuil amoureux est un processus, pas une
            décision
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le deuil amoureux est une expérience profondément humaine. Les
            ruminations, le manque, ou même le fait de surveiller son ex sont
            des réactions normales. Elles ne traduisent pas une faiblesse, mais
            un <strong>attachement</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Avec un accompagnement adapté, notamment grâce à l&apos;hypnose, il
            est possible :
          </p>
          <ul className="list-disc list-inside space-y-2 font-medium text-gray-700 mb-4">
            <li>d&apos;apaiser cette période</li>
            <li>de se libérer progressivement</li>
            <li>de retrouver un équilibre émotionnel durable</li>
          </ul>
          <div className="bg-green-50 p-6 border-l-4 border-vertSapin">
            <p className="text-lg font-semibold text-green-800 mb-2">
              Un accompagnement pour avancer après une rupture ?
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
                href="/blog/crise-angoisse-hypnose-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Crises d&apos;angoisse : pourquoi l&apos;hypnose agit là où la volonté échoue
              </a>{" "}
              — La douleur du deuil amoureux peut déclencher des crises d&apos;angoisse — les mécanismes sont proches.
            </li>
            <li>
              →{" "}
              <a
                href="/blog/hypnose-stress-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Hypnose et stress : une réponse naturelle validée par la science
              </a>{" "}
              — Rupture et stress chronique vont souvent de pair. Comment l&apos;hypnose aide à désamorcer les deux.
            </li>
            <li>
              →{" "}
              <a
                href="/blog/insomnie-hypnose-lanvollon"
                className="text-vertSapin underline hover:no-underline font-medium"
              >
                Insomnie : et si l&apos;hypnose réapprenait le sommeil à votre cerveau ?
              </a>{" "}
              — Le deuil amoureux perturbe fréquemment le sommeil. L&apos;hypnose peut aider à récupérer.
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
              Beck, A. T. (1976).{" "}
              <a
                href="https://psycnet.apa.org/record/1976-28302-000"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://psycnet.apa.org/record/1976-28302-000
              </a>
            </li>
            <li>
              Bowlby, J. (1980).{" "}
              <a
                href="https://psycnet.apa.org/record/1980-50528-000"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://psycnet.apa.org/record/1980-50528-000
              </a>
            </li>
            <li>
              Fisher, H. E., et al. (2010).{" "}
              <a
                href="https://doi.org/10.1152/jn.00784.2009"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1152/jn.00784.2009
              </a>
            </li>
            <li>
              Kirsch, I. (1995).{" "}
              <a
                href="https://doi.org/10.1037/0022-006X.63.2.214"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1037/0022-006X.63.2.214
              </a>
            </li>
            <li>
              Kübler-Ross, E. (1969).{" "}
              <a
                href="https://doi.org/10.4324/9780203991417"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.4324/9780203991417
              </a>
            </li>
            <li>
              Rogers, C. R. (1961).{" "}
              <a
                href="https://psycnet.apa.org/record/1961-15042-000"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://psycnet.apa.org/record/1961-15042-000
              </a>
            </li>
            <li>
              Wegner, D. M. (1994).{" "}
              <a
                href="https://doi.org/10.1037/0033-295X.101.1.34"
                className="text-vertSapin underline hover:no-underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://doi.org/10.1037/0033-295X.101.1.34
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default DeuilAmoureuxHypnose;
