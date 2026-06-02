import PollUnit from '@/components/PollUnit/PollUnit';
import twstyles from './pollStyles';
import { Info } from 'lucide-react';

const poolOfPolls = [
    {
        id: "1",
        title: "Удовлетворенность работой",
        subtitle: "Расскажите, насколько вы довольны своей работой, коллективом и условиями труда.",
        profit: "50",
        time: "5"
    },
    {
        id: "2",
        title: "Идеи для улучшения",
        subtitle: "Поделитесь своими идеями по улучшению рабочих процессов и корпоративной культуры.",
        profit: "75",
        time: "10"
    },
    {
        id: "3",
        title: "Оценка обучения",
        subtitle: "Оцените качество проведенных тренингов и предложите темы для будущих обучений.",
        profit: "40",
        time: "3"
    },
    {
        id: "4",
        title: "Командный дух",
        subtitle: "Как вы оцениваете взаимодействие в команде? Есть ли что улучшить?",
        profit: "60",
        time: "7"
    }
]

export default function Poll() {
    return (
        <main className={twstyles.main}>
            <h1 className={twstyles.title}>📝 ОПРОСНИКИ</h1>
            <p className={twstyles.subtitle}>
                Проходите опросы и получайте бонусы за обратную связь
            </p>
            <section className={twstyles.section}>
                <div className={twstyles.grid}>
                    {poolOfPolls.map(poll => (
                        <PollUnit key={poll.id} title={poll.title} 
                        time={poll.time} subtitle={poll.subtitle} profit={poll.profit} link={poll.id} />
                    ))}
                </div>
                <div className={twstyles.sectionAfter}>
                    <Info/>
                    <span>
                        Прохождение опросов помогает компании стать лучше, 
                        а вы получаете бонусы за ваше мнение!
                    </span>
                </div>
            </section>
        </main>
    )
}