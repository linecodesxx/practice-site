import styles from "./QuestItem.module.scss";

interface QuestItemProps {
    number: number;
    title: string;
    bonus: number;
    completed: boolean;
    onToggle?: (number: number) => void;
}

export const QuestItem = ({
    number,
    title,
    bonus,
    completed,
    onToggle,
}: QuestItemProps) => {
    return (
        <div
            className={`${styles.questItem} ${completed ? styles.completed : ""}`}
        >
            <div
                className={`${styles.number} ${completed ? styles.numberDone : ""}`}
            >
                {number}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.info}>
                    <span className={styles.bonus}>+{bonus},0 бонусов</span>
                    {completed ? (
                        <span className={styles.statusDone}>✅ Выполнено</span>
                    ) : (
                        <button
                            className={styles.statusBtn}
                            onClick={() => onToggle?.(number)}
                        >
                            Отметить выполненным
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
