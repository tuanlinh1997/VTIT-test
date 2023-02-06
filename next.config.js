/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n.config");
const nextConfig = {
  i18n,

  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
  serverRuntimeConfig: {
    secret:
      "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = nextConfig;
