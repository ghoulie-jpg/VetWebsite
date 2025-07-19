/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],
    // Add device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Add image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Enable compression for better performance
  compress: true,
}

module.exports = nextConfig 