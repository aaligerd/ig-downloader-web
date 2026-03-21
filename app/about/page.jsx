export const metadata = {
  title: 'About Us - ReelsFast',
  description: 'Learn about ReelsFast, the fastest and most secure Instagram video downloader tool on subhrodev.cloud.',
};

export default function AboutUs() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20  bg-amber-50 text-gray-800">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Our Story
        </h1>
        <p className="text-gray-500 text-lg">Making social media content accessible for everyone.</p>
      </div>

      <div className="prose prose-slate max-w-none space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is ReelsFast?</h2>
          <p className="leading-relaxed">
            <strong>ReelsFast</strong> is a high-performance web utility hosted on <strong>subhrodev.cloud</strong>. 
            Our mission is simple: to provide a seamless, high-speed, and secure way for users to save 
            their favorite Instagram memories—be it Reels, Stories, or Videos—directly to their devices 
            without the need for complex software or account logins.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Our Vision</h3>
            <p className="text-sm text-gray-600">
              We believe in a web where tools are fast, free, and privacy-focused. We aim to be the most 
              reliable destination for Instagram content saving in 2026.
            </p>
          </div>
          <div className="bg-pink-50 p-8 rounded-2xl border border-pink-100">
            <h3 className="text-xl font-bold text-pink-700 mb-2">Our Tech</h3>
            <p className="text-sm text-gray-600">
              Built using <strong>Next.js</strong> and <strong>Node.js</strong>, ReelsFast is optimized 
              for speed and efficiency, ensuring high-quality MP4 downloads in seconds.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Why We Built This</h2>
          <p className="leading-relaxed">
            In the fast-paced world of social media, great content often disappears or becomes hard to find 
            later. We noticed that many existing downloaders were cluttered with intrusive ads, required 
            shady logins, or simply didn&apos;t work on mobile. 
          </p>
          <p className="mt-4 leading-relaxed">
            That&apos;s why we created ReelsFast—a clean, user-centric alternative that prioritizes 
            <strong> privacy</strong> and <strong>user experience</strong>.
          </p>
        </section>

        <section className="border-t pt-10 text-center">
          <h2 className="text-2xl font-bold mb-4">Meet the Developer</h2>
          <p className="max-w-xl mx-auto text-gray-600">
            ReelsFast is maintained by the team at <strong>subhrodev.cloud</strong>. We are a group of 
            passionate developers dedicated to building small but powerful tools that make the internet 
            a little bit easier to navigate.
          </p>
          <div className="mt-8">
            <a 
              href="mailto:workingsubhro@gmail.com" 
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}