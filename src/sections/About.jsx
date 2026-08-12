import './About.css';

import dentistTeamImg from "../assets/images/dentist-team.jpg";

function About() {
    return (
        <section id="about-section">
            <div id="about-container">
                <div id="about-text-container">
                    <h2 id="about-title">Quem somos?</h2>
                    <p id="about-text">
                        Somos uma clínica odontológica especializada em cuidar da saúde e da beleza do seu sorriso.
                        Sob a liderança da Dra. Fulana, clínica geral e especialista em Ortodontia, contamos com
                        uma equipe de profissionais qualificados  para oferecer um atendimento completo e
                        humanizado em diversas especialidades.
                        <br /><br />
                        Nosso compromisso é proporcionar uma experiência acolhedora, aliando ética, excelência
                        e cuidado para que cada paciente possa sorrir com mais saúde e confiança.
                    </p>
                </div>
                <img src={dentistTeamImg} alt="Imagem de fundo" />
            </div>
        </section>
    );
}

export default About;
