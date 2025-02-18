import React from "react";
import { Box, Typography } from "@mui/material";

export const ProductPageTitle = React.forwardRef<HTMLLIElement>(() => {
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          paddingTop: "32px",
          typography: "h3",
          fontWeight: "900",
          paddingBottom: "8px",
          color: "#f2f2f2",
        }}
      >
        Catalogo de produtos
      </Typography>
      <Box
        sx={{
          placeItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#f2f2f2",
            paddingBottom: "64px",
            fontWeight: "700",
            width: "700px",
          }}
        >
          Nosso catalogo de itens lhe dá as boas-vindas. Aqui você pode ver o
          que produzimos atualmente, novos lançamentos de produtos e ideias
          desenvolvidas. Caso não ache o produto desejado, entre em contato via
          Instagram ou Whatsapp que veremos a viabilidade de produzir o que
          deseja.
        </Typography>
      </Box>
    </>
  );
});

export default ProductPageTitle;
