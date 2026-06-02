import { AdminButton } from "@/components/AdminButtons/AdminButton";
import styles from "./page.module.scss";

export default function AdminPage() {
  const adminButtons = [
    {
      icon: "📦",
      title: "Товары и категории",
      description: "Добавление и редактирование",
      link: "/admin/products",
    },
    {
      icon: "👨‍⚖",
      title: "Аукционы",
      description: "Создание торгов",
      link: "/admin/auctions",
    },
    {
      icon: "📝",
      title: "Опросники",
      description: "Создание квизов",
      link: "/admin/quizes",
    },

    {
      icon: "👥",
      title: "Пользователи",
      description: "Управление профилями",
      link: "/admin/users",
    },
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>⚙️ АДМИН-ПАНЕЛЬ</h1>
        <p className={styles.subtitle}>
          Личный кабинет администратора — управление системой без кода
        </p>
        <section id="admin-menu">
          <div className={styles.adminMenu}>
            {adminButtons.map((button) => {
              return (
                <AdminButton
                  key={button.title}
                  icon={button.icon}
                  title={button.title}
                  description={button.description}
                  link={button.link}
                />
              );
            })}
          </div>
        </section>

        <section id="shop-admin" className={styles.shopAdmin}>
            <div className={styles.shopHeader}>
                <h2 className={styles.titleShop}>Карточки товаров</h2>
                <button className={styles.buttonShop}>Создать новую карточку</button>
            </div>
            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.thName}>Название</th>
                            <th className={styles.thActions}>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.tdName}>Выходные в загородном отеле</td>
                            <td className={styles.tdActions}>
                                <button className={styles.btnEdit}>Редактировать</button>
                                <button className={styles.btnDelete}>Удалить</button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tdName}>Футболка STILT</td>
                            <td className={styles.tdActions}>
                                <button className={styles.btnEdit}>Редактировать</button>
                                <button className={styles.btnDelete}>Удалить</button>
                            </td>
                        </tr>
                        <tr>
                            <td className={styles.tdName}>Панама</td>
                            <td className={styles.tdActions}>
                                <button className={styles.btnEdit}>Редактировать</button>
                                <button className={styles.btnDelete}>Удалить</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
      </main>
    </div>
  );
}
