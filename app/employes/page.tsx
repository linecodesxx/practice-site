"use client"

import { useState } from "react";
import Link from "next/link";
import { Employer } from "@/components/Employer/Employer";
import styles from "./page.module.scss";

const MockEmployers = [
    {
        userID: 1,
        avatar: "👤",
        name: "Имя",
        surname: "Фамилия",
        job: "fullstack-developer",
        department: "development",
        badges: [
            {
                icon: "🏅",
                title: "Первые шаги",
                subtitle: "Зa завершение адаптации",
            },
        ],
    },
    {
        userID: 2,
        avatar: "👤",
        name: "Обычный",
        surname: "пользователь",
        job: "junior-developer",
        department: "development",
        badges: [],
    },
    {
        userID: 3,
        avatar: "👤",
        name: "Петров Павел",
        surname: "Петрович",
        job: "Менеджер",
        department: "Продажи",
        badges: [
            {
                icon: "🏅",
                title: "Первые шаги",
                subtitle: "Зa завершение адаптации",
            },
        ],
    },
];

export default function EmployesPage() {
    const [search, setSearch] = useState("");

    const filtered = search === ""
        ? MockEmployers
        : MockEmployers.filter(e =>
            `${e.name} ${e.surname}`.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.title}>👥 СОТРУДНИКИ КОМПАНИИ</h1>
                <p className={styles.subtitle}>
                    Смотрите профили коллег, их достижения и бейджи
                </p>
                <section className={styles.employessec}>
                    <div className={styles.searchblock}>
                        <input
                            className={styles.searchinput}
                            type="text"
                            placeholder="Поиск сотрудника..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button
                            className={styles.department}
                            onClick={() => setSearch("")}
                        >
                            Все отделы
                        </button>
                    </div>

                    <div className={styles.employesList}>
                        {filtered.map((employer) => (
                            <Link
                                key={employer.userID}
                                href={`/employes/${employer.userID}`}
                                className={styles.link}
                            >
                                <Employer
                                    id={employer.userID}
                                    avatar={employer.avatar}
                                    name={employer.name}
                                    surname={employer.surname}
                                    job={employer.job}
                                    department={employer.department}
                                    badgeCount={employer.badges.length}
                                />
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
