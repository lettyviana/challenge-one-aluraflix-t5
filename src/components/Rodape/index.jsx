import styles from "./Rodape.module.css";
import logo from "../../public/logo.svg";
import PropTypes from "prop-types";

export const Rodape = ({estilos}) => {
    return(
        <footer className={`${styles.rodape} ${styles[estilos]}`}>
            <img className={styles.logotipo} src={logo} />
            <p className={styles.descricaoRodape}>Site feito na <span className={styles.negrito}>#ImersãoReact</span> da <span className={styles.destaque}>Alura</span></p>
        </footer>
    )
}

Rodape.propTypes = {
    estilos: PropTypes.any
  };