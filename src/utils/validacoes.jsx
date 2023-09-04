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