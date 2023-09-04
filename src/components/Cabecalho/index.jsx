import styles from "./Cabecalho.module.css";
import logo from "../../public/logo.svg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
