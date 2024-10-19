import { PiArrowBendDownLeftThin } from "react-icons/pi";
import styles from "./Home.module.css";

function Home() {
  return (
    <main>
      {/* Presentation Section */}
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

      {/* Connect Section */}
      <section className={styles.connect}>
        <div className={styles.letsConnectContainer}>
          <a
            href="https://www.linkedin.com/in/lorenzo-xavier-9317432ba/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.letsConnect}
          >
            Let's connect!
          </a>
          <div>
            <p className={styles.clickMe}>Click Me!</p>
            <span className={styles.arrow}>
              <PiArrowBendDownLeftThin />
            </span>
          </div>
        </div>
        <button className={styles.contactMe}>Contact Me</button>
      </section>
    </main>
  );
}

export default Home;