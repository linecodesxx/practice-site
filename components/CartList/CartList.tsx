import twstyles from './cartlistStyle';
import Image from 'next/image';
import { TrashIcon } from 'lucide-react';
import useCartStore from '@/stores/cartStore';

export default function CartList() {
    const { removeItem, items } = useCartStore();

    return (
        <div className={twstyles.list}>
            {items.map(item => (
                <div key={item.id} className={twstyles.item}>
                    <div className={twstyles.infoWrapper}>
                        <Image className={twstyles.image} src="/assets/6913888cd2dff81e52826239a883ddf2.jpg" alt="kaif" width={80} height={80}/>
                        <div className={twstyles.info}>
                            <h3 className={twstyles.title}>{item.name}</h3>
                            <p className={twstyles.id}>id: {item.id}</p>
                            <p className={twstyles.price}>{item.price} $</p>
                        </div>
                    </div>
                    <div className={twstyles.priceWrapper}>
                        <div className={twstyles.summaryWrapper}>
                            <p className={twstyles.title}>Кол-во: {item.quantity}</p>
                            <p className={twstyles.price}>{item.quantity * item.price} $</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className={twstyles.button}>
                            <TrashIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}
