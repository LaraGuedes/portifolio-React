import React from "react";
import * as S from "./Style.jsx"

// imagens
import EU from "./imagensPorfolio/portifolio.png"

function Sobre() {
    return (
        <S.sectionSobre>
            <section className="sobre">
                <div id="sobre-texto">
                    <h2>VENHA ME CONHECER</h2>
                    <br></br>
                    <p>
                        Sou apaixonada por tecnologia e inovação, e a cada momento busco aprender um pouco mais!
                        <br />
                        Curso o técnico em informática para internet no Instituto Federal do Espírito Santo - campus
                        Colatina, que me permitiu conhecer diversas tecnologias. Hoje participo da equipe de robótica do
                        Instituto Federal que me possibilitou ter a experiência de trabalhar com código em equipe, obter
                        experiência com o git e com versionamento de código, também atuo como monitora de programação
                        para jovens.
                        Nesta jornada conheci o Elas na Tech através de uma propaganda no Instagram e me apaixonei pelo projeto.
                    </p>
                </div>
                <div id="sobre-img">
                    <img src={EU} alt="Foto" width="100%" />
                </div>
            </section>

            
        </S.sectionSobre>
    );
}

export default Sobre;
