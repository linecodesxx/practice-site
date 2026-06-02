"use client";

import { useState, useRef } from "react";
import styles from "./FortuneWheel.module.scss";

const BET_OPTIONS = [5, 10, 20, 30];

const SEGMENTS = [
  { label: "x0", color: "#E53E3E", multiplier: 0, description: "Попробуй еще" },
  { label: "x1", color: "#38A169", multiplier: 1, description: "Обычный приз" },
  { label: "x2", color: "#D69E2E", multiplier: 2, description: "Удаление" },
  { label: "x5", color: "#805AD5", multiplier: 5, description: "Джекпот" },
  { label: "x0", color: "#E53E3E", multiplier: 0, description: "Попробуй еще" },
  { label: "x1", color: "#38A169", multiplier: 1, description: "Обычный приз" },
  { label: "x2", color: "#D69E2E", multiplier: 2, description: "Удаление" },
  { label: "x5", color: "#805AD5", multiplier: 5, description: "Джекпот" },
];

interface HistoryEntry {
  date: string;
  amount: number;
}

export default function FortuneWheel() {
  const [balance, setBalance] = useState(2250);
  const [selectedBet, setSelectedBet] = useState(5);
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([
    { date: "01.09.2025 12:03", amount: 50 },
    { date: "22.08.2025 10:31", amount: 50 },
  ]);
  const wheelRef = useRef<HTMLDivElement>(null);

  const segmentAngle = 360 / SEGMENTS.length;

  const handleSpin = () => {
    if (isSpinning || balance < selectedBet) return;

    setIsSpinning(true);
    setResult(null);
    setBalance((prev) => prev - selectedBet);

    const winIndex = Math.floor(Math.random() * SEGMENTS.length);
    const targetAngle = ((90 - winIndex * segmentAngle) % 360 + 360) % 360;
    const spins = 5 + Math.floor(Math.random() * 3);
    const totalRotation = rotation + spins * 360 + targetAngle;

    setRotation(totalRotation);

    if (wheelRef.current) {
      wheelRef.current.style.transition =
        "transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)";
      wheelRef.current.style.transform = `rotate(${totalRotation}deg)`;
    }

    setTimeout(() => {
      setIsSpinning(false);
      const prize = SEGMENTS[winIndex];
      const won = Math.round(selectedBet * prize.multiplier * 100) / 100;

      if (won > 0) {
        setBalance((prev) => prev + won);
        setHistory((prev) => [
          {
            date: new Date().toLocaleString("ru-RU", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
            amount: won,
          },
          ...prev,
        ]);
      }

      setResult(
        `Выпало: ${prize.label} — ${prize.description}${won > 0 ? ` (+${won.toFixed(2)})` : ""}`,
      );
    }, 4200);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.balanceTitle}>Бонусные баллы:</h3>
        <p className={styles.balanceValue}>
          {balance.toLocaleString("ru-RU", { minimumFractionDigits: 2 })}
        </p>

        <div className={styles.betButtons}>
          {BET_OPTIONS.map((bet) => (
            <button
              key={bet}
              onClick={() => setSelectedBet(bet)}
              className={`${styles.betBtn} ${selectedBet === bet ? styles.active : ""}`}
            >
              {bet}
            </button>
          ))}
        </div>

        <div className={styles.wheelContainer}>
          <div className={styles.wheelOuter}>
            <div className={styles.pointerTop}>
              <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                <path d="M12 20L0 0H24L12 20Z" fill="#1a2c3e" />
              </svg>
            </div>
            <div ref={wheelRef} className={styles.wheel}>
              {SEGMENTS.map((seg, i) => {
                const angle = i * segmentAngle;
                const a1 = ((angle - segmentAngle / 2 - 90) * Math.PI) / 180;
                const a2 = ((angle + segmentAngle / 2 - 90) * Math.PI) / 180;
                const x1 = 50 + 50 * Math.cos(a1);
                const y1 = 50 + 50 * Math.sin(a1);
                const x2 = 50 + 50 * Math.cos(a2);
                const y2 = 50 + 50 * Math.sin(a2);
                return (
                  <div
                    key={i}
                    className={styles.segment}
                    style={{
                      clipPath: `polygon(50% 50%, ${x1}% ${y1}%, ${x2}% ${y2}%)`,
                      backgroundColor: seg.color,
                    }}
                  />
                );
              })}
              {SEGMENTS.map((seg, i) => {
                const angle = i * segmentAngle;
                const rad = ((angle - 90) * Math.PI) / 180;
                const x = 50 + 30 * Math.cos(rad);
                const y = 50 + 30 * Math.sin(rad);
                return (
                  <span
                    key={`label-${i}`}
                    className={styles.segmentLabel}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    {seg.label}
                  </span>
                );
              })}
              <div className={styles.wheelCenter} />
            </div>
          </div>
        </div>

        <button
          onClick={handleSpin}
          disabled={isSpinning || balance < selectedBet}
          className={styles.spinBtn}
        >
          {isSpinning ? "Крутится..." : `Крутить за ${selectedBet} балл 🎡`}
        </button>

        {result && <p className={styles.result}>{result}</p>}

        <div className={styles.prizesSection}>
          <h4 className={styles.prizesTitle}>Возможные призы:</h4>
          {SEGMENTS.filter(
            (seg, i, arr) => arr.findIndex((s) => s.label === seg.label) === i,
          ).map((seg) => (
            <div key={seg.label} className={styles.prizeRow}>
              <span className={styles.prizeMultiplier}>{seg.label}</span>
              <span className={styles.prizeDesc}>{seg.description}</span>
            </div>
          ))}
        </div>

        <div className={styles.historySection}>
          <h4 className={styles.historyTitle}>История вращений:</h4>
          {history.length === 0 && (
            <p className={styles.historyEmpty}>Пока нет вращений</p>
          )}
          {history.map((entry, i) => (
            <div key={i} className={styles.historyRow}>
              <span className={styles.historyDate}>{entry.date}</span>
              <span className={styles.historyAmount}>
                +{entry.amount.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
