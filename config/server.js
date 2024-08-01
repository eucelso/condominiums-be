module.exports = ({ env }) => ({
  host: env('HOST', env('APP_HOST')),
  port: env.int('PORT', env('APP_PORT')),
  url: env('PUBLIC_URL', env('PUBLIC_URL')),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
