import type { Metadata } from "next";
import PromoCode from "@/components/PromoCode";
import Features from "@/components/Features";
import ContentBlock from "@/components/ContentBlock";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import GameProviders from "@/components/GameProviders";
import SportsBetting from "@/components/SportsBetting";
import InfoTable from "@/components/InfoTable";

export const metadata: Metadata = {
  title: "888Starz - Online Casino & Sports Betting | Welcome Bonus 500%",
  description:
    "Join 888Starz - the best online casino and sports betting platform. Get up to 500% welcome bonus, play slots, live casino, and bet on sports. Fast registration, secure payments, 24/7 support.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "888Starz - Online Casino & Sports Betting | Welcome Bonus 500%",
    description:
      "Join 888Starz - the best online casino and sports betting platform. Get up to 500% welcome bonus, play slots, live casino, and bet on sports.",
    url: "/",
    siteName: "888Starz",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <ContentBlock
        title="Experience the Best Online Casino Games"
        content="<p>At 888Starz, we offer an extensive collection of over 500 premium casino games from leading providers. Whether you're a fan of classic slots, table games, or live dealer experiences, we have something for everyone.</p><p>Our games feature stunning graphics, smooth gameplay, and fair RTP rates. Play on desktop or mobile - the choice is yours!</p><p>From thrilling slot machines with exciting bonus rounds to classic table games like blackjack, roulette, and baccarat, our platform delivers an authentic casino experience. Our live dealer section brings the excitement of a real casino directly to your screen, with professional dealers and HD streaming quality.</p><p>We regularly update our game library with the latest releases from top developers, ensuring you always have access to the newest and most exciting titles. All games are tested for fairness and operate on certified random number generators.</p>"
        imageSrc="/888starz-casino-slots.webp"
        imageAlt="888Starz Welcome Bonus - Download iOS and Android App"
        actionButton={{
          text: "Register",
          href: "https://open-step.net/ZqS7Rx",
          external: true,
        }}
      />
      <PromoCode />
      <Features />
      <GameProviders />
      <InfoTable />
      <SportsBetting />
      <ContentBlock
        title="Live Casino Experience"
        content="<p>Experience the thrill of a real casino from the comfort of your home with our live dealer games. Our professional dealers stream in HD quality, bringing you authentic casino action 24/7.</p><p>Choose from a variety of live casino games including Live Blackjack, Live Roulette, Live Baccarat, and Live Poker. Interact with dealers and other players in real-time through our chat feature.</p><p>All our live casino games are streamed from professional studios with multiple camera angles, ensuring you never miss a moment of the action. Our dealers are trained professionals who create an engaging and entertaining gaming experience.</p><p>We offer various betting limits to suit all players, from low-stakes tables perfect for beginners to high-roller tables for experienced players. Join a table that matches your style and budget.</p>"
        imageSrc="/888starz-live-casino-logo-1-1200x900.jpg"
        imageAlt="Live Casino Games"
        reverse
        actionButton={{
          text: "Claim Bonus",
          href: "https://open-step.net/ZqS7Rx",
          external: true,
        }}
      />
      <Reviews />
      <ContentBlock
        title="Secure and Fast Payment Options"
        content="<p>We understand the importance of quick and secure transactions. That's why we support multiple payment methods including credit cards, e-wallets, bank transfers, and cryptocurrencies.</p><p>All transactions are protected by SSL encryption, and we process withdrawals as fast as possible. Your financial security is our top priority.</p><p>We accept Visa, Mastercard, Maestro, and American Express credit and debit cards. For faster transactions, use e-wallets like Skrill, Neteller, PayPal, or ecoPayz. Cryptocurrency users can deposit and withdraw using Bitcoin, Ethereum, Litecoin, and other popular cryptocurrencies.</p><p>All payment methods are verified and secure. We never store your full card details, and all sensitive information is encrypted using industry-standard security protocols. Withdrawal processing times vary by method, with e-wallets typically processed within 24 hours.</p>"
        imageSrc="/996a6f6739f18eabd4b2bd3ae0503257.webp"
        imageAlt="Secure Payment Methods"
        actionButton={{
          text: "Login and Play",
          href: "https://open-step.net/ZqS7Rx",
          external: true,
        }}
      />
      <ContentBlock
        title="24/7 Customer Support"
        content="<p>Our dedicated customer support team is available around the clock to assist you with any questions or concerns. Whether you need help with deposits, withdrawals, game rules, or technical issues, we're here to help.</p><p>Contact us via live chat for instant assistance, email for detailed inquiries, or phone for urgent matters. Our support team is multilingual and trained to provide the best possible service.</p><p>We also maintain a comprehensive FAQ section covering common questions about account management, bonuses, payments, and game rules. Check our help center for quick answers to frequently asked questions.</p><p>Our commitment to customer satisfaction is reflected in our response times and the quality of support we provide. We aim to resolve all inquiries promptly and efficiently.</p>"
        imageSrc="/6-What-are-the-differences-between-high-roller-casinos-in-the-USA-and-those-operating-elsewhere.webp"
        imageAlt="Customer Support"
        reverse
        actionButton={{
          text: "Register",
          href: "https://open-step.net/ZqS7Rx",
          external: true,
        }}
      />
      <FAQ />
    </>
  );
}
