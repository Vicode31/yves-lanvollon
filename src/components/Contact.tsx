import { gotu } from "@/app/font";
import { push } from "@socialgouv/matomo-next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ButtonRDV from "./ButtonRDV";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleConversion = () => {
    push(["trackEvent", "button", "click", "RDV contact"]);
    window.location.href =
      "https://www.resalib.fr/praticien/91951-yves-deniau-hypnotherapeute-saint-brieuc#newrdvmodal";
  };

  return (
    <div id="contact" className="p-8 pt-24 bg-gray-50 scroll-mt-24">
      <p
        data-aos="zoom-in-left"
        className={`text-5xl text-center text-vertSapin ${gotu.className} mb-16`}
      >
        Contact
      </p>
      <h2 className={`text-center mt-8 mb-12 text-2xl ${gotu.className}`}>
        Cabinet d&apos;hypnose à Lanvollon :
      </h2>
      <section className="flex max-lg:flex-col-reverse items-center gap-10 lg:px-20 text-center">
        {/* Google Map */}

        <iframe
          title="Google Maps"
          src="https://www.google.com/maps?q=26+rue+des+Fontaines,+22290+Lanvollon&z=16&output=embed"
          width="70%"
          height="400em"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg max-lg:w-full"
        />

        {/* Contact Info */}

        <div className="flex flex-col justify-between lg:w-2/5">
          <div>
            <p
              className={`text-2xl ${gotu.className} underline-offset-8 mb-3 underline`}
            >
              Adresse :
            </p>
            <p className="mb-4 text-lg font-medium">
              Pôle Médical, 26 rue des Fontaines, 22290 Lanvollon
            </p>
            <p className={`text-2xl ${gotu.className}`}>Horaires :</p>
            <p className="mb-4 text-lg font-medium">
              Lundi au Vendredi 8h30 à 20h00
            </p>

            <p
              className={`text-2xl ${gotu.className} underline-offset-8 mb-3 underline`}
            >
              Accès :
            </p>
            <p className="text-center text-lg font-medium">
              Rez-de-chaussée du bâtiment et accessible en fauteuil roulant
            </p>
            <p className="text-center mb-6 text-lg font-medium">
              Pour y accéder, longer les escaliers par la droite, l&apos;entrée
              du Cabinet se trouve au fond à droite.
            </p>

            <div className="mb-4 flex flex-col justify-center items-center gap-4">
              <a
                href="tel:+33613224382"
                className="inline-block bg-vertSapin text-white px-8 w-fit py-3 rounded-lg hover:bg-vertSapin/80 transition-colors"
              >
                06 13 22 43 82
              </a>
              <ButtonRDV onClick={handleConversion} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
