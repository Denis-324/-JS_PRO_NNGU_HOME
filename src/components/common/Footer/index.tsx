import React from "react";
import styles from "./index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>Учебный проект 2022 г.</div>
    </footer>
  );
};

export default Footer;
