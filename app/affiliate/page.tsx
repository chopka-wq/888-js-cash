import type { Metadata } from "next";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Affiliate Program - Earn Commissions | 888Starz",
  description:
    "Join the 888Starz affiliate program and earn generous commissions. Promote our casino and sports betting platform and get paid for every player you refer.",
  alternates: {
    canonical: "/affiliate",
  },
  openGraph: {
    title: "Affiliate Program - Earn Commissions | 888Starz",
    description:
      "Join the 888Starz affiliate program and earn generous commissions. Promote our casino and sports betting platform.",
    url: "/affiliate",
    siteName: "888Starz",
    type: "website",
  },
};

const benefits = [
  "Up to 45% revenue share commission",
  "Real-time statistics and reporting",
  "Dedicated affiliate manager support",
  "Marketing materials and banners",
  "Multiple payment methods",
  "No negative carryover",
  "Lifetime player tracking",
];

export default function AffiliatePage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Affiliate" },
        ]}
      />
      <section className={styles.hero} aria-labelledby="affiliate-title">
        <div className={styles.container}>
          <h1 id="affiliate-title">888Starz Affiliate Program</h1>
          <p className={styles.subtitle}>
            Join our affiliate program and start earning generous commissions
            by promoting the best online casino and sports betting platform.
          </p>
        </div>
      </section>

      <section className={styles.content} aria-labelledby="program-benefits">
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <div className={styles.textContent}>
              <h2 id="program-benefits">Why Join Our Affiliate Program?</h2>
              <p>
                The 888Starz affiliate program offers one of the most competitive
                commission structures in the industry. Whether you're a website
                owner, blogger, or influencer, you can monetize your traffic by
                promoting our platform.
              </p>
              <ul className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <Button href="https://open-step.net/ZqS7Rx" variant="primary" ariaLabel="Join Affiliate Program" external>
                Join Affiliate Program
              </Button>
            </div>
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <div className={styles.statValue}>45%</div>
                <div className={styles.statLabel}>Revenue Share</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>24/7</div>
                <div className={styles.statLabel}>Support</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statValue}>Real-time</div>
                <div className={styles.statLabel}>Reporting</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
