import { HeaderBar, Links, LinksItem, LinksCart } from "./styles";
import logo from "../../assets/images/logo.svg";
import carrinho from "../../assets/images/carrinho.svg";

const Header = () => (
  <HeaderBar>
    <div>
      <h1 style={{ height: "30px" }}>
        <img src={logo} alt="EPLAY" />
      </h1>
      <nav>
        <Links>
          <LinksItem>
            <a href="#">Categorias</a>
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
    <LinksCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinksCart>
  </HeaderBar>
);

export default Header;
