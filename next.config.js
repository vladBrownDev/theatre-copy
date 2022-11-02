const { i18n } = require("./next-i18next.config")

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.STRAPI_DOMAIN]
  }
}

module.exports = nextConfig
