import styled from "styled-components"

// imagens
import Fundo from "./imagensPorfolio/portifolio1.png"

//----Estilização da Navegação

export const Nav = styled.nav`
background-color: black;
`

export const Ul = styled.ul`
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: center;
list-style: none;

a{
font-size: 1.5rem;
text-decoration: none;
color: white;
}
`

//----Estilização do Início

export const SectionInicio = styled.section`
header {
    width: 100%;
    height: 700px;
    background-color: #FCF6F8;
}


.header-fundo {
    height: 100%;
    width: 100%;
    padding-top: 5%;
    margin: auto;
    background-image: url(${Fundo});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    border-bottom: 1px solid #C9A9AE;
    justify-content: center;
}

#header-foto img {
    transform: rotate(-7deg);
}

img, svg {
    vertical-align: middle;
}

#header-foto {
    display: flex;
    transform: rotate(7deg);
    width: 25%;
    height: 80%;
    padding: 5px;
    margin-top: 10px;
    margin-left: 10%;
    background-color: #f0f0f0;
}

#header-texto {
    width: 50%;
    height: 30%;
}

#header-texto {
    text-align: center;
    margin: auto;
}

.logo{
    width: 7%;
    padding: 7px;
}

@media screen and (min-width: 768px) {
    
    .header-fundo {
        display: flex;
    }
    

}
`

export const ContainerDivs = styled.section`
display: flex;
flex-direction: column;
justify-content: space-evenly;
height:40vh ; 

`


export const BoxInicio = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`


export const BoxInicio2 = styled.div`
display: flex;
justify-content: space-evenly;
`

// Estilizando o sobre

export const sectionSobre = styled.section`


.sobre {
    width: 100%;
    height: 400px;
    margin: auto;
}

#sobre-texto {
    text-align: justify;
    margin: auto;
    padding: 10px;
}
.h2, h2 {
    font-size: 2rem;
}

#sobre-img {
    display: flex;
}

@media screen and (min-width: 768px) {
    .sobre {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #sobre-texto{
        text-align: center;
        width: 70%;
    }
    

}
`

// Habilidades
export const sectionHabilidade = styled.section`

.skils {
    width: 100%;
}

habilidades {
    width: 40%;
}
.habilidades {
    background-color: #FCF6F8;
    padding: 9px;
    border-radius: 9px;
    margin: 50px 40px;
    box-shadow: 0 14px 20px;
}

.habilidades li {
    padding: 9px;
    margin: 10px 0;
    list-style: none;
}

.habilidades h2 {
    text-align: center;
}

.bar {
    background-color: whitesmoke;
    display: block;
    height: 24px;
    border: 1px solid rgb(0, 0, 0.3);
    transition: all 0.3 cubic-bezier(.25, .8, .25, 1);
}

.bar span {
    height: 20px;
    float: left;
    background: linear-gradient(135deg, #C9A9AE, rgb(233, 224, 232) 100%);
}

.html {
    width: 90%;
    animation: html 3s;
}

.css {
    width: 70%;
    animation: css 3s;
}

.js {
    width: 50%;
    animation: js 3s;
}

.python {
    width: 60%;
    animation: python 3s;
}

.java {
    width: 40%;
    animation: java 3s;
}


.competencias {
    background-color: #FCF6F8;
    padding: 9px;
    border-radius: 9px;
    margin: 50px 40px;
    box-shadow: 0 14px 20px;
}

.competencias li {
    padding: 10px;
    font-size: 20px;
}

dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
ol, ul {
    padding-left: 2rem;
}

.competencias h2 {
    text-align: center;
}

@media screen and (min-width: 768px) {
    .skils {
        display: flex;
        justify-content: center;
    }

    .competencias {
        width: 30%;
    }
}
`

// Projetos

export const sectionProjetos = styled.section`
.conteudoProjeto{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.mais{
    color: blue;
    padding: 20px;
}

a{
    text-decoration: none;
}

.projetos {
    display: flex;
    margin-top: 20px;
    justify-content: space-around;
    flex-wrap: wrap;
}

.cars {
    width: 400px;
    height: 300px;
    margin: 20px;
    padding: 15px;
    border: 3px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.imagem-projeto {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.imagem-projeto img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 8px;
}

.cars p {
    font-size: 16px;
    margin: 10px 0;
    text-align: center;
}

button {
    background-color: black;
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    align-self: center;
}

button:hover {
    background-color: #0056b3;
}

@media screen and (max-width: 768px) {
    .projetos {
        flex-direction: column;
        align-items: center;
    }

    .cars {
        width: 80%;
    }
}

`