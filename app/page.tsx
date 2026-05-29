import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>ГЕЙМИФИКАЦИЯ</h1>
        <p className={styles.subtitle}>
          Система мотивации и вовлечения сотрудников
        </p>

        <section id="guide-section" className={styles.guideSection}>
          <div className={styles.guideContainer}>
            <h2 className={styles.sectionTitle}>Гид по системе мотивации</h2>
            <div className={styles.buttons}>
              <button className={styles.buttonPlayroom}>Игровая комната</button>
              <button className={styles.buttonBirja}>Биржа задач</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
