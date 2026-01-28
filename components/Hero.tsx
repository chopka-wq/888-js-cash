import Image from "next/image";
import Button from "./Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeText}>+500% Welcome Bonus</span>
          </div>
          <h1 id="hero-title" className={styles.title}>
            Welcome to 888Starz
          </h1>
          <p className={styles.subtitle}>
            The ultimate online casino and sports betting experience. Join
            thousands of players and get your exclusive welcome bonus today!
          </p>
          <div className={styles.ctaGroup}>
            <Button href="https://open-step.net/ZqS7Rx" variant="primary" ariaLabel="Download for iOS" external>
              Download iOS App
            </Button>
            <Button href="https://open-step.net/ZqS7Rx" variant="secondary" ariaLabel="Download for Android" external>
              Download Android App
            </Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.phoneMockup}>
            <Image
              src="/hero-app.png"
              alt="888Starz Mobile App - Special Offers and Bonuses"
              width={400}
              height={800}
              priority
              className={styles.phoneImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
