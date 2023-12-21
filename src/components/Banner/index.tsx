import { Image, Title, Prices } from "./styles";
import bannerImg from "../../assets/images/banner-homem-aranha.png";
import Tag from "../Tag";
import Button from "../Button";

const Banner = () => (
  <Image style={{ backgroundImage: `url(${bannerImg})` }}>
    <section className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
        <Prices>
          De <span>R$ 250,00</span> <br />
          por apenas R$ 99,90
        </Prices>
      </div>
      <Button
        type="link"
        to="/produtos"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </section>
  </Image>
);

export default Banner;
