import styles from "./Employer.module.scss";

interface EmployerProps {
  id: number;
  avatar: string;
  name: string;
  surname: string;
  job: string;
  department: string;
  badgeCount: number;
}

export const Employer = ({
  avatar,
  name,
  surname,
  job,
  department,
  badgeCount,
}: EmployerProps) => {
  return (
    <div className={styles.employer_card}>
      <div className={styles.namesec}>
        <div className={styles.avatar}>
          <p>{avatar}</p>
        </div>
        <div className={styles.nameandjob}>
          <h2 className={styles.name}>{name + " " + surname}</h2>
          <p className={styles.job}>{job}</p>
          <p className={styles.department}>{department}</p>
          <div className={styles.info}>
            <span className={styles.badgeCount}>
              {badgeCount >= 1 ? "🏅" : "🎯"} {badgeCount} {badgeCount === 1 ? "бейдж" : "бейджей"}
            </span>
            <span className={styles.viewProfile}>Смотреть профиль →</span>
          </div>
        </div>
      </div>
    </div>
  );
};
