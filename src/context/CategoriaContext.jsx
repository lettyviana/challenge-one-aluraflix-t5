import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CategoriaContext = createContext();

export const CategoriaProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  const salvarCategoriaNoLocalStorage = (categorias) => {
    localStorage.setItem("categorias", JSON.stringify(categorias));
  };

  const carregarCategoriasDoLocalStorage = () => {
    const categoriasSalvas =
      JSON.parse(localStorage.getItem("categorias")) || [];
    setCategorias(categoriasSalvas);
  };

  const excluirCategoria = (categoriaId) => {
    const categoriasAtualizadas = categorias.filter(
      (categoria) => categoria.id !== categoriaId
    );
    setCategorias(categoriasAtualizadas);
    localStorage.setItem("categorias", JSON.stringify(categoriasAtualizadas));
  };

  useEffect(() => {
    carregarCategoriasDoLocalStorage();
  }, []);

  return (
    <CategoriaContext.Provider
      value={{
        categorias,
        setCategorias,
        salvarCategoriaNoLocalStorage,
        excluirCategoria,
      }}
    >
      {children}
    </CategoriaContext.Provider>
  );
};

CategoriaProvider.propTypes = {
  children: PropTypes.any,
};
