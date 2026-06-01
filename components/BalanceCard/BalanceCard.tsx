import twstyles from "./balancecardStyle";

interface BalanceType {
    current: number,
    overallSpended: number,
    overallEarned: number
}

const balanceState: BalanceType = {
    current: 2735.76,
    overallSpended: 2176.00,
    overallEarned: 707.76
}

export default function BalanceCard() {
    return (
        <div className={twstyles.balanceCard}>
            <h3 className={twstyles.title}>💸 Баланс</h3>
            <div className={twstyles.wrapper}>
                <div className={twstyles.units}>
                    <label className={twstyles.labels}>Текущий баланс:</label>
                    <p className={twstyles.stats}>{balanceState.current.toFixed(2) + ' 💵'}</p>
                </div>
                <div className={twstyles.units}>
                    <label className={twstyles.labels}>Общая сумма зачислений:</label>
                    <p className={twstyles.stats}>{balanceState.overallEarned.toFixed(2) + ' 💵'}</p>
                </div>
                <div className={twstyles.units}>
                    <label className={twstyles.labels}>Общая сумма затрат:</label>
                    <p className={twstyles.stats}>{balanceState.overallSpended.toFixed(2) + ' 💵'}</p>
                </div>
            </div>
        </div>
    )
}