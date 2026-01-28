import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <article className={styles.wrapper} aria-labelledby="not-found-title">
      <div className={styles.container}>
        <p className={styles.code}>404</p>
        <h1 id="not-found-title" className={styles.title}>
          Page not found
        </h1>
        <p className={styles.message}>
          The page you are looking for does not exist, has been moved, or is
          temporarily unavailable. Use the button below to return to the
          homepage and continue exploring 888Starz.
        </p>
        <Link href="/" className={styles.button} aria-label="Back to homepage">
          Back to Home
        </Link>
      </div>
    </article>
  );
}

