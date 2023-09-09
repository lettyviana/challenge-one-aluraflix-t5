import { Link } from "react-router-dom";
import { BotaoPadrao } from "../../components/BotaoPadrao";
import { Cabecalho } from "../../components/Cabecalho";
import { Rodape } from "../../components/Rodape";
import { Destaque } from "../../components/Destaque";
import { CarrosselInicio } from "../../components/CarrosselInicio";

export function Inicio() {
  return (
    <>
      <Cabecalho estilos="inicio">
        <Link to={'/novo-video'}> <BotaoPadrao estilos="novo-video">Novo vídeo</BotaoPadrao></Link>
      </Cabecalho>
      <Destaque/>
      <CarrosselInicio/>
      <Link to={'/novo-video'}> <BotaoPadrao estilos="novo-video-mobile">Novo vídeo</BotaoPadrao></Link>
      <Rodape estilos="inicio" />
    </>
  );
}
