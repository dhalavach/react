/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === 'production' ? '/class-components/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/class-components' : '',
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;
