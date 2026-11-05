import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sunbound — Your day, prepared",
  description: "A context-aware daily preparation assistant.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
