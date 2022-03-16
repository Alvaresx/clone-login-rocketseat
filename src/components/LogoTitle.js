import React from "react";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

const TypographyStyled = styled(Typography)`
    color: #e1e1e6;
    font-size: 54px;
    font-weight: 700;
    letter-spacing: -2px;
`;

function LogoTitle() {
  return (
    <>
      <Grid item lg={5} md={5}>
        <TypographyStyled>Faça seu login<br/>na plataforma</TypographyStyled>
      </Grid>
    </>
  );
}

export default LogoTitle;
