import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Casino Bonuses & Promotions - Welcome Bonus 500% | 888Starz",
  description:
    "Claim your 500% welcome bonus at 888Starz. Get exclusive casino bonuses, free spins, cashback offers, and daily promotions. Best bonus deals for new and existing players.",
  alternates: {
    canonical: "/bonus",
  },
  openGraph: {
    title: "Casino Bonuses & Promotions - Welcome Bonus 500% | 888Starz",
    description:
      "Claim your 500% welcome bonus at 888Starz. Get exclusive casino bonuses, free spins, cashback offers, and daily promotions.",
    url: "/bonus",
    siteName: "888Starz",
    type: "website",
  },
};

const bonuses = [
  {
    title: "Welcome Bonus",
    amount: "500%",
    description: "Get up to 500% on your first deposit. Use promo code WELCOME500 during registration.",
    terms: "Min. deposit $20. 40x wagering requirement.",
  },
  {
    title: "Reload Bonus",
    amount: "100%",
    description: "Get 100% bonus on every deposit you make. Available daily for all players.",
    terms: "Min. deposit $10. 30x wagering requirement.",
  },
  {
    title: "Free Spins",
    amount: "100",
    description: "Receive 100 free spins on selected slot games every week.",
    terms: "Valid on selected games. 35x wagering requirement.",
  },
  {
    title: "Cashback",
    amount: "20%",
    description: "Get 20% cashback on your losses every Monday. No wagering required!",
    terms: "Minimum loss $50. Cashback credited on Mondays.",
  },
];

export default function BonusPage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Bonus" },
        ]}
      />
      <section className={styles.hero} aria-labelledby="bonus-title">
        <div className={styles.container}>
          <h1 id="bonus-title">Casino Bonuses & Promotions</h1>
          <p className={styles.subtitle}>
            Maximize your winnings with our exclusive bonuses and promotions.
            From welcome bonuses to daily offers, we have something for everyone! Use our <Link href="/promo-code" className={styles.internalLink}>promo codes</Link> to unlock special offers.
          </p>
        </div>
      </section>

      <section className={styles.bonuses} aria-labelledby="bonus-list">
        <div className={styles.container}>
          <h2 id="bonus-list">Available Bonuses</h2>
          <p className={styles.intro}>
            Take advantage of our generous bonus offers designed to maximize
            your gaming experience and winning potential. All bonuses come with
            fair terms and conditions. Play your favorite <Link href="/casino" className={styles.internalLink}>casino games</Link> with these bonuses!
          </p>
          <div className={styles.grid}>
            {bonuses.map((bonus, index) => (
              <article key={index} className={styles.card}>
                <div className={styles.badge}>{bonus.amount}</div>
                <h3>{bonus.title}</h3>
                <p className={styles.description}>{bonus.description}</p>
                <p className={styles.terms}>{bonus.terms}</p>
                <Button href="https://open-step.net/ZqS7Rx" variant="primary" ariaLabel={`Claim ${bonus.title}`} external>
                  Claim Bonus
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.info} aria-labelledby="bonus-info">
        <div className={styles.container}>
          <h2 id="bonus-info">Understanding Bonus Terms</h2>
          <div className={styles.infoGrid}>
            <article className={styles.infoCard}>
              <h3>Wagering Requirements</h3>
              <p>
                Wagering requirements indicate how many times you need to bet
                the bonus amount before withdrawing winnings. For example, a 40x
                requirement on a $100 bonus means you need to wager $4,000.
              </p>
            </article>
            <article className={styles.infoCard}>
              <h3>Game Contributions</h3>
              <p>
                Different games contribute differently to wagering requirements.
                Slots typically contribute 100%, while table games may contribute
                less. Check game rules for specific contribution rates.
              </p>
            </article>
            <article className={styles.infoCard}>
              <h3>Maximum Bet Limits</h3>
              <p>
                When playing with bonus funds, there's usually a maximum bet
                limit per spin or hand. Exceeding this limit may void the bonus
                and any winnings.
              </p>
            </article>
            <article className={styles.infoCard}>
              <h3>Bonus Validity</h3>
              <p>
                Bonuses have expiration dates. Make sure to use your bonus within
                the specified time frame, typically 30 days from activation. New players can <Link href="/registration" className={styles.internalLink}>register</Link> to claim welcome bonuses.
              </p>
            </article>
          </div>
        </div>
      </section>
    </article>
  );
}
