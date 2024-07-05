'use strict';

/**
 * cond-owner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cond-owner.cond-owner');
