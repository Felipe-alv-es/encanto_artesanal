export const pageMap: Record<string, string | null> = {
  "/product-page": null,
  "/product-page/kits-presenteaveis": "kits_presenteaveis",
  "/product-page/velas": "velas",
  "/product-page/cuidados-de-banho": "sabonetes_decorativos",
  "/product-page/bordados": "bordados",
};

export const pageDescriptions: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  kits_presenteaveis: {
    title: "Kits Presenteáveis",
    description:
      "Presentes que encantam: nossos kits combinam itens artesanais cuidadosamente selecionados — como velas, sabonetes e outros mimos — para surpreender com beleza, carinho e significado.",
  },
  velas: {
    title: "Velas",
    description:
      "Velas artesanais moldadas e em container, criadas com atenção a cada detalhe para transformar ambientes com charme, personalidade e afeto, proporcionando luz suave, perfume acolhedor e momentos de puro aconchego em qualquer cantinho da sua casa.",
  },
  sabonetes_decorativos: {
    title: "Cuidados de Banho",
    description:
      "Transforme seus momentos de cuidado em experiências especiais: sabonetes artesanais e geleias de banho com aromas e texturas únicas, feitos para perfumar, hidratar e trazer delicadeza ao seu dia.",
  },
  bordados: {
    title: "Bordados",
    description:
      "Transforme pequenos momentos em experiências especiais: toalhas bordadas personalizadas, com nomes e desenhos à sua escolha, criadas para unir cuidado, beleza e exclusividade.",
  },
};
