import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { breakpoints, colors } from "../../styles";

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0px;
    margin-top: 10px;
    display: block;
  }
`;

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 80px;

  a,
  span {
    font-weight: bold;
    color: ${colors.white};
    text-decoration: none;
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      img {
        margin-left: 14px;
      }

      ${Links} {
        display: none;
      }
    }
  }
`;

export const HeaderLink = styled(HashLink)`
  color: ${colors.white};
  text-decoration: none;
  font-weight: bold;
`;

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`;

export const LinksItem = styled.ul`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0px;

    a {
      display: block;
      padding: 16px 0px;
      text-align: center;
    }
  }
`;

export const CartButton = styled.span`
  display: flex;
  cursor: pointer;

  img {
    margin-left: 16px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`;

export const Hamburguer = styled.div`
  width: 32px;
  cursor: pointer;

  span {
    height: 2px;
    display: block;
    width: 100%;
    background-color: ${colors.white};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`;
