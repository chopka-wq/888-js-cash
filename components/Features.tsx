import styles from "./Features.module.css";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🎰",
    title: "500+ Casino Games",
    description: "Play the best slots, table games, and live casino from top providers.",
  },
  {
    icon: "⚽",
    title: "Sports Betting",
    description: "Bet on your favorite sports with competitive odds and live streaming.",
  },
  {
    icon: "🎁",
    title: "Exclusive Bonuses",
    description: "Get up to 500% welcome bonus and daily promotions for all players.",
  },
  {
    icon: "💳",
    title: "Fast Payments",
    description: "Instant deposits and withdrawals with multiple payment methods.",
  },
  {
    icon: "🔒",
    title: "Secure & Licensed",
    description: "Fully licensed and regulated with SSL encryption for your safety.",
  },
  {
    icon: "📱",
    title: "Mobile Optimized",
    description: "Play anywhere, anytime with our mobile-optimized platform and apps.",
  },
];

export default function Features() {
  return (
    <section className={styles.features} aria-labelledby="features-title">
      <div className={styles.container}>
        <h2 id="features-title" className={styles.title}>
          Why Choose 888Starz?
        </h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
