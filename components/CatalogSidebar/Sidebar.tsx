import Link from 'next/link';
import twstyles from './sidebarStyles';

export function Sidebar() {
    return (
        <div className={twstyles.sidebar}>
            <h1 className={twstyles.sbTitle}>Категории</h1>
            <ul className={twstyles.sbUl}>
                <Link href='#'>
                    <li className={twstyles.sbLi}>Впечатления и события</li>
                </Link>
                <Link href='#'>
                    <li className={twstyles.sbLi}>Гаджеты и тех-мерч</li>
                </Link>
                <Link href='#'>
                    <li className={twstyles.sbLi}>Одежда и текстиль</li>
                </Link>
                <Link href='#'>
                    <li className={twstyles.sbLi}>Полезные мелочи</li>
                </Link>
            </ul>
        </div>
    )
}