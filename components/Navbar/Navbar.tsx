"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Astroid, Search, ShoppingCart, User, X } from "lucide-react";
import styles from "./Navbar.module.scss";
import twstyles from "./navbarStyles";
import { useState } from 'react';
import useCartStore from "@/stores/cartStore";

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/playroom", label: "Игровая комната" },
  { href: "/admin", label: "Админ-панель" },
];

const Navbar = () => {
  const { items } = useCartStore();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <Link href="/quests"> 
            <Astroid size={20}/>
          </Link>
        </button>
        <button type="button" className={styles.account}>
          <Link href="/cart">
            <ShoppingCart size={20} />
          </Link>
          {items.length <= 0 ? null : 
          (<div className={twstyles.circle}>
            {items.length}
          </div>
          )}
        </button>
        <button type="button" className={styles.account}>
          <Link href="/profile">
            <User size={20} />
          </Link>
        </button>
        <button
          type="button"
          className={styles.burger}
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
      </div>
      {isOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileNav}>
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
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.mobileActions}>
            <label className={styles.mobileSearch}>
              <button type="submit" className={styles.searchIcon}>
                <Search size={16} />
              </button>
              <input type="search" placeholder="Search" aria-label="Search" />
            </label>
            <div className={styles.mobileSection}>
            <span className={styles.mobileSectionTitle}>Аккаунт</span>
              <div className={styles.mobileActions}>
                <button type="button" className={styles.action}>
                  Log in
                </button>
                <button
                  type="button"
                  className={styles.account}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/cart" className={styles.mobileActionLink}>
                    <ShoppingCart size={20} />
                    <span>Корзина</span>
                  </Link>
                </button>
                <button
                  type="button"
                  className={styles.account}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/profile" className={styles.mobileActionLink}>
                    <User size={20} />
                    <span>Профиль</span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
