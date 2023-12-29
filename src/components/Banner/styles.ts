import styled from "styled-components";
import { TagContainer } from "../Tag/styles";

export const Image = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  font-weight: bold;
  position: relative;

  &:after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: "";
    opacity: 0.56;
  }

  .container {
    z-index: 1;
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  max-width: 450px;
`;

export const Prices = styled.p`
  margin-top: 24px;
  font-size: 24px;

  span {
    text-decoration: line-through;
  }
`;
