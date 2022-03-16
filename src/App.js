import "./App.css";
import Form from "./components/Form";
import LogoTitle from "./components/LogoTitle";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        <LogoTitle />
        <Form />
      </Grid>
    </>
  );
}

export default App;
