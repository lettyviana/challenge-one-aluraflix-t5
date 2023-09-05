import styles from "./Cabecalho.module.css";
import logo from "../../public/logo.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Cabecalho = ({ children, estilos }) => {
  return (
    <header className={`${styles.cabecalho} ${styles[estilos]}`}>
      <Link to={'/'}><img className={styles.logotipo} src={logo} /></Link>
      {children}
    </header>
  );
};

Cabecalho.propTypes = {
  estilos: PropTypes.any,
  children: PropTypes.any,
};
