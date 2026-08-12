import './Contact.css';

function Contact() {
    return (
        <section id="contact-section">
            <div className="contact-container">
                <h2>Contato</h2>
                <p>Entre em contato conosco para agendar sua consulta.</p>
                <form className="contact-form">
                    <input type="text" placeholder="Seu Nome" required />
                    <input type="email" placeholder="Seu E-mail" required />
                    <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
