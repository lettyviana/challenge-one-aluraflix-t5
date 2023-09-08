import styles from "./TabelaCategorias.module.css";
import dadosDasCategorias from "../../data/video-data.json";
import { Link } from "react-router-dom";

export const TabelaCategorias = () => {
  return (
    <>
      <section className={styles.containerTabela}>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {dadosDasCategorias.categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.nome}</td>
                <td>{categoria.descricaoTabela}</td>
                <td>
                  <Link to={"/"} className={styles.botaoEditar}>Editar</Link>
                  <button type="button" className={styles.botaoExcluir}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};