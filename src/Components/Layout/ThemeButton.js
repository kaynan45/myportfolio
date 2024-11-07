import { useState } from "react";
import styles from "./ThemeButton.module.css";
import { MdModeNight, MdLightMode } from "react-icons/md";

function ThemeButton() {
  const[theme, setTheme] = useState('light')

  function switchTheme() {
    if (theme === "light") {
      document.body.setAttribute("data-theme", "dark");
      setTheme('dark')
    } else {
      document.body.removeAttribute("data-theme");
      setTheme('light')
    }
  }

  return (
    <button className={styles.dark_light_mode} onClick={switchTheme}>
      {(theme === "dark" ? <MdLightMode /> : <MdModeNight />)}
    </button>
  );
}

export default ThemeButton;
