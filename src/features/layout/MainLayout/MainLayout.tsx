import { FC, PropsWithChildren } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Header } from "@/features/layout/Header/Header";
import styles from "./MainLayout.module.scss";

type MainLayoutProps = {};

export const MainLayout: FC<PropsWithChildren<MainLayoutProps>> = ({
  children,
}) => {
  const { folderId } = useParams();

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>{!children ? <Outlet /> : children}</main>

      {!folderId && <footer className={styles.footer}>Eventrack © 2023</footer>}
    </div>
  );
};
