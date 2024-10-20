/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/image/upload/**',
      }
    ],
    domains: ["res.cloudinary.com"]
  },
  experimental: {
    images: {
        allowFutureImage: true
    }
  },

}
