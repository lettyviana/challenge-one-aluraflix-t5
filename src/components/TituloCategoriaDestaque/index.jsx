import styles from "./TituloCategoriaDestaque.module.css";
import PropTypes from "prop-types";

export const TituloCategoriaDestaque = ({
  nomeCategoria,
  tituloVideo,
  descricao,
  cor,
}) => {
  const categoriaStyle = {
    backgroundColor: cor,
  };

  return (
    <div className={styles.tituloCategoria}>
      <h2 style={categoriaStyle}>{nomeCategoria}</h2>
      <h3>{tituloVideo}</h3>
      <p>{descricao}</p>
    </div>
  );
};

TituloCategoriaDestaque.propTypes = {
  nomeCategoria: PropTypes.string,
  tituloVideo: PropTypes.string,
  descricao: PropTypes.string,
  cor: PropTypes.any,
};
