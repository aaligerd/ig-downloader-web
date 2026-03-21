import Downloader from '@/components/Downloader';

export const metadata = {
  title: 'ReelsFast | Instagram Video Downloader - Save Reels & Stories HD',
  description: 'ReelsFast is the fastest tool to download Instagram Reels, Stories, and Videos in High Quality (MP4). Free, secure, and no login required on subhrodev.cloud.',
  keywords: 'reelsfast, instagram video downloader, download instagram reels, save ig stories, download ig videos no watermark, high quality instagram downloader, fast video save tool',

  openGraph: {
    title: 'ReelsFast: Instagram Video Downloader - Fast & Free',
    description: 'Download any Instagram Reels, Stories, or Videos in seconds using ReelsFast.net.',
    url: 'https://subhrodev.cloud',
    siteName: 'ReelsFast',
    images: [
      {
        url: '/og-image.jpg', // Path to your 1920x1080 image
        width: 1920,
        height: 1080,
        alt: 'ReelsFast Instagram Video Downloader'
      }
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image', // Forces the large image format on Twitter/X
    title: 'ReelsFast: Fast, Free & HD Instagram Downloader',
    description: 'Save any Instagram Reel or Video with one click. No login required.',
    images: ['/og-image.jpg'], // Must match the OG image path
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
  },

  alternates: {
    canonical: 'https://subhrodev.cloud',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "InstaSave Downloader",
  "operatingSystem": "All",
  "applicationCategory": "MultimediaApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1050"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};



export default function Home() {


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-slate-50">
        {/* Hero Section */}
        <section className="pt-20 pb-10 px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
            Reels<span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-pink-600">Fast</span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 text-lg md:text-xl font-medium">
            The most reliable tool to download Instagram Reels, Stories, and Videos in 2026.
          </p>

          <Downloader />
        </section>

        {/* SEO/Passive Income Content Section */}
        <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200">
          <div className="prose prose-lg prose-slate max-w-none">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why use our Instagram Downloader?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our tool is optimized for speed and privacy. Unlike other platforms, we don&apos;t ask for your login
              credentials. Whether you want to save a <strong>viral Reel</strong>, an <strong>educational video</strong>, or a <strong>beautiful
                photo</strong>, our downloader provides high-quality MP4 files instantly.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-purple-600">🚀 Fast & Free</h3>
                <p className="text-sm text-gray-600">No subscription, no limits. Download as many videos as you want at maximum speed.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-pink-600">🛡️ Secure & Private</h3>
                <p className="text-sm text-gray-600">We respect your privacy. We don&apos;t track your downloads or store your Instagram data.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mt-16 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-gray-700 underline decoration-pink-300">Is it legal to download Instagram videos?</h4>
                <p className="text-gray-600 text-sm">Yes, for personal use. You should not re-upload content without the original creator&apos;s permission.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 underline decoration-purple-300">Does it work on iPhone and Android?</h4>
                <p className="text-gray-600 text-sm">Absolutely. This tool is web-based and works perfectly on any mobile browser (Safari, Chrome, etc.).</p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}