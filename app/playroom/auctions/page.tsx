import { AuctionItem } from "@/components/AuctionItem/AuctionItem";
import styles from "./page.module.scss";

const auctions = [
    {
        id: 1,
        icon: "💻",
        title: "Ноутбук Apple MacBook Air",
        description: "M1, 8GB RAM, 256GB SSD",
        actualBid: 5000,
        minStep: 100,
        timeLeft: "2 дня 5 часов",
    },
    {
        id: 2,
        icon: "🎧",
        title: "Наушники Sony WH-1000XM5",
        description: "Беспроводные, шумоподавление",
        actualBid: 1200,
        minStep: 50,
        timeLeft: "1 день 3 часа",
    },
    {
        id: 3,
        icon: "👕",
        title: "Футболка с мерчем STILT",
        description: "Ограниченная серия, размер L",
        actualBid: 250,
        minStep: 10,
        timeLeft: "12 часов",
    },
];

export default function AuctionsPage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <h1 className={styles.title}>🔨 АУКЦИОНЫ</h1>
                <p className={styles.subtitle}>
                    Внутренние торги за товары из корпоративного магазина
                </p>

                <section className={styles.auctionsec}>
                    {auctions.map((item) => (
                        <AuctionItem key={item.id} {...item} />
                    ))}
                    <div className={styles.infoCard}>
                        <p className={styles.infoIcon}>ℹ️</p>
                        <p className={styles.infoText}>
                            Участвуйте в аукционах, делайте ставки и выигрывайте ценные призы
                            за внутреннюю валюту!
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
