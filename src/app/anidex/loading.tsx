import styles from "@/_styles/Loading.module.css";

export default function Loading() {
  return (
    <main>
      <div className={styles.spinnerWrapper}>
        <svg className={styles.spinner} viewBox="0 0 50 50">
          <circle
            className={styles.path1}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="var(--foreground)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="90"
            strokeDashoffset="0"
          />
          <circle
            className={styles.path2}
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="90"
            strokeDashoffset="90"
          />
          <title>Loading spinner</title>
        </svg>
      </div>
    </main>
  );
}
