export type formDataPlaceholder = {
  id: number | null;
  title: string;
  description: string;
  largedescription: string;
  imageSrc: string[];
  imagealt: string;
  producttype: string;
};

export const formatDataInitialValues = (): formDataPlaceholder => ({
  id: 1,
  title: "Velas para Massagem",
  description:
    "Velas de massagem que derretem em um óleo quente e nutritivo, perfeito para um toque suave e relaxante na pele.",
  largedescription:
    "Velas de massagem que derretem em um óleo quente e nutritivo, perfeito para um toque suave e relaxante na pele.",
  imageSrc: [
    "https://img.elo7.com.br/product/zoom/487B8DE/lindo-trio-de-velas-artesanais-velasartesanais.jpg",
  ],
  imagealt: "Imagem de um conjunto de velas",
  producttype: "Velas moldadas",
});
