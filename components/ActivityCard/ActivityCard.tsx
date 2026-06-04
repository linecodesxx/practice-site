import styles from './ActivityCard.module.scss'

interface Activity {
    checked: string;
    title: string;
    subtitle: string;
}

interface ActivityCardProps {
    activities: Activity[];
}

export const ActivityCard = ({ activities }: ActivityCardProps) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Последние активности</h3>
            <div className={styles.list}>
                {activities.map((activity, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.header}>
                            <span className={styles.check}>{activity.checked}</span>
                            <h4 className={styles.activityTitle}>{activity.title}</h4>
                        </div>
                        <p className={styles.subtitle}>{activity.subtitle}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
