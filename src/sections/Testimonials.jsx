import './Testimonials.css';

import stars from "../assets/icons/avaliacao.png";
function Testimonials() {
    return (
        <section id="testimonials-section">
            <div id="testimonials-container">
                <img id="stars-icon" src={stars} alt="5 estrelas" />
                <h2 id="testimonials-title">5,0 de avaliação no Google</h2>
                <span id="avaliations">+ de 90 pacientes avaliaram a ClinicaOdontologica com nota máxima!</span>

            </div>
        </section>
    );
}

export default Testimonials;
