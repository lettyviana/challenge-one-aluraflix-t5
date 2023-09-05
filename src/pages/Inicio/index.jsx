import { Link } from "react-router-dom";
import { BotaoPadrao } from "../../components/BotaoPadrao";
import { Cabecalho } from "../../components/Cabecalho";
import { Rodape } from "../../components/Rodape";
import { Destaque } from "../../components/Destaque";

export function Inicio() {
  return (
    <>
      <Cabecalho estilos="inicio">
        <Link to={'/novo-video'}> <BotaoPadrao estilos="novo-video">Novo vídeo</BotaoPadrao></Link>
      </Cabecalho>
      <Destaque/>
      <Rodape estilos="inicio" />
    </>
  );
}
