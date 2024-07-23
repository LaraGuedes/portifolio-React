import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: min(50px, 10%);
    margin: 16px;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
    background-color: #e8cfd25e;
    max-width: 1500px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    min-height: 400px; 
    flex-direction: row-reverse;

    &.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .card-image {
        width: 300px;
        border-radius: 8px;
        margin-bottom: 16px;
    }

    .card-title {
        font-size: 1.5em;
        margin: 16px 0 8px;
    }

    .card-description {
        font-size: 1em;
        margin-bottom: 16px;
        text-align: justify;
        color: #666;
        max-width: 600px; 
        white-space: pre-wrap; 
        word-wrap: break-word; 
    }

    .highlight {
        font-weight: bold;
    }

    .card-button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 30px;
        text-align: center;
        width: 100%;
    }

    .about {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        gap: 30px;
        margin: 30px;
        width: 100%; 
        height: 100%;
    }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        width: 80vw !important;
        gap: 20px !important;

        .card-image {
            width: 100%;
        }

        .card-description {
            text-align: center;
        }

        .card-button {
            display: flex;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
        }
    }
`;
