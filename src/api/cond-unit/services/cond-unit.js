'use strict';

/**
 * cond-unit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cond-unit.cond-unit');
