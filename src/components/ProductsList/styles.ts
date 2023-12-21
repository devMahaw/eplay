import styled from "styled-components";
import { Props } from ".";
import { colors } from "../../styles";
import { Card } from "../Product/styles";

export const ProductsContainer = styled.section<Omit<Props, "title">>`
  padding: 32px 0px;
  background-color: ${(props) =>
    props.background === "black" ? colors.black : colors.gray};
  ${Card} {
    background-color: ${(props) =>
      props.background === "black" ? colors.gray : colors.black};
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
  margin-top: 40px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;
