import { CSSProperties } from "react";

export default function NososotrosHero() {
    return (
        <section style={heroStyle}>
            <div className="container">
                <h1 style={titleStyle}>Sobre Nosotros</h1>
                <p style={subtitleStyle}>
                    Conoce al equipo y la historia detrás de la innovación.
                </p>
            </div>
        </section>
    )
}

const heroStyle: CSSProperties = {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '6rem 0',
    textAlign: 'center',
};

const titleStyle: CSSProperties = {
    fontSize: '3rem',
    marginBottom: '1rem',
};

const subtitleStyle: CSSProperties = {
    fontSize: '1.2rem',
    opacity: 0.9,
};