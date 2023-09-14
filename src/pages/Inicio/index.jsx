import { Link } from "react-router-dom";
import { BotaoPadrao } from "../../components/BotaoPadrao";
import { Cabecalho } from "../../components/Cabecalho";
import { Rodape } from "../../components/Rodape";
import { Destaque } from "../../components/Destaque";
import { CarrosselInicio } from "../../components/CarrosselInicio";
import { useNovoVideoContext } from "../../context/useNovoVideoContext";
import { useCategoriaContext } from "../../context/useCategoriaContext";
import { PaginaInicialZerada } from "../../components/PaginaInicial";

export function Inicio() {
  const { videos } = useNovoVideoContext();
  const { categorias } = useCategoriaContext();
  return (
    <>
      <Cabecalho estilos="inicio">
        <Link to={"/novo-video"}>
          {" "}
          <BotaoPadrao estilos="novo-video">Novo vídeo</BotaoPadrao>
        </Link>
      </Cabecalho>
      {videos.length === 0 && categorias.length === 0 ? (
        <PaginaInicialZerada />
      ) : (
        <>
          <Destaque />
          <CarrosselInicio />
        </>
      )}

      <Link to={"/novo-video"}>
        {" "}
        <BotaoPadrao estilos="novo-video-mobile">Novo vídeo</BotaoPadrao>
      </Link>
      <Rodape estilos="inicio" />
    </>
  );
}
