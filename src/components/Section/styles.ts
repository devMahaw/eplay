import styled from "styled-components";
import { Props } from ".";
import { colors } from "../../styles";
import { Card } from "../Product/styles";

export const ProductsContainer = styled.section<Omit<Props, "title" | "games">>`
  padding: 32px 0px;
  background-color: ${(props) =>
    props.background === "black" ? colors.black : colors.gray};
  ${Card} {
    background-color: ${(props) =>
      props.background === "black" ? colors.gray : colors.black};
  }

  p {
    line-height: 22px;
    max-width: 640px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
`;
