import { CSSProperties } from "react";

const pasos = [
    { n: '01', t: 'Planificación', d: 'Analizamos tus necesidades y definimos la estrategia.' },
    { n: '02', t: 'Desarrollo', d: 'Escribimos código limpio y eficiente siguiendo estándares.' },
    { n: '03', t: 'Lanzamiento', d: 'Desplegamos tu proyecto y aseguramos que todo vuele.' },
];

export default function Proceso() {
    return (
        <section style={sectionStyle}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontWeight: 'bold' }}>Nuestro Proceso</h2>
                <div style={stepContainer}>
                    {pasos.map((p, i) => (
                        <div key={i} style={stepStyle}>
                            <span style={numberStyle}>{p.n}</span>
                            <h4>{p.t}</h4>
                            <p style={{ color: '#666' }}>{p.d}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

// Estilos
const sectionStyle: CSSProperties = {
    padding: '5rem 0',
    backgroundColor: '#f0f7ff',
};

const stepContainer: CSSProperties = {
    display: 'flex', 
    gap: '2rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

const stepStyle: CSSProperties = {
    flex: '1',
    minWidth: '250px',
    textAlign: 'center',
    padding: '1rem',    
};

const numberStyle: CSSProperties = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#0070f3',
    opacity: 0.2,
    display: 'block',
}