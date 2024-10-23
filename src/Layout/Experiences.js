import { useState } from "react";
import styles from "./Experiences.module.css";

function Experiences() {
  const [selectedButton, setSelectedButton] = useState("frontend");

  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <p className={styles.aboutNumber}>02</p>
        <p className={styles.aboutTitle}>Experience</p>
        <hr className={styles.aboutDivider} aria-orientation="horizontal" />
      </div>
      <div className={styles.buttons}>
        <button
          className={`${styles.experienceButton} ${
            selectedButton === "fullstack" ? styles.active : ""
          }`}
          onClick={() => {
            setSelectedButton("fullstack");
          }}
        >
          Full-Stack
        </button>
        <button
          className={`${styles.experienceButton} ${
            selectedButton === "frontend" ? styles.active : ""
          }`}
          onClick={() => {
            setSelectedButton("frontend");
          }}
        >
          Front-End
        </button>
      </div>
    </section>
  );
}

export default Experiences;
