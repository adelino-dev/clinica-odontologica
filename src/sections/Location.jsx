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
                <div className="map-placeholder">
                    {/* Placeholder para o mapa */}
                    <span>[Mapa do Google Maps]</span>
                </div>
            </div>
        </section>
    );
}

export default Location;
