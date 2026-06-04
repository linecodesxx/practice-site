import useCartStore from "@/stores/cartStore";
import twstyles from "./cartorderStyles";
import { useEffect, useState } from "react";

export default function CartOrder() {
    const { getTotalPrice, ensureAlwaysPresentItem, removeItem, items } = useCartStore();
    const [ isLoad, setIsLoad ] = useState<boolean>(false);

    useEffect(() => {
        ensureAlwaysPresentItem()
    },[ensureAlwaysPresentItem])

    const delay = () => new Promise((resolve) => setTimeout(resolve, 1000))
    
    const orderHandler = async () => {
        setIsLoad(true)

        try {
            await delay();
            items.forEach(item => removeItem(item.id))
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoad(false)
        }
    }

    return (
        <div className={twstyles.wrapper}>
            <h3 className={twstyles.title}>Описание заказа</h3>
            <textarea className={twstyles.input} placeholder="Комментарий к заказу (необязательно)">
            </textarea>
            <div className={twstyles.summary}>
                <span className={twstyles.summaryTitle}>Итого:</span>
                <span className={twstyles.price}  suppressHydrationWarning>{getTotalPrice()} $</span>
            </div>
            <button onClick={orderHandler} className={twstyles.button} disabled={isLoad}>
                {isLoad ? 'Оформление...' : 'Оформить'}
            </button>
        </div>
    )
}