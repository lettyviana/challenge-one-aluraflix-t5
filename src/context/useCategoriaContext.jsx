import { useContext } from "react";
import { CategoriaContext } from "./CategoriaContext";


export const useCategoriaContext = () => {
  return useContext(CategoriaContext);
};
