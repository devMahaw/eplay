import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { breakpoints, colors } from "../../styles";

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const HeaderLink = styled(HashLink)`
  color: ${colors.white};
  text-decoration: none;
  font-weight: bold;
`;

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`;

export const LinksItem = styled.ul`
  margin-right: 16px;
`;

export const CartButton = styled.a`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }
`;
