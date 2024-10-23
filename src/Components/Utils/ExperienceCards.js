import styles from "./ExperienceCards.module.css";

function ExperienceCards({ selectedButton }) {
  return (
    <div>
      {selectedButton === "fullstack" ? (
        <div className={styles.experienceCard}>
          <div className={styles.cardHeader}>
            <img src="/img/logo-selecty.png" alt="Selecty Logo" className={styles.companyLogo} />
            <div>
              <h3>Selecty - Online Recruitment</h3>
              <p>Full-Stack Developer</p>
            </div>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>Responsible for updating the company's app and portal</li>
              <li>Developed Cypress tests for various functionalities</li>
              <li>Translated the entire website into English and Spanish</li>
              <li>Collaborated with cross-functional teams</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className={styles.experienceCard}>
          <div className={styles.cardHeader}>
            <img src="/path-to-marina-logo.png" alt="Marina da Glória Logo" className={styles.companyLogo} />
            <div>
              <h3>Marina da Glória</h3>
              <p>Front-End Developer</p>
            </div>
          </div>
          <div className={styles.cardBody}>
            <ul>
              <li>Created and updated the entire website</li>
              <li>Worked on site build, e-commerce, and WordPress development</li>
              <li>Implemented marketing strategies on the website</li>
              <li>Ensured mobile responsiveness and user-friendly design</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExperienceCards;
