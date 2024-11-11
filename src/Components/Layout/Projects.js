import ProjectCards from "../Utils/ProjectCards";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section id="Projects" className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <p className={styles.aboutNumber}>03</p>
        <p className={styles.aboutTitle}>Projects</p>
        <hr className={styles.aboutDivider} aria-orientation="horizontal" />
      </div>
      <ProjectCards
        projectName="Book Tracker"
        projectImage="/img/book-tracker-website.png"
        projectLink="https://portifolio-orcin-ten.vercel.app/"
        projectDescription="I developed this book tracker project to solve my personal challenge of managing books I've read and those I wish to buy. The app allows users to add books to a 'Book List' for easy tracking, providing a streamlined experience that helps organize reading goals and potential purchases. Each added book includes a link to Amazon, directing users to relevant offers and making purchasing convenient. This project demonstrates my ability to design and implement functional, user-centric applications that address real-world needs, showcasing my skills in front-end development and integration with external platforms."
      />
      <ProjectCards
        projectName="Weather App"
        projectImage="/img/weather-app-website.png"
        projectLink="https://weather-app-khaki-five-38.vercel.app/"
        projectDescription="I built this weather app to quickly and conveniently check the weather in any location worldwide. The app allows users to enter any city or location and receive current weather conditions, along with forecasts, helping them plan their day with ease. Through this project, I used my skills in integrating APIs and creating responsive, user-friendly interfaces, showcasing my ability to develop practical applications that solve everyday needs."
      />
    </section>
  );
}

export default Projects;
