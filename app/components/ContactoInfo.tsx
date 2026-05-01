import { CSSProperties } from "react";

export default function ContactoInfo() {
    return (
        <div style={infoContainer}>
            <div style={itemStyle}>
                <h3>📍 Ubicación</h3>
                <p>Lima, Perú</p>
            </div>
            <div style={itemStyle}>
                <h3>📧 Email</h3>
                <p>mail@mail.com</p>
            </div>
            <div style={itemStyle}>
                <h3>📞 Teléfono</h3>
                <p>+51 999 888 777</p>
            </div>
        </div>
    )
}

// Estilos
const infoContainer: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginBottom: '3rem'
};

const itemStyle: CSSProperties = {
    padding: '1.5rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    textAlign: 'center'
};