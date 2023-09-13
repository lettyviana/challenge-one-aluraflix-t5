import { useNovoVideoContext } from "../../context/useNovoVideoContext";
import { Link } from "react-router-dom";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
import PropTypes from "prop-types";
import "./card-videos.css";

export const CardVideoInicio = ({
  id,
  titulo,
  linkDaCapaDoVideo,
  linkVideo,
  corCategoria,
}) => {
  const cardStyle = {
    borderColor: corCategoria,
  };
  const { excluirVideo } = useNovoVideoContext();

  const excluiVideo = (videoId) => {
    excluirVideo(videoId);
  };
  return (
    <div className="card-video-inicio">
      <div className="acoes-video-inicio">
        <Link to={`/editar-video/${id}`} className="botao-editar">
          <BsFillPencilFill />
        </Link>
        <RiDeleteBin2Fill
          className="botao-excluir"
          onClick={() => excluiVideo(id)}
        />
      </div>
      <Link to={linkVideo}>
        <img id={id} src={linkDaCapaDoVideo} alt={titulo} style={cardStyle} />
      </Link>
    </div>
  );
};

CardVideoInicio.propTypes = {
  id: PropTypes.any,
  titulo: PropTypes.string,
  linkDaCapaDoVideo: PropTypes.string,
  linkVideo: PropTypes.string,
  corCategoria: PropTypes.any,
};

export const CardVideos = ({
  id,
  titulo,
  linkDaCapaDoVideo,
  linkVideo,
  corCategoria,
}) => {
  const cardStyle = {
    borderColor: corCategoria,
  };

  return (
    <div className="card-videos keen-slider__slide">
      <div className="acoes-videos">
        <Link to={`/editar-video/${id}`} className="botao-editar">
          <BsFillPencilFill />
        </Link>
        <RiDeleteBin2Fill className="botao-excluir" />
      </div>
      <Link to={linkVideo}>
        <img id={id} src={linkDaCapaDoVideo} alt={titulo} style={cardStyle} />
      </Link>
    </div>
  );
};

CardVideos.propTypes = {
  id: PropTypes.any,
  titulo: PropTypes.string,
  linkDaCapaDoVideo: PropTypes.string,
  linkVideo: PropTypes.string,
  corCategoria: PropTypes.any,
};
