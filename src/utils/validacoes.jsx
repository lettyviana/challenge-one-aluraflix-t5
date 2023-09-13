export const validaTitulo = (titulo) => {
  if (!titulo) {
    return "O título é obrigatório.";
  }
  return null;
};

export const validarLinkYoutube = (url) => {
  const youtubeRegex = /^https:\/\/www\.youtube\.com\/embed\/[A-Za-z0-9_-]+$/;
  return youtubeRegex.test(url);
};

export const validaLinkVideo = (urlVideoInserida) => {
  // Verificar se o link de vídeo é um link de incorporação do YouTube
  const oLinkEstaValido = validarLinkYoutube(urlVideoInserida);

  if (!oLinkEstaValido) {
    return `Insira um link válido. Clique em Compartilhar, escolha a opção incorporar e pegue o trecho de código em src="[link]"`;
  }
  return null;
};

export const validaNomeCategoria = (nome) => {
  if (!nome && nome == "") {
    return "Digite um nome para a categoria.";
  }
  return null;
};

export const validaDescricaoCategoriaTabela = (descricaoCategoriaTabela) => {
  if (!descricaoCategoriaTabela) {
    return "A descrição da categoria para a tabela é obrigatória.";
  } else if (descricaoCategoriaTabela.length < 3 || descricaoCategoriaTabela.length > 100) {
    return "A descrição deve ter no mínimo 3 caracteres e no máximo 100 caracteres.";
  }
  return null;
};

export const validaDescricaoCategoriaInicio = (descricaoCategoriaInicio) => {
  if(!descricaoCategoriaInicio) {
    return "Escreva uma breve descrição para a categoria.";
  }else if (descricaoCategoriaInicio.length <3 || descricaoCategoriaInicio.length > 50) {
    return "A descrição deve ter no mínimo 3 caracteres e no máximo 50 caracteres";
  }
}

export const validaCategoriaEscolhida = (categoria) => {
  if(!categoria) {
    return "Escolha uma categoria da lista.";
  }
  return null;
}

export const validaForm = (dados) => {
  console.log(dados);
};
