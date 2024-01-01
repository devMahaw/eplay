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
  }

  return <h3>Carregando...</h3>;
};

export default Categories;
