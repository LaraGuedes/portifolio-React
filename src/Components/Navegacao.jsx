import React from "react"
import Inicio from "./Inicio.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import Habilidades from "./Habilidades.jsx"
import * as S from "./Style.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function Navegacao() {
    return (
        <>
            <BrowserRouter>
                <S.Nav>
                    <S.Ul>
                        {/* to = para, um link para o sobre, projetos e início. Me leve para tal lugar */}

                        <li> <Link to="/"> Inicio </Link>  </li>
                        <li> <Link to="/Sobre"> Sobre </Link>   </li>
                        <li> <Link to="/Habilidades"> Habilidades </Link>   </li>
                        <li> <Link to="/Projetos"> Projetos </Link>  </li>
                    </S.Ul>
                </S.Nav>


                <Routes>
                    {/* path = caminho: Configuração dos dois, Link="/Sobre" com Route path="Sobre" */}
                    {/* element: configura para qual component quero ir element={ativa o componente <Sobre />} */}

                    <Route path="/" element={<Inicio />} />
                    <Route path="Sobre" element={<Sobre />} />
                    <Route path="Habilidades" element={<Habilidades />} />
                    <Route path="Projetos" element={<Projetos />} />

                </Routes>

            </BrowserRouter>

        </>

    )
}
export default Navegacao