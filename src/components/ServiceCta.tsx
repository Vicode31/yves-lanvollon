"use client";

import { push } from "@socialgouv/matomo-next";

const RESALIB_RDV_URL =
  "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";

type ServiceCtaProps = {
  /** Libellé de tracking Matomo pour identifier le soin */
  trackingLabel: string;
  label?: string;
};

export default function ServiceCta({
  trackingLabel,
  label = "Prendre rendez-vous",
}: ServiceCtaProps) {
  const handleClick = () => {
    push(["trackEvent", "button", "click", `RDV soin - ${trackingLabel}`]);
    window.location.href = RESALIB_RDV_URL;
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-block cursor-pointer rounded-lg bg-vertSapin px-8 py-3 text-white transition-colors hover:bg-vertSapin/80"
    >
      {label}
    </button>
  );
}
