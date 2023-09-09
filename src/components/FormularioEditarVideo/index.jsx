import { useState } from "react";
import { Container, MenuItem, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import categoriasData from "../../data/video-data.json";
import PropTypes from "prop-types";
import styles from "./FormularioEditarVideo.module.css";
import {
  validaDescricao,
  validaLinkVideo,
  validaTitulo,
} from "../../utils/validacoes";

export const FormularioEditarVideo = ({ aoEnviar }) => {
  const [valorInserido, setValorInserido] = useState({
    titulo: "",
    linkVideo: "",
    linkDaCapaDoVideo: "",
    descricao: "",
  });
  const [categoria, setCategoria] = useState("");
  const [erroValorInserido, setErroValorInserido] = useState({
    titulo: "",
    linkVideo: "",
    descricao: "",
  });

  const aoInserirValor = (e) => {
    const { name, value } = e.target;

    setValorInserido({
      ...valorInserido,
      [name]: value,
    });

    let erroTitulo =
      name === "titulo" ? validaTitulo(value) : erroValorInserido.titulo;
    let erroLinkDoVideo =
      name === "linkVideo"
        ? validaLinkVideo(value)
        : erroValorInserido.linkVideo;

    let erroDescricao =
      name === "descricao"
        ? validaDescricao(value)
        : erroValorInserido.descricao;

    setErroValorInserido({
      titulo: erroTitulo,
      linkVideo: erroLinkDoVideo,
      descricao: erroDescricao,
    });
  };

  const aoSelecionarCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const enviaFormulario = (e) => {
    e.preventDefault();

    aoEnviar({ valorInserido, categoria });
  };

  return (
    <Container maxWidth="xl">
      <form className={styles.formularioEditarVideo} onSubmit={enviaFormulario}>
        <Typography variant="h1" align="center">
          Editar Vídeo
        </Typography>
        <div>
          <TextField
            id="titulo"
            name="titulo"
            onChange={aoInserirValor}
            label="Título"
            variant="filled"
            type="text"
            margin="normal"
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="link-video"
            name="linkVideo"
            onChange={aoInserirValor}
            label="Link do vídeo"
            variant="filled"
            type="text"
            margin="normal"
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="link-capa"
            name="linkDaCapaDoVideo"
            onChange={aoInserirValor}
            label="Link da imagem do vídeo"
            variant="filled"
            type="text"
            margin="normal"
            fullWidth
          />
        </div>
        <div>
          <TextField
            id="lista-categorias"
            name="lista-categorias"
            label="Escolha uma categoria"
            variant="filled"
            select
            margin="normal"
            onChange={aoSelecionarCategoria}
            value={categoria}
            fullWidth
          >
            {categoriasData.categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria}>
                {categoria.nome}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            id="descricao"
            name="descricao"
            onChange={aoInserirValor}
            label="Descrição"
            variant="filled"
            multiline
            rows={5}
            type="text"
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

FormularioEditarVideo.propTypes = {
  aoEnviar: PropTypes.any,
};
