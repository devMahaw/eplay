import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
  background-color: ${colors.gray};
  padding: 32px 0px;
`;

export const FooterTitle = styled.h4`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const FooterLinks = styled.ul`
  display: flex;
  margin-top: 16px;
  font-size: 14px;
`;

export const FooterLink = styled(HashLink)`
  color: ${colors.lightGray};
  text-decoration: none;
  margin-right: 8px;
`;

export const FooterSection = styled.div`
  margin-bottom: 64px;
`;
