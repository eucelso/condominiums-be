const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql2',
    connection: {
      host: env('DATABASE_HOST', '162.241.2.240'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'urbanp23_cidadevivaoffices_db'),
      user: env('DATABASE_USERNAME', 'urbanp23_cidadevivaoffices'),
      password: env('DATABASE_PASSWORD', 'FideliO@2386'),
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
  },
});
