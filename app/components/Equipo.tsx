import { CSSProperties } from "react";

const miembros = [
    { nombre: 'Ana Garcia', cargo: 'CEO & Fundadora', icon: '👩‍💼' },
    { nombre: 'Luis Pérez', cargao: 'CTO', icon: '👨‍💻' },
    { nombre: 'Marta Rivas', cargo: 'Directora de Diseño', icon: '🎨'}
]

export default function Equipo() {
    return (
        <section style={sectionStyle}>
            <div className="container">
                <h2 style={titleStyle}>Nuestro Equipo</h2>
                <div style={gridStyle}>
                    {miembros.map((m, i) => (
                        <div key={i} style={cardStyle}>
                            <div style={{ fontSize: '3rem' }}>{m.icon}</div>
                            <h3>{m.nombre}</h3>
                            <p style={{ color:'#666' }}>{m.cargo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Estilos CSS
const sectionStyle: CSSProperties = {
    padding: '5rem 0',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
};

const titleStyle: CSSProperties = {
    fontSize: '2rem',
    marginBottom: '3rem',
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
};

const cardStyle: CSSProperties = {
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0,0,0,0,0.5)',
};

