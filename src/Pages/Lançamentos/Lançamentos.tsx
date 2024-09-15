import { Box, Typography } from "@mui/material";
import React from "react";

const Lançamentos = () => {
  return (
    <Box sx={{ background: "#F2F2F2" }}>
      <Typography variant="h3" sx={{ textAlign: "center", padding: "32px" }}>
        Conheça nossas novidades
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: "32px",
          justifyContent: "center",
          alignItems: "center",
          gridTemplateColumns: "repeat(4, auto)",
          padding: "32px",
          "> *": {
            height: "600px",
            width: "300px",
            borderRadius: "32px",
            padding: "32px",
          },
        }}
      >
        <Box sx={{ background: "coral" }}>Item 1</Box>
        <Box sx={{ background: "coral" }}>Item 2</Box>
        <Box sx={{ background: "coral" }}>Item 3</Box>
        <Box sx={{ background: "coral" }}>Item 4</Box>
        <Box sx={{ background: "coral" }}>Item 5</Box>
        <Box sx={{ background: "coral" }}>Item 6</Box>
        <Box sx={{ background: "coral" }}>Item 6</Box>
        <Box sx={{ background: "coral" }}>Item 6</Box>
        <Box sx={{ background: "coral" }}>Item 6</Box>
        <Box sx={{ background: "coral" }}>Item 6</Box>
        <Box sx={{ background: "coral" }}>Item 6</Box>
        <Box sx={{ background: "coral" }}>Item 6</Box>
      </Box>
    </Box>
  );
};

export default Lançamentos;
