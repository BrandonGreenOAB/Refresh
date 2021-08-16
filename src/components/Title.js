import React from "react";
import styles from "./styleSheet.module.css";

function Title() {
  return (
    <div>
      <h1 className={styles.defFont}>Search your user</h1>
      <h2 className={styles.defFont}>By Name</h2>
    </div>
  );
}

export default Title;
