'use strict';

/**
 * latest-book router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::latest-book.latest-book');
