import { TaskCard } from "@/components/TaskCard/TaskCard";
import styles from "./page.module.scss";

export default function BirjaZadachPage() {
  const tasks = [
    {
      taskID: 1,
      title: "📱 Цифровой детокс",
      description:
        "Предложите коллегам на 1 час отказаться от проверки рабочих чатов",
      money: 20,
    },
    {
      taskID: 2,
      title: "🕵️ Детектив таймменеджмента",
      description:
        "Проанализируйте свой рабочий день с помощью трекера времени",
      money: 20,
    },
    {
      taskID: 3,
      title: "📚 Эстафета знаний",
      description: "Проведите короткий лив или запишите скринкаст для коллег",
      money: 20,
    },
    {
      taskID: 4,
      title: "💪 Здоровый заряд",
      description: "Найдите 15 минут на небольшую разминку в течение дня",
      money: 20,
    },
    {
      taskID: 5,
      title: "☕ Кофе-брейк с пользой",
      description:
        "Встреча с коллегой из другого отдела для неформального общения",
      money: 20,
    },
    {
      taskID: 6,
      title: "🔄 Перекрестный обзор",
      description: "Объединитесь в пары с коллегой из другого отдела",
      money: 20,
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>📋 БИРЖА ЗАДАЧ</h1>
        <p className={styles.subtitle}>
          Выполняйте задания и зарабатывайте бонусы
        </p>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>Сначала новые</button>
          <button className={styles.button}>По размеру бонуса</button>
        </div>

        <div className={styles.taskList}>
          {tasks.map((task) => {
            return (
              <TaskCard
                key={task.taskID}
                taskID={task.taskID}
                title={task.title}
                description={task.description}
                money={task.money}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
