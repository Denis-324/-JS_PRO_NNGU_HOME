import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./index.module.scss";

const PageGrid: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container_grid">
        <main className={styles.grid}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default PageGrid;
