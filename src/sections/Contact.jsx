import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [copiedStates, setCopiedStates] = useState({
        whatsapp: false,
        instagram: false,
        gmail: false
    });

    const handleCopy = (text, type, e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text).then(() => {
            setCopiedStates(prev => ({ ...prev, [type]: true }));
            setTimeout(() => {
                setCopiedStates(prev => ({ ...prev, [type]: false }));
            }, 2000);
        }).catch(err => {
            console.error('Erro ao copiar texto: ', err);
        });
    };

    return (
        <section id="contact-section">
            <div className="contact-container">
                <h2>Contatos</h2>

                <div className="contact-buttons-container">
                    {/* WhatsApp Card */}
                    <div className="contact-card whatsapp-card">
                        <a
                            href="https://wa.me/5511999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card-link"
                            id="btn-whatsapp"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="btn-icon">
                                <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.176-1.358A9.89 9.89 0 0 0 12.01 22c5.505 0 9.989-4.478 9.99-9.984C22 6.509 17.517 2 12.012 2zm5.748 13.917c-.24.675-1.4 1.224-1.945 1.282-.54.06-1.077.29-3.483-.668-2.894-1.15-4.757-4.1-4.9-4.29-.144-.19-1.165-1.547-1.165-2.95 0-1.402.733-2.09.997-2.368.264-.278.576-.347.767-.347.19 0 .383.003.55.011.176.009.414-.067.647.494.24.576.818 1.996.888 2.14.07.143.118.31.02.503-.098.192-.147.31-.292.478-.144.167-.303.376-.432.503-.143.143-.293.3-.125.59.168.29.747 1.232 1.6 1.996.797.712 1.467.93 1.677 1.023.21.093.333.078.458-.066.126-.144.536-.624.68-.838.143-.213.287-.18.483-.107.195.073 1.246.587 1.46.695.215.109.359.162.412.253.053.09.053.525-.187 1.2z" />
                            </svg>
                            <div className="contact-info">
                                <span className="contact-label">WhatsApp</span>
                                <span className="contact-value">+55 (11) 99999-9999</span>
                            </div>
                        </a>
                        <button
                            className={`contact-copy-btn ${copiedStates.whatsapp ? 'copied' : ''}`}
                            onClick={(e) => handleCopy("+55 (11) 99999-9999", "whatsapp", e)}
                            aria-label="Copiar número do WhatsApp"
                        >
                            {copiedStates.whatsapp ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="copy-icon">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="copy-icon">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            )}
                            <span className="tooltip-text">{copiedStates.whatsapp ? "Copiado!" : "Copiar"}</span>
                        </button>
                    </div>

                    {/* Instagram Card */}
                    <div className="contact-card instagram-card">
                        <a
                            href="https://instagram.com/seu-perfil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-card-link"
                            id="btn-instagram"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                            <div className="contact-info">
                                <span className="contact-label">Instagram</span>
                                <span className="contact-value">@seu-perfil</span>
                            </div>
                        </a>
                        <button
                            className={`contact-copy-btn ${copiedStates.instagram ? 'copied' : ''}`}
                            onClick={(e) => handleCopy("@seu-perfil", "instagram", e)}
                            aria-label="Copiar usuário do Instagram"
                        >
                            {copiedStates.instagram ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="copy-icon">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="copy-icon">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            )}
                            <span className="tooltip-text">{copiedStates.instagram ? "Copiado!" : "Copiar"}</span>
                        </button>
                    </div>

                    {/* Gmail Card */}
                    <div className="contact-card gmail-card">
                        <a
                            href="mailto:contato@exemplo.com"
                            className="contact-card-link"
                            id="btn-gmail"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <div className="contact-info">
                                <span className="contact-label">E-mail</span>
                                <span className="contact-value">contato@exemplo.com</span>
                            </div>
                        </a>
                        <button
                            className={`contact-copy-btn ${copiedStates.gmail ? 'copied' : ''}`}
                            onClick={(e) => handleCopy("contato@exemplo.com", "gmail", e)}
                            aria-label="Copiar endereço de e-mail"
                        >
                            {copiedStates.gmail ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="copy-icon">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="copy-icon">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            )}
                            <span className="tooltip-text">{copiedStates.gmail ? "Copiado!" : "Copiar"}</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
