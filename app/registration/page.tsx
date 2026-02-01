import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Registration Guide - How to Create Your 888Starz Account | Step-by-Step",
  description:
    "Learn how to register at 888Starz. Complete guide to account creation, verification process, welcome bonus activation, and getting started with online casino and sports betting.",
  alternates: {
    canonical: "/registration",
  },
  openGraph: {
    title: "Registration Guide - How to Create Your 888Starz Account",
    description:
      "Complete guide to registering at 888Starz. Learn about account creation, verification, and welcome bonus activation.",
    url: "/registration",
    siteName: "888Starz",
    type: "website",
  },
};

const registrationSteps = [
  {
    step: 1,
    title: "Visit Registration Page",
    description:
      "Click the Register button in the header or use the registration link. You'll be redirected to our secure registration page.",
    icon: "📝",
  },
  {
    step: 2,
    title: "Enter Personal Information",
    description:
      "Fill in your email address, choose a unique username, and create a strong password. Make sure to use a valid email for account verification.",
    icon: "✉️",
  },
  {
    step: 3,
    title: "Add Promo Code (Optional)",
    description:
      "Enter promo code WELCOME500 during registration to activate your 500% welcome bonus. This code must be entered at registration to be valid.",
    icon: "🎁",
  },
  {
    step: 4,
    title: "Verify Your Email",
    description:
      "Check your email inbox for a verification link. Click the link to confirm your email address and activate your account.",
    icon: "✅",
  },
  {
    step: 5,
    title: "Complete Profile",
    description:
      "Add your personal details including full name, date of birth, phone number, and address. This information is required for account verification.",
    icon: "👤",
  },
  {
    step: 6,
    title: "Make Your First Deposit",
    description:
      "Deposit a minimum of $20 to activate your welcome bonus. Choose from multiple secure payment methods including cards, e-wallets, and cryptocurrencies.",
    icon: "💳",
  },
];

const benefits = [
  {
    title: "Instant Account Access",
    description:
      "Your account is created immediately after email verification. Start playing within minutes of registration.",
    stats: "< 5 minutes",
  },
  {
    title: "Welcome Bonus Activation",
    description:
      "Get up to 500% bonus on your first deposit when you use promo code WELCOME500 during registration.",
    stats: "Up to 500%",
  },
  {
    title: "Full Platform Access",
    description:
      "Access all 500+ casino games, sports betting markets, live casino, and exclusive promotions immediately after registration.",
    stats: "500+ Games",
  },
  {
    title: "Secure Account Protection",
    description:
      "Your account is protected with bank-level encryption, two-factor authentication, and advanced security measures.",
    stats: "100% Secure",
  },
];

const requirements = [
  "Must be 18 years or older",
  "Valid email address required",
  "One account per person/household",
  "Accurate personal information",
  "Valid payment method for deposits",
  "Compliance with terms and conditions",
];

const verificationDocuments = [
  {
    type: "Identity Verification",
    documents: ["Passport", "National ID", "Driver's License"],
    purpose: "Confirm your identity and age",
  },
  {
    type: "Address Verification",
    documents: ["Utility bill", "Bank statement", "Government letter"],
    purpose: "Verify your residential address",
  },
  {
    type: "Payment Verification",
    documents: ["Card photo", "Bank statement", "E-wallet screenshot"],
    purpose: "Secure your payment methods",
  },
];

export default function RegistrationPage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Registration" },
        ]}
      />
      <section className={styles.hero} aria-labelledby="registration-title">
        <div className={styles.container}>
          <h1 id="registration-title">How to Register at 888Starz</h1>
          <p className={styles.subtitle}>
            Create your account in minutes and start enjoying the best online
            casino and sports betting experience. Follow our simple registration
            guide to get started. Already have an account? <Link href="/login" className={styles.internalLink}>Login</Link> here.
          </p>
        </div>
      </section>

      <section className={styles.steps} aria-labelledby="registration-steps">
        <div className={styles.container}>
          <h2 id="registration-steps">Registration Process</h2>
          <p className={styles.intro}>
            Registering at 888Starz is quick and straightforward. Follow these
            6 simple steps to create your account and start playing.
          </p>
          <div className={styles.stepsGrid}>
            {registrationSteps.map((item) => (
              <article key={item.step} className={styles.stepCard}>
                <div className={styles.stepNumber}>{item.step}</div>
                <div className={styles.stepIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="registration-benefits">
        <div className={styles.container}>
          <h2 id="registration-benefits">Benefits of Registration</h2>
          <p className={styles.intro}>
            When you register at 888Starz, you unlock a world of gaming
            opportunities and exclusive benefits. Claim your welcome <Link href="/bonus" className={styles.internalLink}>bonus</Link> and explore our <Link href="/casino" className={styles.internalLink}>casino games</Link>.
          </p>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <article key={index} className={styles.benefitCard}>
                <div className={styles.benefitStats}>{benefit.stats}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.requirements} aria-labelledby="registration-requirements">
        <div className={styles.container}>
          <h2 id="registration-requirements">Registration Requirements</h2>
          <p className={styles.intro}>
            To register at 888Starz, you must meet the following requirements
            and provide accurate information.
          </p>
          <div className={styles.requirementsList}>
            <ul>
              {requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div className={styles.requirementsNote}>
            <p>
              <strong>Important:</strong> Providing false information during
              registration may result in account suspension or closure. Ensure all
              details are accurate and up-to-date.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.verification} aria-labelledby="verification-process">
        <div className={styles.container}>
          <h2 id="verification-process">Account Verification Process</h2>
          <p className={styles.intro}>
            After registration, you'll need to verify your account. This process
            ensures security and compliance with regulations.
          </p>
          <div className={styles.verificationGrid}>
            {verificationDocuments.map((doc, index) => (
              <article key={index} className={styles.verificationCard}>
                <h3>{doc.type}</h3>
                <p className={styles.verificationPurpose}>{doc.purpose}</p>
                <ul className={styles.documentsList}>
                  {doc.documents.map((document, docIndex) => (
                    <li key={docIndex}>{document}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles.verificationTimeline}>
            <h3>Verification Timeline</h3>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <span className={styles.timelineTime}>0-2 hours</span>
                <span className={styles.timelineAction}>Email verification</span>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineTime}>24-48 hours</span>
                <span className={styles.timelineAction}>
                  Document verification
                </span>
              </div>
              <div className={styles.timelineItem}>
                <span className={styles.timelineTime}>Immediate</span>
                <span className={styles.timelineAction}>
                  Account activation after email verification
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="registration-faq">
        <div className={styles.container}>
          <h2 id="registration-faq">Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            <article className={styles.faqItem}>
              <h3>How long does registration take?</h3>
              <p>
                Registration takes less than 5 minutes. After email verification,
                your account is immediately active and ready to use.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3>Do I need to verify my account immediately?</h3>
              <p>
                Email verification is required to activate your account. Document
                verification can be completed later, but is required before
                making withdrawals.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3>Can I register multiple accounts?</h3>
              <p>
                No, only one account per person, household, IP address, or
                device is allowed. Multiple accounts will be closed.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3>What if I forget my password?</h3>
              <p>
                Use the "Forgot Password" link on the login page. You'll receive
                a password reset link via email.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3>Is my personal information secure?</h3>
              <p>
                Yes, we use bank-level encryption and never share your
                information with third parties. Your data is protected by
                industry-standard security measures.
              </p>
            </article>
            <article className={styles.faqItem}>
              <h3>Can I change my username after registration?</h3>
              <p>
                Usernames cannot be changed after registration. Choose carefully
                during the registration process.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="registration-cta">
        <div className={styles.container}>
          <h2 id="registration-cta">Ready to Get Started?</h2>
          <p>
            Join thousands of players and create your 888Starz account today.
            Claim your 500% welcome bonus and start winning!
          </p>
          <Button
            href="https://open-step.net/ZqS7Rx"
            variant="primary"
            ariaLabel="Register Now"
            external
          >
            Register Now
          </Button>
        </div>
      </section>
    </article>
  );
}
