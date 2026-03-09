import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rush Trades | Urgent Jobs. Instant Leads. No Waiting.",
  description:
    "Need an emergency tradesperson? Rush Trades connects you with vetted, local tradespeople in under 60 seconds. Available 24/7 across the UK.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
