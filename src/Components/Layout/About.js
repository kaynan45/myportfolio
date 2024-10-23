import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutHeader}>
        <p className={styles.aboutNumber}>01</p>
        <p className={styles.aboutTitle}>About</p>
        <hr className={styles.aboutDivider} aria-orientation="horizontal" />
      </div>
      <p className={styles.aboutDescription}>
      I'm Lorenzo Kaynan Xavier, a passionate Full-Stack Developer with
        experience in Front-End technologies such as JavaScript, React, HTML,
        CSS, and Back-End skills in Node.js. I have a proven ability to deliver
        responsive, user-friendly web applications and have hands-on experience
        with end-to-end testing using Cypress.
        <br /><br />
        I’m constantly learning and improving, whether it's by deepening my
        knowledge in advanced React concepts like HOCs and Redux, or by exploring
        new technologies. I thrive in collaborative environments, always bringing
        strong communication skills and a commitment to teamwork.
        <br /><br />
        If you're looking for a developer who is dedicated to building efficient,
        scalable, and well-tested code, let’s connect!
      </p>
    </section>
  );
}

export default About;
