export const metadata = {
  title: 'Privacy Policy - ReelsFast',
  description: 'Privacy Policy for ReelsFast. Learn how we handle your data and our commitment to user privacy.',
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 bg-amber-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8 font-medium">Last Updated: March 21, 2026</p>

      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-purple-600">1. Introduction</h2>
          <p>
            Welcome to <strong>ReelsFast</strong> (accessible via subhrodev.cloud). We value your privacy. 
            This Privacy Policy explains how we collect, use, and protect your information when you use our 
            Instagram video downloading service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-purple-600">2. No Personal Data Collection</h2>
          <p>
            ReelsFast is designed to be a &quot;No-Login&quot; utility. We <strong>do not collect</strong> personally identifiable 
            information (PII) such as your name, email address, or phone number. We do not require you to link 
            your Instagram account to our service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-purple-600">3. Data Usage & Cookies</h2>
          <p>
            We use standard log files and cookies to improve user experience. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li><strong>Technical Logs:</strong> IP addresses, browser types, and timestamps are logged for security and rate-limiting purposes.</li>
            <li><strong>Cookies:</strong> We use cookies to remember your preferences and for site analytics.</li>
          </ul>
        </section>

        <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">4. Google AdSense & Third-Party Advertising</h2>
          <p>
            We use third-party advertising companies, including <strong>Google AdSense</strong>, to serve ads when you visit our website. 
            These companies may use information about your visits to this and other websites in order to provide 
            advertisements about goods and services of interest to you.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Google, as a third-party vendor, uses cookies to serve ads on our site.</li>
            <li>Google&apos;s use of the advertising cookie enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.</li>
            <li>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" className="text-blue-600 underline">Google Ad Settings</a>.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-purple-600">5. Content Ownership</h2>
          <p>
            ReelsFast does not host any downloaded content on its servers. All videos and images are fetched 
            directly from Instagram&apos;s servers at the user&apos;s request. Users are responsible for ensuring 
            they have the legal right to download and use the content they process through our tool.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-purple-600">6. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, you may contact us at: 
            <br />
            <strong>Email:</strong> workingsubhro@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}