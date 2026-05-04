'use client'

import { CSSProperties, useState } from "react"

export default function ContactoForm() {
    const [status, setStatus] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("¡Mensaje enviado con éxito!");
        // Logica para enviar datos a una API
    };

    return (
        <form style={formStyle} onSubmit={handleSubmit}>
            <div style={groupStyle}>
                <label>Nombre:</label>
                <input type="text" required style={inputStyle} placeholder="Tu nombre" />
            </div>
            <div style={groupStyle}>
                <label>Email:</label>
                <input type="email" required style={inputStyle} placeholder="correo@correo.com" />
            </div>
            <div style={groupStyle}>
                <label>Mensaje:</label>
                <textarea required style={{ ...inputStyle, height: '150px' }} placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>
            <button type="submit" style={buttonStyle}>Enviar Mensaje</button>
            {status && <p style={{ color: 'green', marginTop: '1rem' }}>{status}</p>}
        </form>
    );
}

// Estilos CSS
const formStyle: CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    border: '1px solid #eee',
    borderRadius: '12px'
};

const groupStyle: CSSProperties = {
    marginBottom: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
};

const inputStyle: CSSProperties = {
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem'
};

const buttonStyle: CSSProperties = {
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '1rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize:'1rem',
    fontWeight: 'bold'
};
