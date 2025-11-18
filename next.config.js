/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio-website',
    assetPrefix: '/portfolio-website/',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
