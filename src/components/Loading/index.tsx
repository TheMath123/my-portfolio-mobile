import styles from "./loading.module.css";

export function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}
