import React, { useState } from "react";
import { Box, Paper, Typography, Button, IconButton } from "@mui/material";
import { IoClose } from "react-icons/io5";
import {
  ProductDetailColorsComponentProps,
  ProductDetailImagesComponentProps,
  ProductDetailSizesComponentProps,
  ProductDetailsProps,
  ProductItemCloseButton,
  ProductItemTitle,
} from "./ProductDetail.types.ts";
import {
  productDetailContainerStyle,
  productDetailImageContainer,
  productDetailPaperStyle,
  productDetailsSiteMenuContainer,
} from "./ProductDetails.styles.ts";

const ProductDetailImagesComponent = React.forwardRef<
  HTMLLIElement,
  ProductDetailImagesComponentProps
>(({ images, setSelectedImage, selectedImage }, ref) => {
  return (
    <Box sx={productDetailImageContainer}>
      <Box>
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`Imagem ${index + 1}`}
            onClick={() => setSelectedImage(img)}
            sx={{
              border:
                selectedImage === img ? "2px solid blue" : "1px solid #383838",
            }}
          />
        ))}
      </Box>
      <Box>
        <Box component="img" src={selectedImage} alt="Imagem do produto" />
      </Box>
    </Box>
  );
});

const ProductDetailTitleComponent = React.forwardRef<
  HTMLLIElement,
  ProductItemTitle
>(({ title, description }, ref) => {
  return (
    <Box>
      <Typography variant="h4" fontWeight="bold" paddingBottom={"16px"}>
        {title}
      </Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  );
});

const ProductDetailColorsComponent = React.forwardRef<
  HTMLLIElement,
  ProductDetailColorsComponentProps
>(({ colors, setSelectedColor, selectedColor }, ref) => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Cores:
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        {colors.map((color, index) => (
          <Box
            key={index}
            onClick={() => setSelectedColor(color)}
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: color,
              border:
                selectedColor === color ? "2px solid black" : "1px solid #ccc",
              cursor: "pointer",
            }}
          />
        ))}
      </Box>
    </Box>
  );
});

const ProductDetailSizesComponent = React.forwardRef<
  HTMLLIElement,
  ProductDetailSizesComponentProps
>(({ sizes, setSelectedSize, selectedSize }, ref) => {
  return (
    <Box>
      <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
        Tamanhos:
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        {sizes.map((size, index) => (
          <Box
            key={index}
            onClick={() => setSelectedSize(size)}
            sx={{
              padding: "8px 16px",
              border:
                selectedSize === size ? "2px solid blue" : "1px solid #ccc",
              borderRadius: "8px",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <Typography variant="body2">{size}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
});

const ProductDetailCloseButton = React.forwardRef<
  HTMLLIElement,
  ProductItemCloseButton
>(({ onClose }, ref) => {
  return (
    <Box sx={{ position: "absolute", right: 0, padding: "16px" }}>
      <IconButton onClick={onClose}>
        <IoClose />
      </IconButton>
    </Box>
  );
});

const ProductDetailButton = React.forwardRef<HTMLLIElement>((ref) => {
  return (
    <Box
      sx={{
        marginTop: 2,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Button
        variant="outlined"
        color="inherit"
        fullWidth
        sx={{ height: "64px", fontWeight: "500" }}
      >
        Peça seu produto já
      </Button>
    </Box>
  );
});

export const ProductDetails = React.forwardRef<
  HTMLLIElement,
  ProductDetailsProps
>(({ product, onClose }, ref) => {
  const images = Array.isArray(product.imagesrc)
    ? product.imagesrc
    : [product.imagesrc];
  const colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00"];
  const sizes = ["P", "M", "G", "GG"];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <Box sx={productDetailContainerStyle}>
      <Paper sx={productDetailPaperStyle}>
        <ProductDetailCloseButton onClose={onClose} />
        <ProductDetailImagesComponent
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <Box sx={productDetailsSiteMenuContainer}>
          <ProductDetailTitleComponent
            title={product.title}
            description={product.description}
          />
          <ProductDetailColorsComponent
            colors={colors}
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
          <ProductDetailSizesComponent
            sizes={sizes}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
          />
          <ProductDetailButton />
        </Box>
      </Paper>
    </Box>
  );
});

export default ProductDetails;
