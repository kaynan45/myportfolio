import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import ThemeButton from './Layout/ThemeButton'

function Navbar() {

  return (
    <nav>
      <div className={styles.navbar}>
        <div>
          <p className={styles.logo}>Kaynan</p>
        </div>
        <ul>
          <li>
            <Link className={styles.navItem} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to={"/projects"}>
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to={"contactMe"}>
              Contact me
            </Link>
          </li>
          <li>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
