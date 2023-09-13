import { useCategoriaContext } from "../../context/useCategoriaContext";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import styles from "./TabelaCategorias.module.css";

export const TabelaCategorias = () => {
  const { categorias, excluirCategoria } = useCategoriaContext();

  const aoExcluirCategoria = (categoriaId) => {
    excluirCategoria(categoriaId);
  }

  return (
    <>
      <section className={styles.containerTabela}>
        <Container maxWidth="xl">
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {categorias.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.nome}</td>
                  <td>{categoria.descricaoCategoriaTabela}</td>
                  <td>
                    <Link to={"/editar-categoria"} className={styles.botaoEditar}>
                      Editar
                    </Link>
                    <button type="button" className={styles.botaoExcluir} onClick={() => aoExcluirCategoria(categoria.id)}>
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Container>
      </section>
    </>
  );
};