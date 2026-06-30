import { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Hypnothérapie à Saint-Brieuc | Yves Deniau",
  description:
    "Articles sur l'hypnothérapie par Yves Deniau, hypnothérapeute à Saint-Brieuc : stress, tabac, phobies, deuil amoureux, crises d'angoisse.",
  alternates: {
    canonical: "https://www.hypnose-saintbrieuc.fr/blog",
  },
};

const blogPosts = [
  {
    id: 1,
    title: "Qu'est ce que l'hypnose ?",
    description:
      "Approche douce qui permet de dialoguer avec votre inconscient, l'hypnose peut apporter une réponse à vos maux.",
    date: "27 janv. 2024",
    readTime: "3 min de lecture",
    url: "/hypnose-definition-saint-brieuc",
    image: "/blog/montre-gousset.png",
    alt: "Hypnose et définition",
  },
  {
    id: 2,
    title:
      " Hypnose, Conscience Modifiée et Éthique à Saint-Brieuc : Ce que Révèle la Science",
    description:
      "Découvrez les vérités scientifiques sur la conscience modifiée et pourquoi l'hypnose thérapeutique respecte toujours le libre arbitre du patient.",
    date: "3 mars 2024",
    readTime: "4 min de lecture",
    url: "/hypnose-volonte-saint-brieuc",
    image: "/blog/irm-hypnose.png",
    alt: "Hypnose Saint-Brieuc",
  },
  {
    id: 3,
    title: "L'hypnose pour arrêter de fumer",
    description:
      "Explorez des méthodes innovantes pour atteindre un état de relaxation profonde et durable.",
    date: "15 juin 2024",
    readTime: "5 min de lecture",
    url: "/sevrage-tabac-saint-brieuc",
    image: "/blog/arret-tabac.png",
    alt: "Hypnose et arret du tabac",
  },
  {
    id: 4,
    title: "Hypnothérapie vs Hypnose de Spectacle : Comprendre les Différences",
    description:
      "L'hypnose est un terme qui évoque souvent des images de pendules oscillants, de personnes endormies sur scène ou de transformations spectaculaires. Cependant, il est essentiel de distinguer l'hypnose utilisée à des fins thérapeutiques de celle employée pour le divertissement. ",
    date: "20 sept. 2024",
    readTime: "5 min de lecture",
    url: "/hypnose-spectacle-saint-brieuc",
    image: "/blog/hypnose-spectacle.png",
    alt: "Hypnose de spectacle et thérapeutique",
  },
  {
    id: 5,
    title: "Hypnose et stress : une réponse naturelle validée par la science",
    description:
      "Le stress, ce mal du siècle, s’immisce dans toutes les sphères de notre vie. Il affecte notre sommeil, notre concentration, notre humeur, notre digestion, et bien souvent notre santé à long terme. Mais face à l’arsenal de solutions proposées – médicaments, yoga, méditation, sophrologie – une méthode continue de se démarquer par son efficacité et sa douceur : l’hypnose.",
    date: "7 janv. 2025",
    readTime: "5 min de lecture",
    url: "/hypnose-stress-saint-brieuc",
    image: "/blog/hypnose-stress-bg.png",
    alt: "Hypnose et Stress",
  },
  {
    id: 6,
    title:
      "Combien de séances sont nécessaires pour améliorer sa consommation de tabac grâce à l'hypnothérapie ?",
    description:
      " Arrêter de fumer est l'un des défis personnels les plus difficiles que de nombreux fumeurs souhaitent relever. La dépendance au tabac est à la fois physique, psychologique et comportementale. Si les substituts nicotiniques agissent surtout sur le plan physiologique,l'hypnothérapie cible quant à elle les mécanismes inconscients quientretiennent l'envie de fumer.",
    date: "15 fev. 2025",
    readTime: "3 min de lecture",
    url: "/hypnose-tabac-saint-brieuc",
    image: "/blog/dessin-tabac.png",
    alt: "Hypnose arrêt du tabac",
  },
  {
    id: 7,
    title:
      "Deuil amoureux : comment surmonter une rupture amoureuse et réussir à passer à autre chose durablement grâce à l'hypnose",
    description:
      "Rupture, ruminations, manque : comprendre le deuil amoureux, ce que disent la neuroscience et l'attachement, et comment l'hypnose peut aider à se reconstruire durablement.",
    date: "21 mars 2026",
    readTime: "12 min de lecture",
    url: "/deuil-amoureux-hypnose-saint-brieuc",
    image: "/blog/coeur-deuil-amoureux.png",
    alt: "Infographie des étapes du deuil amoureux",
  },
  {
    id: 8,
    title:
      "Crises d'angoisse : pourquoi l'hypnose agit là où la volonté échoue",
    description:
      "Crises d'angoisse, attaques de panique, hypervigilance : comprendre ce que dit la neuroscience et pourquoi l'hypnose peut aider à apaiser durablement le système nerveux.",
    date: "8 mai 2026",
    readTime: "14 min de lecture",
    url: "/crise-angoisse-hypnose-saint-brieuc",
    image: "/blog/comment-cerveau-fabrique-crise-angoisse.png",
    alt: "Schéma : comment le cerveau fabrique une crise d'angoisse",
  },
  {
    id: 9,
    title:
      "Sucre et hypnose : et si votre cerveau pouvait enfin s'en libérer ?",
    description:
      "Envies de sucre, compulsions, grignotage émotionnel : comprendre ce que dit la neuroscience et pourquoi l'hypnose peut aider à modifier durablement la relation au sucre.",
    date: "15 mai 2026",
    readTime: "23 min de lecture",
    url: "/sucre-hypnose-saint-brieuc",
    image: "/blog/sucre-hypnose.png",
    alt: "Hypnose et sucre : se libérer des envies compulsives",
  },
  {
    id: 10,
    title:
      "Insomnie : et si l'hypnose réapprenait le sommeil à votre cerveau ?",
    description:
      "Insomnie chronique, hyperéveil, ruminations nocturnes : comprendre ce que dit la neuroscience et pourquoi l'hypnose peut aider le cerveau à retrouver le sommeil durablement.",
    date: "7 juin 2026",
    readTime: "12 min de lecture",
    url: "/insomnie-hypnose-saint-brieuc",
    image: "/blog/hypnose-reaprenait-sommeil.png",
    alt: "Insomnie et hypnose : réapprendre le sommeil à son cerveau",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen px-6 py-12 mx-auto bg-linear-to-tr from-vertSapin to-green-50 lg:px-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link href={`/blog${post.url}`} key={post.id}>
            <Card className="h-full pt-0 overflow-hidden transition-shadow duration-300 cursor-pointer hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.alt}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-1">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage
                      src="/yves-deniau.jpg"
                      alt="Hypnothérapeute Saint-Brieuc"
                    />
                    <AvatarFallback>YD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Yves DENIAU
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {post.date} • {post.readTime}
                    </p>
                  </div>
                </div>
                <CardTitle className="mt-4 text-xl line-clamp-2 hover:text-primary ">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2">
                  {post.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
