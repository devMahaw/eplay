import { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#EEEEEE",
  black: "#111111",
  gray: "#333333",
  green: "#10AC84",
  lightGray: "#A3A3A3"
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
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0px auto;
  }
`;
