import { createGlobalStyle } from "styled-components";

const colors = {
  white: "#EEEEEE",
  black: "#111111",
  gray: "#333333",
  green: "#10AC84"
};

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
  }
`;
