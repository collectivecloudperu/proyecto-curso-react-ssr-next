import Link from "next/link";
import { CSSProperties } from "react";

export default function NotFound() {
    return (
    <main style={containerStyle}>
        <div className="container" style={contentStyle}>
            <h1 style={errorCodeStyle}>404</h1>
            <h2 style={titleStyle}>Página no encontrada</h2>
            <p style={textStyle}>
                Lo sentimos, la página que estás buscando no existe, ha sido movida o se encuentra temporalmente fuera de servicio.
            </p>
            <Link href="/" style={buttonStyle}>
                Volver al Inicio
            </Link>
        </div>

    </main>
    )
}

// Estilos
const containerStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh', 
    textAlign: 'center',
    padding: '2rem 0',
};

const contentStyle: CSSProperties = {
    maxWidth: '500px',
    margin: '0 auto',
};

const errorCodeStyle: CSSProperties = {
    fontSize: '6rem',
    fontWeight: 'bold',
    color: '#0070f3',
    margin: 0,
    lineHeight: '1',
};

const titleStyle: CSSProperties = {
    fontSize: '2rem',
    color: '#171717',
    marginTop: '1rem',
    marginBottom: '1rem',
};

const textStyle: CSSProperties = {
    color: '#666',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
};

const buttonStyle: CSSProperties = {
    display: 'inline-block',
    backgroundColor: '#0070f3',
    color: 'white',
    padding: '0.8rem 2rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
};
