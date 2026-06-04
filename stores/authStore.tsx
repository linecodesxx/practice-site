import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthType {
    user: User | null,
    isAuth: boolean, 
    setUser: (user: User | null) => void,
    logout: () => void
}

interface User {
    id: string,
    email: string,
    password: string,
}

const useAuthStore = create<AuthType>()(
    persist(
        (set) => ({
            user: null,
            isAuth: false,
            setUser: (user) => set({ user, isAuth: !!user }),
            logout: () => {
               localStorage.removeItem('token');
               set({ user: null, isAuth: false }) 
            },
        }),
        {
            name: 'auth-storage'
        }
    )
)

export default useAuthStore;