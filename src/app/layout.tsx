import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ClientProviders from "./ClientProviders";

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.radiomedtech.com"),

  title: {
    default:
      "RadioMed Technology | Advanced Diagnostic Healthcare in Nigeria",
    template: "%s | RadioMed Technology",
  },

  description:
    "RadioMed Technology is transforming diagnostic healthcare in Nigeria through advanced imaging, laboratory diagnostics, telemedicine, and technology-driven healthcare infrastructure. Access CT scans, MRI imaging, ultrasound, digital X-ray, laboratory diagnostics, and specialist healthcare support.",

  keywords: [
    "diagnostic healthcare Nigeria",
    "MRI scan Nigeria",
    "CT scan Lagos",
    "MRI imaging Nigeria",
    "CT imaging Nigeria",
    "digital xray Lagos",
    "ultrasound Nigeria",
    "medical diagnostics Nigeria",
    "laboratory diagnostics Nigeria",
    "advanced imaging Nigeria",
    "radiology center Lagos",
    "diagnostic center Nigeria",
    "healthcare infrastructure Nigeria",
    "telemedicine Nigeria",
    "medical imaging Lagos",
    "healthcare technology Nigeria",
    "specialist healthcare Nigeria",
    "preventive healthcare Nigeria",
    "diagnostic services Lagos",
    "RadioMed Technology",
  ],

  authors: [{ name: "RadioMed Technology" }],

  creator: "RadioMed Technology",

  publisher: "RadioMed Technology",

  openGraph: {
    title:
      "RadioMed Technology | Advanced Diagnostic Healthcare in Nigeria",

    description:
      "Advanced imaging, laboratory diagnostics, telemedicine, and technology-driven healthcare infrastructure built for underserved communities across Nigeria.",

    url: "https://www.radiomedtech.com",

    siteName: "RadioMed Technology",

    images: [
      {
        url: "https://www.radiomedtech.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "RadioMed Technology Diagnostic Healthcare",
      },
    ],

    locale: "en_NG",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "RadioMed Technology | Diagnostic Healthcare Infrastructure",

    description:
      "Book advanced diagnostic services including MRI, CT scans, ultrasound, digital X-ray, laboratory diagnostics, and specialist healthcare support.",

    images: [
      "https://www.radiomedtech.com/images/banner.jpg",
    ],
  },

  alternates: {
    canonical: "https://www.radiomedtech.com",
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

  category: "Healthcare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmsans.className}>
        
        {/* ⚡ FAST CONTENT */}
        <Header />

        <ClientProviders>
          {children}
        </ClientProviders>

        <Footer />

      </body>
    </html>
  );
}