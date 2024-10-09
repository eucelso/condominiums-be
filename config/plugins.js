module.exports = ({ env }) => ({
  'upload': {
    provider: 'strapi-provider-upload-ts-minio',
    providerOptions: {
      accessKey: env('MINIO_ACCESS_KEY', "0HOCICVCQebuv4iO3RjI"),
      secretKey: env('MINIO_SECRET_KEY', "LmVeLXuNtjPNcBvvOd1IjkLTX6U4VynLyWCbdHOh"),
      bucket: env('MINIO_BUCKET', "cidade-viva-offices"),
      endPoint: env('MINIO_ENDPOINT', "https://miniobucket.urbanpulse.app.br"),
      port: parseInt(env("MINIO_PORT", 9001), 10) || 9001,
      useSSL: env("MINIO_USE_SSL", false),
      folder: "condominos",
      isDocker: true,
      host: env("MINIO_HOST", "https://miniobucket.urbanpulse.app.br:9001")
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