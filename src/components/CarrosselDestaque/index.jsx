import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./carrossel-destaque.css";
import { CardVideos } from "../CardVideos";
import { useNovoVideoContext } from "../../context/useNovoVideoContext";
import { useCategoriaContext } from "../../context/useCategoriaContext";

export const CarrosselDestaque = () => {
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

  const ultimoVideo = videos.length > 0 ? videos[videos.length - 1] : null;
  const categoriaDoUltimoVideo = ultimoVideo ? ultimoVideo.categoria : null;
  const videosCategoriaUltimoVideo = videos.filter(
    (video) => video.categoria === categoriaDoUltimoVideo
  );
  const videosCarrossel = videosCategoriaUltimoVideo.filter(
    (video) => video.id !== ultimoVideo.id
  );
  const categoriaUltimoVideo = categorias.find(
    (cat) => cat.nome === categoriaDoUltimoVideo
  );
  const corCategoriaUltimoVideo = categoriaUltimoVideo
    ? categoriaUltimoVideo.cor
    : "";

  return (
    <div ref={sliderRef} className="carrossel keen-slider">
      {videosCarrossel.map((video) => (
        <CardVideos
          id={video.id}
          linkDaCapaDoVideo={video.linkDaCapaDoVideo}
          titulo={video.titulo}
          linkVideo={video.linkVideo}
          corCategoria={corCategoriaUltimoVideo}
          key={video.id}
        />
      ))}
    </div>
  );
};
