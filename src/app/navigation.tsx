"use client";

import styles from "./navigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
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
    </nav>
  );
}
