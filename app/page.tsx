import { InfoCard } from "@/components/InfoCard/InfoCard";
import styles from "./page.module.scss";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { BlogCard } from "@/components/BlogCard/BlogCard";
import Link from "next/link";

const Info = [
  {
    title: "Бонусная лихорадка",
    text: "Выполни 3 задачи и получи +100 бонусов",
  },
  {
    title: "Командный забег",
    text: "Отдел разработки vs Продажи",
  },
  {
    title: "Турнирная таблица",
    text: "Топ-10 получат эксклюзивные бейджи",
  },
];

const Proudcts = [
  {
    product: "Футболка STILT",
    price: 250,
  },

  {
    product: "Выходные в отеле",
    price: 1250,
  },

  {
    product: "Прыжок с парашютом",
    price: 2100,
  },
];

const BlogPosts = [
  {
    title: "5 способов прокачать фокус через Pomodoro",
    description: "Как таймер помогает удерживать концентрацию...",
    link: "#",
  },

  {
    title: "История команды: пицца за победу в челлендже",
    description: "Отдел продаж выиграл офлайн-приз!",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Геймификация</h1>
        <p className={styles.subtitle}>
          Система мотивации и вовлечения сотрудников
        </p>

        <section id="guide-section" className={styles.guideSection}>
          <div className={styles.guidedFlex}>
            <div className={styles.guideContainer}>
              <h2 className={styles.sectionTitle}>Гид по системе мотивации</h2>
              <div className={styles.buttons}>
                <Link href="/playroom" className={styles.buttonPlayroom}>
                  Игровая комната
                </Link>
                <Link href="/catalog" className={styles.buttonBirja}>
                  Биржа задач
                </Link>
              </div>

              <div className={styles.guideIcon}>📈</div>
            </div>
          </div>
        </section>

        <div className={styles.notifynew}>
          <p className={styles.notifyTitle}>
            ✨ Новый челлендж "Суперкоманда"! 🔥 Колесо фортуны: джекпот! 📊
            Лидерборды обновлены!
          </p>
        </div>

        <div className={styles.infoBlocks}>
          {Info.map((item) => {
            return (
              <InfoCard key={item.title} title={item.title} text={item.text} />
            );
          })}
        </div>

        <div className={styles.rules}>
          <h2 className={styles.rulesTitle}>Основные правила геймификации</h2>
          <p className={styles.rulesText}>
            🏅 Выполняй задания — зарабатывай бонусы. 🎯 Участвуй в челленджах.
            🛍️ Обменивай баллы на товары.
          </p>
        </div>

        <section id="mini-catalog" className={styles.miniCatalog}>
          <h2 className={styles.catalogSectionTitle}> Товары из каталога </h2>
          <div className={styles.products}>
            {Proudcts.map((item) => (
              <ProductCard
                key={item.product}
                product={item.product}
                price={item.price}
              />
            ))}
          </div>
        </section>

        <section id="company-blog" className={styles.companyBlog}>
          <h2 className={styles.blogSectionTitle}> Блог компании </h2>
          <div className={styles.blogPosts}>
            {BlogPosts.map((item) => (
              <BlogCard
                key={item.title}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </section>

        <section id="feedback" className={styles.feedback}>
          <h2 className={styles.feedbackSectionTitle}> Обратная связь </h2>
          <div className={styles.feedbackForm}>
            <form action='/feedback' method="post" className={styles.form}>
              <div className={styles.nameEmail}></div>
                <input className={styles.input} type="text" placeholder="Ваше имя" />
                <input className={styles.input} type="email" placeholder="Ваш email" />
              <div className={styles.message}>
                <textarea className={styles.textarea} placeholder="Ваше сообщение"></textarea>
              </div>

              <button type="submit" className={styles.submitButton}>
                Отправить
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
