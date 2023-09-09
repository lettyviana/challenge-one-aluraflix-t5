import { useState } from "react";
import { Container, MenuItem, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import { Link } from "react-router-dom";
import categoriasData from "../../data/video-data.json";
import PropTypes from "prop-types";
import styles from "./FormularioNovoVideo.module.css";
import {
  validaDescricao,
  validaLinkCapa,
  validaLinkVideo,
  validaTitulo,
} from "../../utils/validacoes";

export const FormularioNovoVideo = ({ aoEnviar }) => {
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
    linkDaCapaDoVideo: "",
    descricao: "",
  });

  const aoInserirValor = (e) => {
    if (e && e.target) {
      // Verifica se 'e' e 'e.target' são definidos
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
      let erroLinkDaCapa =
        name === "linkDaCapaDoVideo"
          ? validaLinkCapa(value)
          : erroValorInserido.linkDaCapaDoVideo;
      let erroDescricao =
        name === "descricao"
          ? validaDescricao(value)
          : erroValorInserido.descricao;

      setErroValorInserido({
        titulo: erroTitulo,
        linkVideo: erroLinkDoVideo,
        linkDaCapaDoVideo: erroLinkDaCapa,
        descricao: erroDescricao,
      });
    }
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
      <form className={styles.formularioNovoVideo} onSubmit={enviaFormulario}>
        <Typography variant="h1" align="center">
          Novo Vídeo
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
          <Link className={styles.botaoCategoria} to={"/nova-categoria"}>
            <BotaoPadrao tipo="button" estilos="nova-categoria">
              Nova Categoria
            </BotaoPadrao>
          </Link>
        </div>
      </form>
    </Container>
  );
};

FormularioNovoVideo.propTypes = {
  aoEnviar: PropTypes.any,
};
