import styles from "./BotaoPadrao.module.css";
import PropTypes from "prop-types";

export function BotaoPadrao({ children, estilos, tipo }) {
  return (
    <button className={`${styles.botaoPadrao} ${styles[estilos]}`} type={tipo}>
      {children}
    </button>
  );
}

BotaoPadrao.propTypes = {
  children: PropTypes.any,
  estilos: PropTypes.any,
  tipo: PropTypes.any,
};