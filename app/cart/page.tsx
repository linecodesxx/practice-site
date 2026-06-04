"use client"

import { Info } from 'lucide-react';
import twstyles from './twcart';
import CartOrder from '@/components/CartOrder/CartOrder';
import CartList from '@/components/CartList/CartList';
import useCartStore from '@/stores/cartStore';

export default function Cart() {
    const { items } = useCartStore();


    if (items.length <= 0) {
        return (
            <main className={twstyles.plug}>
                <h1 className={twstyles.title}>Корзина</h1>
                <p className={twstyles.pAfterTitle}>
                    Ваша корзина пуста!
                </p>
            </main>
        )
    }

    return (
        <main className={twstyles.main}>
            <h1 className={twstyles.title}>Корзина</h1>
            <p className={twstyles.pAfterTitle}>
                Проверьте заказ и подтвердите покупку
            </p>
            <section className={twstyles.section}>
                <div className={twstyles.wrapper}>
                    <CartList />
                    <CartOrder />
                </div>
                <div className={twstyles.cartafter}>
                    <Info/>
                    <span>
                        Корзина — это финальный шаг, 
                        где бонусы превращаются в реальные покупки.
                    </span>
                </div>
            </section>
        </main>
    )
}