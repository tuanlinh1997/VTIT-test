/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");
const nextConfig = {
  i18n,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
