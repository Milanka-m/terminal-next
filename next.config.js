/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['strapi.po-stroy31.ru'],
  },
}