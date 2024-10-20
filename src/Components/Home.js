import styles from "./Home.module.css";
import Presentation from "../Layout/Presentation";
import Connect from "../Layout/Connect";
import About from "../Layout/About";

function Home() {
  //TODO I need to either separate this home page in multiple components to each area, or export the content here to the app and there I make this separations
  return (
    <main className={styles.mainContainer}>
      <section>
        <Presentation />
        <Connect />
      </section>
      <section>
        <About />
      </section>
    </main>
  );
}

export default Home;
