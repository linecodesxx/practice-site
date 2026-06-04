import { Badge } from "@/components/Badge/Badge";
import { ActivityCard } from "@/components/ActivityCard/ActivityCard";
import styles from "./page.module.scss";

export default function UserProfilePage() {
  const MockUser = [
    {
      userID: 1,
      avatar: "👤",
      name: "Имя",
      surname: "Фамилия",
      birthday: "2.02.2002",
      about: "Не мешайте, я работаю",
      badges: [
        {
          icon: "🏅",
          title: "Первые шаги",
          subtitle: "Зa завершение адаптации",
        },
      ],
      lastActivites: [
        {
          checked: "✅",
          title: "Цифровой детокс",
          subtitle: "Отчёт о выполнении, фото во вложении",
        },
        { checked: "✅", title: "Фокус на результат", subtitle: "done!" },
      ],
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>👤 ПРОФИЛЬ СОТРУДНИКА</h1>
        <p className={styles.subtitle}>Достижения и активности сотрудника</p>

        <section id="userinfo" className={styles.userinfo}>
          <div className={styles.namesec}>
            <div className={styles.avatar}>
              <p>{MockUser[0].avatar}</p>
            </div>
            <div className={styles.nameandbirth}>
              <h2 className={styles.name}>{MockUser[0].name + " " + MockUser[0].surname}</h2>
              <p className={styles.birthday}>{MockUser[0].birthday}</p>
              <button className={styles.giftbadge}>🎁 Подарить бейдж</button>
            </div>
          </div>
          
          <div className={styles.aboutsec}>
            <h3 className={styles.aboutTitle}>О себе</h3>
            <p className={styles.aboutText}>{MockUser[0].about}</p>
          </div>
          
          <div className={styles.badgesec}>
            <div className={styles.titlecount}>
                <h3 className={styles.badgeTitle}>Бейджи</h3>
                <p className={styles.badgeCount}>Всего: {MockUser[0].badges.length}</p>
            </div>
            
            
            <div className={styles.filterButtons}>
                <button className={styles.button_filter}>Все</button>
                <button className={styles.button_filter}>Заработанные</button>
                <button className={styles.button_filter}>Приобретенные</button>
            </div>
            <div className={styles.badgeList}>
            {MockUser[0].badges.map((badge) => {
                return (<Badge key={badge.title} icon={badge.icon} title={badge.title} subtitle={badge.subtitle} />)
            })}
            </div>
          </div>
          
          <div className={styles.lastActivitysec}>
            <ActivityCard activities={MockUser[0].lastActivites} />
          </div>
          
        
          
        </section>
      </main>
    </div>
  );
}
