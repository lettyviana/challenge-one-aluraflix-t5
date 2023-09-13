import { useContext } from "react";
import { NovoVideoContext } from "./NovoVideoContext";

export const useNovoVideoContext = () => {
  return useContext(NovoVideoContext);
};
