import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <p>JS BLOG</p>
      </nav>
    </header>
  );
}

export default Header;
