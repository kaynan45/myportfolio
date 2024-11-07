import styles from "./ProjectCards.module.css";

//{ projectName }, { projectImage }, { projectLink }
function ProjectCards({
  projectImage,
  projectName,
  projectLink,
  projectDescription,
}) {
  return (
    <div className={styles.projectCard}>
      <img src={projectImage} alt="projectImage"></img>
      <div className={styles.writingArea}>
        <h1 className={styles.projectName}>{projectName}</h1>
        <p>{projectDescription}</p>
        <a href={projectLink} target="blank" rel="noreferrer">
          <button className={styles.projectButton}>Project Link</button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
