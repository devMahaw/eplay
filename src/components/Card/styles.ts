import styled from "styled-components";
import { colors } from "../../styles";

export const CheckoutContainer = styled.div`
  background-color: ${colors.gray};
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 40px;

  h2,
  h3 {
    font-size: 20px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 24px;
  }

  .margin-top {
    margin-top: 24px;
  }

  p {
    line-height: 22px;
    font-size: 14px;
  }
`;
