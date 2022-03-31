import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import Logo from "../img/logoRocketseat.png";

const TypographyStyled = styled(Typography)`
    color: #e1e1e6;
    font-size: 54px;
    font-weight: 700;
    letter-spacing: -2px;
`;

function LogoTitle() {
  return (
    <>
      <Grid item lg={4} md={6} sm={12}>
        <img src={Logo} width="40%" style={{marginBottom: "48px"}} />
        <TypographyStyled>Faça seu login<br/>na plataforma</TypographyStyled>
      </Grid>
    </>
  );
}

export default LogoTitle;
