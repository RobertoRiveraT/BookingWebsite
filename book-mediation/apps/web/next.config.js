const { composePlugins, withNx } = require('@nx/next');

/** @type {import('@nx/next/plugins/with-nx').WithNxOptions} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
  },
  nx: {},
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
