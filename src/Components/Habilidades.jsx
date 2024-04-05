import React from "react";
import * as S from "./Style.jsx"

// imagens

function Habilidades() {
    return (
        <S.sectionHabilidade>
            <section class="skils">
                <div class="habilidades">
                    <h2>Minhas habilidades</h2>

                    <li>
                        <h4>HTML (90%) </h4>
                        <span class="bar"> <span class="html"> </span> </span>
                    </li>

                    <li>
                        <h4>CSS (70%) </h4>
                        <span class="bar"> <span class="css"> </span> </span>
                    </li>

                    <li>
                        <h4> JS (50%) </h4>
                        <span class="bar"> <span class="js"> </span> </span>
                    </li>

                    <li>
                        <h4> Python (60%) </h4>
                        <span class="bar"> <span class="python"> </span> </span>
                    </li>

                    <li>
                        <h4> Java (40%) </h4>
                        <span class="bar"> <span class="java"> </span> </span>
                    </li>
                </div>

                <div class="competencias">
                    <h2>Competências interpessoais</h2>

                    <ul>
                        <li> Trabalho em equipe </li>
                        <li> Liderança </li>
                        <li> Raciocínio lógico </li>
                        <li> Agilidade de aprendizado</li>
                        <li> Resolução de problemas</li>
                        <li> Pensamento crítico</li>
                        <li> Habilidades analíticas</li>
                    </ul>
                </div>

            </section>

            
        </S.sectionHabilidade>
    );
}

export default  Habilidades;

