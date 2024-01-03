import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterSection,
  FooterTitle
} from "./styles";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <FooterTitle>Categorias</FooterTitle>
        <FooterLinks>
          <li>
            <FooterLink to="/categories/#action">Ação</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories/#sports">Esportes</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories/#simulation">Simulação</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories/#fighting">Luta</FooterLink>
          </li>
          <li>
            <FooterLink to="/categories/#rpg">RPG</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Acesso rápido</FooterTitle>
        <FooterLinks>
          <li>
            <FooterLink to="/#on-sale">Promoções</FooterLink>
          </li>
          <li>
            <FooterLink to="/#coming-soon">Em breve</FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </FooterContainer>
);

export default Footer;
