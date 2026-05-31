import twstyles from "./twplayroom";
import PlayroomGrid from "@/components/PlayroomGrid/PlayroomGrid";

export default function Playroom() {
  return (
    <main className={twstyles.main}>
      <h1 className={twstyles.title}>Игровая комната</h1>
      <p className={twstyles.pAfterTitle}>
        Обменивайте бонусы на реальные эмоции и ценные призы
      </p>
      <PlayroomGrid />
    </main>
  );
}
