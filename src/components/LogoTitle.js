import React from "react";
import { Grid } from "@mui/material";
import Logo from "../img/logoRocketseat.png";
import * as S from "../styles/style";

function LogoTitle() {
  return (
    <>
      <Grid item lg={4} md={6} sm={11} xs={12}>
        <S.ImgStyled src={Logo} />
        <S.TypographyStyled>Faça seu login<br/>na plataforma</S.TypographyStyled>
      </Grid>
    </>
  );
}

export default LogoTitle;
