import React from "react";
import { Box, Divider, Typography, useMediaQuery } from "@mui/material";
import LinkListComponent from "../LinkListComponent.tsx/index.tsx";
import {
  getContainerContentStyle,
  getContainerStyle,
  getFooterMenuStyle,
  getListStyle,
  getlistTitleStyle,
  getSubtitleStyle,
  getTitleStyle,
} from "./FooterListComponent.styles.ts";
//@ts-ignore
import LogoInsta from "../../../../assets/images/Logo/InstagramLogo.png";
//@ts-ignore
import WhatsLogo from "../../../../assets/images/Logo/WhatsappLogo.png";
import LogoComponent from "../Logo/index.tsx";

export const FooterListComponent = React.forwardRef<HTMLLIElement>(() => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Box sx={getContainerStyle}>
      <Box sx={getContainerContentStyle}>
        <LogoComponent />
        <Box>
          <Typography sx={getTitleStyle}>{"Fale Conosco"}</Typography>
          <Typography sx={getSubtitleStyle}>
            {
              "Gostou dos nossos produtos? Ficaremos felizes em te atender! Entre em contato pelo nosso Instagram ou Whatsapp."
            }
          </Typography>
        </Box>
        {!isMobile && (
          <Box>
            <Divider sx={{ background: "#6bb4ad" }} orientation="vertical" />
          </Box>
        )}
        <Box sx={getFooterMenuStyle}>
          <Box>
            <Typography sx={getlistTitleStyle}>{"Meus Links"}</Typography>
            <Box sx={getListStyle}>
              <ul>
                <LinkListComponent
                  imgSrc={LogoInsta}
                  hrefUrl="https://www.instagram.com/encantoartesanal.loja/"
                />
                <LinkListComponent
                  imgSrc={WhatsLogo}
                  hrefUrl="https://api.whatsapp.com/send/?phone=5511981669996&text=teste+de+texto&type=phone_number&app_absent=0"
                />
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});

export default FooterListComponent;
