"use client";

import { push } from "@socialgouv/matomo-next";

const RESALIB_RDV_URL =
  "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";

export default function FixedRdvButton() {
  const handleClick = () => {
    push(["trackEvent", "button", "click", "RDV flottant"]);
    window.location.href = RESALIB_RDV_URL;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Prendre rendez-vous sur Resalib"
      className="fixed bottom-0 right-1/2 translate-x-1/2 z-40 cursor-pointer rounded-lg bg-vertSapin px-4 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-vertSapin/90 sm:bottom-6 sm:right-6  sm:hidden"
    >
      Prendre rendez-vous
    </button>
  );
}
