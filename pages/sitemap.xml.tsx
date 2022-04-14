import { GetServerSideProps } from "next"

const Sitemap = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
 const sitemap = 
    `<urlset 
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    >
      <url>
        <loc>https://terminal-m31.ru/</loc>
        <priority>1</priority>
        <changefreq>always</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/o-nas</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/uslugi</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/proekti</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/nashi-partneri</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/contact</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/uslugi/stroitelstvo-domov</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>http://terminal-m31.ru/uslugi/elektromontazhnie-raboti</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/uslugi/santehnicheskie-raboti</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/uslugi/vnutrennyaya-otdelka</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/uslugi/blagoustroistvo</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
      <url>
        <loc>https://terminal-m31.ru/uslugi/dizainerskie-resheniya</loc>
        <priority>0.5</priority>
        <changefreq>hourly</changefreq>
      </url>
    </urlset>
  `
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap