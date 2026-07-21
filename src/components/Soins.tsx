import { gotu } from "@/app/font";
import { soins } from "@/data/soins";
import { push } from "@socialgouv/matomo-next";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ButtonRDV from "./ButtonRDV";

export default function Soins() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  const handleConversion = () => {
    push(["trackEvent", "button", "click", "RDV tarif"]);
    window.location.href =
      "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";
  };
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-linear-to-b from-green-50 to-gray-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-[2.75rem] ${gotu.className} text-center mb-12`}
        >
          Mes Soins d&apos;hypnothérapeute
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-lg:mx-4">
          {soins.map((soin, index) => {
            const Icon = soin.icon;
            return (
              <Link
                key={soin.slug}
                href={`/soins/${soin.slug}`}
                data-aos={index < 3 ? "fade-right" : "fade-left"}
                className="group bg-white p-6 rounded-lg shadow-sm transition-shadow hover:shadow-xl"
              >
                <Icon className="h-12 w-12 text-vertSapin mb-4" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-vertSapin">
                  {soin.cardTitle}
                </h3>
                <p className="text-gray-600">{soin.cardDescription}</p>
                <span className="mt-4 inline-block text-sm font-medium text-vertSapin">
                  En savoir plus →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center my-16 mx-7" data-aos="fade-up">
        <p
          className={`text-center text-2xl lg:text-3xl text-green-700 ${gotu.className}`}
        >
          Mon crédo : Être votre voix pour retrouver votre voie
        </p>
      </div>
      <p
        className={`text-center mt-12 text-4xl text-gray-900 ${gotu.className} `}
      >
        Honnoraires :
      </p>
      <ul className="text-center mt-4 text-xl text-gray-900">
        <li>Adulte : 70€</li>
        <li> Enfants et étudiants : 60€</li>
        <li>Règlements : espèces ou chèque</li>
      </ul>
      <Image
        src={"/cabinet-angle-vue-1.jpeg"}
        data-aos="zoom-in-left"
        alt="Cabinet d'hypnose à Lanvollon"
        width={500}
        height={500}
        className="mx-auto mt-8 rounded-2xl shadow-2xl w-4/5 lg:w-2/5 brightness-110 saturate-130"
      />
      <div className="flex justify-center mt-8">
        <ButtonRDV onClick={handleConversion} />
      </div>
    </section>
  );
}
