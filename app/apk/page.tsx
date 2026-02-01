import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Download APK - 888Starz Android App | Free Download",
  description:
    "Download 888Starz APK for Android. Get the latest version of our casino and sports betting app. Fast, secure, and free download. Install APK and start playing today!",
  openGraph: {
    title: "Download APK - 888Starz Android App | Free Download",
    description:
      "Download 888Starz APK for Android. Get the latest version of our casino and sports betting app.",
    url: "/apk",
    siteName: "888Starz",
    type: "website",
  },
};

export default function ApkPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "888Starz Casino & Sports Betting",
    applicationCategory: "GameApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "APK" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className={styles.page}>
        <section className={styles.hero} aria-labelledby="apk-title">
          <div className={styles.container}>
            <h1 id="apk-title">Download 888Starz APK for Android</h1>
            <p className={styles.subtitle}>
              Get the full 888Starz experience on your Android device. Download
              our APK file and enjoy <Link href="/casino" className={styles.internalLink}>casino games</Link>, sports betting, and exclusive
              bonuses on the go!
            </p>
          </div>
        </section>

        <section className={styles.downloadSection} aria-labelledby="download-info">
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.leftColumn}>
                <h2 id="download-info">Why Download Our APK?</h2>
                <ul className={styles.featuresList}>
                  <li>
                    <strong>Full Access:</strong> All features available in the web version
                  </li>
                  <li>
                    <strong>Faster Performance:</strong> Optimized for mobile
                    devices
                  </li>
                  <li>
                    <strong>Offline Mode:</strong> Access some features without
                    internet
                  </li>
                  <li>
                    <strong>Push Notifications:</strong> Never miss <Link href="/bonus" className={styles.internalLink}>bonuses</Link> and
                    promotions
                  </li>
                  <li>
                    <strong>Secure:</strong> Bank-level encryption and security
                  </li>
                  <li>
                    <strong>Regular Updates:</strong> Latest features and bug
                    fixes
                  </li>
                </ul>
              </div>
              <div className={styles.rightColumn}>
                <div className={styles.downloadCard}>
                  <div className={styles.appIcon}>
                    <Image
                      src="/logo.jpg"
                      alt="888Starz App Icon"
                      width={120}
                      height={120}
                    />
                  </div>
                  <h3>888Starz APK</h3>
                  <p className={styles.version}>Version 2.0.1</p>
                  <p className={styles.size}>Size: 45 MB</p>
                  <Button href="https://open-step.net/ZqS7Rx" variant="primary" ariaLabel="Download APK" external>
                    Download APK
                  </Button>
                  <p className={styles.note}>
                    * APK file will be downloaded directly to your device
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.instructions} aria-labelledby="install-instructions">
          <div className={styles.container}>
            <h2 id="install-instructions">Installation Instructions</h2>
            <div className={styles.steps}>
              <article className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <h3>Enable Unknown Sources</h3>
                  <p>
                    Go to Settings → Security → Enable "Install from Unknown
                    Sources" or "Allow installation of apps from unknown
                    sources"
                  </p>
                </div>
              </article>
              <article className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h3>Download APK File</h3>
                  <p>
                    Click the "Download APK" button above. The file will be
                    saved to your Downloads folder
                  </p>
                </div>
              </article>
              <article className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <h3>Install the App</h3>
                  <p>
                    Open the downloaded APK file from your notification panel or
                    Downloads folder and tap "Install"
                  </p>
                </div>
              </article>
              <article className={styles.step}>
                <div className={styles.stepNumber}>4</div>
                <div className={styles.stepContent}>
                  <h3>Launch and Enjoy</h3>
                  <p>
                    Once installed, open the app, register or login, and start
                    playing!
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.requirements} aria-labelledby="system-requirements">
          <div className={styles.container}>
            <h2 id="system-requirements">System Requirements</h2>
            <div className={styles.requirementsGrid}>
              <article className={styles.requirementCard}>
                <h3>Android Version</h3>
                <p>Android 6.0 (Marshmallow) or higher</p>
              </article>
              <article className={styles.requirementCard}>
                <h3>RAM</h3>
                <p>Minimum 2GB RAM recommended</p>
              </article>
              <article className={styles.requirementCard}>
                <h3>Storage</h3>
                <p>At least 100MB free storage space</p>
              </article>
              <article className={styles.requirementCard}>
                <h3>Internet</h3>
                <p>Stable internet connection required</p>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="apk-faq">
          <div className={styles.container}>
            <h2 id="apk-faq">Frequently Asked Questions</h2>
            <div className={styles.faqList}>
              <article className={styles.faqItem}>
                <h3>Is the APK safe to download?</h3>
                <p>
                  Yes, our APK is completely safe. It's the official 888Starz
                  application with the same security features as the web version.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Do I need to uninstall the Play Store version?</h3>
                <p>
                  If you have the app from Google Play Store, you can keep both
                  versions. However, we recommend using only one version to
                  avoid conflicts.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Will I receive updates automatically?</h3>
                <p>
                  APK versions require manual updates. We'll notify you when a
                  new version is available.
                </p>
              </article>
              <article className={styles.faqItem}>
                <h3>Can I use the same account on APK and web version?</h3>
                <p>
                  Yes, you can use the same account credentials across all
                  platforms - web, APK, and iOS app.
                </p>
              </article>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
