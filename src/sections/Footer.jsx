import './Footer.css';

function Footer() {
    return (
        <footer className="footer-section">
            <p>&copy; {new Date().getFullYear()} Clínica Odontológica. Todos os direitos reservados.</p>
            <p>Site desenvolvido por <a href="https://github.com/adelino-dev" target="_blank" rel="noopener noreferrer">adelino-dev</a></p>
        </footer>
    );
}

export default Footer;
