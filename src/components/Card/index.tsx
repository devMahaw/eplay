import { CheckoutContainer } from "./styles";

type Props = {
  children: JSX.Element;
  title: string;
};

const Card = ({ children, title }: Props) => (
  <CheckoutContainer>
    <h2>{title}</h2>
    {children}
  </CheckoutContainer>
);

export default Card;
