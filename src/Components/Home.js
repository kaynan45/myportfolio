import styles from "./Home.module.css";
import Presentation from "../Components/Layout/Presentation";
import Connect from "../Components/Layout/Connect";
import About from "../Components/Layout/About";
import Experiences from "../Components/Layout/Experiences";
import Projects from "./Layout/Projects";

function Home() {
  return (
    <main className={styles.mainContainer}>
      <section>
        <Presentation />
        <Connect />
      </section>
      <About />
      <Experiences />
      <Projects />
    </main>
  );
}

export default Home;
