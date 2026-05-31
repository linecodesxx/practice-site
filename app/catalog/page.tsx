import twstyles from "./twcatalog";
import { Sidebar } from '../../components/CatalogSidebar/Sidebar';
import { Card } from "@/components/CatalogCard/Card";

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
            <Card title="Футболка STILT" price={250} />
            <Card title="Футболка STILT" price={250} />
            <Card title="Футболка STILT" price={250} />            
          </div>
        </section>
      </main>
  );
}
