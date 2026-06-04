import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface StoreType {
    items: CartProduct[],
    addItem: (product: CartProduct) => void,
    removeItem: (id: number) => void,
    getTotalPrice: () => number,
    ensureAlwaysPresentItem: () => void
}

export interface CartProduct {
    id: number,
    name: string,
    price: number,
    quantity: number,
}

const DEFAULT_ITEM: CartProduct = {
    id: 67,
    name: 'Отпуск',
    price: 10000,
    quantity: 1,
}

const useCartStore = create<StoreType>()(
    persist(
        (set, get) => ({
            items: [],
            addItem: (product: CartProduct) => {
                const { items } = get();
                const currentItem = items.find(i => i.id === product.id)

                if (currentItem) {
                    set({
                        items: items.map(item =>
                            item.id === product.id
                                ? { ...item, quantity: item.quantity + 1}
                                : item
                        ),
                    });
                } else {
                    set({
                        items : [...items, { ...product, quantity: 1}]
                    })
                }
            },
            removeItem: (id: number) => {
                const { items } = get();
                set({
                    items: items.filter(p => p.id !== id)
                })
            },
            getTotalPrice: () => {
                return get().items.reduce((total, item) => 
                    total + (item.price * item.quantity), 0
                )
            },
            ensureAlwaysPresentItem: () => {
                const { items, addItem } = get();
                const exists = items.some((item) => item.id === DEFAULT_ITEM.id);
                if (!exists) {
                    addItem(DEFAULT_ITEM);
                }
            },
        }),
        {
            name: 'cart-storage',
            onRehydrateStorage: () => (state) => {
            if (state) {
            state.ensureAlwaysPresentItem();
            }
            },
        }
    )
)

export default useCartStore;