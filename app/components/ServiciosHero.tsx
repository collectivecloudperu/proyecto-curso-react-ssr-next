import { CSSProperties } from "react";

export default function ServiciosHero() {
    return (
        <section style={heroStyle}>
            <div className="container">
                <h1 style={titleStyle}>Nuestros Servicios</h1>
                <p style={subtitleStyle}>
                    Soluciones a medida para potenciar tu presencia digital en el mercado actual.
                </p>
            </div>
        </section>
    )
}

// Estilos
const heroStyle: CSSProperties = {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '5rem 0',
    textAlign: 'center',
    borderBottom: '4px solid #0070f3'
}; 

const titleStyle: CSSProperties = {
    fontSize: '2.8rem',
    marginBottom: '1rem'
};

const subtitleStyle: CSSProperties = {
    fontSize: '1.2rem',
    opacity: 0.8,
    maxWidth: '700px',
    margin: '0 auto',
};