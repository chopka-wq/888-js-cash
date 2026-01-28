"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/app", label: "App" },
    { href: "/apk", label: "APK" },
    { href: "/casino", label: "Casino" },
    { href: "/bonus", label: "Bonus" },
    { href: "/promo-code", label: "Promo code" },
    { href: "/affiliate", label: "Affiliate" },
    { href: "/login", label: "Login" },
    { href: "/registration", label: "Registration" },
  ];

  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.container}>
          <Link href="/" className={styles.logo} aria-label="888Starz Home">
            <Image
              src="/logo.svg"
              alt="888Starz Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          <ul className={styles.navList} role="menubar">
            {menuItems.map((item) => (
              <li key={item.href} role="none">
                <Link href={item.href} role="menuitem">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a
              href="https://open-step.net/ZqS7Rx"
              className={styles.loginButton}
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
            <a
              href="https://open-step.net/ZqS7Rx"
              className={styles.registerButton}
              role="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register
            </a>
          </div>

          <button
            className={styles.hamburger}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
          <ul className={styles.mobileMenuList}>
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMenu}></div>
      )}
    </header>
  );
}
