import twstyles from './playgridStyle';
import PlayroomPage from '../PlayroomPage/PlayroomPage';
import pic1 from '../../app/assets/Property 1=Default.png';
import pic2 from '../../app/assets/Property 1=Челленджи.png';
import pic3 from '../../app/assets/Property 1=Колесо Фортуны.png';
import pic4 from '../../app/assets/Property 1=Лидерборды.png';
import pic5 from '../../app/assets/Property 1=Опросники.png';
import pic6 from '../../app/assets/Property 1=Сотрудники.png';
import pic7 from '../../app/assets/Property 1=Pomodoro Таймер.png';
import pic8 from '../../app/assets/Property 1=Аукционы.png';

export default function PlayroomGrid() {
    return (
        <section className={twstyles.section}>
            <PlayroomPage image={pic1} title="Биржа задач" subtitle="Выполняйте задания и зарабатывайте бонусы"/>
            <PlayroomPage image={pic2} title="Челленджи" subtitle="Участвуйте в соревнованиях"/>
            <PlayroomPage image={pic3} title="Колесо Фортуны" subtitle="Испытайте удачу"/>
            <PlayroomPage image={pic4} title="Лидерборды" subtitle="Смотрите рейтинги"/>
            <PlayroomPage image={pic5} title="Опросники" subtitle="Зарабатывайте за опросы"/>
            <PlayroomPage image={pic6} title="Сотрудники" subtitle="Смотрите профили коллег"/>
            <PlayroomPage image={pic7} title="Pomodoro Таймер" subtitle="Работайте продуктивно и без стресса"/>
            <PlayroomPage image={pic8} title="Аукционы" subtitle="Последнее слово за вами"/>
      </section>
    )
}