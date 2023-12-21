import Product from "../Product";
import { List, ProductsContainer, Title } from "./styles";

export type Props = {
  title: string;
  background: "gray" | "black";
};

const ProductsList = ({ background, title }: Props) => (
  <ProductsContainer background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={["R$ 150,00", "-10%"]}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={["R$ 150,00", "-10%"]}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={["R$ 150,00", "-10%"]}
          system="Windows"
          title="Nome do Jogo"
        />
        <Product
          category="Ação"
          description="Teste"
          image="//placehold.it/222x250"
          infos={["R$ 150,00", "-10%"]}
          system="Windows"
          title="Nome do Jogo"
        />
      </List>
    </div>
  </ProductsContainer>
);

export default ProductsList;
