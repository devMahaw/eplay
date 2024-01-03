import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#EEEEEE",
  black: "#111111",
  gray: "#333333",
  green: "#10AC84",
  lightGray: "#A3A3A3"
};

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px"
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    padding-top: 40px;

    &::-webkit-scrollbar {
    width: 12px; // Defina a largura da barra de rolagem
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${colors.lightGray}; // Cor do "pulgar" (parte que você arrasta)
      border-radius: 6px; // Borda arredondada
    }

    &::-webkit-scrollbar-track {
      background-color: ${colors.gray}; // Cor da "trilha" (fundo da barra de rolagem)
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0px auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  button {
    cursor: pointer;
  }
`;
