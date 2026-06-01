import twstyles from "./profiledependenciesStyle";


type DepTypes = "edit" | "linking" | "achievments";

export default function ProfileDependencies({ type }: { type: DepTypes }) {
    if (type === "edit") {
        return (
            <div className={twstyles.card}>
                <h2 className={twstyles.title}>⚙️ Изменить информацию</h2>
                <form className={twstyles.form}>
                    <div className={twstyles.units}>
                        <label className={twstyles.labels}>ФИО</label>
                        <input className={twstyles.inputs} type="text" placeholder="Иван Иванов" />
                    </div>
                    <div className={twstyles.units}>
                        <label className={twstyles.labels}>Телефон</label>
                        <input className={twstyles.inputs} type="tel" placeholder="+7 (999) 123-45-67"/>
                    </div>
                    <div className={twstyles.units}>
                        <label className={twstyles.labels}>E-mail</label>
                        <input className={twstyles.inputs} type="text" placeholder="ivan@company.ru" />
                    </div>
                    <div className={twstyles.units}>
                        <label className={twstyles.labels}>О себе</label>
                        <input className={twstyles.textarea} placeholder="Не мешайте, я не работаю" />
                    </div>
                    <button className={twstyles.button} type="submit">Сохранить изменения</button>
                </form>
            </div>
        )
    } else if (type === "linking") {
        return (
            <div className={twstyles.card}>
                <h2 className={twstyles.title}>⚡ Приватный телефон</h2>
                <p className={twstyles.linkingP}>
                    Отправим ссылку для привязки Telegram
                    аккаунта на указанный e-mail.
                </p>
                <button className={twstyles.button}>
                    Привязать Telegram
                </button>
            </div>
        )
    } else if (type === "achievments") {
        return (
            <div className={twstyles.card}>
                <h2 className={twstyles.title}>🏆 Мои достижения</h2>
                <div className={twstyles.achievmentsDiv}>
                    <div className={twstyles.achievments}>
                        <p className={twstyles.achievmentsP}>
                            🎯 Первые шаги
                        </p>
                    </div>
                    <div className={twstyles.achievments}>
                        <p className={twstyles.achievmentsP}>
                            📈 Продуктивный день
                        </p>
                    </div>
                    <div className={twstyles.achievments}>
                        <p className={twstyles.achievmentsP}>
                            👑 Топ-3 недели
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}