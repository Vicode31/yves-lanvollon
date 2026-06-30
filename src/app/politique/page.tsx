import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Hypnose Saint-Brieuc",
  description:
    "Politique de confidentialité du cabinet d'hypnothérapie de Yves Deniau à Saint-Brieuc",
};

export default function PolitiquePage() {
  return (
    <main className="container mx-auto px-4 py-8 prose prose-slate max-w-none lg:prose-lg">
      <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>

      <section className="mb-8">
        <h2>1. Introduction</h2>
        <p>
          Cette politique de confidentialité s&apos;applique au site web du
          Cabinet d&apos;Hypnose Yves Deniau, situé au 25 G Bd de la Tour
          d&apos;Auvergne Bâtiment le Grand, 22000 Saint-Brieuc.
        </p>
      </section>

      <section className="mb-8">
        <h2>2. Collecte des informations</h2>
        <p>
          Nous collectons uniquement les informations nécessaires pour vous
          fournir nos services d&apos;hypnothérapie et améliorer votre
          expérience sur notre site web.
        </p>
      </section>

      <section className="mb-8">
        <h2>3. Utilisation des informations</h2>
        <p>Les informations collectées sont utilisées pour :</p>
        <ul>
          <li>Gérer vos rendez-vous</li>
          <li>Vous contacter concernant nos services</li>
          <li>Améliorer notre site web et nos services</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>4. Protection des informations</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité appropriées pour
          protéger vos informations personnelles contre tout accès,
          modification, divulgation ou destruction non autorisés.
        </p>
      </section>

      <section className="mb-8">
        <h2>5. Cookies et technologies similaires</h2>
        <p>
          Notre site utilise des cookies et des technologies similaires pour
          améliorer votre expérience de navigation. Vous pouvez contrôler
          l&apos;utilisation des cookies via les paramètres de votre navigateur.
        </p>
      </section>

      <section className="mb-8">
        <h2>6. Vos droits</h2>
        <p>
          Conformément à la réglementation en vigueur, vous disposez d&apos;un
          droit d&apos;accès, de rectification, de suppression et de portabilité
          de vos données personnelles.
        </p>
      </section>

      <section className="mb-8">
        <h2>7. Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité,
          vous pouvez nous contacter :
        </p>
        <ul>
          <li>Par téléphone : +33613224382</li>
          <li>
            À notre adresse : 25 G Bd de la Tour d&apos;Auvergne Bâtiment le
            Grand, 22000 Saint-Brieuc
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2>8. Réseaux sociaux</h2>
        <p>Vous pouvez également nous suivre sur nos réseaux sociaux :</p>
        <ul>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>ResaLib</li>
        </ul>
      </section>

      <section>
        <h2>9. Modifications</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de
          confidentialité à tout moment. Les modifications prendront effet dès
          leur publication sur notre site web.
        </p>
      </section>
    </main>
  );
}
