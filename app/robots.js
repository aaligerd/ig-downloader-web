export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Protects your backend logic from crawl waste
    },
    sitemap: 'https://subhrodev.cloud/sitemap.xml',
  }
}