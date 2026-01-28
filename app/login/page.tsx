import type { Metadata } from "next";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Login Guide - How to Access Your 888Starz Account | Security Tips",
  description:
    "Learn how to login to your 888Starz account securely. Complete guide to account access, password management, security features, and troubleshooting login issues.",
  openGraph: {
    title: "Login Guide - How to Access Your 888Starz Account",
    description:
      "Complete guide to logging in to your 888Starz account securely. Learn about security features and password management.",
    url: "/login",
    siteName: "888Starz",
    type: "website",
  },
};

const loginMethods = [
  {
    method: "Username & Password",
    description:
      "The standard login method. Enter your username and password to access your account.",
    icon: "🔐",
    security: "High",
  },
  {
    method: "Email & Password",
    description:
      "Alternative login using your registered email address instead of username.",
    icon: "✉️",
    security: "High",
  },
  {
    method: "Biometric Authentication",
    description:
      "Use fingerprint or face recognition on mobile devices for quick and secure access.",
    icon: "👆",
    security: "Very High",
  },
  {
    method: "Two-Factor Authentication",
    description:
      "Enhanced security with SMS or authenticator app codes for additional protection.",
    icon: "🔒",
    security: "Maximum",
  },
];

const securityFeatures = [
  {
    feature: "SSL Encryption",
    description:
      "All login sessions are encrypted with 256-bit SSL encryption, ensuring your credentials are protected.",
    benefit: "Bank-level security",
  },
  {
    feature: "Session Management",
    description:
      "Automatic session timeout after inactivity. You can also manually log out from any device.",
    benefit: "Prevents unauthorized access",
  },
  {
    feature: "Login Notifications",
    description:
      "Receive email notifications when someone logs into your account from a new device or location.",
    benefit: "Account monitoring",
  },
  {
    feature: "Password Requirements",
    description:
      "Strong password requirements including minimum length, special characters, and complexity.",
    benefit: "Enhanced protection",
  },
  {
    feature: "Account Lockout",
    description:
      "Automatic account lockout after multiple failed login attempts to prevent brute force attacks.",
    benefit: "Attack prevention",
  },
  {
    feature: "Device Recognition",
    description:
      "Our system recognizes trusted devices, making future logins faster while maintaining security.",
    benefit: "Convenient security",
  },
];

const passwordTips = [
  "Use a unique password that you don't use elsewhere",
  "Include a mix of uppercase and lowercase letters",
  "Add numbers and special characters (!@#$%^&*)",
  "Make it at least 12 characters long",
  "Avoid using personal information (name, birthdate)",
  "Change your password regularly (every 3-6 months)",
  "Don't share your password with anyone",
  "Use a password manager to store credentials securely",
];

const troubleshooting = [
  {
    issue: "Forgot Password",
    solution:
      "Click 'Forgot Password' on the login page. Enter your email and follow the reset link sent to your inbox.",
  },
  {
    issue: "Account Locked",
    solution:
      "Wait 30 minutes or contact support. Account locks automatically after 5 failed login attempts.",
  },
  {
    issue: "Email Not Received",
    solution:
      "Check spam folder, verify email address, and ensure your email provider isn't blocking our messages.",
  },
  {
    issue: "Can't Remember Username",
    solution:
      "Use the 'Forgot Username' option and enter your registered email address to receive your username.",
  },
  {
    issue: "Two-Factor Not Working",
    solution:
      "Ensure your device time is synchronized. Contact support if you've lost access to your 2FA device.",
  },
  {
    issue: "Login Page Not Loading",
    solution:
      "Clear browser cache, try a different browser, or check your internet connection. Disable VPN if active.",
  },
];

export default function LoginPage() {
  return (
    <article className={styles.page}>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Login" },
        ]}
      />
      <section className={styles.hero} aria-labelledby="login-title">
        <div className={styles.container}>
          <h1 id="login-title">How to Login to Your 888Starz Account</h1>
          <p className={styles.subtitle}>
            Access your account securely and start playing. Learn about different
            login methods, security features, and how to troubleshoot common
            login issues.
          </p>
        </div>
      </section>

      <section className={styles.methods} aria-labelledby="login-methods">
        <div className={styles.container}>
          <h2 id="login-methods">Login Methods</h2>
          <p className={styles.intro}>
            Choose from multiple secure login methods to access your 888Starz
            account. Each method offers different levels of convenience and
            security.
          </p>
          <div className={styles.methodsGrid}>
            {loginMethods.map((method, index) => (
              <article key={index} className={styles.methodCard}>
                <div className={styles.methodIcon}>{method.icon}</div>
                <div className={styles.securityBadge}>{method.security}</div>
                <h3>{method.method}</h3>
                <p>{method.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.security} aria-labelledby="security-features">
        <div className={styles.container}>
          <h2 id="security-features">Security Features</h2>
          <p className={styles.intro}>
            Your account security is our top priority. We implement multiple
            layers of protection to keep your account and funds safe.
          </p>
          <div className={styles.securityGrid}>
            {securityFeatures.map((item, index) => (
              <article key={index} className={styles.securityCard}>
                <h3>{item.feature}</h3>
                <p className={styles.securityDescription}>{item.description}</p>
                <div className={styles.securityBenefit}>
                  <span>✓</span> {item.benefit}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.password} aria-labelledby="password-tips">
        <div className={styles.container}>
          <h2 id="password-tips">Password Security Tips</h2>
          <p className={styles.intro}>
            A strong password is your first line of defense. Follow these best
            practices to keep your account secure.
          </p>
          <div className={styles.passwordList}>
            <ul>
              {passwordTips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
          <div className={styles.passwordStrength}>
            <h3>Password Strength Indicator</h3>
            <div className={styles.strengthLevels}>
              <div className={styles.strengthItem}>
                <div className={`${styles.strengthBar} ${styles.weak}`}></div>
                <span>Weak - Easy to guess or crack</span>
              </div>
              <div className={styles.strengthItem}>
                <div className={`${styles.strengthBar} ${styles.medium}`}></div>
                <span>Medium - Somewhat secure</span>
              </div>
              <div className={styles.strengthItem}>
                <div className={`${styles.strengthBar} ${styles.strong}`}></div>
                <span>Strong - Highly secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.troubleshooting} aria-labelledby="troubleshooting">
        <div className={styles.container}>
          <h2 id="troubleshooting">Troubleshooting Login Issues</h2>
          <p className={styles.intro}>
            Experiencing login problems? Check our troubleshooting guide for
            common issues and solutions.
          </p>
          <div className={styles.troubleshootingList}>
            {troubleshooting.map((item, index) => (
              <article key={index} className={styles.troubleshootingItem}>
                <h3>{item.issue}</h3>
                <p>{item.solution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.bestPractices} aria-labelledby="best-practices">
        <div className={styles.container}>
          <h2 id="best-practices">Best Practices for Account Security</h2>
          <div className={styles.practicesGrid}>
            <article className={styles.practiceCard}>
              <h3>✓ Always Log Out</h3>
              <p>
                Log out from shared or public devices. Never leave your account
                logged in on devices you don't control.
              </p>
            </article>
            <article className={styles.practiceCard}>
              <h3>✓ Enable 2FA</h3>
              <p>
                Two-factor authentication adds an extra layer of security. Enable
                it in your account settings for maximum protection.
              </p>
            </article>
            <article className={styles.practiceCard}>
              <h3>✓ Monitor Account Activity</h3>
              <p>
                Regularly check your account activity and login history. Report
                any suspicious activity immediately.
              </p>
            </article>
            <article className={styles.practiceCard}>
              <h3>✓ Keep Software Updated</h3>
              <p>
                Keep your browser and operating system updated to protect against
                security vulnerabilities.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="login-cta">
        <div className={styles.container}>
          <h2 id="login-cta">Ready to Access Your Account?</h2>
          <p>
            Login to your 888Starz account and continue your gaming journey.
            Access all your favorite games, bonuses, and features.
          </p>
          <Button
            href="https://open-step.net/ZqS7Rx"
            variant="primary"
            ariaLabel="Login to Account"
            external
          >
            Login Now
          </Button>
        </div>
      </section>
    </article>
  );
}
