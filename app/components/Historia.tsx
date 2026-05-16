import { CSSProperties } from "react";
import Image from "next/image";

export default function Historia() {
    return (
        <section style={sectionStyle}>
            <div className="container" style={flexContainer}>
                <div style={textSide}>
                    <h2 style={titleStyle}>Nuestra Misión</h2>
                    <p style={pStyle}>
                        Desde 2020, hemos trabajado para cerrar la brecha digital, ofreciendo soluciones
                        tecnológicas qe no solo funcionan, sino que inspiran.
                    </p>
                    <p style={pStyle}>
                        Creemos en un internet más rápido, accesible y centrado en el ser humano.
                        Nuestro enfoque combina ingeniería de precisión con diseño emocional.
                    </p>
                </div>
                <div style={imagePlaceholder}>
                    <Image
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
                        alt="Equipo de trabajo de Mi Proyecto"
                        width={600}
                        height={400}
                        style={imageStyle}                    
                    />
                </div>
            </div>
        </section>
    )
}

// Estilos CSS
const sectionStyle: CSSProperties = {
    padding: '5rem 0',
};

const flexContainer: CSSProperties = {
    display: 'flex',
    gap: '4rem',
    flexWrap: 'wrap',
    alignItems: 'center'
};

const textSide: CSSProperties = {
    flex: '1',
    minWidth: '300px',
};

const titleStyle: CSSProperties = {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#171717',
};

const pStyle: CSSProperties = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#444',
    marginBottom: '1rem',
};

const imagePlaceholder: CSSProperties = {
    flex: '1',
    minWidth: '300px',
};

const imageStyle : CSSProperties = {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    objectFit: 'cover'
};