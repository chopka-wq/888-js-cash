"use client";

import { useState, useEffect } from "react";
import styles from "./PromoCode.module.css";

export default function PromoCode() {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [promoCode, setPromoCode] = useState("WELCOME500");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(promoCode);
    alert("Promo code copied to clipboard!");
  };

  return (
    <section className={styles.promoSection} aria-labelledby="promo-title">
      <div className={styles.container}>
        <h2 id="promo-title" className={styles.title}>
          Exclusive Promo Code
        </h2>
        <div className={styles.promoCard}>
          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <h3 className={styles.leftTitle}>Claim Your 500% Welcome Bonus</h3>
              <p className={styles.leftText}>
                Don't miss out on this exclusive offer! Use the promo code below during
                registration to unlock your massive 500% welcome bonus. This limited-time
                promotion gives you the best start at 888Starz.
              </p>
              <ul className={styles.benefitsList}>
                <li>Up to 500% bonus on your first deposit</li>
                <li>Valid for new players only</li>
                <li>Use code during registration</li>
                <li>Limited time offer - act now!</li>
              </ul>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.timer}>
                <span className={styles.timerLabel}>Time Left:</span>
                <span className={styles.timerValue}>{formatTime(timeLeft)}</span>
              </div>
              <div className={styles.codeContainer}>
                <span className={styles.codeLabel}>Your Promo Code:</span>
                <div className={styles.codeWrapper}>
                  <span className={styles.code}>{promoCode}</span>
                  <button
                    className={styles.copyButton}
                    onClick={copyToClipboard}
                    aria-label="Copy promo code"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <p className={styles.description}>
                Use this code during registration to claim your 500% welcome bonus!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
