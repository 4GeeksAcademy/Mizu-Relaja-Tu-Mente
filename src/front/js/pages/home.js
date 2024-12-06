// src/components/Home.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/home.css";

export const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { id: 1, title: "Relaja tu mente, cuida tu cabello", subtitle: "Descubre la experiencia Mizu HeadSpa", image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdG8yMXFtMzgwcGRhMmpmajc3N3VwNDQ0aW40aHp2cDRzOXdvMmUxMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Nj8b4AlbRUihG/giphy.webp" },
        { id: 2, title: "Bienestar único", subtitle: "Inspirado en técnicas japonesas para tu cuidado capilar", image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW5pajB3ZHFhZnJoazlseTVoZzlmbDluMWd5dnRwNzdiNTBta2xteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uWAMPqg3p2TPBEOWT4/giphy.webp" },
        { id: 3, title: "Regala experiencias", subtitle: "Perfectas para cualquier ocasión", image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXNydDBzanpqYXBmbHI2Z2pvYXJpYzR5ZnZ6czZ5anMzaXRsc2xuMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zyn9wh94Uwb4s/giphy.webp" }
    ];

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="home-mizu">
            {/* Jumbotron Slider */}
            <div className="jumbotron-mizu">
                <div
                    className="jumbotron-slide"
                    style={{
                        backgroundImage: `url(${slides[currentSlide].image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }}
                >
                    <div className="jumbotron-overlay">
                        <h1 className="jumbotron-title">{slides[currentSlide].title}</h1>
                        <p className="jumbotron-subtitle">{slides[currentSlide].subtitle}</p>
                    </div>
                </div>
                <div className="jumbotron-controls">
                    <button className="control-button" onClick={handlePrevSlide}>&lt;</button>
                    <button className="control-button" onClick={handleNextSlide}>&gt;</button>
                </div>
            </div>

            {/* About Section */}
            <div className="section-about">
                <h2 className="section-title">Sobre Nosotros</h2>
                <p className="section-description">
                    En Mizu HeadSpa te ofrecemos un espacio para relajarte, cuidarte y revitalizar tu cabello con tratamientos únicos y naturales.
                </p>
                <img src="https://placehold.co/800x400" alt="Sobre nosotros" className="about-image" />
            </div>

            {/* Services Section */}
            <div className="section-services">
                <h2 className="section-title">Nuestros Servicios</h2>
                <div className="services-grid">
                <Link to="/individuales">
                    <div className="service-card">
                        <img src="https://placehold.co/300x300" alt="Servicio 1" className="service-image" />
                        <h3 className="service-title">Servicios Individuales</h3>
                        <p className="service-description">Relájate con tratamientos personalizados.</p>
                    </div>
                    </Link>
                    <Link to="/parejas">
                    <div className="service-card">
                        <img src="https://placehold.co/300x300" alt="Servicio 2" className="service-image" />
                        <h3 className="service-title">Servicios en Pareja</h3>
                        <p className="service-description">Comparte momentos únicos de relajación.</p>
                    </div>
                    </Link>
                </div>
            </div>

            {/* Gift Section */}
            <div className="section-gifts">
                <h2 className="section-title">Regala Mizu</h2>
                <p className="section-description">Un regalo único para tus seres queridos.</p>
                <img src="https://placehold.co/800x400?text=Gift+Mizu" alt="Regala Mizu" className="gift-image" />
            </div>
        </div>
    );
};

