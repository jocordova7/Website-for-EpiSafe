/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  // For GitHub Pages, we'll handle basePath and assetPrefix differently
  // by using the folder structure
  basePath: '',
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