const path = require('path');

module.exports = {
  client: {
    service: {
      name: 'letryx',
      localSchemaFile: path.resolve(
        __dirname,
        'lib/generated/graphql/schema.graphql'
      ),
    },
    includes: [
      'lib/**/*.graphql',
      'pages/**/*.{ts, tsx, graphql}',
      'components/**/*.{ts, tsx, graphql}',
    ],
    excludes: ['**/generated/**', '**/node_modules/**'],
  },
};
