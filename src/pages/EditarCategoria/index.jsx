import { Cabecalho } from "../../components/Cabecalho";
import { FormularioEditarCategoria } from "../../components/FormularioEditarCategoria";
import { Rodape } from "../../components/Rodape";
import { validaForm } from "../../utils/validacoes";

export const EditarCategoria = () => {
  return (
    <>
      <Cabecalho />
      <FormularioEditarCategoria aoEnviar={validaForm}/>
      <Rodape />
    </>
  );
};
