import Image from "next/image";
import Slider from "./components/Slider";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio | Mi Proyecto Next.js',
  description: 'Bienvenido a la plataforma de desarrollo más moderna.',
  openGraph: {
    title: 'Inicio | Mi Proyecto Next.js',
    description: 'Desarrollo web moderno con rendimiento optimizado',
    type: 'website'
  }
}

export default function Home() {
  return (
    <>
    <Slider/>
    <Features/>
    <Newsletter/>    
    </>
  );
}
