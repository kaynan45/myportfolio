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
                  Maintaining and updating of the company's web application and
                  portal:{" "}
                  <a
                    href="https://selecty.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </li>
                <li>
                  Translating the entire website into English and Spanish.
                </li>
                <li>
                  Developed comprehensive Cypress tests to ensure functionality,
                  which improved product quality and reliability.
                </li>
                <li>Creating the FAQ questions page.</li>
              </ul>
              <p className={styles.skillsArea}>
                <strong>
                  Skills: JavaScript (ES6+) · CSS & HTML · Cypress ·
                  Multilingual Content Management · Problem-Solving
                </strong>
              </p>
            </div>
          </div>
          <img
            className={styles.companyImage}
            src="/img/logo-selecty.png"
            alt="Selecty-logo"
          />
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
                based in Rio de Janeiro. As a Front-End Developer, I was
                responsible for:
              </p>
              <ul>
                <li>
                  Developed and continuously improved the company's website,
                  integrating an E-Commerce platform and enhancing user
                  experience:{" "}
                  <a
                    href="https://aluguelmarinadagloria.com.br/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                </li>
                <li> Implemented E-Commerce functionalities.</li>
                <li>
                  Responsible for building and maintaining the company's
                  website.
                </li>
                <li>
                  Integrated marketing strategies into the website to boost
                  engagement and drive conversions.
                </li>
                <li>
                  Enhanced website performance to improve load times and user
                  experience.
                </li>
              </ul>
              <p className={styles.skillsArea}>
                <strong>
                  Skills: Site Build · E-Commerce · WordPress · WordPress
                  Development · Marketing
                </strong>
              </p>
            </div>
          </div>
          <img
            className={styles.companyImage}
            src="/img/aluguel_marina_da_gloria.jpg"
            alt="Selecty-logo"
          />
        </div>
      )}
    </div>
  );
}

export default ExperienceCards;
