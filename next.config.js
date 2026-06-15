/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static HTML export for Cloudflare Pages
  trailingSlash: true,     // Cloudflare Pages prefers trailing slashes
  reactStrictMode: true,
  images: {
    unoptimized: true,     // Required for static export (no image optimization server)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
}

module.exports = nextConfig

