import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";

import { useGetOnSaleGameQuery, useGetSoonGameQuery } from "../../services/api";

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } =
    useGetOnSaleGameQuery();
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonGameQuery();

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em Breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  );
};

export default Home;
