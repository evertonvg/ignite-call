/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: ['static.vecteezy.com', 'lh3.googleusercontent.com'],
  },
}

export default nextConfig
