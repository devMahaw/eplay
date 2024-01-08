import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import Section from "../../components/Section";

import { useGetGameQuery } from "../../services/api";
import Loader from "../../components/Loader";

type GameParams = {
  id: string;
};

const Product = () => {
  const { id } = useParams() as GameParams;

  const { data: game } = useGetGameQuery(id);

  if (!game) {
    return <Loader />;
  }

  return (
    <main>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer}
          <br />
          <b>Editora:</b> {game.details.publisher}
          <br />
          <b>Idiomas:</b> {game.details.languages.join(", ")}
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.cover}
        items={game.media.gallery}
      />
    </main>
  );
};

export default Product;
