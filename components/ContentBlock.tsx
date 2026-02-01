import Image from "next/image";
import Button from "./Button";
import styles from "./ContentBlock.module.css";

interface ContentBlockProps {
  title: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  actionButton?: {
    text: string;
    href: string;
    external?: boolean;
  };
}

export default function ContentBlock({
  title,
  content,
  imageSrc,
  imageAlt,
  reverse = false,
  actionButton,
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
            {actionButton && (
              <div className={styles.actionButton}>
                <Button
                  href={actionButton.href}
                  variant="primary"
                  external={actionButton.external}
                  ariaLabel={actionButton.text}
                >
                  {actionButton.text}
                </Button>
              </div>
            )}
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
