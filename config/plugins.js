module.exports = ({ env }) => ({
  'upload': {
    // provider: 'strapi-provider-upload-ts-minio',
    provider: 'strapi-provider-upload-minio-ce',
    providerOptions: {
      accessKey: env('MINIO_ACCESS_KEY', "0HOCICVCQebuv4iO3RjI"),
      secretKey: env('MINIO_SECRET_KEY', "LmVeLXuNtjPNcBvvOd1IjkLTX6U4VynLyWCbdHOh"),
      bucket: env('MINIO_BUCKET', "cidade-viva-offices"),
      endPoint: env('MINIO_ENDPOINT', "miniobucket.urbanpulse.app.br"),
      port: env("MINIO_PORT", 9001),
      useSSL: env("MINIO_USE_SSL", true),
      private: env('MINIO_PRIVATE', false),
      folder: "condominos",
      isDocker: true,
    },
  },
 'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms : {
        wrapBodyWithDataKey: true
      },
      plugins: {
        ids: {
          'slugify': true,
        }
      }
    }
  },
});