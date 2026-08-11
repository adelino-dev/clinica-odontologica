import './FAQ.css';

function FAQ() {
    const faqs = [
        { q: "Quais convênios vocês aceitam?", a: "Aceitamos diversos convênios nacionais. Entre em contato para verificar a cobertura do seu plano." },
        { q: "Como faço para agendar uma consulta?", a: "Você pode agendar pelo nosso telefone, WhatsApp ou preenchendo o formulário de contato abaixo." },
        { q: "Qual o horário de funcionamento?", a: "Funcionamos de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 12h." }
    ];

    return (
        <section id="faq" className="faq-section">
            <div className="faq-container">
                <h2>Perguntas Frequentes</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h3>{faq.q}</h3>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
