import { useState } from "react";
import { Container, MenuItem, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import { Link } from "react-router-dom";
import categoriasData from "../../data/video-data.json";
import PropTypes from "prop-types";
import styles from "./FormularioNovoVideo.module.css";
import {
  validaDescricao,
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

    const erros = {
      titulo: validaTitulo(valorInserido.titulo),
      linkVideo: validaLinkVideo(valorInserido.linkVideo),
      descricao: validaDescricao(valorInserido.descricao),
    };

    setErroValorInserido(erros);

    if (Object.values(erros).every((erro) => !erro)) {
      aoEnviar({ valorInserido, categoria });
    }
  };

  return (
    <Container maxWidth="xl">
      <form className={styles.formularioNovoVideo} onSubmit={enviaFormulario}>
        <Typography variant="h1" align="center">
          Novo Vídeo
        </Typography>
        <div>
          <TextField
            required
            id="titulo"
            name="titulo"
            onChange={aoInserirValor}
            onBlur={(e) => {
              const estaValido = validaTitulo(e.target.value);
              setErroValorInserido({ titulo: estaValido });
            }}
            label="Título"
            variant="filled"
            type="text"
            margin="normal"
            error={!!erroValorInserido.titulo}
            helperText={erroValorInserido.titulo}
            fullWidth
          />
        </div>
        <div>
          <TextField
            required
            id="link-video"
            name="linkVideo"
            onChange={aoInserirValor}
            onBlur={(e) => {
              const estaValido = validaLinkVideo(e.target.value);
              setErroValorInserido({ linkVideo: estaValido });
            }}
            label="Link do vídeo"
            variant="filled"
            type="text"
            margin="normal"
            error={!!erroValorInserido.linkVideo}
            helperText={erroValorInserido.linkVideo}
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
            required
            id="lista-categorias"
            name="listaCategorias"
            label="Escolha uma categoria aqui"
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
            required
            id="descricao"
            name="descricao"
            onChange={aoInserirValor}
            onBlur={(e) => {
              const estaValida = validaDescricao(e.target.value);
              setErroValorInserido({ descricao: estaValida });
            }}
            label="Descrição"
            variant="filled"
            multiline
            rows={5}
            type="text"
            margin="normal"
            error={!!erroValorInserido.descricao}
            helperText={erroValorInserido.descricao}
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
