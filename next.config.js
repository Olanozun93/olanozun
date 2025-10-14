/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['localhost'],
    unoptimized: true, // For static exports if needed
  },
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
    ]
  },
  // Enable static exports for best performance
  output: 'standalone',
  // Compress responses
  compress: true,
}

module.exports = nextConfig