import { Link } from "react-router-dom";
import { BotaoPadrao } from "../../components/BotaoPadrao";
import { Cabecalho } from "../../components/Cabecalho";
import { Rodape } from "../../components/Rodape";
import cachorroCurioso from "../../public/cachorro-olhando.png";
import styles from "./PaginaNaoEncontrada.module.css";

export const PaginaNaoEncontrada = () => {
  return (
    <>
      <Cabecalho />
      <div className={styles.conteudoPagina}>
        <h2>Opa, parece que temos um 404!!!</h2>
        <div>
          <img src={cachorroCurioso} alt="Cachorro observando."/>
        </div>
        <h3>A página que você tentou acessar não existe. 🤔</h3>
        <p>Sugiro voltar para a página inicial.</p>
        <div>
          <Link to={"/"}>
            <BotaoPadrao>Voltar</BotaoPadrao>
          </Link>
        </div>
      </div>
      <Rodape />
    </>
  );
};
