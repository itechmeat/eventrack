import { FC } from "react";
import { Link } from "react-router-dom";
import { DataType, getData } from "@/data/data";
import { Navigation } from "@/features/layout/Navigation/Navigation";
import styles from "./Header.module.scss";

type HeaderProps = {};

export const Header: FC<HeaderProps> = () => {
  const logo = getData("logo", DataType.STRING);
  const logoImage = getData("logoImage", DataType.STRING);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand}>
        {!logoImage ? (
          logo
        ) : (
          <img
            src={`./images/${logoImage}`}
            alt={logo}
            className={styles.logo}
          />
        )}
      </Link>

      <Navigation />
    </header>
  );
};
