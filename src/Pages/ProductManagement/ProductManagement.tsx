import { Box, MenuItem, Typography } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
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
    formatDataInitialValues(),
  );
  const { handleSave, apiData, handleDelete, handleToggleActive } =
    useApiData();
  const [isEditing, setIsEditing] = useState(false);
  const [filterType, setFilterType] = useState<string>("Todos");

  const handleChange = (field: string, value: string | string[]) => {
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

  const handleEditClick = (data: {
    id: number;
    title: string;
    description: string;
    largeDescription: string;
    imagealt: string;
    imagesrc: string[];
    producttype: string;
  }) => {
    setFormData({
      id: data.id,
      title: data.title,
      description: data.description,
      largedescription: data.largeDescription,
      imagealt: data.imagealt,
      imageSrc: data.imagesrc,
      producttype: data.producttype,
    });
  };

  const handleHideItems = async (id: number, currentIsActive: boolean) => {
    try {
      await handleToggleActive({
        id,
        isActive: !currentIsActive,
      });
    } catch (error) {
      console.error("Erro ao alterar isActive:", error);
    }
  };

  const filteredItems =
    apiData?.data
      ?.filter((item) => {
        if (filterType === "Todos") return true;

        if (filterType === "desativados") {
          return item.isActive === false;
        }

        return item.producttype === filterType;
      })
      .sort((a, b) => b.id - a.id) ?? [];

  return (
    <Box sx={productManagementContainerStyle}>
      <Typography>ProductManagement</Typography>
      <CustomDivider />
      <ProductInputComponent
        formData={formData}
        handleChange={handleChange}
        handleSave={handleSave}
        handleChangeSelect={handleChangeSelect}
        isEditing={isEditing}
      />
      <CustomDivider />
      <Box>
        <Select
          value={filterType}
          onChange={(event) => setFilterType(event.target.value)}
          displayEmpty
        >
          <MenuItem value="Todos">Todos</MenuItem>
          <MenuItem value="kits_presenteaveis">Kits Presenteáveis</MenuItem>
          <MenuItem value="velas_moldadas">Velas moldadas</MenuItem>
          <MenuItem value="velas_container">Velas Container</MenuItem>
          <MenuItem value="sabonetes_decorativos">Cuidados de Banho</MenuItem>
          <MenuItem value="bordados">Bordados</MenuItem>
          <MenuItem value="desativados">Desativados</MenuItem>
        </Select>
      </Box>
      <Box sx={getGridStyle}>
        {filteredItems && filteredItems ? (
          filteredItems.map((item) => (
            <ExhibitionItem
              description={item.description}
              handleDelete={handleDelete}
              handleHideItems={handleHideItems}
              onEditClick={handleEditClick}
              id={item.id}
              imagealt={item.imagealt}
              imagesrc={item.imagesrc}
              largeDescription={item.largedescription}
              producttype={item.producttype}
              isActive={item.isActive}
              title={item.title}
              key={item.id}
              setIsEditing={setIsEditing}
              isEditing={isEditing}
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
