// import React from "react"
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import "./styles/globals.css";
import { Inicio } from "./pages/Inicio";
import { NovoVideo } from "./pages/NovoVideo";
import { NovaCategoria } from "./pages/NovaCategoria";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/novo-video" element={<NovoVideo />} />
          <Route path="/nova-categoria" element={<NovaCategoria />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;

