import React from "react";
import { Box } from "@mui/material";
import { Navbar, Footer } from "../index.ts";
import ProductItem from "./Components/ProductItem/index.tsx";
import {
  productPageContainerStyle,
  productPageGridStyle,
} from "./ProductPage.styles.ts";
import ProductPageTitle from "./Components/ProductPageTitle/index.tsx";
import LateralMenu from "./Components/LateralMenu/index.tsx";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";

const ProductPage = () => {
  const { apiData } = useApiData();

  return (
    <>
      <Box sx={productPageContainerStyle}>
        <Box
          sx={{
            width: "100%",
            "> div > div > h4": {
              fontSize: 50,
            },
          }}
        >
          <Navbar />
        </Box>
        <Box sx={{ paddingTop: "150px" }} />

        <ProductPageTitle />

        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <LateralMenu />
          <Box sx={productPageGridStyle}>
            {apiData?.data &&
              apiData.data.map((item) => (
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
      <Footer />
    </>
  );
};

export default ProductPage;
