import './HowItWorks.css';

function HowItWorks() {
    const steps = [
        { step: "1", title: "Agendamento", desc: "Entre em contato por WhatsApp ou pelo formulário do site para escolher o melhor horário." },
        { step: "2", title: "Primeira Consulta", desc: "Faremos uma avaliação completa da sua saúde bucal e discutiremos os melhores tratamentos." },
        { step: "3", title: "Tratamento", desc: "Realizamos os procedimentos com tecnologia de ponta, segurança e sem dor." }
    ];

    return (
        <section id="how-it-works" className="how-it-works-section">
            <div className="how-it-works-container">
                <h2>Como Funciona</h2>
                <div className="steps-grid">
                    {steps.map((stepItem, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">{stepItem.step}</div>
                            <h3>{stepItem.title}</h3>
                            <p>{stepItem.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
