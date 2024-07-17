import styled from "styled-components";

export const CardContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    text-align: left;
    opacity: 0;
    transition: opacity 1s ease-in-out;

    &.visible {
        opacity: 1;
    }

    .card-image {
        width: 100%;
        height: auto;
        border-radius: 8px;
    }

    .card-title {
        font-size: 1.5em;
        margin: 16px 0 8px;
    }

    .card-description {
        font-size: 1em;
        margin-bottom: 16px;
        color: #666;
    }

    .card-button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
    }

    .card-button:hover {
        background-color: #0056b3;
    }
`;
