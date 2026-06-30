import { gotu } from "@/app/font";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Question() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div id="questions" className="bg-gray-50 pb-24">
      <h4
        data-aos="zoom-in-left"
        className={`text-4xl uppercase text-gray-900 font-medium text-center pt-4 mb-16 ${gotu.className}`}
      >
        Questions fréquentes
      </h4>
      <Accordion
        type="single"
        collapsible
        className=" w-10/12 lg:w-3/5 mx-auto flex flex-col gap-6"
      >
        <AccordionItem
          value="item-1"
          className="bg-vertSapin text-white rounded-3xl"
        >
          <AccordionTrigger className="p-6 text-xl">
            Comment se déroule une consultation d&apos;hypnose et quelle est sa
            durée?
          </AccordionTrigger>
          <AccordionContent className="p-6 text-lg">
            <p>
              La première séance dure généralement 1h30. Elle nous permet de
              faire connaissance, d&apos;explorer votre situation et
              d&apos;aborder la problématique qui vous amène, afin que je puisse
              ensuite vous accompagner au plus près de vos besoins.
            </p>
            <br></br>

            <p>
              Les séances suivantes durent environ 1 heure. Elles débutent par
              un temps d’échange pour faire le point sur votre évolution, puis
              se poursuivent par un accompagnement en hypnose adapté à vos
              besoins du moment. Chaque séance est personnalisée en fonction de
              votre rythme et de vos objectifs. Le nombre de séances varie selon
              la situation : 2 à 3 séances peuvent suffire, mais un suivi plus
              long peut être envisagé si nécessaire.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="bg-vertSapin text-white rounded-3xl"
        >
          <AccordionTrigger className="p-6 text-xl">
            En visioconférence, comment ça marche ?
          </AccordionTrigger>
          <AccordionContent className="p-6 text-lg">
            <p>
              Il faut une connexion internet, pas forcément puissante mais
              stable, une webcam et des écouteurs.{" "}
            </p>
            <br></br>
            <p>
              Aucun logiciel n&apos;est à installer. Après avoir réservé votre
              séance, vous recevez à l&apos;avance un lien pour vous connecter à
              la séance à venir.
            </p>
            <br></br>
            <p>
              Reste à trouver une pièce dans laquelle vous vous sentirez bien
              installé.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="bg-vertSapin text-white rounded-3xl"
        >
          <AccordionTrigger className="p-6 text-xl">
            Comment fonctionne l&apos;hypnose Ericksonienne ?
          </AccordionTrigger>
          <AccordionContent className="p-6 text-lg">
            Développée par Milton Erickson, elle repose sur des suggestions
            indirectes et un langage métaphorique. L&apos;approche est plus
            douce et collaborative, s&apos;adaptant au patient pour accéder à
            son inconscient de manière subtile. L&apos;hypnose ericksonienne est
            souvent utilisée dans un cadre thérapeutique.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="bg-vertSapin text-white rounded-3xl"
        >
          <AccordionTrigger className="p-6 text-xl">
            Un hypnothérapeute peut-il me faire perdre le contrôle ?
          </AccordionTrigger>
          <AccordionContent className="p-6 text-lg">
            L&apos;hypnose que je pratique est à visée thérapeutique . Au
            contraire, dans l&apos;accompagnement que je vous propose, vous
            serez dans un état modifié de conscience mais vous resterez
            parfaitement conscient, je ne pourrai donc en aucun cas vous faire
            faire quelque chose contre votre volonté. Votre inconscient en est
            le gardien.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          className="bg-vertSapin text-white rounded-3xl"
        >
          <AccordionTrigger className="p-6 text-xl">
            Sommes-je tous réceptifs à l&apos;hypnose?
          </AccordionTrigger>
          <AccordionContent className="p-6 text-lg">
            La réponse est oui. L’hypnose est un état naturel que nous vivons
            tous quotidiennement et même plusieurs fois par jour (lorsqu&apos;on
            est absorbé par un film ou un livre par exemple). On lui donne le
            nom de rêveries ou on lui attribue l’expression « être dans la Lune
            ».
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-6"
          className="bg-vertSapin text-white rounded-3xl"
        >
          <AccordionTrigger className="p-6 text-xl">
            Qu&apos;est ce que l&apos;hypnose peut guérir ?
          </AccordionTrigger>
          <AccordionContent className="p-6 text-lg">
            Elle agit sur la douleur chronique, les troubles fonctionnels
            intestinaux, la fibromyalgie, l&apos;anxiété, la dépression, les
            psycho-traumatismes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
