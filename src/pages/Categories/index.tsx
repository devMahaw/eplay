import { useEffect, useState } from "react";
import ProductsList from "../../components/ProductsList";
import { Game } from "../Home";

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([]);
  const [sportsGames, setSportsGames] = useState<Game[]>([]);
  const [simulationGames, setSimulationGames] = useState<Game[]>([]);
  const [fightingGames, setFightingGames] = useState<Game[]>([]);
  const [rpgGames, setRpgGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/acao")
      .then((answer) => answer.json())
      .then((answer) => setActionGames(answer));
    fetch("https://fake-api-tau.vercel.app/api/eplay/esportes")
      .then((answer) => answer.json())
      .then((answer) => setSportsGames(answer));
    fetch("https://fake-api-tau.vercel.app/api/eplay/simulacao")
      .then((answer) => answer.json())
      .then((answer) => setSimulationGames(answer));
    fetch("https://fake-api-tau.vercel.app/api/eplay/luta")
      .then((answer) => answer.json())
      .then((answer) => setFightingGames(answer));
    fetch("https://fake-api-tau.vercel.app/api/eplay/rpg")
      .then((answer) => answer.json())
      .then((answer) => setRpgGames(answer));
  }, []);

  return (
    <main>
      <ProductsList games={actionGames} title="Ação" background="black" />
      <ProductsList games={sportsGames} title="Esportes" background="gray" />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
      />
      <ProductsList games={fightingGames} title="Luta" background="gray" />
      <ProductsList games={rpgGames} title="RPG" background="black" />
    </main>
  );
};

export default Categories;
