import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              ReelsFast
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              The premier tool for high-speed Instagram content downloading. 
              Safe, fast, and always free for the community on subhrodev.cloud.
            </p>
          </div>

          {/* Quick Links (SEO Boost) */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-pink-600 transition">Instagram Downloader</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-pink-600 transition">How to Use</Link>
              </li>
              <li>
                <Link href="mailto:workingsubhro@gmail.com" className="hover:text-pink-600 transition">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Legal Section (Required for AdSense) */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Legal & Privacy</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-pink-600 transition">About Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-pink-600 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-pink-600 transition">Terms of Service</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-pink-600 transition">Disclaimer</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} ReelsFast by subhrodev.cloud. Not affiliated with Instagram or Meta.
          </p>
          
          <div className="flex gap-6">
            <span className="text-xs text-gray-400">100% Safe & Secure</span>
            <span className="text-xs text-gray-400">No Login Required</span>
          </div>
        </div>
      </div>
    </footer>
  );
}