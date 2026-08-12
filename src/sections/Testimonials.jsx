import './Testimonials.css';

function Testimonials() {
    const testimonials = [
        { name: "Maria Silva", text: "Atendimento maravilhoso! O Dr. foi extremamente paciente e atencioso com o meu tratamento de canal." },
        { name: "João Santos", text: "Clínica muito moderna, limpa e com excelentes profissionais. Recomendo a todos na região!" },
        { name: "Ana Oliveira", text: "Fiz um clareamento dental e o resultado ficou incrível. A equipe é super atenciosa!" }
    ];

    return (
        <section id="testemonials-section">
            <div className="testimonials-container">
                <h2>O que dizem nossos pacientes</h2>
                <div className="testimonials-grid">
                    {testimonials.map((t, index) => (
                        <div key={index} className="testimonial-card">
                            <p className="testimonial-text">"{t.text}"</p>
                            <h4 className="testimonial-author">- {t.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
