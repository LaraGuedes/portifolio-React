import React from "react";
import Card from "../Card/card";  
import styled from "styled-components";  

// Projetos - Usando caminhos relativos à pasta `public`
const Terrestre = "/projetos/terrestre.png";
const Carros = "/projetos/carros.png";
const MedVita = "/projetos/mediVita.png";  // Verifique se o nome do arquivo está correto
const Starbucks = "/projetos/starbucks.png";

const OrganizeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
    margin-top: 80px;

    .modalCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
    }

    .title {
        font-size: clamp(1em, 1em + 1.5vw, 2.5em);
        font-weight: 800;
        margin-bottom: 30px;
    }
`;

function Projects() {
    const cardsData = [
        {
            title: 'Card 1',
            description: 'O desafio era feito em torno dos 17 Objetivos da ONU de Desenvolvimento Sustentável no Brasil, e para esse desafio eu escolhi o Objetivo 15 - Vida Terrestre: Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade. Página feita com as linguagens de marcação HTML e CSS, com o esboço final do site, tendo nela senssões de conteúdo sobre o tema escolhido. A página foi feita de forma que se para se adaptar em diversas telas.',
            imageUrl: Terrestre,
            buttonLink: 'https://github.com/LaraGuedes/vidaTerrestre-final',
            deploy: 'https://laraguedes.github.io/vidaTerrestre-final/',
        },
        {
            title: 'Card 2',
            description: 'Esta é a descrição do Card 2.',
            imageUrl: Carros,
            buttonLink: 'https://github.com/LaraGuedes/bibliotedaDeCarros',
            deploy: 'https://laraguedes.github.io/bibliotedaDeCarros/',
        },
        {
            title: 'Card 3',
            description: `Este projeto visa criar um portal simples para pacientes, permitindo que eles se cadastrem, atualizem suas informações pessoais e visualizem seu histórico de consultas. Os pacientes também podem agendar consultas online, ver as consultas agendadas/canceladas e reagendar consultas conforme necessário. Para a criação do layout do projeto foi utilizado o Figma e para a construção do projeto foi utilizado a framework React utilizando styled components, junto com CSS, HTML e JS.`,
            imageUrl: MedVita,
            buttonLink: 'https://github.com/LaraGuedes/projetoHackton',
            deploy: 'https://medvita.netlify.app/',
        },
        {
            title: 'Card 4',
            description: 'Projeto que desenvolvi, uma página do Starbucks, durante a missão "Programador do Zero". Além de aplicar os conceitos, acrescentei detalhes adicionais para enriquecer o projeto. Para esse projeto foram utilizadas as seguintes tecnologias: Linguagem de marcação HTML; Linguagem de estilização CSS; Linguagem de programação JavaScript.',
            imageUrl: Starbucks,
            buttonLink: 'https://github.com/LaraGuedes/Starbucks-landingPage',
            deploy: 'https://laraguedes.github.io/Starbucks-landingPage/',
        },
    ];

    return (
        <OrganizeCard>
            <h1 className="title">Projetos</h1>
            <div className="modalCard">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card?.title}
                        description={card?.description}
                        imageUrl={card?.imageUrl}
                        buttonLink={card?.buttonLink}
                        deploy={card?.deploy}
                    />
                ))}
            </div>
        </OrganizeCard>
    );
}

export default Projects;
