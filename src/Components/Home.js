import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.presentation}>
      <h1 className={styles.myNameIs}>Hi, my name is <span className={styles.name}>Kaynan.</span></h1>
      <h1 className={styles.whatAmI}>I'm a Front-End Developer.</h1>
      <h3 className={styles.description}>I'm a Front-End Developer with experience in <span className={styles.name}>JavaScript, React, HTML, CSS,</span> and tools like <span className={styles.name}>Git</span> and <span className={styles.name}>Cypress.</span> I've built dynamic, user-friendly applications like the Aluguel Marina Da Glória website. I'm eager to tackle new challenges and grow in the tech industry.</h3>
    </div>
  )
}

export default Home