import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  //basePath: '/ann',
  //assetPrefix: '/ann',
  
  basePath: '/bmilabelapp/ner_annotation_tool',
  assetPrefix: '/bmilabelapp/ner_annotation_tool/',
  //// Configure trailing slash behavior to match nginx
  trailingSlash: true,

  /* config options here */
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
    ],
  },
};

export default nextConfig;
