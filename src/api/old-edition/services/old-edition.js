'use strict';

/**
 * old-edition service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::old-edition.old-edition');
