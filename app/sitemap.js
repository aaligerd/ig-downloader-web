export default function sitemap() {
  const baseUrl = 'https://subhrodev.cloud';
  
  // Static date for pages that don't change often
  const staticDate = new Date().toISOString(); 

  return [
    // 1. The Main Video Downloader (Primary SEO Target)
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // 2. Specialized Downloader Pages (Targeting niche SEMrush keywords)
    {
      url: `${baseUrl}/instagram-story-downloader`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },

    // 3. Informational & Trust Pages
    {
      url: `${baseUrl}/about`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    // 4. Legal Pages (AdSense Requirements)
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: staticDate,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];
}