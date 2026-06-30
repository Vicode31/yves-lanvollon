"use client";
import { gotu } from "@/app/font";
import { push } from "@socialgouv/matomo-next";
import { motion } from "motion/react";
import ButtonRDV from "./ButtonRDV";

export default function HeroSection() {
  const handleConversion = () => {
    push(["trackEvent", "button", "click", "RDV haut"]);
    window.location.href =
      "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";
  };

  return (
    <section
      id="accueil"
      className="pt-44 pb-20 md:pt-48 md:pb-24 bg-gradient-to-br from-green-100 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            className={`text-3xl md:text-5xl font-bold text-gray-900 mb-6 ${gotu.className}`}
          >
            Yves DENIAU
          </h2>
          <motion.h2
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-3xl md:text-4xl font-bold text-gray-900 mb-6 ${gotu.className}`}
          >
            Hypnothérapeute
          </motion.h2>
          <p className="text-lg md:text-xl text-vertSapin mb-8 max-w-2xl mx-auto">
            L&apos;hypnothérapie vous aide à surmonter vos difficultés et à
            révéler votre plein potentiel
          </p>
          <ButtonRDV onClick={handleConversion} />
        </div>
      </div>
    </section>
  );
}
