import { useState } from "react";
import { useCategoriaContext } from "../../context/useCategoriaContext";
import { Container, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import {
  validaDescricaoCategoriaInicio,
  validaDescricaoCategoriaTabela,
  validaNomeCategoria,
} from "../../utils/validacoes";
import styles from "./formularioNovaCategoria.module.css";

export const FormularioNovaCategoria = () => {
  const { categorias, setCategorias } = useCategoriaContext();
  const [valorDigitado, setValorDigitado] = useState({
    nome: "",
    descricaoCategoriaTabela: "",
    descricaoCategoriaInicio: "",
  });
  const [cor, setCor] = useState("#FFFFFF");
  const [erroValorDigitado, setErroValorDigitado] = useState({
    nome: "",
    descricaoCategoriaTabela: "",
    descricaoCategoriaInicio: "",
  });

  const aoInserirValorDoCampo = (e) => {
    const { name, value } = e.target;
    setValorDigitado({
      ...valorDigitado,
      [name]: value,
    });

    let erroNome =
      name === "nome" ? validaNomeCategoria(value) : erroValorDigitado.nome;
    let erroDescricaoCategoriaTabela =
      name === "descricaoCategoriaTabela"
        ? validaDescricaoCategoriaTabela(value)
        : erroValorDigitado.descricaoCategoriaTabela;
    let erroDescricaoCategoriaInicio =
      name == "descricaoCategoriaInicio"
        ? validaDescricaoCategoriaInicio(value)
        : erroValorDigitado.descricaoCategoriaInicio;

    setErroValorDigitado({
      nome: erroNome,
      descricaoCategoriaTabela: erroDescricaoCategoriaTabela,
      descricaoCategoriaInicio: erroDescricaoCategoriaInicio,
    });
  };

  const aoEscolherACor = (e) => {
    const novaCor = e.target.value;
    setCor(novaCor);
  };

  const adicionaNovaCategoria = ({ valorDigitado, cor }) => {
    const novaCategoriaCriada = {
      id: Date.now(),
      nome: valorDigitado.nome,
      descricaoCategoriaTabela: valorDigitado.descricaoCategoriaTabela,
      descricaoCategoriaInicio: valorDigitado.descricaoCategoriaInicio,
      cor: cor,
    };

    const categoriasAtualizadas = [...categorias, novaCategoriaCriada];
    setCategorias(categoriasAtualizadas);

    localStorage.setItem("categorias", JSON.stringify(categoriasAtualizadas));
  };

  const enviaFormulario = (e) => {
    e.preventDefault();

    const erros = {
      nome: validaNomeCategoria(valorDigitado.nome),
      descricaoCategoriaTabela: validaDescricaoCategoriaTabela(
        valorDigitado.descricaoCategoriaTabela
      ),
      descricaoCategoriaInicio: validaDescricaoCategoriaInicio(
        valorDigitado.descricaoCategoriaInicio
      ),
    };

    setErroValorDigitado(erros);

    if (Object.values(erros).every((erro) => !erro)) {
      adicionaNovaCategoria({ valorDigitado, cor });

      setValorDigitado({
        nome: "",
        descricaoCategoriaTabela: "",
        descricaoCategoriaInicio: "",
      });
    }
  };

  return (
    <Container maxWidth="xl">
      <form
        className={styles.formularioNovaCategoria}
        onSubmit={enviaFormulario}
      >
        <Typography variant="h1" align="center">
          Nova Categoria
        </Typography>
        <div>
          <TextField
            id="nome"
            name="nome"
            onChange={aoInserirValorDoCampo}
            onBlur={(e) => {
              const estaValido = validaNomeCategoria(e.target.value);
              setErroValorDigitado({ nome: estaValido });
            }}
            label="Nome"
            variant="filled"
            type="text"
            margin="normal"
            error={!!erroValorDigitado.nome}
            helperText={erroValorDigitado.nome}
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="descricao-categoria-tabela"
            name="descricaoCategoriaTabela"
            onChange={aoInserirValorDoCampo}
            onBlur={(e) => {
              const estaValida = validaDescricaoCategoriaTabela(e.target.value);
              setErroValorDigitado({ descricaoCategoriaTabela: estaValida });
            }}
            label="Descrição da Categoria para a Tabela"
            variant="filled"
            multiline
            rows={2}
            type="text"
            margin="normal"
            error={!!erroValorDigitado.descricaoCategoriaTabela}
            helperText={erroValorDigitado.descricaoCategoriaTabela}
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="descricao-categoria-inicio"
            name="descricaoCategoriaInicio"
            onChange={aoInserirValorDoCampo}
            onBlur={(e) => {
              const estaValida = validaDescricaoCategoriaInicio(e.target.value);
              setErroValorDigitado({ descricaoCategoriaInicio: estaValida });
            }}
            label="Descrição da Categoria da página inicial"
            variant="filled"
            multiline
            rows={1}
            type="text"
            margin="normal"
            error={!!erroValorDigitado.descricaoCategoriaInicio}
            helperText={erroValorDigitado.descricaoCategoriaInicio}
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="cor"
            name="cor"
            onChange={aoEscolherACor}
            value={cor}
            label="Cor"
            variant="filled"
            type="color"
            margin="normal"
            fullWidth
          />
        </div>
        <div className={styles.containerBotoes}>
          <BotaoPadrao tipo="submit">Salvar</BotaoPadrao>
          <BotaoPadrao tipo="reset" estilos="limpar">
            Limpar
          </BotaoPadrao>
        </div>
      </form>
    </Container>
  );
};
