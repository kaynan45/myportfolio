import styles from "./Experiences.module.css";

function Experiences() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <p className={styles.aboutNumber}>02</p>
        <p className={styles.aboutTitle}>Experience</p>
        <hr className={styles.aboutDivider} aria-orientation="horizontal" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.experienceButton}>Full-Stack</button>
        <button className={styles.experienceButton}>Front-End</button>
      </div>
    </section>
  );
}

export default Experiences;
