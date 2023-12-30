import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import residentEvil from "../../assets/images/resident.png";
import { useParams } from "react-router-dom";
import { Game } from "../Home";

const Product = () => {
  const { id } = useParams();

  const [game, setGame] = useState<Game>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((answer) => answer.json())
      .then((answer) => setGame(answer));
  }, [id]);

  if (!game) {
    return <h3>Carregando...</h3>;
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
