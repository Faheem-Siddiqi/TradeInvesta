import Footer from "./components/layout/Footer";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import Navbar from "./components/layout/Navbar";
export const metadata = {
  title: "Trade Investa",
  description: "Trade Investa provides tailored daily guidance and updates based on each client’s funds and holdings. Our daily social media videos cover trading strategies for different time frames, while our weekly live Q&A sessions offer direct interaction and answers to your questions. You can reach us anytime via social media, WhatsApp, or email for personalized support.",
  icons: {
    icon: ["/assets/favicon.ico?v=4"],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          height={3}
          speed={1000}
          showSpinner={false}
          color="#01C38E" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
