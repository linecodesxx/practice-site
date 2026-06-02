import styles from "./LeaderCard.module.scss";

interface LeaderCardProps {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
}

export const LeaderCard = ({
  icon,
  title,
  subtitle,
  link,
}: LeaderCardProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.icon}>{icon}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <button className={styles.button}>Войти в рейтинг →</button>
    </div>
  );
};
