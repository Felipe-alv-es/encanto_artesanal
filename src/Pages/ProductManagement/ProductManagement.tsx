import { Box, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ReleaseItem from "../Releases/Components/ReleaseItem/index.tsx";
import { releaseList } from "../../assets/Arrays/ReleasesList.tsx";

const ProductManagement = () => {
  const [formData, setFormData] = useState({
    title: releaseList[0].title,
    description: releaseList[0].description,
    imageSrc: releaseList[0].imageSrc,
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Box sx={{ background: "#6bb4ad", height: "100%", textAlign: "center" }}>
      <Typography variant="h1" color="#F2F2F2" fontWeight={"bold"}>
        ProductManagement
      </Typography>

      <Box padding={"32px"}>
        <Divider />
      </Box>

      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            padding: "32px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <TextField
            label="Título"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
          <TextField
            label="Descrição"
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
          />
          <TextField
            label="URL da Imagem"
            value={formData.imageSrc}
            onChange={(e) => handleChange("imageSrc", e.target.value)}
          />
        </Box>

        <Box sx={{ width: "100%", placeItems: "center" }}>
          <ReleaseItem
            imageSrc={formData.imageSrc}
            imageAlt={""}
            title={formData.title}
            description={formData.description}
          />
        </Box>
      </Box>

      <Box padding={"32px"}>
        <Divider />
      </Box>
    </Box>
  );
};

export default ProductManagement;
