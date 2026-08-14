import './HowItWorks.css';
import whatsappIcon from '../assets/icons/whatsapp.png';
import dentistIcon from '../assets/icons/dentista.png';
import planIcon from '../assets/icons/plano-dentario.png';
import arrowIcon from '../assets/icons/arrow-right.png';

function HowItWorks() {

    return (
        <section id="how-it-works-section">
            <div id="how-it-works-container">
                <h2>Como funciona seu atendimento?</h2>
                <div id="steps-grid">
                    <div className="step-card">
                        <img src={whatsappIcon} alt="WhatsApp" />
                        <span>1. Você agenda uma consulta pelo WhatApp</span>
                    </div>
                    <img className="arrow" src={arrowIcon} alt="Seta" />
                    <div className="step-card">
                        <img src={dentistIcon} alt="Dentista" />
                        <span>2. A gente faz sua avaliação</span>
                    </div>
                    <img className="arrow" src={arrowIcon} alt="Seta" />
                    <div className="step-card">
                        <img src={planIcon} alt="Plano Odontológico" />
                        <span>3. Você recebe um plano de tratamento personalizado</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
