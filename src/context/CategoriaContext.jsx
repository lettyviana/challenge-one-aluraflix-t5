import { createContext, useContext, useState } from "react";
import { adicionarCategoria, excluirCategoria } from "../utils/categoriaUtils.jsx"; // Importe as funções
import PropTypes from "prop-types";

const CategoriaContext = createContext();

export const useCategoriaContext = () => {
  return useContext(CategoriaContext);
};

export const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const adicionarCategoriaAoEstado = (novaCategoria) => {
    setCategorias((categorias) => adicionarCategoria(categorias, novaCategoria));
  };

  const excluirCategoriaDoEstado = (id) => {
    setCategorias((categorias) => excluirCategoria(categorias, id));
  };

  return (
    <CategoriaContext.Provider
      value={{
        categorias,
        adicionarCategoria: adicionarCategoriaAoEstado,
        excluirCategoria: excluirCategoriaDoEstado,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};

CategoriaProvider.propTypes = {
    children: PropTypes.any,
  };
  