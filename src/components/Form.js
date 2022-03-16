import React from "react";
import {
  Grid,
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import styled from "styled-components";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  GitHub,
} from "@mui/icons-material";

const BoxStyled = styled(Box)`
  background-color: #202024;
  border-radius: 4px;
  padding: 48px;
`;

const TextFieldStyled = styled(TextField)`
  background-color: #121214;
  border-radius: 4px;
  margin-bottom: 10px;
  color: white;
`;

const TypographyStyled = styled(Typography)`
  color: #573c97;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const ButtonStyled = styled(Button)`
  background-color: #8257e5;
  font-weight: 700;
  margin-top: 24px;
`;

const EmailIconStyled = styled(Email)`
  fill: #202024;
  width: 20px;
  height: 20px;
`;

const LockIconStyled = styled(Lock)`
  fill: #202024;
  width: 20px;
  height: 20px;
`;

const VisibilityIconStyled = styled(Visibility)`
  fill: #573c97;
  width: 20px;
  height: 20px;
`;

function Form() {
  return (
    <>
      <Grid item lg={5} md={5}>
        <BoxStyled>
          <TextFieldStyled
            placeholder="E-mail"
            type="email"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIconStyled  />
                </InputAdornment>
              ),
            }}
          />
          <TextFieldStyled
            placeholder="Senha"
            type="password"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIconStyled />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <VisibilityIconStyled />
                </InputAdornment>
              ),
            }}
          />
          <TypographyStyled>Esqueci minha senha</TypographyStyled>
          <ButtonStyled variant="contained" size="large" fullWidth>Entrar</ButtonStyled>
        </BoxStyled>
      </Grid>
    </>
  );
}

export default Form;
