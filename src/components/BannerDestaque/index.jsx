import styles from "./BannerDestaque.module.css";
import { Link } from "react-router-dom";
import { useNovoVideoContext } from "../../context/useNovoVideoContext";

export const BannerDestaque = () => {
  const { videos } = useNovoVideoContext();
  const ultimoVideo = videos.length > 0 ? videos[videos.length - 1] : null;
  if (!ultimoVideo) {
    return null;
  }

  return (
    <div className={styles.bannerDestaque}>
      <Link to={ultimoVideo.linkVideo}>
        <img src={ultimoVideo.linkDaCapaDoVideo} alt={ultimoVideo.titulo} />
      </Link>
    </div>
  );
};