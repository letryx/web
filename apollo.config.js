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
      'lib/**/*.ts',
      'pages/**/*.tsx',
      'components/**/*.tsx',
    ],
    excludes: ['**/generated/**', '**/node_modules/**'],
  },
};
