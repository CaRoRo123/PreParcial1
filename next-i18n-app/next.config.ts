import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'images.dog.ceo', 
      },
      
    ],
  },
};

export default nextConfig;