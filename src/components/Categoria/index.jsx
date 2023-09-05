import { CarrosselDestaque } from "../CarrosselDestaque";
import dados from "../../data/video-data.json";
import styles from "./Categoria.module.css";
import { CardVideos } from "../CardVideos";

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
          <div className={styles.containerInformacoesUltimoVideo}>
            <h1>Título categoria</h1>
            <p>Descrição</p>
            <CardVideos
              id={ultimoVideo.id}
              capa={ultimoVideo.capa}
              titulo={ultimoVideo.titulo}
              link={ultimoVideo.link}
              corCategoria={corCategoriaUltimoVideo}
            />
          </div>
          <CarrosselDestaque />
        </div>
      </section>
    </>
  );
};