import { Container, TextField, Typography } from "@mui/material";
import { BotaoPadrao } from "../BotaoPadrao";
import styles from "./FormularioNovoVideo.module.css";

export const FormularioNovoVideo = () => {
    return (
        <Container maxWidth="xl">
          <form className={styles.formularioNovoVideo}>
            <Typography variant="h1" align="center">
              Novo Vídeo
            </Typography>
            <div>
              <TextField
                id="titulo"
                name="titulo"
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
                name="link-video"
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
                name="link-capa"
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
                fullWidth
              />
            </div>
            <div>
              <TextField
                id="descricao"
                name="descricao"
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
              <BotaoPadrao tipo="button" estilos="nova-categoria">
                Nova Categoria
              </BotaoPadrao>
            </div>
          </form>
        </Container>
      );
};