import { Cabecalho } from "../../components/Cabecalho";
import { FormularioNovoVideo } from "../../components/FormularioNovoVideo";
import { Rodape } from "../../components/Rodape";
import { validaForm } from "../../utils/validacoes";

export function NovoVideo() {
  return (
    <>
      <Cabecalho />
      <FormularioNovoVideo aoEnviar={validaForm} />
      <Rodape />
    </>
  );
}
