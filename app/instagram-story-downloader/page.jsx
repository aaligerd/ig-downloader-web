// app/instagram-story-downloader/page.jsx
// This is a Server Component (SSR).

import Downloader from '../../components/Downloader';

// --- SSR: Optimized for 'Story/Photo' Keywords ---
export const metadata = {
  title: 'Instagram Story Downloader & Photo Saver - ReelsFast (subhrodev.cloud)',
  description: 'Download any Instagram Story or save high-quality photos instantly using ReelsFast. Free, secure, and no login needed on subhrodev.cloud.',
  keywords: 'instagram story downloader, save ig stories, ig photo saver, download instagram photos hd, reelsfast story, story download tool',
  alternates: {
    canonical: 'https://subhrodev.cloud/instagram-story-downloader',
  },
};

export default function StoryDownloaderPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* SSR: Specialized H1 for Story searchers */}
      <section className="pt-20 pb-10 px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
          Story<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Saver</span>
        </h1>
        <p className="max-w-xl mx-auto text-gray-600 text-lg md:text-xl font-medium">
          The fastest and most secure tool to save Instagram Stories and Photos in 2026.
        </p>

        {/* CSR: Your SAME interactive component works here too! */}
        <Downloader />
      </section>

      {/* SSR: Optimized Content for Story SEO */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200">
        <div className="prose prose-lg prose-slate max-w-none">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why use our Story Downloader?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our specialized Story Saver tool is optimized for speed and privacy. We fetch your stories directly 
            from Instagram’s servers to ensure you get the original high-quality video or photo file in seconds.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mt-16 mb-4">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-700 underline decoration-pink-300">Can I save stories from private accounts?</h4>
              <p className="text-gray-600 text-sm">No. For security and privacy, this tool only works with public Instagram accounts.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-700 underline decoration-purple-300">Does the user know I downloaded their story?</h4>
              <p className="text-gray-600 text-sm">No. Our downloading process is completely anonymous. We don&apos;t require your login or notify the account owner.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}