import React from "react";
import Card from "../Card/card";  // Certifique-se de que o caminho está correto
import styled from "styled-components";  // Adicione esta linha se estiver usando styled-components

// Se você estiver usando styled-components, defina OrganizeCard aqui
const OrganizeCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

function Projects() {
    const cardsData = [
        {
            title: 'Card 1',
            description: 'Esta é a descrição do Card 1.',
            imageUrl: 'https://via.placeholder.com/300',
            buttonText: 'Saiba mais'
        },
        {
            title: 'Card 2',
            description: 'Esta é a descrição do Card 2.',
            imageUrl: 'https://via.placeholder.com/300',
            buttonText: 'Saiba mais'
        },
        {
            title: 'Card 3',
            description: 'Esta é a descrição do Card 3.',
            imageUrl: 'https://via.placeholder.com/300',
            buttonText: 'Saiba mais'
        },
        {
            title: 'Card 4',
            description: 'Esta é a descrição do Card 4.',
            imageUrl: 'https://via.placeholder.com/300',
            buttonText: 'Saiba mais'
        },
        {
            title: 'Card 5',
            description: 'Esta é a descrição do Card 5.',
            imageUrl: 'https://via.placeholder.com/300',
            buttonText: 'Saiba mais'
        }
    ];

    return (
        <OrganizeCard>
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    buttonText={card.buttonText}
                />
            ))}
        </OrganizeCard>
    );
};

export default Projects;
