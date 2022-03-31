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

const ImgStyled = styled.img`
    width: 200px;
    margin-bottom: 48px;
`;

function LogoTitle() {
  return (
    <>
      <Grid item lg={4} md={6} sm={11} xs={12}>
        <ImgStyled src={Logo} />
        <TypographyStyled>Faça seu login<br/>na plataforma</TypographyStyled>
      </Grid>
    </>
  );
}

export default LogoTitle;
