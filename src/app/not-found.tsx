import styles from "@/_styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h2>Oops, something went wrong!</h2>
      <h3>404 - Page Not Found</h3>
    </div>
  );
}
