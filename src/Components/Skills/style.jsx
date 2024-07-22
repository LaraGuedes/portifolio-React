import styled from "styled-components";

export const SkillsComponent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  position: relative;
  overflow: hidden;

  .h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: clamp(1em, 1em + 1.5vw, 2.5em);
    font-weight: 800;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 800px;
  }
`;

export const CornerGif = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;

  &.top-left {
    top: 10px;
    left: 10px;
  }

  &.top-right {
    top: 10px;
    right: 10px;
  }

  &.bottom-left {
    bottom: 10px;
    left: 10px;
  }

  &.bottom-right {
    bottom: 10px;
    right: 10px;
  }
`;
