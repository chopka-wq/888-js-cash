import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items.length) {
    return null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item:
        item.href && item.href !== "#"
          ? `${process.env.SITE_URL || "https://888starz.cash"}${item.href}`
          : undefined,
    })),
  };

  return (
    <section className={styles.breadcrumbs} aria-label="Breadcrumb navigation">
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Breadcrumb">
          <ol className={styles.list}>
            {items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={item.label} className={styles.item}>
                  {item.href && !isLast ? (
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? styles.current : styles.link}>
                      {item.label}
                    </span>
                  )}
                  {!isLast && <span className={styles.separator}>/</span>}
                </li>
              );
            })}
          </ol>
        </nav>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
}

