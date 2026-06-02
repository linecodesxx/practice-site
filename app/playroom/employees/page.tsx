"use client"

import Link from "next/link";
import twstyles from "./employeesStyle";
import { useState } from "react";

interface EmployeeType {
    name: string,
    post: string,
    worktype: "development" | "Продажи" | "Маркетинг" | "Прочее",
    bageSummary: number,
    link?: string
}

const employees: EmployeeType[] = [
    {
        name: "Имя Фамилия",
        post: "fullstack-developer",
        worktype: "development",
        bageSummary: 1,
        link: "employees/1"
    },
    {
        name: "Обычный пользователь",
        post: "junior-developer",
        worktype: "development",
        bageSummary: 0,
        link: "employees/2"
    },
    {
        name: "Петров Павел Петрович",
        post: "Менеджер",
        worktype: "Продажи",
        bageSummary: 1,
        link: "employees/3"
    }
]

export default function Employees() {
    const [current, setCurrent] = useState<null | string>(null);

    const filter = (): EmployeeType[] => {
        const filterByName = employees.filter(e => {
            if (current === null || current === "") return [];
            const filfil = e.name.toLowerCase().includes(current.toLowerCase())
            return filfil;
        })

        return filterByName;
    }

    const filtered = filter();

    return (
        <main className={twstyles.main}>
            <h1 className={twstyles.title}>
                👥 СОТРУДНИКИ КОМПАНИИ
            </h1>
            <p className={twstyles.subtitle}>
                Смотрите профили коллег, их достижения и бейджи
            </p>
            <section className={twstyles.section}>
                <div className={twstyles.searchBar}>
                    <input onChange={(e) => setCurrent(e.target.value)} className={twstyles.input} type="text" placeholder="Поиск сотрудника..." />
                    <button onClick={() => setCurrent('')} className={twstyles.searchBtn}>Все отделы</button>
                </div>
                <div className={twstyles.grid}>
                    {filtered.map(e => (
                        <div className={twstyles.page} key={e.name}>
                            <p className={twstyles.avatar}>👤</p>
                            <div className={twstyles.wrapper}>
                                <h3 className={twstyles.name}>{e.name}</h3>
                                <p className={twstyles.post}>{e.post}</p>
                                <p className={twstyles.worktype}>{e.worktype}</p>
                                <div className={twstyles.info}>
                                    {e.bageSummary >= 1
                                        ? <div className={twstyles.bageState}>🏅 1 бейдж</div>
                                        : <div className={twstyles.bageState}>🎯 0 бейджей</div>}

                                    <Link href={e.link ?? '/'}>
                                        <button className={twstyles.button}>
                                            Смотреть профиль →
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}