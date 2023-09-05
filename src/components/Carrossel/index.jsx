import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { CardVideos } from "../CardVideos";
import dados from "../../data/video-data.json";

export const CarrosselDestaque = () => {
    const ultimoVideo = dados.videos[dados.videos.length -1];
    const categoriaDoUltimoVideo = ultimoVideo.categoria;
    const videosCategoriaUltimoVideo = dados.videos.filter((video) => video.categoria === categoriaDoUltimoVideo);
    const videosCarrossel = videosCategoriaUltimoVideo.filter(video => video.id !== ultimoVideo.id);
  
    const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 678px)": {
        slides: { perView: 2, spacing: 22 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3, spacing: 22 },
      },
    },
    slides: { perView: 1, spacing: 8 },
    mode: "free-snap",
  });
  
  return (
    <div ref={sliderRef} className="keen-slider">
      {videosCarrossel.map((video) => (
        <CardVideos 
        id={video.id}
        capa={video.capa}
        categoria={video.categoria}
        titulo={video.titulo}
        link={video.link}
        corCategoria={video.cor}
        key={video.id}/>
      ))}
    </div>
  );
};