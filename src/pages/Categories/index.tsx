import Game from "../../models/Game";
import ProductsList from "../../components/ProductsList";
import resident from "../../assets/images/resident.png";
import diablo from "../../assets/images/diablo.png";
import zelda from "../../assets/images/zelda.png";
import starWars from "../../assets/images/star_wars.png";

const sales: Game[] = [
  {
    id: 1,
    category: "Ação",
    description:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...",
    title: "Resident Evil 4",
    system: "Windows",
    infos: ["R$ 250,00", "-10%"],
    image: resident
  },
  {
    id: 2,
    category: "Ação",
    description:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...",
    title: "Resident Evil 4",
    system: "PS5",
    infos: ["R$ 290,00", "-5%"],
    image: resident
  },
  {
    id: 3,
    category: "Ação",
    description:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...",
    title: "Resident Evil 4",
    system: "Windows",
    infos: ["R$ 250,00", "-10%"],
    image: resident
  },
  {
    id: 4,
    category: "Ação",
    description:
      "Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...",
    title: "Resident Evil 4",
    system: "Windows",
    infos: ["R$ 250,00", "-10%"],
    image: resident
  }
];

const comingSoon: Game[] = [
  {
    id: 5,
    category: "RPG",
    description:
      "Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...",
    title: "Diablo IV",
    system: "Windows",
    infos: ["17/05"],
    image: diablo
  },
  {
    id: 6,
    category: "RPG",
    description:
      "Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...",
    title: "Zelda",
    system: "Nintendo Switch",
    infos: ["17/05"],
    image: zelda
  },
  {
    id: 7,
    category: "RPG",
    description:
      "Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...",
    title: "Star Wars",
    system: "Windows",
    infos: ["17/05"],
    image: starWars
  },
  {
    id: 8,
    category: "RPG",
    description:
      "Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment...",
    title: "Resident Evil 4",
    system: "PS5",
    infos: ["17/05"],
    image: resident
  }
];

const Categories = () => (
  <>
    <ProductsList games={sales} title="RPG" background="gray" />
    <ProductsList games={comingSoon} title="Ação" background="black" />
    <ProductsList games={sales} title="Aventura" background="gray" />
    <ProductsList games={comingSoon} title="FPS" background="black" />
  </>
);

export default Categories;
