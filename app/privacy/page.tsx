import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy - 888Starz Online Casino",
  description:
    "Learn how 888Starz protects your personal information and privacy. Read our comprehensive Privacy Policy covering data collection, usage, security, and your rights.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy - 888Starz Online Casino",
    description:
      "Learn how 888Starz protects your personal information and privacy.",
    url: "/privacy",
    siteName: "888Starz",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: February 1, 2026</p>

        <section className={styles.section}>
          <h2>1. Introduction</h2>
          <p>
            At 888Starz, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our online casino and sports betting platform.
          </p>
          <p>
            By using our services, you consent to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Information We Collect</h2>
          <p>We collect the following types of information:</p>
          
          <h3>Personal Information</h3>
          <ul>
            <li>Name, date of birth, and contact details</li>
            <li>Government-issued identification documents</li>
            <li>Payment information and transaction history</li>
            <li>Account credentials and preferences</li>
          </ul>

          <h3>Technical Information</h3>
          <ul>
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Usage data and game activity</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. How We Use Your Information</h2>
          <p>We use your information for the following purposes:</p>
          <ul>
            <li>To provide and maintain our gaming services</li>
            <li>To process deposits, withdrawals, and transactions</li>
            <li>To verify your identity and prevent fraud</li>
            <li>To comply with legal and regulatory requirements</li>
            <li>To send promotional offers and marketing communications (with your consent)</li>
            <li>To improve our services and user experience</li>
            <li>To provide customer support</li>
            <li>To detect and prevent illegal activities</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Information Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share your information with:
          </p>
          <ul>
            <li>Payment processors and financial institutions for transaction processing</li>
            <li>Regulatory authorities and law enforcement when required by law</li>
            <li>Service providers who assist in operating our platform (under strict confidentiality agreements)</li>
            <li>Business partners for fraud prevention and security purposes</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information:
          </p>
          <ul>
            <li>SSL encryption for all data transmissions</li>
            <li>Secure servers and databases</li>
            <li>Regular security audits and updates</li>
            <li>Access controls and authentication protocols</li>
            <li>Employee training on data protection</li>
          </ul>
          <p>
            However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can control cookie preferences through your browser settings, though this may affect website functionality.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Your Rights</h2>
          <p>You have the following rights regarding your personal information:</p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to correct inaccurate information</li>
            <li>Right to request deletion of your data (subject to legal requirements)</li>
            <li>Right to object to processing of your data</li>
            <li>Right to data portability</li>
            <li>Right to withdraw consent for marketing communications</li>
          </ul>
          <p>
            To exercise these rights, please contact our customer support team.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Account information is typically retained for a minimum of 5 years after account closure as required by regulations.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable data protection laws.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. Children's Privacy</h2>
          <p>
            Our services are strictly for users 18 years and older. We do not knowingly collect information from minors. If we become aware that we have collected information from a minor, we will take steps to delete such information immediately.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
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
