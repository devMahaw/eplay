import { Link } from "react-router-dom";
import { HeaderBar, Links, LinksItem, CartButton } from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";
import { open } from "../../store/Reducers/cart";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderBar>
      <div>
        <h1 style={{ height: "30px" }}>
          <Link to="/">
            <img src={logo} alt="EPLAY" />
          </Link>
        </h1>
        <nav>
          <Links>
            <LinksItem>
              <Link to="/categories">Categorias</Link>
            </LinksItem>
            <LinksItem>
              <a href="#">Novidades</a>
            </LinksItem>
            <LinksItem>
              <a href="#">Promoções</a>
            </LinksItem>
          </Links>
        </nav>
      </div>
      <CartButton onClick={openCart}>
        0 - produto(s)
        <img src={carrinho} alt="Carrinho" />
      </CartButton>
    </HeaderBar>
  );
};

export default Header;
