import twstyles from "./twcatalog";
import { Sidebar } from '../../components/CatalogSidebar/Sidebar';
import { Card } from "@/components/CatalogCard/Card";
import { CartProduct } from "@/stores/cartStore";

const products: CartProduct[] = [
  {
    id: 1,
    name: 'Футболка STILT',
    price: 250,
    quantity: 1
  },
  {
    id: 2,
    name: 'Выходные в отеле',
    price: 1250,
    quantity: 1
  },
  {
    id: 3,
    name: 'Прыжок с парашютом',
    price: 2100,
    quantity: 1
  }
]

export default function Catalog() {
  return (
      <main className={twstyles.main}>
        <h1 className={twstyles.catTitle}>Каталог товаров</h1>
        <p className={twstyles.pAfterTitle}>
          Обменивайте бонусы на реальные эмоции и ценные призы
        </p>

        <section className={twstyles.section}>
          <Sidebar />
          <div className={twstyles.cards}>
            {products.map(p => (
              <Card key={p.id} id={p.id} name={p.name} 
              price={p.price} quantity={p.quantity}/>
            ))}           
          </div>
        </section>
      </main>
  );
}
