import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: "pub-7b61669726e74ed8854d3eec2863a582.r2.dev" },
        ],
    },
};

export default withNextIntl(nextConfig);