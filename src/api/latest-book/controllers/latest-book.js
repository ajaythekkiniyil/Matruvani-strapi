'use strict';

/**
 * latest-book controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::latest-book.latest-book');
