/** @type {import("next").NextConfig} */
const config = {
  serverRuntimeConfig: {
    test: process.env.TEST_VALUE,
  },
  publicRuntimeConfig: {
    publicTest: process.env.TEST_VALUE,
  },
  reactStrictMode: true,
  output: "standalone",
};

module.exports = config;
