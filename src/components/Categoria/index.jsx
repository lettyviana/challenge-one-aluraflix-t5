import { CarrosselDestaque } from "../Carrossel";
import { BotaoPadrao } from "../BotaoPadrao";
import dados from "../../data/video-data.json";
import styles from "./Categoria.module.css";
import { CardVideoInicio } from "../CardVideos";
import { TituloCategoria } from "../TituloCategoria";
import { Link } from "react-router-dom";

export const CategoriaPadrao = () => {
  return (
    <>
      <section className={styles.categoriaPadraoContainer}>
        {/* Renderizar componente Carrossel da categoria padrão */}
      </section>
    </>
  );
};

export const CategoriaDestaque = () => {
  const ultimoVideo = dados.videos[dados.videos.length - 1];
  const categoriaDoUltimoVideo = ultimoVideo.categoria;
  const categoriaUltimoVideo = dados.categorias.find(
    (cat) => cat.nome === categoriaDoUltimoVideo
  );
  const corCategoriaUltimoVideo = categoriaUltimoVideo
    ? categoriaUltimoVideo.cor
    : "";
  return (
    <>
      <section className={styles.containerCategoriaDestaque}>
        <div>
          <Link to={ultimoVideo.link}>
            <BotaoPadrao tipo="button" estilos="video-inicio-mobile">
              Assistir
            </BotaoPadrao>
          </Link>
          <div className={styles.containerUltimoVideo}>
            <CardVideoInicio
              id={ultimoVideo.id}
              capa={ultimoVideo.capa}
              titulo={ultimoVideo.titulo}
              link={ultimoVideo.link}
              corCategoria={corCategoriaUltimoVideo}
            />
            <TituloCategoria
              nomeCategoria={categoriaDoUltimoVideo}
              tituloVideo={ultimoVideo.titulo}
              descricao={categoriaUltimoVideo.descricaoCategoria}
              cor={corCategoriaUltimoVideo}
            />
          </div>
          <CarrosselDestaque />
        </div>
      </section>
    </>
  );
};
