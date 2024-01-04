import styled from "styled-components";
import { colors } from "../../styles";

type InputGroupProps = {
  maxWidth?: string;
};

type RowProps = {
  marginTop?: string;
};

type TabButtonProps = {
  isActive: boolean;
};

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  align-items: flex-end;

  margin-top: ${(props) => props.marginTop || "0"};
`;

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || "auto"};

  label {
    margin-bottom: 8px;
    font-size: 14px;
    display: block;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    padding: 0px 8px;
    outline: none;
    width: 100%;
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-weight: bold;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  border: none;
  height: 32px;
  margin-right: 16px;
  padding: 0px 8px;

  img {
    margin-right: 8px;
    vertical-align: -2px;
  }
`;
