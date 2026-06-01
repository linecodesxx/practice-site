"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingCart, User } from "lucide-react";
import styles from "./Navbar.module.scss";

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/playroom", label: "Игровая комната" },
  { href: "/admin", label: "Админ-панель" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <span className={styles.logoMark}>Т</span>
          Тест
        </div>
      </div>

      <div className={styles.center}>
        <ul className={styles.menu}>
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive ? styles.active : ""}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={styles.right}>
        <label className={styles.search}>
          <button type="submit" className={styles.searchIcon}>
            <Search size={16} />
          </button>
          <input type="search" placeholder="Search" aria-label="Search" />
        </label>
        <button type="button" className={styles.action}>
          Log in
        </button>
        <button type="button" className={styles.account}>
          <Link href="/cart">
            <ShoppingCart size={20} />
          </Link>
        </button>
        <button type="button" className={styles.account}>
          <Link href="/profile">
            <User size={20} />
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
