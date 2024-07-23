import React, { useState } from "react";

// Componentes
import Card from "./Components/Card/card";
import Button from "../Button/button";

// Projetos
const Terrestre = "/projetos/terrestre.png";
const Carros = "/projetos/carros.png";
const MedVita = "/projetos/mediVita.png";
const Starbucks = "/projetos/starbucks.png";
const Fantasia = "/projetos/fantasia.png";
const Pokedex = "/projetos/pokedex.png";

// Estilos
import { OrganizeCard } from "./style";


function Projects() {
    const allCardsData = [
        {
            title: 'Card 1',
            description: 'O desafio era feito em torno dos 17 Objetivos da ONU de Desenvolvimento Sustentável no Brasil, e para esse desafio eu escolhi o Objetivo 15 - Vida Terrestre: Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade. Página feita com as linguagens de marcação <span class="highlight">HTML</span> e <span class="highlight">CSS</span>, com o esboço final do site, tendo nela senssões de conteúdo sobre o tema escolhido. A página foi feita de forma que se adapte em diversas telas.',
            imageUrl: Terrestre,
            buttonLink: 'https://github.com/LaraGuedes/vidaTerrestre-final',
            deploy: 'https://laraguedes.github.io/vidaTerrestre-final/',
        },
        {
            title: 'Card 2',
            description: 'Para o projeto foi utilizada a linguagem de marcação <span class="highlight">HTML</span> e a linguagem de programação <span class="highlight">JS</span>, com a framework <span class="highlight">bootstrap</span>. Nela foi utilizado uma lista de carros aparecendo de forma aleatória, também foi adicionado a proposta para <span class="highlight">mudança da cor</span> de fundo.',
            imageUrl: Carros,
            buttonLink: 'https://github.com/LaraGuedes/bibliotedaDeCarros',
            deploy: 'https://laraguedes.github.io/bibliotedaDeCarros/',
        },
        {
            title: 'Card 3',
            description: `Este projeto visa criar um portal simples para pacientes, permitindo que eles se cadastrem, atualizem suas informações pessoais e visualizem seu histórico de consultas. Os pacientes também podem agendar consultas online, ver as consultas agendadas/canceladas e reagendar consultas conforme necessário. Para a criação do layout do projeto foi utilizado o <span class="highlight">Figma</span> e para a construção do projeto foi utilizado a framework <span class="highlight">React</span> utilizando <span class="highlight">styled components</span>, junto com <span class="highlight">CSS</span>, <span class="highlight">HTML</span> e <span class="highlight">JS</span>.`,
            imageUrl: MedVita,
            buttonLink: 'https://github.com/LaraGuedes/projetoHackton',
            deploy: 'https://medvita.netlify.app/',
        },
        {
            title: 'Card 4',
            description: 'Projeto que desenvolvi, uma página do Starbucks, durante a missão "Programador do Zero". Além de aplicar os conceitos, acrescentei detalhes adicionais para enriquecer o projeto. Para esse projeto foram utilizadas as seguintes tecnologias: Linguagem de marcação <span class="highlight">HTML</span>; Linguagem de estilização <span class="highlight">CSS</span>; Linguagem de programação <span class="highlight">JavaScript</span>.',
            imageUrl: Starbucks,
            buttonLink: 'https://github.com/LaraGuedes/Starbucks-landingPage',
            deploy: 'https://laraguedes.github.io/Starbucks-landingPage/',
        },
        {
            title: 'Card 5',
            description: 'O projeto foi desenvolvido com o objetivo de treinar e aprimorar habilidades em <span class="highlight">HTML</span> e <span class="highlight">CSS</span>, focando especificamente em design <span class="highlight">responsivo</span>. A ideia principal era criar uma página web que se adaptasse de forma eficaz a diferentes tamanhos de tela, proporcionando uma experiência de usuário consistente e agradável, seja em dispositivos móveis, tablets ou desktops.',
            imageUrl: Fantasia,
            buttonLink: 'https://github.com/LaraGuedes/Fantasia',
            deploy: 'https://laraguedes.github.io/Fantasia/',
        },
        {
            title: 'Card 6',
            description: 'O projeto foi criado em <span class="highlight">HTML</span>, <span class="highlight">CSS</span> e <span class="highlight">JS</span>, nesse projeto o layout foi cuidadosamente criado passo a passo durante o curso; Nele foram implementadas técnicas de design <span class="highlight">responsivo</span>, garantindo que a Pokedex se adapte perfeitamente a diferentes dispositivos; Além disso, foi feita a conexão de uma <span class="highlight">API</span> para a solicitação de mais pokémons;',
            imageUrl: Pokedex,
            buttonLink: 'https://github.com/LaraGuedes/pokedex',
            deploy: 'https://laraguedes.github.io/pokedex/',
        },
    ];


    const [visibleCards, setVisibleCards] = useState(4); // Mostrar 4 cards inicialmente
    const [showingMore, setShowingMore] = useState(false); // Estado para controlar se está mostrando mais ou menos cards

    const showMoreCards = () => {
        setVisibleCards((prevVisibleCards) => prevVisibleCards + 4); // Mostrar mais 4 cards ao clicar
        setShowingMore(true); // Atualiza o estado para mostrar mais
    };

    const showLessCards = () => {
        setVisibleCards(4); // Mostrar apenas 4 cards
        setShowingMore(false); // Atualiza o estado para mostrar menos
    };

    return (
        <OrganizeCard>
            <h1 className="title">Projetos</h1>
            <div className="modalCard">
                {allCardsData.slice(0, visibleCards).map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={<span dangerouslySetInnerHTML={{ __html: card.description }} />}
                        imageUrl={card.imageUrl}
                        buttonLink={card.buttonLink}
                        deploy={card.deploy}
                    />
                ))}
            </div>
            {showingMore ? (
                <Button name="Ver menos" onClick={showLessCards} />
            ) : (
                visibleCards < allCardsData.length && (
                    <Button name="Ver mais" onClick={showMoreCards} />
                )
            )}
        </OrganizeCard>
    );
}

export default Projects;
