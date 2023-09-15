import styles from "./Rodape.module.css";
import logo from "../../public/logo.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Rodape = ({estilos}) => {
    return(
        <footer className={`${styles.rodape} ${styles[estilos]}`}>
            <Link to={'/'}><img className={styles.logotipo} src={logo} /></Link>
            <p className={styles.descricaoRodape}>&copy; Desenvolvido por <span className={styles.destaque}><Link to={"https://www.linkedin.com/in/leticiaviana-trad-dev/"}>Letícia Viana</Link></span> | 2023</p>
        </footer>
    )
}

Rodape.propTypes = {
    estilos: PropTypes.any
  };