/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  // Set correct basePath for GitHub Pages deployment without trailing slash
  basePath: process.env.NODE_ENV === 'production' ? '/Website-for-EpiSafe' : '',
  // Asset prefix with trailing slash
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Website-for-EpiSafe/' : '',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Needed for static export
  trailingSlash: true,
};

export default nextConfig; 