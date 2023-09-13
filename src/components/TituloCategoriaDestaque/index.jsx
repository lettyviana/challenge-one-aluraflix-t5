import styles from "./TituloCategoriaDestaque.module.css";
import PropTypes from "prop-types";

export const TituloCategoriaDestaque = ({
  nomeCategoria,
  tituloVideo,
  descricaoCategoriaInicio,
  cor,
}) => {
  const categoriaStyle = {
    backgroundColor: cor,
  };

  return (
    <div className={styles.tituloCategoria}>
      <h2 style={categoriaStyle}>{nomeCategoria}</h2>
      <h3>{tituloVideo}</h3>
      <p>{descricaoCategoriaInicio}</p>
    </div>
  );
};

TituloCategoriaDestaque.propTypes = {
  nomeCategoria: PropTypes.string,
  tituloVideo: PropTypes.string,
  descricaoCategoriaInicio: PropTypes.string,
  cor: PropTypes.any,
};
