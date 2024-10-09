module.exports = [
  
  'strapi::errors',
  'strapi::security',
  // {
  //   name: "strapi::security",
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         "connect-src": ["'self'", "https:"],
  //         "script-src": ["https://cdnjs.cloudflare.com"],
  //         "media-src": ["https://cdnjs.cloudflare.com", "https://cidadevivaoffices.urbanpulse.app.br/"],
  //         "img-src": ["https://cdnjs.cloudflare.com", "https://cidadevivaoffices.urbanpulse.app.br/"],
  //       },
  //     },
  //   },
  // },

  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          'script-src': ["'self'", "'unsafe-inline'", 'cdn.jsdelivr.net'],
          'img-src': ["'self'", 'data:', 'cdn.jsdelivr.net', 'strapi.io', 'miniobucket.urbanpulse.app.br'],
        },
      }
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  
];
