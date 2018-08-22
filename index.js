'use strict';
var finder = require('./lib/finder');
/**
 * Adds commas to a number
 * @param {array} objArray
 * @param {string} key
 * @param {string} keyValue
 * @return {Object}
 */
module.exports = function findObjectByProp(objArray, key, keyValue) {
  return objArray.find(function (obj) {
    return finder(obj, key, keyValue);
  });
};