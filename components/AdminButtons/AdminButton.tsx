import Image from "next/image";
import styles from "./AdminButton.module.scss";

interface AdminButtonProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

export const AdminButton = ({
  icon,
  title,
  description,
  link,
}: AdminButtonProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.icon}>{icon}</p>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <button className={styles.manageButton}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Управлять
        </a>
      </button>
    </div>
  );
};
