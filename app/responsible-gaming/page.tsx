import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Responsible Gaming - 888Starz Online Casino",
  description:
    "Learn about responsible gaming at 888Starz. Discover tools, resources, and support for safe gambling. We promote responsible gaming and player protection.",
  alternates: {
    canonical: "/responsible-gaming",
  },
  openGraph: {
    title: "Responsible Gaming - 888Starz Online Casino",
    description:
      "Learn about responsible gaming at 888Starz. Discover tools, resources, and support for safe gambling.",
    url: "/responsible-gaming",
    siteName: "888Starz",
    type: "website",
  },
};

export default function ResponsibleGamingPage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Responsible Gaming" },
        ]}
      />
      <div className={styles.container}>
        <h1>Responsible Gaming</h1>
        <p className={styles.intro}>
          At 888Starz, we are committed to promoting responsible gaming and ensuring a safe, enjoyable experience for all our players. We recognize that while gambling can be entertaining, it must be approached responsibly.
        </p>

        <section className={styles.section}>
          <h2>Our Commitment</h2>
          <p>
            We take responsible gaming seriously and have implemented various measures to help our players maintain control over their gambling activities. Our goal is to provide a safe and fair gaming environment while preventing problem gambling.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Self-Exclusion Tools</h2>
          <p>We offer several tools to help you manage your gaming:</p>
          
          <h3>Deposit Limits</h3>
          <p>
            Set daily, weekly, or monthly deposit limits to control how much you can deposit into your account. These limits can be adjusted downward immediately but increases require a 24-hour cooling-off period.
          </p>

          <h3>Loss Limits</h3>
          <p>
            Set limits on how much you can lose over a specific period. Once reached, you will not be able to place bets until the limit period resets.
          </p>

          <h3>Session Time Limits</h3>
          <p>
            Set time limits for your gaming sessions. You will receive reminders when your session time is approaching, and you can choose to extend or end your session.
          </p>

          <h3>Self-Exclusion</h3>
          <p>
            If you feel you need a break from gambling, you can self-exclude for a period of 24 hours, 7 days, 30 days, or permanently. During self-exclusion, you will not be able to access your account or receive promotional communications.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Reality Checks</h2>
          <p>
            Enable reality check reminders that will appear at regular intervals during your gaming session. These reminders show how long you've been playing and how much you've deposited, helping you stay aware of your gaming activity.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Signs of Problem Gambling</h2>
          <p>Be aware of these warning signs:</p>
          <ul>
            <li>Spending more money or time gambling than you can afford</li>
            <li>Chasing losses by gambling more</li>
            <li>Neglecting responsibilities, work, or relationships due to gambling</li>
            <li>Borrowing money or selling possessions to gamble</li>
            <li>Feeling anxious, depressed, or irritable when not gambling</li>
            <li>Lying to family or friends about gambling activities</li>
            <li>Unable to stop or control gambling urges</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Getting Help</h2>
          <p>
            If you believe you may have a gambling problem, help is available. Contact these organizations:
          </p>
          
          <div className={styles.helpResources}>
            <div className={styles.resource}>
              <h3>GamCare</h3>
              <p>Website: www.gamcare.org.uk</p>
              <p>Helpline: 0808 8020 133</p>
            </div>
            <div className={styles.resource}>
              <h3>Gamblers Anonymous</h3>
              <p>Website: www.gamblersanonymous.org</p>
              <p>Helpline: Available 24/7</p>
            </div>
            <div className={styles.resource}>
              <h3>BeGambleAware</h3>
              <p>Website: www.begambleaware.org</p>
              <p>Helpline: 0808 8020 133</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Underage Gambling Prevention</h2>
          <p>
            We strictly prohibit gambling by anyone under the age of 18. We use age verification systems and require proof of identity during account registration. If we discover that a minor has accessed our services, we will immediately close the account and return any funds.
          </p>
          <p>
            Parents and guardians can use filtering software to prevent minors from accessing gambling websites. We recommend using tools such as Net Nanny, CyberPatrol, or other parental control software.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Our Support</h2>
          <p>
            Our customer support team is trained to assist players who may be experiencing gambling-related issues. If you need help setting limits, self-excluding, or have concerns about your gambling, please contact us:
          </p>
          <p>
            Email: support@888starz.cash<br />
            Available 24/7
          </p>
        </section>

        <section className={styles.section}>
          <h2>Remember</h2>
          <ul>
            <li>Gambling should be fun, not a way to make money</li>
            <li>Never gamble more than you can afford to lose</li>
            <li>Never chase your losses</li>
            <li>Take regular breaks from gambling</li>
            <li>Don't gamble when you're upset, depressed, or under the influence</li>
            <li>Keep track of your spending and time</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
