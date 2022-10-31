'use strict';

/**
 * latest-book service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::latest-book.latest-book');
