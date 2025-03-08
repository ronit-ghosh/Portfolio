import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ronit",
  description: "Ronit is a full-stack developer with expertise in Next.js, React Native, TypeScript, and backend technologies like Express and Hono. He builds scalable web and mobile applications for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="https://res.cloudinary.com/drynqkitl/image/upload/v1740764217/logo_dvg1ol.svg" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <GoogleTagManager gtmId="G-L61367LHG7" />
        <GoogleAnalytics gaId="G-L61367LHG7" />
        {children}
      </body>
    </html>
  );
}
