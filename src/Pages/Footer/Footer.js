import React from "react";
import { Box, Divider, Link, Typography } from "@mui/material";
import Logo from "../../assets/images/Home/Home.jpg";
import {
  getContainerStyles,
  getTitleStyle,
  getSubtitleStyle,
  getFooterMenuStyle,
  getListStyle,
  getlistTitleStyle,
} from "./Footer.styles.ts";

const Footer = () => {
  return (
    <Box sx={getContainerStyles} id="Contato">
      <Typography sx={getTitleStyle}>Fale Comigo</Typography>
      <Typography sx={getSubtitleStyle}>
        Gostou do nosso site? Ficarei felizes em ouvir de você! Entre em contato
        comigo!
      </Typography>
      <Box sx={{ m: 5 }} />
      <Divider sx={{ background: "white" }} />
      <Box sx={getFooterMenuStyle}>
        <Box
          sx={{
            width: "35%",
            height: "fit-content",
            "@media(max-width: 544px)": {
              width: "70%",
            },
          }}
          component="img"
          src={Logo}
          alt="Man avatar generic image"
        />
        <Box>
          <Typography sx={getlistTitleStyle}>Meus Links</Typography>
          <Box sx={getListStyle}>
            <ul>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://www.linkedin.com/in/felipe-alves-oliveira/"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/Felipe-alv-es"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://drive.google.com/file/d/1vovf9y0WnbG-WpydjwhkRl1Vz1eBJJ-r/view?usp=sharing"
                >
                  Curriculo
                </Link>
              </li>
            </ul>
          </Box>
        </Box>
        <Box>
          <Typography sx={getlistTitleStyle}>Contato</Typography>
          <Box sx={getListStyle}>
            <ul>
              <li>
                <p>{"(11) 98166-9996"}</p>
              </li>
              <li>
                <p>felipe.alv14@hotmail.com</p>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
