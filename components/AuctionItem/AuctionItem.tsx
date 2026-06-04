import styles from './AuctionItem.module.scss'

interface AuctionItemProps {
    id: number;
    icon: string;
    title: string;
    description: string;
    actualBid: number;
    minStep: number;
    timeLeft: string;
}

export const AuctionItem = ({
    id,
    icon,
    title,
    description,
    actualBid,
    minStep,
    timeLeft,
}: AuctionItemProps) => {
    return (
        <div className={styles.container}>
            <p className={styles.itemIcon}>{icon}</p>
            <div className={styles.titleSec}>
                <h2 className={styles.itemTitle}>{title}</h2>
                <p className={styles.itemDesc}>{description}</p>
            </div>

            <div className={styles.stats}>
                <div className={styles.statRow}>
                    <span className={styles.statLabel}>Текущая ставка:</span>
                    <span className={`${styles.statValue} ${styles.highlight}`}>
                        {actualBid.toLocaleString("ru-RU")}
                        <span className={styles.coin}>🪙</span>
                    </span>
                </div>
                <div className={styles.statRow}>
                    <span className={styles.statLabel}>Мин. шаг:</span>
                    <span className={styles.statValue}>
                        {minStep}
                        <span className={styles.coin}>🪙</span>
                    </span>
                </div>
                <div className={styles.statRow}>
                    <span className={styles.statLabel}>Осталось:</span>
                    <span className={styles.statValue}>{timeLeft}</span>
                </div>
            </div>

            <div className={styles.bidSection}>
                <input
                    className={styles.bidInput}
                    type="number"
                    placeholder="Ваша ставка"
                />
                <button className={styles.bidButton}>Сделать ставку</button>
            </div>
        </div>
    );
};
