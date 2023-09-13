import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const NovoVideoContext = createContext();

export const NovoVideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);

  const salvarVideoNoLocalStorage = (videos) => {
    localStorage.setItem("videos", JSON.stringify(videos));
  };

  const carregarVideosDoLocalStorage = () => {
    const videosSalvos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(videosSalvos);
  };

  const excluirVideo = (videoId) => {
    const videosAtualizados = videos.filter((video) => video.id !== videoId);
    setVideos(videosAtualizados);

    localStorage.setItem("videos", JSON.stringify(videosAtualizados));
  };

  useEffect(() => {
    carregarVideosDoLocalStorage();
  }, []);

  return (
    <NovoVideoContext.Provider
      value={{ videos, setVideos, salvarVideoNoLocalStorage, excluirVideo }}
    >
      {children}
    </NovoVideoContext.Provider>
  );
};

NovoVideoProvider.propTypes = {
  children: PropTypes.any,
};
