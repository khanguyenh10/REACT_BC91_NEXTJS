//tạo site map
const config = {
    siteUrl: "https://shoesstorebc91.vercel.app",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin'],
            },
        ],
    },
    exclude: ['/admin/*', '/login', '/register'], // Loại bỏ các đường dẫn khỏi sitemap
    changefreq: "daily",
    priority: 0.7,
    sitemapSize: 50000,
    outDir: './public',
}

module.exports = config;
