import { Brain, Candy, Heart, Pill, Timer } from "lucide-react";
import type { ComponentType } from "react";
import { TbCandle } from "react-icons/tb";
import type { ServiceTheme } from "./testimonials";

export const SITE_URL = "https://www.hypnotherapeute-lanvollon-plouha.fr";

export type RelatedArticle = {
  title: string;
  href: string;
};

export type Soin = {
  slug: string;
  theme: ServiceTheme;
  /** Titre court réutilisé sur la carte de la page d'accueil */
  cardTitle: string;
  cardDescription: string;
  icon: ComponentType<{ className?: string }>;
  heroImage: string;
  heroImageAlt: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Paragraphes d'introduction sous le H1 */
  intro: string[];
  forWhomTitle: string;
  forWhom: string[];
  howItHelpsTitle: string;
  howItHelps: { title: string; text: string }[];
  approachTitle: string;
  approach: string[];
  faq: { q: string; a: string }[];
  relatedTitle: string;
  related: RelatedArticle[];
};

export const soins: Soin[] = [
  {
    slug: "gestion-stress-emotions",
    theme: "stress-emotions",
    cardTitle: "Gestion des émotions",
    cardDescription:
      "Apprenez à gérer votre stress et votre anxiété pour retrouver sérénité et bien-être au quotidien. Surmontez vos doutes, vos phobies et vos peurs.",
    icon: Brain,
    heroImage: "/blog/hypnose-stress.png",
    heroImageAlt:
      "Hypnose pour gérer le stress et les émotions à Lanvollon",
    h1: "Hypnose pour gérer le stress, l'anxiété et les émotions à Lanvollon",
    metaTitle:
      "Hypnose stress & anxiété à Lanvollon | Yves Deniau, hypnothérapeute",
    metaDescription:
      "Stress, anxiété, phobies, peurs : l'hypnothérapie aide à apaiser le système nerveux et à retrouver la sérénité. Cabinet d'Yves Deniau à Lanvollon.",
    keywords: [
      "hypnose stress Lanvollon",
      "hypnose anxiété",
      "gestion des émotions",
      "hypnose phobie",
      "hypnothérapeute Lanvollon",
      "lâcher prise",
    ],
    intro: [
      "Le stress et l'anxiété ne sont pas une fatalité. Quand le mental tourne en boucle, que le corps reste en alerte et que les émotions débordent, l'hypnose offre une voie douce pour retrouver le calme — sans lutter, sans se forcer.",
      "À Lanvollon, j'accompagne des personnes qui veulent sortir d'un état de tension permanent, apaiser leurs peurs ou reprendre la main sur des émotions devenues envahissantes.",
    ],
    forWhomTitle: "Cet accompagnement est fait pour vous si…",
    forWhom: [
      "Vous vivez un stress chronique qui pèse sur votre sommeil, votre digestion ou votre humeur.",
      "Vous ressentez de l'anxiété, des ruminations ou une inquiétude diffuse difficile à calmer.",
      "Une phobie ou une peur précise (transports, examens, prise de parole, lieux…) limite votre quotidien.",
      "Vos émotions vous semblent trop intenses ou difficiles à réguler.",
    ],
    howItHelpsTitle: "Comment l'hypnose agit sur le stress et les émotions",
    howItHelps: [
      {
        title: "Apaiser le système nerveux",
        text: "L'état hypnotique favorise un basculement vers un calme physiologique réel : la respiration ralentit, le corps relâche la vigilance. Vous n'avez pas à « vous forcer à vous détendre » — c'est justement cet effort qui entretient la tension.",
      },
      {
        title: "Désamorcer les automatismes",
        text: "Le stress et l'anxiété reposent souvent sur des automatismes appris. L'hypnose permet de travailler à la source ces réflexes pour qu'une situation autrefois anxiogène cesse de déclencher la même réaction.",
      },
      {
        title: "Reprendre confiance dans ses ressources",
        text: "Au fil des séances, vous réapprenez que vous pouvez vous calmer par vous-même. L'auto-hypnose, enseignée en consultation, devient un outil que vous utilisez seul, au moment où vous en avez besoin.",
      },
    ],
    approachTitle: "Mon approche à Lanvollon",
    approach: [
      "Nous commençons par comprendre ce qui se joue précisément : les déclencheurs, ce que vit le corps, les pensées qui reviennent. Ensuite, le travail hypnotique vise à réguler l'activation, à transformer la relation aux situations stressantes et à installer des ressources de calme durables.",
      "Chaque séance est personnalisée. L'objectif n'est pas de masquer le symptôme, mais de modifier ce qui l'entretient pour que l'apaisement tienne dans la durée.",
    ],
    faq: [
      {
        q: "Combien de séances pour réduire mon stress ou mon anxiété ?",
        a: "Cela dépend de votre situation. Certaines personnes ressentent un apaisement dès les premières séances ; un travail de fond sur une anxiété installée demande généralement quelques séances, ajustées selon votre évolution.",
      },
      {
        q: "L'hypnose remplace-t-elle un suivi médical ?",
        a: "Non. L'hypnose est un accompagnement complémentaire. Elle ne remplace pas un avis médical ni un traitement en cours. En cas de trouble anxieux sévère, elle s'inscrit aux côtés de votre suivi médical.",
      },
      {
        q: "Vais-je perdre le contrôle pendant la séance ?",
        a: "Non. Vous restez conscient et acteur tout au long de la séance. L'hypnose thérapeutique respecte toujours votre volonté : vous ne ferez rien qui aille contre vous.",
      },
    ],
    relatedTitle: "Pour aller plus loin",
    related: [
      {
        title:
          "Hypnose et stress : une réponse naturelle validée par la science",
        href: "/blog/hypnose-stress-lanvollon",
      },
      {
        title:
          "Crises d'angoisse : pourquoi l'hypnose agit là où la volonté échoue",
        href: "/blog/crise-angoisse-hypnose-lanvollon",
      },
    ],
  },
  {
    slug: "confiance-en-soi",
    theme: "confiance-en-soi",
    cardTitle: "Confiance en Soi",
    cardDescription:
      "Développez une meilleure estime de vous-même et libérez-vous de vos blocages émotionnels.",
    icon: Heart,
    heroImage: "/blog/seance-hypnose.png",
    heroImageAlt:
      "Hypnose pour retrouver confiance en soi à Lanvollon",
    h1: "Hypnose pour la confiance en soi et l'estime de soi à Lanvollon",
    metaTitle:
      "Hypnose confiance en soi à Lanvollon | Yves Deniau, hypnothérapeute",
    metaDescription:
      "Manque de confiance, blocages, doute de soi : l'hypnothérapie aide à retrouver l'estime de soi et à se libérer de ses freins. Cabinet à Lanvollon.",
    keywords: [
      "hypnose confiance en soi Lanvollon",
      "estime de soi",
      "hypnose blocage",
      "manque de confiance",
      "hypnothérapeute Lanvollon",
    ],
    intro: [
      "Le manque de confiance en soi se loge partout : dans les relations, au travail, dans les choix que l'on n'ose pas faire. Il prend souvent racine dans des expériences anciennes qui ont laissé une trace.",
      "À Lanvollon, j'accompagne les personnes qui veulent se libérer de ce doute permanent et retrouver une relation apaisée avec elles-mêmes.",
    ],
    forWhomTitle: "Cet accompagnement est fait pour vous si…",
    forWhom: [
      "Vous doutez constamment de vous, de vos choix ou de votre valeur.",
      "Vous vous sentez bloqué dans votre vie personnelle ou professionnelle.",
      "Le regard des autres ou la peur du jugement vous freine.",
      "Vous portez des croyances limitantes installées depuis longtemps.",
    ],
    howItHelpsTitle: "Comment l'hypnose renforce la confiance en soi",
    howItHelps: [
      {
        title: "Remonter à l'origine du blocage",
        text: "L'hypnose permet d'explorer ce qui a fragilisé l'estime de soi — parfois une expérience ancienne dont on ne soupçonnait pas l'impact — pour en désamorcer la charge.",
      },
      {
        title: "Assouplir les croyances limitantes",
        text: "« Je n'y arriverai pas », « je ne suis pas à la hauteur » : ces phrases automatiques s'installent à un niveau inconscient. Le travail hypnotique aide à les transformer en une relation plus juste avec soi.",
      },
      {
        title: "Ancrer de nouvelles ressources",
        text: "En séance, on installe des appuis intérieurs sur lesquels vous pouvez vous reposer : un sentiment de sécurité, de légitimité, de capacité à agir.",
      },
    ],
    approachTitle: "Mon approche à Lanvollon",
    approach: [
      "Nous identifions ensemble où le manque de confiance se manifeste et ce qui l'alimente. Le travail hypnotique vise ensuite à apaiser les racines du doute et à construire une estime de soi plus stable.",
      "L'objectif n'est pas de plaquer une assurance artificielle, mais de vous reconnecter à vos ressources réelles, pour avancer plus librement.",
    ],
    faq: [
      {
        q: "Peut-on vraiment travailler la confiance en soi sous hypnose ?",
        a: "Oui. La confiance en soi repose en grande partie sur des automatismes et des croyances inconscientes. L'hypnose permet précisément d'agir à ce niveau, là où la seule volonté consciente peine souvent.",
      },
      {
        q: "En combien de temps voit-on des résultats ?",
        a: "Cela varie selon les personnes et l'ancienneté du blocage. Beaucoup ressentent un changement après quelques séances, le travail étant ajusté à votre rythme.",
      },
      {
        q: "Faut-il revivre des souvenirs douloureux ?",
        a: "Pas nécessairement, et jamais de façon brutale. L'hypnose permet de travailler en douceur, en respectant ce que vous êtes prêt à explorer.",
      },
    ],
    relatedTitle: "Pour aller plus loin",
    related: [
      {
        title: "Qu'est-ce que l'hypnose ?",
        href: "/blog/hypnose-definition-lanvollon",
      },
      {
        title: "Hypnose, conscience modifiée et libre arbitre",
        href: "/blog/hypnose-volonte-lanvollon",
      },
    ],
  },
  {
    slug: "amelioration-performance",
    theme: "performance",
    cardTitle: "Amélioration de la performance",
    cardDescription:
      "Surmonter vos barrières mentales pour améliorer vos performances.",
    icon: Timer,
    heroImage: "/blog/montfuji.png",
    heroImageAlt:
      "Hypnose pour améliorer ses performances à Lanvollon",
    h1: "Hypnose pour améliorer ses performances à Lanvollon",
    metaTitle:
      "Hypnose performance & préparation mentale à Lanvollon | Yves Deniau",
    metaDescription:
      "Sport, examens, prise de parole, objectifs professionnels : l'hypnose aide à dépasser les barrières mentales et à libérer votre potentiel. Lanvollon.",
    keywords: [
      "hypnose performance Lanvollon",
      "préparation mentale",
      "hypnose sport",
      "hypnose examen",
      "concentration",
      "hypnothérapeute Lanvollon",
    ],
    intro: [
      "Parfois, ce qui nous sépare de nos objectifs n'est pas le talent ni le travail, mais une barrière mentale : le stress de la performance, le manque de concentration, la peur de l'échec, le trac.",
      "À Lanvollon, j'accompagne sportifs, étudiants et professionnels qui veulent lever ces freins pour donner le meilleur d'eux-mêmes au bon moment.",
    ],
    forWhomTitle: "Cet accompagnement est fait pour vous si…",
    forWhom: [
      "Le stress ou le trac vous empêche d'exprimer votre vrai niveau (compétition, examen, entretien, prise de parole).",
      "Vous avez du mal à vous concentrer ou à rester focalisé sur la durée.",
      "La peur de l'échec ou la pression vous paralyse au moment décisif.",
      "Vous voulez ancrer une dynamique de réussite et dépasser un plafond.",
    ],
    howItHelpsTitle: "Comment l'hypnose soutient la performance",
    howItHelps: [
      {
        title: "Gérer la pression au moment clé",
        text: "L'hypnose aide à transformer le stress de performance en énergie utile, pour rester lucide et disponible quand l'enjeu monte.",
      },
      {
        title: "Renforcer la concentration",
        text: "Le travail hypnotique permet d'installer un état de focus, de réduire les distractions internes et de mieux mobiliser ses ressources sur la durée.",
      },
      {
        title: "Lever les blocages et la peur de l'échec",
        text: "Derrière une contre-performance se cache souvent une croyance ou une peur. L'hypnose permet de la désamorcer pour libérer votre potentiel.",
      },
    ],
    approachTitle: "Mon approche à Lanvollon",
    approach: [
      "Nous précisons d'abord votre objectif et ce qui vous freine concrètement. Le travail hypnotique vise ensuite à transformer le rapport à la pression, à renforcer la concentration et à ancrer un état de confiance que vous pouvez retrouver le jour J.",
      "L'auto-hypnose enseignée en séance vous donne un outil pour vous préparer seul, avant une échéance importante.",
    ],
    faq: [
      {
        q: "L'hypnose est-elle utile pour le sport ?",
        a: "Oui. La préparation mentale par l'hypnose est utilisée pour gérer le stress de compétition, renforcer la concentration et installer des automatismes de réussite, en complément de l'entraînement physique.",
      },
      {
        q: "Peut-on l'utiliser avant un examen ou un entretien ?",
        a: "Tout à fait. L'hypnose aide à apaiser le trac, à gérer le stress anticipatoire et à mobiliser ses ressources au moment voulu.",
      },
      {
        q: "Combien de séances avant une échéance ?",
        a: "Idéalement, mieux vaut anticiper et prévoir quelques séances avant la date clé, afin d'installer les ressources et de pratiquer l'auto-hypnose.",
      },
    ],
    relatedTitle: "Pour aller plus loin",
    related: [
      {
        title: "Qu'est-ce que l'hypnose ?",
        href: "/blog/hypnose-definition-lanvollon",
      },
      {
        title:
          "Hypnose et stress : une réponse naturelle validée par la science",
        href: "/blog/hypnose-stress-lanvollon",
      },
    ],
  },
  {
    slug: "addictions",
    theme: "addictions",
    cardTitle: "Addictions",
    cardDescription:
      "Addictions aux jeux, à la nourriture, au tabac, à l'alcool ou autres substances. L'hypnose vous aide à vous libérer de ces dépendances.",
    icon: Pill,
    heroImage: "/blog/hypnotherapeute-tabac.png",
    heroImageAlt:
      "Hypnose pour se libérer des addictions à Lanvollon",
    h1: "Hypnose pour se libérer des addictions à Lanvollon",
    metaTitle:
      "Hypnose addictions (tabac, alcool, jeux) à Lanvollon | Yves Deniau",
    metaDescription:
      "Tabac, alcool, jeux, écrans, substances : l'hypnothérapie agit sur les mécanismes inconscients de la dépendance pour vous aider à vous libérer. Lanvollon.",
    keywords: [
      "hypnose addiction Lanvollon",
      "hypnose tabac",
      "hypnose alcool",
      "hypnose arrêter de fumer",
      "dépendance",
      "hypnothérapeute Lanvollon",
    ],
    intro: [
      "Une addiction n'est pas un simple manque de volonté. Elle est à la fois physique, psychologique et comportementale, entretenue par des automatismes inconscients. C'est précisément sur ces mécanismes que l'hypnose agit.",
      "À Lanvollon, j'accompagne les personnes qui veulent se libérer du tabac, de l'alcool, des jeux, des écrans ou d'autres dépendances.",
    ],
    forWhomTitle: "Cet accompagnement est fait pour vous si…",
    forWhom: [
      "Vous voulez arrêter de fumer durablement, sans remplacer une dépendance par une autre.",
      "Vous cherchez à reprendre le contrôle sur l'alcool, les jeux ou les écrans.",
      "Vous avez déjà essayé d'arrêter par la volonté seule, sans résultat durable.",
      "Vous voulez agir sur les déclencheurs et les automatismes, pas seulement sur le symptôme.",
    ],
    howItHelpsTitle: "Comment l'hypnose agit sur les addictions",
    howItHelps: [
      {
        title: "Cibler les automatismes inconscients",
        text: "L'hypnose travaille sur les mécanismes qui entretiennent l'envie : les associations, les déclencheurs, les routines. C'est là que se joue la dépendance, bien plus que dans la seule volonté.",
      },
      {
        title: "Désamorcer les déclencheurs",
        text: "Le stress, l'ennui, certaines situations sociales déclenchent l'envie. Le travail hypnotique aide à dissocier ces moments du besoin de consommer.",
      },
      {
        title: "Renforcer la motivation profonde",
        text: "L'hypnose reconnecte à vos raisons réelles d'arrêter et installe une dynamique de changement qui tient dans le temps.",
      },
    ],
    approachTitle: "Mon approche à Lanvollon",
    approach: [
      "Nous explorons d'abord votre dépendance : son histoire, ses déclencheurs, ce qu'elle apporte et ce qu'elle coûte. Le travail hypnotique vise ensuite à défaire les automatismes et à renforcer votre motivation, pour une libération durable.",
      "L'hypnose ne se substitue pas à un accompagnement médical en cas de dépendance sévère (notamment à l'alcool ou à certaines substances), où un sevrage doit être encadré médicalement.",
    ],
    faq: [
      {
        q: "Combien de séances pour arrêter de fumer ?",
        a: "Pour le tabac, l'accompagnement tient souvent en quelques séances, parfois moins. Le nombre exact dépend de votre histoire avec la cigarette et de vos déclencheurs.",
      },
      {
        q: "L'hypnose fonctionne-t-elle pour l'alcool ou les jeux ?",
        a: "Oui, l'hypnose agit sur les mécanismes communs à toutes les dépendances. Pour l'alcool, elle s'inscrit en complément d'un suivi médical lorsque le sevrage doit être encadré.",
      },
      {
        q: "Que se passe-t-il si l'envie revient ?",
        a: "Le travail inclut la gestion des déclencheurs et, si besoin, l'auto-hypnose pour faire face aux moments de tentation. Un ajustement en séance reste possible.",
      },
    ],
    relatedTitle: "Pour aller plus loin",
    related: [
      {
        title: "L'hypnose pour arrêter de fumer",
        href: "/blog/sevrage-tabac-lanvollon",
      },
      {
        title:
          "Combien de séances d'hypnothérapie pour arrêter le tabac ?",
        href: "/blog/hypnose-tabac-lanvollon",
      },
    ],
  },
  {
    slug: "deuils-ruptures",
    theme: "deuils-ruptures",
    cardTitle: "Les deuils et ruptures",
    cardDescription:
      "L'hypnose aide à surmonter les deuils maternel, paternel, fraternel, périnatal… Les ruptures amoureuses, amicales, professionnelles.",
    icon: TbCandle,
    heroImage: "/blog/deuil-amoureux.png",
    heroImageAlt:
      "Hypnose pour surmonter un deuil ou une rupture à Lanvollon",
    h1: "Hypnose pour surmonter un deuil ou une rupture à Lanvollon",
    metaTitle:
      "Hypnose deuil & rupture à Lanvollon | Yves Deniau, hypnothérapeute",
    metaDescription:
      "Deuil d'un proche, rupture amoureuse, séparation : l'hypnothérapie accompagne le processus de deuil pour avancer et se reconstruire. Cabinet à Lanvollon.",
    keywords: [
      "hypnose deuil Lanvollon",
      "hypnose rupture amoureuse",
      "surmonter une séparation",
      "deuil périnatal",
      "hypnothérapeute Lanvollon",
    ],
    intro: [
      "Perdre un être cher ou traverser une rupture laisse une douleur qui semble parfois impossible à dépasser. Quand le temps ne suffit pas, que la peine reste figée ou que l'on n'arrive pas à « tourner la page », l'hypnose peut accompagner le processus de deuil.",
      "À Lanvollon, j'accompagne avec douceur les personnes confrontées à un deuil — d'un proche, périnatal — ou à une rupture amoureuse, amicale ou professionnelle.",
    ],
    forWhomTitle: "Cet accompagnement est fait pour vous si…",
    forWhom: [
      "Vous traversez le deuil d'un proche et la douleur reste vive ou figée.",
      "Une rupture amoureuse ou une séparation vous empêche d'avancer.",
      "Vous ruminez, vous restez accroché au passé, vous n'arrivez pas à tourner la page.",
      "Vous portez un deuil périnatal ou une perte difficile à mettre en mots.",
    ],
    howItHelpsTitle: "Comment l'hypnose accompagne le deuil et la rupture",
    howItHelps: [
      {
        title: "Apaiser la charge émotionnelle",
        text: "L'hypnose aide à alléger l'intensité de la douleur, non pour oublier, mais pour que le souvenir cesse d'être uniquement souffrance.",
      },
      {
        title: "Permettre le cheminement",
        text: "Le travail hypnotique soutient les étapes naturelles du deuil, en aidant à dénouer ce qui reste bloqué et à retrouver un mouvement vers l'avant.",
      },
      {
        title: "Se reconstruire",
        text: "Au-delà de la perte, l'hypnose aide à se reconnecter à ses ressources, à donner une place apaisée au passé et à se réinvestir dans le présent.",
      },
    ],
    approachTitle: "Mon approche à Lanvollon",
    approach: [
      "Le deuil et la rupture demandent une grande délicatesse. Nous avançons à votre rythme, dans un cadre sécurisant et sans jugement. Le travail hypnotique vise à apaiser la douleur, à accompagner le cheminement et à vous aider à vous reconstruire.",
      "L'objectif n'est jamais d'effacer la personne ou la relation, mais de transformer la relation à la perte pour pouvoir continuer à vivre.",
    ],
    faq: [
      {
        q: "L'hypnose va-t-elle me faire oublier la personne ?",
        a: "Non. Il ne s'agit pas d'oublier, mais d'apaiser la douleur pour que le souvenir puisse trouver une place plus sereine. L'attachement et la mémoire sont respectés.",
      },
      {
        q: "Au bout de combien de temps après la perte peut-on consulter ?",
        a: "Il n'y a pas de règle stricte. On consulte souvent lorsque la douleur reste figée ou que l'on n'arrive pas à avancer malgré le temps écoulé.",
      },
      {
        q: "L'hypnose convient-elle aussi à une rupture amoureuse ?",
        a: "Oui. Une rupture s'apparente à un deuil. L'hypnose aide à dépasser le manque, les ruminations et à se reconstruire après une séparation.",
      },
    ],
    relatedTitle: "Pour aller plus loin",
    related: [
      {
        title:
          "Deuil amoureux : surmonter une rupture durablement grâce à l'hypnose",
        href: "/blog/deuil-amoureux-hypnose-lanvollon",
      },
    ],
  },
  {
    slug: "troubles-alimentaires",
    theme: "troubles-alimentaires",
    cardTitle: "Troubles alimentaires",
    cardDescription: "Addiction alimentaire, perte de poids…",
    icon: Candy,
    heroImage: "/blog/sucre-hypnose.png",
    heroImageAlt:
      "Hypnose pour les troubles alimentaires et la perte de poids à Lanvollon",
    h1: "Hypnose pour les troubles alimentaires et la perte de poids à Lanvollon",
    metaTitle:
      "Hypnose perte de poids & troubles alimentaires à Lanvollon | Yves Deniau",
    metaDescription:
      "Grignotage, compulsions, envies de sucre, perte de poids : l'hypnothérapie agit sur la relation émotionnelle à la nourriture. Cabinet à Lanvollon.",
    keywords: [
      "hypnose perte de poids Lanvollon",
      "hypnose troubles alimentaires",
      "hypnose sucre",
      "grignotage compulsif",
      "hypnothérapeute Lanvollon",
    ],
    intro: [
      "Notre relation à la nourriture est rarement seulement une affaire de volonté. Grignotage, compulsions, envies de sucre, alimentation émotionnelle : derrière ces comportements, il y a souvent des émotions, du stress, des automatismes inconscients.",
      "À Lanvollon, j'accompagne les personnes qui veulent retrouver une relation apaisée à l'alimentation et soutenir durablement une perte de poids.",
    ],
    forWhomTitle: "Cet accompagnement est fait pour vous si…",
    forWhom: [
      "Vous grignotez ou mangez sous le coup des émotions ou du stress.",
      "Vous luttez contre des compulsions ou des envies de sucre difficiles à maîtriser.",
      "Vous enchaînez les régimes sans résultat durable (effet yo-yo).",
      "Vous voulez perdre du poids en travaillant la cause, pas seulement l'assiette.",
    ],
    howItHelpsTitle: "Comment l'hypnose agit sur l'alimentation",
    howItHelps: [
      {
        title: "Travailler la cause émotionnelle",
        text: "L'hypnose aide à comprendre et à apaiser ce que la nourriture vient combler : stress, ennui, émotions non digérées. On agit sur le besoin, pas seulement sur le comportement.",
      },
      {
        title: "Désamorcer les compulsions et les envies",
        text: "Le travail hypnotique permet de dissocier les déclencheurs de l'envie irrépressible, pour retrouver une liberté de choix face à la nourriture.",
      },
      {
        title: "Soutenir une perte de poids durable",
        text: "En modifiant la relation à l'alimentation en profondeur, l'hypnose aide à installer de nouveaux automatismes et à « garder le cap » dans le temps.",
      },
    ],
    approachTitle: "Mon approche à Lanvollon",
    approach: [
      "Nous explorons votre relation à la nourriture : les moments de craquage, les émotions associées, les automatismes. Le travail hypnotique vise ensuite à apaiser ce qui pousse à manger sans faim et à reconstruire une relation sereine à l'alimentation.",
      "L'hypnose ne remplace pas un suivi médical ou nutritionnel, en particulier en cas de trouble du comportement alimentaire avéré (anorexie, boulimie), qui nécessite une prise en charge pluridisciplinaire.",
    ],
    faq: [
      {
        q: "L'hypnose fait-elle maigrir directement ?",
        a: "L'hypnose n'est pas un régime. Elle agit sur la relation émotionnelle et comportementale à la nourriture, ce qui soutient une perte de poids durable et limite l'effet yo-yo.",
      },
      {
        q: "Cela fonctionne-t-il sur les envies de sucre ?",
        a: "Oui. Les compulsions de sucre reposent souvent sur des mécanismes émotionnels et automatiques sur lesquels l'hypnose peut agir efficacement.",
      },
      {
        q: "L'hypnose convient-elle à l'anorexie ou la boulimie ?",
        a: "Ces troubles nécessitent une prise en charge médicale pluridisciplinaire. L'hypnose peut alors être un soutien complémentaire, jamais un substitut au suivi médical.",
      },
    ],
    relatedTitle: "Pour aller plus loin",
    related: [
      {
        title: "Sucre et hypnose : et si votre cerveau pouvait s'en libérer ?",
        href: "/blog/sucre-hypnose-lanvollon",
      },
    ],
  },
];

export function getSoinBySlug(slug: string): Soin | undefined {
  return soins.find((s) => s.slug === slug);
}
