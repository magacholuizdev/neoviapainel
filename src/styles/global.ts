import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #fff;
    color: #333;
  }

  :root {
    --cor-primaria: #3498db;
    --cor-secundaria: #e74c3c;
    --cor-destaque: #f39c12;
    --cor-texto: #fff;
    --cor-texto-secundario: #1D1D1B;
    --cor-fundo: #1D1D1B;
    --cor-fundo-secundaria: #f0f0f0;
  }

`;

export default GlobalStyle;
