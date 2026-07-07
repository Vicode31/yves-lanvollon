// Avis patients (Google + Resalib) partagés entre la section "Retours patients"
// de la page d'accueil et les pages de soins dédiées.
// Le champ `themes` permet de rattacher un avis à un ou plusieurs soins :
// il n'est renseigné que lorsque l'avis évoque RÉELLEMENT la thématique.

export type ServiceTheme =
  | "stress-emotions"
  | "confiance-en-soi"
  | "performance"
  | "addictions"
  | "deuils-ruptures"
  | "troubles-alimentaires";

export type Testimonial = {
  quote: string;
  name: string;
  pdp: string;
  source: "google" | "resalib";
  themes?: ServiceTheme[];
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Yves Deniau est un excellent praticien, je me suis sentie accueillie, sincèrement écoutée, sans jugement et avec douceur. La séance s'est très bien déroulée et il a su me proposer, avec sa voix qui transporte, plusieurs exercices correspondants à mon besoin en prenant le temps nécessaire. J'avais déjà pratiqué l'hypnose avec un autre praticien et le décalage est foudroyant : Yves Deniau est vraiment sérieu et professionnel ! Je vous recommande totalement ce praticien.",
    name: "Rossi Rossi",
    pdp: "/pdp-google/R.png",
    source: "google",
  },
  {
    quote:
      "La séance avec M. Deniau a été très bénéfique pour moi. Sa voix douce et apaisante m'ont permis de me laisser aller pour bien travailler sur mon subconscient. Très à l'écoute de ma problématique, il a su m'accompagner pour surmonter mes angoisses. Je lui adresse encore un très grand merci Sophie",
    name: "Sophie T.",
    pdp: "/pdp-google/st.png",
    source: "resalib",
    themes: ["stress-emotions"],
  },
  {
    quote:
      "J’ai vécu ce matin une très belle séance d’hypnose en visio avec Monsieur Deniau. En cherchant l’origine d’un manque de confiance dans mes relations amoureuses, je suis remontée à une relation de jeunesse dont je n’aurai jamais soupçonnée les séquelles. Merci merci Yves pour votre accompagnement bienveillant. Votre douce voix a été effectivement un très bon guide pour moi.",
    name: "BLANDINE HOARAU",
    pdp: "/pdp-google/B.png",
    source: "google",
    themes: ["confiance-en-soi", "deuils-ruptures"],
  },
  {
    quote:
      "L’accueil de MR Deniau est chaleureux et bienveillant.La séance avec lui m’a permis d’expérimenter une voyage intérieur étonnant qui m’a fait avancer .",
    name: "Marie-Pierre M.",
    pdp: "/pdp-google/mp.png",
    source: "resalib",
  },
  {
    quote:
      "Un grand merci à Mr Deniau qui, par sa voix douce et particulièrement très enveloppante, par son écoute profonde et subtile, m'a guidé pour nettoyer et améliorer ma vision de l'avenir qui me freinait dans mes actions. Je vous recommande ce praticien que vous pouvez consulter en toute confiance. Merci encore.",
    name: "Val Tribbiani",
    pdp: "/pdp-google/V.png",
    source: "google",
    themes: ["performance", "confiance-en-soi"],
  },
  {
    quote:
      "Je me suis senti accueilli, écouté, accompagné. Une grande aide pour mon changement de comportement.",
    name: "Olivier L.",
    pdp: "/pdp-google/ol.png",
    source: "resalib",
    themes: ["addictions"],
  },
  {
    quote:
      "Yves Deniau m'a accompagné à plusieurs reprises pour traiter des problématiques personnelles et je le recommande vivement pour la qualité de son écoute, sa disponibilité et la façon dont il m'a permis de prendre conscience et dépasser mes points de blocage",
    name: "Catherine Le Moulec",
    pdp: "/pdp-google/C.png",
    source: "google",
    themes: ["confiance-en-soi", "performance"],
  },
  {
    quote:
      "J’ai été voir Monsieur Deniau pour un deuil difficile. Il a été très à l’écoute et grâce a son hypnose, j’ai pu progresser et aller de l’avant. Un grand merci !",
    name: "damien nocquard",
    pdp: "/pdp-google/D.png",
    source: "google",
    themes: ["deuils-ruptures"],
  },
  {
    quote:
      "Une passion pour l'humain qui transparait clairement pendant le rendez-vous.Je recommande.",
    name: "Delia F",
    pdp: "/pdp-google/DF.png",
    source: "google",
  },
  {
    quote:
      "Bonjour M.Deniau, suite au suivi que j’ai effectué il y a 8 mois pour perdre du poids, je réussis à garder le cap- je me sens beaucoup mieux - Je sens que la partie est gagnée pour moi. Encore merci à vous de votre soutien et de votre efficacité.",
    name: "Coline PIERRE",
    pdp: "/pdp-google/coline.png",
    source: "google",
    themes: ["troubles-alimentaires"],
  },
  {
    quote:
      "Après plus d’un an de séparation difficile, je n’arrivais toujours pas à tourner la page. J’avais tout essayé, mais rien ne semblait vraiment m’aider à avancer… jusqu’à ce que je découvre l’hypnose, merci pour votre aide précieuse",
    name: "Héloïse Rvr",
    pdp: "/pdp-google/heloise.png",
    source: "google",
    themes: ["deuils-ruptures"],
  },
  {
    quote:
      "C’est un monsieur au grand coeur, il aide à trouver la force que nous avons au fond de nous mais que n’arrivons pas toujours à faire sortir seul. Les séances sont toutes différentes mais tellement bénéfiques. Suite à un rendez-vous en octobre 2025",
    name: "Alcea L.",
    pdp: "/pdp-google/al.png",
    source: "resalib",
    themes: ["confiance-en-soi"],
  },
  {
    quote:
      "M.Deniau fait preuve d'une gentillesse et bienveillance sans égal. Il met parfaitement en confiance et est très à l'écoute pour des séances d'hypnose personnalisées et très efficaces. Je recommande sans hésiter !",
    name: "Simon Dournonsi",
    pdp: "/pdp-google/simon.png",
    source: "google",
  },
  {
    quote:
      "Je suis allé voir M.Deniau pour mon anxiété liée à différents sujets. Après plusieurs séances mon stress a nettement diminué et j'ai pu reprendre pleinement confiance en moi. Je recommande sans hésiter !",
    name: "Pierre",
    pdp: "/pdp-google/pierre.png",
    source: "google",
    themes: ["stress-emotions", "confiance-en-soi"],
  },
  {
    quote:
      "N’hésitez surtout pas vous n’avez rien à perdre, seulement à y gagner . C’est un monsieur formidable qui vous aidera bien plus que ce que vous ne pouvez l’imaginer ",
    name: "Tao R.",
    pdp: "/pdp-google/tao.png",
    source: "resalib",
  },
  {
    quote:
      "Ecoute, empathie, douceur, bienveillance, sourire ; en un mot belle personne.",
    name: "Monique V.",
    pdp: "/pdp-google/monique.png",
    source: "resalib",
  },
  {
    quote: "Merci pour les séances qui mon fait du bien",
    name: "Isabelle G.",
    pdp: "/pdp-google/isabelle.png",
    source: "resalib",
  },
  {
    quote:
      "Merci à vous Monsieur Deniau pour votre accueil chaleureux contribuant à instaurer dès le premier contact un climat de confiance et de lâcher prise. J’ai également beaucoup apprécié le message téléphonique qui a suivi la séance me rappelant les points essentiels à travailler pour vivre, enfin, en harmonie et en paix avec moi même. Je suis consciente du travail qui m’attends et je sais que votre accompagnement me sera utile et bénéfique. À très bientôt. Dany Laanstra ",
    name: "Dany L.",
    pdp: "/pdp-google/dany.png",
    source: "resalib",
    themes: ["confiance-en-soi"],
  },
  {
    quote:
      "Yves Deniau est d'un grande gentillesse, bienveillant et perspicace, nous avons hâte de constater les résultats.",
    name: "Nathalie J.",
    pdp: "/pdp-google/nathalie.png",
    source: "resalib",
  },
  {
    quote: "Franchement un praticien génial, je le recommande vivement.",
    name: "Eolia C.",
    pdp: "/pdp-google/eolia.png",
    source: "resalib",
  },
  {
    quote:
      "Un professionnel extrêmement bienveillant, dans l'écoute, très attentif à ses patients pour qu'ils se sentent bien et progressent  sur leur chemin. A consulter les yeux fermés 😉.",
    name: "Nathalie L.",
    pdp: "/pdp-google/nl.png",
    source: "resalib",
  },
  {
    quote:
      "Un rv chez Yves Deniau, c 'est une rencontre avec un homme de qualité,  bienveillant et à l'écoute. \
En tant qu'hypnotiseur : des décennies de tabac, deux séances et la cigarette est sortie de ma vie. Que dire si ce n'est que je suis très admirative de son talent. \
Merci Yves.",
    name: "Christine L.",
    pdp: "/pdp-google/cl.png",
    source: "resalib",
    themes: ["addictions"],
  },
  {
    quote:
      "Je recommande +++ \
Une personne bienveillante, douce et à l’écoute . \
Vraiment une belle personne . ",
    name: "Severine G.",
    pdp: "/pdp-google/sg.png",
    source: "resalib",
  },
  {
    quote:
      "Très bon accueil et contact très agréable. Mr DENIAU mets en confiance de manière très respectueuse. C'était un bon rendez-vous. ",
    name: "Eric L.",
    pdp: "/pdp-google/el.png",
    source: "resalib",
  },
  {
    quote:
      "Monsieur Deniau est très empathique, très compréhensif, et son accompagnement d'hypnose très doux et efficace. J'ai été en toute confiance et me suis sentie mieux rapidement.",
    name: "Dominique C.",
    pdp: "/pdp-google/dc.png",
    source: "resalib",
  },
  {
    quote: "Très sympathique et à l'écoute du patient. Je recommande ",
    name: "Alain R.",
    pdp: "/pdp-google/ar.png",
    source: "resalib",
  },
  {
    quote:
      "Très à l'écoute et sérieux. M. Deniau est un excellent praticien, doté d'une belle intelligence et d'un grand professionnalisme. Je suis persuadée qu'il peut m'apporter de l'aide sur mon cheminement et mes préoccupations actuelles... Je recommande ! ",
    name: "Myriam H.",
    pdp: "/pdp-google/mh.png",
    source: "resalib",
  },
  {
    quote:
      "Mr Deniau.  est très professionnelle ,je recommande ce Mr.  j ai  eu que 2 rdv malheureusement avec lui, se qui a été trop court pour moi pour pouvoir réellement m aider dans mon maletre ,car le temp étais compter pour moi ,ma date examen étais trop proche.  j ai évidement échouer car un stress plus plus trop présent.  malgré tout il ma orienter vers un confrère a lui .  et je suis de retour parti pour des consultations jusqua mon prochain et dernier rattrapage examen en début septembre et j espére cette fois ci l obtenir.  je reviendrais vers vous,  je vous souhaite un belle étéMr Deniau.  Mme poignand Sonia",
    name: "Sonia P.",
    pdp: "/pdp-google/sp.png",
    source: "resalib",
  },
];

export function getTestimonialsByTheme(theme: ServiceTheme): Testimonial[] {
  return testimonials.filter((t) => t.themes?.includes(theme));
}
