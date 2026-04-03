import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Fiesta Estimator | UAE Construction",
  description: "Smart construction estimation for the UAE market",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
