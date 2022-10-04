/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "coaching.papareact.com", "www.google.co.uk"]
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
