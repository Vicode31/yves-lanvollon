"use client";

import { gotu } from "@/app/font";
import ButtonRDV from "@/components/ButtonRDV";
import Footer from "@/components/Footer";
import FixedRdvButton from "@/components/FixedRdvButton";

import { push } from "@socialgouv/matomo-next";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleConversion = () => {
    push(["trackEvent", "button", "click", "RDV blog"]);
    window.location.href =
      "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";
  };

  return (
    <div className="relative pt-12 bg-linear-to-br from-green-50/50 to-white">
      <Link
        href={"/blog"}
        className="absolute flex items-center gap-2 transition-all duration-500 cursor-pointer top-12 left-5 lg:left-10 text-vertSapin hover:gap-1 hover:font-medium"
      >
        <IoChevronBackOutline /> Retour
      </Link>
      <FixedRdvButton />
      {children}
      <div className="mx-6 mb-12 max-w-sm px-2 py-5 bg-white border border-gray-200 rounded-3xl shadow-md transition-shadow hover:shadow-xl sm:mx-auto group">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/yves-deniau.jpg"
            alt="Hypnothérapeute Lanvollon"
            width={100}
            height={100}
            className="object-cover mb-4 rounded-full size-24 transform transition-transform duration-300 group-hover:scale-105"
          />
          <p
            className={`text-vertSapin text-xl font-semibold ${gotu.className} text-center mt-1`}
          >
            Yves DENIAU
          </p>
        </div>
        <div className="text-sm text-center text-gray-600 px-5 mt-2">
          {" "}
          <p>
            Hypnothérapeute à Lanvollon diplômé de l&apos;ARCHE et membre du
            Syndicat National des Hypnothérapeutes (SNH)
          </p>{" "}
        </div>
      </div>
      <div className="flex items-center justify-center mx-auto my-12">
        <ButtonRDV onClick={handleConversion} />
      </div>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2642.958835649792!2d-2.7752711999999997!3d48.51485379999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b1eb0a895f13e9%3A0xc09da9410e1d8c8a!2sYves%20Deniau%20Praticien%20en%20hypnose!5e0!3m2!1sfr!2sfr!4v1744385349524!5m2!1sfr!2sfr"
        width="50%"
        height="250em"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-4/5 mx-auto mb-10 rounded-lg shadow-lg"
      />
      <Footer />
    </div>
  );
}
