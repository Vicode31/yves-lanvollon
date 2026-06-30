import MatomoLayout from "@/components/MatomoLayout";
import MetaPixel from "@/components/MetaPixel";
import SchemaOrg from "@/components/SchemaOrg";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Suspense } from "react";
import { roboto_flex } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hypnose-saintbrieuc.fr"),
  title: {
    template: "%s | Hypnose Saint-Brieuc",
    default: "Hypnothérapeute à Saint-Brieuc | Yves Deniau",
  },
  description:
    "Cabinet d'hypnose à Saint-Brieuc - Yves Deniau, hypnothérapeute certifié. Spécialiste en hypnose thérapeutique pour stress, anxiété, phobies, arrêt du tabac. Prenez RDV.",
  keywords: [
    "hypnose saint brieuc",
    "hypnotherapeute saint brieuc",
    "hypnothérapeute saint brieuc",
    "hypnotherapie saint brieuc",
    "hypnose thérapeutique saint brieuc",
    "hypnothérapie saint brieuc",
    "hypnothérapie",
    "hypnose",
    "yves deniau",
    "cabinet d'hypnose saint brieuc",
    "cabinet d'hypnose",
    "cabinet d'hypnothérapie",
    "cabinet d'hypnothérapie saint brieuc",
    "cabinet d'hypnothérapie",
  ],
  alternates: {
    canonical: "https://www.hypnose-saintbrieuc.fr",
  },
  openGraph: {
    title: "Hypnothérapeute à Saint-Brieuc | Yves Deniau",
    description:
      "Yves Deniau, hypnothérapeute certifié à Saint-Brieuc, vous accompagne pour retrouver bien-être et confiance. Spécialiste en hypnose pour stress, addictions, deuil, anxiété, phobies, arrêt du tabac.",
    url: "https://www.hypnose-saintbrieuc.fr",
    siteName: "Hypnose Saint-Brieuc - Yves Deniau",
    images: [
      {
        url: "https://www.hypnose-saintbrieuc.fr/yves-deniau.jpg",
        width: 1200,
        height: 630,
        alt: "Yves DENIAU - Hypnothérapeute à Saint-Brieuc",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth!">
      <head>
        <SchemaOrg />
        <GoogleTagManager gtmId="GTM-WKCZK7W5" />
      </head>
      <body className={`${roboto_flex.className} antialiased`}>
        {children}

        <MetaPixel />

        <Suspense fallback={null}>
          <MatomoLayout />
        </Suspense>
      </body>
    </html>
  );
}
