import { CategoriaProvider } from "./context/CategoriaContext";
import { NovoVideoProvider } from "./context/NovoVideoContext";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { NovoVideo } from "./pages/NovoVideo";
import { NovaCategoria } from "./pages/NovaCategoria";
import { EditarCategoria } from "./pages/EditarCategoria";
import { EditarVideo } from "./pages/EditarVideo";
import "./styles/globals.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <CategoriaProvider>
        <NovoVideoProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/novo-video" element={<NovoVideo />} />
              <Route path="/nova-categoria" element={<NovaCategoria />} />
              <Route path="/editar-categoria/:id" element={<EditarCategoria />} />
              <Route path="/editar-video/:id" element={<EditarVideo />} />
            </Routes>
          </ThemeProvider>
        </NovoVideoProvider>
      </CategoriaProvider>
    </>
  );
}

export default App;
