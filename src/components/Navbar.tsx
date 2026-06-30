"use client";
import { gotu } from "@/app/font";
import { push } from "@socialgouv/matomo-next";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const RESALIB_RDV_URL =
  "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const LogoTag = pathname === "/" ? "h1" : "span";

  const handleRdvClick = () => {
    push(["trackEvent", "button", "click", "RDV navbar"]);
    window.location.href = RESALIB_RDV_URL;
  };

  // Liste de navigation factorisée
  const navigationLinks = [
    { href: "/#accueil", label: "Accueil" },
    { href: "/#apropos", label: "À Propos" },
    { href: "/#services", label: "Soins" },
    { href: "/#contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav className="fixed z-50 w-full bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-8xl sm:px-6 lg:px-8">
        <div className="flex justify-between gap-3 py-4">
          <Link
            href={`/`}
            className="flex min-w-0 flex-1 items-center cursor-pointer md:flex-initial"
          >
            <Image
              src={"/logo-hypnose.avif"}
              alt="Logo hypnothérapie à Saint-Brieuc"
              width={70}
              height={70}
            />
            <LogoTag className={`ml-2 text-xl font-medium ${gotu}`}>
              Hypnothérapeute à Saint-Brieuc
            </LogoTag>
          </Link>

          {/* Desktop Navigation + RDV */}
          <div className="hidden items-center gap-6 lg:flex">
            <div className="flex items-center space-x-8 text-lg">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 cursor-pointer hover:text-green-700"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              type="button"
              onClick={handleRdvClick}
              className="shrink-0 rounded-lg bg-vertSapin px-6 py-2.5 text-base font-medium text-white transition-colors hover:bg-vertSapin/80 cursor-pointer"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* Mobile / tablet RDV + burger (< lg) */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={handleRdvClick}
              className="hidden sm:inline-flex shrink-0 items-center rounded-lg bg-vertSapin px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-vertSapin/80 cursor-pointer md:px-4 md:py-2.5 md:text-base"
            >
              Prendre rendez-vous
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-700"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}

      <div
        className={`md:hidden overflow-hidden transition-all transition-discrete duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:text-green-700"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
