import React from "react";
import { Box, IconButton } from "@mui/material";

interface StyledLinkListComponentProps {
  imgSrc: string;
  hrefUrl: string;
}

export const LinkListComponent = React.forwardRef<
  HTMLLIElement,
  StyledLinkListComponentProps
>(({ imgSrc, hrefUrl }, ref) => {
  return (
    <li ref={ref}>
      <IconButton href={hrefUrl} target="_blank">
        <Box
          sx={{
            width: "94px",
            height: "94px",
            "@media(max-width: 544px)": {
              width: "70%",
            },
          }}
          component="img"
          src={imgSrc}
          alt="Man avatar generic image"
        />
      </IconButton>
    </li>
  );
});

export default LinkListComponent;
