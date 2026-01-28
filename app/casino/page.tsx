import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Online Casino Games - Slots, Table Games & Live Casino | 888Starz",
  description:
    "Play over 500 online casino games at 888Starz. Enjoy slots, blackjack, roulette, baccarat, and live dealer games from top providers. Best RTP rates and exciting jackpots.",
  openGraph: {
    title: "Online Casino Games - Slots, Table Games & Live Casino | 888Starz",
    description:
      "Play over 500 online casino games at 888Starz. Enjoy slots, blackjack, roulette, baccarat, and live dealer games.",
    url: "/casino",
    siteName: "888Starz",
    type: "website",
  },
};

const gameCategories = [
  {
    title: "Slots",
    description: "Over 300 slot games with various themes, bonus features, and progressive jackpots.",
    image: "/slots.svg",
  },
  {
    title: "Live Casino",
    description: "Experience real dealers and authentic casino atmosphere with our live casino games.",
    image: "/live-casino.svg",
  },
  {
    title: "Table Games",
    description: "Classic table games including blackjack, roulette, baccarat, and poker variants.",
    image: "/table-games.svg",
  },
  {
    title: "TV Games",
    description: "Interactive TV-style games with live presenters and exciting game shows.",
    image: "/tv-games.svg",
  },
];

export default function CasinoPage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Casino" },
        ]}
      />
      <section className={styles.hero} aria-labelledby="casino-title">
        <div className={styles.container}>
          <h1 id="casino-title">Online Casino Games</h1>
          <p className={styles.subtitle}>
            Discover our extensive collection of premium casino games from
            leading providers. Play slots, table games, live casino, and more!
          </p>
        </div>
      </section>

      <section className={styles.categories} aria-labelledby="game-categories">
        <div className={styles.container}>
          <h2 id="game-categories">Game Categories</h2>
          <p className={styles.intro}>
            Explore our diverse collection of casino games, each category offering
            unique experiences and winning opportunities. From classic slots to
            immersive live dealer games, find your perfect match.
          </p>
          <div className={styles.grid}>
            {gameCategories.map((category, index) => (
              <article key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.details} aria-labelledby="game-details">
        <div className={styles.container}>
          <h2 id="game-details">Why Choose Our Casino Games?</h2>
          <div className={styles.detailsGrid}>
            <article className={styles.detailCard}>
              <h3>Fair Play Guaranteed</h3>
              <p>
                All our games use certified Random Number Generators (RNG) to
                ensure fair and random outcomes. We're regularly audited by
                independent testing agencies.
              </p>
            </article>
            <article className={styles.detailCard}>
              <h3>High RTP Rates</h3>
              <p>
                Our games feature competitive Return to Player (RTP) rates,
                giving you better chances to win. Most slots have RTP rates
                above 96%.
              </p>
            </article>
            <article className={styles.detailCard}>
              <h3>Progressive Jackpots</h3>
              <p>
                Win life-changing amounts with our progressive jackpot games.
                Jackpots grow with every bet placed and can reach millions.
              </p>
            </article>
            <article className={styles.detailCard}>
              <h3>Mobile Optimized</h3>
              <p>
                Play anywhere, anytime. All our games are fully optimized for
                mobile devices, offering the same quality experience on
                smartphones and tablets.
              </p>
            </article>
          </div>
        </div>
      </section>
    </article>
  );
}
