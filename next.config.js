/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'demos.creative-tim.com',
        port: '',
      },
      
      {
        protocol: 'https',
        hostname: 'material-taillwind-pro-ct-tailwind-team.vercel.app',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: ''
      }
    ],
  },
};

module.exports = nextConfig
