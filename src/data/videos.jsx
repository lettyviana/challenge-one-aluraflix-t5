import dados from "./video-data.json";

// Lógica para mesclar vídeos do arquivo json com os que serão salvos no Local Storage
const mesclarVideos = (videosSalvos) => {
    return [...dados.videos, ...videosSalvos];
}

export default mesclarVideos;