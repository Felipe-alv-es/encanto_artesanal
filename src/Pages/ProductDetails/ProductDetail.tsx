import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { Navbar, Footer } from "../index.ts";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";
import SideImages from "./Components/SideImages/SideImages.tsx";
import MainImage from "./Components/MainImage/MainImage.tsx";
import ProductDetailButton from "./Components/ProductDetailButton/ProductDetailButton.tsx";
import {
  getDescriptionStyle,
  getImagesContainerStyle,
  getPriceStyle,
  getProductContentContainerStyle,
  getProductDetailContainerStyles,
  getTitleStyle,
} from "./ProductDetails.styles.ts";
import QuantityComponent from "./Components/QuantityComponent/QuantityComponent.tsx";
import ReleaseMobileCarousel from "./Components/ProductDetailMobileCarousel/ProductDetailMobileCarousel.tsx";
import { useCart } from "../../Context/ShoppingCartContext/CartContext.tsx";
import BackButton from "./Components/BackButton/BackButton.tsx";

const ProductDetail = () => {
  const { id } = useParams();
  const { apiData, isLoading } = useApiData();
  const { addToCart } = useCart();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [quantity, setQuantity] = useState(1);

  const product = id
    ? apiData?.data?.find((item) => item.id === Number(id))
    : undefined;

  const [selectedImage, setSelectedImage] = useState(
    product?.imagesrc?.[0] || ""
  );

  if (isLoading) return <Typography>Carregando...</Typography>;
  if (!product) return <Typography>Produto não encontrado.</Typography>;

  return (
    <>
      <Navbar />
      {isMobile && <BackButton />}
      <Box sx={getProductDetailContainerStyles}>
        <Box>
          {isMobile ? (
            <ReleaseMobileCarousel product={product} />
          ) : (
            <Box sx={getImagesContainerStyle}>
              {product.imagesrc.length > 1 && (
                <SideImages
                  product={product}
                  setSelectedImage={setSelectedImage}
                />
              )}
              <MainImage product={product} selectedImage={selectedImage} />
            </Box>
          )}
          <Box sx={getProductContentContainerStyle}>
            <Box>
              <Typography sx={getTitleStyle}>{product.title}</Typography>
              <Typography sx={getPriceStyle}>{product.description}</Typography>
            </Box>
            <QuantityComponent quantity={quantity} setQuantity={setQuantity} />
            <ProductDetailButton
              addToCart={() =>
                addToCart({
                  id: product.id,
                  name: product.title,
                  price: product.description,
                  imgSrc: product.imagesrc,
                  imgAlt: product.imagealt,
                  quantity: quantity,
                })
              }
            />
            <Typography sx={getDescriptionStyle}>
              {product.largedescription}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDetail;
