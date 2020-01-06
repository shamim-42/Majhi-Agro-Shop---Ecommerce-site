'use strict';

/**
 * Deepcategory.js controller
 *
 * @description: A set of functions called "actions" for managing `Deepcategory`.
 */

module.exports = {

  /**
   * Retrieve deepcategory records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.deepcategory.search(ctx.query);
    } else {
      return strapi.services.deepcategory.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a deepcategory record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.deepcategory.fetch(ctx.params);
  },

  /**
   * Count deepcategory records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.deepcategory.count(ctx.query, populate);
  },

  /**
   * Create a/an deepcategory record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.deepcategory.add(ctx.request.body);
  },

  /**
   * Update a/an deepcategory record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.deepcategory.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an deepcategory record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.deepcategory.remove(ctx.params);
  }
};
