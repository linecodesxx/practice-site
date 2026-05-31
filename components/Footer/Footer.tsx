import FooterNav from "../FooterNav/FooterNav";
import twstyles from "./footerStyles";
import Image from "next/image";
import logo from '../../app/assets/logo.png'


export default function Footer() {
    return (
        <footer className={twstyles.footer}>
            <div className={twstyles.wrapper}>
                <div className={twstyles.top}>
                    <Image src={logo} alt="logo" width={75} height={75} />
                    <FooterNav />
                    <div className={twstyles.contacts}>
                        <h3 className={twstyles.contactTitle}>Контакты</h3>
                        <a href="#" type="mail">Да@gmil.ru</a>
                        <a href="#" type="tel">+7 (495) 123-45-67</a>
                    </div>
                </div>
                <div className={twstyles.bottom}>
                    <p>© 2026 Геймификация</p>
                </div>
            </div>
        </footer>
    )
}