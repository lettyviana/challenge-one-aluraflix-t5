import { Cabecalho } from "../../components/Cabecalho";
import { FormularioNovoVideo } from "../../components/FormularioNovoVideo";
import { Rodape } from "../../components/Rodape";

export function NovoVideo() {
  return (
    <>
      <Cabecalho />
      <FormularioNovoVideo/>
      <Rodape />
    </>
  );
}
