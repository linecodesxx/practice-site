"use client"

import useCartStore, { CartProduct } from '@/stores/cartStore';
import twstyles from './cardStyle';
import Image from 'next/image';
import { useState } from 'react';

export function Card({ name, quantity, price, id }: CartProduct) {
    const [ isAdding, setIsAdding ] = useState(false);
    const { addItem } = useCartStore();

    const addHandler = async () => {
        try {
            addItem({
                name: name,
                id: id,
                price: price,
                quantity: quantity
            })
        } catch (error) {
            console.log(error)
        } finally {
            setIsAdding(true)
        }
    }

    return (
        <div className={twstyles.card}>
            <div className={twstyles.topCard}>
                <Image src="/assets/tshirt.png" alt='футба' width={50} height={50}/>
            </div>
            <div className={twstyles.bottomCard}>
                <h3 className={twstyles.name}>{name}</h3>
                <p className={twstyles.price}>{price} $</p>
                <button onClick={addHandler} className={twstyles.button}>
                    {!isAdding ? 'В корзину' : 'Добавлено'}
                </button>
            </div>
        </div>
    )
}
