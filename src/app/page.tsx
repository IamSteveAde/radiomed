export const dynamic = 'force-static';
import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";
import Typess from "./components/home/types";

import Soon from "./components/soon";


// Global components


/* -------------------------------------
   METADATA SPOTLITE AFRICA AGENCY
------------------------------------- */




export const metadata: Metadata = {
  metadataBase: new URL("https://www.radiomedtech.com"),

  title: {
    default:
      "Radio Medicine Technology Limited | Advanced Diagnostic Healthcare in Nigeria",
    template: "%s | Radio Medicine Technology Limited",
  },

  description:
    "Radio Medicine Technology Limited is transforming diagnostic healthcare in Nigeria through advanced imaging, laboratory diagnostics, telemedicine, and technology-driven healthcare infrastructure. Access MRI imaging, CT scans, digital X-ray, ultrasound, laboratory diagnostics, and specialist healthcare support.",

  keywords: [
    "diagnostic healthcare Nigeria",
    "MRI scan Nigeria",
    "CT scan Lagos",
    "MRI imaging Nigeria",
    "CT imaging Nigeria",
    "digital xray Nigeria",
    "ultrasound Lagos",
    "radiology center Nigeria",
    "advanced imaging Lagos",
    "laboratory diagnostics Nigeria",
    "diagnostic center Lagos",
    "medical imaging Nigeria",
    "healthcare infrastructure Nigeria",
    "telemedicine Nigeria",
    "healthcare technology Nigeria",
    "preventive healthcare Nigeria",
    "specialist healthcare Nigeria",
    "medical diagnostics Lagos",
    "diagnostic services Nigeria",
    "healthcare expansion Nigeria",
    "modern healthcare Nigeria",
    "solar powered healthcare infrastructure",
    "medical technology Nigeria",
    "healthcare innovation Nigeria",
    "RadioMed Technology",
  ],

  authors: [
    {
      name: "Radio Medicine Technology Limited",
      url: "https://www.radiomedtech.com",
    },
  ],

  creator: "Radio Medicine Technology Limited",

  publisher: "Radio Medicine Technology Limited",

  category: "Healthcare",

  openGraph: {
    title:
      "Radio Medicine Technology Limited | Advanced Diagnostic Healthcare in Nigeria",

    description:
      "Advanced imaging, laboratory diagnostics, telemedicine, and technology-driven healthcare infrastructure built for underserved communities across Nigeria.",

    url: "https://www.radiomedtech.com",

    siteName: "Radio Medicine Technology Limited",

    locale: "en_NG",

    type: "website",

    images: [
      {
        url: "https://www.radiomedtech.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Radio Medicine Technology Limited Diagnostic Healthcare Infrastructure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Radio Medicine Technology Limited | Diagnostic Healthcare Infrastructure",

    description:
      "Book advanced diagnostic services including MRI, CT scans, ultrasound, digital X-ray, laboratory diagnostics, and specialist healthcare support.",

    images: [
      "https://www.radiomedtech.com/images/banner.jpg",
    ],

    creator: "@radiomedtech",
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

  alternates: {
    canonical: "https://www.radiomedtech.com",
  },

  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
  },
};/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome, brief, professional, plays once per visit */}
     

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />
       <History />
       <Soon />
        <Typess />
    
        
            

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
     
      
    </main>
  );
}
