import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import PropTypes from "prop-types";
import "./card-videos.css";

export const CardVideoInicio = ({ id, titulo, capa, link, corCategoria }) => {
  const cardStyle = {
    borderColor: corCategoria,
  };
  return (
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
      <div className="acoes">
        <Link to={"/editar-video"} className="botao-editar">
          <BsFillPencilFill />
        </Link>
        <RiDeleteBin2Fill className="botao-excluir" />
      </div>
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
