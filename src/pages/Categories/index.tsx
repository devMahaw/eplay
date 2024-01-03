import ProductsList from "../../components/ProductsList";
import {
  useGetActionGameQuery,
  useGetSportsGameQuery,
  useGetSimulationGameQuery,
  useGetFightingGameQuery,
  useGetRpgGameQuery
} from "../../services/api";

const Categories = () => {
  const { data: actionGames } = useGetActionGameQuery();
  const { data: sportsGames } = useGetSportsGameQuery();
  const { data: simulationGames } = useGetSimulationGameQuery();
  const { data: fightingGames } = useGetFightingGameQuery();
  const { data: rpgGames } = useGetRpgGameQuery();

  if (
    actionGames &&
    sportsGames &&
    simulationGames &&
    fightingGames &&
    rpgGames
  ) {
    return (
      <main>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportsGames}
          title="Esportes"
          background="gray"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightingGames}
          title="Luta"
          background="gray"
          id="fighting"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
      </main>
    );
  }

  return <h3>Carregando...</h3>;
};

export default Categories;
