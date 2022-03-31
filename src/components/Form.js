import React from "react";
import {
  Grid,
  Box,
  TextField,
  InputAdornment,
  Typography,
  Button,
  Divider,
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
  padding: 60px;
`;

const TextFieldStyled = styled(TextField)`
  background-color: #121214;
  border-radius: 4px;
  margin-bottom: 10px;
  color: white;
`;

const PurpleTextStyled = styled(Typography)`
  color: #573c97;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const EntrarStyled = styled(Button)`
  background-color: #8257e5;
  font-weight: 700;
  margin: 24px 0;
`;

const GitHubStyled = styled(Button)`
  background-color: #8257e5;
  font-weight: 700;
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

const WhiteTextStyled = styled(Typography)`
  color: #e1e1e6;
  font-size: 14px;
  letter-spacing: -0.5px;
`;

const DividerStyled = styled(Divider)`
  &:before,
  &:after {
    border-top: thin solid #28272f;
    margin: 28px 0;
    height: 1px;
  }
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
                  <EmailIconStyled />
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
          <PurpleTextStyled>Esqueci minha senha</PurpleTextStyled>
          <EntrarStyled variant="contained" size="large" fullWidth>
            Entrar
          </EntrarStyled>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item>
              <WhiteTextStyled>Não tem uma conta?</WhiteTextStyled>
            </Grid>
            <Grid item>
              <PurpleTextStyled>Registre-se</PurpleTextStyled>
            </Grid>
          </Grid>
          <DividerStyled> </DividerStyled>
          <Grid container alignItems="center">
            <Grid item lg={3}>
              <WhiteTextStyled>Ou entre com</WhiteTextStyled>
            </Grid>
            <Grid item lg={9}>
              <GitHubStyled variant="contained" size="large" fullWidth>
                GitHub
              </GitHubStyled>
            </Grid>
          </Grid>
        </BoxStyled>
      </Grid>
    </>
  );
}

export default Form;
