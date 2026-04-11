import { CSSProperties } from "react";

const servicios = [
    { title: 'Desarrollo Web', desc: 'Sitios modernos con Next.js y React optimizados para velocidad.', icon: '🌐' },
    { title: 'E-commerce', desc: 'Tiendas online robustas con pasarelas de pago seguras.', icon: '🛍️'},
    { title: 'Mobile Apps', desc: 'Aplicaciones nativas y progresivas para iOS y Android.', icon: '📱'},
    { title: 'SEO', desc: 'Posicionamiento orgánico para aparecer en los primeros resultados.', icon: '📈'},
    { title: 'Cloud Hosting', desc: 'Infraestructura en la nube escalable y segura.', icon: '☁️'},
    { title: 'Consultoría IT', desc: 'Asesoría técnica para otpimizar tus proceso digitales', icon: '💡'},
];

export default function ServiciosGrid() {
    return (
    <section style={sectionStyle}>
        <div className="container">
            <div style={gridStyle}>
                {servicios.map((s, i) => (
                    <div key={i} style={cardStyle}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{s.icon}</div>
                        <h3 style={{ marginBottom: '0.8rem'}}>{s.title}</h3>
                        <p style={{ color: '#555', lineHeight: '1.5'}}>{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>

    </section>
    )
}

// Estilos
const sectionStyle: CSSProperties = {
    padding: '5rem 0'
};

const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem'
};

const cardStyle: CSSProperties = {
    padding: '2rem',
    borderRadius: '12px',
    border: '1px solid #eaeaea',
    transition: 'transform 0.2s box-shadow 0.2s',
    cursor: 'default'
};