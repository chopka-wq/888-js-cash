import styles from "./InfoTable.module.css";

interface InfoRow {
  icon: string;
  label: string;
  value: string;
}

const infoData: InfoRow[] = [
  {
    icon: "💎",
    label: "Name",
    value: "888starz (Starz888)",
  },
  {
    icon: "🌐",
    label: "Website",
    value: "888starz.cash",
  },
  {
    icon: "📅",
    label: "Year of Establishment",
    value: "2020",
  },
  {
    icon: "📄",
    label: "Owner",
    value: "Bittech B.V.",
  },
  {
    icon: "📜",
    label: "License",
    value: "Curacao",
  },
  {
    icon: "✅",
    label: "License Number",
    value: "#8048/JAZ2020-048",
  },
  {
    icon: "🏢",
    label: "Company Headquarters",
    value: "Chytron 3, biuro 301, Nikozja, Cypr, 1075",
  },
  {
    icon: "🇵🇱",
    label: "Accepts Players from Poland",
    value: "Yes",
  },
  {
    icon: "⚙️",
    label: "Platform Offer",
    value: "Sports betting (live and prematch), online casino, virtual sports, crash games",
  },
  {
    icon: "🔥",
    label: "Promo Code",
    value: "ALLSTARZ",
  },
  {
    icon: "🎁",
    label: "Welcome Bonus",
    value: "Up to 8424 PLN + 150 Free Spins + up to 620 PLN for sports bets",
  },
  {
    icon: "💳",
    label: "Payment Methods",
    value: "Pay Do Wallet, Jeton, Sticpay, Kvitum, eZeeWallet, Neosurf, 42 cryptocurrencies",
  },
  {
    icon: "💰",
    label: "Currencies",
    value: "PLN, EUR, USD, UAH, HUF, RON, CZK, RUB",
  },
  {
    icon: "🐷",
    label: "Minimum Deposit",
    value: "1 EUR",
  },
  {
    icon: "💵",
    label: "Minimum Withdrawal",
    value: "10 EUR",
  },
  {
    icon: "🎮",
    label: "Gaming Platforms",
    value: "PC, Phone, Tablet",
  },
  {
    icon: "🌍",
    label: "Languages",
    value: "PL, EN, DE, ES, UA, CZ, SK, RO, RU, FR, HU, IT",
  },
  {
    icon: "💎",
    label: "Popular Casino Games",
    value: "Aviator, Juicy Crush, Sunshine Rich, Reel Wolf, Book of Games",
  },
  {
    icon: "🎧",
    label: "Customer Support",
    value: "Live chat 24/7, support-pl@888starz.bet, +44 (208) 157-60-12",
  },
  {
    icon: "📱",
    label: "Mobile Application",
    value: "Yes (Android, iOS)",
  },
];

export default function InfoTable() {
  return (
    <section className={styles.infoTable} aria-labelledby="info-table-title">
      <div className={styles.container}>
        <h2 id="info-table-title">888Starz Information</h2>
        <p className={styles.subtitle}>
          Complete overview of our platform, services, and features
        </p>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <tbody>
              {infoData.map((row, index) => (
                <tr key={index} className={styles.row}>
                  <td className={styles.labelCell}>
                    <span className={styles.icon}>{row.icon}</span>
                    <span className={styles.label}>{row.label}</span>
                  </td>
                  <td className={styles.valueCell}>
                    {row.label === "Website" ? (
                      <a
                        href="https://888starz.cash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span>{row.value}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
