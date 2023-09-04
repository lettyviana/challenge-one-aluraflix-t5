import { BotaoPadrao } from "../../components/BotaoPadrao";
import { Cabecalho } from "../../components/Cabecalho";
import { Rodape } from "../../components/Rodape";

export function Inicio() {
  return (
    <>
      <Cabecalho estilos="inicio">
        <BotaoPadrao estilos="novo-video">Novo vídeo</BotaoPadrao>
      </Cabecalho>
      <Rodape estilos="inicio" />
    </>
  );
}
