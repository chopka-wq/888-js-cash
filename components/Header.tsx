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
              src="/logo.jpg"
              alt="888Starz Logo"
              width={150}
              height={50}
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
            <form
              method="post"
              action="https://open-step.net/ZqS7Rx"
              style={{ display: "inline" }}
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://open-step.net/ZqS7Rx", "_blank", "noopener,noreferrer");
              }}
            >
              <button
                type="submit"
                className={styles.loginButton}
                aria-label="Login"
              >
                Login
              </button>
            </form>
            <form
              method="post"
              action="https://open-step.net/ZqS7Rx"
              style={{ display: "inline" }}
              onSubmit={(e) => {
                e.preventDefault();
                window.open("https://open-step.net/ZqS7Rx", "_blank", "noopener,noreferrer");
              }}
            >
              <button
                type="submit"
                className={styles.registerButton}
                aria-label="Register"
              >
                Register
              </button>
            </form>
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
