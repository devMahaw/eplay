import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";

import { useGetOnSaleGameQuery, useGetSoonGameQuery } from "../../services/api";

export interface GalleryItem {
  type: "image" | "video";
  url: string;
}

export type Game = {
  id: number;
  name: string;
  description: string;
  releaseDate?: string;
  prices: {
    discount?: number;
    old?: number;
    current: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: GalleryItem[];
  };
};

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
