/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
}
