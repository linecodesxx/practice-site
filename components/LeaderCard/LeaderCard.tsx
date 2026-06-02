import Link from 'next/link';
import twstyles from './leadercardStyles';

interface LeaderCardProps {
  icon: string;
  title: string;
  subtitle: string;
  link: string;
  className?: string
}

export const LeaderCard = ({
  icon,
  title,
  subtitle,
  link,
}: LeaderCardProps) => {
  return (
    <div className={twstyles.container}>
      <div className={twstyles.wrapper}>
        <span className={twstyles.icon}>{icon}</span>
        <h3 className={twstyles.title}>{title}</h3>
        <p className={twstyles.subtitle}>{subtitle}</p>
      </div>
      <Link href={link}>
        <button className={twstyles.button}>Войти в рейтинг →</button>
      </Link>
    </div>
  );
};
