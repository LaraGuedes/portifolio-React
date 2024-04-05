import React from "react"
import {createGlobalStyle} from "styled-components"
import Navegacao from "./Components/Navegacao.jsx"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "Calligraffitti", cursive;
  }

  * {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
}

body {
  background-color: #C9A9AE;
}

header {
  width: 100%;
  height: 100px;
  background-color: #FCF6F8;
}

}
`

function App(){
  return(
    <>
    <GlobalStyle/>
    <Navegacao/>
    </>
  )
}
export default App