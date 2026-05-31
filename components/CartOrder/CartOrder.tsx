import { ItemType } from "@/app/cart/page";
import twstyles from "./cartorderStyles";

export default function CartOrder({ items }: { items: ItemType[] }) {
    const total = items.reduce((prev, curr) => prev + curr.price, 0);

    return (
        <div className={twstyles.wrapper}>
            <h3 className={twstyles.title}>Описание заказа</h3>
            <textarea className={twstyles.input} placeholder="Комментарий к заказу (необязательно)">
            </textarea>
            <div className={twstyles.summary}>
                <span className={twstyles.summaryTitle}>Итого:</span>
                <span className={twstyles.price}>{total} $</span>
            </div>
            <button className={twstyles.button}>
                Оформить
            </button>
        </div>
    )
}