import { useNovoVideoContext } from "../../context/useNovoVideoContext";
import { useCategoriaContext } from "../../context/useCategoriaContext";
import { Link } from "react-router-dom";
import { CarrosselDestaque } from "../CarrosselDestaque";
import { BotaoPadrao } from "../BotaoPadrao";
import { CardVideoInicio } from "../CardVideos";
import { TituloCategoriaDestaque } from "../TituloCategoriaDestaque";
import styles from "./ConteudoDestaque.module.css";

export const ConteudoDestaque = () => {
  const { videos } = useNovoVideoContext();
  const { categorias } = useCategoriaContext();

  if (videos.length === 0) {
    return null;
  }

  const ultimoVideo = videos[videos.length - 1];

  const categoriaUltimoVideo = categorias.find(
    (cat) => cat.nome === ultimoVideo.categoria
  );

  const nomeCategoria = categoriaUltimoVideo ? categoriaUltimoVideo.nome : "";
  const descricaoCategoriaInicio = categoriaUltimoVideo
    ? categoriaUltimoVideo.descricaoCategoriaInicio
    : "";
  const corCategoria = categoriaUltimoVideo ? categoriaUltimoVideo.cor : "";

  return (
    <>
      <section className={styles.containerCategoriaDestaque}>
        <div>
          <Link to={ultimoVideo ? ultimoVideo.linkVideo : "/"}>
            <BotaoPadrao tipo="button" estilos="video-inicio-mobile">
              Assistir
            </BotaoPadrao>
          </Link>
          <div className={styles.containerUltimoVideo}>
            <CardVideoInicio
              id={ultimoVideo ? ultimoVideo.id : null}
              linkDaCapaDoVideo={
                ultimoVideo ? ultimoVideo.linkDaCapaDoVideo : null
              }
              titulo={ultimoVideo ? ultimoVideo.titulo : ""}
              link={ultimoVideo ? ultimoVideo.linkVideo : ""}
              corCategoria={corCategoria}
            />
            <TituloCategoriaDestaque
              nomeCategoria={nomeCategoria}
              tituloVideo={ultimoVideo ? ultimoVideo.titulo : ""}
              descricaoCategoriaInicio={descricaoCategoriaInicio}
              cor={corCategoria}
            />
          </div>
          <CarrosselDestaque />
        </div>
      </section>
    </>
  );
};
