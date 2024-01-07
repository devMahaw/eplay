import * as S from "./styles";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <S.FooterSection>
        <S.FooterTitle>Categorias</S.FooterTitle>
        <S.FooterLinks>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de ação"
              to="/categories/#action"
            >
              Ação
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de esportes"
              to="/categories/#sports"
            >
              Esportes
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de simulação"
              to="/categories/#simulation"
            >
              Simulação
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos de luta"
              to="/categories/#fighting"
            >
              Luta
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar jogos RPG"
              to="/categories/#rpg"
            >
              RPG
            </S.FooterLink>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <S.FooterSection>
        <S.FooterTitle>Acesso rápido</S.FooterTitle>
        <S.FooterLinks>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </S.FooterLink>
          </li>
          <li>
            <S.FooterLink
              title="Clique aqui para acessar a seção em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.FooterLink>
          </li>
        </S.FooterLinks>
      </S.FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </S.FooterContainer>
);

export default Footer;
