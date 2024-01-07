import * as S from "./styles";
import Tag from "../Tag";
import Button from "../Button";
import { formatPrice } from "../../utils";
import { useGetFeaturedGameQuery } from "../../services/api";

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery();

  if (!game) {
    return <h3>Carregando...</h3>;
  }

  return (
    <S.Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <section className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <S.Title>{game.name}</S.Title>
          <S.Prices>
            De <span>{formatPrice(game.prices.old)}</span> <br />
            por apenas {formatPrice(game.prices.current)}
          </S.Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </section>
    </S.Image>
  );
};

export default Banner;
