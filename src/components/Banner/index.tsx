import { useState, useEffect } from "react";
import { Image, Title, Prices } from "./styles";
import Tag from "../Tag";
import Button from "../Button";
import { Game } from "../../pages/Home";
import { formatPrice } from "../ProductsList";

const Banner = () => {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/destaque")
      .then((answer) => answer.json())
      .then((answer) => setGame(answer));
  }, []);

  if (!game) {
    return <h3>Carregando...</h3>;
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <section className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </section>
    </Image>
  );
};

export default Banner;
