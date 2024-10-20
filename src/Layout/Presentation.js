import styles from './Presentation.module.css'

function Presentation() {
  return (
    <section className={styles.presentation}>
        <header>
          <h1 className={styles.myNameIs}>
            Hi, my name is <span className={styles.name}>Kaynan.</span>
          </h1>
          <h1 className={styles.whatAmI}>I'm a Front-End Developer.</h1>
        </header>
        <h3 className={styles.description}>
          I'm a Front-End Developer with experience in{" "}
          <span className={styles.name}>JavaScript, React, HTML, CSS,</span> and
          tools like <span className={styles.name}>Git</span> and{" "}
          <span className={styles.name}>Cypress.</span>{" "}
        </h3>
      </section>
  )
}

export default Presentation