import { Image, Title, Prices } from "./styles";
import bannerImg from "../../assets/images/fundo_hogwarts.png";
import Tag from "../Tag";
import Button from "../Button";

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <section className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Hogwarts Legacy PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 190,00
        </Prices>
      </div>
      <Button
        type="link"
        to="/product/1"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </section>
  </Image>
);

export default Banner;
