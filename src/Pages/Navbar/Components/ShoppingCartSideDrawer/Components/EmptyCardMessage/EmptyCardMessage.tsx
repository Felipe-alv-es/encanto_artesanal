import { Box, Typography } from "@mui/material";
import React from "react";
import { RiEmotionSadLine } from "react-icons/ri";
import {
  getEmptyCardMessageContainerStyle,
  getEmptyCardMessageContentStyle,
  getEmptyCardMessageDescriptionStyle,
  getEmptyCardMessageTitleStyle,
} from "./EmptyCardMessage.styles.ts";

const EmptyCardMessage = () => {
  return (
    <Box sx={getEmptyCardMessageContainerStyle}>
      <Box sx={getEmptyCardMessageContentStyle}>
        <RiEmotionSadLine size={100} color="#9e9e9e" />
        <Typography sx={getEmptyCardMessageTitleStyle}>
          {"Seu carrinho está vazio"}
        </Typography>
        <Typography sx={getEmptyCardMessageDescriptionStyle}>
          {"Quando forem adicionados produtos, eles aparecerão aqui."}
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyCardMessage;
