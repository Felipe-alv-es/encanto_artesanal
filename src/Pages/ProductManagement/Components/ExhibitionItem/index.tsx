import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ReleaseItem from "../../../Releases/Components/ReleaseItem/ReleaseItem.tsx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";

interface ExhibitionItemProps {
  id: number;
  title: string;
  description: string;
  largeDescription: string;
  imagesrc: string[];
  imagealt: string;
  producttype;
  handleDelete: (id: number) => Promise<void>;
  onEditClick: (data: {
    id: number;
    title: string;
    description: string;
    largeDescription: string;
    imagealt: string;
    imagesrc: string[];
    producttype: string;
  }) => void;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  isEditing: boolean;
}

const ExhibitionItem = React.forwardRef<HTMLLIElement, ExhibitionItemProps>(
  (
    {
      id,
      title,
      description,
      largeDescription,
      imagealt,
      imagesrc,
      producttype,
      handleDelete,
      onEditClick,
      setIsEditing,
      isEditing,
    },
    ref
  ) => {
    const handleEdit = () => {
      onEditClick({
        id,
        title,
        description,
        largeDescription,
        imagealt,
        imagesrc: imagesrc,
        producttype,
      });
      setIsEditing(!isEditing);
    };

    return (
      <>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "4px 8px 4px 8px",
            }}
          >
            <Typography variant="h6">{"Excluir o item: "}</Typography>
            <IconButton onClick={() => handleDelete(id)}>
              <IoMdCloseCircleOutline color="red" />
            </IconButton>
            <IconButton onClick={() => handleEdit()}>
              <MdOutlineModeEdit color="blue" />
            </IconButton>
          </Box>
          <ReleaseItem
            key={id}
            imageAlt={imagealt}
            title={title}
            imageSrc={imagesrc[0]}
            price={description}
          />
        </Box>
      </>
    );
  }
);

export default ExhibitionItem;
