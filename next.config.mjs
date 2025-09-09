// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cdnfs.optigoapps.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
