/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: "banner.onlypaks.com" },
            { protocol: 'https', hostname: 'profile.onlypaks.com' },
            { protocol: 'https', hostname: "images.unsplash.com" },
            { protocol: 'https', hostname: "blur.onlypaks.com" },
            { protocol: 'https', hostname: "s3.eu-west-1.amazonaws.com" },
        ],
    },
}

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl(nextConfig);