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
            <FooterLink
              title="Clique aqui para acessar jogos de ação"
              to="/categories/#action"
            >
              Ação
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar jogos de esportes"
              to="/categories/#sports"
            >
              Esportes
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar jogos de simulação"
              to="/categories/#simulation"
            >
              Simulação
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar jogos de luta"
              to="/categories/#fighting"
            >
              Luta
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar jogos RPG"
              to="/categories/#rpg"
            >
              RPG
            </FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <FooterTitle>Acesso rápido</FooterTitle>
        <FooterLinks>
          <li>
            <FooterLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </FooterLink>
          </li>
          <li>
            <FooterLink
              title="Clique aqui para acessar a seção em breve"
              to="/#coming-soon"
            >
              Em breve
            </FooterLink>
          </li>
        </FooterLinks>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </FooterContainer>
);

export default Footer;
