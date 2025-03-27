/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  // Set correct basePath for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/Website-for-EpiSafe' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Website-for-EpiSafe/' : '',
  images: {
    unoptimized: true, // Required for static export
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
  trailingSlash: true,
};

export default nextConfig; 