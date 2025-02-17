import React from "react";
import { Box } from "@mui/material";
import ReleaseItem from "../../../Releases/Components/ReleaseItem/index.tsx";
import {
  containerStyle,
  textFieldAreaStyle,
} from "./ProductInputComponent.styles.ts";
import InputFieldsComponent from "../InputFieldsComponent/index.tsx";
import { formDataPlaceholder } from "../../ProductManagement.types.ts";

interface StyledLinkListComponentProps {
  formData: formDataPlaceholder;
  handleChange: (field: string, value: string) => void;
  handleSave: () => Promise<void>;
}

const ProductInputComponent = React.forwardRef<
  HTMLLIElement,
  StyledLinkListComponentProps
>(({ formData, handleChange, handleSave }) => {
  return (
    <Box sx={containerStyle}>
      <Box sx={textFieldAreaStyle}>
        <InputFieldsComponent
          formData={formData}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", placeItems: "center" }}>
          <ReleaseItem
            imageSrc={formData.imageSrc}
            imageAlt={""}
            title={formData.title}
            description={formData.description}
          />
        </Box>
      </Box>
    </Box>
  );
});

export default ProductInputComponent;
