export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Luctuson Chardonnay",
    description:
      "Blanco fresco con notas de manzana, pera y vainilla.",
    image: "/images/carousel/luctuson-chardonnay.png",
    price: 24.99,
  },
  {
    id: 2,
    name: "New Cabernet Sauvignon",
    description:
      "Tinto intenso con grosella, cedro y especias suaves.",
    image: "/images/carousel/new-carbernet-sauvignon.png",
    price: 34.99,
  },
  {
    id: 3,
    name: "Belasco Llama Cognac",
    description:
      "Cognac elegante con caramelo, ciruela seca y toque ahumado.",
    image: "/images/carousel/belasco-llama-cognac.png",
    price: 59.99,
  },
  {
    id: 4,
    name: "Lujuria Chardonney",
    description:
      "Blanco vibrante con cítricos, melocotón y un toque mineral.",
    image: "/images/carousel/lujuria-chardonnay.png",
    price: 29.99,
  }
];
