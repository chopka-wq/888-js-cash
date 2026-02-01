import Link from "next/link";
import Hero from "@/components/Hero";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Hero />
      <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.content}>
          <section className={styles.section} aria-labelledby="footer-about">
            <h3 id="footer-about">About 888Starz</h3>
            <p>
              888Starz is a fast-growing international betting and casino
              platform with a strong focus on bonuses and player satisfaction.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="footer-links">
            <h3 id="footer-links">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul>
                <li>
                  <Link href="/casino">Casino</Link>
                </li>
                <li>
                  <Link href="/bonus">Bonus</Link>
                </li>
                <li>
                  <Link href="/promo-code">Promo Code</Link>
                </li>
                <li>
                  <Link href="/affiliate">Affiliate</Link>
                </li>
              </ul>
            </nav>
          </section>

          <section className={styles.section} aria-labelledby="footer-legal">
            <h3 id="footer-legal">Legal</h3>
            <nav aria-label="Legal navigation">
              <ul>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/responsible-gaming">Responsible Gaming</Link>
                </li>
              </ul>
            </nav>
          </section>

          <section className={styles.section} aria-labelledby="footer-contact">
            <h3 id="footer-contact">Contact</h3>
            <p>24/7 Customer Support</p>
            <p>Email: support@888starz.cash</p>
          </section>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {currentYear} 888Starz. All rights reserved. 18+ Only. Play
            responsibly.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
