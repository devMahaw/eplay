import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";
import { open } from "../../store/reducers/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <S.HeaderBar>
      <S.HeaderRow>
        <div>
          <S.Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </S.Hamburguer>
          <Link title="Clique aqui para acessar a seção principal" to="/">
            <h1 style={{ height: "30px" }}>
              <img src={logo} alt="EPLAY" />
            </h1>
          </Link>
          <nav>
            <S.Links>
              <S.LinksItem>
                <S.HeaderLink
                  title="Clique aqui para acessar a página de categorias"
                  to="/categories"
                >
                  Categorias
                </S.HeaderLink>
              </S.LinksItem>
              <S.LinksItem>
                <S.HeaderLink
                  title="Clique aqui para acessar a seção de promoções"
                  to="/#on-sale"
                >
                  Promoções
                </S.HeaderLink>
              </S.LinksItem>
              <S.LinksItem>
                <S.HeaderLink
                  title="Clique aqui para acessar a seção em breve"
                  to="/#coming-soon"
                >
                  Em breve
                </S.HeaderLink>
              </S.LinksItem>
            </S.Links>
          </nav>
        </div>
        <S.CartButton role="button" onClick={openCart}>
          <span>{items.length} - produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </S.CartButton>
      </S.HeaderRow>
      <S.NavMobile className={isMenuOpen ? "is-open" : ""}>
        <S.Links>
          <S.LinksItem>
            <S.HeaderLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a página de categorias"
              to="/categories"
            >
              Categorias
            </S.HeaderLink>
          </S.LinksItem>
          <S.LinksItem>
            <S.HeaderLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção de promoções"
              to="/#on-sale"
            >
              Promoções
            </S.HeaderLink>
          </S.LinksItem>
          <S.LinksItem>
            <S.HeaderLink
              onClick={() => setIsMenuOpen(false)}
              title="Clique aqui para acessar a seção em breve"
              to="/#coming-soon"
            >
              Em breve
            </S.HeaderLink>
          </S.LinksItem>
        </S.Links>
      </S.NavMobile>
    </S.HeaderBar>
  );
};

export default Header;
