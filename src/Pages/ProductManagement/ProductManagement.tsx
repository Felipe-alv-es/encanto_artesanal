import {
  Box,
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ReleaseItem from "../Releases/Components/ReleaseItem/index.tsx";
import { releaseList } from "../../assets/Arrays/ReleasesList.tsx";
import { getGridStyle } from "../Releases/Releases.styles.ts";
import { IoMdCloseCircleOutline } from "react-icons/io";

type ApiResponse = {
  data: {
    id: number;
    title: string;
    description: string;
    imagesrc: string;
    imagealt: string;
  }[];
};

const ProductManagement = () => {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [formData, setFormData] = useState({
    title: releaseList[0].title,
    description: releaseList[0].description,
    imageSrc:
      "https://img.elo7.com.br/product/zoom/487B8DE/lindo-trio-de-velas-artesanais-velasartesanais.jpg",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      console.log("Dados a serem enviados:", formData);
      const response = await fetch(
        "https://encanto-artesanal-back.onrender.com/api/posts/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            imagesrc: formData.imageSrc,
            imagealt: formData.title,
          }),
        }
      );

      console.log({
        title: formData.title,
        description: formData.description,
        imageSrc: formData.imageSrc,
        imagealt: formData.title,
      });

      if (!response.ok) {
        throw new Error("Falha ao salvar os dados");
      }

      await response.json();
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://encanto-artesanal-back.onrender.com/api/posts/"
        );

        if (!response.ok) {
          throw new Error("Falha ao buscar os dados");
        }

        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(
        `https://encanto-artesanal-back.onrender.com/api/posts/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Falha ao excluir o item");
      }

      setApiData((prevData) =>
        prevData
          ? {
              ...prevData,
              data: prevData.data.filter((item) => item.id !== id),
            }
          : null
      );

      console.log(`Item ${id} deletado com sucesso!`);
    } catch (error) {
      console.error("Erro ao excluir o item:", error);
    }
  };

  return (
    <Box sx={{ background: "#D4D4D4", height: "100%", textAlign: "center" }}>
      <Typography variant="h1" fontWeight={"bold"} paddingTop={"32px"}>
        ProductManagement
      </Typography>

      <Box padding={"32px"}>
        <Divider />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
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
          <Box sx={{ padding: "16px" }}>
            <Button
              variant="outlined"
              color="inherit"
              fullWidth
              onClick={handleSave}
            >
              Salvar
            </Button>
          </Box>
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

      <Box sx={getGridStyle}>
        {apiData && apiData.data ? (
          apiData.data.map((item) => (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "4px 8px 4px 8px",
                }}
              >
                <Typography variant="h6">
                  {" ID do item: " + item.id}
                </Typography>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <IoMdCloseCircleOutline />
                </IconButton>
              </Box>
              <ReleaseItem
                key={item.id}
                imageAlt={item.imagealt}
                title={item.title}
                imageSrc={item.imagesrc}
                description={item.description}
              />
            </Box>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </Box>
    </Box>
  );
};

export default ProductManagement;
