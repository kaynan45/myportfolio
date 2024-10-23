import styles from "./Home.module.css";
import Presentation from "../Components/Layout/Presentation";
import Connect from "../Components/Layout/Connect";
import About from "../Components/Layout/About";
import Experiences from "../Components/Layout/Experiences";

function Home() {
  return (
    <main className={styles.mainContainer}>
      <section>
        <Presentation />
        <Connect />
      </section>
      <About />
      <Experiences />
    </main>
  );
}

export default Home;
