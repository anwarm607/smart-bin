import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes";
import "./App.css";
import { Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <CssBaseline />
        <AppRoutes />
      </Container>
    </div>
  );
}

export default App;
