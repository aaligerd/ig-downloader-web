export const metadata = {
  title: 'Disclaimer - ReelsFast',
  description: 'Legal disclaimer for ReelsFast. Information regarding content ownership, non-affiliation with Instagram, and use of service.',
};

export default function Disclaimer() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 bg-amber-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
      <p className="text-sm text-gray-500 mb-8 font-medium italic">Last Updated: March 21, 2026</p>

      <div className="prose prose-slate max-w-none space-y-10">
        
        {/* Section 1: Non-Affiliation */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-600">1. Non-Affiliation with Instagram</h2>
          <p className="leading-relaxed">
            <strong>ReelsFast</strong> (subhrodev.cloud) is an independent utility tool. We are <strong>not</strong> affiliated, 
            associated, authorized, endorsed by, or in any way officially connected with <strong>Instagram, Meta Platforms, Inc.</strong>, 
            or any of its subsidiaries or its affiliates. The official Instagram website can be found at <a href="https://www.instagram.com" className="text-blue-600 underline">https://www.instagram.com</a>.
          </p>
        </section>

        {/* Section 2: Fair Use Disclaimer */}
        <section className=" p-6 rounded-2xl border border-orange-100">
          <h2 className="text-2xl font-bold mb-4 text-orange-800">2. Fair Use Disclaimer</h2>
          <p className="text-sm leading-relaxed">
            This website provides a service to access and download publicly available content. Under <strong>Section 107 of the Copyright Act</strong>, 
            allowance is made for &quot;fair use&quot; for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. 
            ReelsFast does not encourage the unauthorized distribution or commercial use of copyrighted material. 
            Users are solely responsible for how they use the downloaded content.
          </p>
        </section>

        {/* Section 3: "As Is" Basis */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-600">3. Accuracy of Information</h2>
          <p className="leading-relaxed">
            The information and tools provided on this website are for general information and personal use only. 
            While we strive to keep our downloader functional, we make no representations or warranties of any kind, 
            express or implied, about the completeness, accuracy, or reliability of the tool if Instagram updates its internal API. 
            Any action you take upon the information on this website is strictly at your own risk.
          </p>
        </section>

        {/* Section 4: External Links */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-orange-600">4. External Links</h2>
          <p className="leading-relaxed">
            Our website may contain links to external sites (like Instagram or advertisers) that are not operated by us. 
            We have no control over the content and nature of these external sites and do not imply a recommendation 
            for all the content found on them.
          </p>
        </section>

        {/* Section 5: Consent */}
        <section className="border-t pt-8">
          <p className="text-gray-600 text-sm">
            By using our website, you hereby consent to our disclaimer and agree to its terms. If you require any 
            more information or have any questions about our site&apos;s disclaimer, please feel free to contact 
            us at <strong>workingsubhro@gmail.com</strong>.
          </p>
        </section>
      </div>
    </main>
  );
}