import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import dadosDasCategorias from "../../data/video-data.json";
import styles from "./TabelaCategorias.module.css";
import { useCategoriaContext } from "../../context/CategoriaContext";


export const TabelaCategorias = () => {
  const { categorias, excluirCategoria } = useCategoriaContext();
  
  useEffect(() => {
    
  }, []);

  const todasAsCategorias = [...dadosDasCategorias.categorias, ...categorias]
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
              {todasAsCategorias.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.nome}</td>
                  <td>{categoria.descricaoTabela}</td>
                  <td>
                    <Link to={"/editar-categoria"} className={styles.botaoEditar}>
                      Editar
                    </Link>
                    <button type="button" className={styles.botaoExcluir} onClick={() => excluirCategoria(categoria.id)}>
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
