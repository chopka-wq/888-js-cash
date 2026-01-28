import Image from "next/image";
import styles from "./ContentBlock.module.css";

interface ContentBlockProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function ContentBlock({
  title,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
}: ContentBlockProps) {
  return (
    <section className={styles.section} aria-labelledby={`content-${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className={styles.container}>
        <div className={`${styles.content} ${reverse ? styles.reverse : ""}`}>
          <div className={styles.textContent}>
            <h2 id={`content-${title.toLowerCase().replace(/\s+/g, "-")}`} className={styles.title}>
              {title}
            </h2>
            <div
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
          <div className={styles.imageContent}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
