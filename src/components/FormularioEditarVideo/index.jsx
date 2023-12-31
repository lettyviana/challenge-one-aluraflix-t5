import { useState } from "react";
import { useNovoVideoContext } from "../../context/useNovoVideoContext";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import PropTypes from "prop-types";
import {
  validaCategoriaEscolhida,
  validaLinkVideo,
  validaTitulo,
} from "../../utils/validacoes";
import capaPadrao from "../../public/sem-imagem-de-capa.png";
import styles from "./FormularioEditarVideo.module.css";
import { useCategoriaContext } from "../../context/useCategoriaContext";

export const FormularioEditarVideo = () => {
  const { videos, setVideos } = useNovoVideoContext();
  const { categorias } = useCategoriaContext();
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
  });
  const [erroCategoria, setErroCategoria] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const videoId = parseInt(id, 10);

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

    setErroValorInserido({
      titulo: erroTitulo,
      linkVideo: erroLinkDoVideo,
    });
  };

  const aoSelecionarCategoria = (e) => {
    const categoriaEscolhida = e.target.value;
    setCategoria(categoriaEscolhida);
    setErroCategoria(validaCategoriaEscolhida(categoriaEscolhida));
  };

  const editarVideo = ({ videoId, valorInserido, categoria }) => {
    const videoEditado = {
      id: videoId,
      titulo: valorInserido.titulo,
      linkVideo: valorInserido.linkVideo,
      linkDaCapaDoVideo: valorInserido.linkDaCapaDoVideo,
      descricao: valorInserido.descricao,
      categoria: categoria.nome,
    };

    const videosAtualizados = videos.map((video) =>
      video.id === videoEditado.id ? videoEditado : video
    );

    setVideos(videosAtualizados);
    localStorage.setItem("videos", JSON.stringify(videosAtualizados));
  };

  const enviaFormulario = (e) => {
    e.preventDefault();

    const erros = {
      titulo: validaTitulo(valorInserido.titulo),
      linkVideo: validaLinkVideo(valorInserido.linkVideo),
    };

    const erroCategoria = validaCategoriaEscolhida(categoria);

    setErroValorInserido(erros);
    setErroCategoria(erroCategoria);

    if (!valorInserido.linkDaCapaDoVideo) {
      valorInserido.linkDaCapaDoVideo = capaPadrao;
    }

    const videoExistente = videos.find((video) => video.id === videoId);

    if (!videoExistente) {
      alert("Vídeo não encontrado. Redirecionando para a página inicial!");
      setTimeout(() => {
        navigate("/");
      }, 1500);
      return;
    }

    if (!erroCategoria && Object.values(erros).every((erro) => !erro)) {
      editarVideo({ videoId, valorInserido, categoria });
      setTimeout(() => {
        alert("Vídeo editado com sucesso! Redirecionando para a página inicial!");
        navigate("/");
      }, 1500);
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
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria}>
                {categoria.nome}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText error>{erroCategoria}</FormHelperText>
        </FormControl>
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
