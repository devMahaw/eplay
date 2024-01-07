import * as S from "./styles";

export type Props = {
  title: string;
  background: "black" | "gray";
  children: JSX.Element;
};

const Section = ({ title, background, children }: Props) => (
  <S.ProductsContainer background={background}>
    <div className="container">
      <S.Title>{title}</S.Title>
      {children}
    </div>
  </S.ProductsContainer>
);

export default Section;
