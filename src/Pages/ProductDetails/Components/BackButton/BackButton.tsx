import { Box } from "@mui/material";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Box
      component={"button"}
      sx={{
        position: "absolute",
        borderStyle: "none",
        padding: "8px",
        borderRadius: "80px",
        background: "transparent",
        "@media(max-width: 2560px)": {
          top: "170px",
          left: "30px",
          ":hover": {
            background: "#DCEADB",
          },
        },
        "@media(max-width: 768px)": {
          top: "90px",
          left: "16px",
        },
      }}
      onClick={() => navigate(-1)}
    >
      <IoArrowBackOutline size={24} color="#383838" />
    </Box>
  );
};

export default BackButton;
