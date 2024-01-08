import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";
import { ButtonContainer } from "../Button/styles";
import close from "../../assets/images/fechar.png";

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`;

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`;

export const Sidebar = styled.aside`
  background-color: ${colors.gray};
  z-index: 1;
  padding: 40px 16px 40px;
  max-width: 400px;
  width: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0px; // Defina a largura da barra de rolagem
  }

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 18px;
    font-weight: bold;
    line-height: 22px;
    color: ${colors.white};
    text-align: center;
  }
`;

export const Prices = styled.p`
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 24px;

  span {
    color: ${colors.lightGray};
  }
`;

export const Quantity = styled.p`
  font-weight: bold;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const CartItem = styled.li`
  display: flex;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 8px 0px;
  position: relative;

  img {
    width: 100px;
    height: 120px;
    object-fit: contain;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    width: 200px;
  }

  span {
    display: block;
    color: ${colors.white};
    font-weight: bold;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0px;
  }

  button {
    background-image: url(${close});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    top: 8;
    right: 0;
    margin-bottom: 5500px;
  }
`;
