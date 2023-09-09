export const validaTitulo = (titulo) => {
    if(!titulo) {
        return "O título é obrigatório.";
    }
    return null;
}

export const validaDescricao = (descricao) => {
    if(!descricao) {
        return "A descrição é obrigatória.";
    }
    return null;
}

export const validaLink = (e) => {
    function validarLinkYoutube(url) {
        let youtubeRegex = /^(https?:\/\/)?(www\.)?youtube\.com\/embed\?v=([a-zA-Z0-9_-]{11})/;
        return youtubeRegex.test(url);
    }
    
    let urlInserida = e.target.value;

    if(!validarLinkYoutube(urlInserida)) {
        return "Insira um link válido.";
    }
    return null;
}

export const validaNomeCategoria = (nome) => {
    if(!nome) {
        return "Digite um nome para a categoria.";
    }
    return null;
}

export const validaDescricaoCategoria = (descricaoCategoria) => {
    if(!descricaoCategoria) {
        return "A descrição da categoria é obrigatória.";
    }
    return null;
}

export const validaForm = (dados) => {
    console.log(dados);
}