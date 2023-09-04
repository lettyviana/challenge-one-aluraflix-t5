import { Container, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import styles from "./formularioNovaCategoria.module.css";
import { useState } from "react";

export const FormularioNovaCategoria = () => {
  const [valorDigitado, setValorDigitado] = useState({
    titulo: "",
    descricao: ""
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
      <form className={styles.formularioNovaCategoria} onSubmit={enviaFormulario}>
        <Typography variant="h1" align="center">
          Nova Categoria
        </Typography>
        <div>
          <TextField
            id="titulo"
            name="titulo"
            onChange={aoInserirValorDoCampo}
            label="Título"
            variant="filled"
            type="text"
            margin="normal"
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="descricao"
            name="descricao"
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
