/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    remotePatterns: [
       /*  { protocol: 'https', hostname: "banner.onlypaks.com" },
        { protocol: 'https', hostname: 'profile.onlypaks.com' },
        { protocol: 'https', hostname: "images.unsplash.com" },
        { protocol: 'https', hostname: "blur.onlypaks.com" },
        { protocol: 'https', hostname: "s3.eu-west-1.amazonaws.com" }, */
        { protocol: 'https', hostname: "pub-7b61669726e74ed8854d3eec2863a582.r2.dev" },
        
    ],
},};

export default nextConfig;