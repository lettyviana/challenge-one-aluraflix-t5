import { Cabecalho } from "../../components/Cabecalho";
import { FormularioEditarVideo } from "../../components/FormularioEditarVideo";
import { Rodape } from "../../components/Rodape";
import { validaForm } from "../../utils/validacoes";

export const EditarVideo = () => {
    return (
      <>
        <Cabecalho />
        <FormularioEditarVideo aoEnviar={validaForm} />
        <Rodape />
      </>
    );
  };