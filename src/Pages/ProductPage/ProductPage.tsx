import React, { useState } from "react";
import { Box } from "@mui/material";
import { Navbar, Footer } from "../index.ts";
import ProductItem from "./Components/ProductItem/index.tsx";
import {
  navbarCustomize,
  productPageContainerStyle,
  productPageGridStyle,
} from "./ProductPage.styles.ts";
import ProductPageTitle from "./Components/ProductPageTitle/index.tsx";
import LateralMenu from "./Components/LateralMenu/index.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";

const ProductPage = () => {
  const { apiData } = useApiData();
  const [selectedType, setSelectedType] = useState<string | null>(null);

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
          <Box
            sx={{
              display: "flex",
              gap: 4,
            }}
          >
            <LateralMenu handleFilter={handleFilter} />
            <Box sx={productPageGridStyle}>
              {filteredProducts &&
                filteredProducts.map((item) => (
                  <Box key={item.id}>
                    <ProductItem
                      title={item.title}
                      description={item.description}
                      imageSrc={item.imagesrc}
                    />
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductPage;
