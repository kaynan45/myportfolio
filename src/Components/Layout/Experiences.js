import { useState } from "react";
import styles from "./Experiences.module.css";
import ExperienceCards from "../Utils/ExperienceCards"
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
          className={`${styles.experienceButton} ${ //Here what I'm doing is basically creating a dynamic class by attaching the default style and the second style is added based on ternary condition.
            selectedButton === "fullstack" ? styles.active : ""
          }`}
          onClick={() => {
            setSelectedButton("fullstack"); //And to satisfy the condition when the button is clicked it's value is stored on the 'selectedButton' variable.
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
      <ExperienceCards selectedButton={selectedButton}/>
    </section>
  );
}

export default Experiences;
