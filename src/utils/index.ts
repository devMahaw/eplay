import { Game } from "../pages/Home";

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(price);
};

export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, actualValue) => {
    if (actualValue.prices.current) {
      return (accumulator += actualValue.prices.current);
    }
    return 0;
  }, 0);
};
