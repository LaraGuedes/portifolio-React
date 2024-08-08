import styled, { keyframes } from 'styled-components';

const borderAnimation = keyframes`
  0% {
    border-radius: 0;
  }
  100% {
    border-radius: 50%;
  }
`;

export const ContainerElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  width: 120px;
//   transition: transform 0.2s, border 0.3s, border-radius 0.3s;
  cursor: pointer;

  &.clicked {
    // border: 4px solid #C9A9AE;
    // animation: ${borderAnimation} 0.3s forwards;
  }

  .img {
    margin-top: 0.7rem;
    width: 80px;
    transition: filter 0.3s ease;
  }

  @media screen and (min-width: 900px) {
    .img.clicked {
      filter: grayscale(0);
    }

    .img{
      filter: grayscale(1);
    }
  }

  .img:hover {
    transform: scale(1.1);
    // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .text {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
  }
`;
