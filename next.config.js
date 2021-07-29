// @ts-check
const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ });

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = withMDX({
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  pageExtensions: ['ts', 'tsx', 'mdx'],
  env: {
    // avoid leaking ssr url to client
    GRAPHQL_API_SSR_URL: process.env.GRAPHQL_API_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.net = false;
      config.resolve.fallback.tls = false;
    }
    return config;
  },
});
