import NosotrosHero from "../components/NosotrosHero";
import Historia from "../components/Historia";
import Equipo from "../components/Equipo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sobre Nosotros | Mi Proyecto Next.js',
    description: 'Conoce al equipo de profesionales y la historia detrás de nuestras soluciones tecnológicas innovadoras en este 2026.',
    openGraph: {
      title: 'Sobre Nosotros | Mi Proyecto Next.js',
      description: 'Conoce nuestra historia y misión empresarial.',
      type: 'website',
    }
  };

export default function NosotrosPage() {
    return (
        <main>
            <NosotrosHero />
            <Historia />
            <Equipo />
        </main>
    )
}