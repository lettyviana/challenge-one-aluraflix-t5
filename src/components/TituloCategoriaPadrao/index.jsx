import styles from "./TituloCategoriaPadrao.module.css";
import PropTypes from "prop-types";

export const TituloCategoriaPadrao = ({ nomeCategoria, descricao, cor }) => {
  const categoriaStyle = {
    backgroundColor: cor,
  };

  return (
    <div className={styles.tituloCategoria}>
      <h2 style={categoriaStyle}>{nomeCategoria}</h2>
      <p>{descricao}</p>
    </div>
  );
};

TituloCategoriaPadrao.propTypes = {
  nomeCategoria: PropTypes.any,
  descricao: PropTypes.string,
  cor: PropTypes.any,
};
