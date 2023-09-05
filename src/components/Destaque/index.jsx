import { ContainerDestaque } from "../ContainerDestaque";
import styles from "./Destaque.module.css";

export const Destaque = () => {
  return (
    <>
      <div className={styles.destaque}>
        <ContainerDestaque />
      </div>
    </>
  );
};
