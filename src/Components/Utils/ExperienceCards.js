import styles from "./ExperienceCards.module.css";
import Lottie from "lottie-react";
import configurationAnimation from "../../assets/Animation - 1729812166525.json";

function ExperienceCards({ selectedButton }) {
  return (
    <div>
      {selectedButton === "fullstack" ? (
        <div className={styles.experienceCard}>
          <span className={styles.lottieIcon}>
            <Lottie animationData={configurationAnimation} />
          </span>
          <div className={styles.cardHeader}>
            <div className={styles.writingSection}>
              <h3>Selecty - Online Recruitment</h3>
              <h4>Full-Stack Developer</h4>
              <p>
                <strong>Selecty - Online Recruitment®</strong> is one of
                Brazil's leading and most reputable recruitment companies. In my
                role as a Full-Stack Developer, I was responsible for:
              </p>
              <ul>
                <li>
                  <span>-</span> Maintaining and updating of the company's web
                  application and portal:{" "}
                  <a
                    className={styles.websiteLinks}
                    href="https://selecty.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <span>-</span> Translating the entire website into English and
                  Spanish.
                </li>
                <li>
                  <span>-</span> Developing comprehensive Cypress tests to ensure
                  functionality, which improved product quality and reliability.
                </li>
                <li>
                  <span>-</span> Creating the FAQ questions page.
                </li>
              </ul>
              <p className={styles.skillsArea}>
                <p className={styles.SkillsTitle}>Skills:</p>
                <strong>
                  JavaScript (ES6+) · CSS & HTML · Cypress · Multilingual
                  Content Management · Problem-Solving
                </strong>
              </p>
            </div>
          </div>
          <a href="https://selecty.com.br/" target="_blank" rel="noreferrer">
            <img
              className={styles.companyImage}
              src="/img/logo-selecty.png"
              alt="Selecty-logo"
            />
          </a>
        </div>
      ) : (
        <div className={styles.experienceCard}>
          <span className={styles.lottieIcon}>
            <Lottie animationData={configurationAnimation} />
          </span>
          <div className={styles.cardHeader}>
            <div className={styles.writingSection}>
              <h3>Marina da Glória</h3>
              <h4>Front-End Developer</h4>
              <p>
                <strong>Marina da Gloria®</strong> is a boat rental startup
                based in Rio de Janeiro. As a Front-End Developer, working there I:
              </p>
              <ul  className="tasksDone">
                <li>
                  <span>-</span> Developed and continuously improved the
                  company's website, integrating an E-Commerce platform and
                  enhancing user experience:{" "}
                  <a
                    className={styles.websiteLinks}
                    href="https://aluguelmarinadagloria.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </li>
                <li>
                  <span>-</span> Implemented E-Commerce functionalities.
                </li>
                <li>
                  <span>-</span> Responsible for building and maintaining the
                  company's website.
                </li>
                <li>
                  <span>-</span> Integrated marketing strategies into the website
                  to boost engagement and drive conversions.
                </li>
                <li>
                  <span>-</span> Enhanced website performance to improve load
                  times and user experience.
                </li>
              </ul>
              <p className={styles.skillsArea}>
                <p className={styles.SkillsTitle}>Skills:</p>
                <strong>
                  Site Build · E-Commerce · WordPress · WordPress Development ·
                  Marketing
                </strong>
              </p>
            </div>
          </div>
          <a
            href="https://aluguelmarinadagloria.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.companyImage}
              src="/img/aluguel_marina_da_gloria.jpg"
              alt="Selecty-logo"
            />
          </a>
        </div>
      )}
    </div>
  );
}

export default ExperienceCards;
