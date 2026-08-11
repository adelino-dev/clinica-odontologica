import './Hero.css';

function Hero() {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-container">
                <h1>O Sorriso dos Seus Sonhos Começa Aqui</h1>
                <p>Equipe altamente qualificada, tecnologia de ponta e um ambiente acolhedor para cuidar da sua saúde bucal.</p>
                <a href="#contact" className="hero-cta">Agende Sua Consulta</a>
            </div>
        </section>
    );
}

export default Hero;
