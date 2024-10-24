import styles from "./ExperienceCards.module.css";
import Lottie from "lottie-react";
import configurationAnimation from "../../assets/Animation - 1729812166525.json";

function ExperienceCards({ selectedButton }) {
  return (
    <div>
      {selectedButton === "fullstack" ? (
        <div className={styles.experienceCard}>
          <div className={styles.cardHeader}>
            <Lottie animationData={configurationAnimation} />
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
            <Lottie animationData={configurationAnimation} />
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
