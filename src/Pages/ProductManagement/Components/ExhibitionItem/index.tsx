import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ReleaseItem from "../../../Releases/Components/ReleaseItem/ReleaseItem.tsx";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { BiHide, BiShow } from "react-icons/bi";

interface ExhibitionItemProps {
  id: number;
  title: string;
  description: string;
  largeDescription: string;
  imagesrc: string[];
  imagealt: string;
  producttype: string;
  isActive?: boolean;
  handleDelete: (id: number) => Promise<void>;
  handleHideItems: (id: number, isActive: boolean) => Promise<void>;
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
      isActive,
      handleDelete,
      handleHideItems,
      onEditClick,
      setIsEditing,
      isEditing,
    },
    ref,
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

    const handleDeleteVerification = () => {
      const isConfirmed = window.confirm(
        "Você tem certeza que deseja excluir esse produto?",
      );

      if (isConfirmed) {
        handleDelete(id);
      }
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
            <IconButton onClick={() => handleDeleteVerification()}>
              <IoMdCloseCircleOutline color="red" />
            </IconButton>
            <IconButton onClick={() => handleEdit()}>
              <MdOutlineModeEdit color="blue" />
            </IconButton>
            <IconButton onClick={() => handleHideItems(id, isActive ?? true)}>
              {isActive ? (
                <BiShow color="#008f00" />
              ) : (
                <BiHide color="#9D00FF" />
              )}
            </IconButton>
          </Box>
          <ReleaseItem
            id={id}
            key={id}
            imageAlt={imagealt}
            title={title}
            imageSrc={imagesrc[0]}
            price={description}
          />
        </Box>
      </>
    );
  },
);

export default ExhibitionItem;
