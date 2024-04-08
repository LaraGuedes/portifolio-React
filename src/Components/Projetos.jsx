import React from "react"
import * as S from "./Style.jsx";

// Imagens
import Fantastika from "./imagensPorfolio/fantastika.png"
import Roupas from "./imagensPorfolio/roupa.png"

function Projetos(){
return(
    <S.sectionProjetos>
        <div className="conteudoProjeto">
        <div className="projetos">
            <div className="cars">
                <div className="imagem-projeto">
                    <img src={Fantastika} alt="" width="100%"/>
                </div>
                <div className="texto">
                    <p>
                        Projeto feito em HTML e CSS durante o curso, além disso nesse projeto foi utilizada tecnica de versionamento de código.
                    </p>
                    <br />
                    <a href="https://laraguedes.github.io/Fantasia/" target="_blank" className="link-saiba-mais">
                        <button className="saibaMais">Saiba mais</button>
                    </a>
                </div>
            </div>
            <div className="cars">
                <div className="imagem-projeto">
                    <img src={Roupas} alt="" width="100%"/>
                </div>
                <div className="texto">
                    <p>
                    Projeto feito em HTML e CSS durante o curso, para aprofundar os conhecimentos obtidos durante o curso.
                    </p>
                    <a href="https://laraguedes.github.io/lojaDeRoupas/" target="_blank" className="link-saiba-mais">
                        <button className="saibaMais">Saiba mais</button>
                    </a>
                </div>
            </div>
        </div>
        <button className="maisProjetos"><a href="https://github.com/LaraGuedes" target="_blank"><p className="mais">MAIS PROJETOS</p></a></button>
        </div>
    </S.sectionProjetos>
)
}

export default Projetos