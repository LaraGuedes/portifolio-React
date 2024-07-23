import styled from "styled-components";

export const Button = styled.button`
    border: 0.5px solid white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 15px 30px;
    border-radius: 20px;
    gap: 15px;
    font-weight: 800;
    font-size: 18px;
    background-color: white;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        background-color: #f0f0f0;
        transform: translateY(-5px);
    }

    .link {
        color: black;
        text-decoration: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img {
        padding: 2px;
        width: 30px;
    }
`;
