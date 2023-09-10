export function adicionarCategoria(categorias, novaCategoria) {
    return [...categorias, novaCategoria];
  }
  
  export function excluirCategoria(categorias, id) {
    return categorias.filter((categoria) => categoria.id !== id);
  }