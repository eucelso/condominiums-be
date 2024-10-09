module.exports = [
  
  'strapi::errors',
  // 'strapi::security',
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
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://miniobucket.urbanpulse.app.br",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https://miniobucket.urbanpulse.app.br",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': [
  //           "'self'", 
  //           'data:', 
  //           'blob:', 
  //           `https://miniobucket.urbanpulse.app.br`, 
  //           "dl.airtable.com", 
  //           "market-assets.strapi.io",
  //           "cloudflare.com"
  //         ],
  //         'media-src': [
  //           "'self'", 
  //           'data:', 
  //           'blob:', 
  //           `https://miniobucket.urbanpulse.app.br`, 
  //           "dl.airtable.com",
  //           "market-assets.strapi.io"
  //         ],
  //         upgradeInsecureRequests: null,
  //       },
  //     }
  //   },
  // },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  
];
