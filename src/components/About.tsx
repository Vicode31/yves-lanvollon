"use client";
import { gotu } from "@/app/font";
import { push } from "@socialgouv/matomo-next";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import ButtonRDV from "./ButtonRDV";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const handleConversion = () => {
    push(["trackEvent", "button", "click", "RDV à propos"]);
    window.location.href =
      "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";
  };
  return (
    <section
      id="apropos"
      className="py-16 md:py-24 md:pt-32 bg-white scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:gap-32">
          <div className="flex flex-col items-center gap-8">
            <Image
              width={400}
              height={400}
              data-aos="zoom-in-right"
              src="/yves-deniau.jpg"
              alt="Yves Deniau hypnothérapeute à Lanvollon"
              className="rounded-lg shadow-lg max-lg:w-3/4"
            />
            <h2
              data-aos="fade-up"
              className={`text-xl ${gotu.className} text-vertSapin text-center`}
            >
              Yves DENIAU Hypnothérapeute
            </h2>
            <ButtonRDV onClick={handleConversion} />
          </div>

          <div className="max-lg:mt-12 max-lg:px-5 text-justify lg:w-3/5">
            <h2 className={`text-4xl ${gotu.className} text-vertSapin mb-6`}>
              Mon Parcours pour devenir Hypnothérapeute
            </h2>
            <section className="text-gray-600 text-lg flex flex-col gap-6">
              {" "}
              <p>
                Après plusieurs années dans le domaine agricole, j&apos;ai
                découvert l’hypnose lors d’une séance personnelle. J&apos;ai
                trouvé cette façon de travailler incroyable. Cette technique est
                une parenthèse, une bulle hors du temps. Elle réunit le calme,
                l’écoute, l’ouverture de l’imagination et un travail intérieur
                puissant, très puissant.
              </p>
              <p>
                À l&apos;image du travail de la terre préparer le sol, semer,
                soigner, entretenir, tailler si nécessaire vient ensuite le
                moment tant attendu : récolter les fruits de ses efforts.
                C&apos;est ce chemin-là que je souhaite vous proposer. Un qui
                vous permette, à votre tour, de vous aligner avec vous-même,
                solidement enraciné dans votre propre terrain, votre propre vie.
                Quels que soient les aléas, l&apos;objectif est de la vivre
                pleinement, à votre rythme, en accord avec ce qui fait sens pour
                vous.
              </p>
              <p>
                Ma méthode s&apos;appuie sur l&apos;hypnose Ericksonienne qui
                m&apos;a été enseignée à l&apos;{" "}
                <a href="https://www.arche-hypnose.com/" className="underline">
                  {" "}
                  ARCHE
                </a>
                , l&apos;école d&apos;hypnose de référence en France depuis 20
                ans. Un apprentissage basé sur l&apos;expérience et la pratique.
                Cet enseignement consiste à ce que le patient soit acteur de sa
                guérison, car il en a le pouvoir.
              </p>
              <p>
                J’ai validé mon niveau de Praticien ce qui me permet d’exercer
                et de vous accueillir aujourd’hui dans mon Cabinet de
                Lanvollon (22). Je suis membre du{" "}
                <a href="https://www.snhypnose.fr/" className="underline">
                  {" "}
                  Syndicat National des Hypnothérapeutes
                </a>{" "}
                (SNH) qui vous garantit sérieux et professionnalisme.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
