import Section from "../Section";
import zelda from "../../assets/images/zelda.png";
import { Items, Item } from "./styles";

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={zelda} alt="Zelda" />
      </Item>
      <Item>
        <img src={zelda} alt="Zelda" />
      </Item>
      <Item>
        <img src={zelda} alt="Zelda" />
      </Item>
      <Item>
        <img src={zelda} alt="Zelda" />
      </Item>
    </Items>
  </Section>
);

export default Gallery;
