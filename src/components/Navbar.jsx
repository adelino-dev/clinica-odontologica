import { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from '../assets/icons/logo-sem-fundo.png';

function Navbar() {
    const [navbarState, setNavbarState] = useState('top'); // 'top', 'hero-scrolled', 'past-hero'
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                // Rolando para baixo fora da Hero -> esconde (apenas se o menu mobile não estiver aberto)
                if (!isMenuOpen) {
                    setIsVisible(false);
                }
            } else {
                // Rolando para cima -> mostra
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Executa ao montar o componente

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    // Fecha o menu ao redimensionar a tela para mais de 950px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 950) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Impede o scroll da página quando o menu lateral está aberto
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    // Concatena as classes com base nos estados
    const navbarClasses = [
        navbarState,
        !isVisible ? 'hidden' : '',
        isMenuOpen ? 'menu-open' : ''
    ].filter(Boolean).join(' ');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav id="navbar" className={navbarClasses}>
            {isMenuOpen && <div className="navbar-backdrop" onClick={toggleMenu} />}
            <div id="navbar-container">
                <a href="#hero-section" className="logo-link" onClick={handleLinkClick}>
                    <img src={logo} alt="Logo" />
                </a>
                
                <button 
                    className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu principal"
                    aria-expanded={isMenuOpen}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <div id="links-container" className={isMenuOpen ? 'open' : ''}>
                    <a href="#about-section" onClick={handleLinkClick}>Quem somos</a>
                    <a href="#treatments-section" onClick={handleLinkClick}>Tratamentos</a>
                    <a href="#testimonials-section" onClick={handleLinkClick}>Avaliações</a>
                    <a href="#faq-section" onClick={handleLinkClick}>Dúvidas</a>
                    <a href="#location-section" onClick={handleLinkClick}>Localização</a>
                    <a href="#contact-section" onClick={handleLinkClick}>Contato</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;