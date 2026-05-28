import ContactoForm from "../components/ContactoForm";
import ContactoHero from "../components/ContactoHero";
import ContactoInfo from "../components/ContactoInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contacto | Mi Proyecto Next.js',
    description: '¿Tienes alguna duda o proyecto en mente? Escríbenos a través de nuestro formulario de contacto o llámanos directamente.',
    openGraph: {
      title: 'Contacto | Mi Proyecto Next.js',
      description: 'Estamos aquí para ayudarte. Envíanos un mensaje hoy mismo.',
      type: 'website',
    }
  };

export default function ContactoPage() {
    return (
        <main>
            <ContactoHero />
            <div className="container" style={{ padding: '4rem 0' }}>
                <ContactoInfo />
                <ContactoForm />
            </div>
        </main>
    )
}