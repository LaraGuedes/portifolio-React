import React from "react"
import {createGlobalStyle} from "styled-components"
import Portifolio from "./Components/portifolio.jsx"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    // font-family: "Calligraffitti", cursive;
    font-family: "Epilogue", sans-serif;
  }

`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Portifolio/>
    </>
  )
}
export default App