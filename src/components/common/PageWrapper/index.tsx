import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./index.module.scss";

const PageWrapper: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.flex}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
