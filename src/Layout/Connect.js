import styles from './Connect.module.css'
import { PiArrowBendDownLeftThin } from "react-icons/pi";

function Connect() {
  return (
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
  )
}

export default Connect