import twstyles from "./topboardStyles";

interface TopBoardPropType {
    id: string,
    employee: string,
    specialisation: string,
    bonuces: number 
}

const TopboardProps: TopBoardPropType[] = [
    {
        id: "2",
        employee: "Имя Фамилия",
        specialisation: "Fullstack-разработка",
        bonuces: 2735.76
    },
    {
        id: "1",
        employee: "Администратор Сайта",
        specialisation: "Администрация",
        bonuces: 2239
    },
    {
        id: "20",
        employee: "Обычный пользователь",
        specialisation: "Маркетинг",
        bonuces: 1890.50
    },
    {
        id: "67",
        employee: "Елена Смирнова",
        specialisation: "Продажи",
        bonuces: 1245.30
    },
    {
        id: "23",
        employee: "Дмитрий Козлов",
        specialisation: "Разработка",
        bonuces: 987.00
    }
]

export default function TopBoard() {
    let count = 1;

    const updatedStatus = {
        current: new Date()
    }

    const placeHandler = (c: number) => {
        if (c === 1) {
            return twstyles.placeSt
        } else if (c === 2) {
            return twstyles.placeNd
        } else if (c === 3) {
            return twstyles.placeRd
        } else {
            return twstyles.placeBlank
        }
    }

    return (
        <div className={twstyles.board}>
            <div className={twstyles.titleWrapper}>
                <h3 className={twstyles.title}>🏅 ТОП по Бонусам</h3>
                <div className={twstyles.updated}>
                    Обновлено: {updatedStatus.current.toLocaleDateString()}
                </div>
            </div>
            <div className={twstyles.grid}>
                <div className={twstyles.firstUnit}>
                    <p className={twstyles.placeBlank}>#</p>
                    <div className={twstyles.firstUnitCont}>
                        <div>
                            <p>Сотрудник</p>
                        </div>
                        <p>Отдел</p>
                        <p>Бонусы</p>
                    </div>
                </div>
                {TopboardProps.map(item => (
                    <div key={item.id} className={twstyles.wrapper}>
                        <p className={placeHandler(count)}>{`${count++}`}</p>
                        <div className={twstyles.unit}>
                            <div className={twstyles.idContainer}>
                                <p className={twstyles.employee}>{item.employee}</p>
                                <span className={twstyles.id}>ID: {item.id}</span>
                            </div>
                            <p className={twstyles.specification}>{item.specialisation}</p>
                            <p className={twstyles.bonuses}>{`${item.bonuces.toFixed(2)}`}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}