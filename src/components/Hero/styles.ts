import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";

export const Banner = styled.div`
  height: 480px;
  width: 100%;
  display: block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  position: relative;
  padding-top: 16px;

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

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }
`;

export const Infos = styled.div`
  padding: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`;
