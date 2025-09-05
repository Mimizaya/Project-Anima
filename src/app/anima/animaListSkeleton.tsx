/** biome-ignore-all lint/suspicious/noArrayIndexKey: <the order of items will definitely NOT change> */
import styles from "./animaListSkeleton.module.css";

export default function AnimaListSkeleton() {
  return (
    <div className={styles.container}>
      {Array.from({ length: 10 }).map((_entry, index) => (
        <div key={index} className={styles.card}></div>
      ))}
    </div>
  );
}
