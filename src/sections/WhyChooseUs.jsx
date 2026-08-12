import Card from '../components/Card';
import CardGrid from '../components/CardGrid';

import atendimentoHumanizadoImg from "../assets/icons/atendimento-humanizado.png";
import excelenciaClinicaImg from "../assets/icons/excelencia-clinica.png"
import resultadosNaturaisImg from "../assets/icons/resultados-naturais.png";
import ambienteAcolhedorImg from "../assets/icons/ambiente-acolhedor.png"
import tratamentosAcessiveisImg from "../assets/icons/tratamentos-acessiveis.png";
import confiancaCredibilidadeImg from "../assets/icons/confianca-e-credibilidade.png";

/**
 * "Why Choose Us" section component.
 * Presents the clinic's key differentiators laid out in a card grid.
 * 
 * @returns {JSX.Element} The rendered WhyChooseUs section.
 */
function WhyChooseUs() {
    const reasons = [
        { image: atendimentoHumanizadoImg, title: "Atendimento Humanizado", desc: "Cuidamos de cada paciente com atenção, empatia e respeito." },
        { image: excelenciaClinicaImg, title: "Excelência Clínica", desc: "Unimos experiência, conhecimento e profissionalismo para oferecer o melhor cuidado odontológico." },
        { image: resultadosNaturaisImg, title: "Resultados Naturais", desc: "Buscamos resultados que unem saúde, funcionalidade e estética para valorizar o seu sorriso." },
        { image: ambienteAcolhedorImg, title: "Ambiente Acolhedor", desc: "Um espaço pensado para oferecer tranquilidade, bem-estar e uma experiência agradável do início ao fim." },
        { image: tratamentosAcessiveisImg, title: "Tratamentos Acessíveis", desc: "Oferecemos tratamentos de qualidade com condições de pagamento que cabem no seu planejamento." },
        { image: confiancaCredibilidadeImg, title: "Confiança e Credibilidade", desc: "A confiança dos nossos pacientes é refletida em cada avaliação e recomendação que recebemos." }
    ];

    return (
        <section id="why-choose-us-section">
            <h2 id="why-choose-us-title">Por que escolher a ClinicaOdontologica?</h2>
            <CardGrid>
                {reasons.map((r, index) => (
                    <Card title={r.title} description={r.desc} image={r.image} key={index} />
                ))}
            </CardGrid>
        </section>
    );
}

export default WhyChooseUs;
