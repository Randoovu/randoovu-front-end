import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Randoovu",
  description:
    "Randoovu kolayca randevu almanızı/vermenizi sağlayan bir platformdur.",
  openGraph: {
    title: "Randoovu",
    description:
      "Randoovu kolayca randevu almanızı/vermenizi sağlayan bir platformdur.",
    url: "https://randoovu.vercel.app",
    siteName: "Randoovu",
    images: [
      {
        url: "https://randoovu.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Randoovu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Randoovu",
    description:
      "Randoovu kolayca randevu almanızı/vermenizi sağlayan bir platformdur.",
    images: ["https://randoovu.vercel.app/og-image.png"],
    creator: "@Yefee_8",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon-48x48.png",
    shortcut: "/icon-48x48.png",
    other: [
      {
        rel: "mask-icon",
        url: "/logo.svg",
        color: "#093FB4",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center text-white`}
      >
        {children}
      </body>
    </html>
  );
}
