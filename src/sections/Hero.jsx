import { useEffect, useRef } from 'react';
import './Hero.css';
import toothIcon from '../assets/icons/tooth-sparkles.png';
import whatsappIcon from '../assets/icons/whatsapp-icon-white.png';
import locationIcon from '../assets/icons/location-icon-white.png';
import smileImg from '../assets/images/smile.jpg';

function Hero() {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const scrollY = window.scrollY;
                // Multiplicador 0.3 controla a velocidade do parallax
                bgRef.current.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="hero-section">
            <div 
                ref={bgRef} 
                className="hero-background-image" 
                style={{ backgroundImage: `url(${smileImg})` }}
            />
            <div id="hero-container">
                <h1 id="hero-title-off">Clínica Odontológica</h1>
                <div id="hero-text-container">
                    <span id="hero-title">
                        <img src={toothIcon} alt="Tooth" />
                        Seu sorriso merece brilhar!
                    </span>
                    <span id="hero-subtitle">Na ClinicaOdontologica, você encontra o cuidado que transforma sorrisos em confiança.</span>
                </div>
                <div id="button-container">
                    <button
                        type="button"
                        onClick={() => window.open("https://wa.me/5582999999999")}
                    >
                        <img src={whatsappIcon} alt="WhatsApp" />
                        Agende Sua Consulta
                    </button>
                    <button
                        type="button"
                        onClick={() => window.open("https://maps.app.goo.gl/7sipau1LeuDRTqai7")}
                    >
                        <img src={locationIcon} alt="Localização" />
                        Descubra como chegar
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
