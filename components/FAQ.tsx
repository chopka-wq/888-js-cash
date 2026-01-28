"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "How do I claim the welcome bonus?",
    answer:
      "To claim your 500% welcome bonus, simply register a new account and use the promo code WELCOME500 during registration. The bonus will be automatically credited to your account.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, e-wallets (Skrill, Neteller, PayPal), bank transfers, and cryptocurrencies. All transactions are secure and encrypted.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "Withdrawal processing times vary by method: e-wallets are usually processed within 24 hours, while bank transfers may take 3-5 business days. We strive to process all withdrawals as quickly as possible.",
  },
  {
    question: "Is 888Starz licensed and regulated?",
    answer:
      "Yes, 888Starz is fully licensed and regulated by international gaming authorities. We operate in compliance with all applicable laws and regulations to ensure a safe and fair gaming environment.",
  },
  {
    question: "Can I play on mobile devices?",
    answer:
      "Absolutely! 888Starz is fully optimized for mobile devices. You can play directly in your mobile browser or download our dedicated iOS and Android apps for the best experience.",
  },
  {
    question: "What games are available?",
    answer:
      "We offer over 500 casino games including slots, table games (blackjack, roulette, baccarat), live casino with real dealers, sports betting, and TV games. New games are added regularly.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} aria-labelledby="faq-title">
      <div className={styles.container}>
        <h2 id="faq-title" className={styles.title}>
          Frequently Asked Questions
        </h2>
        <div className={styles.list} role="list">
          {faqItems.map((item, index) => (
            <article
              key={index}
              className={styles.item}
              role="listitem"
            >
              <button
                className={styles.question}
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span
                  className={`${styles.icon} ${
                    openIndex === index ? styles.open : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`${styles.answer} ${
                  openIndex === index ? styles.open : ""
                }`}
                role="region"
                aria-hidden={openIndex !== index}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
