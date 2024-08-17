module.exports = ({ env }) => ({
  host: env('HOST', env('HOST')),
  port: env.int('PORT', env('PORT')),
  url: env('PUBLIC_URL', env('PUBLIC_URL')),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
