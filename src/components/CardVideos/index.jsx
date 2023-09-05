import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const CardVideos = ({ id, titulo, capa, link, corCategoria }) => {
  const cardStyle = {
    borderColor: corCategoria,
  };

  return (
    <div className="card-videos keen-slider__slide">
      <Link to={link}>
        <img
          id={id}
          src={capa}
          alt={titulo}
          style={cardStyle}
          className="capa-videos"
        />
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