import './Location.css';
import locationIcon from '../assets/icons/location-blue.png';
import timeIcon from '../assets/icons/time.png';

function Location() {
    return (
        <section id="location-section">
            <div id="location-container">
                <h2>Venha nos visitar</h2>
                <div id="info-container">
                    <div id="location-info">
                        <h3>
                            <img src={locationIcon} alt="Localização" />
                            Localização
                        </h3>
                        <p>Rua exemplo, numero - Cidade, Estado - sigla, 00000-000</p>
                    </div>
                    <div id="line-divisor"></div>
                    <div id="horary-info">
                        <h3>
                            <img src={timeIcon} alt="Horários" />
                            Horários
                        </h3>
                        <li>Segunda a quinta: 08h às 18h</li>
                        <li>Sexta e sábado: 08h às 12h</li>
                        <li>Domingo: Fechado</li>
                    </div>
                </div>
                <div id="map-container">
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
