module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-ts-minio',
      providerOptions: {
        accessKey: env('MINIO_ACCESS_KEY'),
        secretKey: env('MINIO_SECRET_KEY'),
        bucket: env('MINIO_BUCKET'),
        endPoint: env('MINIO_ENDPOINT'),
      },
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