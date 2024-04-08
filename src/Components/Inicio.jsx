import React from "react";
import * as S from "./Style.jsx";

// Imagens
import Linkedin from "./imagensPorfolio/linkedin.png";
import Git from "./imagensPorfolio/logotipo-do-github.png"
import Logo from "./imagensPorfolio/eu2.jpeg";

function Inicio() {
    return (
        <S.SectionInicio>
            <header>
                <div className="header-fundo">
                    <div id="header-foto">
                        <img src={Logo} alt="foto-inicial" width="100%" />
                    </div>
                    <div id="header-texto">
                        <h1>Olá, sou a Lara!</h1>
                        <br />
                        <p>Desenvolvedora de softwares, focada em desenvolvimento web.</p>
                        <a href="https://www.linkedin.com/in/lara-caleg%C3%A1rio-guedes-293559267/" target="_blank">
                            <img src={Linkedin} alt="" className="logo" />
                        </a>
                        <a
                            href="https://github.com/LaraGuedes"
                            target="_blank"
                        >
                            <img src={Git} alt="" className="logo"/>
                        </a>
                    </div>
                </div>
            </header>
        </S.SectionInicio>
    );
}

export default Inicio;
