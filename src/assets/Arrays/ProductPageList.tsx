export const pageMap: Record<string, string | null> = {
  "/product-page": null,
  "/product-page/velas-moldadas": "velas_moldadas",
  "/product-page/velas-de-massagem": "velas_de_massagem",
  "/product-page/velas-container": "velas_container",
  "/product-page/sabonetes-decorativos": "sabonetes_decorativos",
  "/product-page/geleias-de-banho": "geleias_de_banho",
  "/product-page/sabonetes-de-massagem": "sabonetes_de_massagem",
  "/product-page/joias-de-resina": "joias_de_resina",
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
  velas_de_massagem: {
    title: "Velas de Massagem",
    description:
      "Com aromas envolventes e textura suave, nossas velas de massagem se derretem em puro cuidado, convidando ao relaxamento, ao toque e ao bem-estar do corpo e da alma.",
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
    title: "Geleia de Banho",
    description:
      "Com textura macia e aromas deliciosos, as geleias de banho transformam o banho em um ritual sensorial envolvente, que cuida da pele e acalma a mente.",
  },
  sabonetes_de_massagem: {
    title: "Sabonetes de Massagem",
    description:
      "Nossos sabonetes de massagem combinam propriedades relaxantes com fragrâncias suaves, proporcionando uma experiência revigorante e cheia de cuidado.",
  },
  joias_de_resina: {
    title: "Joia de Resina",
    description:
      "Joias de resina feitas à mão, com composições únicas e encantadoras — perfeitas para eternizar momentos, contar histórias e carregar beleza em cada detalhe.",
  },
};
