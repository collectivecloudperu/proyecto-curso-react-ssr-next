import ServiciosHero from "../components/ServiciosHero";
import ServiciosGrid from "../components/ServiciosGrid";
import Proceso from "../components/Proceso";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Nuestros Servicios | Mi Proyecto Next.js',
    description: 'Ofrecemos desarrollo web con Next.js, tiendas virtuales e-commerce, consultoría TI y optimización SEO para tu negocio.',
    openGraph: {
      title: 'Nuestros Servicios | Mi Proyecto Next.js',
      description: 'Descubre cómo podemos ayudarte a escalar tu presencia digital.',
      type: 'website',
    }
  };

export default function ServiciosPage() {
    return (
        <main>
            <ServiciosHero />
            <ServiciosGrid />
            <Proceso />
        </main>
    )
}