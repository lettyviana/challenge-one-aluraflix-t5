import { useNovoVideoContext } from "../../context/useNovoVideoContext";
import { useCategoriaContext } from "../../context/useCategoriaContext";
import { Link } from "react-router-dom";
import { Cabecalho } from "../../components/Cabecalho";
import { BotaoPadrao } from "../../components/BotaoPadrao";
import { PaginaInicialZerada } from "../../components/PaginaInicial";
import { Destaque } from "../../components/Destaque";
import { CarrosselInicio } from "../../components/CarrosselInicio";
import { Rodape } from "../../components/Rodape";

export function Inicio() {
  const { videos } = useNovoVideoContext();
  const { categorias } = useCategoriaContext();
  return (
    <>
      <Cabecalho estilos="inicio">
        {categorias.length !== 0 ? (
          <Link to={"/novo-video"}>
            {" "}
            <BotaoPadrao estilos="novo-video">Novo vídeo</BotaoPadrao>
          </Link>
        ) : (
          <Link to={"/nova-categoria"}>
            {" "}
            <BotaoPadrao estilos="nova-categoria">Nova categoria</BotaoPadrao>
          </Link>
        )}
      </Cabecalho>
      {videos.length === 0 || categorias.length === 0 ? (
        <PaginaInicialZerada />
      ) : (
        <>
          <Destaque />
          <CarrosselInicio />
        </>
      )}

      {categorias.length !== 0 ? (
        <Link to={"/novo-video"}>
          {" "}
          <BotaoPadrao estilos="novo-video-mobile">Novo vídeo</BotaoPadrao>
        </Link>
      ) : (
        <Link to={"/nova-categoria"}>
          {" "}
          <BotaoPadrao estilos="nova-categoria-mobile">
            Nova categoria
          </BotaoPadrao>
        </Link>
      )}
      <Rodape estilos="inicio" />
    </>
  );
}
