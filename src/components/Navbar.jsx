import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/icons/logo-sem-fundo.png';

function Navbar() {
    const [navbarState, setNavbarState] = useState('top'); // 'top', 'hero-scrolled', 'past-hero'
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroHeight = window.innerHeight * 0.7;

            // 1. Determina o estado da navbar baseado na posição de rolagem
            if (currentScrollY <= 10) {
                setNavbarState('top');
            } else if (currentScrollY <= heroHeight) {
                setNavbarState('hero-scrolled');
            } else {
                setNavbarState('past-hero');
            }

            // 2. Controla a visibilidade (oculta ao descer, revela ao subir - apenas fora da Hero)
            if (currentScrollY <= heroHeight) {
                // Sempre visível dentro da Hero section
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                // Rolando para baixo fora da Hero -> esconde
                setIsVisible(false);
            } else {
                // Rolando para cima -> mostra
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Executa ao montar o componente

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Concatena as classes com base nos estados
    const navbarClasses = [
        navbarState,
        !isVisible ? 'hidden' : ''
    ].filter(Boolean).join(' ');

    return (
        <nav id="navbar" className={navbarClasses}>
            <div id="navbar-container">
                <a href="#hero-section" className="logo-link">
                    <img src={logo} alt="Logo" />
                </a>
                <div id="links-container">
                    <a href="#about-section">Quem somos</a>
                    <a href="#treatments-section">Tratamentos</a>
                    <a href="#testimonials-section">Avaliações</a>
                    <a href="#faq-section">Dúvidas</a>
                    <a href="#location-section">Localização</a>
                    <a href="#contact-section">Contato</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;