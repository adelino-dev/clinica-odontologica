import './Treatments.css';

function Treatments() {
    const treatmentsList = [
        { name: "Implantes Dentários", desc: "A solução ideal para recuperar dentes perdidos e a segurança do seu sorriso." },
        { name: "Ortodontia (Aparelhos)", desc: "Alinhamento e correção dos dentes com aparelhos tradicionais e invisíveis." },
        { name: "Estética (Lentes de Contato)", desc: "Transformação estética completa do sorriso com lâminas ultrafinas de porcelana." },
        { name: "Clareamento Dental", desc: "Dentes mais brancos e brilhantes de forma rápida, segura e duradoura." }
    ];

    return (
        <section id="treatments" className="treatments-section">
            <div className="treatments-container">
                <h2>Nossos Tratamentos</h2>
                <div className="treatments-grid">
                    {treatmentsList.map((t, index) => (
                        <div key={index} className="treatment-card">
                            <h3>{t.name}</h3>
                            <p>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Treatments;
