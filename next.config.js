/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: "banner.onlypaks.com" },
            { protocol: 'https', hostname: 'profile.onlypaks.com' },
            { protocol: 'https', hostname: "images.unsplash.com" },
            { protocol: 'https', hostname: "blur.onlypaks.com" },
            { protocol: 'https', hostname: "video.onlypaks.com" },
        ],
    },
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"]
    }
}

module.exports = nextConfig