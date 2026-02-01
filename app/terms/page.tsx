import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions - 888Starz Online Casino",
  description:
    "Read the complete Terms & Conditions for 888Starz online casino and sports betting platform. Understand your rights, responsibilities, and the rules governing our services.",
  openGraph: {
    title: "Terms & Conditions - 888Starz Online Casino",
    description:
      "Read the complete Terms & Conditions for 888Starz online casino and sports betting platform.",
    url: "/terms",
    siteName: "888Starz",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />
      <div className={styles.container}>
        <h1>Terms & Conditions</h1>
        <p className={styles.lastUpdated}>Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the 888Starz website and services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must not use our services.
          </p>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Eligibility and Account Registration</h2>
          <p>
            You must be at least 18 years old (or the legal age for gambling in your jurisdiction) to use our services. By registering an account, you confirm that:
          </p>
          <ul>
            <li>You are of legal age to participate in online gambling</li>
            <li>You are legally capable of entering into binding agreements</li>
            <li>You are not located in a jurisdiction where online gambling is prohibited</li>
            <li>All information provided during registration is accurate and truthful</li>
            <li>You will maintain the security and confidentiality of your account credentials</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. Account Responsibilities</h2>
          <p>
            You are solely responsible for all activities that occur under your account. You must:
          </p>
          <ul>
            <li>Keep your login credentials secure and confidential</li>
            <li>Notify us immediately of any unauthorized access to your account</li>
            <li>Not share your account with others</li>
            <li>Not create multiple accounts</li>
            <li>Provide accurate and up-to-date personal information</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Deposits and Withdrawals</h2>
          <p>
            All deposits and withdrawals are subject to our payment policies:
          </p>
          <ul>
            <li>Minimum deposit and withdrawal amounts apply</li>
            <li>Withdrawals may require identity verification</li>
            <li>Processing times vary by payment method</li>
            <li>We reserve the right to request additional documentation for security purposes</li>
            <li>All transactions are subject to applicable fees as disclosed</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Bonuses and Promotions</h2>
          <p>
            All bonuses and promotions are subject to specific terms and conditions, including:
          </p>
          <ul>
            <li>Wagering requirements must be met before withdrawal</li>
            <li>Maximum bet limits may apply during bonus play</li>
            <li>Game contribution percentages vary by game type</li>
            <li>Bonuses have expiration dates</li>
            <li>We reserve the right to modify or cancel promotions at any time</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>6. Prohibited Activities</h2>
          <p>
            The following activities are strictly prohibited:
          </p>
          <ul>
            <li>Using automated systems or bots to play games</li>
            <li>Collusion or cheating in any form</li>
            <li>Money laundering or any illegal financial activities</li>
            <li>Using stolen or fraudulent payment methods</li>
            <li>Manipulating the website or software</li>
            <li>Any activity that violates applicable laws</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>7. Intellectual Property</h2>
          <p>
            All content on the 888Starz website, including games, graphics, logos, and text, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, 888Starz shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you have deposited with us.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your account at any time if you violate these terms, engage in fraudulent activity, or for any other reason we deem necessary. Upon termination, you will lose access to your account and any remaining balance may be forfeited in accordance with our policies.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Dispute Resolution</h2>
          <p>
            Any disputes arising from these terms or your use of our services shall be resolved through our customer support team first. If a resolution cannot be reached, disputes may be subject to binding arbitration in accordance with applicable laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact our customer support team:
          </p>
          <p>
            Email: support@888starz.cash<br />
            Available 24/7
          </p>
        </section>
      </div>
    </article>
  );
}
