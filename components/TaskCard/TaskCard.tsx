import styles from './TaskCard.module.scss';

interface TaskCardProps {
    taskID: number;
    title: string;
    description: string;
    money: number;
    onTake?: () => void;
}

export const TaskCard = ({taskID, title, description, money, onTake}: TaskCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.text}>
                        <h3 className={styles.title}>{title}</h3>
                        <p className={styles.description}>{description}</p>
                        <button className={styles.showMore}>Показать полностью →</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <span className={styles.bonus}>+{money.toFixed(2)} БОНУСОВ</span>
                    <button className={styles.takeButton} onClick={onTake}>Взять задание →</button>
                </div>
            </div>
        </div>
    );
}