import { useState } from "react";
import { Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import categoriasData from "../../data/video-data.json";
import PropTypes from "prop-types";
import styles from "./FormularioEditarVideo.module.css";
import {
  validaCategoriaEscolhida,
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
  const [erroCategoria, setErroCategoria] = useState(null);

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
    const categoriaEscolhida = e.target.value;
    setCategoria(categoriaEscolhida);
    setErroCategoria(validaCategoriaEscolhida(categoriaEscolhida));
  };

  const enviaFormulario = (e) => {
    e.preventDefault();

    const erros = {
      titulo: validaTitulo(valorInserido.titulo),
      linkVideo: validaLinkVideo(valorInserido.linkVideo),
      descricao: validaDescricao(valorInserido.descricao),
    };

    const erroCategoria = validaCategoriaEscolhida(categoria);

    setErroValorInserido(erros);
    setErroCategoria(erroCategoria);

    if (!erroCategoria && Object.values(erros).every((erro) => !erro)) {
      aoEnviar({ valorInserido, categoria });
    }
  };

  return (
    <Container maxWidth="xl">
      <form className={styles.formularioEditarVideo} onSubmit={enviaFormulario}>
        <Typography variant="h1" align="center">
          Editar Vídeo
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
        <FormControl fullWidth variant="filled" margin="normal">
          <InputLabel id="lista-categorias-label">
            Escolha uma categoria aqui
          </InputLabel>
          <Select
            labelId="lista-categorias-label"
            id="lista-categorias"
            name="listaCategorias"
            value={categoria}
            onBlur={(e) => {
              const categoriaValida = validaCategoriaEscolhida(e.target.value);
              setErroCategoria(categoriaValida);
            }}
            label="Escolha uma categoria aqui"
            onChange={aoSelecionarCategoria}
            error={!!erroCategoria}
          >
            {categoriasData.categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria}>
                {categoria.nome}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error>{erroCategoria}</FormHelperText>
        </FormControl>
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
          <BotaoPadrao tipo="reset" estilos="limpar">
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
