import React, { useState } from "react";
import { Box } from "@mui/material";
import { Navbar, Footer } from "../index.ts";
import ProductItem from "./Components/ProductItem/ProductItem.tsx";
import {
  getContainerStyle,
  productPageGridStyle,
} from "./ProductPage.styles.ts";
import ProductPageTitle from "./Components/ProductPageTitle/ProductPageTitle.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";
import { useLocation } from "react-router-dom";
import ProductPageSkeleton from "./Components/Skeleton/index.tsx";
import ProductPagePagination from "./Components/ProductPagePagination/ProductPagePagination.tsx";
import {
  pageDescriptions,
  pageMap,
} from "../../assets/Arrays/ProductPageList.tsx";

const ProductPage = () => {
  const location = useLocation();
  const { apiData, isLoading } = useApiData();
  const currentPage = () => pageMap[location.pathname] ?? null;
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const handlePageChange = (value: React.SetStateAction<number>) => {
    setCurrentPageNumber(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const filteredProducts =
    currentPage() && currentPage() !== "Todos"
      ? apiData?.data?.filter((item) => item.producttype === currentPage()) ??
        []
      : apiData?.data ?? [];

  const productsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const currentProducts = filteredProducts.slice(
    (currentPageNumber - 1) * productsPerPage,
    currentPageNumber * productsPerPage
  );

  const current = currentPage();
  const productPageTitle = current
    ? pageDescriptions[current]?.title ?? ""
    : "";
  const productPageDescription = current
    ? pageDescriptions[current]?.description ?? ""
    : "";

  return (
    <>
      <Navbar />
      <Box>
        <ProductPageTitle
          title={productPageTitle}
          subtitle={productPageDescription}
        />
        <Box sx={getContainerStyle}>
          <Box>
            <Box sx={productPageGridStyle}>
              {isLoading ? (
                <ProductPageSkeleton />
              ) : (
                currentProducts.map((item) => (
                  <Box key={item.id}>
                    <ProductItem
                      title={item.title}
                      price={item.description}
                      imageSrc={item.imagesrc[0]}
                    />
                  </Box>
                ))
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <ProductPagePagination
        currentPageNumber={currentPageNumber}
        setCurrentPageNumber={handlePageChange}
        totalPages={totalPages}
      />
      <Footer />
    </>
  );
};

export default ProductPage;
