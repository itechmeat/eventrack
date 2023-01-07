import { FC } from "react";
import { DataType, getData } from "@/data/data";
import styles from "./HomeHero.module.scss";

type HomeHeroProps = {};

export const HomeHero: FC<HomeHeroProps> = () => {
  return (
    <div className={styles.hero}>
      <h1>{getData("description", DataType.STRING)}</h1>
    </div>
  );
};
