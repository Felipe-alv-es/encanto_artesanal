import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import {
  getFooterMenuStyle,
  getListStyle,
  getlistTitleStyle,
} from "../../Footer.styles.ts";
import LinkListComponent from "../../Components/LinkListComponent.tsx/index.tsx";
import LogoInsta from "../../../../assets/images/Logo/InstagramLogo.png";
import WhatsLogo from "../../../../assets/images/Logo/WhatsappLogo.png";
import { getTitleStyle, getSubtitleStyle } from "../../Footer.styles.ts";

export const FooterListComponent = React.forwardRef<HTMLLIElement>(() => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60%",
        alignSelf: "end",
      }}
    >
      <Typography sx={getTitleStyle}>Fale Comigo</Typography>
      <Typography sx={getSubtitleStyle}>
        Gostou dos nossos produtos? Ficaremos felizes em te atender! Entre em
        contato pelo nosso Instagram ou Whatsapp.
      </Typography>
      <Divider sx={{ background: "#6bb4ad" }} />
      <Box sx={getFooterMenuStyle}>
        <Box>
          <Typography sx={getlistTitleStyle}>Meus Links</Typography>
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
  );
});

export default FooterListComponent;
