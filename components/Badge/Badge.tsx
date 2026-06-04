import styles from './Badge.module.scss'

interface BadgeProp{
    icon: string;
    title: string;
    subtitle: string;
}

export const Badge = ({icon, title, subtitle}: BadgeProp) => {
    return (
        <div className={styles.container}>
            <p className={styles.icon}>{icon}</p>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}