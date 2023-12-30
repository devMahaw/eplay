import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";

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
  const [sales, setSales] = useState<Game[]>([]);
  const [comingSoon, setComingSoon] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/promocoes")
      .then((answer) => answer.json())
      .then((answer) => setSales(answer));

    fetch("https://fake-api-tau.vercel.app/api/eplay/em-breve")
      .then((answer) => answer.json())
      .then((answer) => setComingSoon(answer));
  }, []);

  return (
    <main>
      <Banner />
      <ProductsList games={sales} title="Promoções" background="gray" />
      <ProductsList games={comingSoon} title="Em Breve" background="black" />
    </main>
  );
};

export default Home;
