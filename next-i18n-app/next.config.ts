import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Permite imágenes de cualquier dominio HTTPS (ideal para pruebas)
      },
      
    ],
  },
};

export default nextConfig;