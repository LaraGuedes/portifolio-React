import React from "react";

import Header from "./Header/header";
import Main from "./Main/main";
import Projects from "./Projects/projects";
import About from "./About/about";


import fotoPrincipal from "../../public/imagensPorfolio/fotoPrincipal.png"; 
import imagemSobre from "../../public/imagensPorfolio/imagemSobre.png"
// import Technologies from "./Technologies/technologies.jsx";


function Portifolio() {
    return (
        <div>
            <Header 
                name="Lara"
                links={["Inicio", "Sobre", "Projetos", "Contato"]}>    
            </Header>
            <Main
                name="Lara calegário Guedes"
                job="Desenvolvedora"
                ex="Front-End"
                about="Café, risadas e um mundo para transformar com tecnologia"
                img={fotoPrincipal}
                describe="Foto principal do portfólio"
            />
            {/* <About
                img={imagemSobre}
                title="Um pouco sobre"
                name="Lara Calegario Guedes"
            ></About> */}
            {/* <Technologies></Technologies> */}
            {/* <Projects></Projects> */}
        </div>
    )
}

export default Portifolio;
