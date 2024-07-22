import styled from "styled-components";

export const AboutDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
    gap: 50px;
    overflow: hidden;

    .photo {
    width: min(90%, 600px);
    border-radius: 10px;
    }

    .about {
    text-align: center; /* Centraliza o texto */
    }

    .p {
    max-width: 500px;
    margin: 0 auto; /* Centraliza o parágrafo */
    }

    .h2 {
    font-weight: 300;
    font-size: clamp(1em, 1em + 1.5vw, 2.5em);
    }

    .h1 {
    font-size: clamp(1em, 1em + 1.5vw, 2.5em);
    font-weight: 800;
    margin-bottom: 30px;
    }

    .point {
    color: #E8CFD2;
    }

    .containerBtn {
    margin-top: 20px;
    z-index: 2;
    display: flex;
    justify-content: center;
    }

    @media (max-width: 900px) {
    .photo {
        width: 80%;
        margin-bottom: 20px;
    }

    .about {
        margin-left: 0;
    }

    .containerBtn {
        margin-top: 20px;
    }
    }
`;
