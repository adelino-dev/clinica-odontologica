import './Location.css';

function Location() {
    return (
        <section id="location" className="location-section">
            <div className="location-container">
                <h2>Localização</h2>
                <p>Venha nos visitar! Estamos localizados em uma região de fácil acesso.</p>
                <div className="location-info">
                    <p><strong>Endereço:</strong> Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
                    <p><strong>Telefone:</strong> (11) 3456-7890</p>
                </div>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31656393.254779518!2d-51.3168626!3d-14.40952615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1786578101444!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Localização da Clínica Odontológica"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Location;
