import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tayo Makinde - Portfolio",
  description: "Personal portfolio of Tayo Makinde",
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
