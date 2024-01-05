import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderBar,
  Links,
  LinksItem,
  CartButton,
  HeaderLink,
  Hamburguer,
  HeaderRow,
  NavMobile
} from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";
import { open } from "../../store/Reducers/cart";
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
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Hamburguer>
          <h1 style={{ height: "30px" }}>
            <Link to="/">
              <img src={logo} alt="EPLAY" />
            </Link>
          </h1>
          <nav>
            <Links>
              <LinksItem>
                <HeaderLink to="/categories">Categorias</HeaderLink>
              </LinksItem>
              <LinksItem>
                <HeaderLink to="/#on-sale">Promoções</HeaderLink>
              </LinksItem>
              <LinksItem>
                <HeaderLink to="/#coming-soon">Em breve</HeaderLink>
              </LinksItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span>
          <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? "is-open" : ""}>
        <Links>
          <LinksItem>
            <HeaderLink to="/categories">Categorias</HeaderLink>
          </LinksItem>
          <LinksItem>
            <HeaderLink to="/#on-sale">Promoções</HeaderLink>
          </LinksItem>
          <LinksItem>
            <HeaderLink to="/#coming-soon">Em breve</HeaderLink>
          </LinksItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  );
};

export default Header;
