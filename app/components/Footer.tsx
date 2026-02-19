import React from "react";
import Link from "next/link";
import { CSSProperties } from "react";

export default function Footer() {
    return (
        <footer style={footerStyle}>
            <div className="container" style={footerGrid}>

                <div style={columnStyle}>
                    <h3 style={logoStyle}>Mi Proyecto</h3>
                    <p style={textStyle}>
                        Trasnformando ideas en experiencias digitales de alto impacto.
                    </p>
                </div>
            

                <div style={columnStyle}>
                    <h4 style={titleStyle}>Navegación</h4>
                    <ul style={listStyle}>
                        <li>
                            <Link href="/" style={linkStyle}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/nosotros" style={linkStyle}>
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link href="/servicios" style={linkStyle}>
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacto" style={linkStyle}>
                            Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

                <div style={columnStyle}>
                    <h4 style={titleStyle}>Servicios</h4>
                    <ul style={listStyle}>
                        <li style={textStyle}>Desarrollo Web</li>
                        <li style={textStyle}>Diseño UI/UX</li>
                        <li style={textStyle}>SEO</li>
                    </ul>
                </div>

                <div style={columnStyle}>
                    <h4 style={titleStyle}>Contacto</h4>
                    <p style={textStyle}>📍 Av. Lunitas #895. País, Ciudad</p>
                    <p style={textStyle}>📧 mail@mail.com</p>
                    <p style={textStyle}>📞 123 456 789</p>
                </div>

            </div>

                <div style={copyrightStyle}>
                    <div className="container">
                        <p>
                            © {new Date().getFullYear()} Mi Proyecto. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            
        </footer>
    );
}

// Estilos CSS
const footerStyle: CSSProperties = {
    backgroundColor: "#171717",
    color: "#fff",
    padding: "4rem 0 0 0",
    marginTop: "auto",
};

const footerGrid: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "2.5rem",
    paddingBottom: "3rem",
};

const columnStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
};

const logoStyle: CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#0070f3",
};

const titleStyle: CSSProperties = {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
};

const textStyle: CSSProperties = {
    color: "#ccc",
    fontSize: "0.95rem",
    lineHeight: "1.6",
};

const listStyle: CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
};

const linkStyle: CSSProperties = {
    color: "#ccc",
    textDecoration: "none",
    transition: "color 0.2s",
};

const copyrightStyle: CSSProperties = {
    borderTop: "1px solid #333",
    padding: "1.5rem 0",
    textAlign: "center",
    fontSize: "0.85rem",
    color: "#888",
};