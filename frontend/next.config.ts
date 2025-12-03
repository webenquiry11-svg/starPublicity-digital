import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  
  // Add this section to allow Unsplash images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // ... rest of your config
};

export default nextConfig;