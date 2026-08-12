import './Hero.css';
import toothIcon from '../assets/icons/tooth-sparkles.png';
import whatsappIcon from '../assets/icons/whatsapp-icon-white.png';
import locationIcon from '../assets/icons/location-icon-white.png';

function Hero() {
    return (
        <section id="hero-section">
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
