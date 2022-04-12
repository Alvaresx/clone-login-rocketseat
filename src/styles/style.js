import styled from "styled-components";
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  GitHub,
} from "@mui/icons-material";
import {
  Box,
  TextField,
  Typography,
  Button,
  Divider,
} from "@mui/material";

export const TypographyStyled = styled(Typography)`
  color: #e1e1e6;
  font-size: 54px;
  font-weight: 700;
  letter-spacing: -2px;
`;

export const ImgStyled = styled.img`
  width: 200px;
  margin-bottom: 48px;
`;

export const BoxStyled = styled(Box)`
  background-color: #202024;
  border-radius: 4px;
  padding: 60px;
`;

export const TextFieldStyled = styled(TextField)`
  background-color: #121214;
  border-radius: 4px;
  margin-bottom: 10px;
  & input {
    color: #fff;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border: none;
    }
  }
  .MuiOutlinedInput-root.Mui-focused {
    & > fieldset {
      border-width: 2px;
      border-style: solid;
      border-color: #573c97;
    }
  }
`;

export const EmailIconStyled = styled(Email)`
  fill: #202024;
  width: 20px;
  height: 20px;
`;

export const LockIconStyled = styled(Lock)`
  fill: #202024;
  width: 20px;
  height: 20px;
`;

export const VisibilityIconStyled = styled(Visibility)`
  fill: #8257e5;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const VisibilityOffIconStyled = styled(VisibilityOff)`
  fill: #6042a6;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const PurpleTextStyled = styled(Typography)`
  color: #573c97;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

export const WhiteTextStyled = styled(Typography)`
  color: #e1e1e6;
  font-size: 14px;
  letter-spacing: -0.5px;
`;

export const EntrarStyled = styled(Button)`
  background-color: #8257e5;
  font-weight: 700;
  margin: 24px 0;
  &:hover {
    background-color: #a883ff;
  }
  &:disabled {
    background-color: #41356b;
    color: #ffffff59;
  }
`;

export const DividerStyled = styled(Divider)`
  &:before,
  &:after {
    border-top: thin solid #28272f;
    margin: 28px 0;
    height: 1px;
  }
`;

export const GitHubIconStyled = styled(GitHub)`
  fill: #7c62d4;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const GitHubStyled = styled(Button)`
  background-color: #29292e;
  box-shadow: none;
  font-weight: 700;
  &:hover {
    background-color: #7c62d4;
    box-shadow: none;
    svg {
      fill: #fff;
    }
  }
`;
