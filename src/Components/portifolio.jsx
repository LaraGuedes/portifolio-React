import React from "react";

// Components
import Header from "./Header/header";
import Main from "./Main/main";
import Projects from "./Projects/projects";
import About from "./About/about";
import Form from "./Form/form";
import Footer from "./Footer/footer"
import Skills from "./Skills/skills";

// Imagens
import fotoPrincipal from "/public/imagensPorfolio/fotoPrincipal.png";
import imagemSobre from "/imagensPorfolio/imagemSobre.png";
import Logo from "/imagensPorfolio/logo-transparente.png"

// Estilo
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
        img={Logo}
        describe="Logo"
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
        about="Estudante de Técnico em Informática para Internet no Instituto Federal do Espírito Santo, com 
                experiência prática em desenvolvimento de software, monitoria de programação e robótica. 
                Proativa e dedicada, já participei de projetos de iniciação científica, monitoria e assistência 
                educacional, desenvolvendo habilidades técnicas e interpessoais. Reconhecida por prêmios em 
                competições de robótica e inovação, busco aplicar meu conhecimento em Python, JavaScript e 
                outras tecnologias para contribuir com soluções criativas e eficazes."
      />
      <Skills />
      <Projects />
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

export default Portifolio;
