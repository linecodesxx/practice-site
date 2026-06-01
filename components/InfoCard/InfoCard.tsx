import styles from "./InfoCard.module.scss"

interface InfoCardProps {
    title: string;
    text: string;
}

export const InfoCard = ({ title, text }: InfoCardProps) => {
    return (
        <div className={styles.infoCard}>
            <h2 className={styles.infoCardTitle}>{title}</h2>
            <p className={styles.infoCardText}>{text}</p>
        </div>
    )
}