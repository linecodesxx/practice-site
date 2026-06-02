import FortuneWheel from "@/components/FortuneWheel/FortuneWheel";
import styles from "./page.module.scss";

export default function FortuneWheelPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>🎡 КОЛЕСО ФОРТУНЫ</h1>
        <p className={styles.subtitle}>
          Мини-игра для сотрудников, которая добавляет элемент азарта в
          геймификацию
        </p>

        <FortuneWheel />
      </main>
    </div>
  );
}
