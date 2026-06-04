import { Badge } from "@/components/Badge/Badge";
import { ActivityCard } from "@/components/ActivityCard/ActivityCard";
import styles from "./page.module.scss";

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

export default function UserProfilePage() {
    const user = MockUser[0];

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.title}>👤 ПРОФИЛЬ СОТРУДНИКА</h1>
                <p className={styles.subtitle}>Достижения и активности сотрудника</p>

                <section id="userinfo" className={styles.userinfo}>
                    <div className={styles.namesec}>
                        <div className={styles.avatar}>
                            <p>{user.avatar}</p>
                        </div>
                        <div className={styles.nameandbirth}>
                            <h2 className={styles.name}>{user.name} {user.surname}</h2>
                            <p className={styles.birthday}>{user.birthday}</p>
                            <button className={styles.giftbadge}>🎁 Подарить бейдж</button>
                        </div>
                    </div>

                    <div className={styles.aboutsec}>
                        <h3 className={styles.aboutTitle}>О себе</h3>
                        <p className={styles.aboutText}>{user.about}</p>
                    </div>

                    <div className={styles.badgesec}>
                        <div className={styles.titlecount}>
                            <h3 className={styles.badgeTitle}>Бейджи</h3>
                            <p className={styles.badgeCount}>Всего: {user.badges.length}</p>
                        </div>

                        <div className={styles.filterButtons}>
                            <button className={styles.button_filter}>Все</button>
                            <button className={styles.button_filter}>Заработанные</button>
                            <button className={styles.button_filter}>Приобретенные</button>
                        </div>
                        <div className={styles.badgeList}>
                            {user.badges.map((badge) => (
                                <Badge
                                    key={badge.title}
                                    icon={badge.icon}
                                    title={badge.title}
                                    subtitle={badge.subtitle}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.lastActivitysec}>
                        <ActivityCard activities={user.lastActivites} />
                    </div>
                </section>
            </main>
        </div>
    );
}
