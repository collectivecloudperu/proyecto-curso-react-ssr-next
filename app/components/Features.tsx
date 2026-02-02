import React from "react";
import { CSSProperties } from "react";

const features = [
    {
        icon: '🌐',
        title: 'Desarrollo Web',
        description: 'Sitios ultra rápidos con Next.js y optimización SEO nativa.',
    },
    {
        icon: '📱',
        title: 'Diseño UX/UI',
        description: 'Interfaces modernas enfocadas en la experiencia del usuario final.',
    },
    {
        icon: '🚀',
        title: 'Rendimiento',
        description: 'Carga instantánea para retener a tus clientes desde el primer segundo.',
    },
];

export default function Features() {
    return (
        <section style={sectionWrapper}>
            <div className="container">
                <div style={headerText}>
                    <h2 style={titleStyle}>Nuestros Servicios</h2>
                    <p style={subtitleStyle}>Soluciones digitales diseñadas para el crecimiento de tu negocio.</p>
                </div>
                
                <div style={gridContainer}>
                    {features.map((item, index) => (
                        <div key={index} style={cardStyle}>
                            <div style={iconStyle}>{item.icon}</div>
                            <h3 style={cardTitle}>{item.title}</h3>
                            <p style={cardText}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Estilos CSS
const sectionWrapper: CSSProperties = {
    padding: '5rem 0',
    backgroundColor: '#f8fafc'
};

const headerText: CSSProperties = {
    textAlign: 'center',
    marginBottom: '4rem',
};

const titleStyle: CSSProperties = {
    fontSize: '2.5rem',
    color: '#0f172a',
    marginBottom: '1rem',
};

const subtitleStyle: CSSProperties = {
    fontSize: '1.1rem',
    color: '#64748b',
};

const gridContainer: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2.5rem',
};

const cardStyle: CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '3rem 2rem',
    borderRadius: '16px',
    boxShadow: '0 10px 15px -px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    border: '1px solid #e2e8f0',
};

const iconStyle: CSSProperties = {
    fontSize: '3.5rem',
    marginBottom: '1.5rem',
}

const cardTitle: CSSProperties = {
    fontSize: '1.5rem',
    color: '#0070f3',
    marginBottom: '1rem',
};

const cardText: CSSProperties = {
    color: '#475569',
    lineHeight: '1.7',
};
