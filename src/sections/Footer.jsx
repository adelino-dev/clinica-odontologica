import './Footer.css';

function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} Clínica Odontológica. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
