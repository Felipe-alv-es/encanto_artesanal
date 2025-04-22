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
        top: "90px",
        left: "16px",
        borderStyle: "none",
      }}
      onClick={() => navigate(-1)}
    >
      <IoArrowBackOutline size={24} color="#383838" />
    </Box>
  );
};

export default BackButton;
