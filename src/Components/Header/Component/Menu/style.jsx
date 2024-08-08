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

    .li {
        padding: 10px;
        cursor: pointer;
        position: relative; 
    }

    .li::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 2px; 
        background-color: transparent; 
        transition: background-color 0.3s ease; 
    }

    .li:hover::after {
        background-color: #C9A9AE; 
    }


    @media (max-width: 900px) {
        display: none;
    }
`