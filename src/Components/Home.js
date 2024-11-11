import styles from "./Home.module.css";
import Presentation from "../Components/Layout/Presentation";
import Connect from "../Components/Layout/Connect";

function Home() {
  return (
    <main id="Home" className={styles.mainContainer}>
      <section>
        <Presentation />
        <Connect />
      </section>
    </main>
  );
}

export default Home;
