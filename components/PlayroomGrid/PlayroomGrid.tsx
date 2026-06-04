import twstyles from "./playgridStyle";
import PlayroomPage from "../PlayroomPage/PlayroomPage";

const pic1 = "/assets/Property 1=Default.png";
const pic2 = "/assets/Property 1=Челленджи.png";
const pic3 = "/assets/Property 1=Колесо Фортуны.png";
const pic4 = "/assets/Property 1=Лидерборды.png";
const pic5 = "/assets/Property 1=Опросники.png";
const pic6 = "/assets/Property 1=Сотрудники.png";
const pic7 = "/assets/Property 1=Pomodoro Таймер.png";
const pic8 = "/assets/Property 1=Аукционы.png";

export default function PlayroomGrid() {
  return (
    <section className={twstyles.section}>
      <PlayroomPage
        link="playroom/birja-zadach"
        image={pic1}
        title="Биржа задач"
        subtitle="Выполняйте задания и зарабатывайте бонусы"
      />
      <PlayroomPage
        link="playroom/challenges"
        image={pic2}
        title="Челленджи"
        subtitle="Участвуйте в соревнованиях"
      />
      <PlayroomPage
        link="playroom/fortune-wheel"
        image={pic3}
        title="Колесо Фортуны"
        subtitle="Испытайте удачу"
      />
      <PlayroomPage
        link="playroom/leaderboard"
        image={pic4}
        title="Лидерборды"
        subtitle="Смотрите рейтинги"
      />
      <PlayroomPage
        link="playroom/poll"
        image={pic5}
        title="Опросники"
        subtitle="Зарабатывайте за опросы"
      />
      <PlayroomPage
        link="employes"
        image={pic6}
        title="Сотрудники"
        subtitle="Смотрите профили коллег"
      />
      <PlayroomPage
        link=""
        image={pic7}
        title="Pomodoro Таймер"
        subtitle="Работайте продуктивно и без стресса"
      />
      <PlayroomPage
        link="playroom/auctions"
        image={pic8}
        title="Аукционы"
        subtitle="Последнее слово за вами"
      />
    </section>
  );
}
