import React, { useEffect, useState } from "react";
import { Box, Button, Chip, MenuItem, Select, TextField } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { formDataPlaceholder } from "../../ProductManagement.types";
import { UseMutateAsyncFunction } from "react-query";

interface InputFieldsComponentProps {
  formData: formDataPlaceholder;
  handleChange: (field: string, value: string | string[]) => void;
  handleSave: UseMutateAsyncFunction<
    any,
    unknown,
    {
      id?: string;
      title: string;
      description: string;
      largedescription: string;
      images: string[];
      producttype: string;
    },
    unknown
  >;
  handleChangeSelect: (event: SelectChangeEvent) => void;
  isEditing: boolean;
}

const InputFieldsComponent = React.forwardRef<
  HTMLLIElement,
  InputFieldsComponentProps
>(
  (
    { formData, isEditing, handleChange, handleSave, handleChangeSelect },
    ref
  ) => {
    const [imageLinks, setImageLinks] = useState<string[]>([]);
    const [currentLink, setCurrentLink] = useState<string>("");

    useEffect(() => {
      if (formData.imageSrc && formData.imageSrc.length > 0) {
        setImageLinks(formData.imageSrc);
      }
    }, [formData.imageSrc]);

    const handleAddImageLink = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === "Enter" && currentLink.trim() !== "") {
        event.preventDefault();
        setImageLinks((prev) => [...prev, currentLink.trim()]);
        setCurrentLink("");
      }
    };

    const handleRemoveImageLink = (index: number) => {
      setImageLinks((prev) => prev.filter((_, i) => i !== index));
    };

    return (
      <>
        {isEditing && (
          <TextField
            label="Id"
            value={formData.id}
            onChange={(e) => handleChange("id", e.target.value)}
          />
        )}
        <TextField
          label="Título"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
        />
        <TextField
          label="Preço e Quantidade"
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <TextField
          label="Descrição completa"
          value={formData.largedescription}
          multiline
          onChange={(e) => handleChange("largedescription", e.target.value)}
        />
        <TextField
          label="Adicionar link de imagem"
          value={currentLink}
          onChange={(e) => setCurrentLink(e.target.value)}
          onKeyDown={handleAddImageLink}
          placeholder="Digite um link e pressione Enter"
        />
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {imageLinks.map((link, index) => (
            <Chip
              key={index}
              label={link}
              onDelete={() => handleRemoveImageLink(index)}
              sx={{
                maxWidth: 200,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            />
          ))}
        </Box>
        <Box>
          <Select
            name="producttype"
            onChange={handleChangeSelect}
            value={formData.producttype}
          >
            <MenuItem value={"kits_presenteaveis"}>Kits Presenteaveis</MenuItem>
            <MenuItem value={"velas_moldadas"}>Velas moldadas</MenuItem>
            <MenuItem value={"velas_container"}>Velas Container</MenuItem>
            <MenuItem value={"sabonetes_decorativos"}>
              Cuidados de Banho
            </MenuItem>
            <MenuItem value={"bordados"}>Bordados</MenuItem>
          </Select>
        </Box>
        <Box sx={{ padding: "16px" }}>
          <Button
            variant="outlined"
            color="inherit"
            fullWidth
            onClick={() =>
              handleSave({
                ...(isEditing && formData.id
                  ? { id: String(formData.id) }
                  : {}),
                title: formData.title,
                description: formData.description,
                largedescription: formData.largedescription,
                images: imageLinks,
                producttype: formData.producttype,
              })
            }
          >
            Salvar
          </Button>
        </Box>
      </>
    );
  }
);

export default InputFieldsComponent;
