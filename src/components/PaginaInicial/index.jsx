import { Link } from "react-router-dom";
import styles from "./PaginaInicial.module.css";

export const PaginaInicial = () => {
  return (
    <>
      <div className={styles.paginaInicial}>
        <h2>Boas-vindas ao Aluraflix!</h2>
        <p>Ainda não há vídeos ou categorias cadastrados!</p>
        <p>
          Para cadastrar um vídeo, primeiro cadastre uma{" "}
          <Link to={"/nova-categoria"}>categoria</Link>.
        </p>
      </div>
    </>
  );
};
