export type ArticleBlock =
  | { type: "h2" | "p"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string; priority?: boolean }
  | { type: "faq"; items: Array<{ question: string; answer: string[] }> }
  | { type: "cta" };

export const articleBlocks: ArticleBlock[] = [
  {
    "type": "p",
    "text": "Vous posez beaucoup de questions, vous aimez comprendre et vous avez tendance à observer ce qui se passe en vous. Alors, une idée vous retient : « Avec mon cerveau qui analyse tout, l’hypnose ne fonctionnera jamais. » Cette conclusion mérite d’être examinée avant de vous exclure de l’expérience."
  },
  {
    "type": "image",
    "src": "/blog/cartesien-yves-repond-aux-questions.webp",
    "alt": "Yves Deniau échange avec une visiteuse assise face à lui.",
    "priority": true
  },
  {
    "type": "h2",
    "text": "Réfléchir et vivre une expérience peuvent coexister"
  },
  {
    "type": "p",
    "text": "Vous pouvez être absorbé par un roman tout en sachant que les personnages sont inventés. Vous pouvez ressentir une émotion devant un film sans croire qu’il se déroule dans votre salon. Ces exemples ne sont pas des tests d’hypnotisabilité. Ils rappellent simplement qu’une expérience peut vous toucher alors que votre regard critique reste présent."
  },
  {
    "type": "image",
    "src": "/blog/cartesien-attention-et-lecture.webp",
    "alt": "Une personne lit un roman dans un fauteuil près d’une fenêtre."
  },
  {
    "type": "p",
    "text": "Vous n’avez donc pas à devenir crédule ou à faire semblant d’adhérer à une explication. Vous pouvez demander à quoi sert un exercice et dire qu’une formulation vous paraît étrange. Cette conversation aide à construire un cadre compréhensible."
  },
  {
    "type": "h2",
    "text": "Ce que la recherche permet de dire"
  },
  {
    "type": "p",
    "text": "La définition scientifique de l’hypnose met l’accent sur l’attention et les réponses aux suggestions, pas sur l’abandon du raisonnement. [Elkins et collègues, 2015](https://pubmed.ncbi.nlm.nih.gov/25365125/)."
  },
  {
    "type": "p",
    "text": "Une étude d’imagerie a observé des modifications de l’activité et des connexions entre certains réseaux cérébraux pendant l’hypnose. Elle ne permet pas de prédire vos résultats à partir de votre métier ou de votre tempérament. Un cerveau observé en laboratoire ne constitue pas une garantie d’amélioration clinique. [Jiang et collègues](https://pubmed.ncbi.nlm.nih.gov/27469596/)."
  },
  {
    "type": "h2",
    "text": "Le piège : vérifier sans arrêt si « ça marche »"
  },
  {
    "type": "p",
    "text": "Pendant un exercice, il peut être tentant de surveiller chaque sensation : « Suis-je assez détendu ? Est-ce que je visualise correctement ? » Cela peut rendre l’expérience inconfortable, comme lorsqu’on s’écoute parler au lieu de suivre une conversation."
  },
  {
    "type": "p",
    "text": "L’idée n’est pas de vous reprocher cette surveillance. Vous pouvez la nommer. Le praticien peut alors proposer un exercice plus simple, plus concret ou mieux adapté à votre manière d’explorer. Si les images mentales vous parlent peu, il est possible de discuter d’autres points d’attention. Il n’existe pas une sensation unique que tout le monde devrait produire."
  },
  {
    "type": "h2",
    "text": "À quoi pourrait ressembler un objectif réaliste ?"
  },
  {
    "type": "p",
    "text": "Au lieu de vouloir « enfin lâcher le contrôle », cherchez ce qui vous aiderait réellement. Rester présent pendant une prise de parole ? Faire une pause sans reprendre immédiatement une tâche ? Observer une inquiétude sans lui consacrer toute la soirée ?"
  },
  {
    "type": "p",
    "text": "Le travail peut porter sur cette situation précise. Vous n’avez pas besoin de modifier votre personnalité pour demander de l’aide. Et si l’approche ne vous convient pas, cela ne prouve ni un défaut de motivation ni un blocage mystérieux : le choix d’un autre accompagnement reste possible."
  },
  {
    "type": "h2",
    "text": "Un cadre où l’on peut poser ses questions"
  },
  {
    "type": "p",
    "text": "Eric L. décrit sur Resalib un accueil respectueux et une mise en confiance, le 19 mars 2026. [Lire son avis](https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc?pr=1#reviews). Il ne précise pas sa réceptivité à l’hypnose."
  },
  {
    "type": "h2",
    "text": "Vos questions"
  },
  {
    "type": "faq",
    "items": [
      {
        "question": "Dois-je réussir à faire le vide ?",
        "answer": [
          "Aucun vide mental parfait n’est requis. Vous pouvez remarquer une pensée et revenir à ce qui vous est proposé."
        ]
      },
      {
        "question": "Et si je ressens peu de choses ?",
        "answer": [
          "Décrivez-le simplement. Les sensations pendant l’exercice et les changements après la séance doivent être distingués."
        ]
      },
      {
        "question": "Faut-il croire à l’inconscient ?",
        "answer": [
          "Vous pouvez aborder la séance avec vos propres mots. L’accord sur l’objectif et sur le cadre compte davantage qu’un vocabulaire imposé."
        ]
      }
    ]
  },
  {
    "type": "h2",
    "text": "En parler avant de décider"
  },
  {
    "type": "p",
    "text": "Vous pouvez [contacter Yves Deniau à Lanvollon](https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc) pour exposer vos attentes et vos réserves. Une première discussion permet d’évaluer si cette démarche vous correspond."
  },
  {
    "type": "cta"
  }
];
