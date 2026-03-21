export const metadata = {
  title: 'Terms of Service - ReelsFast',
  description: 'Terms and conditions for using ReelsFast Instagram Downloader. Please read our usage rules and legal disclaimers.',
};

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20  bg-amber-50 text-gray-800 leading-relaxed">
      <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-10 italic">Effective Date: March 21, 2026</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-600">1. Acceptance of Terms</h2>
          <p>
            By accessing and using <strong>ReelsFast</strong> (subhrodev.cloud), you agree to be bound by these 
            Terms of Service. If you do not agree with any part of these terms, you must immediately 
            discontinue use of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-600">2. Description of Service</h2>
          <p>
            ReelsFast provides a technical interface that allows users to access and download media 
            publicly available on Instagram. Our service acts solely as a technical tool and does 
            not host, store, or redistribute any content.
          </p>
        </section>

        <section className="bg-gray-50 p-6 rounded-xl border-l-4 border-pink-500">
          <h2 className="text-2xl font-bold mb-4">3. Intellectual Property & Fair Use</h2>
          <p className="mb-4">
            Users must respect the intellectual property rights of content creators. You agree that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You will only download content for <strong>personal, non-commercial use</strong>.</li>
            <li>You will not use our tool to violate the copyrights or trademarks of third parties.</li>
            <li>You are solely responsible for obtaining permission from the original owner before re-uploading or sharing downloaded media.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-600">4. Prohibited Conduct</h2>
          <p>You agree not to use ReelsFast to:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Violate any local, state, or international laws.</li>
            <li>Interfere with the security or operation of the website.</li>
            <li>Attempt to scrape or mass-download data using automated scripts without authorization.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-600">5. Disclaimer of Warranties</h2>
          <p>
            ReelsFast is provided on an <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS AVAILABLE&quot;</strong> basis. 
            We do not guarantee that the service will be uninterrupted, error-free, or compatible with 
            future changes to Instagram&apos;s platform. We are not liable for any technical failures or 
            loss of data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-pink-600">6. Limitation of Liability</h2>
          <p>
            In no event shall subhrodev.cloud or its operators be liable for any damages arising 
            from the use or inability to use the service, including but not limited to legal issues 
            resulting from copyright infringement by the user.
          </p>
        </section>

        <section className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the site 
            following any changes constitutes your acceptance of the new Terms of Service.
          </p>
        </section>
      </div>
    </main>
  );
}