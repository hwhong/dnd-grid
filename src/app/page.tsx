import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        <div className={styles.content}>content</div>
      </div>
    </div>
  );
}
