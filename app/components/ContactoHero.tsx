import { CSSProperties } from "react";

export default function ContactoHero() {
    return (
        <section style={heroStyle}>
            <div className="container">
                <h1 style={{ fontSize: '2.5rem' }}>Ponte en Contacto</h1>
                <p style={{ opacity: 0.8 }}>
                    Estamos aquí para ayudarte a resolver tus dudas.
                </p>
            </div>
        </section>
    )
}

// Estilos
const heroStyle: CSSProperties = {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '4rem 0',
    textAlign: 'center'
};