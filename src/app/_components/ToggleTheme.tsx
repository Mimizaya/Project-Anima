import { useTheme } from "@/_contexts/ThemeContext";
import styles from "@/_styles/ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.themeToggleButton}
    >
      {theme === "light-theme" ? (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <title>Dark mode toggle</title>
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.58 9.79z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <title>Light mode toggle</title>
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
          <path
            d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}
