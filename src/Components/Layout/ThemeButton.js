import { useState } from "react";
import styles from "./ThemeButton.module.css";
import { MdModeNight, MdLightMode } from "react-icons/md";

function ThemeButton() {
  const[theme, setTheme] = useState('dark')

  function switchTheme() {
    if (theme === "dark") {
      document.body.setAttribute("data-theme", "light");
      setTheme('light')
    } else {
      document.body.removeAttribute("data-theme");
      setTheme('dark')
    }
  }

  return (
    <button className={styles.dark_light_mode} onClick={switchTheme}>
      {(theme === "dark" ? <MdLightMode /> : <MdModeNight />)}
    </button>
  );
}

export default ThemeButton;
