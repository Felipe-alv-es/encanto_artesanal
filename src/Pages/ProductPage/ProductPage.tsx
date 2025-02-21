import React, { useState } from "react";
import { Box } from "@mui/material";
import { Navbar, Footer } from "../index.ts";
import ProductItem from "./Components/ProductItem/index.tsx";
import {
  centralPageContainerStyle,
  navbarCustomize,
  productPageContainerStyle,
  productPageGridStyle,
} from "./ProductPage.styles.ts";
import ProductPageTitle from "./Components/ProductPageTitle/index.tsx";
import LateralMenu from "./Components/LateralMenu/index.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";
import { useLocation } from "react-router-dom";
import ProductPageSkeleton from "./Components/Skeleton/index.tsx";

const ProductPage = () => {
  const location = useLocation();
  const { apiData, isLoading } = useApiData();

  const pageMap: Record<string, string | null> = {
    "/product-page": null,
    "/product-page/velas-moldadas": "velas_moldadas",
    "/product-page/velas-de-massagem": "velas_de_massagem",
    "/product-page/velas-container": "velas_container",
    "/product-page/sabonetes-decorativos": "sabonetes_decorativos",
    "/product-page/geleia-de-banho": "geleia_de_banho",
    "/product-page/sabonetes-de-massagem": "sabonetes_de_massagem",
    "/product-page/joia-de-resina": "joia_de_resina",
  };

  const currentPage = () => pageMap[location.pathname] ?? null;

  const [selectedType, setSelectedType] = useState<string | null>(currentPage);

  const handleFilter = (type: string | null) => {
    setSelectedType(type);
  };

  const filteredProducts =
    selectedType && selectedType !== "Todos"
      ? apiData?.data?.filter((item) => item.producttype === selectedType)
      : apiData?.data || [];

  return (
    <>
      <Box sx={productPageContainerStyle}>
        <Box sx={navbarCustomize}>
          <Navbar />
        </Box>

        <Box>
          <ProductPageTitle />
          <Box sx={centralPageContainerStyle}>
            <LateralMenu handleFilter={handleFilter} />
            <Box sx={productPageGridStyle}>
              {isLoading ? (
                <ProductPageSkeleton />
              ) : (
                filteredProducts &&
                filteredProducts.map((item) => (
                  <Box key={item.id}>
                    <ProductItem
                      title={item.title}
                      description={item.description}
                      imageSrc={item.imagesrc}
                    />
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductPage;
