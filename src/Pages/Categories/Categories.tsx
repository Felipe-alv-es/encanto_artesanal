import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { categoriesOptions } from "../../assets/Arrays/CategoriesList.tsx";

const Categories = () => {
  return (
    <Box
      sx={{
        background: "#F2F2F2",
        padding: "5% 10% 5% 10%",
        display: "flex",
        justifyContent: "center",
        gap: "32px",
      }}
    >
      {categoriesOptions.map((item) => (
        <Box sx={{ width: "20%" }}>
          <Box
            component="img"
            src={item.imageSrc}
            alt={item.imageAlt}
            sx={{
              width: "100%",
              borderRadius: "16px",
              marginBottom: "16px",
            }}
          />
          <Typography variant="overline" fontSize={"20px"} fontWeight={"600"}>
            {item.title}
          </Typography>
          <Typography variant="body1">{item.descrição}</Typography>
          <Button variant="outlined" sx={{ marginTop: "24px" }}>
            Conheça nosso trabalho
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default Categories;
