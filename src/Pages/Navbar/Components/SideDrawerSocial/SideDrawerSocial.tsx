import { Box, IconButton } from "@mui/material";
import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const SideDrawerSocial = () => {
  return (
    <Box
      sx={{
        background: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        paddingY: "16px",
      }}
    >
      <IconButton
        href={"https://www.instagram.com/encantoartesanal.loja/"}
        target="_blank"
      >
        <FaInstagram size={34} />
      </IconButton>

      <IconButton
        href={
          "https://api.whatsapp.com/send/?phone=5511981669996&text=teste+de+texto&type=phone_number&app_absent=0"
        }
        target="_blank"
      >
        <FaWhatsapp size={34} />
      </IconButton>
    </Box>
  );
};

export default SideDrawerSocial;
