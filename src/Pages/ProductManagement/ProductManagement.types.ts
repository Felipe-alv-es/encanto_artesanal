export type formDataPlaceholder = {
  title: string;
  description: string;
  imageSrc: string[];
  producttype: string;
};

export const formatDataInitialValues = (): formDataPlaceholder => ({
  title: "Velas para Massagem",
  description:
    "Velas de massagem que derretem em um óleo quente e nutritivo, perfeito para um toque suave e relaxante na pele.",
  imageSrc: [
    "https://img.elo7.com.br/product/zoom/487B8DE/lindo-trio-de-velas-artesanais-velasartesanais.jpg",
  ],
  producttype: "Velas moldadas",
});
