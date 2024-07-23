import styled from "styled-components";


export const Ul = styled.ul`
    list-style: none;
    padding-left: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4vw;
    font-size: 18px;

    .li{
        padding: 10px;
    }

    @media (max-width: 900px) {
        display: none;
    }
`