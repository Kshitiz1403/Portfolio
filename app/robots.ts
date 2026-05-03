import config from '@/site.config'

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${config.site.url}/sitemap.xml`,
  }
}
