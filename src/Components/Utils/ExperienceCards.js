import { MdWeb } from "react-icons/md";
import styles from "./ExperienceCards.module.css";

function ExperienceCards({ selectedButton }) {
  return (
    <div>
      {selectedButton === "fullstack" ? (
        <div className={styles.experienceCard}>
          <div className={styles.cardHeader}>
            <MdWeb />
            <div>
              <h3>Selecty - Online Recruitment</h3>
              <p>Full-Stack Developer</p>
            </div>
          </div>
          <div className={styles.cardBody}></div>
        </div>
      ) : (
        <div className={styles.experienceCard}>
          <div className={styles.cardHeader}>
            <MdWeb />
            <div>
              <h3>Marina da Glória</h3>
              <p>Front-End Developer</p>
            </div>
          </div>
          <div className={styles.cardBody}></div>
        </div>
      )}
    </div>
  );
}

export default ExperienceCards;
