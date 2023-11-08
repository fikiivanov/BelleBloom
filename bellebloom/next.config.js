/** @type {import('next').NextConfig} */
const nextConfig ={
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3t32hsnjxo7q6.cloudfront.net',
        port: '',
        pathname: '/i/**',
      },{
        protocol: 'https',
        hostname: 'www.nyxcosmetics.com',
        port: '',
        pathname: '/dw/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/s/**',
      },
    ],
  },
}


module.exports = nextConfig;
