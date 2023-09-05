import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carrossel.css";
import { CardVideos } from "../CardVideos";
import dados from "../../data/video-data.json";

export const CarrosselDestaque = () => {
  const ultimoVideo = dados.videos[dados.videos.length - 1];
  const categoriaDoUltimoVideo = ultimoVideo.categoria;
  const videosCategoriaUltimoVideo = dados.videos.filter(
    (video) => video.categoria === categoriaDoUltimoVideo
  );
  const videosCarrossel = videosCategoriaUltimoVideo.filter(
    (video) => video.id !== ultimoVideo.id
  );
  const categoriaUltimoVideo = dados.categorias.find(
    (cat) => cat.nome === categoriaDoUltimoVideo
  );
  const corCategoriaUltimoVideo = categoriaUltimoVideo
    ? categoriaUltimoVideo.cor
    : "";

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
    <div ref={sliderRef} className="carrossel keen-slider">
      {videosCarrossel.map((video) => (
        <CardVideos
          id={video.id}
          capa={video.capa}
          titulo={video.titulo}
          link={video.link}
          corCategoria={corCategoriaUltimoVideo}
          key={video.id}
        />
      ))}
    </div>
  );
};