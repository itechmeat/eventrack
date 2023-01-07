import { FC, PropsWithChildren } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Header } from "@/features/layout/Header/Header";
import { setTheme } from "@/data/data";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {};

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
}) => {
  const { folderId } = useParams();
  setTheme();

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>{!children ? <Outlet /> : children}</main>

      {!folderId && (
        <footer className={styles.footer}>
          <span className={styles.copyright}>Eventrack © 2023</span>
          <a
            href="https://github.com/itechmeat/eventrack"
            target="_blank"
            rel="noreferrer"
            className={styles.github}
          >
            GitHub
          </a>
        </footer>
      )}
    </div>
  );
};
