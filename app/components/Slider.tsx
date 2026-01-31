'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { title } from 'process';
import { CSSProperties } from 'react';

const slides = [
    {
        id: 1,
        src: 'https://picsum.photos/id/10/1200/500',
        alt: 'Innovación',
        title: 'Soluciones Innovadoras',
        description: 'Transformamos tus ideas en realidad digital con tecnología de punta.'
    },
    {
        id: 2,
        src: 'https://picsum.photos/id/20/1200/500',
        alt: 'Rendimiento',
        title: 'Alto Rendimiento Asegurado',
        description: 'Webs ultra rápidas optimizadas con Next.js 16 y SSR Nativo.'
    },
    {
        id: 3,
        src: 'https://picsum.photos/id/30/1200/500',
        alt: 'Diseño',
        title: 'Diseño Intuitivo',
        description: 'Experiencias de usuario modernas y adaptables a cualquier dispositivo.'
    },
];

export default function Slider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));        
    }, 5000);
    return () => clearInterval(timer)
    }, []);

    return (
        <section style={sliderContainer}>
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    style={{
                        ...slideStyle,
                        opacity: index === current ? 1 : 0,
                        visibility: index === current ? 'visible' : 'hidden',
                    }}
                >
                    <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority={index === 0}
                    />
                    <div style={overlayStyle}>
                        <div className='container' style={contentStyle}>
                            <h2 style={titleStyle}>{slide.title}</h2>
                            <p style={descStyle}>{slide.description}</p>
                            <button style={btnStyle}>Descubre Más</button>
                        </div>
                    </div>
                </div>
            ))}
            <div style={dotsContainer}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        style={{
                            ...dotStyle,
                            backgroundColor: index === current ? '#0070f3' : 'grba(255,255,255.0.5)'
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

// Estilos CSS
const sliderContainer: CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '500px',
    overflow: 'hidden',
    backgroundColor: '#333',
};

const slideStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',
};

const overlayStyle: CSSProperties = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center'
};

const contentStyle: CSSProperties = {
    color: 'white',
    textAlign: 'center',
}

const titleStyle: CSSProperties = {
    fontSize: '3rem',
    marginBottom: ' 1rem',
    fontWeight: 'bold',
}

const descStyle: CSSProperties = {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    maxWidth: '600px',
    marginInline: 'auto',
}

const btnStyle: CSSProperties = {
    padding: '0.8rem 2rem',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
}

const dotsContainer: CSSProperties = {
    position: 'absolute',
    bottom: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    zIndex: 10,
};

const dotStyle: CSSProperties = {
    width: '12px',
    height: '12px',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    transition: '0.3s'
};