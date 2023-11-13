/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["127.0.0.1"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
      },
      {
        protocol: "https",
        hostname: "d3t32hsnjxo7q6.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "www.nyxcosmetics.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
      {
        protocol: "https",
        hostname: "www.purpicks.com",
      },
      {
        protocol: "https",
        hostname: "www.clinique.com",
      },
      {
        protocol: "https",
        hostname: "www.dior.com",
      },
      {
        protocol: "http",
        hostname: "imancosmetics.com",
      },
      {
        protocol: "https",
        hostname: "www.clinique.com",
      },
      {
        protocol: "https",
        hostname: "static-assets.glossier.com",
      },
      {
        protocol: "https",
        hostname: "www.smashbox.com",
      },
      {
        protocol: "https",
        hostname: "www.benefitcosmetics.com",
      },
    ],
  },
};

module.exports = nextConfig;
