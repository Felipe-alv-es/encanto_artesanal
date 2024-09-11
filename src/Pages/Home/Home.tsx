import React from "react";
import Box from "@mui/material/Box";
//@ts-ignore
import image from "../../assets/images/Home/Image.jpg";
import { Typography, Button } from "@mui/material";
import { IoChevronForward } from "react-icons/io5";

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        display: "grid",
        placeItems: "end start",
      }}
    >
      <Box
        sx={{
          background: "rgba(0,0,0,0.2)",
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 0,
        }}
      />
      <Box sx={{ padding: "64px", width: "25%" }}>
        <Typography variant="h3">
          Uns bla bla bla, compra ai, na moral
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginTop: "64px",
            marginBottom: "16px",
            fontFamily: "Oranienbaum",
          }}
        >
          É muito bom, recomendo em, ta tudo caro, quero diero É muito bom,
          recomendo em, ta tudo caro, quero diero É muito bom, recomendo em, ta
          tudo caro, quero diero
        </Typography>
        <Button
          sx={{
            color: "#1F1F1F",
            borderColor: "#1F1F1F",
            padding: "20px",
            textTransform: "none",
            fontFamily: "Oranienbaum",
            fontSize: "20px",
            "> svg": {
              marginLeft: "16px",
            },
          }}
          variant="outlined"
        >
          Clique Aqui pra tomar no cu
          <IoChevronForward />
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
