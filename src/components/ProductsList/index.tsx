import { Game } from "../../pages/Home";
import Product from "../Product";
import { List } from "./styles";
import { ProductsContainer, Title } from "../Section/styles";
import { formatPrice } from "../../utils";

export type Props = {
  title: string;
  background: "gray" | "black";
  games: Game[];
  id?: string;
};

const ProductsList = ({ background, title, games, id }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = [];

    if (game.releaseDate) {
      tags.push(game.releaseDate);
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`);
    }

    if (game.prices.current) {
      tags.push(formatPrice(game.prices.current));
    }

    return tags;
  };

  return (
    <ProductsContainer id={id} background={background}>
      <div className="container">
        <Title>{title}</Title>
        <List>
          {games.map((game) => (
            <li key={game.id}>
              <Product
                id={game.id}
                category={game.details.category}
                description={game.description}
                image={game.media.thumbnail}
                infos={getGameTags(game)}
                system={game.details.system}
                title={game.name}
              />
            </li>
          ))}
        </List>
      </div>
    </ProductsContainer>
  );
};

export default ProductsList;
