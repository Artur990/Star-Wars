/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: '/api/:path*', // Zmieniono na lokalną ścieżkę
  //     },
  //   ]
  // },
}

module.exports = nextConfig
