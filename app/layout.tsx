import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// This metadata applies to every page unless a page sets its own.
export const metadata: Metadata = {
  title: "Dash Capital | Mutual Fund & Insurance Solutions in Kolkata",
  description:
    "Dash Capital offers expert Mutual Fund & Insurance solutions in Kolkata, helping you secure a prosperous financial future with personalized strategies.",
  openGraph: {
    title: "Dash Capital | Mutual Fund & Insurance Solutions in Kolkata",
    description:
      "Expert Mutual Fund & Insurance solutions in Kolkata with personalized financial strategies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Header appears on every page */}
        <Header />

        {/* Each page's content is rendered here */}
        <main>{children}</main>

        {/* Footer appears on every page */}
        <Footer />
      </body>
    </html>
  );
}
