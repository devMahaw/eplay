import Product from "../Product";
import { List, ProductsContainer, Title } from "./styles";

type Props = {
  title: string;
  background: "gray" | "black";
};

const ProductsList = ({ background, title }: Props) => (
  <ProductsContainer>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </ProductsContainer>
);

export default ProductsList;
