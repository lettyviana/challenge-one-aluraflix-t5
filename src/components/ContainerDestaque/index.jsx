import { BannerDestaque } from "../BannerDestaque";
import { CategoriaDestaque } from "../Categoria";
import styles from "./ContainerDestaque.module.css";

export const ContainerDestaque = () => {
  return (
    <>
      <div className={styles.containerDestaque}>
        <BannerDestaque />
        <CategoriaDestaque />
      </div>
    </>
  );
};