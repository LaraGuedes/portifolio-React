import styled from "styled-components";

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .content {
    z-index: 2;
    position: relative;
    padding: 30px 0;
    gap: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  h2 {
    margin-bottom: 20px;
    font-size: clamp(1em, 1em + 1vw, 1.7em);
    font-weight: 300;
    color: gray;
  }

  h2 span {
    color: #333;
    font-size: clamp(1em, 1em + 2vw, 2.5em);
    font-weight: 800;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    width: min(60vw, 400px);
    gap: 40px;
  }

  input, textarea {
    margin-bottom: 10px;
    padding: 10px;
    font-size: 16px;
    width: 100%;
    box-shadow: 0px 4px 9.4px 0px rgba(0, 0, 0, 0.2509803922);
    border: none;
    border-radius: 10px;
    padding: 10px;
    outline: none;
  }

  textarea {
    height: 300px;
  }

  button {
    padding: 10px;
    font-size: 16px;
    background-color: #C9A9AE;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover {
    background-color: #e5a800;
  }

  .contact-info {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
  }

  .contact-info a {
    text-decoration: none;
    color: #333;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .contact-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.3px solid white;
    padding: 5px;
    background: #C9A9AE;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2509803922);
    object-fit: cover;
  }

  @media (max-width: 900px) {
    .content {
      flex-direction: column;
    }
  }
`;
