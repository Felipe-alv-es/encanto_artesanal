import React from "react";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { formDataPlaceholder } from "../../ProductManagement.types";

interface InputFieldsComponentProps {
  formData: formDataPlaceholder;
  handleChange: (field: string, value: string) => void;
  handleSave: () => Promise<void>;
  handleChangeSelect: (event: SelectChangeEvent) => void;
}

const InputFieldsComponent = React.forwardRef<
  HTMLLIElement,
  InputFieldsComponentProps
>(({ formData, handleChange, handleSave, handleChangeSelect }, ref) => {
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
      <Box>
        <Select onChange={handleChangeSelect} value={formData.producttype}>
          <MenuItem value={"Velas moldadas"}>Velas moldadas</MenuItem>
          <MenuItem value={"Velas de massagem"}>Velas de massagem</MenuItem>
          <MenuItem value={"Velas Container"}>Velas Container</MenuItem>
          <MenuItem value={"Velas Tematicas"}>Velas Tematicas</MenuItem>
          <MenuItem value={"Geleias de banho"}>Geleias de banho</MenuItem>
          <MenuItem value={"Sabonetes de massagem"}>
            Sabonetes de massagem
          </MenuItem>
          <MenuItem value={"Sabonetes Decorativos"}>
            Sabonetes decorativos
          </MenuItem>
        </Select>
      </Box>
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
