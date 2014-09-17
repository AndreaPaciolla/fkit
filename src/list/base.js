'use strict';

var fn = require('../fn');

var self;

/**
 * This module defines basic operations on lists.
 *
 * @module list/base
 * @author Josh Bassett
 */
self = module.exports = {
  // Returns an empty monoid.
  mempty: function(as) {
    return (as && typeof as[0] === 'string') ? '' : [];
  },

  // Returns a value in a pure context.
  pure: function(x) {
    return (x && typeof x[0] === 'string') ? x : [x];
  },

  // Converts the list of `as` to an array.
  toArray: function(as) {
    if (typeof as === 'string') {
      return as.split('');
    } else {
      return as;
    }
  },

  /**
   * Appends the value `a` to list of `bs`.
   *
   * @static
   * @curried
   * @function
   * @param {*} a
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  append: fn.curry(function(a, bs) {
    if (typeof bs === 'string') {
      return bs + a;
    } else {
      return bs.concat(a);
    }
  }),

  /**
   * Prepends the value `a` to list of `bs`.
   *
   * @static
   * @curried
   * @function
   * @param {*} a
   * @param {Array|String} bs
   * @returns {Array|String} The result.
   */
  prepend: fn.curry(function(a, bs) {
    if (typeof bs === 'string') {
      return a + bs;
    } else {
      return [a].concat(bs);
    }
  }),

  /**
   * Surrounds the list of `cs` with the values `a` and `b`.
   *
   * @static
   * @curried
   * @function
   * @param {*} a
   * @param {*} b
   * @param {Array|String} cs
   * @returns {Array|String} The result.
   */
  surround: fn.curry(function(a, b, cs) {
    return self.append(b, self.prepend(a, cs));
  }),

  /**
   * Returns the first element in the list of `as`.
   *
   * @param {Array|String} as
   * @returns {*} The result.
   */
  head: function(as) { return as[0]; },

  /**
   * Returns the elements after the first element in the list of `as`.
   *
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  tail: function(as) { return as.slice(1); },

  /**
   * Returns the elements before the last element in the list of `as`.
   *
   * @param {Array|String} as
   * @returns {Array|String} The result.
   */
  init: function(as) { return as.slice(0, as.length - 1); },

  /**
   * Returns the last element in the list of `as`.
   *
   * @param {Array|String} as
   * @returns {*} The result.
   */
  last: function(as) { return as[as.length - 1]; },

  /**
   * Returns the length of the list of `as`.
   *
   * @static
   * @function
   * @param {Array|String} as
   * @returns {number} The length.
   */
  length: function(as) { return as.length; },

  /**
   * Test whether the list of `as` is empty.
   *
   * @param {Array|String} as
   * @returns {boolean} The result.
   */
  empty: function(as) { return as.length === 0; },
};