import { BannerDestaque } from "../BannerDestaque";
import { ConteudoDestaque } from "../ConteudoDestaque";
import styles from "./ContainerDestaque.module.css";

export const ContainerDestaque = () => {
  return (
    <>
      <div className={styles.containerDestaque}>
        <BannerDestaque />
        <ConteudoDestaque />
      </div>
    </>
  );
};