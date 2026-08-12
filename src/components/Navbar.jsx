import './Navbar.css'

function Navbar() {
    return (
        <nav id="navbar">
            <div id="navbar-container">
                <div id="links-container">
                    <a href="#about-section">Quem somos</a>
                    <a href="#treatments-section">Tratamentos</a>
                    <a href="#testemonials-section">Avaliações</a>
                    <a href="#faq-section">Dúvidas</a>
                    <a href="#location-section">Localização</a>
                    <a href="#contact-section">Contato</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;