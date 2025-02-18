import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import ReleaseItem from "../../../Releases/Components/ReleaseItem/index.tsx";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface ExhibitionItemProps {
  id: number;
  title: string;
  description: string;
  imagesrc: string;
  imagealt: string;
  handleDelete: (id: number) => Promise<void>;
}

const ExhibitionItem = React.forwardRef<HTMLLIElement, ExhibitionItemProps>(
  ({ id, title, description, imagealt, imagesrc, handleDelete }, ref) => {
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
          </Box>
          <ReleaseItem
            key={id}
            imageAlt={imagealt}
            title={title}
            imageSrc={imagesrc}
            description={description}
          />
        </Box>
      </>
    );
  }
);

export default ExhibitionItem;
