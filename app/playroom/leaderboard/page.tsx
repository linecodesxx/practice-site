import { LeaderCard } from "@/components/LeaderCard/LeaderCard";
import styles from "./page.module.scss";

export default function LeaderboardPage() {
  
  const LeaderTypes = [
    {
        icon: "🔥",
        title: "Самый активный",
        subtitle: "Рейтинг по количеству выполненных
активностей",
        link: "playroom/leaderboard/active"
    },
    {
        icon: "💰",
        title: "ТОП по Бонусам",
        subtitle: "Рейтинг по заработанной внутренней
валюте",
        link: "playroom/leaderboard/bonus"
    },
    {
        icon: "🏆",
        title: "ТОП по Челленджам",
        subtitle: "Рейтинг побед в соревнованиях",
        link: "playroom/leaderboard/win"
    },
    
    
  ]
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>📊 ЛИДЕРБОРДЫ</h1>
        <p className={styles.subtitle}>Выбери свою арену для соревнований!</p>

        <div className={styles.LeaderCardList}>
          <LeaderCard title />
        </div>
      </main>
    </div>
  );
}
