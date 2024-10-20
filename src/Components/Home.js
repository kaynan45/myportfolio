import styles from "./Home.module.css";
import Presentation from "../Layout/Presentation";
import Connect from "../Layout/Connect";
import About from "../Layout/About";

function Home() {
  return (
    <main className={styles.mainContainer}>
      <section>
        <Presentation />
        <Connect />
      </section>
      <About />
    </main>
  );
}

export default Home;
