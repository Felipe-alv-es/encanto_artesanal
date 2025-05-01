export const pageMap: Record<string, string | null> = {
  "/product-page": null,
  "/product-page/velas-moldadas": "velas_moldadas",
  "/product-page/velas-container": "velas_container",
  "/product-page/sabonetes-decorativos": "sabonetes_decorativos",
  "/product-page/geleias-de-banho": "geleias_de_banho",
  "/product-page/joias-de-resina": "joias_de_resina",
  "/product-page/velas": "velas",
};

export const pageDescriptions: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  velas_moldadas: {
    title: "Velas Moldadas",
    description:
      "Velas moldadas artesanalmente, criadas com atenção a cada detalhe para transformar ambientes com charme, personalidade e aquele toque especial de afeto.",
  },
  velas_container: {
    title: "Velas em Container",
    description:
      "Delicadamente preparadas, nossas velas em container são perfeitas para criar momentos de aconchego, luz suave e perfume acolhedor em qualquer cantinho da sua casa.",
  },
  sabonetes_decorativos: {
    title: "Sabonetes Decorativos",
    description:
      "Mais do que higiene, nossos sabonetes decorativos encantam com formas e aromas únicos — feitos para perfumar e enfeitar seu espaço com carinho e delicadeza.",
  },
  geleias_de_banho: {
    title: "Geleias de Banho",
    description:
      "Com textura macia e aromas deliciosos, as geleias de banho transformam o banho em um ritual sensorial envolvente, que cuida da pele e acalma a mente.",
  },
  joias_de_resina: {
    title: "Produtos de Resina",
    description:
      "Produtos de resina feitas à mão, com composições únicas e encantadoras — perfeitas para eternizar momentos, contar histórias e carregar beleza em cada detalhe.",
  },
  velas: {
    title: "Velas Artesanais",
    description:
      "Descubra nossa seleção de velas artesanais, incluindo velas moldadas e em container, criadas com cuidado para proporcionar charme, aconchego e um toque especial em cada ambiente.",
  },
};
