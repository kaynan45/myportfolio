import { PiArrowBendDownLeftThin } from "react-icons/pi";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div data-theme="dark">
      <div className={styles.presentation}>
        <h1 className={styles.myNameIs}>
          Hi, my name is <span className={styles.name}>Kaynan.</span>
        </h1>
        <h1 className={styles.whatAmI}>I'm a Front-End Developer.</h1>
        <h3 className={styles.description}>
          I'm a Front-End Developer with experience in{" "}
          <span className={styles.name}>JavaScript, React, HTML, CSS,</span> and
          tools like <span className={styles.name}>Git</span> and{" "}
          <span className={styles.name}>Cypress.</span>{" "}
        </h3>
      </div>
      <div className={styles.connect}>
        <div className={styles.letsConnectContainer}>
          <Link
            to="https://www.linkedin.com/in/lorenzo-xavier-9317432ba/"
            target="_blank"
          >
            <button className={styles.letsConnect}>Let's connect!</button>
          </Link>
          <div>
            <p className={styles.clickMe}>Click Me!</p>
            <span className={styles.arrow}>
              <PiArrowBendDownLeftThin />
            </span>
          </div>
        </div>
        <button className={styles.contactMe}>Contact Me</button>
      </div>
    </div>
  );
}

export default Home;
