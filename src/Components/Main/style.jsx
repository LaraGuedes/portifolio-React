import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    margin-top: 180px;
    gap: 5%;

    .about{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin-top: 90px;
        position: relative;
    }

    .name{
        color: gray;
        font-weight: 300;
        font-size: clamp(1em, 1em + 1.5vw, 2.5em);
    }

    .job{
            font-size: clamp(1.75em, 1em + 3vw, 4.5em);
            line-height: min(4vw, 60px);
            font-weight: 800;
                opacity: 1;
    transform: translateZ(0);
    }

    .research{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        gap: 30px;
        position: relative;
    }

    .img{
        width: min(80%, 500px);
    }
`