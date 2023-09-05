import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carrossel-inicio.css";
import { CardVideos } from "../CardVideos";
import dados from "../../data/video-data.json";

export const CarrosselInicio = () => {
    // arrumar tudo para finalizar carrossel das demais categorias
  
  const ultimoVideo = dados.videos[dados.videos.length - 1];
    const categoriaDoUltimoVideo = ultimoVideo.categoria;
    const videos = dados.videos.filter(
      (video) => video.categoria !== categoriaDoUltimoVideo
    );
    const categoriasDosVideos = videos.map((video) => video.categoria);
    const nomeCategoria = categoriasDosVideos.find(
      (cat) => cat.nome === categoriasDosVideos
    );
    const corCategoria = nomeCategoria
      ? nomeCategoria.cor
      : "";

      console.log(nomeCategoria)
  
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
      <section className="container-inicio">
        <div ref={sliderRef} className="carrossel keen-slider">
        {videos.map((video) => (
          <CardVideos
            id={video.id}
            capa={video.capa}
            titulo={video.titulo}
            link={video.link}
            corCategoria={corCategoria}
            key={video.id}
          />
        ))}
      </div>
      </section>
    );
  };