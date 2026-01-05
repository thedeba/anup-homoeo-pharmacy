import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anup Homeo Pharmacy",
  description:
    "Offers compassionate and evidence-informed homeopathic care. Book appointments, read health blogs, and discover our services.",
  keywords: [
    "Homeopathy",
    "Homeopathic pharmacy",
    "Anup Homeo Pharmacy",
    "Homeopathic doctor",
    "Homeopathic clinic",
    "Homeopathic treatment",
    "Book appointment",
    "Health blogs",
  ],
  openGraph: {
    title: "Anup Homeo Pharmacy",
    description:
      "Offers compassionate and evidence-informed homeopathic care. Book appointments, read health blogs, and discover our services.",
    images: [
      {
        url: "/banner.png",
        width: 800,
        height: 600,
        alt: "Anup Homeo Pharmacy Logo",
      },
    ],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
