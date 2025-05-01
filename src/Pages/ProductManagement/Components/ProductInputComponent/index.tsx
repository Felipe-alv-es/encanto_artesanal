import React from "react";
import { Box } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import ReleaseItem from "../../../Releases/Components/ReleaseItem/ReleaseItem.tsx";
import {
  containerStyle,
  textFieldAreaStyle,
} from "./ProductInputComponent.styles.ts";
import InputFieldsComponent from "../InputFieldsComponent/index.tsx";
import { formDataPlaceholder } from "../../ProductManagement.types.ts";
import { UseMutateAsyncFunction } from "react-query";

interface StyledLinkListComponentProps {
  formData: formDataPlaceholder;
  handleChange: (field: string, value: string | string[]) => void;
  handleSave: UseMutateAsyncFunction<
    any,
    unknown,
    {
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

const ProductInputComponent = React.forwardRef<
  HTMLLIElement,
  StyledLinkListComponentProps
>(
  (
    { formData, isEditing, handleChange, handleSave, handleChangeSelect },
    ref
  ) => {
    return (
      <Box sx={containerStyle}>
        <Box sx={textFieldAreaStyle}>
          <InputFieldsComponent
            formData={formData}
            handleChange={handleChange}
            handleSave={handleSave}
            handleChangeSelect={handleChangeSelect}
            isEditing={isEditing}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", placeItems: "center" }}>
            <ReleaseItem
              id={formData.id ? formData.id : 0}
              imageSrc={formData.imageSrc[0]}
              imageAlt={""}
              title={formData.title}
              price={formData.description}
            />
          </Box>
        </Box>
      </Box>
    );
  }
);

export default ProductInputComponent;
