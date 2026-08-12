import Card from '../components/Card';
import CardGrid from '../components/CardGrid';

import aparelhosOrtodonticosImg from "../assets/icons/aparelhos-ortodonticos.png";
import restauracoesDentariasImg from "../assets/icons/restauracoes-dentarias.png"
import protesesDentariasImg from "../assets/icons/proteses-dentarias.png";
import limpezaPrevencaoImg from "../assets/icons/limpeza-e-prevencao.png"
import tratamentoCanalImg from "../assets/icons/tratamento-de-canal.png";
import extracoesDentariasImg from "../assets/icons/extracoes-dentarias.png";

/**
 * "Treatments" section component.
 * Presents the clinic's key treatments laid out in a card grid.
 * 
 * @returns {JSX.Element} The rendered Treatments section.
 */
function Treatments() {
    const treatmentsList = [
        { image: aparelhosOrtodonticosImg, title: "Aparelhos Ortodônticos", desc: "Alinhamos o seu sorriso com conforto e tratamentos personalizados." },
        { image: restauracoesDentariasImg, title: "Restaurações Dentárias", desc: "Recupere a estética e a função dos seus dentes" },
        { image: protesesDentariasImg, title: "Próteses Dentárias", desc: "Soluções personalizadas para devolver seu sorriso." },
        { image: limpezaPrevencaoImg, title: "Limpeza e Prevenção", desc: "Cuidados essenciais para manter sua saúde bucal em dia." },
        { image: tratamentoCanalImg, title: "Tratamento de Canal", desc: "Preservamos seus dentes com segurança e conforto." },
        { image: extracoesDentariasImg, title: "Extrações Dentárias", desc: "Procedimentos realizados com técnica e atenção ao seu bem-estar." }
    ];

    return (
        <section id="treatments-section">
            <h2 id="treatments-title">Nossos tratamentos</h2>
            <CardGrid>
                {treatmentsList.map((t, index) => (
                    <Card title={t.title} description={t.desc} image={t.image} key={index} />
                ))}
            </CardGrid>
        </section>
    );
}

export default Treatments;
