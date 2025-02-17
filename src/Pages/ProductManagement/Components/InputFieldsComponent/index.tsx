import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { formDataPlaceholder } from "../../ProductManagement.types";

interface InputFieldsComponentProps {
  formData: formDataPlaceholder;
  handleChange: (field: string, value: string) => void;
  handleSave: () => Promise<void>;
}

const InputFieldsComponent = React.forwardRef<
  HTMLLIElement,
  InputFieldsComponentProps
>(({ formData, handleChange, handleSave }) => {
  return (
    <>
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
    </>
  );
});

export default InputFieldsComponent;
