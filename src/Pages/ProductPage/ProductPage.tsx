import React, { useState } from "react";
import { Box, Pagination } from "@mui/material";
import { Navbar, Footer } from "../index.ts";
import ProductItem from "./Components/ProductItem/index.tsx";
import {
  centralPageContainerStyle,
  navbarCustomize,
  productPageGridStyle,
} from "./ProductPage.styles.ts";
import ProductPageTitle from "./Components/ProductPageTitle/index.tsx";
import LateralMenu from "./Components/LateralMenu/LateralMenu.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";
import { useLocation } from "react-router-dom";
import ProductPageSkeleton from "./Components/Skeleton/index.tsx";
import ProductPageBackground from "./Components/ProductPageBackground/index.tsx";
import ProductDetails from "./Components/ProductDetails/ProductDetail.tsx";

const ProductPage = () => {
  const location = useLocation();
  const { apiData, isLoading } = useApiData();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

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
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const handleFilter = (type: string | null) => {
    setSelectedType(type);
    setCurrentPageNumber(1);
  };

  const filteredProducts =
    selectedType && selectedType !== "Todos"
      ? apiData?.data?.filter((item) => item.producttype === selectedType) ?? []
      : apiData?.data ?? [];

  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPageNumber - 1) * productsPerPage,
    currentPageNumber * productsPerPage
  );

  return (
    <>
      <Box sx={navbarCustomize}>
        <Navbar />
      </Box>
      <ProductPageBackground selectedtype={selectedType}>
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
        <Box>
          <ProductPageTitle />
          <Box sx={centralPageContainerStyle}>
            <LateralMenu handleFilter={handleFilter} />
            <Box sx={productPageGridStyle}>
              {isLoading ? (
                <ProductPageSkeleton />
              ) : (
                currentProducts.map((item) => (
                  <Box key={item.id} zIndex={2}>
                    <ProductItem
                      title={item.title}
                      description={item.description}
                      imageSrc={item.imagesrc[0]}
                      onClick={() => setSelectedProduct(item)}
                    />
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "32px",
          }}
        >
          <Pagination
            count={totalPages}
            page={currentPageNumber}
            onChange={(event, value) => setCurrentPageNumber(value)}
            color="primary"
            size="large"
            sx={{
              "* > .Mui-selected": {
                background: "#383838",
              },
            }}
          />
        </Box>
      </ProductPageBackground>
      <Footer />
    </>
  );
};

export default ProductPage;
