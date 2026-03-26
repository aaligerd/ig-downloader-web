import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '../components/Footer';
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ReelsFast | Instagram Video Downloader - Save Reels & Stories HD",
  description: "ReelsFast is the fastest tool to download Instagram Reels, Stories, and Videos in High Quality (MP4). Free, secure, and no login required on subhrodev.cloud.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GA4 Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-27GR48OO5D"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;

            gtag('js', new Date());

            // ✅ disable auto page_view
            gtag('config', 'G-27GR48OO5D', {
              send_page_view: false
            });
          `}
        </Script>
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <div className="grow">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
