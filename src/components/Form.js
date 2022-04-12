import React, { useState } from "react";
import { Grid, InputAdornment } from "@mui/material";
import * as S from "../styles/style";

function Form() {
  const [disabledEnterButton, setDisabledEnterButton] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visibility, setVisibility] = useState(true);

  const handleChangeEmail = (e) => {
    setEmail(e);
    if (password.length >= 4 && e !== "") {
      setDisabledEnterButton(false);
    } else {
      setDisabledEnterButton(true);
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e);
    if (email !== "" && e.length >= 4) {
      setDisabledEnterButton(false);
    } else {
      setDisabledEnterButton(true);
    }
  };

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <>
      <Grid item lg={5} md={6} sm={11} xs={12}>
        <S.BoxStyled>
          <S.TextFieldStyled
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <S.EmailIconStyled />
                </InputAdornment>
              ),
            }}
          />
          <S.TextFieldStyled
            placeholder="Senha"
            type={visibility ? "password" : "text"}
            value={password}
            onChange={(e) => handleChangePassword(e.target.value)}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <S.LockIconStyled />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {visibility ? (
                    <S.VisibilityIconStyled onClick={handleVisibility} />
                  ) : (
                    <S.VisibilityOffIconStyled onClick={handleVisibility} />
                  )}
                </InputAdornment>
              ),
            }}
          />
          <S.PurpleTextStyled>Esqueci minha senha</S.PurpleTextStyled>
          <S.EntrarStyled
            variant="contained"
            size="large"
            fullWidth
            disabled={disabledEnterButton}
          >
            Entrar
          </S.EntrarStyled>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item>
              <S.WhiteTextStyled>Não tem uma conta?</S.WhiteTextStyled>
            </Grid>
            <Grid item>
              <S.PurpleTextStyled>Registre-se</S.PurpleTextStyled>
            </Grid>
          </Grid>
          <S.DividerStyled> </S.DividerStyled>
          <Grid container alignItems="center">
            <Grid item lg={3} md={4} sm={4} xs={4}>
              <S.WhiteTextStyled>Ou entre com</S.WhiteTextStyled>
            </Grid>
            <Grid item lg={9} md={8} sm={8} xs={8}>
              <S.GitHubStyled variant="contained" size="large" fullWidth>
                <S.GitHubIconStyled />
                GitHub
              </S.GitHubStyled>
            </Grid>
          </Grid>
        </S.BoxStyled>
      </Grid>
    </>
  );
}

export default Form;
