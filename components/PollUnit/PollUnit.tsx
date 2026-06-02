import Link from "next/link";
import twstyles from "./pollunitStyle";


export interface PollUnitType {
    title: string,
    subtitle: string,
    profit: string,
    time: string,
    link?: string
}

export default function PollUnit(
    { title, subtitle, profit, time, link = "#" }: PollUnitType) {
        return (
            <div className={twstyles.poll}>
                <div className={twstyles.wrapper}>
                    <h3 className={twstyles.title}>{title}</h3>
                    <div className={twstyles.profit}>+{profit} бонусов</div>
                </div>
                <div className={twstyles.pCountainer}>
                    <p className={twstyles.p}>{subtitle}</p>
                </div>
                <div className={twstyles.wrapper}>
                    <p className={twstyles.p}>⏱️ {time} минут</p>
                    <Link href={`/poll${link}`}> 
                        {/* idk как работает переадресация на next */}
                        <button className={twstyles.button}>Пройти опрос →</button>
                    </Link>
                </div>
            </div>
        )
}