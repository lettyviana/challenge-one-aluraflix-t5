import styles from "./Cabecalho.module.css";
import logo from "../../public/logo.svg";
import PropTypes from "prop-types";

export const Cabecalho = ({ children, estilos }) => {
  return (
    <header className={`${styles.cabecalho} ${styles[estilos]}`}>
      <img className={styles.logotipo} src={logo} />
      {children}
    </header>
  );
};

Cabecalho.propTypes = {
  estilos: PropTypes.any,
  children: PropTypes.any,
};
