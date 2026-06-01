import BalanceCard from '@/components/BalanceCard/BalanceCard';
import twstyles from './profileStyles';
import ProfileDependencies from '../../components/ProfileDependencies/ProfileDependencies';

export default function Profile() {
    return (
        <main className={twstyles.main}>
            <h1 className={twstyles.title}>Личный кабинет</h1>
            <p className={twstyles.pAfterTitle}>
                Управляйте своим профилем и следите за балансом
            </p>
            <section className={twstyles.section}>
                <BalanceCard />
                <div className={twstyles.gridDiv}>
                    <ProfileDependencies type="edit" />
                    <ProfileDependencies type="linking" />
                    <ProfileDependencies type="achievments" />
                </div>
            </section>
        </main>
    )
}