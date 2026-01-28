import styles from "./GameProviders.module.css";

const providers = [
  { name: "NetEnt", logo: "🎰" },
  { name: "Microgaming", logo: "🎲" },
  { name: "Evolution Gaming", logo: "🎮" },
  { name: "Pragmatic Play", logo: "🎯" },
  { name: "Play'n GO", logo: "🃏" },
  { name: "Betsoft", logo: "🎪" },
  { name: "Quickspin", logo: "⚡" },
  { name: "Yggdrasil", logo: "🌳" },
];

export default function GameProviders() {
  return (
    <section className={styles.providers} aria-labelledby="providers-title">
      <div className={styles.container}>
        <h2 id="providers-title">Top Game Providers</h2>
        <p className={styles.subtitle}>
          We partner with the world's leading game developers to bring you the
          best casino experience
        </p>
        <div className={styles.grid}>
          {providers.map((provider, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.logo}>{provider.logo}</div>
              <h3>{provider.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
