import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ronit",
  description:
    "Ronit is a full-stack developer with expertise in Next.js, React Native, TypeScript, and backend technologies like Express and Hono. He builds scalable web and mobile applications for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://res.cloudinary.com/drynqkitl/image/upload/v1740764217/logo_dvg1ol.svg"
        type="image/x-icon"
      />
      <body className={`dark antialiased`}>
        <Toaster />
        <GoogleTagManager gtmId="G-L61367LHG7" />
        <GoogleAnalytics gaId="G-L61367LHG7" />
        {children}
      </body>
    </html>
  );
}
