'use client';

import React, {useState} from "react";
import { CSSProperties } from "react";

export default function Newsletter() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`¡Gracias! Hemos registrado el correo: ${email}`);
        setEmail('');
    }

    return (
        <section style={newsletterSection}>
            <div className="container" style={contentWrapper}>
                <div style={textContainer}>
                    <h2 style={titleStyle}>Suscríbete a nuestro boletín</h2>
                    <p style={subtitleStyle}>
                        Recibe las últimas novedades sobre desarrollo web y diseño en tu bandeja de entrada.
                    </p>
                </div>

                <form onSubmit={handleSubmit} style={formStyle}>
                    <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />
                    <button type="submit" style={buttonStyle}>
                        Suscribirse
                    </button>
                </form>
            </div>
        </section>
    );
};

// Estilos CSS
const newsletterSection: CSSProperties = {
    padding: '6rem 0',
    backgroundColor: '#0070f3',
    color: '#fff',
};

const contentWrapper: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
};

const textContainer: CSSProperties = {
    marginBottom: '2.5rem',
};

const titleStyle: CSSProperties = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const subtitleStyle: CSSProperties = {
    fontSize: '1.2rem',
    opacity: 0.9,
    maxWidth: '600px',
};

const formStyle: CSSProperties = {
    display: 'flex',
    gap: '1rem',
    width: '100%',
    maxWidth: '500px',
    flexWrap: 'wrap',
    justifyContent: 'center',
};

const inputStyle: CSSProperties = {
    background: '#ffffff',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    border: 'none',
    flex: '1',
    minWidth: '250px',
    fontSize: '1rem',
    outline: 'none',
    color: '#333',
};

const buttonStyle: CSSProperties = {
    padding: '1rem 2rem',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#171717',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};