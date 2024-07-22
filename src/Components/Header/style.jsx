import styled from "styled-components";

export const DivHeader = styled.div`
    background: #FCF6F8;
    width: 100%;
    justify-content: center;
    align-items: center;
    z-index: 10;
    opacity: 0.9;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media (min-width: 900px) {
        height: 150px;
        display: flex;
        position: fixed;
    }

    @media (max-width: 900px) {
        height: 100px; 
    }
`;
