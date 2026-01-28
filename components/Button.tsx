import Link from "next/link";
import styles from "./Button.module.css";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  ariaLabel?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  ariaLabel,
  external = false,
}: ButtonProps) {
  const baseClassName = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={baseClassName}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClassName} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClassName}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
