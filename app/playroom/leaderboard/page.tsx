import { LeaderCard } from "@/components/LeaderCard/LeaderCard";
import twstyles from "./leaderboardStyles";
import TopBoard from "@/components/TOPboard/TopBoard";

export default function LeaderboardPage() {
  
  const LeaderTypes = [
    {
        icon: "🔥",
        title: "Самый активный",
        subtitle: "Рейтинг по количеству выполненных активностей",
        link: "playroom/leaderboard/active"
    },
    {
        icon: "💰",
        title: "ТОП по Бонусам",
        subtitle: "Рейтинг по заработанной внутренней валюте",
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
    <main className={twstyles.main}>
      <h1 className={twstyles.title}>📊 ЛИДЕРБОРДЫ</h1>
      <p className={twstyles.subtitle}>Выбери свою арену для соревнований!</p>
      <section className={twstyles.section}>
        <div className={twstyles.LeaderCardList}>
          {LeaderTypes.map(card => (
            <LeaderCard icon={card.icon} title={card.title} 
            subtitle={card.subtitle} link={card.link} key={card.link} />
          ))}
        </div>
        <TopBoard />
      </section>
    </main>
  );
}
