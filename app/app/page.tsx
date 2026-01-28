import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "888Starz Mobile App - Download iOS & Android",
  description:
    "Download the 888Starz mobile app for iOS and Android. Play casino games, bet on sports, and claim bonuses on the go. Fast, secure, and user-friendly mobile betting app.",
  openGraph: {
    title: "888Starz Mobile App - Download iOS & Android",
    description:
      "Download the 888Starz mobile app for iOS and Android. Play casino games, bet on sports, and claim bonuses on the go.",
    url: "/app",
    siteName: "888Starz",
    type: "website",
  },
};

export default function AppPage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "App" },
        ]}
      />
      <section className={styles.hero} aria-labelledby="app-title">
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 id="app-title">888Starz Mobile App</h1>
            <p className={styles.subtitle}>
              Take your favorite casino games and sports betting with you
              wherever you go. Our mobile app offers the same great experience
              as our desktop platform, optimized for your smartphone or tablet.
            </p>
            <div className={styles.downloadButtons}>
              <Button href="https://open-step.net/ZqS7Rx" variant="primary" ariaLabel="Download for iOS" external>
                Download for iOS
              </Button>
              <Button href="https://open-step.net/ZqS7Rx" variant="secondary" ariaLabel="Download for Android" external>
                Download for Android
              </Button>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/hero-app.png"
              alt="888Starz Mobile App"
              width={400}
              height={800}
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

      <section className={styles.features} aria-labelledby="app-features">
        <div className={styles.container}>
          <h2 id="app-features">App Features</h2>
          <p className={styles.intro}>
            Our mobile app brings the full 888Starz experience to your
            smartphone or tablet. Enjoy seamless gameplay, instant access to
            bonuses, and all the features you love from our desktop platform.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Full Game Library</h3>
              <p>
                Access all 500+ casino games and sports betting markets on
                mobile. Play slots, table games, live casino, and bet on sports
                wherever you are.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Fast & Secure</h3>
              <p>
                Lightning-fast loading times and bank-level security encryption.
                Your data and transactions are protected with the same security
                standards as our desktop platform.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Live Betting</h3>
              <p>
                Place bets in real-time with our live betting feature. Follow
                the action and make informed decisions as events unfold.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Push Notifications</h3>
              <p>
                Never miss a bonus or promotion with instant notifications. Get
                alerted about new games, special offers, and important account
                updates.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Touch ID / Face ID</h3>
              <p>
                Quick and secure login with biometric authentication. No need to
                remember passwords - just use your fingerprint or face
                recognition.
              </p>
            </div>
            <div className={styles.card}>
              <h3>24/7 Support</h3>
              <p>
                Get help anytime with in-app customer support chat. Our support
                team is available around the clock to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="app-benefits">
        <div className={styles.container}>
          <h2 id="app-benefits">Why Download Our App?</h2>
          <div className={styles.benefitsGrid}>
            <article className={styles.benefitCard}>
              <h3>Optimized Performance</h3>
              <p>
                Our app is specifically designed for mobile devices, offering
                faster load times, smoother animations, and better battery
                efficiency compared to mobile browsers.
              </p>
            </article>
            <article className={styles.benefitCard}>
              <h3>Offline Access</h3>
              <p>
                Some features are available offline, allowing you to browse
                games, check your account balance, and view promotions even
                without an internet connection.
              </p>
            </article>
            <article className={styles.benefitCard}>
              <h3>Exclusive App Bonuses</h3>
              <p>
                App users receive exclusive bonuses and promotions not available
                to web users. Download the app to unlock special offers and
                rewards.
              </p>
            </article>
            <article className={styles.benefitCard}>
              <h3>One-Tap Deposits</h3>
              <p>
                Save your payment methods securely in the app for one-tap
                deposits. Fund your account instantly without entering payment
                details every time.
              </p>
            </article>
          </div>
        </div>
      </section>
    </article>
  );
}
