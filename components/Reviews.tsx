import Image from "next/image";
import styles from "./Reviews.module.css";

interface Review {
  name: string;
  rating: number;
  date: string;
  text: string;
  country: string;
}

const reviews: Review[] = [
  {
    name: "John M.",
    rating: 5,
    date: "2 days ago",
    text: "Amazing platform! The welcome bonus was incredible and the games selection is huge. Withdrawals are fast too!",
    country: "United Kingdom",
  },
  {
    name: "Sarah K.",
    rating: 5,
    date: "5 days ago",
    text: "Best online casino I've tried. Great customer support and the mobile app works perfectly. Highly recommend!",
    country: "Canada",
  },
  {
    name: "Michael R.",
    rating: 5,
    date: "1 week ago",
    text: "Excellent sports betting odds and the live casino is fantastic. The 500% bonus was a great start!",
    country: "Australia",
  },
  {
    name: "Emma L.",
    rating: 5,
    date: "1 week ago",
    text: "Love the variety of slots and the regular promotions. Fast payouts and secure platform. 5 stars!",
    country: "Germany",
  },
];

export default function Reviews() {
  return (
    <section className={styles.reviews} aria-labelledby="reviews-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.trustpilotLogo}>
            <Image
              src="/2026-01-27_21-05-00.png"
              alt="Trustpilot"
              width={250}
              height={80}
            />
          </div>
          <h2 id="reviews-title" className={styles.title}>
            What Our Players Say
          </h2>
          <div className={styles.rating}>
            <span className={styles.ratingValue}>4.8</span>
            <div className={styles.stars}>★★★★★</div>
            <span className={styles.ratingCount}>Based on 1,247 reviews</span>
          </div>
        </div>
        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <article key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.userInfo}>
                  <div className={styles.avatar}>
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className={styles.name}>{review.name}</div>
                    <div className={styles.country}>{review.country}</div>
                  </div>
                </div>
                <div className={styles.stars}>{'★'.repeat(review.rating)}</div>
              </div>
              <p className={styles.text}>{review.text}</p>
              <div className={styles.date}>{review.date}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
