import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { MdModeNight } from "react-icons/md";

function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div>
          <img
            className={styles.image}
            src="https://cdn-icons-png.freepik.com/512/10329/10329496.png"
          ></img>
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
            <button className={styles.dark_light_mode}>
              <MdModeNight />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
