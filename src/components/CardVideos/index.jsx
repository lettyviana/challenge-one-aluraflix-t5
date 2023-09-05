import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./card-videos.css";

export const CardVideoInicio = ({ id, titulo, capa, link, corCategoria }) => {
  const cardStyle = {
    borderColor: corCategoria,
  };
  return(
    <div className="card-video-inicio">
    <Link to={link}>
      <img id={id} src={capa} alt={titulo} style={cardStyle} />
    </Link>
  </div>
  );
};

CardVideoInicio.propTypes = {
  id: PropTypes.number,
  titulo: PropTypes.string,
  capa: PropTypes.string,
  link: PropTypes.string,
  corCategoria: PropTypes.any,
};

export const CardVideos = ({ id, titulo, capa, link, corCategoria }) => {
  const cardStyle = {
    borderColor: corCategoria,
  };

  return (
    <div className="card-videos keen-slider__slide">
      <Link to={link}>
        <img id={id} src={capa} alt={titulo} style={cardStyle} />
      </Link>
    </div>
  );
};

CardVideos.propTypes = {
  id: PropTypes.number,
  titulo: PropTypes.string,
  capa: PropTypes.string,
  link: PropTypes.string,
  corCategoria: PropTypes.any,
};
