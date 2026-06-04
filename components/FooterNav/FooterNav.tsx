import Link from 'next/link';
import twstyles from './footerNavStyles';

const links = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/playroom", label: "Игровая комната" }
];

export default function FooterNav() {
    return (
        <div className={twstyles.container}>
            <h3 className={twstyles.navtitle}>Навигация</h3>
            <ul className={twstyles.navUl}>
                {links.map(link => (
                    <li key={link.href} className={twstyles.navLi}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}