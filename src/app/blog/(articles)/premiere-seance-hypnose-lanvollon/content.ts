export type ArticleBlock =
  | { type: "h2" | "p"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string; priority?: boolean }
  | { type: "faq"; items: Array<{ question: string; answer: string[] }> }
  | { type: "cta" };

export const articleBlocks: ArticleBlock[] = [
  {
    "type": "p",
    "text": "Vous avez ouvert la page de rendez-vous, puis refermé l’onglet. Vous aimeriez être accompagné, mais vous ne savez pas très bien ce qui vous attend. Faudra-t-il raconter toute votre vie ? Fermer les yeux ? Ressentir quelque chose de particulier ? Ces questions ont leur place avant une première rencontre."
  },
  {
    "type": "image",
    "src": "/blog/premiere-seance-premier-echange.webp",
    "alt": "Yves Deniau écoute un visiteur au début d’une consultation, dans une scène illustrée.",
    "priority": true
  },
  {
    "type": "h2",
    "text": "L’essentiel en quelques mots"
  },
  {
    "type": "p",
    "text": "Une séance commence par un échange sur votre demande. L’expérience hypnotique se construit ensuite avec votre accord. Vous pouvez poser une question, signaler un inconfort ou demander une pause. Le premier objectif est de comprendre votre situation et de vérifier que l’accompagnement proposé vous convient."
  },
  {
    "type": "h2",
    "text": "Avant l’hypnose, clarifier ce qui vous amène"
  },
  {
    "type": "p",
    "text": "« Je veux aller mieux » est un point de départ parfaitement recevable. Pour avancer, il est utile de chercher ce que cela changerait dans une journée ordinaire : entrer dans une réunion plus sereinement, moins appréhender une soirée sans cigarette, retrouver un moment de repos."
  },
  {
    "type": "p",
    "text": "Vous n’avez pas besoin d’apporter une explication complète de votre difficulté. Quelques exemples récents peuvent suffire à ouvrir la discussion. Les prises en charge en cours, vos attentes et vos réserves font aussi partie de cet échange. Vous choisissez ce que vous souhaitez partager ; une première consultation n’impose pas de tout dévoiler."
  },
  {
    "type": "h2",
    "text": "Ce que l’on appelle « hypnose »"
  },
  {
    "type": "p",
    "text": "La définition proposée par Elkins et ses collègues décrit une attention concentrée et une capacité accrue à répondre à des suggestions. Il s’agit de propositions pour explorer des sensations, des images ou des façons de percevoir une situation. Cette définition ne décrit ni un sommeil ni un pouvoir exercé par une autre personne. [Lire la publication](https://pubmed.ncbi.nlm.nih.gov/25365125/)."
  },
  {
    "type": "p",
    "text": "En pratique, certaines personnes imaginent facilement un paysage. D’autres remarquent surtout leur respiration ou un changement dans la perception du temps. Une expérience discrète n’est pas une expérience ratée. L’important sera ce qu’elle apporte à votre objectif, et non son côté spectaculaire."
  },
  {
    "type": "h2",
    "text": "Le déroulement peut s’adapter à votre rythme"
  },
  {
    "type": "p",
    "text": "Le praticien peut vous inviter à porter votre attention sur un point, une sensation ou une image. Vous pouvez expliquer qu’une proposition ne vous convient pas. Garder les yeux ouverts, demander une autre formulation ou revenir à la conversation sont des possibilités à discuter."
  },
  {
    "type": "p",
    "text": "La fin de séance permet de reprendre vos repères et de faire le point. Qu’avez-vous observé ? Qu’aimeriez-vous approfondir ? Quel changement concret pourrait être surveillé ensuite ? Une sensation agréable sur le fauteuil ne suffit pas, à elle seule, à mesurer un résultat dans la vie quotidienne."
  },
  {
    "type": "image",
    "src": "/blog/premiere-seance-fin-de-seance.webp",
    "alt": "Un carnet, un stylo et un verre d’eau près d’un fauteuil."
  },
  {
    "type": "h2",
    "text": "Un avis sur la première rencontre"
  },
  {
    "type": "p",
    "text": "Christelle H. évoque sur Resalib une première séance positive, marquée par l’écoute et la confiance, le 3 septembre 2024. [Consulter l’avis](https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc?pr=4#reviews). Ce retour décrit son expérience personnelle."
  },
  {
    "type": "h2",
    "text": "Trois questions fréquentes"
  },
  {
    "type": "faq",
    "items": [
      {
        "question": "Dois-je préparer quelque chose ?",
        "answer": [
          "Notez ce qui vous gêne aujourd’hui, ce que vous avez déjà essayé et ce que vous espérez changer. Il n’y a pas d’exercice à réussir avant de venir."
        ]
      },
      {
        "question": "Et si je suis ému ?",
        "answer": [
          "Vous pouvez le dire et prendre votre temps. Une émotion forte ne constitue pas un objectif obligatoire de la séance."
        ]
      },
      {
        "question": "Le premier rendez-vous engage-t-il pour plusieurs séances ?",
        "answer": [
          "Le cadre et la suite doivent être discutés clairement. Vous pouvez demander comment seront évalués les progrès avant de décider."
        ]
      }
    ]
  },
  {
    "type": "h2",
    "text": "Préparer votre rencontre à Lanvollon"
  },
  {
    "type": "p",
    "text": "Yves Deniau reçoit à Lanvollon et propose également des consultations à distance. L’hypnose s’envisage selon votre demande et ne remplace pas les soins nécessaires."
  },
  {
    "type": "cta"
  }
];
