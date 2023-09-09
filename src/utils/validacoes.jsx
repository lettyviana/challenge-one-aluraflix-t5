export const validaTitulo = (titulo) => {
  if (!titulo) {
    return "O título é obrigatório.";
  }
  return null;
};

export const validaDescricao = (descricao) => {
  if (!descricao) {
    return "A descrição é obrigatória.";
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
    return "Insira um link de incorporação do YouTube válido.";
  }
  return null;
};

export const validarLinkCapa = (url) => {
  const regex = /^https:\/\/i\.yimg\.com\/vi\/[A-Za-z0-9_-]+$/;
  return regex.test(url);
};

export const validaLinkCapa = (urlCapaInserida) => {
  const oLinkEstaValido = validarLinkCapa(urlCapaInserida);

  if (!oLinkEstaValido) {
    return "Insira um link de capa válido.";
  }
  return null;
};

export const validaNomeCategoria = (nome) => {
  if (!nome && nome == "") {
    return "Digite um nome para a categoria.";
  }
  return null;
};

export const validaDescricaoCategoria = (descricaoCategoria) => {
  if (!descricaoCategoria) {
    return "A descrição da categoria é obrigatória.";
  } else if (descricaoCategoria.length < 3 || descricaoCategoria.length > 70) {
    return "A descrição deve ter no mínimo 3 caracteres e no máximo 70 caracteres.";
  }
  return null;
};

export const validaForm = (dados) => {
  console.log(dados);
};
