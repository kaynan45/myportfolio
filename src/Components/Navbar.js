import styles from "./Navbar.module.css";
import ThemeButton from "./Layout/ThemeButton";

function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <div>
          <p className={styles.logo}>Kaynan</p>
        </div>
        <ul>
          <li className={styles.navItem}><a href={`#Home`}>Home</a></li>
          <li className={styles.navItem}><a href={`#Projects`}>Projects</a></li>
          <li className={styles.navItem}><a href={`#Contact_me`}>Contact me</a></li>
          <li className={styles.navItem}>
            <ThemeButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
