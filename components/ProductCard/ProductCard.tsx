import styles from './ProductCard.module.scss';

interface ProductCardProps {
    product: string;
    price: number;
}

export const ProductCard = ({ product, price }: ProductCardProps) => {


return (
    <div className={styles.productCard}>
    {/* image */}
        <div className={styles.productImage}>meow</div>
        
        {/* info */}
        <div className={styles.productInfo}>
            <h3 className={styles.productName}>{product}</h3>
            
            <div className={styles.PriceContainer}>
                <p className={styles.productPrice}>{price}</p>
            </div>
            
            <button className={styles.toCartButton}>В корзину</button>
        </div>
        
    </div>
)}