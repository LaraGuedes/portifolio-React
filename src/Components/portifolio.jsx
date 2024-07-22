// src/Components/portifolio.jsx
import React from "react";

import Header from "./Header/header";
import Main from "./Main/main";
import Projects from "./Projects/projects";
import About from "./About/about";
import Form from "./Form/form";

import fotoPrincipal from "../../public/imagensPorfolio/fotoPrincipal.png";
import imagemSobre from "../../public/imagensPorfolio/imagemSobre.png";
import Skills from "./Skills/skills";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .project{
    max-width: 1500px;
    margin: auto;
    background: #FCF6F8;
  }

`;

function Portifolio() {


    return (
        <div className="project">
            <GlobalStyle />
            <Header
                name="Lara"
                links={["Inicio", "Sobre", "Projetos", "Contato"]}
            />
            <Main
                name="Lara calegário Guedes"
                job="Desenvolvedora"
                ex="Front-End"
                about="Café, risadas e um mundo para transformar com tecnologia"
                img={fotoPrincipal}
                describe="Foto principal do portfólio"
            />
            <About
        img={imagemSobre}
        title="Um pouco sobre"
        name="Lara Calegario Guedes"
      />
      <Skills />
      <Projects />
        <Form></Form>
        </div>
    );
}

export default Portifolio;
