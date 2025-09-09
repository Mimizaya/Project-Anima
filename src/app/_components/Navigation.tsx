"use client";

import styles from "@/_styles/Navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/_components/ToggleTheme";

export default function Navigation() {
  const path = usePathname();

  return (
    <header id="main" className={styles.header}>
      <nav className={styles.navigation}>
        <h1>
          <Link href="/">Project Anima</Link>
        </h1>
        <ul>
          <li className={path === "/" ? `${styles.active}` : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={path.startsWith("/anidex") ? `${styles.active}` : ""}>
            <Link href="/anidex">Anidex</Link>
          </li>
        </ul>

        <ThemeToggle />
      </nav>
    </header>
  );
}
