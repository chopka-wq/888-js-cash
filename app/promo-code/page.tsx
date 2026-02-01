import type { Metadata } from "next";
import Link from "next/link";
import PromoCode from "@/components/PromoCode";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Promo Code - Get 500% Welcome Bonus | 888Starz",
  description:
    "Use promo code WELCOME500 to claim your 500% welcome bonus at 888Starz. Exclusive promo codes for new players. Limited time offer!",
  alternates: {
    canonical: "/promo-code",
  },
  openGraph: {
    title: "Promo Code - Get 500% Welcome Bonus | 888Starz",
    description:
      "Use promo code WELCOME500 to claim your 500% welcome bonus at 888Starz. Exclusive promo codes for new players.",
    url: "/promo-code",
    siteName: "888Starz",
    type: "website",
  },
};

export default function PromoCodePage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Promo code" },
        ]}
      />
      <section className={styles.hero} aria-labelledby="promo-title">
        <div className={styles.container}>
          <h1 id="promo-title">Exclusive Promo Code</h1>
          <p className={styles.subtitle}>
            Claim your exclusive welcome <Link href="/bonus" className={styles.internalLink}>bonus</Link> using our special promo code.
            Limited time offer - don't miss out!
          </p>
        </div>
      </section>

      <PromoCode />

      <section className={styles.instructions} aria-labelledby="instructions-title">
        <div className={styles.container}>
          <h2 id="instructions-title">How to Use Your Promo Code</h2>
          <ol className={styles.steps}>
            <li>
              <div className={styles.stepContent}>
                <h3>Register an Account</h3>
                <p>Create your free 888Starz account in just a few minutes. Learn more about the <Link href="/registration" className={styles.internalLink}>registration</Link> process.</p>
              </div>
            </li>
            <li>
              <div className={styles.stepContent}>
                <h3>Enter the Promo Code</h3>
                <p>During registration, enter the promo code WELCOME500 in the designated field.</p>
              </div>
            </li>
            <li>
              <div className={styles.stepContent}>
                <h3>Make Your First Deposit</h3>
                <p>Deposit a minimum of $20 to activate your bonus and start playing <Link href="/casino" className={styles.internalLink}>casino games</Link>.</p>
              </div>
            </li>
            <li>
              <div className={styles.stepContent}>
                <h3>Claim Your Bonus</h3>
                <p>Your 500% welcome bonus will be automatically credited to your account!</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </article>
  );
}
