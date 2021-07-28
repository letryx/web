// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = {
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  env: {
    GRAPHQL_API_URL: process.env.GRAPHQL_API_URL,
    // avoid leaking ssr url to client
    GRAPHQL_API_SSR_URL: process.env.GRAPHQL_API_URL,
  },
};
