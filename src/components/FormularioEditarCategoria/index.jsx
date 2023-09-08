import { Container, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import styles from "./formularioEditarCategoria.module.css";
import { useState } from "react";

export const FormularioEditarCategoria = () => {
  const [valorDigitado, setValorDigitado] = useState({
    nome: "",
    descricaoCategoria: ""
  });
  const [cor, setCor] = useState("#FFFFFF");

  const aoInserirValorDoCampo = e => {
    setValorDigitado({
      ...valorDigitado,
      [e.target.name]: e.target.value
    })
  }

  const aoEscolherACor = e => {
    const novaCor = e.target.value;
    setCor(novaCor)
  }

  const enviaFormulario = (e) => {
    e.preventDefault();
    console.log(valorDigitado, cor)
    // fazer lógica de validação
  }
  
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
            label="Nome"
            variant="filled"
            type="text"
            margin="normal"
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="descricao-categoria"
            name="descricaoCategoria"
            onChange={aoInserirValorDoCampo}
            label="Descrição"
            variant="filled"
            multiline
            rows={5}
            type="text"
            margin="normal"
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
          <BotaoPadrao tipo="button" estilos="limpar">
            Limpar
          </BotaoPadrao>
        </div>
      </form>
    </Container>
  );
};
