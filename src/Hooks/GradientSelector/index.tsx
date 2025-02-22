import { useMemo } from "react";

const useGradientByType = (selectedType) => {
  const gradients = useMemo(
    () => ({
      velas_moldadas:
        "linear-gradient(120deg, #b88c43, #d1a35d, #e3c28b, #e0e0e0)",
      velas_de_massagem:
        "linear-gradient(120deg, #d49b8a, #e0b3a2, #f0d6d0, #e0e0e0)",
      velas_container:
        "linear-gradient(120deg, #a3765e, #c89f86, #e3c7af, #f2f2f2)",
      sabonetes_decorativos:
        "linear-gradient(120deg, #8bb9d4, #a8cfe3, #c4e0f0, #e0e0e0)",
      geleias_de_banho:
        "linear-gradient(120deg, #d2739d, #e19db9, #f2c1d7, #e0e0e0)",
      sabonetes_de_massagem:
        "linear-gradient(120deg, #7ea17f, #98c8a2, #b4e0c7, #e0e0e0)",
      joias_de_resina:
        "linear-gradient(120deg, #9163cb, #b394e6, #d8c8f3, #f2f2f2)",
      all: "linear-gradient(120deg, #6bb4ad, #6bb4ad, #b8dcd8, #f2f2f2)",
    }),
    []
  );

  return gradients[selectedType] || gradients["all"];
};

export default useGradientByType;
