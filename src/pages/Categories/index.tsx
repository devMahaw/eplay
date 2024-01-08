import ProductsList from "../../components/ProductsList";
import {
  useGetActionGameQuery,
  useGetSportsGameQuery,
  useGetSimulationGameQuery,
  useGetFightingGameQuery,
  useGetRpgGameQuery
} from "../../services/api";

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGameQuery();
  const { data: sportsGames, isLoading: isLoadingSport } =
    useGetSportsGameQuery();
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGameQuery();
  const { data: fightingGames, isLoading: isLoadingFight } =
    useGetFightingGameQuery();
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGameQuery();

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="black"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportsGames}
        title="Esportes"
        background="gray"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightingGames}
        title="Luta"
        background="gray"
        id="fighting"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  );
};

export default Categories;
