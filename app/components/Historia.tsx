import { CSSProperties } from "react";

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
                    <div style={boxStyle}>
                        Imagen
                    </div>
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

const boxStyle: CSSProperties = {
    width: '100%',
    height: '300px',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    color: '#888',
};