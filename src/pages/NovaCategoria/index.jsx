import { Cabecalho } from "../../components/Cabecalho";
import { FormularioNovaCategoria } from "../../components/FormularioNovaCategoria";
import { Rodape } from "../../components/Rodape";
import { TabelaCategorias } from "../../components/Tabela";
import { validaForm } from "../../utils/validacoes";

export const NovaCategoria = () => {
  return (
    <>
      <Cabecalho />
      <FormularioNovaCategoria aoEnviar={validaForm} />
      <TabelaCategorias/>
      <Rodape />
    </>
  );
}
