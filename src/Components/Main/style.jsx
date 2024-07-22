import styled from "styled-components";

export const Container = styled.div`
    .about {
        flex-direction: column;
        justify-content: start;
        align-items: start;
        margin-top: 90px;
        position: relative;
        padding: 0 10%;
    }

    .name {
        color: gray;
        font-weight: 300;
        font-size: clamp(1em, 1em + 1.5vw, 2.5em);
    }

    .job {
        font-size: clamp(1.75em, 1em + 3vw, 4.5em);
        line-height: min(4vw, 60px);
        font-weight: 800;
        opacity: 1;
        transform: translateZ(0);
    }

    .research {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        gap: 30px;
        position: relative;
    }

    @media (min-width: 900px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        padding-top: 180px;
        gap: 5%;

        .research {
            flex-direction: row;
        }
    }

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        margin-top: 20px;

        .research {
            flex-direction: column;
            margin-top: 20px;
        }

        .about {
            align-items: center;
            margin-top: 20px;
        }

        .job {
            line-height: 25px;
        }

        p {
            text-align: center;
        }
    }
`;
