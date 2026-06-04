"use client"

import { useState } from "react";
import { QuestItem } from "@/components/QuestItem/QuestItem";
import styles from "./page.module.scss";

const initialQuests = [
    { number: 1, title: "Экскурсия по офису", bonus: 1, completed: true },
    { number: 2, title: "Настройка рабочего места", bonus: 1, completed: true },
    { number: 3, title: "Знакомство с HR", bonus: 1, completed: false },
    { number: 4, title: "Знакомство с руководителем", bonus: 1, completed: false },
];

export default function QuestPage() {
    const [quests, setQuests] = useState(initialQuests);

    const completedCount = quests.filter((q) => q.completed).length;
    const progress = Math.round((completedCount / quests.length) * 100);

    const handleToggle = (number: number) => {
        setQuests((prev) =>
            prev.map((q) =>
                q.number === number ? { ...q, completed: !q.completed } : q
            )
        );
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.title}>🏁 АДАПТАЦИОННЫЙ КВЕСТ</h1>
                <p className={styles.subtitle}>
                    Welcome к нам! Быстрее вливайся в коллектив и получай бонусы
                </p>

                <section className={styles.questBody}>
                    <div className={styles.infoNotice}>
                        <p>
                            ⭐ Эти задания составлены для того, чтобы ты быстрее влился в
                            коллектив, познакомился с коллегами и узнал о нашей внутренней
                            жизни.
                        </p>
                    </div>

                    <div className={styles.questList}>
                        {quests.map((quest) => (
                            <QuestItem
                                key={quest.number}
                                number={quest.number}
                                title={quest.title}
                                bonus={quest.bonus}
                                completed={quest.completed}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>

                    <div className={styles.progressSection}>
                        <div className={styles.progressHeader}>
                            <span className={styles.progressText}>
                                Прогресс квеста: {progress}%
                            </span>
                        </div>
                        <div className={styles.progressBar}>
                            <div
                                className={styles.progressFill}
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.infoNotice}>
                        <p>
                            🎁 Завершите все 10 шагов и получите бонус +50 и эксклюзивный бейдж "Легенда онбординга"!
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
