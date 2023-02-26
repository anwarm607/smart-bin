import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppRoutes from "./routes";
import "./App.css";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Box maxWidth="sm" margin="0 auto" sx={{ backgroundColor: '#fff' }}>
        <CssBaseline />
        <AppRoutes />
      </Box>
    </div>
  );
}

export default App;
