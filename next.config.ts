
import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingRoot: join(__dirname, '..'),
  experimental: {
    serverActions: {
      allowedOrigins: [
        '*.google.com',
        '*.firebase.app',
        '*.cloud.run',
        'localhost:9002',
        'iknowhust.online'
      ],
    },
  },
  serverExternalPackages: ['!raw-loader'],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'news.hust.edu.cn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bkimg.cdn.bcebos.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tse1.mm.bing.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
