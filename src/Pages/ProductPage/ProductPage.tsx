import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Navbar/Navbar.tsx";
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
  console.log(apiData?.data);

  return (
    <Box sx={productPageContainerStyle}>
      <LateralMenu />
      <Navbar />
      <Box sx={{ paddingTop: "150px" }} />
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))",
          padding: "32px 48px 32px 48px",
          width: "fit-content",
          borderRadius: "32px",
          placeItems: "center",
        }}
      >
        <ProductPageTitle />

        <Box sx={{ display: "flex" }}>
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
    </Box>
  );
};

export default ProductPage;
