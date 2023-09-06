import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carrossel-inicio.css";
import { TituloCategoriaPadrao } from "../TituloCategoriaPadrao";
import { CardVideos } from "../CardVideos";
import dados from "../../data/video-data.json";

export const CarrosselInicio = () => {
  const ultimoVideoAdicionado = dados.videos[dados.videos.length - 1];
  const categoriasComVideos = dados.categorias.filter((categoria) => {
    return (
      categoria.nome !== ultimoVideoAdicionado.categoria &&
      dados.videos.some((video) => video.categoria === categoria.nome)
    );
  });

  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 590px)": {
        slides: { perView: 2 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3 },
      },
      "(min-width: 1920px)": {
        slides: { perView: 4 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <section>
      <div className="container-inicio">
        {categoriasComVideos.map((categoria) => (
          <div className="container-informacoes-inicio" key={categoria.id}>
            <TituloCategoriaPadrao
              nomeCategoria={categoria.nome}
              descricao={categoria.descricaoCategoria}
              cor={categoria.cor}
            />
            <div ref={sliderRef} className="carrossel-inicio keen-slider">
              {dados.videos
                .filter((video) => video.categoria === categoria.nome)
                .map((video) => (
                  <CardVideos
                    key={video.id}
                    id={video.id}
                    titulo={video.titulo}
                    capa={video.capa}
                    link={video.link}
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
