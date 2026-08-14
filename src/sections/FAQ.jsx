import './FAQ.css';
import whatsappIcon from '../assets/icons/whatsapp.png';

function FAQ() {
    const faqs = [
        {
            q: "Como faço para agendar uma consulta?",
            a: 'As consultas são agendadas pelo WhatsApp. Clique no botão "Fale Conosco" aqui em baixo para iniciar uma conversa.'
        },
        {
            q: "A clínica atende crianças e adultos?",
            a: "Sim, a clínica atende pacientes de todas as idades, desde crianças até idosos."
        },
        {
            q: "A primeira consulta inclui avaliação?",
            a: "Sim! Toda primeira consulta inclui avaliação completa, diagnóstico e planejamento de tratamento personalizado."
        },
        {
            q: "Quais são as formas de pagamento?",
            a: "Aceitamos dinheiro em espécie, PIX, cartões de crédito e débito."
        }
    ];

    return (
        <section id="faq-section">
            <div id="faq-container">
                <h2>Dúvidas</h2>
                <div id="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <h3>{faq.q}</h3>
                            <p>{faq.a}</p>
                        </div>
                    ))}
                </div>
                <p>Tem outras duvidas?</p>
                <a href="https://wa.me/5582999999999" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Fale Conosco
                </a>
            </div>
        </section>
    );
}

export default FAQ;
