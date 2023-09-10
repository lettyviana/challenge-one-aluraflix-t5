import { useState } from "react";
import { Container, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import { validaDescricaoCategoria, validaNomeCategoria } from "../../utils/validacoes";
import PropTypes from "prop-types";
import styles from "./formularioEditarCategoria.module.css";

export const FormularioEditarCategoria = ({ aoEnviar }) => {
  const [valorDigitado, setValorDigitado] = useState({
    nome: "",
    descricaoCategoria: "",
  });
  const [cor, setCor] = useState("#FFFFFF");
  const [erroValorDigitado, setErroValorDigitado] = useState({
    nome: "",
    descricaoCategoria: "",
  });

  const aoInserirValorDoCampo = (e) => {
    const { name, value } = e.target;
    setValorDigitado({
      ...valorDigitado,
      [name]: value,
    });

    let erroNome =
      name === "nome" ? validaNomeCategoria(value) : erroValorDigitado.nome;
    let erroDescricaoCategoria =
      name === "descricaoCategoria"
        ? validaDescricaoCategoria(value)
        : erroValorDigitado.descricaoCategoria;

    setErroValorDigitado({
      nome: erroNome,
      descricaoCategoria: erroDescricaoCategoria,
    });
  };

  const aoEscolherACor = (e) => {
    const novaCor = e.target.value;
    setCor(novaCor);
  };

  const enviaFormulario = (e) => {
    e.preventDefault();

    const erros = {
      nome: validaNomeCategoria(valorDigitado.nome),
      descricaoCategoria: validaDescricaoCategoria(
        valorDigitado.descricaoCategoria
      ),
    };

    setErroValorDigitado(erros);

    if (Object.values(erros).every((erro) => !erro)) {
      aoEnviar({ valorDigitado, cor });
    }
  };
  
  return (
    <Container maxWidth="xl">
      <form className={styles.formularioEditarCategoria} onSubmit={enviaFormulario} >
        <Typography variant="h1" align="center">
          Editar Categoria
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
            id="descricao-categoria"
            name="descricaoCategoria"
            onChange={aoInserirValorDoCampo}
            onBlur={(e) => {
              const estaValida = validaDescricaoCategoria(e.target.value);
              setErroValorDigitado({ descricaoCategoria: estaValida });
            }}
            label="Descrição"
            variant="filled"
            multiline
            rows={5}
            type="text"
            margin="normal"
            error={!!erroValorDigitado.descricaoCategoria}
            helperText={erroValorDigitado.descricaoCategoria}
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

FormularioEditarCategoria.propTypes = {
  aoEnviar: PropTypes.any,
};