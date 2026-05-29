import twstyles from './cardStyle';
import tshirt from '../../app/assets/tshirt.png'
import Image from 'next/image';

export function Card({ title, price }: { title: string, price: number }) {
    return (
        <div className={twstyles.card}>
            <div className={twstyles.topCard}>
                <Image src={tshirt} alt='футба' width={50} height={50}/>
            </div>
            <div className={twstyles.bottomCard}>
                <h3 className={twstyles.name}>{title}</h3>
                <p className={twstyles.price}>{price}</p>
                <button className={twstyles.button}>В корзину</button>
            </div>
        </div>
    )
}