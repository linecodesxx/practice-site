import twstyles from "./challengesStyle";

interface ActiveChelType {
    title: string,
    subtitle: string,
    goal: string,
    reward: string,
    deadline: string | boolean,
    progress: number,
    bages: {
        command: boolean,
        active: boolean,
        offlinePrize: boolean,
        onlinePrize: boolean,
        single: boolean
    }
}

const ActiveChallenges: ActiveChelType[] = [
    {
        title: "Соревнование между отделами",
        subtitle: "Какой отдел быстрее выполнит 5 активностей из списка",
        goal: "Общее количество выполненных 5",
        reward: "200,00 бонусов + бейдж + Пицца",
        deadline: "до 05.09.2025 15:47",
        progress: 0,
        bages: {
            command: true,
            active: true,
            offlinePrize: true,
            onlinePrize: false,
            single: false
        }
    }
]

interface PassedChelType {
    whenClosed: string,
    currentProgress: number,
    winner: boolean | string,
    link: string,
    bages: {
        command: boolean,
        active: boolean,
        offlinePrize: boolean,
        onlinePrize: boolean,
        single: boolean
    }
}

const PassedChallenges: PassedChelType[] = [
    {
        whenClosed: "29.08.2025",
        currentProgress: 0,
        winner: false,
        link: "#",
        bages: {
            command: true,
            active: false,
            offlinePrize: false,
            onlinePrize: false,
            single: false
        }
    }
]

export default function Challenges() {
    return (
        <main className={twstyles.main}>
            <h3 className={twstyles.title}>🏆 ЧЕЛЛЕНДЖИ</h3>
            <p className={twstyles.subtitle}>
                Участвуйте в соревнованиях и зарабатывайте 
                дополнительные бонусы!
            </p>
            <section className={twstyles.section}>
                <div className={twstyles.challenges}>
                    {ActiveChallenges.map(ch => (
                        <div key={ch.title} className={`${twstyles.card} ${twstyles.active}`}>
                            <div className={twstyles.topWrapper}>
                                <h3 className={twstyles.cardTitle}>
                                    {ch.title}
                                </h3>
                                {ch.bages.command && <div className={twstyles.bagesCommand}>Командный</div>}
                                {ch.bages.active && <div className={twstyles.bagesActive}>Активный</div>}
                                {ch.bages.offlinePrize && <div className={twstyles.bagesOfflinePrize}>Оффлайн-приз</div>}
                                {ch.bages.onlinePrize && <div>Онлайн-приз</div>}
                                {ch.bages.single && <div>Соло</div>}
                            </div>
                            <p className={twstyles.p}>{ch.subtitle}</p>
                            <div className={twstyles.infoWrapper}>
                                <p className={twstyles.p}>
                                    <span className="font-extrabold">Цель: </span>
                                    {ch.goal}
                                </p>
                                <p className={twstyles.p}>
                                    <span className="font-extrabold">Награда: </span>
                                    {ch.reward}
                                </p>
                                <p className={twstyles.p}>
                                    <span className="font-extrabold">Срок: </span>
                                    {ch.deadline}
                                </p>
                            </div>
                            <div className={twstyles.bar}></div>
                            <button className={twstyles.button}>Подробнее и начать</button>
                        </div>
                    ))}
                </div>
                <div className={twstyles.challenges}>
                    {PassedChallenges.map(ch => (
                        <div key={ch.link} className={twstyles.card}>
                            <div className={twstyles.topWrapper}>
                                <h3 className={twstyles.cardTitle}>
                                    Завершенный челлендж
                                </h3>
                                {ch.bages.command && <div className={twstyles.bagesCommand}>Командный</div>}
                                {ch.bages.active && <div className={twstyles.bagesActive}>Активный</div>}
                                {ch.bages.offlinePrize && <div className={twstyles.bagesOfflinePrize}>Оффлайн-приз</div>}
                                {ch.bages.onlinePrize && <div>Онлайн-приз</div>}
                                {ch.bages.single && <div>Соло</div>}
                            </div>
                            <div className={twstyles.infoWrapper}>
                                <p className={twstyles.p}>
                                    <span className="font-extrabold">Завершен: </span>
                                    {ch.whenClosed}
                                </p>
                                <p className={twstyles.p}>
                                    <span className="font-extrabold">Ваш прогресс: </span>
                                    {ch.currentProgress}
                                </p>
                                <p className={twstyles.p}>
                                    <span className="font-extrabold">Победитель: </span>
                                    {ch.winner ? ch.winner : 'Нет победителей'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}