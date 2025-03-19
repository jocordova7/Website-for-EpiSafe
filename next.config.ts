import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Website-for-EpiSafe'; // Updated to match the GitHub repository name

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization for static export
  },
  assetPrefix: isProd ? `/${repoName}/` : '',
  basePath: isProd ? `/${repoName}` : '',
  output: 'export',
  eslint: {
    // Disable ESLint during production builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
