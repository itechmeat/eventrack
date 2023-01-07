import { FC } from "react";
import { Link } from "react-router-dom";
import { DataType, getData } from "@/data/data";
import { Navigation } from "@/features/layout/Navigation/Navigation";
import styles from "./Header.module.scss";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {getData("logo", DataType.STRING)}
      </Link>

      <Navigation />
    </header>
  );
};
