import styled from "styled-components";

export const AboutDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    margin-top: 80px;
    gap: 50px;

    .img{
            width: min(90%, 600px);
            border-radius: 10px;
            border: 2px solid white;
            margin-left: -10%;
    }

    .about{
        position: relative;
    }

    .p{
        max-width: 500px;
    }

    .h2{
        // color: var(--lightGray);
        font-weight: 300;
        font-size: clamp(1em, 1em + 1.5vw, 2.5em);
    }

    .h1{
        font-size: clamp(1em, 1em + 1.5vw, 2.5em);
        font-weight: 800;
        margin-bottom: 30px;
    }

    .point{
        color: #E8CFD2;
    }
`