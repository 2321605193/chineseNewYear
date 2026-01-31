/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNextIntl(nextConfig);
