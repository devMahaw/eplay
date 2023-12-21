import Tag from "../Tag";
import { Card, Description, Title } from "./styles";

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Title>Nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque amet
      voluptas provident, minima fuga molestiae blanditiis laudantium aperiam
      veritatis atque praesentium! Omnis ex beatae atque velit odit impedit
      doloribus voluptatum.
    </Description>
  </Card>
);

export default Product;
