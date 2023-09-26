/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  env: {
    MICROSOFT_CLIENT_ID: process.env.MICROSOFT_CLIENT_ID,
    MICROSOFT_AUTHORITY: process.env.MICROSOFT_AUTHORITY,
    MICROSOFT_REDIRECT_URI: process.env.MICROSOFT_REDIRECT_URI,
    BACKEND_ENDPOINT_API: process.env.BACKEND_ENDPOINT_API
  },
  trailingSlash: false,
  async rewrites() {
    return [{
      source: '/:path*',
      destination: `${process.env.BACKEND_ENDPOINT_API}/*`,
    }, ]
  },
  async redirects() {
    return [];
  }
}

module.exports = nextConfig