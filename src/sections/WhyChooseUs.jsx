import './WhyChooseUs.css';

function WhyChooseUs() {
    const reasons = [
        { title: "Tecnologia de Ponta", desc: "Utilizamos os equipamentos mais modernos e seguros do mercado." },
        { title: "Profissionais Experientes", desc: "Nossa equipe é formada por especialistas altamente capacitados e formados em grandes instituições." },
        { title: "Atendimento Humanizado", desc: "Focamos no conforto do paciente, oferecendo um atendimento leve e sem traumas." },
        { title: "Localização de Fácil Acesso", desc: "Consultório moderno localizado na principal avenida da cidade." }
    ];

    return (
        <section id="why-choose-us" className="why-choose-us-section">
            <div className="why-choose-us-container">
                <h2>Por que nos escolher?</h2>
                <div className="reasons-grid">
                    {reasons.map((r, index) => (
                        <div key={index} className="reason-card">
                            <h3>{r.title}</h3>
                            <p>{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;
