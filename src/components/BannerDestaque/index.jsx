import styles from "./BannerDestaque.module.css";
import dados from "../../data/video-data.json";
import { Link } from "react-router-dom";

export const BannerDestaque = () => {
  const ultimoVideo = dados.videos[dados.videos.length - 1];

  return (
    <div className={styles.bannerDestaque}>
      <Link to={ultimoVideo.link}>
        <img src={ultimoVideo.capa} alt={ultimoVideo.titulo} />
      </Link>
    </div>
  );
};