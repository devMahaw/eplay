import Game from "../../models/Game";
import Product from "../Product";
import { List } from "./styles";
import { ProductsContainer, Title } from "../Section/styles";

export type Props = {
  title: string;
  background: "gray" | "black";
  games: Game[];
};

const ProductsList = ({ background, title, games }: Props) => (
  <ProductsContainer background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            category={game.category}
            description={game.description}
            image={game.image}
            system={game.system}
            title={game.title}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </ProductsContainer>
);

export default ProductsList;
