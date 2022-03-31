import "./App.css";
import Form from "./components/Form";
import LogoTitle from "./components/LogoTitle";
import { Grid } from "@mui/material";

function App() {
  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{
          height: "100vh",
          marginTop: 0,
          padding: "48px",
          overflow: "auto",
        }}
      >
        <LogoTitle />
        <Form />
      </Grid>
    </>
  );
}

export default App;
