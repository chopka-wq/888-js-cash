"use client";

import styles from "./SportsBetting.module.css";

const sports = [
  {
    name: "Football",
    icon: "⚽",
    description: "Bet on Premier League, Champions League, World Cup and more",
  },
  {
    name: "Basketball",
    icon: "🏀",
    description: "NBA, EuroLeague, and international basketball tournaments",
  },
  {
    name: "Tennis",
    icon: "🎾",
    description: "Grand Slams, ATP, WTA tournaments with live betting",
  },
  {
    name: "Hockey",
    icon: "🏒",
    description: "NHL, KHL, and international ice hockey competitions",
  },
];

const REFERRAL_URL = "https://open-step.net/ZqS7Rx";

export default function SportsBetting() {
  return (
    <section className={styles.sports} aria-labelledby="sports-title">
      <div className={styles.container}>
        <h2 id="sports-title">Sports Betting</h2>
        <p className={styles.subtitle}>
          Place bets on your favorite sports with competitive odds and live
          streaming. From football to hockey, we cover it all!
        </p>
        <div className={styles.grid}>
          {sports.map((sport, index) => (
            <form
              key={index}
              method="post"
              action={REFERRAL_URL}
              style={{ display: "inline" }}
              onSubmit={(e) => {
                e.preventDefault();
                window.open(REFERRAL_URL, "_blank", "noopener,noreferrer");
              }}
              className={styles.cardLink}
            >
              <button type="submit" className={styles.cardButton}>
                <article className={styles.card}>
                  <div className={styles.icon}>{sport.icon}</div>
                  <h3>{sport.name}</h3>
                  <p>{sport.description}</p>
                </article>
              </button>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
}
