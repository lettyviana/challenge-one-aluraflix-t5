import styles from "./TituloCategoriaPadrao.module.css";
import PropTypes from "prop-types";

export const TituloCategoriaPadrao = ({ nomeCategoria, descricaoCategoriaInicio, cor }) => {
  const categoriaStyle = {
    backgroundColor: cor,
  };

  return (
    <div className={styles.tituloCategoria}>
      <h2 style={categoriaStyle}>{nomeCategoria}</h2>
      <p>{descricaoCategoriaInicio}</p>
    </div>
  );
};

TituloCategoriaPadrao.propTypes = {
  nomeCategoria: PropTypes.any,
  descricaoCategoriaInicio: PropTypes.string,
  cor: PropTypes.any,
};
