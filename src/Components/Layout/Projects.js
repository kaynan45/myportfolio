import styles from './Projects.module.css'

function Projects() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <p className={styles.aboutNumber}>03</p>
        <p className={styles.aboutTitle}>Projects</p>
        <hr className={styles.aboutDivider} aria-orientation="horizontal" />
      </div>
    </section>
  )
}

export default Projects