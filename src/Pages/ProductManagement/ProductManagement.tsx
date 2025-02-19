import { Box, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React, { useState } from "react";
import { getGridStyle } from "../Releases/Releases.styles.ts";
import useApiData from "../../Hooks/FetchApiHooks/index.tsx";
import {
  formatDataInitialValues,
  formDataPlaceholder,
} from "./ProductManagement.types.ts";
import { productManagementContainerStyle } from "./ProductManagement.styles.ts";
import {
  CustomDivider,
  ExhibitionItem,
  ProductInputComponent,
} from "./Components/index.ts";

const ProductManagement = () => {
  const [formData, setFormData] = useState<formDataPlaceholder>(
    formatDataInitialValues()
  );
  const { handleSave, apiData, handleDelete } = useApiData(formData);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleChangeSelect = (event: SelectChangeEvent) => {
    setFormData((prev) => ({
      ...prev,
      producttype: event.target.value,
    }));
  };

  return (
    <Box sx={productManagementContainerStyle}>
      <Typography>ProductManagement</Typography>
      <CustomDivider />
      <ProductInputComponent
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
        handleChangeSelect={handleChangeSelect}
      />
      <CustomDivider />
      <Box sx={getGridStyle}>
        {apiData && apiData.data ? (
          apiData.data.map((item) => (
            <ExhibitionItem
              description={item.description}
              handleDelete={handleDelete}
              id={item.id}
              imagealt={item.imagealt}
              imagesrc={item.imagesrc}
              title={item.title}
            />
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </Box>
    </Box>
  );
};

export default ProductManagement;
