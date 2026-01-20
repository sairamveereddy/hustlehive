import type { Metadata } from "next";
import { JetBrains_Mono, Orbitron, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HustleHive",
  description:
    "A story-first warning against mass auto-apply agents and a call to safer, controlled job applications.",
  openGraph: {
    title: "HustleHive",
    description:
      "A story-first warning against mass auto-apply agents and a call to safer, controlled job applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${orbitron.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
