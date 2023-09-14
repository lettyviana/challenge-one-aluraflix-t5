import { useKeenSlider } from "keen-slider/react";
import { useNovoVideoContext } from "../../context/useNovoVideoContext";
import { useCategoriaContext } from "../../context/useCategoriaContext";
import { TituloCategoriaPadrao } from "../TituloCategoriaPadrao";
import { CardVideos } from "../CardVideos";
import "keen-slider/keen-slider.min.css";
import "./carrossel-inicio.css";

export const CarrosselInicio = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 590px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 1920px)": {
        slides: { perView: 4, spacing: 15 },
      },
    },
    slides: { perView: 1, spacing: 5 },
    mode: "snap",
  });

  const { videos } = useNovoVideoContext();
  const { categorias } = useCategoriaContext();

  const ultimoVideoAdicionado =
    videos.length > 0 ? videos[videos.length - 1] : null;
  
    const categoriasComVideos = categorias.filter((categoria) => {
    return (
      categoria.nome !== ultimoVideoAdicionado.categoria &&
      videos.some((video) => video.categoria === categoria.nome)
    );
  });

  return (
    <section>
      <div className="container-inicio">
        {categoriasComVideos.map((categoria) => (
          <div className="container-informacoes-inicio" key={categoria.id}>
            <TituloCategoriaPadrao
              nomeCategoria={categoria.nome}
              descricaoCategoriaInicio={categoria.descricaoCategoriaInicio}
              cor={categoria.cor}
            />
            <div ref={sliderRef} className="carrossel-inicio keen-slider">
              {videos
                .filter((video) => video.categoria === categoria.nome)
                .map((video) => (
                  <CardVideos
                    key={video.id}
                    id={video.id}
                    titulo={video.titulo}
                    linkDaCapaDoVideo={video.linkDaCapaDoVideo}
                    linkVideo={video.linkVideo}
                    corCategoria={categoria.cor}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
