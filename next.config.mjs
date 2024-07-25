/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    ppr: 'incremental', // Partial Prerendering
  },
};

export default nextConfig;
