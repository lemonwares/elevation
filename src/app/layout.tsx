import type { Metadata, Viewport } from "next";
import { Nunito, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const geist_mono = Geist_Mono({
  variable: "--font-geist_sans",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Project Lighthouse | The Elevation Church Ikoyi",
  description: "Project Lighthouse, expressed through Pistis Hub Ikoyi, is a faith-rooted community intervention strategy providing a beacon of hope and light.",
  icons: {
    icon: "https://dextrocloud.com/lhc/wp-content/uploads/2024/08/TEC-Ikoyi-Logo-1.webp",
    apple: "https://dextrocloud.com/lhc/wp-content/uploads/2024/08/TEC-Ikoyi-Logo-1.webp",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${geist_mono.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
