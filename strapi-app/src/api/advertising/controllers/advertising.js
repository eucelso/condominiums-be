'use strict';

const { parseMultipartData, sanitize } = require('@strapi/utils');

module.exports = {
  async find(ctx) {
    const entities = await strapi.entityService.findMany('api::advertising.advertising', {
      filters: ctx.query.filters,
    });
    return entities.map(entity => sanitize.contentAPI.output(entity, null));
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.findOne('api::advertising.advertising', id);
    return sanitize.contentAPI.output(entity, null);
  },

  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.entityService.create('api::advertising.advertising', { data, files });
    } else {
      entity = await strapi.entityService.create('api::advertising.advertising', {
        data: ctx.request.body,
      });
    }
    return sanitize.contentAPI.output(entity, null);
  },

  async update(ctx) {
    const { id } = ctx.params;
    let entity;
    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.entityService.update('api::advertising.advertising', id, {
        data,
        files,
      });
    } else {
      entity = await strapi.entityService.update('api::advertising.advertising', id, {
        data: ctx.request.body,
      });
    }
    return sanitize.contentAPI.output(entity, null);
  },

  async delete(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.entityService.delete('api::advertising.advertising', id);
    return sanitize.contentAPI.output(entity, null);
  }
};
