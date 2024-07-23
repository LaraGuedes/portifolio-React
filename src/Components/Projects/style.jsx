import styled from "styled-components";

export const OrganizeCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;

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

    .highlight {
        font-weight: bold;
        // color: #007bff; /* Ajuste a cor conforme necessário */
    }

    @media (min-width: 900px) {
        margin-top: 80px;
    }

    @media (max-width: 900px) {
        margin-top: 50px;
    }
`;