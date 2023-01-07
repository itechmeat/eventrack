import { FC } from "react";
import styles from "./HomeHero.module.scss";

type HomeHeroProps = {};

export const HomeHero: FC<HomeHeroProps> = () => {
  return (
    <div className={styles.hero}>
      <h1>Track your event</h1>
    </div>
  );
};
