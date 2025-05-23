import React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GaroonHub | Book Your Perfect Stadium in Seconds",
  description: "The easiest way for players and teams in Ethiopia to discover, book, and pay for top-quality soccer turfs online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-body">
        {children}
      </body>
    </html>
  );
}
