import ProjectCards from "../Utils/ProjectCards";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <p className={styles.aboutNumber}>03</p>
        <p className={styles.aboutTitle}>Projects</p>
        <hr className={styles.aboutDivider} aria-orientation="horizontal" />
      </div>
      <ProjectCards
        projectName="Book Tracker"
        projectImage="https://picsum.photos/600/300"
        projectLink="/"
        projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
      />
      <ProjectCards
        projectName="Weather App"
        projectImage="https://picsum.photos/600/300"
        projectLink="/"
        projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."
      />
    </section>
  );
}

export default Projects;
