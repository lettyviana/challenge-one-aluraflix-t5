import { Cabecalho } from "../../components/Cabecalho";
import { FormularioNovaCategoria } from "../../components/FormularioNovaCategoria";
import { Rodape } from "../../components/Rodape";
import { TabelaCategorias } from "../../components/Tabela";

export const NovaCategoria = () => {
  return (
    <>
      <Cabecalho />
      <FormularioNovaCategoria />
      <TabelaCategorias/>
      <Rodape />
    </>
  );
}
