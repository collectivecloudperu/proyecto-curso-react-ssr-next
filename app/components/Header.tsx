import Link from 'next/link';
import { CSSProperties } from 'react';

export default function Header() {
    return(
    <header style={headerStyle}>
        <div className="container" style={navContainer}>
            <div style={logoStyle}>
                <Link href="/">Mi Proyecto</Link>
            </div>
            <nav>
                <ul style={menuStyle}>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/nosotros">Nosotros</Link></li>
                    <li><Link href="/servicios">Servicios</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    </header>
)}

const headerStyle: CSSProperties = {
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000
}

const navContainer: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const logoStyle: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#0070f3'
}

const menuStyle: CSSProperties = {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none'
}